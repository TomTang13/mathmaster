const mysql = require('mysql2/promise');

const knowledge59Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '经济问题中，成本、售价、利润的关系是什么？', answer: 'A', options_json: ['A. 利润=售价-成本', 'B. 利润=成本-售价', 'C. 利润=售价×成本', 'D. 利润=售价÷成本'], explanation: '利润=售价-成本。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '利润率的计算公式是什么？', answer: 'B', options_json: ['A. 利润率=利润÷售价×100%', 'B. 利润率=利润÷成本×100%', 'C. 利润率=成本÷利润×100%', 'D. 利润率=售价÷利润×100%'], explanation: '利润率=利润÷成本×100%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品成本100元，售价120元，利润是多少？', answer: 'C', options_json: ['A. 10元', 'B. 15元', 'C. 20元', 'D. 25元'], explanation: '利润=120-100=20元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品成本80元，利润20元，售价是多少？', answer: 'D', options_json: ['A. 80元', 'B. 90元', 'C. 95元', 'D. 100元'], explanation: '售价=成本+利润=80+20=100元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品成本150元，利润率20%，利润是多少？', answer: 'A', options_json: ['A. 30元', 'B. 35元', 'C. 40元', 'D. 45元'], explanation: '利润=150×20%=30元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品成本200元，利润率25%，售价是多少？', answer: 'B', options_json: ['A. 220元', 'B. 250元', 'C. 280元', 'D. 300元'], explanation: '售价=200×(1+25%)=250元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品售价180元，利润30元，成本是多少？', answer: 'C', options_json: ['A. 140元', 'B. 145元', 'C. 150元', 'D. 155元'], explanation: '成本=售价-利润=180-30=150元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品售价240元，利润率20%，成本是多少？', answer: 'D', options_json: ['A. 180元', 'B. 190元', 'C. 200元', 'D. 200元'], explanation: '成本=240÷(1+20%)=200元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '经济问题中，折扣的计算方法是什么？', answer: 'A', options_json: ['A. 折扣后价格=原价×折扣率', 'B. 折扣后价格=原价÷折扣率', 'C. 折扣后价格=原价+折扣率', 'D. 折扣后价格=原价-折扣率'], explanation: '折扣后价格=原价×折扣率。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品原价200元，打8折后是多少元？', answer: 'B', options_json: ['A. 140元', 'B. 160元', 'C. 180元', 'D. 190元'], explanation: '折扣后价格=200×80%=160元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一件商品打75折后是150元，原价是多少元？', answer: 'C', options_json: ['A. 180元', 'B. 190元', 'C. 200元', 'D. 210元'], explanation: '原价=150÷75%=200元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  { question_body: '经济问题的解决关键是什么？', answer: 'D', options_json: ['A. 直接计算', 'B. 猜测答案', 'C. 不需要计算', 'D. 找到成本、售价、利润的关系'], explanation: '经济问题的解决关键是找到成本、售价、利润的关系。', knowledge_id: 59, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一件商品成本120元，售价150元，利润率是多少？', answer: 'A', options_json: ['A. 25%', 'B. 20%', 'C. 30%', 'D. 35%'], explanation: '利润=30元，利润率=30÷120×100%=25%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品成本80元，售价100元，打9折后利润是多少？', answer: 'B', options_json: ['A. 10元', 'B. 10元', 'C. 15元', 'D. 20元'], explanation: '折扣后售价=100×90%=90元，利润=90-80=10元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品原价250元，打8折后利润率20%，成本是多少？', answer: 'C', options_json: ['A. 150元', 'B. 160元', 'C. 166.67元', 'D. 170元'], explanation: '折扣后售价=250×80%=200元，成本=200÷(1+20%)≈166.67元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品成本100元，要获得30%的利润率，售价应该是多少？', answer: 'D', options_json: ['A. 120元', 'B. 125元', 'C. 130元', 'D. 130元'], explanation: '售价=100×(1+30%)=130元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品售价180元，利润45元，利润率是多少？', answer: 'A', options_json: ['A. 33.33%', 'B. 25%', 'C. 30%', 'D. 40%'], explanation: '成本=180-45=135元，利润率=45÷135×100%≈33.33%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一件商品打7折后售价140元，利润率20%，成本是多少？', answer: 'B', options_json: ['A. 100元', 'B. 116.67元', 'C. 120元', 'D. 125元'], explanation: '原价=140÷70%=200元，成本=140÷(1+20%)≈116.67元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一件商品成本150元，先提价20%，再打8折，最终售价是多少？', answer: 'A', options_json: ['A. 144元', 'B. 148元', 'C. 152元', 'D. 156元'], explanation: '提价后价格=150×(1+20%)=180元，打8折后=180×80%=144元。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品先打9折，再提价10%，最终价格与原价相比如何？', answer: 'B', options_json: ['A. 相等', 'B. 降低1%', 'C. 提高1%', 'D. 降低2%'], explanation: '设原价为1，最终价格=1×90%×(1+10%)=0.99，比原价降低1%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品成本200元，利润率25%，如果成本增加10%，要保持利润率不变，售价应该提高多少？', answer: 'C', options_json: ['A. 10%', 'B. 15%', 'C. 10%', 'D. 20%'], explanation: '原售价=200×(1+25%)=250元，新成本=200×(1+10%)=220元，新售价=220×(1+25%)=275元，提高=(275-250)÷250×100%=10%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品售价300元，利润率50%，如果打8折销售，利润率是多少？', answer: 'D', options_json: ['A. 20%', 'B. 25%', 'C. 30%', 'D. 20%'], explanation: '成本=300÷(1+50%)=200元，打8折后售价=240元，利润=40元，利润率=40÷200×100%=20%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两件商品，A商品成本100元，利润率20%；B商品成本150元，利润率10%，两件商品的总利润率是多少？', answer: 'A', options_json: ['A. 14%', 'B. 15%', 'C. 16%', 'D. 17%'], explanation: 'A利润=20元，B利润=15元，总利润=35元，总成本=250元，总利润率=35÷250×100%=14%。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一件商品原价200元，打x折后利润率20%，成本120元，x是多少？', answer: 'B', options_json: ['A. 6', 'B. 7.2', 'C. 8', 'D. 9'], explanation: '折扣后售价=120×(1+20%)=144元，x=144÷200×10=7.2折。', knowledge_id: 59, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：利润=售价-成本。', answer: '正确', options_json: ['正确', '错误'], explanation: '利润=售价-成本。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：利润率=利润÷成本×100%。', answer: '正确', options_json: ['正确', '错误'], explanation: '利润率=利润÷成本×100%。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：折扣后价格=原价×折扣率。', answer: '正确', options_json: ['正确', '错误'], explanation: '折扣后价格=原价×折扣率。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：售价=成本×(1+利润率)。', answer: '正确', options_json: ['正确', '错误'], explanation: '售价=成本+利润=成本×(1+利润率)。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：成本=售价÷(1+利润率)。', answer: '正确', options_json: ['正确', '错误'], explanation: '成本=售价÷(1+利润率)。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：打8折就是按原价的80%销售。', answer: '正确', options_json: ['正确', '错误'], explanation: '打8折就是按原价的80%销售。', knowledge_id: 59, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '经济问题中，利润=____-成本。', answer: '售价', options_json: null, explanation: '利润=售价-成本。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  { question_body: '利润率=利润÷____×100%。', answer: '成本', options_json: null, explanation: '利润率=利润÷成本×100%。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一件商品成本100元，售价120元，利润是____元。', answer: '20', options_json: null, explanation: '利润=120-100=20元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一件商品成本80元，利润20元，售价是____元。', answer: '100', options_json: null, explanation: '售价=80+20=100元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一件商品成本150元，利润率20%，利润是____元。', answer: '30', options_json: null, explanation: '利润=150×20%=30元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一件商品原价200元，打8折后是____元。', answer: '160', options_json: null, explanation: '折扣后价格=200×80%=160元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一件商品成本120元，售价150元，利润率是____%。', answer: '25', options_json: null, explanation: '利润=30元，利润率=30÷120×100%=25%。', knowledge_id: 59, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一件商品成本100元，先提价20%，再打8折，最终售价是____元。', answer: '144', options_json: null, explanation: '提价后价格=100×(1+20%)=120元，打8折后=120×80%=96元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一件商品售价300元，利润率50%，成本是____元。', answer: '200', options_json: null, explanation: '成本=300÷(1+50%)=200元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一件商品打7折后售价140元，原价是____元。', answer: '200', options_json: null, explanation: '原价=140÷70%=200元。', knowledge_id: 59, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge59Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点59题目生成完成，共插入 ${knowledge59Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
