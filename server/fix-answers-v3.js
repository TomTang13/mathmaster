const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

async function fixAnswers() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 查询所有 knowledge_id >= 7 的选择题题目
    console.log('=== 查询 knowledge_id >= 7 的选择题题目 ===');
    const [questions] = await connection.execute(
      `SELECT * FROM questions WHERE knowledge_id >= 7 AND question_type_id = 2 ORDER BY knowledge_id, order_index`
    );

    console.log(`找到 ${questions.length} 条选择题需要修正答案\n`);

    let fixedCount = 0;
    let skipCount = 0;

    for (const question of questions) {
      const currentAnswer = question.answer.trim();
      const optionsStr = String(question.options_json);

      console.log(`\n处理题目: ${question.question_id}`);
      console.log(`原答案: "${currentAnswer}"`);
      console.log(`选项: "${optionsStr}"`);

      // 解析选项字符串，格式为 "A. 选项1,B. 选项2,C. 选项3,D. 选项4"
      const options = [];
      const optionMatches = optionsStr.match(/[A-D]\.\s*([^,A-D]+)/g);

      if (optionMatches) {
        for (const match of optionMatches) {
          const optionText = match.replace(/^[A-D]\.\s*/, '').trim();
          options.push(optionText);
        }
      }

      console.log(`解析后的选项:`, options);

      if (options.length === 0) {
        console.log('无法解析选项，跳过');
        skipCount++;
        continue;
      }

      // 查找匹配的选项
      let newAnswer = null;
      for (let i = 0; i < options.length; i++) {
        const optionText = options[i].toLowerCase().trim();
        const answerText = currentAnswer.toLowerCase().trim();

        if (optionText === answerText ||
            optionText.includes(answerText) ||
            answerText.includes(optionText)) {
          newAnswer = String.fromCharCode(65 + i);
          console.log(`匹配成功: 答案 "${currentAnswer}" 匹配选项 ${newAnswer} "${options[i]}"`);
          break;
        }
      }

      if (newAnswer) {
        console.log(`更新答案: "${currentAnswer}" -> "${newAnswer}"`);
        await connection.execute(
          'UPDATE questions SET answer = ? WHERE question_id = ?',
          [newAnswer, question.question_id]
        );
        fixedCount++;
      } else {
        console.log(`无法匹配答案 "${currentAnswer}" 与选项`);
        skipCount++;
      }
    }

    console.log(`\n=== 修正完成 ===`);
    console.log(`共修正了 ${fixedCount} 条题目的答案`);
    console.log(`跳过了 ${skipCount} 条无法匹配的题目`);

  } catch (error) {
    console.error('修正答案时出错:', error);
  } finally {
    await connection.end();
  }
}

fixAnswers();