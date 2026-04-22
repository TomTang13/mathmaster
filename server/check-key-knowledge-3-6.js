
const mysql = require('mysql2/promise');

async function checkKeyKnowledge() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 查询id为3,4,5,6的key_knowledge
    const [keyKnowledge] = await connection.query(
      'SELECT * FROM key_knowledge WHERE id IN (?, ?, ?, ?)',
      [3, 4, 5, 6]
    );
    
    console.log('Found key knowledge items:');
    console.table(keyKnowledge);
    
    // 查询question_types
    const [questionTypes] = await connection.query('SELECT * FROM question_types');
    console.log('\nQuestion types:');
    console.table(questionTypes);
    
    // 查询question_difficulties
    const [difficulties] = await connection.query('SELECT * FROM question_difficulties');
    console.log('\nDifficulties:');
    console.table(difficulties);
    
    // 查询tasks表结构，了解现有task的格式
    const [sampleTasks] = await connection.query('SELECT * FROM tasks LIMIT 3');
    console.log('\nSample tasks:');
    console.table(sampleTasks);
    
    // 查询questions表结构
    const [sampleQuestions] = await connection.query('SELECT * FROM questions LIMIT 3');
    console.log('\nSample questions:');
    console.table(sampleQuestions);
    
  } catch (error) {
    console.error('Error checking key knowledge:', error);
  } finally {
    await connection.end();
  }
}

checkKeyKnowledge();
