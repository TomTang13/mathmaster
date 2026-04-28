const mysql = require('mysql2/promise');

const knowledge16Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '以下哪个数能被4整除？', answer: 'B', options_json: ['A. 14', 'B. 24', 'C. 34', 'D. 54'], explanation: '末两位能被4整除，这个数就能被4整除。24的末两位是24，24÷4=6。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被8整除？', answer: 'C', options_json: ['A. 16', 'B. 24', 'C. 32', 'D. 48'], explanation: '末三位能被8整除，这个数就能被8整除。32÷8=4。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被25整除？', answer: 'D', options_json: ['A. 50', 'B. 60', 'C. 70', 'D. 75'], explanation: '末两位能被25整除，这个数就能被25整除。75÷25=3。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被125整除？', answer: 'B', options_json: ['A. 200', 'B. 250', 'C. 300', 'D. 400'], explanation: '末三位能被125整除，这个数就能被125整除。250÷125=2。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '124能被4整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '末两位是24，24÷4=6，所以124能被4整除。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '136能被8整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '末三位是136，136÷8=17，所以136能被8整除。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被4和25同时整除？', answer: 'C', options_json: ['A. 50', 'B. 75', 'C. 100', 'D. 150'], explanation: '能被4和25同时整除即能被100整除。100÷100=1。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被8和125同时整除？', answer: 'D', options_json: ['A. 250', 'B. 500', 'C. 750', 'D. 1000'], explanation: '能被8和125同时整除即能被1000整除。1000÷1000=1。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '324能被4整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '末两位是24，24÷4=6，所以324能被4整除。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '500能被25整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '末两位是00，00÷25=0，所以500能被25整除。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被4整除？', answer: 'C', options_json: ['A. 102', 'B. 106', 'C. 112', 'D. 118'], explanation: '末两位能被4整除。112的末两位是12，12÷4=3。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被8整除？', answer: 'B', options_json: ['A. 120', 'B. 128', 'C. 136', 'D. 144'], explanation: '末三位能被8整除。128÷8=16。', knowledge_id: 16, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在1-200中，能被4整除的数有多少个？', answer: 'C', options_json: ['A. 40个', 'B. 45个', 'C. 50个', 'D. 55个'], explanation: '200÷4=50个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个四位数12□4，能被4整除，□里最大可以填几？', answer: 'B', options_json: ['A. 7', 'B. 8', 'C. 6', 'D. 9'], explanation: '末两位是□4，要能被4整除。□4可以是04,14,24,34,44,54,64,74,84,94。能被4整除的有04,24,44,64,84。□最大填8（84÷4=21）。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-500中，能被25整除的数有多少个？', answer: 'B', options_json: ['A. 15个', 'B. 20个', 'C. 25个', 'D. 30个'], explanation: '500÷25=20个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三位数□25，能被25整除，□里可以填几？', answer: 'A', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '末两位是25，25÷25=1，所以任何□25都能被25整除。□可以是1-9。选项中只有1。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-1000中，能被8整除的数有多少个？', answer: 'C', options_json: ['A. 100个', 'B. 110个', 'C. 125个', 'D. 150个'], explanation: '1000÷8=125个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  { question_body: '以下哪个数能被4和8同时整除？', answer: 'B', options_json: ['A. 24', 'B. 32', 'C. 48', 'D. 64'], explanation: '能被8整除的数一定能被4整除。32÷8=4。', knowledge_id: 16, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在1-1000中，能被4和25同时整除的数有多少个？', answer: 'B', options_json: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 15个'], explanation: '能被4和25同时整除即能被100整除。1000÷100=10个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-2000中，能被8和125同时整除的数有多少个？', answer: 'B', options_json: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'], explanation: '能被8和125同时整除即能被1000整除。2000÷1000=2个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个四位数3□2□，能被4整除，这个数最大是多少？', answer: 'C', options_json: ['A. 3920', 'B. 3924', 'C. 3928', 'D. 3932'], explanation: '末两位是2□，要能被4整除。20,24,28能被4整除。最大是3928。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-500中，能被4整除但不能被8整除的数有多少个？', answer: 'B', options_json: ['A. 50个', 'B. 63个', 'C. 60个', 'D. 62个'], explanation: '能被4整除的有125个（500÷4=125），能被8整除的有62个（500÷8=62余4）。125-62=63个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个五位数12□25，能被25整除，□里可以填几？', answer: 'D', options_json: ['A. 0', 'B. 2', 'C. 5', 'D. 任何数字'], explanation: '末两位是25，25÷25=1，所以末两位是25的数都能被25整除。□可以是任何数字。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-1000中，能被125整除的数有多少个？', answer: 'B', options_json: ['A. 6个', 'B. 8个', 'C. 10个', 'D. 12个'], explanation: '1000÷125=8个。', knowledge_id: 16, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：末两位能被4整除的数，一定能被4整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被4整除的数的特征是末两位能被4整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：末三位能被8整除的数，一定能被8整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被8整除的数的特征是末三位能被8整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：末两位能被25整除的数，一定能被25整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被25整除的数的特征是末两位能被25整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被8整除的数一定能被4整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '8是4的倍数，能被8整除的数一定能被4整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被4整除的数一定能被8整除。', answer: '错误', options_json: ['正确', '错误'], explanation: '例如12能被4整除但不能被8整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：末三位能被125整除的数，一定能被125整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被125整除的数的特征是末三位能被125整除。', knowledge_id: 16, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '末两位能被____整除的数，一定能被4整除。', answer: '4', options_json: null, explanation: '能被4整除的数的特征是末两位能被4整除。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  { question_body: '末三位能被____整除的数，一定能被8整除。', answer: '8', options_json: null, explanation: '能被8整除的数的特征是末三位能被8整除。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  { question_body: '末两位能被____整除的数，一定能被25整除。', answer: '25', options_json: null, explanation: '能被25整除的数的特征是末两位能被25整除。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  { question_body: '124能被4整除吗？____（填1表示能，填2表示不能）', answer: '1', options_json: null, explanation: '末两位是24，24÷4=6，所以124能被4整除。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  { question_body: '136能被8整除吗？____（填1表示能，填2表示不能）', answer: '1', options_json: null, explanation: '136÷8=17，所以136能被8整除。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在1-200中，能被4整除的数有____个。', answer: '50', options_json: null, explanation: '200÷4=50个。', knowledge_id: 16, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在1-1000中，能被4和25同时整除的数有____个。', answer: '10', options_json: null, explanation: '能被100整除，1000÷100=10个。', knowledge_id: 16, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-2000中，能被8和125同时整除的数有____个。', answer: '2', options_json: null, explanation: '能被1000整除，2000÷1000=2个。', knowledge_id: 16, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-500中，能被4整除但不能被8整除的数有____个。', answer: '63', options_json: null, explanation: '能被4整除的有125个，能被8整除的有62个。125-62=63个。', knowledge_id: 16, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-1000中，能被125整除的数有____个。', answer: '8', options_json: null, explanation: '1000÷125=8个。', knowledge_id: 16, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge16Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点16题目生成完成，共插入 ${knowledge16Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
