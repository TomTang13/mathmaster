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

  // 检查表结构
  const [columns] = await connection.query('DESCRIBE user_login_records');
  console.log('User login records table structure:');
  columns.forEach(column => {
    console.log(`${column.Field}: ${column.Type} ${column.Null === 'NO' ? 'NOT NULL' : ''} ${column.Key}`);
  });

  // 检查数据
  const [rows] = await connection.query('SELECT * FROM user_login_records LIMIT 5');
  console.log('\nSample login records:');
  console.log(rows);

  await connection.end();
}

checkTableStructure().catch(console.error);