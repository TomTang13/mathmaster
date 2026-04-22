const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function executeSqlFile() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 读取SQL文件
    const sqlFilePath = path.join(__dirname, 'design-learning-system.sql');
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
    
    // 执行SQL语句
    const statements = sqlContent.split(';').filter(s => s.trim());
    
    for (const statement of statements) {
      await connection.query(statement);
      console.log('Executed statement');
    }
    
    console.log('Learning system tables created successfully!');
  } catch (error) {
    console.error('Error executing SQL file:', error);
  } finally {
    await connection.end();
  }
}

executeSqlFile();
