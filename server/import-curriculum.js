const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// 读取并解析 curriculum.ts 文件
function loadCurriculumData() {
  const filePath = path.join(__dirname, '../src/data/curriculum.ts');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 提取 CURRICULUM_DATA 数组
  const dataMatch = content.match(/export const CURRICULUM_DATA: WeekPlan\[\] = (\[[\s\S]*?\]);/);
  if (!dataMatch) {
    throw new Error('Could not find CURRICULUM_DATA in curriculum.ts');
  }
  
  let dataStr = dataMatch[1]
    .replace(/WeekPlan\[\]/g, '')
    .replace(/: WeekPlan/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '') // 移除注释
    .replace(/\/\/.*$/gm, '') // 移除单行注释
    .replace(/\n/g, ' ') // 移除换行
    .replace(/\s+/g, ' ') // 压缩空白
    .replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '"$1":') // 给键加引号
    .replace(/'([^']*)'/g, '"$1"') // 单引号转双引号
    .replace(/([^\\])\"/g, '$1"') // 处理转义
    .replace(/\btrue\b/g, 'true') // 保持布尔值
    .replace(/\bfalse\b/g, 'false');
  
  // 修复 JSON 语法
  dataStr = dataStr
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']');
  
  return JSON.parse(dataStr);
}

const CURRICULUM_DATA = loadCurriculumData();

async function importCurriculumData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 创建表结构
    await createTables(connection);
    
    // 导入数据
    await importData(connection);
    
    console.log('Curriculum data imported successfully!');
  } catch (error) {
    console.error('Error importing curriculum data:', error);
  } finally {
    await connection.end();
  }
}

async function createTables(connection) {
  // 创建周计划表
  await connection.query(`
    CREATE TABLE IF NOT EXISTS week_plans (
      id INT AUTO_INCREMENT PRIMARY KEY,
      week INT NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      milestone VARCHAR(255),
      status VARCHAR(50),
      is_locked BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  // 创建关键知识点表
  await connection.query(`
    CREATE TABLE IF NOT EXISTS key_knowledge (
      id INT AUTO_INCREMENT PRIMARY KEY,
      week_id INT NOT NULL,
      text TEXT NOT NULL,
      difficulty INT,
      day INT,
      FOREIGN KEY (week_id) REFERENCES week_plans(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  // 创建任务表
  await connection.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id VARCHAR(50) PRIMARY KEY,
      week_id INT NOT NULL,
      day INT NOT NULL,
      type VARCHAR(50) NOT NULL,
      title VARCHAR(255) NOT NULL,
      duration VARCHAR(50),
      is_completed BOOLEAN DEFAULT FALSE,
      content TEXT NOT NULL,
      FOREIGN KEY (week_id) REFERENCES week_plans(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  // 创建问题表
  await connection.query(`
    CREATE TABLE IF NOT EXISTS questions (
      id VARCHAR(50) PRIMARY KEY,
      task_id VARCHAR(50) NOT NULL,
      type VARCHAR(50) NOT NULL,
      question TEXT NOT NULL,
      answer VARCHAR(255) NOT NULL,
      options TEXT,
      explanation TEXT,
      FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  console.log('Tables created successfully');
}

async function importData(connection) {
  for (const weekPlan of CURRICULUM_DATA) {
    // 插入周计划
    const [weekResult] = await connection.query(
      'INSERT INTO week_plans (week, title, description, milestone, status, is_locked) VALUES (?, ?, ?, ?, ?, ?)',
      [weekPlan.week, weekPlan.title, weekPlan.description, weekPlan.milestone, weekPlan.status, weekPlan.isLocked]
    );
    
    const weekId = weekResult.insertId;
    
    // 插入关键知识点
    for (const knowledge of weekPlan.keyKnowledge) {
      await connection.query(
        'INSERT INTO key_knowledge (week_id, text, difficulty, day) VALUES (?, ?, ?, ?)',
        [weekId, knowledge.text, knowledge.difficulty, knowledge.day]
      );
    }
    
    // 插入任务
    for (const [day, tasks] of Object.entries(weekPlan.days)) {
      for (const task of tasks) {
        await connection.query(
          'INSERT INTO tasks (id, week_id, day, type, title, duration, is_completed, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [task.id, weekId, parseInt(day), task.type, task.title, task.duration, task.isCompleted, task.content]
        );
        
        // 插入问题
        if (task.questions) {
          for (const question of task.questions) {
            await connection.query(
              'INSERT INTO questions (id, task_id, type, question, answer, options, explanation) VALUES (?, ?, ?, ?, ?, ?, ?)',
              [question.id, task.id, question.type, question.question, question.answer, JSON.stringify(question.options), question.explanation]
            );
          }
        }
      }
    }
    
    console.log(`Imported week ${weekPlan.week}: ${weekPlan.title}`);
  }
}

importCurriculumData();
