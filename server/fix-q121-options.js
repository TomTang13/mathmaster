const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function fixQ121Options() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 查找 q_1_2_1 题目
    const question = await connection.getRepository(Question).findOne({
      where: { questionId: 'q_1_2_1' }
    });
    
    if (!question) {
      console.log('Question q_1_2_1 not found');
      await app.close();
      return;
    }

    console.log(`Found question q_1_2_1:`);
    console.log(`Question: ${question.questionBody}`);
    
    // 为乘法分配律题目创建正确的选项
    const options = [
      'A. a×c+b×c',
      'B. a×b+c×b',
      'C. a+b×c',
      'D. a×b×c'
    ];
    
    // 正确答案是 A
    question.optionsJson = options;
    question.answer = 'A';

    await connection.getRepository(Question).save(question);
    console.log('\nFixed options for q_1_2_1:');
    console.log(`New answer: ${question.answer}`);
    console.log(`New options: ${question.optionsJson}`);

    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixQ121Options();
