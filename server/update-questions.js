const { createConnection } = require('typeorm');

async function updateQuestions() {
  try {
    // 创建数据库连接
    const connection = await createConnection({
      type: 'mysql',
      host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: 3306,
      username: 'mathmaster_dev',
      password: 'mathmaster_DEV123!',
      database: 'mathmaster',
      synchronize: false,
    });

    console.log('数据库连接成功');

    // 更新q_1_1_1为选择题
    await connection.query(
      `UPDATE questions
       SET question_type_id = 4,
           question_body = '高斯求和公式 1+2+3+...+n = ?',
           answer = 'A',
           options_json = '["A. n×(n+1)÷2", "B. n×(n-1)÷2", "C. (n+1)÷2", "D. n×(n+1)"]',
           explanation = '高斯求和公式适用于求等差数列的和，首项为1，公差为1。公式为：和=(首项+末项)×项数÷2，即n×(n+1)÷2'
       WHERE question_id = 'q_1_1_1'`
    );
    console.log('已更新题目 q_1_1_1 为选择题');

    // 更新q_1_2_1为选择题
    await connection.query(
      `UPDATE questions
       SET question_type_id = 4,
           question_body = '乘法分配律公式 (a+b)×c = ?',
           answer = 'B',
           options_json = '["A. a×b×c", "B. a×c+b×c", "C. (a×b)+(a×c)", "D. a×(b+c)"]',
           explanation = '乘法分配律是数学中的基本运算律，表示两个数的和与第三个数相乘，等于分别相乘再相加，即(a+b)×c = a×c + b×c'
       WHERE question_id = 'q_1_2_1'`
    );
    console.log('已更新题目 q_1_2_1 为选择题');

    console.log('题目更新完成！');

    await connection.close();
  } catch (error) {
    console.error('更新题目失败:', error);
  }
}

// 运行脚本
updateQuestions();
