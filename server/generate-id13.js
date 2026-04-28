const mysql = require('mysql2/promise');

const knowledge13Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '12是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既是奇数又是偶数'], explanation: '12能被2整除，是偶数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '15是奇数还是偶数？', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '15不能被2整除，是奇数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '偶数 + 偶数 = ?', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '偶数+偶数=偶数，如2+4=6。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '奇数 + 奇数 = ?', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '奇数+奇数=偶数，如3+5=8。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '偶数 + 奇数 = ?', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '偶数+奇数=奇数，如2+3=5。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '0是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '0能被2整除（0÷2=0），是偶数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '最小的偶数是多少？', answer: 'A', options_json: ['A. 0', 'B. 2', 'C. 1', 'D. -2'], explanation: '0是最小的偶数（在小学范围内）。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '最小的奇数是多少？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. 3', 'D. -1'], explanation: '1是最小的正奇数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '偶数 × 偶数 = ?', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '偶数×偶数=偶数，如2×4=8。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '奇数 × 奇数 = ?', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '奇数×奇数=奇数，如3×5=15。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '偶数 × 奇数 = ?', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '偶数×奇数=偶数，如2×3=6。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20以内（包括20）有多少个偶数？', answer: 'C', options_json: ['A. 9个', 'B. 10个', 'C. 11个', 'D. 12个'], explanation: '0,2,4,6,8,10,12,14,16,18,20，共11个。', knowledge_id: 13, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '1+2+3+4+5+6+7+8+9+10的结果是奇数还是偶数？', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '1到10中有5个奇数、5个偶数。5个奇数之和是奇数（奇数个奇数相加为奇数），5个偶数之和是偶数，奇数+偶数=奇数。1+2+...+10=55。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  { question_body: '三个连续自然数的和一定是？', answer: 'D', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '设中间数为n，和=3n。若n为奇数，3n为奇数；若n为偶数，3n为偶数。所以可能是奇数也可能是偶数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  { question_body: '两个连续自然数的和一定是？', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: '连续两个数一奇一偶，奇数+偶数=奇数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1+3+5+7+9+11的结果是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '6个奇数相加，偶数个奇数之和为偶数。1+3+5+7+9+11=36。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1×2×3×4×5×6×7×8×9×10的结果是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '乘积中只要有一个偶数因子，结果就是偶数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  { question_body: '100个连续自然数中，奇数和偶数各有多少个？', answer: 'A', options_json: ['A. 各50个', 'B. 奇数51个，偶数49个', 'C. 奇数49个，偶数51个', 'D. 无法确定'], explanation: '100个连续自然数中，奇数和偶数各50个。', knowledge_id: 13, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '1+2+3+...+100的结果是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '1到100有50个奇数、50个偶数。50个奇数之和为偶数（偶数个奇数相加为偶数），50个偶数之和为偶数，偶数+偶数=偶数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  { question_body: '1+2+3+...+99的结果是奇数还是偶数？', answer: 'B', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '1到99有50个奇数、49个偶数。50个奇数之和为偶数（偶数个奇数相加为偶数），49个偶数之和为偶数，偶数+偶数=偶数。1+2+...+99=4950。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  { question_body: 'a是偶数，b是奇数，那么a×b+a+b的结果是？', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 可能是奇数也可能是偶数'], explanation: 'a×b=偶数（偶×奇=偶），a×b+a=偶数+偶数=偶数，偶数+b=偶数+奇数=奇数。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  { question_body: '五个连续奇数的和是125，最大的奇数是多少？', answer: 'C', options_json: ['A. 23', 'B. 25', 'C. 29', 'D. 31'], explanation: '中间数=125÷5=25，五个连续奇数为17,19,21,23,25？不对。重新算：设中间数为x，5x=125，x=25。五个数为21,23,25,27,29，最大是29。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  { question_body: '三个连续偶数的和是72，最小的偶数是多少？', answer: 'B', options_json: ['A. 20', 'B. 22', 'C. 24', 'D. 26'], explanation: '中间数=72÷3=24，三个数为22,24,26，最小是22。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  { question_body: '1+2+3+...+50的结果是奇数还是偶数？', answer: 'A', options_json: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既不是奇数也不是偶数'], explanation: '1到50有25个奇数、25个偶数。25个奇数之和为奇数（奇数个奇数相加为奇数），25个偶数之和为偶数，奇数+偶数=奇数。1+2+...+50=1275。', knowledge_id: 13, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：所有的偶数都能被2整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '偶数的定义就是能被2整除的整数。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：奇数+奇数=奇数。', answer: '错误', options_json: ['正确', '错误'], explanation: '奇数+奇数=偶数，如3+5=8。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：0是偶数。', answer: '正确', options_json: ['正确', '错误'], explanation: '0能被2整除，是偶数。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：偶数×偶数=偶数。', answer: '正确', options_json: ['正确', '错误'], explanation: '偶数×偶数=偶数，如2×4=8。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：奇数×偶数=奇数。', answer: '错误', options_json: ['正确', '错误'], explanation: '奇数×偶数=偶数，如3×2=6。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个连续自然数中，必定有一个是偶数。', answer: '正确', options_json: ['正确', '错误'], explanation: '连续两个数一奇一偶，所以必有一个偶数。', knowledge_id: 13, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '12是____数。（填1表示奇数，填2表示偶数）', answer: '2', options_json: null, explanation: '12能被2整除，是偶数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  { question_body: '15是____数。（填1表示奇数，填2表示偶数）', answer: '1', options_json: null, explanation: '15不能被2整除，是奇数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  { question_body: '偶数 + 偶数 = ____数。（填1表示奇数，填2表示偶数）', answer: '2', options_json: null, explanation: '偶数+偶数=偶数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  { question_body: '奇数 + 奇数 = ____数。（填1表示奇数，填2表示偶数）', answer: '2', options_json: null, explanation: '奇数+奇数=偶数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  { question_body: '偶数 + 奇数 = ____数。（填1表示奇数，填2表示偶数）', answer: '1', options_json: null, explanation: '偶数+奇数=奇数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  { question_body: '20以内（包括20）有____个偶数。', answer: '11', options_json: null, explanation: '0,2,4,6,8,10,12,14,16,18,20，共11个。', knowledge_id: 13, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '1+2+3+...+100的结果是____数。（填1表示奇数，填2表示偶数）', answer: '2', options_json: null, explanation: '1到100有50个奇数、50个偶数。50个奇数之和为偶数，50个偶数之和为偶数，偶数+偶数=偶数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 4 },
  { question_body: '五个连续奇数的和是125，最大的奇数是____。', answer: '29', options_json: null, explanation: '中间数=125÷5=25，五个数为21,23,25,27,29，最大是29。', knowledge_id: 13, question_type_id: 1, difficulty_id: 4 },
  { question_body: '三个连续偶数的和是72，最小的偶数是____。', answer: '22', options_json: null, explanation: '中间数=72÷3=24，三个数为22,24,26，最小是22。', knowledge_id: 13, question_type_id: 1, difficulty_id: 4 },
  { question_body: '1+2+3+...+50的结果是____数。（填1表示奇数，填2表示偶数）', answer: '1', options_json: null, explanation: '1到50有25个奇数、25个偶数。25个奇数之和为奇数，25个偶数之和为偶数，奇数+偶数=奇数。', knowledge_id: 13, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge13Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点13题目生成完成，共插入 ${knowledge13Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
