const mysql = require('mysql2/promise');

async function createUserMistakesTable() {
  let connection;
  try {
    // 创建数据库连接
    connection = await mysql.createConnection({
      host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: 3306,
      user: 'mathmaster_dev',
      password: 'mathmaster_DEV123!',
      database: 'mathmaster'
    });

    console.log('数据库连接成功');

    // 检查表是否存在
    const checkTableSql = `
      SHOW TABLES LIKE 'user_mistakes';
    `;

    const [rows] = await connection.execute(checkTableSql);
    if (rows.length === 0) {
      // 创建user_mistakes表
      const createTableSql = `
        CREATE TABLE user_mistakes (
          id INT NOT NULL AUTO_INCREMENT,
          user_id INT NOT NULL,
          question_id VARCHAR(255) NOT NULL,
          error_count INT NOT NULL DEFAULT 1,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
          UNIQUE INDEX unique_user_question (user_id, question_id),
          INDEX idx_user_mistakes_user_id (user_id),
          INDEX idx_user_mistakes_question_id (question_id),
          CONSTRAINT fk_user_mistakes_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
          CONSTRAINT fk_user_mistakes_question_id FOREIGN KEY (question_id) REFERENCES questions (question_id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `;

      await connection.execute(createTableSql);
      console.log('user_mistakes表创建成功');
    } else {
      console.log('user_mistakes表已存在');
    }

    // 检查表结构
    const describeTableSql = `
      DESCRIBE user_mistakes;
    `;

    const [columns] = await connection.execute(describeTableSql);
    console.log('表结构:', columns);

  } catch (error) {
    console.error('操作失败:', error);
  } finally {
    if (connection) {
      await connection.end();
      console.log('数据库连接已关闭');
    }
  }
}

// 运行脚本
createUserMistakesTable();
