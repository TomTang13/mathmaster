const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { QuestionType } = require('./dist/question-types/question-type.entity');

async function checkQuestionTypes() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有题目类型
    const questionTypes = await connection.getRepository(QuestionType).find();
    
    console.log('Question Types:');
    console.log('ID | Type Name | Description');
    console.log('---|-----------|-------------');
    
    questionTypes.forEach(type => {
      console.log(`${type.questionTypeId} | ${type.typeName} | ${type.description || 'N/A'}`);
    });

    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

checkQuestionTypes();
