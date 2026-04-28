const mysql = require('mysql2/promise');

const knowledge63Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '比较与估算的意义是什么？', answer: 'A', options_json: ['A. 比较大小和近似计算', 'B. 精确计算', 'C. 增加难度', 'D. 不需要计算'], explanation: '比较与估算的意义是比较大小和近似计算。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '估算通常用于什么情况？', answer: 'B', options_json: ['A. 需要精确答案时', 'B. 不需要精确答案时', 'C. 所有情况', 'D. 无法计算时'], explanation: '估算通常用于不需要精确答案的情况。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比较分数大小时，通常先比较什么？', answer: 'C', options_json: ['A. 分子', 'B. 分母', 'C. 整数部分', 'D. 小数部分'], explanation: '比较分数大小时，通常先比较整数部分。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '12.56和12.6，哪个更大？', answer: 'D', options_json: ['A. 12.56', 'B. 12.6', 'C. 一样大', 'D. 12.6'], explanation: '12.6比12.56大0.04。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '估算68×52≈？', answer: 'A', options_json: ['A. 3500', 'B. 35000', 'C. 3000', 'D. 4000'], explanation: '68×52≈70×50=3500。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比较大小：3.14和π', answer: 'B', options_json: ['A. 3.14>π', 'B. 3.14<π', 'C. 3.14=π', 'D. 无法比较'], explanation: 'π≈3.14159...，所以3.14<π。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '估算198×6≈？', answer: 'C', options_json: ['A. 1200', 'B. 1000', 'C. 1200', 'D. 800'], explanation: '198×6≈200×6=1200。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比较：1/3和0.333', answer: 'D', options_json: ['A. 1/3>0.333', 'B. 1/3<0.333', 'C. 相等', 'D. 1/3>0.333'], explanation: '1/3=0.333...，所以1/3>0.333。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '估算456÷9≈？', answer: 'A', options_json: ['A. 50', 'B. 60', 'C. 45', 'D. 55'], explanation: '456÷9≈450÷9=50。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比较大小：0.75和3/4', answer: 'B', options_json: ['A. 0.75>3/4', 'B. 0.75=3/4', 'C. 0.75<3/4', 'D. 无法比较'], explanation: '3/4=0.75，所以0.75=3/4。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比较：√2和1.414', answer: 'C', options_json: ['A. √2>1.414', 'B. √2<1.414', 'C. √2>1.414', 'D. 无法比较'], explanation: '√2≈1.41421...，所以√2>1.414。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  { question_body: '估算52×48≈？', answer: 'D', options_json: ['A. 2500', 'B. 2400', 'C. 2600', 'D. 2500'], explanation: '52×48≈50×50=2500。', knowledge_id: 63, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '比较：2/3、3/4、4/5，哪个最大？', answer: 'A', options_json: ['A. 4/5', 'B. 3/4', 'C. 2/3', 'D. 一样大'], explanation: '2/3≈0.667，3/4=0.75，4/5=0.8，所以4/5最大。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  { question_body: '估算：√50约等于多少？', answer: 'B', options_json: ['A. 5', 'B. 7.07', 'C. 6', 'D. 8'], explanation: '√50≈7.07，因为7²=49，8²=64。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  { question_body: '比较：√3和1.732', answer: 'A', options_json: ['A. √3>1.732', 'B. √3<1.732', 'C. 相等', 'D. 无法比较'], explanation: '√3≈1.73205...，所以√3>1.732。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  { question_body: '估算101²≈？', answer: 'C', options_json: ['A. 10000', 'B. 10201', 'C. 10201', 'D. 1000'], explanation: '101²=(100+1)²=10000+200+1=10201。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  { question_body: '比较：5/7和7/9，哪个更大？', answer: 'D', options_json: ['A. 5/7', 'B. 7/9', 'C. 一样大', 'D. 7/9'], explanation: '5/7≈0.714，7/9≈0.778，所以7/9更大。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  { question_body: '估算：³√30约等于多少？', answer: 'A', options_json: ['A. 3.11', 'B. 2', 'C. 4', 'D. 3.5'], explanation: '³√30≈3.11，因为3³=27，3.1³≈29.79，3.2³≈32.77。', knowledge_id: 63, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '比较：√3+√5和√15，哪个更大？', answer: 'B', options_json: ['A. √3+√5', 'B. √15', 'C. 一样大', 'D. 无法比较'], explanation: '(√3+√5)²=8+2√15≈8+15.49=23.49，15<23.49，所以√3+√5>√15。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  { question_body: '估算：2^10等于多少？', answer: 'A', options_json: ['A. 1024', 'B. 1000', 'C. 2048', 'D. 512'], explanation: '2^10=1024。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  { question_body: '比较：log₂3和1.5，哪个更大？', answer: 'C', options_json: ['A. log₂3', 'B. 1.5', 'C. log₂3', 'D. 一样大'], explanation: 'log₂3≈1.585>1.5。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  { question_body: '估算：e²约等于多少？（e≈2.718）', answer: 'D', options_json: ['A. 6', 'B. 7', 'C. 8', 'D. 7.39'], explanation: 'e²≈2.718²≈7.39。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  { question_body: '比较：2^10和10³，哪个更大？', answer: 'A', options_json: ['A. 10³', 'B. 2^10', 'C. 一样大', 'D. 无法比较'], explanation: '2^10=1024，10³=1000，所以2^10>10³。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  { question_body: '估算：1.01^10约等于多少？', answer: 'B', options_json: ['A. 1.1', 'B. 1.1046', 'C. 1.2', 'D. 1.01'], explanation: '1.01^10≈1.1046。', knowledge_id: 63, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：比较与估算的意义是比较大小和近似计算。', answer: '正确', options_json: ['正确', '错误'], explanation: '比较与估算的意义是比较大小和近似计算。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：估算通常用于不需要精确答案的情况。', answer: '正确', options_json: ['正确', '错误'], explanation: '估算通常用于不需要精确答案的情况。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3.14=π。', answer: '错误', options_json: ['正确', '错误'], explanation: 'π≈3.14159...，所以3.14<π。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1/3=0.333。', answer: '错误', options_json: ['正确', '错误'], explanation: '1/3=0.333...，所以1/3>0.333。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：√2≈1.414。', answer: '正确', options_json: ['正确', '错误'], explanation: '√2≈1.41421...。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：0.75和3/4相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '3/4=0.75。', knowledge_id: 63, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '比较与估算的意义是比较大小和____。', answer: '近似计算', options_json: null, explanation: '比较与估算的意义是比较大小和近似计算。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  { question_body: '估算通常用于____精确答案的情况。', answer: '不需要', options_json: null, explanation: '估算通常用于不需要精确答案的情况。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'π≈____。（保留两位小数）', answer: '3.14', options_json: null, explanation: 'π≈3.14。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  { question_body: '√2≈____。（保留三位小数）', answer: '1.414', options_json: null, explanation: '√2≈1.414。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  { question_body: '估算68×52≈____。', answer: '3500', options_json: null, explanation: '68×52≈70×50=3500。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  { question_body: '估算198×6≈____。', answer: '1200', options_json: null, explanation: '198×6≈200×6=1200。', knowledge_id: 63, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '√50≈____。（保留两位小数）', answer: '7.07', options_json: null, explanation: '√50≈7.07。', knowledge_id: 63, question_type_id: 1, difficulty_id: 4 },
  { question_body: '2^10=____。', answer: '1024', options_json: null, explanation: '2^10=1024。', knowledge_id: 63, question_type_id: 1, difficulty_id: 4 },
  { question_body: '³√30≈____。（保留两位小数）', answer: '3.11', options_json: null, explanation: '³√30≈3.11。', knowledge_id: 63, question_type_id: 1, difficulty_id: 4 },
  { question_body: 'e²≈____。（e≈2.718）', answer: '7.39', options_json: null, explanation: 'e²≈2.718²≈7.39。', knowledge_id: 63, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge63Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点63题目生成完成，共插入 ${knowledge63Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
