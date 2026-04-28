const mysql = require('mysql2/promise');

const knowledge20Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '6有多少个因数？', answer: 'C', options_json: ['A. 2个', 'B. 3个', 'C. 4个', 'D. 5个'], explanation: '6=2×3，因数有1,2,3,6，共4个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '8有多少个因数？', answer: 'C', options_json: ['A. 2个', 'B. 3个', 'C. 4个', 'D. 5个'], explanation: '8=2×2×2，因数有1,2,4,8，共4个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '12有多少个因数？', answer: 'D', options_json: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 6个'], explanation: '12=2×2×3，因数有1,2,3,4,6,12，共6个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '10有多少个因数？', answer: 'B', options_json: ['A. 2个', 'B. 4个', 'C. 5个', 'D. 6个'], explanation: '10=2×5，因数有1,2,5,10，共4个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '16有多少个因数？', answer: 'C', options_json: ['A. 3个', 'B. 4个', 'C. 5个', 'D. 6个'], explanation: '16=2×2×2×2，因数有1,2,4,8,16，共5个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '18有多少个因数？', answer: 'C', options_json: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 8个'], explanation: '18=2×3×3，因数有1,2,3,6,9,18，共6个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20有多少个因数？', answer: 'C', options_json: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 8个'], explanation: '20=2×2×5，因数有1,2,4,5,10,20，共6个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '24有多少个因数？', answer: 'D', options_json: ['A. 6个', 'B. 7个', 'C. 8个', 'D. 8个'], explanation: '24=2×2×2×3，因数有1,2,3,4,6,8,12,24，共8个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '30有多少个因数？', answer: 'C', options_json: ['A. 6个', 'B. 7个', 'C. 8个', 'D. 9个'], explanation: '30=2×3×5，因数有1,2,3,5,6,10,15,30，共8个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '36有多少个因数？', answer: 'D', options_json: ['A. 6个', 'B. 7个', 'C. 8个', 'D. 9个'], explanation: '36=2×2×3×3，因数有1,2,3,4,6,9,12,18,36，共9个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×3，这个数有多少个因数？', answer: 'B', options_json: ['A. 2个', 'B. 4个', 'C. 6个', 'D. 8个'], explanation: '2×3=6，因数个数=(1+1)×(1+1)=4个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×2×3，这个数有多少个因数？', answer: 'C', options_json: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 8个'], explanation: '2×2×3=12，因数个数=(2+1)×(1+1)=6个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '48有多少个因数？', answer: 'C', options_json: ['A. 8个', 'B. 9个', 'C. 10个', 'D. 12个'], explanation: '48=2×2×2×2×3，因数个数=(4+1)×(1+1)=10个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  { question_body: '60有多少个因数？', answer: 'C', options_json: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 14个'], explanation: '60=2×2×3×5，因数个数=(2+1)×(1+1)×(1+1)=12个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  { question_body: '72有多少个因数？', answer: 'C', options_json: ['A. 10个', 'B. 11个', 'C. 12个', 'D. 14个'], explanation: '72=2×2×2×3×3，因数个数=(3+1)×(2+1)=12个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×3×5，这个数有多少个因数？', answer: 'C', options_json: ['A. 4个', 'B. 6个', 'C. 8个', 'D. 10个'], explanation: '因数个数=(1+1)×(1+1)×(1+1)=8个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×2×3×3，这个数有多少个因数？', answer: 'C', options_json: ['A. 6个', 'B. 8个', 'C. 9个', 'D. 12个'], explanation: '因数个数=(2+1)×(2+1)=9个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  { question_body: '100有多少个因数？', answer: 'B', options_json: ['A. 6个', 'B. 9个', 'C. 10个', 'D. 12个'], explanation: '100=2×2×5×5，因数个数=(2+1)×(2+1)=9个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个数分解质因数是2×2×2×3×3，这个数有多少个因数？', answer: 'C', options_json: ['A. 10个', 'B. 12个', 'C. 12个', 'D. 16个'], explanation: '因数个数=(3+1)×(2+1)=12个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  { question_body: '360有多少个因数？', answer: 'D', options_json: ['A. 18个', 'B. 20个', 'C. 22个', 'D. 24个'], explanation: '360=2×2×2×3×3×5，因数个数=(3+1)×(2+1)×(1+1)=24个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数有6个因数，这个数最小是多少？', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 15'], explanation: '6=6×1=(5+1)，数=2^5=32；或6=3×2=(2+1)×(1+1)，数=2^2×3=12。最小是12。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数有8个因数，这个数最小是多少？', answer: 'B', options_json: ['A. 16', 'B. 24', 'C. 30', 'D. 36'], explanation: '8=8×1=(7+1)，数=2^7=128；8=4×2=(3+1)×(1+1)，数=2^3×3=24；8=2×2×2=(1+1)^3，数=2×3×5=30。最小是24。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2×3×3×5，这个数有多少个因数？', answer: 'C', options_json: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 16个'], explanation: '因数个数=(1+1)×(2+1)×(1+1)=12个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  { question_body: '840有多少个因数？', answer: 'C', options_json: ['A. 24个', 'B. 28个', 'C. 32个', 'D. 36个'], explanation: '840=2×2×2×3×5×7，因数个数=(3+1)×(1+1)×(1+1)×(1+1)=32个。', knowledge_id: 20, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：质数只有2个因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '质数只有1和它本身两个因数。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：合数至少有3个因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '合数除了1和它本身外还有其他因数，所以至少有3个因数。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数的因数个数与它的质因数分解有关。', answer: '正确', options_json: ['正确', '错误'], explanation: '因数个数=(a+1)(b+1)(c+1)...，其中a,b,c是质因数的指数。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：16有4个因数。', answer: '错误', options_json: ['正确', '错误'], explanation: '16=2×2×2×2，因数有1,2,4,8,16，共5个。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数分解质因数是2×2×3，这个数有6个因数。', answer: '正确', options_json: ['正确', '错误'], explanation: '因数个数=(2+1)×(1+1)=6个。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：36有8个因数。', answer: '错误', options_json: ['正确', '错误'], explanation: '36=2×2×3×3，因数个数=(2+1)×(2+1)=9个。', knowledge_id: 20, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '6有____个因数。', answer: '4', options_json: null, explanation: '6=2×3，因数有1,2,3,6，共4个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  { question_body: '12有____个因数。', answer: '6', options_json: null, explanation: '12=2×2×3，因数有1,2,3,4,6,12，共6个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  { question_body: '18有____个因数。', answer: '6', options_json: null, explanation: '18=2×3×3，因数有1,2,3,6,9,18，共6个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  { question_body: '24有____个因数。', answer: '8', options_json: null, explanation: '24=2×2×2×3，因数有1,2,3,4,6,8,12,24，共8个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×3，这个数有____个因数。', answer: '4', options_json: null, explanation: '因数个数=(1+1)×(1+1)=4个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×2×3，这个数有____个因数。', answer: '6', options_json: null, explanation: '因数个数=(2+1)×(1+1)=6个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个数分解质因数是2×2×2×3×3，这个数有____个因数。', answer: '12', options_json: null, explanation: '因数个数=(3+1)×(2+1)=12个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 4 },
  { question_body: '360有____个因数。', answer: '24', options_json: null, explanation: '360=2×2×2×3×3×5，因数个数=(3+1)×(2+1)×(1+1)=24个。', knowledge_id: 20, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数有6个因数，这个数最小是____。', answer: '12', options_json: null, explanation: '6=3×2=(2+1)×(1+1)，数=2^2×3=12。', knowledge_id: 20, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数有8个因数，这个数最小是____。', answer: '24', options_json: null, explanation: '8=4×2=(3+1)×(1+1)，数=2^3×3=24。', knowledge_id: 20, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge20Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点20题目生成完成，共插入 ${knowledge20Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
