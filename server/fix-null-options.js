const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function fixNullOptions() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有问题
    const allQuestions = await connection.getRepository(Question).find();
    console.log(`Found ${allQuestions.length} questions`);

    let fixedCount = 0;

    // 检查每个问题的 options_json
    for (const question of allQuestions) {
      if (question.optionsJson === null || question.optionsJson === undefined) {
        console.log(`\nFixing question ${question.questionId}:`);
        console.log(`Question: ${question.questionBody.substring(0, 50)}...`);
        console.log(`Current options_json: ${question.optionsJson}`);
        
        // 设置为空数组
        question.optionsJson = [];
        await connection.getRepository(Question).save(question);
        console.log('Fixed: set options_json to []');
        fixedCount++;
      }
    }

    console.log(`\nFixed ${fixedCount} questions with null options_json`);
    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixNullOptions();
