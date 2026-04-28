const mysql = require('mysql2/promise');

const knowledge40Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '燕尾模型的基本思想是？', answer: 'A', options_json: ['A. 利用三角形中由一个顶点出发的三条线段形成的面积关系', 'B. 所有三角形面积相等', 'C. 所有线段长度相等', 'D. 与面积计算无关'], explanation: '燕尾模型的基本思想是利用三角形中由一个顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型适用于什么图形？', answer: 'B', options_json: ['A. 四边形', 'B. 三角形', 'C. 五边形', 'D. 六边形'], explanation: '燕尾模型适用于三角形。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型的名称来源于？', answer: 'C', options_json: ['A. 燕子的尾巴形状', 'B. 三角形的形状', 'C. 图形形状像燕尾', 'D. 与燕子无关'], explanation: '燕尾模型的名称来源于图形形状像燕尾。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型的核心是？', answer: 'A', options_json: ['A. 找到由顶点出发的三条线段形成的面积关系', 'B. 计算周长', 'C. 测量长度', 'D. 与面积无关'], explanation: '燕尾模型的核心是找到由顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型常用于解决什么问题？', answer: 'C', options_json: ['A. 周长计算', 'B. 体积计算', 'C. 面积计算', 'D. 长度计算'], explanation: '燕尾模型常用于解决面积计算问题。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在燕尾模型中，由顶点出发的三条线段将三角形分成的三个小三角形的面积比与什么有关？', answer: 'A', options_json: ['A. 对应边的比', 'B. 对应角的比', 'C. 对应高的比', 'D. 与面积无关'], explanation: '在燕尾模型中，三个小三角形的面积比与对应边的比有关。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型的应用不包括？', answer: 'D', options_json: ['A. 计算组合图形面积', 'B. 计算阴影部分面积', 'C. 证明面积关系', 'D. 计算图形体积'], explanation: '燕尾模型主要用于面积计算，不包括体积计算。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型的数学原理是？', answer: 'C', options_json: ['A. 面积的可加性', 'B. 面积的可减性', 'C. 三角形面积公式', 'D. 面积的随机性'], explanation: '燕尾模型的数学原理是基于三角形面积公式。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在燕尾模型中，由顶点出发的三条线段通常是？', answer: 'A', options_json: ['A. 中线', 'B. 高', 'C. 角平分线', 'D. 任意线段'], explanation: '在燕尾模型中，由顶点出发的三条线段通常是中线。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型的优势是？', answer: 'A', options_json: ['A. 简化面积计算', 'B. 增加计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '燕尾模型的优势是简化面积计算。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在燕尾模型中，三个小三角形的面积比等于？', answer: 'B', options_json: ['A. 对应边的和', 'B. 对应边的比', 'C. 对应边的差', 'D. 对应边的积'], explanation: '在燕尾模型中，三个小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  { question_body: '燕尾模型在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化面积证明', 'B. 增加证明难度', 'C. 改变面积大小', 'D. 与证明无关'], explanation: '燕尾模型在几何证明中的作用是简化面积证明。', knowledge_id: 40, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积比为2:3:4，对应的边BD:DC:CE:EB:BF:FA的比是？', answer: 'B', options_json: ['A. 1:1:1:1:1:1', 'B. 2:3:3:4:4:2', 'C. 2:3:4:2:3:4', 'D. 4:3:2:4:3:2'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段将三角形分成三个小三角形，面积分别为6、9、12，它们的面积比是？', answer: 'C', options_json: ['A. 1:2:3', 'B. 2:3:4', 'C. 2:3:4', 'D. 3:4:5'], explanation: '6:9:12=2:3:4。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  { question_body: '燕尾模型的应用步骤是？', answer: 'A', options_json: ['A. 识别三角形→找到由顶点出发的三条线段→应用面积关系→计算面积', 'B. 直接计算', 'C. 测量长度→计算面积', 'D. 猜测面积'], explanation: '燕尾模型的应用步骤是识别三角形→找到由顶点出发的三条线段→应用面积关系→计算面积。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是1:2:3，对应的边的比是？', answer: 'B', options_json: ['A. 1:2:3', 'B. 1:2:3', 'C. 3:2:1', 'D. 2:3:1'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积比为3:4:5，对应的边BD:DC的比是？', answer: 'C', options_json: ['A. 3:4', 'B. 4:5', 'C. 3:4', 'D. 5:3'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比，所以BD:DC=3:4。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是2:5:7，对应的边的比是？', answer: 'D', options_json: ['A. 7:5:2', 'B. 5:2:7', 'C. 2:7:5', 'D. 2:5:7'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积分别为8、12、16，对应的边BD:DC:CE:EB的比是？', answer: 'B', options_json: ['A. 8:12:12:16', 'B. 2:3:3:4', 'C. 8:12:16:8', 'D. 16:12:8:16'], explanation: '8:12:16=2:3:4，所以BD:DC=2:3，CE:EB=3:4。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是3:6:9，对应的边的比是？', answer: 'C', options_json: ['A. 1:2:3', 'B. 3:6:9', 'C. 1:2:3', 'D. 9:6:3'], explanation: '3:6:9=1:2:3，所以对应的边的比是1:2:3。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积比为4:6:8，对应的边BD:DC的比是？', answer: 'A', options_json: ['A. 4:6', 'B. 6:8', 'C. 8:4', 'D. 6:4'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比，所以BD:DC=4:6=2:3。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是5:10:15，对应的边的比是？', answer: 'B', options_json: ['A. 5:10:15', 'B. 1:2:3', 'C. 15:10:5', 'D. 10:5:15'], explanation: '5:10:15=1:2:3，所以对应的边的比是1:2:3。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积分别为10、15、20，对应的边CE:EB的比是？', answer: 'C', options_json: ['A. 10:15', 'B. 15:20', 'C. 15:20', 'D. 20:10'], explanation: '15:20=3:4，所以CE:EB=3:4。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是1:3:5，对应的边的比是？', answer: 'D', options_json: ['A. 5:3:1', 'B. 3:1:5', 'C. 1:5:3', 'D. 1:3:5'], explanation: '在燕尾模型中，小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：燕尾模型的基本思想是利用三角形中由一个顶点出发的三条线段形成的面积关系。', answer: '正确', options_json: ['正确', '错误'], explanation: '燕尾模型的基本思想是利用三角形中由一个顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：燕尾模型适用于四边形。', answer: '错误', options_json: ['正确', '错误'], explanation: '燕尾模型适用于三角形，不是四边形。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：燕尾模型的名称来源于图形形状像燕尾。', answer: '正确', options_json: ['正确', '错误'], explanation: '燕尾模型的名称来源于图形形状像燕尾。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：燕尾模型常用于解决面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '燕尾模型是解决面积计算问题的重要方法。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在燕尾模型中，三个小三角形的面积比等于对应边的比。', answer: '正确', options_json: ['正确', '错误'], explanation: '在燕尾模型中，三个小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：燕尾模型的核心是找到由顶点出发的三条线段形成的面积关系。', answer: '正确', options_json: ['正确', '错误'], explanation: '燕尾模型的核心是找到由顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '燕尾模型的基本思想是利用三角形中由一个____出发的三条线段形成的面积关系。', answer: '顶点', options_json: null, explanation: '燕尾模型的基本思想是利用三角形中由一个顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  { question_body: '燕尾模型适用于____形。', answer: '三角', options_json: null, explanation: '燕尾模型适用于三角形。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  { question_body: '燕尾模型的名称来源于图形形状像____。', answer: '燕尾', options_json: null, explanation: '燕尾模型的名称来源于图形形状像燕尾。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  { question_body: '燕尾模型常用于解决____计算问题。', answer: '面积', options_json: null, explanation: '燕尾模型常用于解决面积计算问题。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在燕尾模型中，三个小三角形的面积比等于____边的比。', answer: '对应', options_json: null, explanation: '在燕尾模型中，三个小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  { question_body: '燕尾模型的核心是找到由顶点出发的三条线段形成的____关系。', answer: '面积', options_json: null, explanation: '燕尾模型的核心是找到由顶点出发的三条线段形成的面积关系。', knowledge_id: 40, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段将三角形分成三个小三角形，面积分别为6、9、12，它们的面积比是____:____:____。', answer: '2,3,4', options_json: null, explanation: '6:9:12=2:3:4。', knowledge_id: 40, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是1:2:3，对应的边的比是____:____:____。', answer: '1,2,3', options_json: null, explanation: '在燕尾模型中，小三角形的面积比等于对应边的比。', knowledge_id: 40, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三角形ABC的顶点A出发的三条线段AD、AE、AF将三角形分成三个小三角形，面积比为3:4:5，对应的边BD:DC的比是____:____。', answer: '3,4', options_json: null, explanation: '在燕尾模型中，小三角形的面积比等于对应边的比，所以BD:DC=3:4。', knowledge_id: 40, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在燕尾模型中，三个小三角形的面积比是5:10:15，对应的边的比是____:____:____。', answer: '1,2,3', options_json: null, explanation: '5:10:15=1:2:3，所以对应的边的比是1:2:3。', knowledge_id: 40, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge40Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点40题目生成完成，共插入 ${knowledge40Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
