const mysql = require('mysql2/promise');

async function createLoginRecordsTable() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  // 创建表
  const createTableSql = `
  CREATE TABLE IF NOT EXISTS user_login_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    login_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user_date (user_id, login_date),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  `;
  
  await connection.query(createTableSql);
  console.log('Created user_login_records table successfully');

  // 插入数据
  const insertSql = `
  INSERT IGNORE INTO user_login_records (user_id, login_date) VALUES
  (1, '2026-04-05'),
  (1, '2026-04-06'),
  (1, '2026-04-07'),
  (1, '2026-04-08'),
  (1, '2026-04-09'),
  (1, '2026-04-10'),
  (1, '2026-04-11'),
  (1, '2026-04-12'),
  (1, '2026-04-13'),
  (1, '2026-04-14'),
  (1, '2026-04-15'),
  (1, '2026-04-16'),
  (1, '2026-04-17'),
  (1, '2026-04-18');
  `;
  
  await connection.query(insertSql);
  console.log('Inserted login records successfully');

  // 检查数据
  const [rows] = await connection.query('SELECT COUNT(*) as count FROM user_login_records');
  console.log('Login records count:', rows[0].count);

  // 检查连续登录天数
  const [streakRows] = await connection.query(`
  WITH consecutive_days AS (
    SELECT 
      user_id,
      login_date,
      DATE_SUB(login_date, INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY) as grp
    FROM user_login_records
    WHERE user_id = 1
  ),
  streak_groups AS (
    SELECT 
      user_id,
      grp,
      COUNT(*) as streak
    FROM consecutive_days
    GROUP BY user_id, grp
  )
  SELECT 
    user_id,
    MAX(streak) as max_streak
  FROM streak_groups
  GROUP BY user_id;
  `);
  
  console.log('Consecutive login streak:', streakRows[0]?.max_streak || 0);

  await connection.end();
}

createLoginRecordsTable().catch(console.error);
