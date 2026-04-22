const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function fixTrueFalseOptions() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有判断题（questionTypeId = 3）
    const trueFalseQuestions = await connection.getRepository(Question).find({
      where: { questionTypeId: 3 }
    });
    
    console.log(`Found ${trueFalseQuestions.length} true-false questions`);

    let fixedCount = 0;

    // 为每个判断题设置正确的选项
    for (const question of trueFalseQuestions) {
      console.log(`\nFixing true-false question ${question.questionId}:`);
      console.log(`Question: ${question.questionBody}`);
      console.log(`Current options: ${question.optionsJson}`);
      
      // 设置正确的选项
      question.optionsJson = ['正确', '错误'];
      await connection.getRepository(Question).save(question);
      console.log('Fixed options: ["正确", "错误"]');
      fixedCount++;
    }

    console.log(`\nFixed ${fixedCount} true-false questions`);
    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixTrueFalseOptions();
