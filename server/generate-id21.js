const mysql = require('mysql2/promise');

const knowledge21Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '6的因数和是多少？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 14'], explanation: '6的因数有1,2,3,6，和为1+2+3+6=12。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '8的因数和是多少？', answer: 'B', options_json: ['A. 10', 'B. 15', 'C. 16', 'D. 18'], explanation: '8的因数有1,2,4,8，和为1+2+4+8=15。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '12的因数和是多少？', answer: 'D', options_json: ['A. 18', 'B. 20', 'C. 24', 'D. 28'], explanation: '12的因数有1,2,3,4,6,12，和为1+2+3+4+6+12=28。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '10的因数和是多少？', answer: 'B', options_json: ['A. 12', 'B. 18', 'C. 20', 'D. 22'], explanation: '10的因数有1,2,5,10，和为1+2+5+10=18。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '16的因数和是多少？', answer: 'C', options_json: ['A. 24', 'B. 28', 'C. 31', 'D. 32'], explanation: '16的因数有1,2,4,8,16，和为1+2+4+8+16=31。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '18的因数和是多少？', answer: 'C', options_json: ['A. 28', 'B. 32', 'C. 39', 'D. 40'], explanation: '18的因数有1,2,3,6,9,18，和为1+2+3+6+9+18=39。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20的因数和是多少？', answer: 'D', options_json: ['A. 30', 'B. 36', 'C. 38', 'D. 42'], explanation: '20的因数有1,2,4,5,10,20，和为1+2+4+5+10+20=42。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '24的因数和是多少？', answer: 'D', options_json: ['A. 40', 'B. 50', 'C. 60', 'D. 60'], explanation: '24的因数有1,2,3,4,6,8,12,24，和为1+2+3+4+6+8+12+24=60。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '30的因数和是多少？', answer: 'C', options_json: ['A. 60', 'B. 65', 'C. 72', 'D. 75'], explanation: '30的因数有1,2,3,5,6,10,15,30，和为1+2+3+5+6+10+15+30=72。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '36的因数和是多少？', answer: 'D', options_json: ['A. 80', 'B. 90', 'C. 91', 'D. 91'], explanation: '36的因数有1,2,3,4,6,9,12,18,36，和为1+2+3+4+6+9+12+18+36=91。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×3，这个数的因数和是多少？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 14'], explanation: '2×3=6，因数和=1+2+3+6=12。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数分解质因数是2×2×3，这个数的因数和是多少？', answer: 'D', options_json: ['A. 18', 'B. 20', 'C. 24', 'D. 28'], explanation: '2×2×3=12，因数和=1+2+3+4+6+12=28。', knowledge_id: 21, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '48的因数和是多少？', answer: 'C', options_json: ['A. 100', 'B. 110', 'C. 124', 'D. 130'], explanation: '48=2^4×3，因数和=(1+2+4+8+16)×(1+3)=31×4=124。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  { question_body: '60的因数和是多少？', answer: 'C', options_json: ['A. 140', 'B. 150', 'C. 168', 'D. 180'], explanation: '60=2^2×3×5，因数和=(1+2+4)×(1+3)×(1+5)=7×4×6=168。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  { question_body: '72的因数和是多少？', answer: 'D', options_json: ['A. 140', 'B. 160', 'C. 180', 'D. 195'], explanation: '72=2^3×3^2，因数和=(1+2+4+8)×(1+3+9)=15×13=195。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×3×5，这个数的因数和是多少？', answer: 'C', options_json: ['A. 60', 'B. 65', 'C. 72', 'D. 80'], explanation: '2×3×5=30，因数和=(1+2)×(1+3)×(1+5)=3×4×6=72。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  { question_body: '100的因数和是多少？', answer: 'B', options_json: ['A. 200', 'B. 217', 'C. 220', 'D. 225'], explanation: '100=2^2×5^2，因数和=(1+2+4)×(1+5+25)=7×31=217。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数分解质因数是2×2×3×3，这个数的因数和是多少？', answer: 'C', options_json: ['A. 60', 'B. 70', 'C. 91', 'D. 100'], explanation: '2×2×3×3=36，因数和=(1+2+4)×(1+3+9)=7×13=91。', knowledge_id: 21, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '120的因数和是多少？', answer: 'D', options_json: ['A. 300', 'B. 320', 'C. 340', 'D. 360'], explanation: '120=2^3×3×5，因数和=(1+2+4+8)×(1+3)×(1+5)=15×4×6=360。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  { question_body: '180的因数和是多少？', answer: 'C', options_json: ['A. 400', 'B. 450', 'C. 546', 'D. 600'], explanation: '180=2^2×3^2×5，因数和=(1+2+4)×(1+3+9)×(1+5)=7×13×6=546。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2^3×3^2，这个数的因数和是多少？', answer: 'C', options_json: ['A. 150', 'B. 180', 'C. 195', 'D. 210'], explanation: '2^3×3^2=72，因数和=(1+2+4+8)×(1+3+9)=15×13=195。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  { question_body: '360的因数和是多少？', answer: 'D', options_json: ['A. 800', 'B. 900', 'C. 1000', 'D. 1170'], explanation: '360=2^3×3^2×5，因数和=(1+2+4+8)×(1+3+9)×(1+5)=15×13×6=1170。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数分解质因数是2^4×3，这个数的因数和是多少？', answer: 'B', options_json: ['A. 100', 'B. 124', 'C. 130', 'D. 140'], explanation: '2^4×3=48，因数和=(1+2+4+8+16)×(1+3)=31×4=124。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  { question_body: '504的因数和是多少？', answer: 'C', options_json: ['A. 1200', 'B. 1500', 'C. 1560', 'D. 1600'], explanation: '504=2^3×3^2×7，因数和=(1+2+4+8)×(1+3+9)×(1+7)=15×13×8=1560。', knowledge_id: 21, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：因数和定理适用于所有正整数。', answer: '正确', options_json: ['正确', '错误'], explanation: '因数和定理适用于任何正整数。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1的因数和是1。', answer: '正确', options_json: ['正确', '错误'], explanation: '1只有一个因数1，和为1。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：质数的因数和是它本身加1。', answer: '正确', options_json: ['正确', '错误'], explanation: '质数p的因数有1和p，和为1+p。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果两个数的质因数分解相同，它们的因数和也相同。', answer: '正确', options_json: ['正确', '错误'], explanation: '因数和由质因数分解决定。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：6的因数和是12。', answer: '正确', options_json: ['正确', '错误'], explanation: '6的因数有1,2,3,6，和为12。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：36的因数和是90。', answer: '错误', options_json: ['正确', '错误'], explanation: '36的因数和是91，不是90。', knowledge_id: 21, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '6的因数和是____。', answer: '12', options_json: null, explanation: '6的因数有1,2,3,6，和为12。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  { question_body: '8的因数和是____。', answer: '15', options_json: null, explanation: '8的因数有1,2,4,8，和为15。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  { question_body: '12的因数和是____。', answer: '28', options_json: null, explanation: '12的因数有1,2,3,4,6,12，和为28。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  { question_body: '18的因数和是____。', answer: '39', options_json: null, explanation: '18的因数有1,2,3,6,9,18，和为39。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  { question_body: '24的因数和是____。', answer: '60', options_json: null, explanation: '24的因数有1,2,3,4,6,8,12,24，和为60。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  { question_body: '30的因数和是____。', answer: '72', options_json: null, explanation: '30的因数有1,2,3,5,6,10,15,30，和为72。', knowledge_id: 21, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '48的因数和是____。', answer: '124', options_json: null, explanation: '48=2^4×3，因数和=(1+2+4+8+16)×(1+3)=31×4=124。', knowledge_id: 21, question_type_id: 1, difficulty_id: 4 },
  { question_body: '60的因数和是____。', answer: '168', options_json: null, explanation: '60=2^2×3×5，因数和=(1+2+4)×(1+3)×(1+5)=7×4×6=168。', knowledge_id: 21, question_type_id: 1, difficulty_id: 4 },
  { question_body: '72的因数和是____。', answer: '195', options_json: null, explanation: '72=2^3×3^2，因数和=(1+2+4+8)×(1+3+9)=15×13=195。', knowledge_id: 21, question_type_id: 1, difficulty_id: 4 },
  { question_body: '120的因数和是____。', answer: '360', options_json: null, explanation: '120=2^3×3×5，因数和=(1+2+4+8)×(1+3)×(1+5)=15×4×6=360。', knowledge_id: 21, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge21Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点21题目生成完成，共插入 ${knowledge21Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
