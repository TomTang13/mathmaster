const mysql = require('mysql2/promise');

const knowledge6Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '规定 a△b = a + b × 2，那么 3△4 = ?', answer: 'B', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 14'], explanation: '3△4 = 3 + 4×2 = 3 + 8 = 11', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊙b = a × b + a，那么 5⊙3 = ?', answer: 'C', options_json: ['A. 15', 'B. 18', 'C. 20', 'D. 25'], explanation: '5⊙3 = 5×3 + 5 = 15 + 5 = 20', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a※b = (a + b) ÷ 2，那么 8※4 = ?', answer: 'A', options_json: ['A. 6', 'B. 7', 'C. 5', 'D. 8'], explanation: '8※4 = (8 + 4) ÷ 2 = 12 ÷ 2 = 6', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a★b = a × a - b，那么 5★3 = ?', answer: 'B', options_json: ['A. 20', 'B. 22', 'C. 25', 'D. 18'], explanation: '5★3 = 5×5 - 3 = 25 - 3 = 22', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊕b = a + b + 1，那么 6⊕7 = ?', answer: 'C', options_json: ['A. 12', 'B. 13', 'C. 14', 'D. 15'], explanation: '6⊕7 = 6 + 7 + 1 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊗b = a × 2 + b × 3，那么 4⊗2 = ?', answer: 'B', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '4⊗2 = 4×2 + 2×3 = 8 + 6 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a▽b = a × b - a，那么 7▽5 = ?', answer: 'A', options_json: ['A. 28', 'B. 30', 'C. 35', 'D. 25'], explanation: '7▽5 = 7×5 - 7 = 35 - 7 = 28', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a◆b = (a - b) × 2，那么 9◆4 = ?', answer: 'C', options_json: ['A. 8', 'B. 12', 'C. 10', 'D. 14'], explanation: '9◆4 = (9 - 4) × 2 = 5 × 2 = 10', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a◇b = a + a × b，那么 3◇4 = ?', answer: 'B', options_json: ['A. 12', 'B. 15', 'C. 18', 'D. 21'], explanation: '3◇4 = 3 + 3×4 = 3 + 12 = 15', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♠b = a × b ÷ 2，那么 6♠4 = ?', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 16'], explanation: '6♠4 = 6×4÷2 = 24÷2 = 12', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♥b = a + b × b，那么 2♥3 = ?', answer: 'A', options_json: ['A. 11', 'B. 12', 'C. 13', 'D. 15'], explanation: '2♥3 = 2 + 3×3 = 2 + 9 = 11', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♦b = (a + b) × (a - b)，那么 5♦3 = ?', answer: 'C', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '5♦3 = (5+3)×(5-3) = 8×2 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '规定 a△b = a × b + a + b，那么 4△5 = ?', answer: 'B', options_json: ['A. 27', 'B. 29', 'C. 30', 'D. 32'], explanation: '4△5 = 4×5 + 4 + 5 = 20 + 9 = 29', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊙b = a × a + b × b，那么 3⊙4 = ?', answer: 'C', options_json: ['A. 20', 'B. 24', 'C. 25', 'D. 30'], explanation: '3⊙4 = 3×3 + 4×4 = 9 + 16 = 25', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a※b = (a + b) ÷ (a - b)，那么 7※3 = ?', answer: 'A', options_json: ['A. 2.5', 'B. 3', 'C. 2', 'D. 3.5'], explanation: '7※3 = (7+3)÷(7-3) = 10÷4 = 2.5', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a★b = a × b - a - b，那么 6★5 = ?', answer: 'C', options_json: ['A. 18', 'B. 20', 'C. 19', 'D. 22'], explanation: '6★5 = 6×5 - 6 - 5 = 30 - 11 = 19', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊕b = a × 2 + b ÷ 2，那么 5⊕8 = ?', answer: 'B', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '5⊕8 = 5×2 + 8÷2 = 10 + 4 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊗b = (a + b) × 2 - a，那么 4⊗6 = ?', answer: 'A', options_json: ['A. 16', 'B. 18', 'C. 20', 'D. 22'], explanation: '4⊗6 = (4+6)×2 - 4 = 20 - 4 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '规定 a△b = a × b + a + b，已知 3△x = 23，求 x = ?', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '3△x = 3x + 3 + x = 4x + 3 = 23，4x = 20，x = 5', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊙b = a × a - b × b，那么 5⊙3 = ?', answer: 'B', options_json: ['A. 14', 'B. 16', 'C. 18', 'D. 20'], explanation: '5⊙3 = 5×5 - 3×3 = 25 - 9 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a※b = a × b + a ÷ b，那么 6※2 = ?', answer: 'A', options_json: ['A. 15', 'B. 14', 'C. 16', 'D. 18'], explanation: '6※2 = 6×2 + 6÷2 = 12 + 3 = 15', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a★b = (a + b) × (a - b) + b，那么 7★4 = ?', answer: 'D', options_json: ['A. 30', 'B. 35', 'C. 38', 'D. 37'], explanation: '7★4 = (7+4)×(7-4) + 4 = 11×3 + 4 = 37', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊕b = a × b - (a + b)，已知 4⊕x = 14，求 x = ?', answer: 'B', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '4⊕x = 4x - (4+x) = 3x - 4 = 14，3x = 18，x = 6', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊗b = a × a + a × b + b × b，那么 2⊗3 = ?', answer: 'C', options_json: ['A. 18', 'B. 20', 'C. 19', 'D. 21'], explanation: '2⊗3 = 2×2 + 2×3 + 3×3 = 4 + 6 + 9 = 19', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：定义新运算时，必须按照题目给定的规则进行计算', answer: '正确', options_json: ['正确', '错误'], explanation: '定义新运算的核心就是严格按照题目定义的规则计算', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a△b = a + b，那么 3△5 = 8', answer: '正确', options_json: ['正确', '错误'], explanation: '3△5 = 3 + 5 = 8，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：定义新运算中，a△b 一定等于 b△a', answer: '错误', options_json: ['正确', '错误'], explanation: '定义新运算不一定满足交换律，要看具体定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a⊙b = a × b，那么 4⊙5 = 20', answer: '正确', options_json: ['正确', '错误'], explanation: '4⊙5 = 4×5 = 20，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：定义新运算的结果一定是整数', answer: '错误', options_json: ['正确', '错误'], explanation: '定义新运算的结果可以是分数或小数', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a※b = a - b，那么 5※3 = 2', answer: '正确', options_json: ['正确', '错误'], explanation: '5※3 = 5 - 3 = 2，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '规定 a△b = a + b × 2，那么 4△3 = ____', answer: '10', options_json: null, explanation: '4△3 = 4 + 3×2 = 4 + 6 = 10', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊙b = a × b + a，那么 3⊙4 = ____', answer: '15', options_json: null, explanation: '3⊙4 = 3×4 + 3 = 12 + 3 = 15', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a※b = (a + b) ÷ 2，那么 6※8 = ____', answer: '7', options_json: null, explanation: '6※8 = (6+8)÷2 = 14÷2 = 7', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a★b = a × a - b，那么 4★3 = ____', answer: '13', options_json: null, explanation: '4★3 = 4×4 - 3 = 16 - 3 = 13', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊕b = a + b + 1，那么 5⊕6 = ____', answer: '12', options_json: null, explanation: '5⊕6 = 5 + 6 + 1 = 12', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊗b = a × 2 + b × 3，那么 3⊗2 = ____', answer: '12', options_json: null, explanation: '3⊗2 = 3×2 + 2×3 = 6 + 6 = 12', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '规定 a△b = a × b + a + b，已知 2△x = 17，求 x = ____', answer: '5', options_json: null, explanation: '2△x = 2x + 2 + x = 3x + 2 = 17，3x = 15，x = 5', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a⊙b = a × a + b × b，那么 2⊙5 = ____', answer: '29', options_json: null, explanation: '2⊙5 = 2×2 + 5×5 = 4 + 25 = 29', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a※b = (a + b) ÷ (a - b)，那么 9※3 = ____', answer: '2', options_json: null, explanation: '9※3 = (9+3)÷(9-3) = 12÷6 = 2', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a★b = a × b - a - b，已知 5★x = 19，求 x = ____', answer: '6', options_json: null, explanation: '5★x = 5x - 5 - x = 4x - 5 = 19，4x = 24，x = 6', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge6Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点6题目生成完成，共插入 ${knowledge6Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
