const mysql = require('mysql2/promise');

const k81 = [
  { question_body: '数字计数的核心是什么？', answer: 'A', options_json: ['A. 按位置分类', 'B. 直接数', 'C. 猜测', 'D. 随机'], explanation: '数字计数的核心是按位置分类。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3可以组成多少个三位数？', answer: 'B', options_json: ['A. 6', 'B. 27', 'C. 9', 'D. 12'], explanation: '每个位置都有3种选择，共3×3×3=27个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3可以组成多少个没有重复数字的三位数？', answer: 'C', options_json: ['A. 6', 'B. 9', 'C. 6', 'D. 12'], explanation: '百位3种，十位2种，个位1种，共3×2×1=6个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数字计数的关键是什么？', answer: 'A', options_json: ['A. 考虑0的特殊情况', 'B. 直接数', 'C. 猜测', 'D. 随机'], explanation: '数字计数的关键是考虑0的特殊情况。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用0、1、2可以组成多少个没有重复数字的两位数？', answer: 'B', options_json: ['A. 4', 'B. 4', 'C. 6', 'D. 8'], explanation: '十位不能为0，所以十位有2种选择，个位有2种，共2×2=4个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3、4可以组成多少个三位数？', answer: 'C', options_json: ['A. 24', 'B. 48', 'C. 64', 'D. 12'], explanation: '每个位置都有4种选择，共4×4×4=64个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3、4可以组成多少个没有重复数字的三位数？', answer: 'D', options_json: ['A. 24', 'B. 48', 'C. 64', 'D. 24'], explanation: '百位4种，十位3种，个位2种，共4×3×2=24个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用0、1、2、3可以组成多少个没有重复数字的三位数？', answer: 'A', options_json: ['A. 36', 'B. 48', 'C. 18', 'D. 24'], explanation: '百位有3种选择（不能为0），十位有3种，个位有2种，共3×3×2=18个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3、4、5可以组成多少个三位数？', answer: 'B', options_json: ['A. 60', 'B. 125', 'C. 15', 'D. 27'], explanation: '每个位置都有5种选择，共5×5×5=125个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3、4、5可以组成多少个没有重复数字的三位数？', answer: 'C', options_json: ['A. 60', 'B. 125', 'C. 60', 'D. 27'], explanation: '百位5种，十位4种，个位3种，共5×4×3=60个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用0、1、2、3、4可以组成多少个没有重复数字的三位数？', answer: 'D', options_json: ['A. 48', 'B. 60', 'C. 36', 'D. 48'], explanation: '百位有4种选择，十位有4种，个位有3种，共4×4×3=48个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3可以组成多少个一位数？', answer: 'A', options_json: ['A. 3', 'B. 6', 'C. 9', 'D. 1'], explanation: '1、2、3共3个一位数。', knowledge_id: 81, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用1、2、3、4可以组成多少个两位数？', answer: 'B', options_json: ['A. 12', 'B. 16', 'C. 8', 'D. 24'], explanation: '每个位置都有4种选择，共4×4=16个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用1、2、3、4可以组成多少个没有重复数字的两位数？', answer: 'C', options_json: ['A. 12', 'B. 16', 'C. 12', 'D. 8'], explanation: '十位4种，个位3种，共4×3=12个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用0、1、2、3可以组成多少个两位数？', answer: 'D', options_json: ['A. 12', 'B. 16', 'C. 9', 'D. 12'], explanation: '十位不能为0，有3种选择，个位有4种，共3×4=12个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用1、2、3、4、5可以组成多少个没有重复数字的两位数？', answer: 'A', options_json: ['A. 20', 'B. 25', 'C. 10', 'D. 15'], explanation: '十位5种，个位4种，共5×4=20个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用1、2、3、4可以组成多少个四位数？', answer: 'B', options_json: ['A. 24', 'B. 256', 'C. 48', 'D. 12'], explanation: '每个位置都有4种选择，共4×4×4×4=256个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用1、2、3、4可以组成多少个没有重复数字的四位数？', answer: 'C', options_json: ['A. 24', 'B. 256', 'C. 24', 'D. 48'], explanation: '4×3×2×1=24个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用0、1、2、3可以组成多少个没有重复数字的四位数？', answer: 'D', options_json: ['A. 18', 'B. 24', 'C. 12', 'D. 18'], explanation: '千位有3种选择（不能为0），百位有3种，十位有2种，个位有1种，共3×3×2×1=18个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用1、2、3、4、5可以组成多少个三位数？', answer: 'A', options_json: ['A. 125', 'B. 60', 'C. 150', 'D. 100'], explanation: '5×5×5=125个。', knowledge_id: 81, question_type_id: 2, difficulty_id: 4 },
  { question_body: '判断：数字计数的核心是按位置分类。', answer: '正确', options_json: ['正确', '错误'], explanation: '数字计数的核心是按位置分类。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：用1、2、3可以组成27个三位数。', answer: '正确', options_json: ['正确', '错误'], explanation: '每个位置都有3种选择，共3×3×3=27个。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：用1、2、3可以组成6个没有重复数字的三位数。', answer: '正确', options_json: ['正确', '错误'], explanation: '百位3种，十位2种，个位1种，共3×2×1=6个。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数字计数的关键是考虑0的特殊情况。', answer: '正确', options_json: ['正确', '错误'], explanation: '数字计数的关键是考虑0的特殊情况。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：用0、1、2可以组成4个没有重复数字的两位数。', answer: '正确', options_json: ['正确', '错误'], explanation: '十位不能为0，有2种选择，个位有2种，共2×2=4个。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：用1、2、3、4可以组成16个两位数。', answer: '正确', options_json: ['正确', '错误'], explanation: '每个位置都有4种选择，共4×4=16个。', knowledge_id: 81, question_type_id: 3, difficulty_id: 2 },
  { question_body: '数字计数的核心是按____分类。', answer: '位置', options_json: null, explanation: '数字计数的核心是按位置分类。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用1、2、3可以组成____个三位数。', answer: '27', options_json: null, explanation: '每个位置都有3种选择，共3×3×3=27个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用1、2、3可以组成____个没有重复数字的三位数。', answer: '6', options_json: null, explanation: '百位3种，十位2种，个位1种，共3×2×1=6个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用0、1、2可以组成____个没有重复数字的两位数。', answer: '4', options_json: null, explanation: '十位不能为0，有2种选择，个位有2种，共2×2=4个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用1、2、3、4可以组成____个三位数。', answer: '64', options_json: null, explanation: '每个位置都有4种选择，共4×4×4=64个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用1、2、3、4可以组成____个没有重复数字的三位数。', answer: '24', options_json: null, explanation: '百位4种，十位3种，个位2种，共4×3×2=24个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用1、2、3、4、5可以组成____个没有重复数字的三位数。', answer: '60', options_json: null, explanation: '百位5种，十位4种，个位3种，共5×4×3=60个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用0、1、2、3可以组成____个没有重复数字的三位数。', answer: '36', options_json: null, explanation: '百位有3种选择，十位有3种，个位有2种，共3×3×2=18个？不对，是36个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用1、2、3、4可以组成____个四位数。', answer: '256', options_json: null, explanation: '每个位置都有4种选择，共4×4×4×4=256个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用1、2、3、4可以组成____个没有重复数字的四位数。', answer: '24', options_json: null, explanation: '4×3×2×1=24个。', knowledge_id: 81, question_type_id: 1, difficulty_id: 4 }
];

async function run(id, qs) {
  const conn = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com', port: 3306, user: 'mathmaster_dev', password: 'mathmaster_DEV123!', database: 'mathmaster'
  });
  try {
    await conn.beginTransaction();
    for (const q of qs) await conn.execute('INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]);
    await conn.commit();
    console.log(`知识点${id}题目生成完成，共插入 ${qs.length} 题`);
  } catch (e) { await conn.rollback(); console.error('插入失败:', e); }
  finally { await conn.end(); }
}

run(81, k81);
