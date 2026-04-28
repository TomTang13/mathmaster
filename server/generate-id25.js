const mysql = require('mysql2/promise');

const knowledge25Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '欧拉函数φ(1)的值是多少？', answer: 'A', options_json: ['A. 1', 'B. 0', 'C. 2', 'D. 3'], explanation: 'φ(1)=1，因为1与自身互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(2)的值是多少？', answer: 'B', options_json: ['A. 1', 'B. 1', 'C. 2', 'D. 3'], explanation: 'φ(2)=1，因为1与2互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(3)的值是多少？', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 2', 'D. 3'], explanation: 'φ(3)=2，因为1,2与3互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(4)的值是多少？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: 'φ(4)=2，因为1,3与4互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(5)的值是多少？', answer: 'D', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 4'], explanation: 'φ(5)=4，因为1,2,3,4与5互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(6)的值是多少？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: 'φ(6)=2，因为1,5与6互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(7)的值是多少？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: 'φ(7)=6，因为1,2,3,4,5,6与7互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(8)的值是多少？', answer: 'B', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explanation: 'φ(8)=4，因为1,3,5,7与8互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(9)的值是多少？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 6', 'D. 9'], explanation: 'φ(9)=6，因为1,2,4,5,7,8与9互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '欧拉函数φ(10)的值是多少？', answer: 'B', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 10'], explanation: 'φ(10)=4，因为1,3,7,9与10互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '对于质数p，欧拉函数φ(p)的值是多少？', answer: 'A', options_json: ['A. p-1', 'B. p', 'C. p+1', 'D. 1'], explanation: '质数p的欧拉函数值是p-1，因为1到p-1都与p互质。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  { question_body: '费马小定理的内容是什么？', answer: 'C', options_json: ['A. a^p ≡ a mod p', 'B. a^(p-1) ≡ 1 mod p', 'C. a^(p-1) ≡ 1 mod p（p是质数）', 'D. a^p ≡ 1 mod p'], explanation: '费马小定理：如果p是质数，且a与p互质，则a^(p-1) ≡ 1 mod p。', knowledge_id: 25, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '欧拉函数φ(12)的值是多少？', answer: 'B', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explanation: '12=2^2×3，φ(12)=12×(1-1/2)×(1-1/3)=4。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  { question_body: '欧拉函数φ(16)的值是多少？', answer: 'C', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 16'], explanation: '16=2^4，φ(16)=16×(1-1/2)=8。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  { question_body: '欧拉函数φ(15)的值是多少？', answer: 'B', options_json: ['A. 4', 'B. 8', 'C. 10', 'D. 15'], explanation: '15=3×5，φ(15)=15×(1-1/3)×(1-1/5)=8。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  { question_body: '根据费马小定理，2^6 mod 7的结果是多少？', answer: 'A', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '7是质数，2^6 ≡ 1 mod 7。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  { question_body: '根据费马小定理，3^4 mod 5的结果是多少？', answer: 'A', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '5是质数，3^4 ≡ 1 mod 5。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  { question_body: '欧拉函数φ(20)的值是多少？', answer: 'B', options_json: ['A. 4', 'B. 8', 'C. 10', 'D. 20'], explanation: '20=2^2×5，φ(20)=20×(1-1/2)×(1-1/5)=8。', knowledge_id: 25, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '欧拉函数φ(24)的值是多少？', answer: 'C', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], explanation: '24=2^3×3，φ(24)=24×(1-1/2)×(1-1/3)=8。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  { question_body: '欧拉函数φ(36)的值是多少？', answer: 'D', options_json: ['A. 12', 'B. 16', 'C. 18', 'D. 12'], explanation: '36=2^2×3^2，φ(36)=36×(1-1/2)×(1-1/3)=12。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  { question_body: '根据费马小定理，5^10 mod 11的结果是多少？', answer: 'A', options_json: ['A. 1', 'B. 5', 'C. 10', 'D. 11'], explanation: '11是质数，5^10 ≡ 1 mod 11。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  { question_body: '欧拉函数φ(100)的值是多少？', answer: 'B', options_json: ['A. 40', 'B. 40', 'C. 50', 'D. 100'], explanation: '100=2^2×5^2，φ(100)=100×(1-1/2)×(1-1/5)=40。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  { question_body: '根据费马小定理，7^6 mod 7的结果是多少？', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 0', 'D. 7'], explanation: '7与7不互质，费马小定理不适用，7^6 ≡ 0 mod 7。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  { question_body: '欧拉函数φ(121)的值是多少？', answer: 'D', options_json: ['A. 100', 'B. 110', 'C. 120', 'D. 110'], explanation: '121=11^2，φ(121)=121×(1-1/11)=110。', knowledge_id: 25, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：欧拉函数φ(n)表示1到n-1中与n互质的数的个数。', answer: '正确', options_json: ['正确', '错误'], explanation: '欧拉函数的定义是1到n中与n互质的数的个数。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：对于质数p，φ(p)=p-1。', answer: '正确', options_json: ['正确', '错误'], explanation: '质数p的欧拉函数值是p-1，因为1到p-1都与p互质。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：费马小定理适用于所有正整数。', answer: '错误', options_json: ['正确', '错误'], explanation: '费马小定理只适用于质数模的情况。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：φ(1)=1。', answer: '正确', options_json: ['正确', '错误'], explanation: '1与自身互质，所以φ(1)=1。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：φ(6)=2。', answer: '正确', options_json: ['正确', '错误'], explanation: '1和5与6互质，所以φ(6)=2。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：费马小定理中，a与p必须互质。', answer: '正确', options_json: ['正确', '错误'], explanation: '费马小定理的条件是a与p互质且p是质数。', knowledge_id: 25, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '欧拉函数φ(1)的值是____。', answer: '1', options_json: null, explanation: 'φ(1)=1。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  { question_body: '欧拉函数φ(2)的值是____。', answer: '1', options_json: null, explanation: 'φ(2)=1。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  { question_body: '欧拉函数φ(3)的值是____。', answer: '2', options_json: null, explanation: 'φ(3)=2。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  { question_body: '欧拉函数φ(4)的值是____。', answer: '2', options_json: null, explanation: 'φ(4)=2。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  { question_body: '欧拉函数φ(5)的值是____。', answer: '4', options_json: null, explanation: 'φ(5)=4。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  { question_body: '欧拉函数φ(6)的值是____。', answer: '2', options_json: null, explanation: 'φ(6)=2。', knowledge_id: 25, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '欧拉函数φ(12)的值是____。', answer: '4', options_json: null, explanation: '12=2^2×3，φ(12)=12×(1-1/2)×(1-1/3)=4。', knowledge_id: 25, question_type_id: 1, difficulty_id: 4 },
  { question_body: '欧拉函数φ(16)的值是____。', answer: '8', options_json: null, explanation: '16=2^4，φ(16)=16×(1-1/2)=8。', knowledge_id: 25, question_type_id: 1, difficulty_id: 4 },
  { question_body: '根据费马小定理，2^6 mod 7的结果是____。', answer: '1', options_json: null, explanation: '7是质数，2^6 ≡ 1 mod 7。', knowledge_id: 25, question_type_id: 1, difficulty_id: 4 },
  { question_body: '欧拉函数φ(100)的值是____。', answer: '40', options_json: null, explanation: '100=2^2×5^2，φ(100)=100×(1-1/2)×(1-1/5)=40。', knowledge_id: 25, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge25Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点25题目生成完成，共插入 ${knowledge25Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
