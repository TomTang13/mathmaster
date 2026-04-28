const mysql = require('mysql2/promise');

const knowledge18Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '12分解质因数的结果是？', answer: 'B', options_json: ['A. 2×6', 'B. 2×2×3', 'C. 3×4', 'D. 1×12'], explanation: '12=2×2×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '18分解质因数的结果是？', answer: 'C', options_json: ['A. 2×9', 'B. 3×6', 'C. 2×3×3', 'D. 1×18'], explanation: '18=2×3×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20分解质因数的结果是？', answer: 'A', options_json: ['A. 2×2×5', 'B. 4×5', 'C. 2×10', 'D. 1×20'], explanation: '20=2×2×5，其中2和5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '30分解质因数的结果是？', answer: 'D', options_json: ['A. 2×15', 'B. 3×10', 'C. 5×6', 'D. 2×3×5'], explanation: '30=2×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '24分解质因数的结果是？', answer: 'B', options_json: ['A. 2×12', 'B. 2×2×2×3', 'C. 3×8', 'D. 4×6'], explanation: '24=2×2×2×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '36分解质因数的结果是？', answer: 'C', options_json: ['A. 2×18', 'B. 4×9', 'C. 2×2×3×3', 'D. 6×6'], explanation: '36=2×2×3×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '42分解质因数的结果是？', answer: 'A', options_json: ['A. 2×3×7', 'B. 6×7', 'C. 2×21', 'D. 3×14'], explanation: '42=2×3×7，其中2、3、7都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '48分解质因数的结果是？', answer: 'D', options_json: ['A. 2×24', 'B. 3×16', 'C. 4×12', 'D. 2×2×2×2×3'], explanation: '48=2×2×2×2×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '50分解质因数的结果是？', answer: 'B', options_json: ['A. 2×25', 'B. 2×5×5', 'C. 5×10', 'D. 1×50'], explanation: '50=2×5×5，其中2和5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '60分解质因数的结果是？', answer: 'C', options_json: ['A. 2×30', 'B. 3×20', 'C. 2×2×3×5', 'D. 4×15'], explanation: '60=2×2×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '72分解质因数的结果是？', answer: 'A', options_json: ['A. 2×2×2×3×3', 'B. 8×9', 'C. 6×12', 'D. 4×18'], explanation: '72=2×2×2×3×3，其中2和3都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  { question_body: '100分解质因数的结果是？', answer: 'D', options_json: ['A. 2×50', 'B. 4×25', 'C. 5×20', 'D. 2×2×5×5'], explanation: '100=2×2×5×5，其中2和5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '84分解质因数的结果是？', answer: 'B', options_json: ['A. 2×42', 'B. 2×2×3×7', 'C. 3×28', 'D. 4×21'], explanation: '84=2×2×3×7，其中2、3、7都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  { question_body: '90分解质因数的结果是？', answer: 'C', options_json: ['A. 2×45', 'B. 5×18', 'C. 2×3×3×5', 'D. 6×15'], explanation: '90=2×3×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  { question_body: '120分解质因数的结果是？', answer: 'A', options_json: ['A. 2×2×2×3×5', 'B. 4×30', 'C. 6×20', 'D. 8×15'], explanation: '120=2×2×2×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×3×5，这个数是多少？', answer: 'D', options_json: ['A. 15', 'B. 20', 'C. 25', 'D. 30'], explanation: '2×3×5=30。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×2×3×3，这个数是多少？', answer: 'C', options_json: ['A. 24', 'B. 30', 'C. 36', 'D. 48'], explanation: '2×2×3×3=36。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  { question_body: '180分解质因数的结果是？', answer: 'B', options_json: ['A. 2×2×3×15', 'B. 2×2×3×3×5', 'C. 2×3×5×6', 'D. 4×5×9'], explanation: '180=2×2×3×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '210分解质因数的结果是？', answer: 'A', options_json: ['A. 2×3×5×7', 'B. 2×5×21', 'C. 3×7×10', 'D. 5×6×7'], explanation: '210=2×3×5×7，其中2、3、5、7都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2×3×3×5，这个数有多少个因数？', answer: 'C', options_json: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 16个'], explanation: '2×3×3×5=90。因数个数=(1+1)×(2+1)×(1+1)=2×3×2=12个。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  { question_body: '360分解质因数的结果是？', answer: 'D', options_json: ['A. 2×2×2×3×15', 'B. 2×3×3×4×5', 'C. 2×2×3×6×5', 'D. 2×2×2×3×3×5'], explanation: '360=2×2×2×3×3×5，其中2、3、5都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2×2×2×3，这个数有多少个因数？', answer: 'B', options_json: ['A. 6个', 'B. 8个', 'C. 10个', 'D. 12个'], explanation: '2×2×2×3=24。因数个数=(3+1)×(1+1)=4×2=8个。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  { question_body: '504分解质因数的结果是？', answer: 'C', options_json: ['A. 2×2×2×3×21', 'B. 2×3×3×4×7', 'C. 2×2×2×3×3×7', 'D. 2×2×3×6×7'], explanation: '504=2×2×2×3×3×7，其中2、3、7都是质数。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2×3×5×5，这个数是多少？', answer: 'B', options_json: ['A. 100', 'B. 150', 'C. 200', 'D. 250'], explanation: '2×3×5×5=150。', knowledge_id: 18, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：分解质因数时，所有的因数都必须是质数。', answer: '正确', options_json: ['正确', '错误'], explanation: '分解质因数就是把一个数写成质数相乘的形式。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：12=3×4是分解质因数。', answer: '错误', options_json: ['正确', '错误'], explanation: '4不是质数，12=2×2×3才是分解质因数。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1是质数。', answer: '错误', options_json: ['正确', '错误'], explanation: '1既不是质数也不是合数。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：每个合数都可以分解质因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '合数都可以写成质数相乘的形式。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：质数不能分解质因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '质数只能写成1和它本身相乘，不能分解为更小的质因数。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：18=2×3×3是分解质因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '2和3都是质数，18=2×3×3是正确的分解质因数。', knowledge_id: 18, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '12分解质因数是2×2×____。', answer: '3', options_json: null, explanation: '12=2×2×3。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  { question_body: '18分解质因数是2×3×____。', answer: '3', options_json: null, explanation: '18=2×3×3。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  { question_body: '20分解质因数是2×2×____。', answer: '5', options_json: null, explanation: '20=2×2×5。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  { question_body: '30分解质因数是2×3×____。', answer: '5', options_json: null, explanation: '30=2×3×5。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  { question_body: '24分解质因数是2×2×2×____。', answer: '3', options_json: null, explanation: '24=2×2×2×3。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  { question_body: '36分解质因数是2×2×3×____。', answer: '3', options_json: null, explanation: '36=2×2×3×3。', knowledge_id: 18, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个数分解质因数是2×3×3×5，这个数是____。', answer: '90', options_json: null, explanation: '2×3×3×5=90。', knowledge_id: 18, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2×2×2×3，这个数有____个因数。', answer: '8', options_json: null, explanation: '2×2×2×3=24。因数个数=(3+1)×(1+1)=8个。', knowledge_id: 18, question_type_id: 1, difficulty_id: 4 },
  { question_body: '210分解质因数是2×3×5×____。', answer: '7', options_json: null, explanation: '210=2×3×5×7。', knowledge_id: 18, question_type_id: 1, difficulty_id: 4 },
  { question_body: '360分解质因数是2×2×2×3×3×____。', answer: '5', options_json: null, explanation: '360=2×2×2×3×3×5。', knowledge_id: 18, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge18Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点18题目生成完成，共插入 ${knowledge18Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
