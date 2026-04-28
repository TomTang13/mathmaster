const mysql = require('mysql2/promise');

const knowledge34Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '等积变形的基本原理是？', answer: 'A', options_json: ['A. 同底等高的三角形面积相等', 'B. 所有三角形面积相等', 'C. 同底等高的三角形面积不等', 'D. 面积与底和高无关'], explanation: '等积变形的基本原理是同底等高的三角形面积相等。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '同底等高的两个三角形面积？', answer: 'B', options_json: ['A. 不等', 'B. 相等', 'C. 一个是另一个的2倍', 'D. 一个是另一个的一半'], explanation: '同底等高的两个三角形面积相等。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '等底等高的平行四边形和三角形，它们的面积关系是？', answer: 'C', options_json: ['A. 相等', 'B. 平行四边形面积是三角形的一半', 'C. 平行四边形面积是三角形的2倍', 'D. 无法比较'], explanation: '等底等高的平行四边形面积是三角形的2倍。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在等积变形中，三角形的面积由什么决定？', answer: 'D', options_json: ['A. 底', 'B. 高', 'C. 形状', 'D. 底和高的乘积'], explanation: '三角形的面积由底和高的乘积决定。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个三角形的底扩大2倍，高不变，它的面积？', answer: 'B', options_json: ['A. 不变', 'B. 扩大2倍', 'C. 扩大4倍', 'D. 缩小2倍'], explanation: '面积与底成正比，所以底扩大2倍，面积扩大2倍。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个三角形的高扩大3倍，底不变，它的面积？', answer: 'C', options_json: ['A. 不变', 'B. 扩大2倍', 'C. 扩大3倍', 'D. 扩大9倍'], explanation: '面积与高成正比，所以高扩大3倍，面积扩大3倍。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个三角形的底和高都扩大2倍，它的面积？', answer: 'D', options_json: ['A. 扩大2倍', 'B. 扩大3倍', 'C. 扩大4倍', 'D. 扩大4倍'], explanation: '面积与底和高的乘积成正比，所以底和高都扩大2倍，面积扩大4倍。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '等积变形常用于解决什么问题？', answer: 'A', options_json: ['A. 面积计算', 'B. 周长计算', 'C. 体积计算', 'D. 长度计算'], explanation: '等积变形常用于解决面积计算问题。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在平行四边形中，同底等高的三角形面积是平行四边形面积的？', answer: 'B', options_json: ['A. 相等', 'B. 一半', 'C. 2倍', 'D. 3倍'], explanation: '同底等高的三角形面积是平行四边形面积的一半。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '等积变形的核心思想是？', answer: 'C', options_json: ['A. 改变形状，改变面积', 'B. 保持形状，改变面积', 'C. 改变形状，保持面积', 'D. 保持形状，保持面积'], explanation: '等积变形的核心思想是改变形状，保持面积。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两个三角形如果面积相等，那么它们一定？', answer: 'D', options_json: ['A. 形状相同', 'B. 底相等', 'C. 高相等', 'D. 底和高的乘积相等'], explanation: '两个三角形面积相等，意味着它们的底和高的乘积相等。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在等积变形中，常用的方法不包括？', answer: 'D', options_json: ['A. 同底等高', 'B. 等底等高', 'C. 等积替换', 'D. 随机变形'], explanation: '等积变形的方法包括同底等高、等底等高、等积替换等，不包括随机变形。', knowledge_id: 34, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个三角形的面积是24平方厘米，底是8厘米，高是？', answer: 'B', options_json: ['A. 3厘米', 'B. 6厘米', 'C. 12厘米', 'D. 24厘米'], explanation: '高=面积×2÷底=24×2÷8=6厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个平行四边形的面积是36平方厘米，底是9厘米，高是？', answer: 'A', options_json: ['A. 4厘米', 'B. 8厘米', 'C. 12厘米', 'D. 18厘米'], explanation: '高=面积÷底=36÷9=4厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三角形的底是6厘米，高是4厘米，另一个三角形的底是8厘米，高是多少时面积相等？', answer: 'C', options_json: ['A. 2厘米', 'B. 3厘米', 'C. 3厘米', 'D. 4厘米'], explanation: '第一个三角形面积=6×4÷2=12平方厘米，第二个三角形的高=12×2÷8=3厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在梯形中，对角线将梯形分成的两个三角形面积？', answer: 'B', options_json: ['A. 相等', 'B. 不等', 'C. 一个是另一个的2倍', 'D. 无法确定'], explanation: '在梯形中，对角线将梯形分成的两个三角形面积不相等，因为它们的底不同。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  { question_body: '等积变形在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化面积计算', 'B. 增加面积计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '等积变形在几何证明中可以简化面积计算。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三角形的面积是18平方厘米，高是6厘米，底是？', answer: 'D', options_json: ['A. 3厘米', 'B. 6厘米', 'C. 9厘米', 'D. 6厘米'], explanation: '底=面积×2÷高=18×2÷6=6厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个三角形的底是10厘米，高是8厘米，另一个三角形的底是16厘米，高是多少时面积相等？', answer: 'B', options_json: ['A. 4厘米', 'B. 5厘米', 'C. 6厘米', 'D. 7厘米'], explanation: '第一个三角形面积=10×8÷2=40平方厘米，第二个三角形的高=40×2÷16=5厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在平行四边形ABCD中，E是AB的中点，连接CE，三角形BCE的面积是平行四边形面积的？', answer: 'C', options_json: ['A. 1/2', 'B. 1/3', 'C. 1/4', 'D. 1/5'], explanation: 'E是AB的中点，所以BE=AB/2，三角形BCE的面积=BE×高÷2= (AB/2)×高÷2= AB×高÷4= 平行四边形面积÷4。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个三角形的面积是36平方厘米，底是9厘米，高是？', answer: 'A', options_json: ['A. 8厘米', 'B. 12厘米', 'C. 16厘米', 'D. 24厘米'], explanation: '高=面积×2÷底=36×2÷9=8厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在三角形ABC中，D是BC的中点，连接AD，三角形ABD的面积是三角形ABC面积的？', answer: 'B', options_json: ['A. 1/3', 'B. 1/2', 'C. 2/3', 'D. 3/4'], explanation: 'D是BC的中点，所以BD=BC/2，三角形ABD的面积=BD×高÷2= (BC/2)×高÷2= BC×高÷4= 三角形ABC面积÷2。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  { question_body: '等积变形的应用不包括？', answer: 'D', options_json: ['A. 求不规则图形面积', 'B. 证明面积相等', 'C. 简化面积计算', 'D. 求图形周长'], explanation: '等积变形主要用于面积相关的问题，不包括求图形周长。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个平行四边形的面积是48平方厘米，高是6厘米，底是？', answer: 'C', options_json: ['A. 6厘米', 'B. 8厘米', 'C. 8厘米', 'D. 12厘米'], explanation: '底=面积÷高=48÷6=8厘米。', knowledge_id: 34, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：同底等高的两个三角形面积相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '同底等高的两个三角形面积相等。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：等底等高的平行四边形和三角形面积相等。', answer: '错误', options_json: ['正确', '错误'], explanation: '等底等高的平行四边形面积是三角形的2倍。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：三角形的面积由底和高的乘积决定。', answer: '正确', options_json: ['正确', '错误'], explanation: '三角形的面积=底×高÷2，所以由底和高的乘积决定。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：等积变形的核心思想是改变形状，保持面积。', answer: '正确', options_json: ['正确', '错误'], explanation: '等积变形的核心思想是改变形状，保持面积。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个面积相等的三角形一定形状相同。', answer: '错误', options_json: ['正确', '错误'], explanation: '两个面积相等的三角形形状不一定相同，只要底和高的乘积相等即可。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：等积变形常用于解决面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '等积变形是解决面积计算问题的重要方法。', knowledge_id: 34, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '等积变形的基本原理是____等高的三角形面积相等。', answer: '同底', options_json: null, explanation: '等积变形的基本原理是同底等高的三角形面积相等。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  { question_body: '同底等高的两个三角形面积____。', answer: '相等', options_json: null, explanation: '同底等高的两个三角形面积相等。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  { question_body: '等底等高的平行四边形面积是三角形面积的____倍。', answer: '2', options_json: null, explanation: '等底等高的平行四边形面积是三角形的2倍。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  { question_body: '三角形的面积由____和____的乘积决定。', answer: '底,高', options_json: null, explanation: '三角形的面积由底和高的乘积决定。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  { question_body: '等积变形的核心思想是改变____，保持面积。', answer: '形状', options_json: null, explanation: '等积变形的核心思想是改变形状，保持面积。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个三角形的底是5厘米，高是4厘米，它的面积是____平方厘米。', answer: '10', options_json: null, explanation: '面积=5×4÷2=10平方厘米。', knowledge_id: 34, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个三角形的面积是20平方厘米，底是8厘米，高是____厘米。', answer: '5', options_json: null, explanation: '高=20×2÷8=5厘米。', knowledge_id: 34, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个平行四边形的面积是42平方厘米，底是7厘米，高是____厘米。', answer: '6', options_json: null, explanation: '高=42÷7=6厘米。', knowledge_id: 34, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个三角形的底是12厘米，高是5厘米，另一个三角形的底是10厘米，高是____厘米时面积相等。', answer: '6', options_json: null, explanation: '第一个三角形面积=12×5÷2=30平方厘米，第二个三角形的高=30×2÷10=6厘米。', knowledge_id: 34, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在三角形ABC中，D是BC的中点，三角形ABD的面积是三角形ABC面积的____。', answer: '1/2', options_json: null, explanation: 'D是BC的中点，所以三角形ABD的面积是三角形ABC面积的1/2。', knowledge_id: 34, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge34Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点34题目生成完成，共插入 ${knowledge34Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
