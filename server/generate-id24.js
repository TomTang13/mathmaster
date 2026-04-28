const mysql = require('mysql2/promise');

const knowledge24Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '以下哪个数是完全平方数？', answer: 'B', options_json: ['A. 20', 'B. 25', 'C. 30', 'D. 35'], explanation: '25=5²，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数是完全平方数？', answer: 'C', options_json: ['A. 40', 'B. 44', 'C. 36', 'D. 42'], explanation: '36=6²，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '100以内最大的完全平方数是多少？', answer: 'D', options_json: ['A. 81', 'B. 90', 'C. 95', 'D. 81'], explanation: '9²=81，10²=100，所以100以内最大的完全平方数是81。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数不是完全平方数？', answer: 'C', options_json: ['A. 16', 'B. 25', 'C. 27', 'D. 36'], explanation: '27不是完全平方数，16=4²，25=5²，36=6²。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到20之间的完全平方数有几个？', answer: 'B', options_json: ['A. 3个', 'B. 4个', 'C. 5个', 'D. 6个'], explanation: '1,4,9,16，共4个。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '25是哪个数的平方？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 5', 'D. 6'], explanation: '5²=25。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '36是哪个数的平方？', answer: 'D', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 6'], explanation: '6²=36。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数是完全平方数？', answer: 'A', options_json: ['A. 49', 'B. 50', 'C. 51', 'D. 52'], explanation: '49=7²，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '144是哪个数的平方？', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 11', 'D. 13'], explanation: '12²=144。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '169是哪个数的平方？', answer: 'C', options_json: ['A. 12', 'B. 13', 'C. 13', 'D. 14'], explanation: '13²=169。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '196是哪个数的平方？', answer: 'D', options_json: ['A. 13', 'B. 14', 'C. 15', 'D. 14'], explanation: '14²=196。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  { question_body: '225是哪个数的平方？', answer: 'A', options_json: ['A. 15', 'B. 16', 'C. 17', 'D. 18'], explanation: '15²=225。', knowledge_id: 24, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '以下哪个数是完全平方数？', answer: 'C', options_json: ['A. 1000', 'B. 1024', 'C. 1024', 'D. 1050'], explanation: '1024=32²，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个完全平方数的末位数字不可能是？', answer: 'B', options_json: ['A. 0', 'B. 2', 'C. 4', 'D. 9'], explanation: '完全平方数的末位数字只能是0,1,4,5,6,9。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1000以内最大的完全平方数是多少？', answer: 'A', options_json: ['A. 961', 'B. 970', 'C. 980', 'D. 990'], explanation: '31²=961，32²=1024，所以1000以内最大的完全平方数是961。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  { question_body: '200到300之间的完全平方数有几个？', answer: 'B', options_json: ['A. 2个', 'B. 3个', 'C. 4个', 'D. 5个'], explanation: '14²=196, 15²=225, 16²=256, 17²=289, 18²=324。所以200-300之间有3个：225,256,289。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  { question_body: '以下哪个数是完全平方数？', answer: 'D', options_json: ['A. 2025', 'B. 2026', 'C. 2027', 'D. 2025'], explanation: '45²=2025，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个完全平方数除以4的余数不可能是？', answer: 'C', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], explanation: '完全平方数除以4的余数只能是0或1。', knowledge_id: 24, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '以下哪个数是完全平方数？', answer: 'C', options_json: ['A. 9801', 'B. 9802', 'C. 9801', 'D. 9803'], explanation: '99²=9801，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数的平方是1225，这个数是多少？', answer: 'B', options_json: ['A. 35', 'B. 35', 'C. 36', 'D. 37'], explanation: '35²=1225。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个完全平方数的各位数字之和是9，这个数最小是多少？', answer: 'A', options_json: ['A. 9', 'B. 81', 'C. 144', 'D. 225'], explanation: '9=3²，各位数字和为9，是最小的。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  { question_body: '以下哪个数是完全平方数？', answer: 'D', options_json: ['A. 1681', 'B. 1682', 'C. 1683', 'D. 1681'], explanation: '41²=1681，是完全平方数。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个完全平方数减去1后能被3整除，这个数最小是多少？', answer: 'B', options_json: ['A. 4', 'B. 4', 'C. 9', 'D. 16'], explanation: '4-1=3，能被3整除。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  { question_body: '10000以内最大的完全平方数是多少？', answer: 'C', options_json: ['A. 9801', 'B. 9900', 'C. 9801', 'D. 9999'], explanation: '99²=9801，100²=10000，所以10000以内最大的完全平方数是9801。', knowledge_id: 24, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：1是完全平方数。', answer: '正确', options_json: ['正确', '错误'], explanation: '1=1²，是完全平方数。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：0是完全平方数。', answer: '正确', options_json: ['正确', '错误'], explanation: '0=0²，是完全平方数。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：完全平方数的末位数字可以是2。', answer: '错误', options_json: ['正确', '错误'], explanation: '完全平方数的末位数字只能是0,1,4,5,6,9。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：16是完全平方数。', answer: '正确', options_json: ['正确', '错误'], explanation: '16=4²，是完全平方数。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：25是完全平方数。', answer: '正确', options_json: ['正确', '错误'], explanation: '25=5²，是完全平方数。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：32是完全平方数。', answer: '错误', options_json: ['正确', '错误'], explanation: '32不是完全平方数，5²=25，6²=36。', knowledge_id: 24, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '25是____的平方。', answer: '5', options_json: null, explanation: '5²=25。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  { question_body: '36是____的平方。', answer: '6', options_json: null, explanation: '6²=36。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  { question_body: '49是____的平方。', answer: '7', options_json: null, explanation: '7²=49。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  { question_body: '64是____的平方。', answer: '8', options_json: null, explanation: '8²=64。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  { question_body: '81是____的平方。', answer: '9', options_json: null, explanation: '9²=81。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  { question_body: '100是____的平方。', answer: '10', options_json: null, explanation: '10²=100。', knowledge_id: 24, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '1000以内最大的完全平方数是____。', answer: '961', options_json: null, explanation: '31²=961，32²=1024，所以1000以内最大的完全平方数是961。', knowledge_id: 24, question_type_id: 1, difficulty_id: 4 },
  { question_body: '200到300之间的完全平方数有____个。', answer: '3', options_json: null, explanation: '225,256,289，共3个。', knowledge_id: 24, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数的平方是1225，这个数是____。', answer: '35', options_json: null, explanation: '35²=1225。', knowledge_id: 24, question_type_id: 1, difficulty_id: 4 },
  { question_body: '10000以内最大的完全平方数是____。', answer: '9801', options_json: null, explanation: '99²=9801，100²=10000，所以10000以内最大的完全平方数是9801。', knowledge_id: 24, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge24Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点24题目生成完成，共插入 ${knowledge24Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
