const { createConnection } = require('typeorm');
const { Question } = require('./src/questions/question.entity');

async function fixQuestions() {
  try {
    // 连接数据库
    const connection = await createConnection({
      type: 'sqlite',
      database: './db.sqlite',
      entities: [Question],
      synchronize: false
    });

    console.log('Connected to database');

    // 获取所有问题
    const questions = await connection.getRepository(Question).find();
    console.log(`Found ${questions.length} questions`);

    let fixedCount = 0;

    // 检查每个问题
    for (const question of questions) {
      // 检查是否是计算题但有选择题选项
      const isCalculationQuestion = (
        question.questionBody.includes('计算:') ||
        question.questionBody.includes('计算：') ||
        question.questionBody.includes('求和') ||
        question.questionBody.includes('等于') ||
        question.questionBody.includes('=') ||
        /\d+[+\-×÷*/]\d+/.test(question.questionBody)
      );

      const hasOptions = question.optionsJson && question.optionsJson.length > 0;

      if (isCalculationQuestion && hasOptions) {
        console.log(`\nFound calculation question with options:`);
        console.log(`Question ID: ${question.questionId}`);
        console.log(`Question: ${question.questionBody}`);
        console.log(`Answer: ${question.answer}`);
        console.log(`Options: ${question.optionsJson}`);
        console.log(`Question Type ID: ${question.questionTypeId}`);

        // 修正：移除选项，设置为填充题类型
        question.optionsJson = null;
        question.questionTypeId = 1; // 1 = fill-blank

        await connection.getRepository(Question).save(question);
        console.log('Fixed: Removed options and set to fill-blank type');
        fixedCount++;
      }
    }

    console.log(`\nFixed ${fixedCount} questions`);
    await connection.close();
    console.log('Database connection closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixQuestions();
