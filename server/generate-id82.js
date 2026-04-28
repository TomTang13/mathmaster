const mysql = require('mysql2/promise');

const k82 = [
  { question_body: 'P(5,2)等于多少？', answer: 'A', options_json: ['A. 20', 'B. 10', 'C. 60', 'D. 120'], explanation: 'P(5,2)=5×4=20。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(5,2)等于多少？', answer: 'B', options_json: ['A. 20', 'B. 10', 'C. 60', 'D. 120'], explanation: 'C(5,2)=5×4÷2=10。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'P(6,3)等于多少？', answer: 'C', options_json: ['A. 18', 'B. 120', 'C. 120', 'D. 720'], explanation: 'P(6,3)=6×5×4=120。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(6,3)等于多少？', answer: 'D', options_json: ['A. 18', 'B. 120', 'C. 20', 'D. 20'], explanation: 'C(6,3)=6×5×4÷6=20。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'P(n,n)等于多少？', answer: 'A', options_json: ['A. n!', 'B. 1', 'C. n', 'D. 2n'], explanation: 'P(n,n)=n!。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(n,0)等于多少？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. n', 'D. 2'], explanation: 'C(n,0)=1。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(n,n)等于多少？', answer: 'C', options_json: ['A. 0', 'B. n', 'C. 1', 'D. 2'], explanation: 'C(n,n)=1。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(5,3)等于多少？', answer: 'D', options_json: ['A. 10', 'B. 60', 'C. 15', 'D. 10'], explanation: 'C(5,3)=5×4×3÷6=10。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'P(4,4)等于多少？', answer: 'A', options_json: ['A. 24', 'B. 1', 'C. 4', 'D. 16'], explanation: 'P(4,4)=4×3×2×1=24。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(4,2)等于多少？', answer: 'B', options_json: ['A. 6', 'B. 6', 'C. 12', 'D. 8'], explanation: 'C(4,2)=4×3÷2=6。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'P(7,2)等于多少？', answer: 'C', options_json: ['A. 14', 'B. 21', 'C. 42', 'D. 84'], explanation: 'P(7,2)=7×6=42。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'C(7,2)等于多少？', answer: 'D', options_json: ['A. 14', 'B. 21', 'C. 42', 'D. 21'], explanation: 'C(7,2)=7×6÷2=21。', knowledge_id: 82, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'P(8,3)等于多少？', answer: 'A', options_json: ['A. 336', 'B. 168', 'C. 504', 'D. 672'], explanation: 'P(8,3)=8×7×6=336。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'C(8,3)等于多少？', answer: 'B', options_json: ['A. 336', 'B. 56', 'C. 168', 'D. 84'], explanation: 'C(8,3)=8×7×6÷6=56。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'P(10,2)等于多少？', answer: 'C', options_json: ['A. 20', 'B. 45', 'C. 90', 'D. 100'], explanation: 'P(10,2)=10×9=90。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'C(10,2)等于多少？', answer: 'D', options_json: ['A. 20', 'B. 45', 'C. 90', 'D. 45'], explanation: 'C(10,2)=10×9÷2=45。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'P(6,4)等于多少？', answer: 'A', options_json: ['A. 360', 'B. 720', 'C. 180', 'D. 120'], explanation: 'P(6,4)=6×5×4×3=360。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'C(6,4)等于多少？', answer: 'B', options_json: ['A. 15', 'B. 15', 'C. 30', 'D. 360'], explanation: 'C(6,4)=6×5×4×3÷24=15。', knowledge_id: 82, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'P(9,3)等于多少？', answer: 'C', options_json: ['A. 504', 'B. 252', 'C. 504', 'D. 729'], explanation: 'P(9,3)=9×8×7=504。', knowledge_id: 82, question_type_id: 2, difficulty_id: 4 },
  { question_body: 'C(9,3)等于多少？', answer: 'D', options_json: ['A. 504', 'B. 252', 'C. 84', 'D. 84'], explanation: 'C(9,3)=9×8×7÷6=84。', knowledge_id: 82, question_type_id: 2, difficulty_id: 4 },
  { question_body: '判断：P(5,2)=20。', answer: '正确', options_json: ['正确', '错误'], explanation: 'P(5,2)=5×4=20。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：C(5,2)=10。', answer: '正确', options_json: ['正确', '错误'], explanation: 'C(5,2)=5×4÷2=10。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：P(n,n)=n!。', answer: '正确', options_json: ['正确', '错误'], explanation: 'P(n,n)=n!。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：C(n,0)=1。', answer: '正确', options_json: ['正确', '错误'], explanation: 'C(n,0)=1。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：P(6,3)=120。', answer: '正确', options_json: ['正确', '错误'], explanation: 'P(6,3)=6×5×4=120。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：C(6,3)=20。', answer: '正确', options_json: ['正确', '错误'], explanation: 'C(6,3)=6×5×4÷6=20。', knowledge_id: 82, question_type_id: 3, difficulty_id: 2 },
  { question_body: 'P(5,2)=____。', answer: '20', options_json: null, explanation: 'P(5,2)=5×4=20。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'C(5,2)=____。', answer: '10', options_json: null, explanation: 'C(5,2)=5×4÷2=10。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'P(6,3)=____。', answer: '120', options_json: null, explanation: 'P(6,3)=6×5×4=120。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'C(6,3)=____。', answer: '20', options_json: null, explanation: 'C(6,3)=6×5×4÷6=20。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'P(n,n)=____。', answer: 'n!', options_json: null, explanation: 'P(n,n)=n!。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'C(n,0)=____。', answer: '1', options_json: null, explanation: 'C(n,0)=1。', knowledge_id: 82, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'P(8,3)=____。', answer: '336', options_json: null, explanation: 'P(8,3)=8×7×6=336。', knowledge_id: 82, question_type_id: 1, difficulty_id: 4 },
  { question_body: 'C(8,3)=____。', answer: '56', options_json: null, explanation: 'C(8,3)=8×7×6÷6=56。', knowledge_id: 82, question_type_id: 1, difficulty_id: 4 },
  { question_body: 'P(10,2)=____。', answer: '90', options_json: null, explanation: 'P(10,2)=10×9=90。', knowledge_id: 82, question_type_id: 1, difficulty_id: 4 },
  { question_body: 'C(10,2)=____。', answer: '45', options_json: null, explanation: 'C(10,2)=10×9÷2=45。', knowledge_id: 82, question_type_id: 1, difficulty_id: 4 }
];

async function run(id, qs) {
  const conn = await mysql.createConnection({ host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com', port: 3306, user: 'mathmaster_dev', password: 'mathmaster_DEV123!', database: 'mathmaster' });
  try { await conn.beginTransaction(); for (const q of qs) await conn.execute('INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]); await conn.commit(); console.log(`知识点${id}完成，插入${qs.length}题`); } catch (e) { await conn.rollback(); console.error('失败:', e); } finally { await conn.end(); }
}
run(82, k82);
