const mysql = require('mysql2/promise');

async function testDbConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: 3306,
      user: 'mathmaster_dev',
      password: 'mathmaster_DEV123!',
      database: 'mathmaster',
    });

    console.log('Database connection successful!');

    // Test a simple query
    const [rows] = await connection.query('SELECT 1 + 1 as result');
    console.log('Query result:', rows[0].result);

    await connection.end();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

testDbConnection();