const mysql = require('mysql2/promise');

const knowledge37Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '一半模型的基本思想是？', answer: 'A', options_json: ['A. 利用图形的一半关系来计算面积', 'B. 所有图形面积都是一半', 'C. 图形面积的一半等于周长', 'D. 与面积计算无关'], explanation: '一半模型的基本思想是利用图形的一半关系来计算面积。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在长方形中，连接对角线形成的三角形面积是长方形面积的？', answer: 'B', options_json: ['A. 1/3', 'B. 1/2', 'C. 2/3', 'D. 3/4'], explanation: '长方形的对角线将长方形分成两个面积相等的三角形，每个三角形面积是长方形面积的1/2。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在平行四边形中，连接对角线形成的三角形面积是平行四边形面积的？', answer: 'B', options_json: ['A. 1/3', 'B. 1/2', 'C. 2/3', 'D. 3/4'], explanation: '平行四边形的对角线将平行四边形分成两个面积相等的三角形，每个三角形面积是平行四边形面积的1/2。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一半模型常用于解决什么问题？', answer: 'C', options_json: ['A. 周长计算', 'B. 体积计算', 'C. 面积计算', 'D. 长度计算'], explanation: '一半模型常用于解决面积计算问题。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在正方形中，连接对角线形成的三角形面积是正方形面积的？', answer: 'B', options_json: ['A. 1/3', 'B. 1/2', 'C. 2/3', 'D. 3/4'], explanation: '正方形的对角线将正方形分成两个面积相等的三角形，每个三角形面积是正方形面积的1/2。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一半模型的核心是？', answer: 'A', options_json: ['A. 找到面积的一半关系', 'B. 计算图形的周长', 'C. 测量图形的长度', 'D. 与面积无关'], explanation: '一半模型的核心是找到面积的一半关系。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在三角形中，连接顶点和对边中点形成的线段将三角形分成的两部分面积？', answer: 'B', options_json: ['A. 不等', 'B. 相等', 'C. 一个是另一个的2倍', 'D. 一个是另一个的3倍'], explanation: '连接顶点和对边中点的线段是三角形的中线，将三角形分成面积相等的两部分。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一半模型的应用不包括？', answer: 'D', options_json: ['A. 计算组合图形面积', 'B. 计算阴影部分面积', 'C. 证明面积相等', 'D. 计算图形体积'], explanation: '一半模型主要用于面积计算，不包括体积计算。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在长方形中，连接对边中点形成的线段将长方形分成的两部分面积？', answer: 'B', options_json: ['A. 不等', 'B. 相等', 'C. 一个是另一个的2倍', 'D. 一个是另一个的3倍'], explanation: '连接对边中点的线段将长方形分成面积相等的两部分。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一半模型的优势是？', answer: 'A', options_json: ['A. 简化面积计算', 'B. 增加计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '一半模型的优势是简化面积计算。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在平行四边形中，连接对边中点形成的线段将平行四边形分成的两部分面积？', answer: 'B', options_json: ['A. 不等', 'B. 相等', 'C. 一个是另一个的2倍', 'D. 一个是另一个的3倍'], explanation: '连接对边中点的线段将平行四边形分成面积相等的两部分。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一半模型的数学原理是？', answer: 'C', options_json: ['A. 面积的可加性', 'B. 面积的可减性', 'C. 面积的对称性', 'D. 面积的随机性'], explanation: '一半模型的数学原理是面积的对称性。', knowledge_id: 37, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个长方形的面积是24平方厘米，连接对角线形成的三角形面积是？', answer: 'B', options_json: ['A. 6平方厘米', 'B. 12平方厘米', 'C. 18平方厘米', 'D. 24平方厘米'], explanation: '三角形面积是长方形面积的1/2，所以24÷2=12平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个平行四边形的面积是36平方厘米，连接对角线形成的三角形面积是？', answer: 'C', options_json: ['A. 9平方厘米', 'B. 12平方厘米', 'C. 18平方厘米', 'D. 24平方厘米'], explanation: '三角形面积是平行四边形面积的1/2，所以36÷2=18平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个正方形的面积是16平方厘米，连接对角线形成的三角形面积是？', answer: 'B', options_json: ['A. 4平方厘米', 'B. 8平方厘米', 'C. 12平方厘米', 'D. 16平方厘米'], explanation: '三角形面积是正方形面积的1/2，所以16÷2=8平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在三角形中，连接顶点和对边中点形成的线段将三角形分成的两部分面积比是？', answer: 'A', options_json: ['A. 1:1', 'B. 1:2', 'C. 1:3', 'D. 2:3'], explanation: '中线将三角形分成面积相等的两部分，所以面积比是1:1。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一半模型在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化面积证明', 'B. 增加证明难度', 'C. 改变面积大小', 'D. 与证明无关'], explanation: '一半模型在几何证明中的作用是简化面积证明。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个长方形的长是8厘米，宽是6厘米，连接对角线形成的三角形面积是？', answer: 'D', options_json: ['A. 12平方厘米', 'B. 18平方厘米', 'C. 24平方厘米', 'D. 24平方厘米'], explanation: '长方形面积=8×6=48平方厘米，三角形面积=48÷2=24平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个平行四边形的底是10厘米，高是8厘米，连接对角线形成的三角形面积是？', answer: 'B', options_json: ['A. 20平方厘米', 'B. 40平方厘米', 'C. 60平方厘米', 'D. 80平方厘米'], explanation: '平行四边形面积=10×8=80平方厘米，三角形面积=80÷2=40平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个三角形的面积是30平方厘米，连接顶点和对边中点形成的线段将三角形分成的两部分面积各是？', answer: 'C', options_json: ['A. 10和20平方厘米', 'B. 12和18平方厘米', 'C. 15和15平方厘米', 'D. 18和12平方厘米'], explanation: '中线将三角形分成面积相等的两部分，所以每部分面积=30÷2=15平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个正方形的边长是6厘米，连接对角线形成的三角形面积是？', answer: 'D', options_json: ['A. 9平方厘米', 'B. 12平方厘米', 'C. 18平方厘米', 'D. 18平方厘米'], explanation: '正方形面积=6×6=36平方厘米，三角形面积=36÷2=18平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在长方形中，连接一组对边中点和另一组对边的一个顶点形成的三角形面积是长方形面积的？', answer: 'B', options_json: ['A. 1/3', 'B. 1/4', 'C. 1/2', 'D. 3/4'], explanation: '这样的三角形面积是长方形面积的1/4。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一半模型的应用步骤是？', answer: 'A', options_json: ['A. 识别一半关系→应用公式→计算面积', 'B. 直接计算', 'C. 测量长度→计算面积', 'D. 猜测面积'], explanation: '一半模型的应用步骤是识别一半关系→应用公式→计算面积。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个长方形的面积是48平方厘米，连接对边中点形成的线段将长方形分成的两部分面积各是？', answer: 'B', options_json: ['A. 16和32平方厘米', 'B. 24和24平方厘米', 'C. 12和36平方厘米', 'D. 20和28平方厘米'], explanation: '连接对边中点的线段将长方形分成面积相等的两部分，所以每部分面积=48÷2=24平方厘米。', knowledge_id: 37, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：一半模型的基本思想是利用图形的一半关系来计算面积。', answer: '正确', options_json: ['正确', '错误'], explanation: '一半模型的基本思想是利用图形的一半关系来计算面积。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：长方形的对角线将长方形分成两个面积相等的三角形。', answer: '正确', options_json: ['正确', '错误'], explanation: '长方形的对角线将长方形分成两个面积相等的三角形。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平行四边形的对角线将平行四边形分成两个面积相等的三角形。', answer: '正确', options_json: ['正确', '错误'], explanation: '平行四边形的对角线将平行四边形分成两个面积相等的三角形。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：三角形的中线将三角形分成两个面积相等的部分。', answer: '正确', options_json: ['正确', '错误'], explanation: '三角形的中线将三角形分成两个面积相等的部分。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一半模型常用于解决体积计算问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '一半模型主要用于面积计算，不包括体积计算。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：连接长方形对边中点的线段将长方形分成面积相等的两部分。', answer: '正确', options_json: ['正确', '错误'], explanation: '连接长方形对边中点的线段将长方形分成面积相等的两部分。', knowledge_id: 37, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '一半模型的基本思想是利用图形的____关系来计算面积。', answer: '一半', options_json: null, explanation: '一半模型的基本思想是利用图形的一半关系来计算面积。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  { question_body: '长方形的对角线将长方形分成两个面积____的三角形。', answer: '相等', options_json: null, explanation: '长方形的对角线将长方形分成两个面积相等的三角形。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  { question_body: '平行四边形的对角线将平行四边形分成两个面积____的三角形。', answer: '相等', options_json: null, explanation: '平行四边形的对角线将平行四边形分成两个面积相等的三角形。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  { question_body: '三角形的中线将三角形分成两个面积____的部分。', answer: '相等', options_json: null, explanation: '三角形的中线将三角形分成两个面积相等的部分。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一半模型常用于解决____计算问题。', answer: '面积', options_json: null, explanation: '一半模型常用于解决面积计算问题。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个长方形的面积是30平方厘米，连接对角线形成的三角形面积是____平方厘米。', answer: '15', options_json: null, explanation: '三角形面积是长方形面积的1/2，所以30÷2=15平方厘米。', knowledge_id: 37, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个平行四边形的面积是48平方厘米，连接对角线形成的三角形面积是____平方厘米。', answer: '24', options_json: null, explanation: '三角形面积是平行四边形面积的1/2，所以48÷2=24平方厘米。', knowledge_id: 37, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个三角形的面积是24平方厘米，连接顶点和对边中点形成的线段将三角形分成的两部分面积各是____平方厘米。', answer: '12', options_json: null, explanation: '中线将三角形分成面积相等的两部分，所以每部分面积=24÷2=12平方厘米。', knowledge_id: 37, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个正方形的面积是36平方厘米，连接对角线形成的三角形面积是____平方厘米。', answer: '18', options_json: null, explanation: '三角形面积是正方形面积的1/2，所以36÷2=18平方厘米。', knowledge_id: 37, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个长方形的长是10厘米，宽是8厘米，连接对角线形成的三角形面积是____平方厘米。', answer: '40', options_json: null, explanation: '长方形面积=10×8=80平方厘米，三角形面积=80÷2=40平方厘米。', knowledge_id: 37, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge37Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点37题目生成完成，共插入 ${knowledge37Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
