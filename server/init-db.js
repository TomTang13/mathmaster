const mysql = require('mysql2/promise');

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
    multipleStatements: true
  });

  console.log('Connected to MySQL server');

  const schema = `
    CREATE TABLE IF NOT EXISTS weeks (
      week_id INT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      milestone TEXT,
      status ENUM('green', 'yellow', 'red') DEFAULT 'red',
      is_locked BOOLEAN DEFAULT TRUE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS key_knowledge (
      id INT AUTO_INCREMENT PRIMARY KEY,
      week_id INT,
      knowledge_text TEXT NOT NULL,
      difficulty INT,
      target_day INT,
      FOREIGN KEY (week_id) REFERENCES weeks(week_id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS tasks (
      task_id VARCHAR(50) PRIMARY KEY,
      week_id INT,
      day_number INT,
      task_type ENUM('warmup', 'new_knowledge', 'practice', 'review') NOT NULL,
      title VARCHAR(255) NOT NULL,
      duration VARCHAR(50),
      content TEXT,
      is_completed BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (week_id) REFERENCES weeks(week_id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS questions (
      question_id VARCHAR(50) PRIMARY KEY,
      task_id VARCHAR(50),
      question_type VARCHAR(50),
      question_body TEXT NOT NULL,
      answer TEXT NOT NULL,
      options_json JSON,
      explanation TEXT,
      FOREIGN KEY (task_id) REFERENCES tasks(task_id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  await connection.query(schema);
  console.log('Tables created successfully');

  await connection.end();
  console.log('Database initialization completed');
}

initDatabase().catch(console.error);
