const mysql = require('mysql2/promise');

const knowledge36Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '差不变原理的基本思想是？', answer: 'A', options_json: ['A. 被减数和减数同时加上或减去相同的数，差不变', 'B. 被减数和减数同时乘以或除以相同的数，差不变', 'C. 被减数和减数同时加上或减去不同的数，差不变', 'D. 被减数和减数同时乘以或除以不同的数，差不变'], explanation: '差不变原理的基本思想是被减数和减数同时加上或减去相同的数，差不变。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果a - b = 5，那么(a + 3) - (b + 3) = ?', answer: 'B', options_json: ['A. 2', 'B. 5', 'C. 8', 'D. 11'], explanation: '根据差不变原理，被减数和减数同时加上3，差不变，所以结果还是5。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果x - y = 8，那么(x - 2) - (y - 2) = ?', answer: 'C', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 10'], explanation: '根据差不变原理，被减数和减数同时减去2，差不变，所以结果还是8。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '差不变原理适用于？', answer: 'D', options_json: ['A. 加法', 'B. 乘法', 'C. 除法', 'D. 减法'], explanation: '差不变原理适用于减法运算。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果m - n = 12，那么(m + 5) - (n + 5) = ?', answer: 'B', options_json: ['A. 7', 'B. 12', 'C. 17', 'D. 22'], explanation: '根据差不变原理，被减数和减数同时加上5，差不变，所以结果还是12。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果p - q = 7，那么(p - 4) - (q - 4) = ?', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 7', 'D. 11'], explanation: '根据差不变原理，被减数和减数同时减去4，差不变，所以结果还是7。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '差不变原理的核心是？', answer: 'A', options_json: ['A. 保持差不变', 'B. 改变差', 'C. 保持被减数不变', 'D. 保持减数不变'], explanation: '差不变原理的核心是保持差不变。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果a - b = 9，那么(a + 10) - (b + 10) = ?', answer: 'B', options_json: ['A. -1', 'B. 9', 'C. 19', 'D. 29'], explanation: '根据差不变原理，被减数和减数同时加上10，差不变，所以结果还是9。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果x - y = 6，那么(x - 5) - (y - 5) = ?', answer: 'C', options_json: ['A. 1', 'B. 5', 'C. 6', 'D. 11'], explanation: '根据差不变原理，被减数和减数同时减去5，差不变，所以结果还是6。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '差不变原理在数学中的应用是？', answer: 'A', options_json: ['A. 简化计算', 'B. 增加计算难度', 'C. 改变差的大小', 'D. 与计算无关'], explanation: '差不变原理在数学中的应用是简化计算。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果m - n = 15，那么(m + 7) - (n + 7) = ?', answer: 'B', options_json: ['A. 8', 'B. 15', 'C. 22', 'D. 29'], explanation: '根据差不变原理，被减数和减数同时加上7，差不变，所以结果还是15。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果p - q = 4，那么(p - 3) - (q - 3) = ?', answer: 'C', options_json: ['A. 1', 'B. 3', 'C. 4', 'D. 7'], explanation: '根据差不变原理，被减数和减数同时减去3，差不变，所以结果还是4。', knowledge_id: 36, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '如果a - b = 10，那么(a + 5) - (b + 3) = ?', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 8', 'D. 15'], explanation: '被减数加5，减数加3，差增加2，所以结果是10 + 2 = 12。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果x - y = 8，那么(x - 2) - (y + 1) = ?', answer: 'A', options_json: ['A. 5', 'B. 8', 'C. 11', 'D. 10'], explanation: '被减数减2，减数加1，差减少3，所以结果是8 - 3 = 5。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  { question_body: '差不变原理的数学表达式是？', answer: 'C', options_json: ['A. (a + c) - (b + c) = a - b', 'B. (a - c) - (b - c) = a - b', 'C. 以上都是', 'D. 以上都不是'], explanation: '差不变原理的数学表达式包括(a + c) - (b + c) = a - b和(a - c) - (b - c) = a - b。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果m - n = 12，那么(m + 4) - (n - 2) = ?', answer: 'D', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '被减数加4，减数减2，差增加6，所以结果是12 + 6 = 18。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果p - q = 7，那么(p - 5) - (q + 3) = ?', answer: 'A', options_json: ['A. -1', 'B. 7', 'C. 9', 'D. 15'], explanation: '被减数减5，减数加3，差减少8，所以结果是7 - 8 = -1。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  { question_body: '差不变原理的逆应用是？', answer: 'B', options_json: ['A. 改变差', 'B. 保持差不变', 'C. 增加差', 'D. 减少差'], explanation: '差不变原理的逆应用是保持差不变。', knowledge_id: 36, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '如果a - b = 15，那么(a + 8) - (b + 2) = ?', answer: 'B', options_json: ['A. 15', 'B. 21', 'C. 19', 'D. 23'], explanation: '被减数加8，减数加2，差增加6，所以结果是15 + 6 = 21。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  { question_body: '如果x - y = 10，那么(x - 3) - (y - 5) = ?', answer: 'C', options_json: ['A. 8', 'B. 10', 'C. 12', 'D. 15'], explanation: '被减数减3，减数减5，差增加2，所以结果是10 + 2 = 12。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  { question_body: '如果m - n = 12，那么(m + 6) - (n - 3) = ?', answer: 'D', options_json: ['A. 12', 'B. 15', 'C. 18', 'D. 21'], explanation: '被减数加6，减数减3，差增加9，所以结果是12 + 9 = 21。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  { question_body: '如果p - q = 8，那么(p - 4) - (q + 2) = ?', answer: 'A', options_json: ['A. 2', 'B. 8', 'C. 10', 'D. 14'], explanation: '被减数减4，减数加2，差减少6，所以结果是8 - 6 = 2。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  { question_body: '差不变原理在解决数学问题时的作用是？', answer: 'A', options_json: ['A. 简化计算', 'B. 增加计算步骤', 'C. 改变差的大小', 'D. 与计算无关'], explanation: '差不变原理在解决数学问题时的作用是简化计算。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  { question_body: '如果a - b = 20，那么(a + 10) - (b + 5) = ?', answer: 'B', options_json: ['A. 20', 'B. 25', 'C. 15', 'D. 35'], explanation: '被减数加10，减数加5，差增加5，所以结果是20 + 5 = 25。', knowledge_id: 36, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：差不变原理的基本思想是被减数和减数同时加上或减去相同的数，差不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '差不变原理的基本思想是被减数和减数同时加上或减去相同的数，差不变。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果a - b = 5，那么(a + 2) - (b + 2) = 5。', answer: '正确', options_json: ['正确', '错误'], explanation: '根据差不变原理，被减数和减数同时加上2，差不变，所以结果还是5。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：差不变原理适用于加法运算。', answer: '错误', options_json: ['正确', '错误'], explanation: '差不变原理适用于减法运算，不适用于加法。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果x - y = 8，那么(x - 3) - (y - 3) = 8。', answer: '正确', options_json: ['正确', '错误'], explanation: '根据差不变原理，被减数和减数同时减去3，差不变，所以结果还是8。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：差不变原理的核心是保持差不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '差不变原理的核心是保持差不变。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果m - n = 10，那么(m + 5) - (n + 3) = 10。', answer: '错误', options_json: ['正确', '错误'], explanation: '被减数加5，减数加3，差增加2，所以结果是12，不是10。', knowledge_id: 36, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '差不变原理的基本思想是被减数和减数同时加上或减去____的数，差不变。', answer: '相同', options_json: null, explanation: '差不变原理的基本思想是被减数和减数同时加上或减去相同的数，差不变。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果a - b = 6，那么(a + 4) - (b + 4) = ____。', answer: '6', options_json: null, explanation: '根据差不变原理，被减数和减数同时加上4，差不变，所以结果还是6。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果x - y = 9，那么(x - 2) - (y - 2) = ____。', answer: '9', options_json: null, explanation: '根据差不变原理，被减数和减数同时减去2，差不变，所以结果还是9。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  { question_body: '差不变原理适用于____运算。', answer: '减法', options_json: null, explanation: '差不变原理适用于减法运算。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  { question_body: '差不变原理的核心是保持____不变。', answer: '差', options_json: null, explanation: '差不变原理的核心是保持差不变。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果m - n = 12，那么(m + 5) - (n + 5) = ____。', answer: '12', options_json: null, explanation: '根据差不变原理，被减数和减数同时加上5，差不变，所以结果还是12。', knowledge_id: 36, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '如果a - b = 10，那么(a + 3) - (b + 1) = ____。', answer: '12', options_json: null, explanation: '被减数加3，减数加1，差增加2，所以结果是10 + 2 = 12。', knowledge_id: 36, question_type_id: 1, difficulty_id: 4 },
  { question_body: '如果x - y = 8，那么(x - 4) - (y + 2) = ____。', answer: '2', options_json: null, explanation: '被减数减4，减数加2，差减少6，所以结果是8 - 6 = 2。', knowledge_id: 36, question_type_id: 1, difficulty_id: 4 },
  { question_body: '如果m - n = 15，那么(m + 6) - (n - 3) = ____。', answer: '24', options_json: null, explanation: '被减数加6，减数减3，差增加9，所以结果是15 + 9 = 24。', knowledge_id: 36, question_type_id: 1, difficulty_id: 4 },
  { question_body: '如果p - q = 7，那么(p - 5) - (q - 8) = ____。', answer: '10', options_json: null, explanation: '被减数减5，减数减8，差增加3，所以结果是7 + 3 = 10。', knowledge_id: 36, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge36Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点36题目生成完成，共插入 ${knowledge36Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
