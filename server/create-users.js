const mysql = require('mysql2/promise');

async function createUsersTable() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      current_level INT DEFAULT 1,
      t VARCHAR(500),
      total_score INT DEFAULT 0,
      completed_tasks INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  console.log('Users table created or already exists');

  await connection.query(`INSERT INTO users (username, current_level, t, total_score, completed_tasks) VALUES ('test_user', 1, 'initial_token_string', 0, 0)`);
  console.log('Test user created');

  const [rows] = await connection.query('SELECT * FROM users');
  console.log('Users in database:', rows);

  await connection.end();
  console.log('Done');
}

createUsersTable().catch(console.error);
