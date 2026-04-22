const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

async function fixAnswers() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 查询所有 knowledge_id >= 7 的题目
    console.log('=== 查询 knowledge_id >= 7 的题目 ===');
    const [questions] = await connection.execute(
      `SELECT * FROM questions WHERE knowledge_id >= 7 AND question_type_id = 2 ORDER BY knowledge_id, order_index`
    );

    console.log(`找到 ${questions.length} 条题目需要修正答案`);

    let fixedCount = 0;

    for (const question of questions) {
      console.log(`\n处理题目: ${question.question_id}`);
      console.log(`原答案: ${question.answer}`);
      console.log(`选项: ${question.options_json}`);

      // 解析选项
      let options;
      try {
        options = JSON.parse(question.options_json);
      } catch (e) {
        console.log('选项解析失败，跳过');
        continue;
      }

      // 找到答案对应的选项索引
      const answerIndex = options.findIndex(opt =>
        opt.toLowerCase().includes(question.answer.toLowerCase()) ||
        question.answer.toUpperCase().includes(opt[0].toUpperCase())
      );

      if (answerIndex !== -1) {
        const optionLetter = String.fromCharCode(65 + answerIndex); // A, B, C, D
        console.log(`新答案: ${optionLetter}`);

        // 更新数据库
        await connection.execute(
          'UPDATE questions SET answer = ? WHERE question_id = ?',
          [optionLetter, question.question_id]
        );
        fixedCount++;
      } else {
        console.log('无法匹配答案，保持原样');
      }
    }

    console.log(`\n=== 修正完成 ===`);
    console.log(`共修正了 ${fixedCount} 条题目的答案`);

  } catch (error) {
    console.error('修正答案时出错:', error);
  } finally {
    await connection.end();
  }
}

fixAnswers();