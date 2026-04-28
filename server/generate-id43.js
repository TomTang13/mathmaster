const mysql = require('mysql2/promise');

const knowledge43Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '皮克定理用于计算什么图形的面积？', answer: 'A', options_json: ['A. 顶点都在格点上的简单多边形', 'B. 圆形', 'C. 椭圆形', 'D. 任意多边形'], explanation: '皮克定理用于计算顶点都在格点上的简单多边形的面积。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理的公式是？', answer: 'B', options_json: ['A. A=I×B', 'B. A=I+B/2-1', 'C. A=I-B/2+1', 'D. A=I×B/2'], explanation: '皮克定理的公式是A=I+B/2-1，其中A是面积，I是内部格点数，B是边界格点数。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在皮克定理中，I表示什么？', answer: 'C', options_json: ['A. 边界格点数', 'B. 面积', 'C. 内部格点数', 'D. 顶点个数'], explanation: '在皮克定理中，I表示内部格点数。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在皮克定理中，B表示什么？', answer: 'A', options_json: ['A. 边界格点数', 'B. 内部格点数', 'C. 面积', 'D. 边数'], explanation: '在皮克定理中，B表示边界格点数。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理中的格点是指？', answer: 'D', options_json: ['A. 任意点', 'B. 圆的圆心', 'C. 多边形的顶点', 'D. 整数坐标点'], explanation: '皮克定理中的格点是指整数坐标点。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个边长为1的正方形，顶点都在格点上，它的内部格点数I和边界格点数B分别是？', answer: 'A', options_json: ['A. I=0, B=4', 'B. I=1, B=4', 'C. I=0, B=3', 'D. I=1, B=3'], explanation: '边长为1的正方形内部没有格点，所以I=0，边界上有4个顶点，所以B=4。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理适用于什么样的多边形？', answer: 'B', options_json: ['A. 任意多边形', 'B. 顶点都在格点上的简单多边形', 'C. 凸多边形', 'D. 凹多边形'], explanation: '皮克定理适用于顶点都在格点上的简单多边形。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在皮克定理中，A表示什么？', answer: 'C', options_json: ['A. 内部格点数', 'B. 边界格点数', 'C. 面积', 'D. 边数'], explanation: '在皮克定理中，A表示多边形的面积。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理的应用不包括？', answer: 'D', options_json: ['A. 计算格点多边形面积', 'B. 验证面积计算', 'C. 解决组合图形问题', 'D. 计算圆形面积'], explanation: '皮克定理用于计算格点多边形面积，不包括圆形面积。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理的名称来源于？', answer: 'A', options_json: ['A. 数学家皮克', 'B. 地名皮克', 'C. 物理学家皮克', 'D. 与人名无关'], explanation: '皮克定理的名称来源于数学家皮克（Georg Pick）。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果一个多边形的内部格点数I=0，边界格点数B=4，根据皮克定理，面积A是多少？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 4'], explanation: 'A=I+B/2-1=0+4/2-1=0+2-1=1。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  { question_body: '皮克定理的优势是？', answer: 'A', options_json: ['A. 简化格点图形面积计算', 'B. 增加计算难度', 'C. 改变图形形状', 'D. 与面积计算无关'], explanation: '皮克定理的优势是简化格点图形面积计算。', knowledge_id: 43, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个多边形的内部格点数I=3，边界格点数B=8，根据皮克定理，面积A是多少？', answer: 'C', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: 'A=I+B/2-1=3+8/2-1=3+4-1=6。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个多边形的内部格点数I=5，边界格点数B=10，根据皮克定理，面积A是多少？', answer: 'B', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 11'], explanation: 'A=I+B/2-1=5+10/2-1=5+5-1=9。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三角形的内部格点数I=1，边界格点数B=6，根据皮克定理，面积A是多少？', answer: 'A', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: 'A=I+B/2-1=1+6/2-1=1+3-1=3。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个多边形的内部格点数I=4，边界格点数B=12，根据皮克定理，面积A是多少？', answer: 'D', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 11'], explanation: 'A=I+B/2-1=4+12/2-1=4+6-1=9。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个多边形的内部格点数I=2，边界格点数B=7，根据皮克定理，面积A是多少？', answer: 'B', options_json: ['A. 3.5', 'B. 4.5', 'C. 5.5', 'D. 6.5'], explanation: 'A=I+B/2-1=2+7/2-1=2+3.5-1=4.5。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个长方形的内部格点数I=6，边界格点数B=10，根据皮克定理，面积A是多少？', answer: 'C', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 11'], explanation: 'A=I+B/2-1=6+10/2-1=6+5-1=10。', knowledge_id: 43, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个多边形的面积A=12，内部格点数I=5，根据皮克定理，边界格点数B是多少？', answer: 'B', options_json: ['A. 14', 'B. 16', 'C. 18', 'D. 20'], explanation: '12=5+B/2-1，B/2=8，B=16。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=15，内部格点数I=8，边界格点数B是多少？', answer: 'C', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '15=8+B/2-1，B/2=8，B=16。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=10，边界格点数B=12，内部格点数I是多少？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '10=I+12/2-1，10=I+6-1，I=5。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=20，内部格点数I=12，边界格点数B是多少？', answer: 'D', options_json: ['A. 14', 'B. 16', 'C. 18', 'D. 18'], explanation: '20=12+B/2-1，B/2=9，B=18。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  { question_body: '皮克定理的应用步骤是？', answer: 'A', options_json: ['A. 确定多边形→数内部格点I→数边界格点B→应用公式A=I+B/2-1', 'B. 直接计算', 'C. 测量长度→计算面积', 'D. 猜测面积'], explanation: '皮克定理的应用步骤是确定多边形→数内部格点I→数边界格点B→应用公式A=I+B/2-1。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=8，边界格点数B=10，内部格点数I是多少？', answer: 'B', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '8=I+10/2-1，8=I+5-1，I=4。', knowledge_id: 43, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：皮克定理用于计算顶点都在格点上的简单多边形的面积。', answer: '正确', options_json: ['正确', '错误'], explanation: '皮克定理用于计算顶点都在格点上的简单多边形的面积。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：皮克定理的公式是A=I+B/2-1。', answer: '正确', options_json: ['正确', '错误'], explanation: '皮克定理的公式是A=I+B/2-1。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在皮克定理中，I表示边界格点数。', answer: '错误', options_json: ['正确', '错误'], explanation: '在皮克定理中，I表示内部格点数，B表示边界格点数。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：皮克定理中的格点是指整数坐标点。', answer: '正确', options_json: ['正确', '错误'], explanation: '皮克定理中的格点是指整数坐标点。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：边长为1的正方形，根据皮克定理，面积A=1。', answer: '正确', options_json: ['正确', '错误'], explanation: '边长为1的正方形，I=0，B=4，A=0+4/2-1=1。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：皮克定理可以用于计算圆形的面积。', answer: '错误', options_json: ['正确', '错误'], explanation: '皮克定理只适用于顶点都在格点上的简单多边形，不适用于圆形。', knowledge_id: 43, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '皮克定理的公式是A=I+____/2-1。', answer: 'B', options_json: null, explanation: '皮克定理的公式是A=I+B/2-1。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在皮克定理中，I表示____格点数。', answer: '内部', options_json: null, explanation: '在皮克定理中，I表示内部格点数。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在皮克定理中，B表示____格点数。', answer: '边界', options_json: null, explanation: '在皮克定理中，B表示边界格点数。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  { question_body: '皮克定理用于计算顶点都在____上的简单多边形的面积。', answer: '格点', options_json: null, explanation: '皮克定理用于计算顶点都在格点上的简单多边形的面积。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  { question_body: '边长为1的正方形，内部格点数I=____，边界格点数B=4。', answer: '0', options_json: null, explanation: '边长为1的正方形内部没有格点，所以I=0。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  { question_body: '皮克定理的名称来源于数学家____。', answer: '皮克', options_json: null, explanation: '皮克定理的名称来源于数学家皮克（Georg Pick）。', knowledge_id: 43, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个多边形的内部格点数I=3，边界格点数B=8，根据皮克定理，面积A=____。', answer: '6', options_json: null, explanation: 'A=I+B/2-1=3+8/2-1=3+4-1=6。', knowledge_id: 43, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个多边形的内部格点数I=5，边界格点数B=10，根据皮克定理，面积A=____。', answer: '9', options_json: null, explanation: 'A=I+B/2-1=5+10/2-1=5+5-1=9。', knowledge_id: 43, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=12，内部格点数I=5，边界格点数B=____。', answer: '16', options_json: null, explanation: '12=5+B/2-1，B/2=8，B=16。', knowledge_id: 43, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个多边形的面积A=10，边界格点数B=12，内部格点数I=____。', answer: '5', options_json: null, explanation: '10=I+12/2-1，10=I+6-1，I=5。', knowledge_id: 43, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge43Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点43题目生成完成，共插入 ${knowledge43Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
