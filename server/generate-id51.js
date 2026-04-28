const mysql = require('mysql2/promise');

const knowledge51Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '圆柱的底面是一个什么形状？', answer: 'A', options_json: ['A. 圆形', 'B. 正方形', 'C. 长方形', 'D. 三角形'], explanation: '圆柱的底面是一个圆形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥的底面是一个什么形状？', answer: 'B', options_json: ['A. 正方形', 'B. 圆形', 'C. 三角形', 'D. 长方形'], explanation: '圆锥的底面是一个圆形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆柱有几个底面？', answer: 'C', options_json: ['A. 1', 'B. 3', 'C. 2', 'D. 4'], explanation: '圆柱有2个底面，都是圆形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥有几个底面？', answer: 'A', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '圆锥只有1个底面，是圆形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆柱的侧面展开后是什么形状？', answer: 'B', options_json: ['A. 圆形', 'B. 长方形', 'C. 正方形', 'D. 三角形'], explanation: '圆柱的侧面展开后是一个长方形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥的侧面展开后是什么形状？', answer: 'C', options_json: ['A. 圆形', 'B. 长方形', 'C. 扇形', 'D. 三角形'], explanation: '圆锥的侧面展开后是一个扇形。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆柱的高是指什么？', answer: 'A', options_json: ['A. 两个底面之间的距离', 'B. 底面的半径', 'C. 底面的直径', 'D. 底面的周长'], explanation: '圆柱的高是指两个底面之间的距离。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥的高是指什么？', answer: 'B', options_json: ['A. 底面的半径', 'B. 顶点到底面圆心的距离', 'C. 底面的直径', 'D. 底面的周长'], explanation: '圆锥的高是指顶点到底面圆心的距离。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆柱的体积公式是？', answer: 'C', options_json: ['A. V=πr²', 'B. V=2πr²h', 'C. V=πr²h', 'D. V=πr²/3'], explanation: '圆柱的体积公式是V=πr²h。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥的体积公式是？', answer: 'D', options_json: ['A. V=πr²', 'B. V=2πr²h', 'C. V=πr²h', 'D. V=πr²h/3'], explanation: '圆锥的体积公式是V=πr²h/3。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆柱的表面积公式是？', answer: 'A', options_json: ['A. 2πr²+2πrh', 'B. πr²+2πrh', 'C. 2πr²+πrh', 'D. πr²+πrh'], explanation: '圆柱的表面积公式是2πr²+2πrh。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆锥的表面积公式是？', answer: 'B', options_json: ['A. πr²+2πrh', 'B. πr²+πrl', 'C. 2πr²+πrl', 'D. πr²+πrh'], explanation: '圆锥的表面积公式是πr²+πrl（l是母线长）。', knowledge_id: 51, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个圆柱的底面半径是3厘米，高是5厘米，它的体积是多少立方厘米？（π取3.14）', answer: 'B', options_json: ['A. 141.3', 'B. 141.3', 'C. 94.2', 'D. 78.5'], explanation: 'V=πr²h=3.14×9×5=141.3立方厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆锥的底面半径是4厘米，高是6厘米，它的体积是多少立方厘米？（π取3.14）', answer: 'C', options_json: ['A. 100.48', 'B. 150.72', 'C. 100.48', 'D. 200.96'], explanation: 'V=πr²h/3=3.14×16×6/3=100.48立方厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆柱的底面直径是6厘米，高是8厘米，它的表面积是多少平方厘米？（π取3.14）', answer: 'A', options_json: ['A. 207.24', 'B. 188.4', 'C. 150.72', 'D. 226.08'], explanation: 'r=3厘米，表面积=2×3.14×9+2×3.14×3×8=56.52+150.72=207.24平方厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆柱和一个圆锥等底等高，它们的体积比是？', answer: 'B', options_json: ['A. 1:3', 'B. 3:1', 'C. 2:3', 'D. 3:2'], explanation: '等底等高的圆柱和圆锥，体积比是3:1。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆锥的体积是37.68立方厘米，底面半径是3厘米，高是多少厘米？（π取3.14）', answer: 'C', options_json: ['A. 4', 'B. 6', 'C. 4', 'D. 8'], explanation: 'h=3V/(πr²)=3×37.68/(3.14×9)=113.04/28.26=4厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆柱的体积是188.4立方厘米，高是10厘米，底面半径是多少厘米？（π取3.14）', answer: 'D', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 6'], explanation: 'r=√(V/(πh))=√(188.4/(3.14×10))=√6≈2.45厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个圆柱的表面积是150.72平方厘米，底面半径是4厘米，高是多少厘米？（π取3.14）', answer: 'B', options_json: ['A. 2', 'B. 2', 'C. 3', 'D. 4'], explanation: '表面积=2πr²+2πrh=150.72，2×3.14×16+2×3.14×4×h=150.72，100.48+25.12h=150.72，25.12h=50.24，h=2厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆锥的表面积是157平方厘米，底面半径是5厘米，母线长是多少厘米？（π取3.14）', answer: 'C', options_json: ['A. 5', 'B. 6', 'C. 5', 'D. 8'], explanation: '表面积=πr²+πrl=157，3.14×25+3.14×5×l=157，78.5+15.7l=157，15.7l=78.5，l=5厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆柱和一个圆锥的底面积相等，体积也相等，圆柱的高是6厘米，圆锥的高是多少厘米？', answer: 'A', options_json: ['A. 18', 'B. 12', 'C. 9', 'D. 6'], explanation: 'V圆柱=V圆锥，πr²h圆柱=πr²h圆锥/3，h圆锥=3h圆柱=18厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆柱的底面周长是18.84厘米，高是10厘米，它的体积是多少立方厘米？（π取3.14）', answer: 'B', options_json: ['A. 282.6', 'B. 282.6', 'C. 188.4', 'D. 565.2'], explanation: 'r=C/(2π)=18.84/(2×3.14)=3厘米，V=πr²h=3.14×9×10=282.6立方厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆锥的底面直径是8厘米，高是9厘米，它的体积是多少立方厘米？（π取3.14）', answer: 'C', options_json: ['A. 150.72', 'B. 226.08', 'C. 150.72', 'D. 452.16'], explanation: 'r=4厘米，V=πr²h/3=3.14×16×9/3=150.72立方厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆柱的体积是314立方厘米，底面半径是5厘米，高是多少厘米？（π取3.14）', answer: 'D', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 4'], explanation: 'h=V/(πr²)=314/(3.14×25)=314/78.5=4厘米。', knowledge_id: 51, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：圆柱的底面是一个圆形。', answer: '正确', options_json: ['正确', '错误'], explanation: '圆柱的底面是一个圆形。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆锥的底面是一个正方形。', answer: '错误', options_json: ['正确', '错误'], explanation: '圆锥的底面是一个圆形，不是正方形。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆柱的侧面展开后是一个长方形。', answer: '正确', options_json: ['正确', '错误'], explanation: '圆柱的侧面展开后是一个长方形。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆锥的体积是等底等高圆柱体积的1/3。', answer: '正确', options_json: ['正确', '错误'], explanation: '圆锥的体积是等底等高圆柱体积的1/3。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆柱的高是指两个底面之间的距离。', answer: '正确', options_json: ['正确', '错误'], explanation: '圆柱的高是指两个底面之间的距离。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆锥的侧面展开后是一个三角形。', answer: '错误', options_json: ['正确', '错误'], explanation: '圆锥的侧面展开后是一个扇形，不是三角形。', knowledge_id: 51, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '圆柱的底面是一个____。', answer: '圆形', options_json: null, explanation: '圆柱的底面是一个圆形。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆锥的底面是一个____。', answer: '圆形', options_json: null, explanation: '圆锥的底面是一个圆形。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆柱有____个底面。', answer: '2', options_json: null, explanation: '圆柱有2个底面。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆锥有____个底面。', answer: '1', options_json: null, explanation: '圆锥有1个底面。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆柱的体积公式是V=____。', answer: 'πr²h', options_json: null, explanation: '圆柱的体积公式是V=πr²h。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆锥的体积公式是V=____。', answer: 'πr²h/3', options_json: null, explanation: '圆锥的体积公式是V=πr²h/3。', knowledge_id: 51, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个圆柱的底面半径是3厘米，高是5厘米，它的体积是____立方厘米。（π取3.14）', answer: '141.3', options_json: null, explanation: 'V=πr²h=3.14×9×5=141.3立方厘米。', knowledge_id: 51, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个圆锥的底面半径是4厘米，高是6厘米，它的体积是____立方厘米。（π取3.14）', answer: '100.48', options_json: null, explanation: 'V=πr²h/3=3.14×16×6/3=100.48立方厘米。', knowledge_id: 51, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个圆柱和一个圆锥等底等高，它们的体积比是____:____。', answer: '3,1', options_json: null, explanation: '等底等高的圆柱和圆锥，体积比是3:1。', knowledge_id: 51, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个圆柱的体积是314立方厘米，底面半径是5厘米，高是____厘米。（π取3.14）', answer: '4', options_json: null, explanation: 'h=V/(πr²)=314/(3.14×25)=4厘米。', knowledge_id: 51, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge51Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点51题目生成完成，共插入 ${knowledge51Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
