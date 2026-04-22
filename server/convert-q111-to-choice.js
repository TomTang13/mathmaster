const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function convertQ111ToChoice() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 查找 q_1_1_1 题目
    const question = await connection.getRepository(Question).findOne({
      where: { questionId: 'q_1_1_1' }
    });
    
    if (!question) {
      console.log('Question q_1_1_1 not found');
      await app.close();
      return;
    }

    console.log(`Found question q_1_1_1:`);
    console.log(`Question: ${question.questionBody}`);
    console.log(`Current type: ${question.questionTypeId}`);
    console.log(`Current answer: ${question.answer}`);
    console.log(`Current options: ${question.optionsJson}`);

    // 转换为选择题（type 2）
    question.questionTypeId = 2; // 2 = multiple-choice
    
    // 为题目创建选项
    const options = [
      'A. 50',
      'B. 55',
      'C. 60',
      'D. 65'
    ];
    
    // 正确答案是 55，对应选项 B
    question.optionsJson = options;
    question.answer = 'B';

    await connection.getRepository(Question).save(question);
    console.log('\nConverted to multiple-choice question (type 2):');
    console.log(`New type: ${question.questionTypeId}`);
    console.log(`New answer: ${question.answer}`);
    console.log(`New options: ${question.optionsJson}`);

    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

convertQ111ToChoice();
