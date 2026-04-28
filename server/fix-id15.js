const mysql = require('mysql2/promise');

async function fix() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    // 更新那条记录
    await connection.execute(
      `UPDATE question_base 
       SET question_body = '个位是0或5的数能被____整除。', answer = '5', explanation = '个位是0或5的数能被5整除。'
       WHERE question_id = 498`
    );
    console.log('修复完成');

    // 验证
    const [check] = await connection.execute(
      `SELECT question_id, question_body, answer FROM question_base WHERE question_id = 498`
    );
    console.log('修复后:', check[0]);
  } catch (error) {
    console.error('修复失败:', error);
  } finally {
    await connection.end();
  }
}

fix();
