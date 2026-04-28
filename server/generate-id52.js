const mysql = require('mysql2/promise');

const knowledge52Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '鸡兔同笼问题的核心解决方法是？', answer: 'A', options_json: ['A. 假设法', 'B. 代数法', 'C. 列举法', 'D. 猜测法'], explanation: '鸡兔同笼问题的核心解决方法是假设法。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡兔同笼问题中，通常已知什么信息？', answer: 'B', options_json: ['A. 只有头数', 'B. 头数和脚数', 'C. 只有脚数', 'D. 什么都不知道'], explanation: '鸡兔同笼问题中，通常已知头数和脚数。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有10个头，28只脚，请问鸡有几只？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '假设全是兔，10×4=40只脚，多了40-28=12只脚，每只鸡比兔少2只脚，所以鸡有12÷2=6只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有8个头，22只脚，请问兔有几只？', answer: 'A', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '假设全是鸡，8×2=16只脚，少了22-16=6只脚，每只兔比鸡多2只脚，所以兔有6÷2=3只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡兔同笼问题中，假设全是鸡时，得到的是哪种动物的数量？', answer: 'B', options_json: ['A. 鸡', 'B. 兔', 'C. 无法确定', 'D. 都不是'], explanation: '假设全是鸡时，计算出的是兔的数量。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡兔同笼问题中，假设全是兔时，得到的是哪种动物的数量？', answer: 'A', options_json: ['A. 鸡', 'B. 兔', 'C. 无法确定', 'D. 都不是'], explanation: '假设全是兔时，计算出的是鸡的数量。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有12个头，36只脚，请问鸡有几只？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '假设全是兔，12×4=48只脚，多了48-36=12只脚，每只鸡比兔少2只脚，所以鸡有12÷2=6只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有15个头，40只脚，请问兔有几只？', answer: 'B', options_json: ['A. 5', 'B. 5', 'C. 6', 'D. 7'], explanation: '假设全是鸡，15×2=30只脚，少了40-30=10只脚，每只兔比鸡多2只脚，所以兔有10÷2=5只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡兔同笼问题的关键是什么？', answer: 'A', options_json: ['A. 找到头数和脚数的关系', 'B. 直接数动物数量', 'C. 猜测答案', 'D. 不需要计算'], explanation: '鸡兔同笼问题的关键是找到头数和脚数的关系。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡有2只脚，兔有4只脚，这是解决鸡兔同笼问题的什么条件？', answer: 'B', options_json: ['A. 不必要条件', 'B. 必要条件', 'C. 充分条件', 'D. 无关条件'], explanation: '鸡有2只脚，兔有4只脚，这是解决鸡兔同笼问题的必要条件。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有20个头，56只脚，请问鸡有几只？', answer: 'C', options_json: ['A. 10', 'B. 12', 'C. 12', 'D. 14'], explanation: '假设全是兔，20×4=80只脚，多了80-56=24只脚，每只鸡比兔少2只脚，所以鸡有24÷2=12只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸡和兔共有25个头，70只脚，请问兔有几只？', answer: 'A', options_json: ['A. 10', 'B. 12', 'C. 15', 'D. 18'], explanation: '假设全是鸡，25×2=50只脚，少了70-50=20只脚，每只兔比鸡多2只脚，所以兔有20÷2=10只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '鸡和兔共有18个头，50只脚，请问鸡有几只？', answer: 'B', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '假设全是兔，18×4=72只脚，多了72-50=22只脚，每只鸡比兔少2只脚，所以鸡有22÷2=11只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸡和兔共有22个头，60只脚，请问兔有几只？', answer: 'C', options_json: ['A. 8', 'B. 9', 'C. 8', 'D. 10'], explanation: '假设全是鸡，22×2=44只脚，少了60-44=16只脚，每只兔比鸡多2只脚，所以兔有16÷2=8只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸡和兔共有30个头，80只脚，请问鸡有几只？', answer: 'A', options_json: ['A. 20', 'B. 22', 'C. 18', 'D. 15'], explanation: '假设全是兔，30×4=120只脚，多了120-80=40只脚，每只鸡比兔少2只脚，所以鸡有40÷2=20只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸡和兔共有16个头，44只脚，请问兔有几只？', answer: 'B', options_json: ['A. 6', 'B. 6', 'C. 7', 'D. 8'], explanation: '假设全是鸡，16×2=32只脚，少了44-32=12只脚，每只兔比鸡多2只脚，所以兔有12÷2=6只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸡和兔共有14个头，46只脚，请问鸡有几只？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '假设全是兔，14×4=56只脚，多了56-46=10只脚，每只鸡比兔少2只脚，所以鸡有10÷2=5只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸡和兔共有19个头，54只脚，请问兔有几只？', answer: 'D', options_json: ['A. 7', 'B. 8', 'C. 9', 'D. 8'], explanation: '假设全是鸡，19×2=38只脚，少了54-38=16只脚，每只兔比鸡多2只脚，所以兔有16÷2=8只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '鸡和兔共有28个头，80只脚，请问鸡和兔各有几只？', answer: 'A', options_json: ['A. 16鸡，12兔', 'B. 15鸡，13兔', 'C. 14鸡，14兔', 'D. 17鸡，11兔'], explanation: '假设全是兔，28×4=112只脚，多了112-80=32只脚，每只鸡比兔少2只脚，所以鸡有32÷2=16只，兔有28-16=12只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸡和兔共有35个头，94只脚，请问鸡和兔各有几只？', answer: 'B', options_json: ['A. 20鸡，15兔', 'B. 23鸡，12兔', 'C. 22鸡，13兔', 'D. 24鸡，11兔'], explanation: '假设全是兔，35×4=140只脚，多了140-94=46只脚，每只鸡比兔少2只脚，所以鸡有46÷2=23只，兔有35-23=12只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸡和兔共有40个头，100只脚，请问鸡有几只？', answer: 'C', options_json: ['A. 30', 'B. 28', 'C. 30', 'D. 32'], explanation: '假设全是兔，40×4=160只脚，多了160-100=60只脚，每只鸡比兔少2只脚，所以鸡有60÷2=30只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸡和兔共有24个头，68只脚，请问兔有几只？', answer: 'D', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 10'], explanation: '假设全是鸡，24×2=48只脚，少了68-48=20只脚，每只兔比鸡多2只脚，所以兔有20÷2=10只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸡和兔共有17个头，48只脚，请问鸡有几只？', answer: 'A', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '假设全是兔，17×4=68只脚，多了68-48=20只脚，每只鸡比兔少2只脚，所以鸡有20÷2=10只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸡和兔共有21个头，58只脚，请问兔有几只？', answer: 'B', options_json: ['A. 7', 'B. 8', 'C. 9', 'D. 10'], explanation: '假设全是鸡，21×2=42只脚，少了58-42=16只脚，每只兔比鸡多2只脚，所以兔有16÷2=8只。', knowledge_id: 52, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：鸡兔同笼问题的核心解决方法是假设法。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸡兔同笼问题的核心解决方法是假设法。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸡兔同笼问题中，通常已知头数和脚数。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸡兔同笼问题中，通常已知头数和脚数。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：假设全是鸡时，计算出的是兔的数量。', answer: '正确', options_json: ['正确', '错误'], explanation: '假设全是鸡时，计算出的是兔的数量。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：假设全是兔时，计算出的是鸡的数量。', answer: '正确', options_json: ['正确', '错误'], explanation: '假设全是兔时，计算出的是鸡的数量。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸡有2只脚，兔有4只脚，这是解决鸡兔同笼问题的必要条件。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸡有2只脚，兔有4只脚，这是解决鸡兔同笼问题的必要条件。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸡兔同笼问题可以用代数方法解决。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸡兔同笼问题可以用代数方法解决，设鸡有x只，兔有y只，建立方程组求解。', knowledge_id: 52, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '鸡兔同笼问题的核心解决方法是____法。', answer: '假设', options_json: null, explanation: '鸡兔同笼问题的核心解决方法是假设法。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸡兔同笼问题中，通常已知____数和脚数。', answer: '头', options_json: null, explanation: '鸡兔同笼问题中，通常已知头数和脚数。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸡有____只脚。', answer: '2', options_json: null, explanation: '鸡有2只脚。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  { question_body: '兔有____只脚。', answer: '4', options_json: null, explanation: '兔有4只脚。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  { question_body: '假设全是鸡时，计算出的是____的数量。', answer: '兔', options_json: null, explanation: '假设全是鸡时，计算出的是兔的数量。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  { question_body: '假设全是兔时，计算出的是____的数量。', answer: '鸡', options_json: null, explanation: '假设全是兔时，计算出的是鸡的数量。', knowledge_id: 52, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '鸡和兔共有10个头，28只脚，鸡有____只。', answer: '6', options_json: null, explanation: '假设全是兔，10×4=40只脚，多了40-28=12只脚，每只鸡比兔少2只脚，所以鸡有12÷2=6只。', knowledge_id: 52, question_type_id: 1, difficulty_id: 4 },
  { question_body: '鸡和兔共有8个头，22只脚，兔有____只。', answer: '3', options_json: null, explanation: '假设全是鸡，8×2=16只脚，少了22-16=6只脚，每只兔比鸡多2只脚，所以兔有6÷2=3只。', knowledge_id: 52, question_type_id: 1, difficulty_id: 4 },
  { question_body: '鸡和兔共有15个头，40只脚，兔有____只。', answer: '5', options_json: null, explanation: '假设全是鸡，15×2=30只脚，少了40-30=10只脚，每只兔比鸡多2只脚，所以兔有10÷2=5只。', knowledge_id: 52, question_type_id: 1, difficulty_id: 4 },
  { question_body: '鸡和兔共有20个头，56只脚，鸡有____只。', answer: '12', options_json: null, explanation: '假设全是兔，20×4=80只脚，多了80-56=24只脚，每只鸡比兔少2只脚，所以鸡有24÷2=12只。', knowledge_id: 52, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge52Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点52题目生成完成，共插入 ${knowledge52Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
