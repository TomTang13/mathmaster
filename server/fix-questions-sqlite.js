const sqlite3 = require('sqlite3').verbose();

// 连接数据库
const db = new sqlite3.Database('./db.sqlite');

function fixQuestions() {
  console.log('Starting to fix questions...');

  // 获取所有问题
  db.all('SELECT * FROM questions', (err, questions) => {
    if (err) {
      console.error('Error fetching questions:', err);
      return;
    }

    console.log(`Found ${questions.length} questions`);
    let fixedCount = 0;

    // 检查每个问题
    questions.forEach(question => {
      // 检查是否是计算题但有选择题选项
      const isCalculationQuestion = (
        question.question_body.includes('计算:') ||
        question.question_body.includes('计算：') ||
        question.question_body.includes('求和') ||
        question.question_body.includes('等于') ||
        question.question_body.includes('=') ||
        /\d+[+\-×÷*/]\d+/.test(question.question_body)
      );

      const hasOptions = question.options_json && question.options_json !== 'null' && question.options_json !== '[]';

      if (isCalculationQuestion && hasOptions) {
        console.log(`\nFound calculation question with options:`);
        console.log(`Question ID: ${question.question_id}`);
        console.log(`Question: ${question.question_body}`);
        console.log(`Answer: ${question.answer}`);
        console.log(`Options: ${question.options_json}`);
        console.log(`Question Type ID: ${question.question_type_id}`);

        // 修正：移除选项，设置为填充题类型
        db.run(
          'UPDATE questions SET options_json = NULL, question_type_id = 1 WHERE question_id = ?',
          [question.question_id],
          function(err) {
            if (err) {
              console.error('Error updating question:', err);
            } else {
              console.log('Fixed: Removed options and set to fill-blank type');
              fixedCount++;
            }
          }
        );
      }
    });

    // 关闭数据库连接
    setTimeout(() => {
      console.log(`\nFixed ${fixedCount} questions`);
      db.close();
      console.log('Database connection closed');
    }, 1000);
  });
}

fixQuestions();
