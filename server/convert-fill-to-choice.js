const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

async function convertFillToChoice() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有填充题（question_type_id = 1）
    const fillBlankQuestions = await connection.getRepository(Question).find({
      where: { questionTypeId: 1 }
    });
    
    console.log(`Found ${fillBlankQuestions.length} fill-blank questions`);
    
    // 计算要转换的数量（一半）
    const convertCount = Math.floor(fillBlankQuestions.length / 2);
    console.log(`Will convert ${convertCount} questions to multiple-choice`);

    let convertedCount = 0;

    // 转换一半的填充题为选择题
    for (let i = 0; i < fillBlankQuestions.length && convertedCount < convertCount; i++) {
      const question = fillBlankQuestions[i];
      
      // 为填充题创建选择题选项
      // 正确答案作为一个选项，其他三个为干扰选项
      const correctAnswer = question.answer;
      
      // 生成干扰选项
      let options = [];
      
      // 根据答案类型生成干扰选项
      if (!isNaN(Number(correctAnswer))) {
        // 数字答案
        const numAnswer = Number(correctAnswer);
        options = [
          correctAnswer,
          (numAnswer + 1).toString(),
          (numAnswer - 1).toString(),
          (numAnswer + 5).toString()
        ];
      } else {
        // 非数字答案
        options = [
          correctAnswer,
          `干扰选项1`,
          `干扰选项2`,
          `干扰选项3`
        ];
      }
      
      // 随机打乱选项顺序
      options = options.sort(() => Math.random() - 0.5);
      
      // 找到正确答案的位置，确定选项字母
      const correctIndex = options.indexOf(correctAnswer);
      const optionLetters = ['A', 'B', 'C', 'D'];
      const correctOption = optionLetters[correctIndex];
      
      // 格式化选项为带字母的格式
      const formattedOptions = options.map((option, index) => `${optionLetters[index]}. ${option}`);
      
      console.log(`\nConverting question ${question.questionId}:`);
      console.log(`Question: ${question.questionBody.substring(0, 50)}...`);
      console.log(`Original answer: ${question.answer}`);
      console.log(`New options: ${formattedOptions}`);
      console.log(`New correct answer: ${correctOption}`);
      
      // 更新问题
      question.questionTypeId = 4; // 4 = multiple-choice
      question.optionsJson = formattedOptions;
      question.answer = correctOption;
      
      await connection.getRepository(Question).save(question);
      console.log('Converted to multiple-choice');
      
      convertedCount++;
    }

    console.log(`\nConverted ${convertedCount} fill-blank questions to multiple-choice`);
    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

convertFillToChoice();
