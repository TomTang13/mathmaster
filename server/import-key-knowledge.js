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
  
  // 转换为 JavaScript 对象
  const dataStr = dataMatch[1];
  const tempModule = `
    const data = ${dataStr};
    module.exports = data;
  `;
  
  const tempModulePath = path.join(__dirname, 'temp-key-knowledge.js');
  fs.writeFileSync(tempModulePath, tempModule);
  
  const data = require('./temp-key-knowledge');
  fs.unlinkSync(tempModulePath);
  
  return data;
}

async function importKeyKnowledge() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    const curriculumData = loadCurriculumData();
    
    for (const weekPlan of curriculumData) {
      // 获取周计划的 ID
      const [weekResult] = await connection.query(
        'SELECT id FROM week_plans WHERE week = ?',
        [weekPlan.week]
      );
      
      if (weekResult.length === 0) {
        console.warn(`Week ${weekPlan.week} not found in database`);
        continue;
      }
      
      const weekId = weekResult[0].id;
      
      // 插入 keyKnowledge
      for (const knowledge of weekPlan.keyKnowledge) {
        await connection.query(
          'INSERT INTO key_knowledge (week_id, knowledge_text, difficulty, target_day) VALUES (?, ?, ?, ?)',
          [weekId, knowledge.text, knowledge.difficulty, knowledge.day]
        );
      }
      
      console.log(`Imported keyKnowledge for week ${weekPlan.week}`);
    }
    
    console.log('Key knowledge imported successfully!');
  } catch (error) {
    console.error('Error importing key knowledge:', error);
  } finally {
    await connection.end();
  }
}

importKeyKnowledge();
