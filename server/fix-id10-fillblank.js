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
    // 先查询需要修复的记录
    const [rows] = await connection.execute(
      `SELECT question_id, question_body, answer 
       FROM question_base 
       WHERE knowledge_id = 10 AND question_type_id = 1 
       AND answer REGEXP '[^0-9]'`
    );
    console.log('需要修复的记录数:', rows.length);
    for (const row of rows) {
      console.log(`ID=${row.question_id}, answer="${row.answer}", body="${row.question_body.substring(0, 40)}..."`);
    }

    // 删除这6条记录并重新插入正确的
    await connection.beginTransaction();

    // 删除非数字答案的填空题
    await connection.execute(
      `DELETE FROM question_base 
       WHERE knowledge_id = 10 AND question_type_id = 1 
       AND answer REGEXP '[^0-9]'`
    );

    // 插入修正后的填空题
    const newQuestions = [
      { question_body: '今天是星期一，再过____天还是星期一。', answer: '7', explanation: '7天是一周，星期一加7天还是星期一。', difficulty_id: 2 },
      { question_body: '一列图形按○△□○△□……排列，周期是____。', answer: '3', explanation: '○△□重复出现，周期为3。', difficulty_id: 2 },
      { question_body: '今天是星期六，再过3天是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '3', explanation: '星期六加3天：日、一、二，是星期二，对应数字3。', difficulty_id: 2 },
      { question_body: '一列图形按★☆★☆……排列，周期是____。', answer: '2', explanation: '★☆重复出现，周期为2。', difficulty_id: 2 },
      { question_body: '今天是星期二，再过30天是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '5', explanation: '30÷7=4余2，星期二加2天是星期四，对应数字5。', difficulty_id: 4 },
      { question_body: '今天是1月1日星期五，1月20日是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '4', explanation: '19÷7=2余5，星期五加5天：六、日、一、二、三，是星期三，对应数字4。', difficulty_id: 4 }
    ];

    for (const q of newQuestions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, null, q.explanation, 10, 1, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log('修复完成，已重新插入6道填空题');

    // 验证
    const [check] = await connection.execute(
      `SELECT COUNT(*) as count FROM question_base 
       WHERE knowledge_id = 10 AND question_type_id = 1 
       AND answer REGEXP '[^0-9]'`
    );
    console.log('修复后非数字答案数量:', check[0].count);

    const [total] = await connection.execute(
      'SELECT COUNT(*) as count FROM question_base WHERE knowledge_id = 10'
    );
    console.log('知识点10总题数:', total[0].count);

  } catch (error) {
    await connection.rollback();
    console.error('修复失败:', error);
  } finally {
    await connection.end();
  }
}

fix();
