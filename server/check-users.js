const mysql = require('mysql2/promise');

async function checkUsers() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  const [rows] = await connection.query('SELECT id, username, t, current_level FROM users');
  console.log('Users in database:', rows);

  await connection.end();
}

checkUsers().catch(console.error);
