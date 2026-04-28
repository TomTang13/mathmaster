const mysql = require('mysql2/promise');

const knowledge55Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '牛吃草问题的核心是什么？', answer: 'A', options_json: ['A. 草的生长速度和原有草量', 'B. 牛的数量', 'C. 草的总量', 'D. 牛的吃草速度'], explanation: '牛吃草问题的核心是草的生长速度和原有草量。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题的基本假设是？', answer: 'B', options_json: ['A. 草每天生长量不同', 'B. 草每天生长量相同', 'C. 牛每天吃的草量不同', 'D. 草不会生长'], explanation: '牛吃草问题的基本假设是草每天生长量相同。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题中，通常已知什么信息？', answer: 'C', options_json: ['A. 只有牛的数量', 'B. 只有草的总量', 'C. 不同数量的牛吃完草的时间', 'D. 什么都不知道'], explanation: '牛吃草问题中，通常已知不同数量的牛吃完草的时间。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题的基本公式是？', answer: 'A', options_json: ['A. 原有草量=(牛头数-草生长速度)×时间', 'B. 原有草量=(牛头数+草生长速度)×时间', 'C. 原有草量=牛头数×时间', 'D. 原有草量=草生长速度×时间'], explanation: '牛吃草问题的基本公式是原有草量=(牛头数-草生长速度)×时间。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一片草地，10头牛吃20天，15头牛吃10天，草每天生长量是多少？', answer: 'B', options_json: ['A. 5', 'B. 5', 'C. 10', 'D. 15'], explanation: '设草每天生长量为x，原有草量为y。y=(10-x)×20，y=(15-x)×10，解得x=5。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一片草地，10头牛吃20天，15头牛吃10天，原有草量是多少？', answer: 'C', options_json: ['A. 50', 'B. 100', 'C. 100', 'D. 150'], explanation: '草每天生长量x=5，原有草量y=(10-5)×20=100。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一片草地，草每天生长量是5，原有草量是100，25头牛可以吃几天？', answer: 'D', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 5'], explanation: '时间=原有草量÷(牛头数-草生长速度)=100÷(25-5)=5天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题的另一个名称是？', answer: 'A', options_json: ['A. 牛顿问题', 'B. 爱因斯坦问题', 'C. 高斯问题', 'D. 欧拉问题'], explanation: '牛吃草问题的另一个名称是牛顿问题。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题中，草生长速度的单位是什么？', answer: 'B', options_json: ['A. 头牛/天', 'B. 单位草量/天', 'C. 天/头牛', 'D. 单位草量/头牛'], explanation: '草生长速度的单位是单位草量/天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题的解决步骤不包括？', answer: 'D', options_json: ['A. 求草生长速度', 'B. 求原有草量', 'C. 求牛的数量或时间', 'D. 直接计算草的总量'], explanation: '牛吃草问题的解决步骤包括求草生长速度、求原有草量、求牛的数量或时间，不包括直接计算草的总量。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一片草地，8头牛吃15天，10头牛吃10天，草每天生长量是多少？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '设草每天生长量为x，(8-x)×15=(10-x)×10，120-15x=100-10x，20=5x，x=4。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  { question_body: '牛吃草问题的应用场景不包括？', answer: 'D', options_json: ['A. 水池排水问题', 'B. 资源消耗问题', 'C. 排队问题', 'D. 鸡兔同笼问题'], explanation: '牛吃草问题的应用场景包括水池排水问题、资源消耗问题、排队问题，不包括鸡兔同笼问题。', knowledge_id: 55, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一片草地，12头牛吃15天，18头牛吃9天，草每天生长量是多少？', answer: 'B', options_json: ['A. 3', 'B. 3', 'C. 4', 'D. 5'], explanation: '设草每天生长量为x，(12-x)×15=(18-x)×9，180-15x=162-9x，18=6x，x=3。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一片草地，12头牛吃15天，18头牛吃9天，原有草量是多少？', answer: 'C', options_json: ['A. 120', 'B. 135', 'C. 135', 'D. 150'], explanation: '草每天生长量x=3，原有草量=(12-3)×15=135。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一片草地，草每天生长量是4，原有草量是120，20头牛可以吃几天？', answer: 'A', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 12'], explanation: '时间=120÷(20-4)=120÷16=7.5天，取整数8天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一片草地，15头牛吃10天，25头牛吃5天，草每天生长量是多少？', answer: 'B', options_json: ['A. 5', 'B. 5', 'C. 10', 'D. 15'], explanation: '设草每天生长量为x，(15-x)×10=(25-x)×5，150-10x=125-5x，25=5x，x=5。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一片草地，草每天生长量是2，原有草量是80，12头牛可以吃几天？', answer: 'C', options_json: ['A. 8', 'B. 9', 'C. 8', 'D. 10'], explanation: '时间=80÷(12-2)=80÷10=8天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一片草地，20头牛吃10天，30头牛吃5天，原有草量是多少？', answer: 'D', options_json: ['A. 50', 'B. 100', 'C. 150', 'D. 100'], explanation: '草每天生长量x=10，原有草量=(20-10)×10=100。', knowledge_id: 55, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一片草地，24头牛吃6天，18头牛吃10天，21头牛可以吃几天？', answer: 'A', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 12'], explanation: '设草每天生长量为x，(24-x)×6=(18-x)×10，144-6x=180-10x，4x=36，x=9。原有草量=(24-9)×6=90。21头牛吃的时间=90÷(21-9)=7.5天，取8天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一片草地，30头牛吃6天，20头牛吃12天，多少头牛可以吃18天？', answer: 'B', options_json: ['A. 15', 'B. 15', 'C. 16', 'D. 17'], explanation: '设草每天生长量为x，(30-x)×6=(20-x)×12，180-6x=240-12x，6x=60，x=10。原有草量=(30-10)×6=120。设牛的数量为y，120=(y-10)×18，y-10=6.67，y=16.67，取17头牛。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一片草地，16头牛吃20天，80只羊吃12天（4只羊吃1头牛的草量），10头牛和60只羊一起吃，可以吃几天？', answer: 'C', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 12'], explanation: '80只羊=20头牛，60只羊=15头牛。设草每天生长量为x，(16-x)×20=(20-x)×12，320-20x=240-12x，80=8x，x=10。原有草量=(16-10)×20=120。10+15=25头牛，时间=120÷(25-10)=8天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一片草地，草每天生长量是5，原有草量是150，多少头牛可以吃15天？', answer: 'D', options_json: ['A. 10', 'B. 15', 'C. 20', 'D. 15'], explanation: '设牛的数量为y，150=(y-5)×15，y-5=10，y=15。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一片草地，25头牛吃5天，20头牛吃8天，草每天生长量是多少？', answer: 'A', options_json: ['A. 13.33', 'B. 15', 'C. 16.67', 'D. 18'], explanation: '设草每天生长量为x，(25-x)×5=(20-x)×8，125-5x=160-8x，3x=35，x≈11.67。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一片草地，10头牛吃20天，15头牛吃10天，25头牛可以吃几天？', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '草每天生长量x=5，原有草量=100，时间=100÷(25-5)=5天。', knowledge_id: 55, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：牛吃草问题的核心是草的生长速度和原有草量。', answer: '正确', options_json: ['正确', '错误'], explanation: '牛吃草问题的核心是草的生长速度和原有草量。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：牛吃草问题的基本假设是草每天生长量相同。', answer: '正确', options_json: ['正确', '错误'], explanation: '牛吃草问题的基本假设是草每天生长量相同。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：牛吃草问题的基本公式是原有草量=(牛头数-草生长速度)×时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '牛吃草问题的基本公式是原有草量=(牛头数-草生长速度)×时间。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：牛吃草问题的另一个名称是牛顿问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '牛吃草问题的另一个名称是牛顿问题。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：牛吃草问题只适用于牛吃草的场景。', answer: '错误', options_json: ['正确', '错误'], explanation: '牛吃草问题适用于各种资源消耗与补充的场景，如水池排水、排队等。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：解决牛吃草问题需要先求草生长速度，再求原有草量。', answer: '正确', options_json: ['正确', '错误'], explanation: '解决牛吃草问题的步骤是先求草生长速度，再求原有草量，最后求牛的数量或时间。', knowledge_id: 55, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '牛吃草问题的核心是草的____速度和原有草量。', answer: '生长', options_json: null, explanation: '牛吃草问题的核心是草的生长速度和原有草量。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  { question_body: '牛吃草问题的基本假设是草每天____量相同。', answer: '生长', options_json: null, explanation: '牛吃草问题的基本假设是草每天生长量相同。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  { question_body: '牛吃草问题的基本公式是原有草量=(牛头数-____)×时间。', answer: '草生长速度', options_json: null, explanation: '牛吃草问题的基本公式是原有草量=(牛头数-草生长速度)×时间。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  { question_body: '牛吃草问题的另一个名称是____问题。', answer: '牛顿', options_json: null, explanation: '牛吃草问题的另一个名称是牛顿问题。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一片草地，10头牛吃20天，15头牛吃10天，草每天生长量是____。', answer: '5', options_json: null, explanation: '设草每天生长量为x，(10-x)×20=(15-x)×10，解得x=5。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一片草地，10头牛吃20天，15头牛吃10天，原有草量是____。', answer: '100', options_json: null, explanation: '草每天生长量x=5，原有草量=(10-5)×20=100。', knowledge_id: 55, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一片草地，8头牛吃15天，10头牛吃10天，草每天生长量是____。', answer: '4', options_json: null, explanation: '设草每天生长量为x，(8-x)×15=(10-x)×10，解得x=4。', knowledge_id: 55, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一片草地，草每天生长量是5，原有草量是100，25头牛可以吃____天。', answer: '5', options_json: null, explanation: '时间=100÷(25-5)=5天。', knowledge_id: 55, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一片草地，12头牛吃15天，18头牛吃9天，草每天生长量是____。', answer: '3', options_json: null, explanation: '设草每天生长量为x，(12-x)×15=(18-x)×9，解得x=3。', knowledge_id: 55, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一片草地，草每天生长量是2，原有草量是80，12头牛可以吃____天。', answer: '8', options_json: null, explanation: '时间=80÷(12-2)=8天。', knowledge_id: 55, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge55Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点55题目生成完成，共插入 ${knowledge55Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
