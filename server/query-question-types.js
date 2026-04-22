const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');

async function queryQuestionTypes() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 直接执行 SQL 查询，使用正确的字段名
    const questionTypes = await connection.query('SELECT id, type_name, description FROM question_types');
    
    console.log('Question Types:');
    console.log('ID | Type Name | Description');
    console.log('---|-----------|-------------');
    
    questionTypes.forEach(type => {
      console.log(`${type.id} | ${type.type_name} | ${type.description || 'N/A'}`);
    });

    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

queryQuestionTypes();
