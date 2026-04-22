const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { Question } = require('./dist/questions/question.entity');

// 答案映射表
const answerMap = {
  // 综合练习任务 1
  'cq_2_1': '55',     // 1+2+3+4+5+6+7+8+9+10
  'cq_2_2': '100',    // 25×4
  'cq_2_3': '1000',   // 125×8
  'cq_2_4': '300',    // 25×12
  'cq_2_5': '1100',   // (40+4)×25
  'cq_2_6': '500',    // 98+99+100+101+102
  'cq_2_7': '正确',   // 12×25 = 3×(4×25) = 300
  'cq_2_8': '正确',   // (a+b)×c = a×c + b×c
  
  // 综合练习任务 2
  'cq_3_1': '200',    // 45+23+55+77
  'cq_3_2': '100000', // 125×32×25
  'cq_3_3': '100',    // 125-87+75-13
  'cq_3_4': '900',    // 36×25
  'cq_3_5': '253',    // 23×11
  'cq_3_6': '4455',   // 99×45
  'cq_3_7': '正确',   // a-b+c = a+c-b
  'cq_3_8': '正确',   // 25×44 = 25×4×11 = 1100
  
  // 综合练习任务 3
  'cq_4_1': '70',     // 125-(25+30)
  'cq_4_2': '134',    // 234-66-34
  'cq_4_3': '7000',   // 56×125
  'cq_4_4': '267',    // 345-(145-67)
  'cq_4_5': '200',    // 123+45-23+55
  'cq_4_6': '1000000',// 999×999+1999
  'cq_4_7': '错误',   // a-(b-c) = a-b-c
  'cq_4_8': '正确',   // 35×22 = 35×2×11 = 770
  
  // 综合练习任务 4
  'cq_5_1': '2277',   // 99×23
  'cq_5_2': '6993',   // 999×7
  'cq_5_3': '400',    // 567-123+33-77
  'cq_5_4': '11100',  // 99+999+9999+3
  'cq_5_5': '825',    // 888-(188-125)
  'cq_5_6': '33330002',// 9999×2222+3333×3334
  'cq_5_7': '正确',   // 999×a = (1000-1)×a = 1000a - a
  'cq_5_8': '正确',   // a+b-c = a-c+b
  
  // 综合练习任务 5
  'cq_6_1': '10',     // 3★4 = 3×2 + 4
  'cq_6_2': '4554',   // 99×46
  'cq_6_3': '36',     // 5△7 = (5+7)×3
  'cq_6_4': '322',    // 765-(265+178)
  'cq_6_5': '14',     // 2◇5 = 2+3+4+5
  'cq_6_6': '21',     // 4※5 = 4×5 - 4 + 5
  'cq_6_7': '正确',   // 2★3 = 2+3×2 = 8
  'cq_6_8': '正确',   // 999×123 = 123000 - 123 = 122877
  
  // 练习任务 1
  'q_1_1_1': 'n×(n+1)÷2', // 高斯求和公式
  'q_1_1_2': '300',    // 48+97+52+103
  'q_1_1_4': '110',    // 2+4+6+8+...+20
  'q_1_2_1': 'a×c+b×c',// 乘法分配律
  'q_1_2_2': '100',    // 25×4
  'q_1_2_3': '正确',   // 125×8=1000
  'q_1_2_4': '900',    // 36×25
  
  // 练习任务 3
  'q_3_2': '100',     // 123-45+77-55
  'q_3_3': '52',      // 28×13÷7
  
  // 练习任务 4
  'q_4_3': '62',      // 156-(56+38)
  'q_4_4': '错误',    // 234-(134-50) = 234-134-50
  
  // 练习任务 5
  'q_5_1': '4995',    // 999×5
  'q_5_2': '119988',  // 9999×12
  'q_5_3': '1110',    // 999+99+9+3
  'q_5_4': '正确',    // 99×99=9801
  
  // 练习任务 6
  'q_6_1': '11',      // 3★4 = 3+4×2
  'q_6_2': '13',      // 8△(5△2) = 8△(5×3-2) = 8△13 = 8×3-13
  'q_6_3': '18',      // 3⊕6 = 3+4+5+6
  'q_6_4': '正确',    // 2○3 = 2×3+2+3 = 11
  
  // 复习任务 4
  'r4_1': '210',      // 1+2+3+...+20
  'r4_2': '800',      // 25×32
  'r4_3': '56',       // 156-45-55
  'r4_4': '5544',     // 99×56
  'r4_5': '300',      // 234+56-34+44
  'r4_6': '7000',     // 125×56
  'r4_7': '错误',     // a-(b+c) = a-b+c
  'r4_8': '正确',     // 25×44 = 25×40+25×4
  
  // 复习任务 5
  'r5_1': '1100',     // 25×4+125×8
  'r5_2': '14',       // 4★5 = 4+2×5
  'r5_3': '589',      // 789-123-45-32
  'r5_4': '229977',   // 9999×23
  'r5_5': '49',       // 1+3+5+7+9+11+13
  'r5_6': '1000000',  // 25×125×32
  'r5_7': '错误',     // 5◇4 = 5×4-5 = 15
  'r5_8': '正确'      // a+b-c-d = (a+b)-(c+d)
};

async function fixQuestionAnswers() {
  try {
    const app = await NestFactory.create(AppModule);
    const connection = app.get(require('typeorm').Connection);

    console.log('Connected to database');

    // 获取所有问题
    const questions = await connection.getRepository(Question).find();
    console.log(`Found ${questions.length} questions`);

    let fixedCount = 0;

    // 检查每个问题
    for (const question of questions) {
      if (answerMap[question.questionId]) {
        console.log(`\nFixing answer for question ${question.questionId}:`);
        console.log(`Old answer: ${question.answer}`);
        console.log(`New answer: ${answerMap[question.questionId]}`);
        
        question.answer = answerMap[question.questionId];
        await connection.getRepository(Question).save(question);
        console.log('Fixed answer');
        fixedCount++;
      }
    }

    console.log(`\nFixed ${fixedCount} answers`);
    await app.close();
    console.log('Application closed');

  } catch (error) {
    console.error('Error:', error);
  }
}

fixQuestionAnswers();
