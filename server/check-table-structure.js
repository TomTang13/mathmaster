const mysql = require('mysql2/promise');

async function checkTableStructure() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 检查 key_knowledge 表结构
    const [columns] = await connection.query('DESCRIBE key_knowledge');
    console.log('key_knowledge table structure:');
    console.table(columns);
  } catch (error) {
    console.error('Error checking table structure:', error);
  } finally {
    await connection.end();
  }
}

checkTableStructure();
