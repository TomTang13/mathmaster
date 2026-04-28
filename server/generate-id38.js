const mysql = require('mysql2/promise');

const knowledge38Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '鸟头模型（共角模型）的基本思想是？', answer: 'A', options_json: ['A. 两个三角形有公共角，面积比等于对应边乘积的比', 'B. 两个三角形面积相等', 'C. 两个三角形周长相等', 'D. 与面积计算无关'], explanation: '鸟头模型的基本思想是两个三角形有公共角，面积比等于对应边乘积的比。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型适用于什么情况？', answer: 'B', options_json: ['A. 任意两个三角形', 'B. 有公共角的两个三角形', 'C. 有公共边的两个三角形', 'D. 没有公共部分的两个三角形'], explanation: '鸟头模型适用于有公共角的两个三角形。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的面积比公式是？', answer: 'C', options_json: ['A. 面积比=对应边的比', 'B. 面积比=对应边比的平方', 'C. 面积比=对应边乘积的比', 'D. 面积比=对应边和的比'], explanation: '鸟头模型的面积比公式是面积比=对应边乘积的比。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的另一个名称是？', answer: 'D', options_json: ['A. 蝴蝶模型', 'B. 燕尾模型', 'C. 一半模型', 'D. 共角模型'], explanation: '鸟头模型的另一个名称是共角模型。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在鸟头模型中，两个三角形的公共角可以是？', answer: 'A', options_json: ['A. 锐角', 'B. 直角', 'C. 钝角', 'D. 以上都是'], explanation: '在鸟头模型中，两个三角形的公共角可以是锐角、直角或钝角。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型常用于解决什么问题？', answer: 'C', options_json: ['A. 周长计算', 'B. 体积计算', 'C. 面积计算', 'D. 长度计算'], explanation: '鸟头模型常用于解决面积计算问题。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的核心是？', answer: 'A', options_json: ['A. 找到公共角', 'B. 计算周长', 'C. 测量长度', 'D. 与面积无关'], explanation: '鸟头模型的核心是找到公共角。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在鸟头模型中，如果两个三角形的公共角是180度，它们的面积比是？', answer: 'B', options_json: ['A. 0', 'B. 对应边乘积的比', 'C. 1', 'D. 无法计算'], explanation: '即使公共角是180度，鸟头模型仍然适用，面积比是对应边乘积的比。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的应用不包括？', answer: 'D', options_json: ['A. 计算组合图形面积', 'B. 计算阴影部分面积', 'C. 证明面积关系', 'D. 计算图形体积'], explanation: '鸟头模型主要用于面积计算，不包括体积计算。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的数学原理是？', answer: 'C', options_json: ['A. 面积的可加性', 'B. 面积的可减性', 'C. 三角形面积公式', 'D. 面积的随机性'], explanation: '鸟头模型的数学原理是基于三角形面积公式。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在鸟头模型中，对应边是指？', answer: 'A', options_json: ['A. 公共角的两条边', 'B. 任意两条边', 'C. 对边', 'D. 斜边'], explanation: '在鸟头模型中，对应边是指公共角的两条边。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  { question_body: '鸟头模型的优势是？', answer: 'A', options_json: ['A. 简化面积计算', 'B. 增加计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '鸟头模型的优势是简化面积计算。', knowledge_id: 38, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=2，AC=3，AD=4，AE=5，它们的面积比是？', answer: 'B', options_json: ['A. 2:4', 'B. (2×3):(4×5)', 'C. 3:5', 'D. 2:5'], explanation: '面积比= (AB×AC):(AD×AE) = (2×3):(4×5) = 6:20 = 3:10。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ABD有公共角A，AB=5，AC=6，AD=10，它们的面积比是？', answer: 'C', options_json: ['A. 5:10', 'B. 6:10', 'C. 6:10', 'D. 5:6'], explanation: '面积比= AC:AD = 6:10 = 3:5。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸟头模型的面积比公式适用于？', answer: 'D', options_json: ['A. 只有锐角', 'B. 只有直角', 'C. 只有钝角', 'D. 所有角度'], explanation: '鸟头模型的面积比公式适用于所有角度的公共角。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在鸟头模型中，如果两个三角形的公共角是90度，它们的面积比是？', answer: 'B', options_json: ['A. 对应边的比', 'B. 对应边乘积的比', 'C. 对应边比的平方', 'D. 无法计算'], explanation: '即使公共角是90度，鸟头模型仍然适用，面积比是对应边乘积的比。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  { question_body: '鸟头模型在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化面积证明', 'B. 增加证明难度', 'C. 改变面积大小', 'D. 与证明无关'], explanation: '鸟头模型在几何证明中的作用是简化面积证明。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=3，AC=4，AD=6，AE=8，它们的面积比是？', answer: 'D', options_json: ['A. 3:6', 'B. 4:8', 'C. 3:8', 'D. (3×4):(6×8)'], explanation: '面积比= (AB×AC):(AD×AE) = (3×4):(6×8) = 12:48 = 1:4。', knowledge_id: 38, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=2，AC=5，AD=4，AE=10，三角形ABC的面积是10平方厘米，三角形ADE的面积是？', answer: 'B', options_json: ['A. 20平方厘米', 'B. 80平方厘米', 'C. 40平方厘米', 'D. 160平方厘米'], explanation: '面积比= (2×5):(4×10) = 10:40 = 1:4，所以三角形ADE的面积=10×4=40平方厘米。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ABD有公共角A，AB=6，AC=8，AD=12，三角形ABC的面积是24平方厘米，三角形ABD的面积是？', answer: 'C', options_json: ['A. 36平方厘米', 'B. 48平方厘米', 'C. 48平方厘米', 'D. 72平方厘米'], explanation: '面积比= AC:AD = 8:12 = 2:3，所以三角形ABD的面积=24×3/2=36平方厘米。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在鸟头模型中，两个三角形的面积比是3:8，对应边的乘积比是？', answer: 'A', options_json: ['A. 3:8', 'B. 8:3', 'C. 9:64', 'D. 64:9'], explanation: '鸟头模型中面积比等于对应边乘积的比，所以对应边的乘积比是3:8。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=5，AC=7，AD=15，AE=21，它们的面积比是？', answer: 'B', options_json: ['A. 5:15', 'B. 1:9', 'C. 7:21', 'D. 5:21'], explanation: '面积比= (5×7):(15×21) = 35:315 = 1:9。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  { question_body: '鸟头模型的应用步骤是？', answer: 'A', options_json: ['A. 识别公共角→确定对应边→应用面积比公式→计算面积', 'B. 直接计算', 'C. 测量长度→计算面积', 'D. 猜测面积'], explanation: '鸟头模型的应用步骤是识别公共角→确定对应边→应用面积比公式→计算面积。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=4，AC=6，AD=8，AE=12，三角形ADE的面积是96平方厘米，三角形ABC的面积是？', answer: 'C', options_json: ['A. 12平方厘米', 'B. 24平方厘米', 'C. 24平方厘米', 'D. 48平方厘米'], explanation: '面积比= (4×6):(8×12) = 24:96 = 1:4，所以三角形ABC的面积=96÷4=24平方厘米。', knowledge_id: 38, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：鸟头模型的基本思想是两个三角形有公共角，面积比等于对应边乘积的比。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸟头模型的基本思想是两个三角形有公共角，面积比等于对应边乘积的比。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸟头模型适用于有公共边的两个三角形。', answer: '错误', options_json: ['正确', '错误'], explanation: '鸟头模型适用于有公共角的两个三角形，不是公共边。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸟头模型的面积比公式是面积比=对应边的比。', answer: '错误', options_json: ['正确', '错误'], explanation: '鸟头模型的面积比公式是面积比=对应边乘积的比。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸟头模型的另一个名称是共角模型。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸟头模型的另一个名称是共角模型。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：鸟头模型常用于解决面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '鸟头模型是解决面积计算问题的重要方法。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在鸟头模型中，对应边是指公共角的两条边。', answer: '正确', options_json: ['正确', '错误'], explanation: '在鸟头模型中，对应边是指公共角的两条边。', knowledge_id: 38, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '鸟头模型的基本思想是两个三角形有____角，面积比等于对应边乘积的比。', answer: '公共', options_json: null, explanation: '鸟头模型的基本思想是两个三角形有公共角，面积比等于对应边乘积的比。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸟头模型的另一个名称是____模型。', answer: '共角', options_json: null, explanation: '鸟头模型的另一个名称是共角模型。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸟头模型的面积比公式是面积比=____边乘积的比。', answer: '对应', options_json: null, explanation: '鸟头模型的面积比公式是面积比=对应边乘积的比。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸟头模型适用于有____角的两个三角形。', answer: '公共', options_json: null, explanation: '鸟头模型适用于有公共角的两个三角形。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  { question_body: '鸟头模型常用于解决____计算问题。', answer: '面积', options_json: null, explanation: '鸟头模型常用于解决面积计算问题。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在鸟头模型中，对应边是指____角的两条边。', answer: '公共', options_json: null, explanation: '在鸟头模型中，对应边是指公共角的两条边。', knowledge_id: 38, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=2，AC=3，AD=4，AE=5，它们的面积比是____:____。', answer: '3,10', options_json: null, explanation: '面积比= (2×3):(4×5) = 6:20 = 3:10。', knowledge_id: 38, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ABD有公共角A，AB=5，AC=6，AD=10，它们的面积比是____:____。', answer: '3,5', options_json: null, explanation: '面积比= AC:AD = 6:10 = 3:5。', knowledge_id: 38, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=3，AC=4，AD=6，AE=8，它们的面积比是____:____。', answer: '1,4', options_json: null, explanation: '面积比= (3×4):(6×8) = 12:48 = 1:4。', knowledge_id: 38, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在鸟头模型中，三角形ABC和三角形ADE有公共角A，AB=4，AC=6，AD=8，AE=12，三角形ADE的面积是96平方厘米，三角形ABC的面积是____平方厘米。', answer: '24', options_json: null, explanation: '面积比= (4×6):(8×12) = 24:96 = 1:4，所以三角形ABC的面积=96÷4=24平方厘米。', knowledge_id: 38, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge38Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点38题目生成完成，共插入 ${knowledge38Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
