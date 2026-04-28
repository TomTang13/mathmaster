const mysql = require('mysql2/promise');

const knowledge19Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '12和18的最大公因数是多少？', answer: 'B', options_json: ['A. 3', 'B. 6', 'C. 9', 'D. 12'], explanation: '12=2×2×3，18=2×3×3，最大公因数=2×3=6。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '12和18的最小公倍数是多少？', answer: 'C', options_json: ['A. 18', 'B. 24', 'C. 36', 'D. 72'], explanation: '12=2×2×3，18=2×3×3，最小公倍数=2×2×3×3=36。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '8和12的最大公因数是多少？', answer: 'B', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explanation: '8=2×2×2，12=2×2×3，最大公因数=2×2=4。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '8和12的最小公倍数是多少？', answer: 'D', options_json: ['A. 16', 'B. 20', 'C. 24', 'D. 24'], explanation: '8=2×2×2，12=2×2×3，最小公倍数=2×2×2×3=24。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '15和20的最大公因数是多少？', answer: 'A', options_json: ['A. 5', 'B. 10', 'C. 15', 'D. 20'], explanation: '15=3×5，20=2×2×5，最大公因数=5。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '15和20的最小公倍数是多少？', answer: 'C', options_json: ['A. 30', 'B. 45', 'C. 60', 'D. 75'], explanation: '15=3×5，20=2×2×5，最小公倍数=2×2×3×5=60。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '7和14的最大公因数是多少？', answer: 'B', options_json: ['A. 1', 'B. 7', 'C. 14', 'D. 21'], explanation: '7=7，14=2×7，最大公因数=7。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '7和14的最小公倍数是多少？', answer: 'C', options_json: ['A. 7', 'B. 14', 'C. 14', 'D. 28'], explanation: '7=7，14=2×7，最小公倍数=2×7=14。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '9和15的最大公因数是多少？', answer: 'A', options_json: ['A. 3', 'B. 5', 'C. 9', 'D. 15'], explanation: '9=3×3，15=3×5，最大公因数=3。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '9和15的最小公倍数是多少？', answer: 'B', options_json: ['A. 30', 'B. 45', 'C. 60', 'D. 90'], explanation: '9=3×3，15=3×5，最小公倍数=3×3×5=45。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '6和10的最大公因数是多少？', answer: 'A', options_json: ['A. 2', 'B. 3', 'C. 5', 'D. 6'], explanation: '6=2×3，10=2×5，最大公因数=2。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  { question_body: '6和10的最小公倍数是多少？', answer: 'C', options_json: ['A. 20', 'B. 24', 'C. 30', 'D. 60'], explanation: '6=2×3，10=2×5，最小公倍数=2×3×5=30。', knowledge_id: 19, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '24和36的最大公因数是多少？', answer: 'B', options_json: ['A. 6', 'B. 12', 'C. 18', 'D. 24'], explanation: '24=2×2×2×3，36=2×2×3×3，最大公因数=2×2×3=12。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  { question_body: '24和36的最小公倍数是多少？', answer: 'D', options_json: ['A. 48', 'B. 60', 'C. 72', 'D. 72'], explanation: '24=2×2×2×3，36=2×2×3×3，最小公倍数=2×2×2×3×3=72。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  { question_body: '18和30的最大公因数是多少？', answer: 'B', options_json: ['A. 3', 'B. 6', 'C. 9', 'D. 15'], explanation: '18=2×3×3，30=2×3×5，最大公因数=2×3=6。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  { question_body: '18和30的最小公倍数是多少？', answer: 'C', options_json: ['A. 60', 'B. 72', 'C. 90', 'D. 180'], explanation: '18=2×3×3，30=2×3×5，最小公倍数=2×3×3×5=90。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果两个数的最大公因数是1，这两个数的关系是？', answer: 'A', options_json: ['A. 互质', 'B. 相等', 'C. 倍数关系', 'D. 无法确定'], explanation: '最大公因数是1的两个数叫做互质数。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  { question_body: '21和35的最大公因数是多少？', answer: 'A', options_json: ['A. 7', 'B. 14', 'C. 21', 'D. 35'], explanation: '21=3×7，35=5×7，最大公因数=7。', knowledge_id: 19, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '48和72的最大公因数是多少？', answer: 'C', options_json: ['A. 12', 'B. 18', 'C. 24', 'D. 36'], explanation: '48=2×2×2×2×3，72=2×2×2×3×3，最大公因数=2×2×2×3=24。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  { question_body: '48和72的最小公倍数是多少？', answer: 'C', options_json: ['A. 96', 'B. 120', 'C. 144', 'D. 216'], explanation: '48=2×2×2×2×3，72=2×2×2×3×3，最小公倍数=2×2×2×2×3×3=144。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲数是乙数的3倍，甲乙两数的最大公因数是？', answer: 'B', options_json: ['A. 甲数', 'B. 乙数', 'C. 3', 'D. 1'], explanation: '甲=3×乙，最大公因数是乙数。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲数是乙数的3倍，甲乙两数的最小公倍数是？', answer: 'A', options_json: ['A. 甲数', 'B. 乙数', 'C. 3', 'D. 1'], explanation: '甲=3×乙，最小公倍数是甲数。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两个数的积是180，最大公因数是6，这两个数的最小公倍数是多少？', answer: 'B', options_json: ['A. 20', 'B. 30', 'C. 36', 'D. 60'], explanation: '两数之积=最大公因数×最小公倍数，180=6×最小公倍数，最小公倍数=30。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  { question_body: '60和84的最大公因数是多少？', answer: 'B', options_json: ['A. 6', 'B. 12', 'C. 18', 'D. 24'], explanation: '60=2×2×3×5，84=2×2×3×7，最大公因数=2×2×3=12。', knowledge_id: 19, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：两个数的最大公因数一定小于或等于较小的数。', answer: '正确', options_json: ['正确', '错误'], explanation: '最大公因数是两个数共有的最大因数，不可能超过较小的数。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个数的最小公倍数一定大于或等于较大的数。', answer: '正确', options_json: ['正确', '错误'], explanation: '最小公倍数是两个数共有的最小倍数，至少是较大的数。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：互质的两个数没有公因数。', answer: '错误', options_json: ['正确', '错误'], explanation: '互质的两个数有公因数1。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个数的积等于它们的最大公因数与最小公倍数的积。', answer: '正确', options_json: ['正确', '错误'], explanation: '两数之积=最大公因数×最小公倍数。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果甲数是乙数的倍数，那么甲乙两数的最大公因数是甲数。', answer: '错误', options_json: ['正确', '错误'], explanation: '最大公因数是乙数，最小公倍数是甲数。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1和任何数都互质。', answer: '正确', options_json: ['正确', '错误'], explanation: '1和任何数的最大公因数都是1。', knowledge_id: 19, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '12和18的最大公因数是____。', answer: '6', options_json: null, explanation: '12=2×2×3，18=2×3×3，最大公因数=2×3=6。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  { question_body: '12和18的最小公倍数是____。', answer: '36', options_json: null, explanation: '12=2×2×3，18=2×3×3，最小公倍数=2×2×3×3=36。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  { question_body: '8和12的最大公因数是____。', answer: '4', options_json: null, explanation: '8=2×2×2，12=2×2×3，最大公因数=2×2=4。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  { question_body: '15和20的最大公因数是____。', answer: '5', options_json: null, explanation: '15=3×5，20=2×2×5，最大公因数=5。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  { question_body: '9和15的最大公因数是____。', answer: '3', options_json: null, explanation: '9=3×3，15=3×5，最大公因数=3。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  { question_body: '6和10的最小公倍数是____。', answer: '30', options_json: null, explanation: '6=2×3，10=2×5，最小公倍数=2×3×5=30。', knowledge_id: 19, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '48和72的最大公因数是____。', answer: '24', options_json: null, explanation: '48=2×2×2×2×3，72=2×2×2×3×3，最大公因数=2×2×2×3=24。', knowledge_id: 19, question_type_id: 1, difficulty_id: 4 },
  { question_body: '48和72的最小公倍数是____。', answer: '144', options_json: null, explanation: '48=2×2×2×2×3，72=2×2×2×3×3，最小公倍数=2×2×2×2×3×3=144。', knowledge_id: 19, question_type_id: 1, difficulty_id: 4 },
  { question_body: '两个数的积是180，最大公因数是6，最小公倍数是____。', answer: '30', options_json: null, explanation: '两数之积=最大公因数×最小公倍数，180=6×最小公倍数，最小公倍数=30。', knowledge_id: 19, question_type_id: 1, difficulty_id: 4 },
  { question_body: '60和84的最大公因数是____。', answer: '12', options_json: null, explanation: '60=2×2×3×5，84=2×2×3×7，最大公因数=2×2×3=12。', knowledge_id: 19, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge19Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点19题目生成完成，共插入 ${knowledge19Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
