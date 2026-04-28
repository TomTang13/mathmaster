const mysql = require('mysql2/promise');

const knowledge32Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '长方形的面积公式是？', answer: 'A', options_json: ['A. 长×宽', 'B. 边长×边长', 'C. 底×高÷2', 'D. (上底+下底)×高÷2'], explanation: '长方形的面积公式是长×宽。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方形的面积公式是？', answer: 'B', options_json: ['A. 长×宽', 'B. 边长×边长', 'C. 底×高÷2', 'D. (上底+下底)×高÷2'], explanation: '正方形的面积公式是边长×边长。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平行四边形的面积公式是？', answer: 'C', options_json: ['A. 长×宽', 'B. 边长×边长', 'C. 底×高', 'D. (上底+下底)×高÷2'], explanation: '平行四边形的面积公式是底×高。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '三角形的面积公式是？', answer: 'D', options_json: ['A. 长×宽', 'B. 边长×边长', 'C. 底×高', 'D. 底×高÷2'], explanation: '三角形的面积公式是底×高÷2。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '梯形的面积公式是？', answer: 'D', options_json: ['A. 长×宽', 'B. 边长×边长', 'C. 底×高÷2', 'D. (上底+下底)×高÷2'], explanation: '梯形的面积公式是(上底+下底)×高÷2。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个长方形的长是5厘米，宽是3厘米，它的面积是？', answer: 'B', options_json: ['A. 8平方厘米', 'B. 15平方厘米', 'C. 16平方厘米', 'D. 20平方厘米'], explanation: '5×3=15平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个正方形的边长是4厘米，它的面积是？', answer: 'C', options_json: ['A. 8平方厘米', 'B. 12平方厘米', 'C. 16平方厘米', 'D. 20平方厘米'], explanation: '4×4=16平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个平行四边形的底是6厘米，高是4厘米，它的面积是？', answer: 'B', options_json: ['A. 12平方厘米', 'B. 24平方厘米', 'C. 36平方厘米', 'D. 48平方厘米'], explanation: '6×4=24平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个三角形的底是8厘米，高是3厘米，它的面积是？', answer: 'A', options_json: ['A. 12平方厘米', 'B. 24平方厘米', 'C. 36平方厘米', 'D. 48平方厘米'], explanation: '8×3÷2=12平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个梯形的上底是3厘米，下底是5厘米，高是4厘米，它的面积是？', answer: 'C', options_json: ['A. 8平方厘米', 'B. 12平方厘米', 'C. 16平方厘米', 'D. 20平方厘米'], explanation: '(3+5)×4÷2=16平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '面积的单位是？', answer: 'A', options_json: ['A. 平方厘米', 'B. 厘米', 'C. 立方厘米', 'D. 米'], explanation: '面积的单位是平方厘米、平方米等。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列哪个图形的面积计算需要除以2？', answer: 'C', options_json: ['A. 长方形', 'B. 正方形', 'C. 三角形', 'D. 平行四边形'], explanation: '三角形的面积公式需要除以2。', knowledge_id: 32, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个长方形的面积是24平方厘米，长是6厘米，宽是？', answer: 'B', options_json: ['A. 3厘米', 'B. 4厘米', 'C. 5厘米', 'D. 6厘米'], explanation: '24÷6=4厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个正方形的面积是36平方厘米，它的边长是？', answer: 'C', options_json: ['A. 4厘米', 'B. 5厘米', 'C. 6厘米', 'D. 7厘米'], explanation: '6×6=36，所以边长是6厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个平行四边形的面积是30平方厘米，底是5厘米，高是？', answer: 'D', options_json: ['A. 4厘米', 'B. 5厘米', 'C. 5厘米', 'D. 6厘米'], explanation: '30÷5=6厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三角形的面积是18平方厘米，底是9厘米，高是？', answer: 'A', options_json: ['A. 4厘米', 'B. 5厘米', 'C. 6厘米', 'D. 7厘米'], explanation: '18×2÷9=4厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个梯形的面积是28平方厘米，上底是3厘米，下底是5厘米，高是？', answer: 'B', options_json: ['A. 6厘米', 'B. 7厘米', 'C. 8厘米', 'D. 9厘米'], explanation: '28×2÷(3+5)=7厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个长方形的长是8厘米，宽是5厘米，它的面积比一个边长为6厘米的正方形面积？', answer: 'A', options_json: ['A. 大', 'B. 小', 'C. 相等', 'D. 无法比较'], explanation: '长方形面积=8×5=40平方厘米，正方形面积=6×6=36平方厘米，40>36。', knowledge_id: 32, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个长方形的周长是20厘米，长是6厘米，它的面积是？', answer: 'B', options_json: ['A. 24平方厘米', 'B. 24平方厘米', 'C. 36平方厘米', 'D. 48平方厘米'], explanation: '宽=(20-6×2)÷2=4厘米，面积=6×4=24平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个正方形的周长是24厘米，它的面积是？', answer: 'C', options_json: ['A. 24平方厘米', 'B. 36平方厘米', 'C. 36平方厘米', 'D. 48平方厘米'], explanation: '边长=24÷4=6厘米，面积=6×6=36平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个平行四边形的底是8厘米，高是底的一半，它的面积是？', answer: 'B', options_json: ['A. 16平方厘米', 'B. 32平方厘米', 'C. 64平方厘米', 'D. 128平方厘米'], explanation: '高=8÷2=4厘米，面积=8×4=32平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个三角形的底是10厘米，高是底的1.2倍，它的面积是？', answer: 'D', options_json: ['A. 50平方厘米', 'B. 60平方厘米', 'C. 50平方厘米', 'D. 60平方厘米'], explanation: '高=10×1.2=12厘米，面积=10×12÷2=60平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个梯形的上底是4厘米，下底是上底的2倍，高是5厘米，它的面积是？', answer: 'C', options_json: ['A. 20平方厘米', 'B. 30平方厘米', 'C. 30平方厘米', 'D. 40平方厘米'], explanation: '下底=4×2=8厘米，面积=(4+8)×5÷2=30平方厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个长方形的面积是48平方厘米，长是宽的3倍，长是？', answer: 'D', options_json: ['A. 6厘米', 'B. 8厘米', 'C. 12厘米', 'D. 12厘米'], explanation: '设宽为x，长为3x，3x×x=48，x²=16，x=4，长=3×4=12厘米。', knowledge_id: 32, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：长方形的面积公式是长×宽。', answer: '正确', options_json: ['正确', '错误'], explanation: '长方形的面积公式是长×宽。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：正方形的面积公式是边长×4。', answer: '错误', options_json: ['正确', '错误'], explanation: '正方形的面积公式是边长×边长，边长×4是周长。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平行四边形的面积公式是底×高。', answer: '正确', options_json: ['正确', '错误'], explanation: '平行四边形的面积公式是底×高。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：三角形的面积公式是底×高。', answer: '错误', options_json: ['正确', '错误'], explanation: '三角形的面积公式是底×高÷2。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：梯形的面积公式是(上底+下底)×高。', answer: '错误', options_json: ['正确', '错误'], explanation: '梯形的面积公式是(上底+下底)×高÷2。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：面积的单位是长度单位的平方。', answer: '正确', options_json: ['正确', '错误'], explanation: '面积的单位是长度单位的平方，如平方厘米、平方米等。', knowledge_id: 32, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '长方形的面积公式是____×____。', answer: '长,宽', options_json: null, explanation: '长方形的面积公式是长×宽。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正方形的面积公式是____×____。', answer: '边长,边长', options_json: null, explanation: '正方形的面积公式是边长×边长。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  { question_body: '平行四边形的面积公式是____×____。', answer: '底,高', options_json: null, explanation: '平行四边形的面积公式是底×高。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  { question_body: '三角形的面积公式是____×____÷2。', answer: '底,高', options_json: null, explanation: '三角形的面积公式是底×高÷2。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  { question_body: '梯形的面积公式是(____+____)×高÷2。', answer: '上底,下底', options_json: null, explanation: '梯形的面积公式是(上底+下底)×高÷2。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个长方形的长是7厘米，宽是4厘米，它的面积是____平方厘米。', answer: '28', options_json: null, explanation: '7×4=28平方厘米。', knowledge_id: 32, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个长方形的周长是18厘米，长是5厘米，它的面积是____平方厘米。', answer: '20', options_json: null, explanation: '宽=(18-5×2)÷2=4厘米，面积=5×4=20平方厘米。', knowledge_id: 32, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个正方形的周长是32厘米，它的面积是____平方厘米。', answer: '64', options_json: null, explanation: '边长=32÷4=8厘米，面积=8×8=64平方厘米。', knowledge_id: 32, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个三角形的面积是24平方厘米，底是8厘米，高是____厘米。', answer: '6', options_json: null, explanation: '24×2÷8=6厘米。', knowledge_id: 32, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个梯形的面积是36平方厘米，上底是4厘米，下底是8厘米，高是____厘米。', answer: '6', options_json: null, explanation: '36×2÷(4+8)=6厘米。', knowledge_id: 32, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge32Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点32题目生成完成，共插入 ${knowledge32Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
