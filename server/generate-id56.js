const mysql = require('mysql2/promise');

const knowledge56Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '求60的1/4是多少？', answer: 'A', options_json: ['A. 15', 'B. 20', 'C. 25', 'D. 30'], explanation: '60×1/4=15。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '求80的25%是多少？', answer: 'B', options_json: ['A. 15', 'B. 20', 'C. 25', 'D. 30'], explanation: '80×25%=20。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '已知一个数的1/3是15，这个数是多少？', answer: 'C', options_json: ['A. 40', 'B. 45', 'C. 45', 'D. 50'], explanation: '15÷1/3=45。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '已知一个数的20%是24，这个数是多少？', answer: 'D', options_json: ['A. 100', 'B. 110', 'C. 115', 'D. 120'], explanation: '24÷20%=120。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20是50的百分之几？', answer: 'A', options_json: ['A. 40%', 'B. 50%', 'C. 60%', 'D. 70%'], explanation: '20÷50×100%=40%。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '30比25多百分之几？', answer: 'B', options_json: ['A. 15%', 'B. 20%', 'C. 25%', 'D. 30%'], explanation: '(30-25)÷25×100%=20%。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '40比50少百分之几？', answer: 'C', options_json: ['A. 15%', 'B. 20%', 'C. 20%', 'D. 25%'], explanation: '(50-40)÷50×100%=20%。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '分数应用题的关键是什么？', answer: 'A', options_json: ['A. 找到单位"1"', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '分数应用题的关键是找到单位"1"。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品原价100元，打8折后是多少元？', answer: 'B', options_json: ['A. 70', 'B. 80', 'C. 90', 'D. 100'], explanation: '100×80%=80元。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数的3/5是30，这个数的2/5是多少？', answer: 'C', options_json: ['A. 12', 'B. 15', 'C. 20', 'D. 25'], explanation: '这个数=30÷3/5=50，50×2/5=20。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '百分数的意义是什么？', answer: 'D', options_json: ['A. 表示具体数量', 'B. 表示倍数关系', 'C. 表示分数', 'D. 表示一个数是另一个数的百分之几'], explanation: '百分数表示一个数是另一个数的百分之几。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小明有120元，用了1/4，还剩多少元？', answer: 'A', options_json: ['A. 90', 'B. 80', 'C. 70', 'D. 60'], explanation: '120×(1-1/4)=120×3/4=90元。', knowledge_id: 56, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一件商品打75折后是60元，原价是多少元？', answer: 'B', options_json: ['A. 70', 'B. 80', 'C. 90', 'D. 100'], explanation: '60÷75%=80元。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一本书看了3/5，还剩40页，这本书共有多少页？', answer: 'C', options_json: ['A. 80', 'B. 90', 'C. 100', 'D. 120'], explanation: '40÷(1-3/5)=40÷2/5=100页。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小明第一次考试80分，第二次比第一次提高了15%，第二次考试多少分？', answer: 'A', options_json: ['A. 92', 'B. 90', 'C. 88', 'D. 86'], explanation: '80×(1+15%)=80×1.15=92分。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一桶油用了2/5，还剩18升，这桶油原有多少升？', answer: 'B', options_json: ['A. 25', 'B. 30', 'C. 35', 'D. 40'], explanation: '18÷(1-2/5)=18÷3/5=30升。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品原价200元，先提价10%，再降价10%，现价是多少元？', answer: 'C', options_json: ['A. 198', 'B. 200', 'C. 198', 'D. 202'], explanation: '200×(1+10%)×(1-10%)=200×1.1×0.9=198元。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小明有150元，花了3/5买文具，剩下的钱的2/3买书，买书花了多少元？', answer: 'D', options_json: ['A. 40', 'B. 45', 'C. 50', 'D. 40'], explanation: '剩下的钱=150×(1-3/5)=60元，买书=60×2/3=40元。', knowledge_id: 56, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '学校有学生480人，其中男生占5/8，女生有多少人？', answer: 'A', options_json: ['A. 180', 'B. 200', 'C. 220', 'D. 240'], explanation: '女生占1-5/8=3/8，480×3/8=180人。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品先降价20%，再提价20%，现价是原价的百分之几？', answer: 'B', options_json: ['A. 96%', 'B. 96%', 'C. 98%', 'D. 100%'], explanation: '设原价为1，(1-20%)×(1+20%)=0.8×1.2=0.96=96%。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一批货物，第一天运走1/4，第二天运走剩下的1/3，还剩60吨，这批货物原有多少吨？', answer: 'C', options_json: ['A. 120', 'B. 140', 'C. 120', 'D. 160'], explanation: '设原有x吨，x×(1-1/4)×(1-1/3)=60，x×3/4×2/3=60，x×1/2=60，x=120。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  { question_body: '小明看一本书，第一天看了全书的1/5，第二天看了剩下的1/4，两天共看了60页，这本书共有多少页？', answer: 'D', options_json: ['A. 150', 'B. 160', 'C. 170', 'D. 200'], explanation: '设全书x页，x×1/5 + x×(1-1/5)×1/4=60，x/5 + x×4/5×1/4=60，x/5 + x/5=60，2x/5=60，x=150。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品按成本价提高40%后标价，再打8折销售，获利12元，成本价是多少元？', answer: 'A', options_json: ['A. 100', 'B. 120', 'C. 150', 'D. 200'], explanation: '设成本价x元，x×(1+40%)×80%-x=12，x×1.4×0.8-x=12，1.12x-x=12，0.12x=12，x=100。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两数的和是120，甲数的1/3等于乙数的1/2，甲数是多少？', answer: 'B', options_json: ['A. 60', 'B. 72', 'C. 48', 'D. 80'], explanation: '设甲数x，乙数120-x，x/3=(120-x)/2，2x=360-3x，5x=360，x=72。', knowledge_id: 56, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：求一个数的几分之几是多少，用乘法计算。', answer: '正确', options_json: ['正确', '错误'], explanation: '求一个数的几分之几是多少，用乘法计算。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：已知一个数的几分之几是多少，求这个数，用除法计算。', answer: '正确', options_json: ['正确', '错误'], explanation: '已知一个数的几分之几是多少，求这个数，用除法计算。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：分数应用题的关键是找到单位"1"。', answer: '正确', options_json: ['正确', '错误'], explanation: '分数应用题的关键是找到单位"1"。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：百分数表示一个数是另一个数的百分之几。', answer: '正确', options_json: ['正确', '错误'], explanation: '百分数表示一个数是另一个数的百分之几。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一件商品打8折，就是按原价的80%销售。', answer: '正确', options_json: ['正确', '错误'], explanation: '打8折就是按原价的80%销售。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：30比25多20%，25比30少20%。', answer: '错误', options_json: ['正确', '错误'], explanation: '30比25多(30-25)/25=20%，25比30少(30-25)/30≈16.67%，不是20%。', knowledge_id: 56, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '求60的1/4是____。', answer: '15', options_json: null, explanation: '60×1/4=15。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  { question_body: '求80的25%是____。', answer: '20', options_json: null, explanation: '80×25%=20。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  { question_body: '已知一个数的1/3是15，这个数是____。', answer: '45', options_json: null, explanation: '15÷1/3=45。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  { question_body: '已知一个数的20%是24，这个数是____。', answer: '120', options_json: null, explanation: '24÷20%=120。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  { question_body: '20是50的____%。', answer: '40', options_json: null, explanation: '20÷50×100%=40%。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  { question_body: '30比25多____%。', answer: '20', options_json: null, explanation: '(30-25)÷25×100%=20%。', knowledge_id: 56, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一件商品打75折后是60元，原价是____元。', answer: '80', options_json: null, explanation: '60÷75%=80元。', knowledge_id: 56, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一本书看了3/5，还剩40页，这本书共有____页。', answer: '100', options_json: null, explanation: '40÷(1-3/5)=40÷2/5=100页。', knowledge_id: 56, question_type_id: 1, difficulty_id: 4 },
  { question_body: '小明第一次考试80分，第二次比第一次提高了15%，第二次考试____分。', answer: '92', options_json: null, explanation: '80×(1+15%)=80×1.15=92分。', knowledge_id: 56, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一桶油用了2/5，还剩18升，这桶油原有____升。', answer: '30', options_json: null, explanation: '18÷(1-2/5)=18÷3/5=30升。', knowledge_id: 56, question_type_id: 1, difficulty_id: 4 }
];

async function generateQuestionBase() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    await connection.beginTransaction();

    for (const q of knowledge56Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点56题目生成完成，共插入 ${knowledge56Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
