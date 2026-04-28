const mysql = require('mysql2/promise');

const knowledge41Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '沙漏模型的基本思想是？', answer: 'A', options_json: ['A. 利用相似三角形的对应边成比例', 'B. 所有三角形面积相等', 'C. 所有线段长度相等', 'D. 与相似三角形无关'], explanation: '沙漏模型的基本思想是利用相似三角形的对应边成比例。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型适用于什么图形？', answer: 'B', options_json: ['A. 任意四边形', 'B. 两个相似三角形', 'C. 圆形', 'D. 长方形'], explanation: '沙漏模型适用于两个相似三角形。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型的名称来源于？', answer: 'C', options_json: ['A. 沙子的形状', 'B. 三角形的形状', 'C. 图形形状像沙漏', 'D. 与沙漏无关'], explanation: '沙漏模型的名称来源于图形形状像沙漏。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在沙漏模型中，两个相似三角形的对应边比是？', answer: 'A', options_json: ['A. 相等的', 'B. 随意的', 'C. 相反的', 'D. 无法确定'], explanation: '在沙漏模型中，两个相似三角形的对应边比是相等的。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型的核心是？', answer: 'A', options_json: ['A. 找到相似三角形', 'B. 计算周长', 'C. 测量长度', 'D. 与相似无关'], explanation: '沙漏模型的核心是找到相似三角形。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型常用于解决什么问题？', answer: 'C', options_json: ['A. 周长计算', 'B. 体积计算', 'C. 长度和面积计算', 'D. 角度计算'], explanation: '沙漏模型常用于解决长度和面积计算问题。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '相似三角形的对应边比值相等，这个比值叫做？', answer: 'B', options_json: ['A. 角度比', 'B. 相似比', 'C. 面积比', 'D. 周长比'], explanation: '相似三角形的对应边比值相等，这个比值叫做相似比。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型的应用不包括？', answer: 'D', options_json: ['A. 计算线段长度', 'B. 计算图形面积', 'C. 证明相似关系', 'D. 计算图形体积'], explanation: '沙漏模型主要用于长度和面积计算，不包括体积计算。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型的数学原理是？', answer: 'C', options_json: ['A. 面积公式', 'B. 体积公式', 'C. 相似三角形性质', 'D. 角度和'], explanation: '沙漏模型的数学原理是相似三角形的性质。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在沙漏模型中，如果两个三角形相似，它们的对应角？', answer: 'A', options_json: ['A. 相等', 'B. 不等', 'C. 互补', 'D. 无法确定'], explanation: '在沙漏模型中，如果两个三角形相似，它们的对应角相等。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '沙漏模型的优势是？', answer: 'A', options_json: ['A. 简化长度和面积计算', 'B. 增加计算难度', 'C. 改变图形形状', 'D. 与计算无关'], explanation: '沙漏模型的优势是简化长度和面积计算。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在沙漏模型中，两个相似三角形的面积比等于？', answer: 'B', options_json: ['A. 对应边比的和', 'B. 对应边比的平方', 'C. 对应边比的差', 'D. 对应边比'], explanation: '在沙漏模型中，两个相似三角形的面积比等于对应边比的平方。', knowledge_id: 41, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在沙漏模型中，两个相似三角形的相似比是3:5，对应边长分别是12厘米和20厘米，这个比值正确吗？', answer: 'A', options_json: ['A. 正确，因为12:20=3:5', 'B. 错误，因为12:20不等于3:5', 'C. 错误，因为比例应该反过来', 'D. 无法确定'], explanation: '12:20=3:5，所以相似比是3:5。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是2:3，如果较小的三角形周长是20厘米，较大的三角形周长是？', answer: 'C', options_json: ['A. 27厘米', 'B. 30厘米', 'C. 30厘米', 'D. 40厘米'], explanation: '周长比等于相似比，所以较大的三角形周长=20×3/2=30厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是4:5，它们的面积比是？', answer: 'B', options_json: ['A. 4:5', 'B. 16:25', 'C. 5:4', 'D. 20:25'], explanation: '面积比等于相似比的平方，所以面积比=4²:5²=16:25。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  { question_body: '沙漏模型在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化长度和面积证明', 'B. 增加证明难度', 'C. 改变图形大小', 'D. 与证明无关'], explanation: '沙漏模型在几何证明中的作用是简化长度和面积证明。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是1:2，如果较大的三角形面积是48平方厘米，较小的三角形面积是？', answer: 'B', options_json: ['A. 12平方厘米', 'B. 12平方厘米', 'C. 24平方厘米', 'D. 96平方厘米'], explanation: '面积比等于相似比的平方=1:4，所以较小的三角形面积=48÷4=12平方厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在沙漏模型中，两个相似三角形的对应边分别是6厘米和9厘米，它们的相似比是？', answer: 'C', options_json: ['A. 6:9', 'B. 9:6', 'C. 2:3', 'D. 3:2'], explanation: '6:9=2:3，所以相似比是2:3。', knowledge_id: 41, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在沙漏模型中，两个相似三角形的相似比是3:4，如果它们的面积之和是50平方厘米，较小的三角形面积是？', answer: 'B', options_json: ['A. 18平方厘米', 'B. 18平方厘米', 'C. 24平方厘米', 'D. 32平方厘米'], explanation: '面积比=3²:4²=9:16，设较小的面积9x，较大的16x，9x+16x=50，x=2，所以较小面积=18平方厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是2:5，如果它们的面积之差是21平方厘米，较大的三角形面积是？', answer: 'C', options_json: ['A. 25平方厘米', 'B. 30平方厘米', 'C. 25平方厘米', 'D. 35平方厘米'], explanation: '面积比=4:25，设较小的面积4x，较大的25x，25x-4x=21，x=1，所以较大面积=25平方厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  { question_body: '沙漏模型的应用步骤是？', answer: 'A', options_json: ['A. 识别相似三角形→确定对应边→应用相似比→计算', 'B. 直接计算', 'C. 测量长度→计算', 'D. 猜测结果'], explanation: '沙漏模型的应用步骤是识别相似三角形→确定对应边→应用相似比→计算。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是3:7，如果较小的三角形周长是18厘米，较大的三角形周长是？', answer: 'D', options_json: ['A. 36厘米', 'B. 39厘米', 'C. 42厘米', 'D. 42厘米'], explanation: '周长比等于相似比，所以较大的三角形周长=18×7/3=42厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的面积比是9:16，对应边长分别是12厘米和？', answer: 'B', options_json: ['A. 14厘米', 'B. 16厘米', 'C. 18厘米', 'D. 20厘米'], explanation: '边长比=√(9:16)=3:4，所以对应边长=12×4/3=16厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是5:8，如果它们的面积之和是78平方厘米，较大的三角形面积是？', answer: 'C', options_json: ['A. 30平方厘米', 'B. 48平方厘米', 'C. 48平方厘米', 'D. 54平方厘米'], explanation: '面积比=25:64，设较小的25x，较大的64x，25x+64x=78，x=0.876，所以较大面积≈56平方厘米。', knowledge_id: 41, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：沙漏模型的基本思想是利用相似三角形的对应边成比例。', answer: '正确', options_json: ['正确', '错误'], explanation: '沙漏模型的基本思想是利用相似三角形的对应边成比例。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：沙漏模型适用于两个相似三角形。', answer: '正确', options_json: ['正确', '错误'], explanation: '沙漏模型适用于两个相似三角形。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：沙漏模型的名称来源于图形形状像沙漏。', answer: '正确', options_json: ['正确', '错误'], explanation: '沙漏模型的名称来源于图形形状像沙漏。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个相似三角形的对应边比值相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '两个相似三角形的对应边比值相等。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个相似三角形的面积比等于对应边比。', answer: '错误', options_json: ['正确', '错误'], explanation: '两个相似三角形的面积比等于对应边比的平方。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：沙漏模型常用于解决长度和面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '沙漏模型常用于解决长度和面积计算问题。', knowledge_id: 41, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '沙漏模型的基本思想是利用____三角形的对应边成比例。', answer: '相似', options_json: null, explanation: '沙漏模型的基本思想是利用相似三角形的对应边成比例。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  { question_body: '沙漏模型适用于两个____三角形。', answer: '相似', options_json: null, explanation: '沙漏模型适用于两个相似三角形。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  { question_body: '沙漏模型的名称来源于图形形状像____。', answer: '沙漏', options_json: null, explanation: '沙漏模型的名称来源于图形形状像沙漏。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  { question_body: '相似三角形的对应边比值相等，这个比值叫做____。', answer: '相似比', options_json: null, explanation: '相似三角形的对应边比值相等，这个比值叫做相似比。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在沙漏模型中，两个相似三角形的面积比等于对应边比的____。', answer: '平方', options_json: null, explanation: '在沙漏模型中，两个相似三角形的面积比等于对应边比的平方。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  { question_body: '沙漏模型常用于解决长度和____计算问题。', answer: '面积', options_json: null, explanation: '沙漏模型常用于解决长度和面积计算问题。', knowledge_id: 41, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在沙漏模型中，两个相似三角形的相似比是3:4，它们的面积比是____:____。', answer: '9,16', options_json: null, explanation: '面积比等于相似比的平方，所以3²:4²=9:16。', knowledge_id: 41, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是2:5，如果较小的三角形面积是12平方厘米，较小的面积是____平方厘米。', answer: '12', options_json: null, explanation: '面积比=4:25，设较小的面积4x=12，x=3，较大的面积=25×3=75平方厘米。', knowledge_id: 41, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的面积比是9:25，对应边长分别是15厘米和____厘米。', answer: '25', options_json: null, explanation: '边长比=√(9:25)=3:5，所以对应边长=15×5/3=25厘米。', knowledge_id: 41, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在沙漏模型中，两个相似三角形的相似比是1:3，如果它们的面积之和是40平方厘米，较小的面积是____平方厘米。', answer: '4', options_json: null, explanation: '面积比=1:9，设较小的面积x，较大的9x，x+9x=40，x=4，所以较小面积=4平方厘米。', knowledge_id: 41, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge41Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点41题目生成完成，共插入 ${knowledge41Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
