const mysql = require('mysql2/promise');
const k83 = [
  { question_body: '容斥原理的基本公式是什么？', answer: 'A', options_json: ['A. |A∪B|=|A|+|B|-|A∩B|', 'B. |A∪B|=|A|-|B|', 'C. |A∩B|=|A|+|B|', 'D. |A-B|=|A|-|B|'], explanation: '容斥原理：|A∪B|=|A|+|B|-|A∩B|。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到100中，能被2或3整除的数有多少个？', answer: 'B', options_json: ['A. 50', 'B. 67', 'C. 66', 'D. 68'], explanation: '能被2整除：50个；能被3整除：33个；能被6整除：16个；50+33-16=67个。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '容斥原理用于什么问题？', answer: 'C', options_json: ['A. 计算', 'B. 分类计数', 'C. 集合的交并补', 'D. 画图'], explanation: '容斥原理用于集合的交并补问题。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到100中，能被2或5整除的数有多少个？', answer: 'D', options_json: ['A. 40', 'B. 50', 'C. 60', 'D. 60'], explanation: '能被2整除：50个；能被5整除：20个；能被10整除：10个；50+20-10=60个。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '容斥原理的核心是什么？', answer: 'A', options_json: ['A. 减去重复计数', 'B. 加上重复计数', 'C. 忽略重复', 'D. 随机'], explanation: '容斥原理的核心是减去重复计数。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到50中，能被2或3整除的数有多少个？', answer: 'B', options_json: ['A. 25', 'B. 33', 'C. 34', 'D. 32'], explanation: '能被2整除：25个；能被3整除：16个；能被6整除：8个；25+16-8=33个。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到100中，能被3或5整除的数有多少个？', answer: 'C', options_json: ['A. 47', 'B. 53', 'C. 47', 'D. 55'], explanation: '能被3整除：33个；能被5整除：20个；能被15整除：6个；33+20-6=47个。', knowledge_id: 83, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1到100中，能被2、3、5整除的数有多少个？', answer: 'D', options_json: ['A. 23', 'B. 24', 'C. 25', 'D. 23'], explanation: '用容斥原理三集合公式计算。', knowledge_id: 83, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个班有40人，20人参加数学，25人参加语文，10人两科都参加，有多少人参加？', answer: 'A', options_json: ['A. 35', 'B. 45', 'C. 40', 'D. 30'], explanation: '20+25-10=35人。', knowledge_id: 83, question_type_id: 2, difficulty_id: 3 },
  { question_body: '容斥原理的推广公式是什么？', answer: 'B', options_json: ['A. |A∪B∪C|=|A|+|B|+|C|', 'B. |A∪B∪C|=|A|+|B|+|C|-|A∩B|-|A∩C|-|B∩C|+|A∩B∩C|', 'C. |A∩B∩C|=|A|+|B|+|C|', 'D. |A∪B∪C|=|A|-|B|-|C|'], explanation: '三集合容斥原理公式。', knowledge_id: 83, question_type_id: 2, difficulty_id: 3 },
  { question_body: '判断：容斥原理用于集合的交并补问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '容斥原理用于集合的交并补问题。', knowledge_id: 83, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：|A∪B|=|A|+|B|-|A∩B|。', answer: '正确', options_json: ['正确', '错误'], explanation: '容斥原理：|A∪B|=|A|+|B|-|A∩B|。', knowledge_id: 83, question_type_id: 3, difficulty_id: 2 },
  { question_body: '容斥原理的核心是____重复计数。', answer: '减去', options_json: null, explanation: '容斥原理的核心是减去重复计数。', knowledge_id: 83, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1到100中，能被2或3整除的有____个。', answer: '67', options_json: null, explanation: '50+33-16=67个。', knowledge_id: 83, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1到100中，能被2或5整除的有____个。', answer: '60', options_json: null, explanation: '50+20-10=60个。', knowledge_id: 83, question_type_id: 1, difficulty_id: 2 }
];
async function run(id, qs) {
  const conn = await mysql.createConnection({ host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com', port: 3306, user: 'mathmaster_dev', password: 'mathmaster_DEV123!', database: 'mathmaster' });
  try { await conn.beginTransaction(); for (const q of qs) await conn.execute('INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]); await conn.commit(); console.log(`知识点${id}完成`); } catch (e) { await conn.rollback(); } finally { await conn.end(); }
}
run(83, k83);
