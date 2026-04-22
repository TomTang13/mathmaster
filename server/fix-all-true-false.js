const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function fixAllTrueFalseQuestions() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有问题
    const allQuestions = await connection.getRepository(Question).find();
    console.log(`Found ${allQuestions.length} questions`);

    let fixedCount = 0;

    // 查找所有判断题（包含"判断"的问题）
    for (const question of allQuestions) {
      if (question.questionBody.includes('判断：') || question.questionBody.includes('判断:')) {
        console.log(`\nFixing true-false question ${question.questionId}:`);
        console.log(`Question: ${question.questionBody}`);
        console.log(`Current options: ${question.optionsJson}`);
        console.log(`Current questionTypeId: ${question.questionTypeId}`);
        
        // 设置正确的选项和类型
        question.optionsJson = ['正确', '错误'];
        question.questionTypeId = 3; // 3 = true-false
        await connection.getRepository(Question).save(question);
        console.log('Fixed: set options to ["正确", "错误"] and questionTypeId to 3');
        fixedCount++;
      }
    }

    console.log(`\nFixed ${fixedCount} true-false questions`);
    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllTrueFalseQuestions();
