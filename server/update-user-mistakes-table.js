const mysql = require('mysql2/promise');

async function updateUserMistakesTable() {
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

    // 添加hidden字段
    const addHiddenFieldSql = `
      ALTER TABLE user_mistakes
      ADD COLUMN hidden BOOLEAN NOT NULL DEFAULT FALSE
    `;
    await connection.execute(addHiddenFieldSql);
    console.log('已添加hidden字段');

    // 添加回顾练习时间和完成状态字段
    const addReviewFieldsSql = `
      ALTER TABLE user_mistakes
      ADD COLUMN review1_time DATETIME NULL,
      ADD COLUMN review1_completed BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN review2_time DATETIME NULL,
      ADD COLUMN review2_completed BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN review3_time DATETIME NULL,
      ADD COLUMN review3_completed BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN review4_time DATETIME NULL,
      ADD COLUMN review4_completed BOOLEAN NOT NULL DEFAULT FALSE
    `;
    await connection.execute(addReviewFieldsSql);
    console.log('已添加回顾练习字段');

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
updateUserMistakesTable();
