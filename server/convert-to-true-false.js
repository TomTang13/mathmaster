const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function convertToTrueFalse() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 查找 q_6_4 题目
    const question = await connection.getRepository(Question).findOne({
      where: { questionId: 'q_6_4' }
    });
    
    if (!question) {
      console.log('Question q_6_4 not found');
      await app.close();
      return;
    }

    console.log(`Found question q_6_4:`);
    console.log(`Question: ${question.questionBody}`);
    console.log(`Current type: ${question.questionTypeId}`);
    console.log(`Current answer: ${question.answer}`);
    console.log(`Current options: ${question.optionsJson}`);

    // 转换为判断题
    question.questionTypeId = 3; // 3 = true-false
    question.optionsJson = ['正确', '错误'];
    
    // 确保答案是 "正确" 或 "错误"
    // 检查原问题内容，判断正确答案
    if (question.questionBody.includes('2○3 = 11')) {
      // 计算：2×3+2+3 = 6+5 = 11，所以正确
      question.answer = '正确';
    } else {
      question.answer = '错误';
    }

    await connection.getRepository(Question).save(question);
    console.log('\nConverted to true-false question:');
    console.log(`New type: ${question.questionTypeId}`);
    console.log(`New answer: ${question.answer}`);
    console.log(`New options: ${question.optionsJson}`);

    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

convertToTrueFalse();
