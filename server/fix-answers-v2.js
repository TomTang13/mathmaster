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
    // 查询所有 knowledge_id >= 7 的选择题题目
    console.log('=== 查询 knowledge_id >= 7 的选择题题目 ===');
    const [questions] = await connection.execute(
      `SELECT * FROM questions WHERE knowledge_id >= 7 AND question_type_id = 2 ORDER BY knowledge_id, order_index`
    );

    console.log(`找到 ${questions.length} 条选择题需要修正答案\n`);

    let fixedCount = 0;

    for (const question of questions) {
      console.log(`处理题目: ${question.question_id}`);
      console.log(`原答案: ${question.answer}`);
      console.log(`选项: ${question.options_json}`);

      // 解析选项 - 处理非标准JSON格式
      let options;
      const optionsStr = question.options_json;

      // 尝试解析为JSON数组
      try {
        options = JSON.parse(optionsStr);
      } catch (e) {
        // 如果解析失败，手动分割选项
        // 格式可能是：A. 105,B. 101,C. 100,D. 99
        const optionMatches = optionsStr.match(/[A-D]\.\s*[^A-D]*/g);
        if (optionMatches) {
          options = optionMatches.map(opt => opt.trim());
        }
      }

      if (!options || !Array.isArray(options)) {
        console.log('选项解析失败，跳过\n');
        continue;
      }

      const currentAnswer = question.answer.trim();
      let newAnswer = null;

      // 遍历选项，找到与答案匹配的选项字母
      for (let i = 0; i < options.length; i++) {
        const optionText = options[i].replace(/^[A-D]\.\s*/, '').trim().toLowerCase();
        const answerText = currentAnswer.toLowerCase();

        // 直接匹配选项内容
        if (optionText === answerText ||
            optionText.includes(answerText) ||
            answerText.includes(optionText)) {
          newAnswer = String.fromCharCode(65 + i); // A, B, C, D
          console.log(`匹配成功: 选项 ${String.fromCharCode(65 + i)}: ${options[i]}`);
          break;
        }
      }

      // 如果没找到精确匹配，尝试部分匹配
      if (!newAnswer) {
        for (let i = 0; i < options.length; i++) {
          const optionText = options[i].replace(/^[A-D]\.\s*/, '').trim();
          // 检查答案是否是选项的一部分
          if (optionText.includes(currentAnswer) || currentAnswer.includes(optionText)) {
            newAnswer = String.fromCharCode(65 + i);
            console.log(`部分匹配成功: 选项 ${String.fromCharCode(65 + i)}: ${options[i]}`);
            break;
          }
        }
      }

      if (newAnswer) {
        console.log(`更新答案: ${question.answer} -> ${newAnswer}`);
        await connection.execute(
          'UPDATE questions SET answer = ? WHERE question_id = ?',
          [newAnswer, question.question_id]
        );
        fixedCount++;
      } else {
        console.log('无法匹配答案');
      }
      console.log('');
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