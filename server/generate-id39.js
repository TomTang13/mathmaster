const mysql = require('mysql2/promise');

const knowledge39Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '蝴蝶模型的基本思想是？', answer: 'A', options_json: ['A. 利用四边形对角线分成的四个三角形之间的面积关系', 'B. 所有三角形面积相等', 'C. 所有四边形面积相等', 'D. 与面积计算无关'], explanation: '蝴蝶模型的基本思想是利用四边形对角线分成的四个三角形之间的面积关系。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型适用于什么图形？', answer: 'B', options_json: ['A. 三角形', 'B. 四边形', 'C. 五边形', 'D. 六边形'], explanation: '蝴蝶模型适用于四边形，特别是梯形。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型中，对角线分成的四个三角形中，相对的两个三角形面积？', answer: 'C', options_json: ['A. 不等', 'B. 一个是另一个的2倍', 'C. 相等', 'D. 一个是另一个的3倍'], explanation: '蝴蝶模型中，对角线分成的四个三角形中，相对的两个三角形面积相等。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型的另一个名称是？', answer: 'D', options_json: ['A. 鸟头模型', 'B. 燕尾模型', 'C. 一半模型', 'D. 梯形模型'], explanation: '蝴蝶模型的另一个名称是梯形模型，因为它在梯形中应用广泛。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在蝴蝶模型中，对角线交点将对角线分成的两段长度比与什么有关？', answer: 'A', options_json: ['A. 对应的三角形面积比', 'B. 四边形的周长', 'C. 四边形的角度', 'D. 与面积无关'], explanation: '在蝴蝶模型中，对角线交点将对角线分成的两段长度比与对应的三角形面积比有关。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型常用于解决什么问题？', answer: 'C', options_json: ['A. 周长计算', 'B. 体积计算', 'C. 面积计算', 'D. 长度计算'], explanation: '蝴蝶模型常用于解决面积计算问题。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型的核心是？', answer: 'A', options_json: ['A. 找到对角线分成的三角形面积关系', 'B. 计算周长', 'C. 测量长度', 'D. 与面积无关'], explanation: '蝴蝶模型的核心是找到对角线分成的三角形面积关系。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比与什么有关？', answer: 'B', options_json: ['A. 周长比', 'B. 对应三角形的面积比', 'C. 角度比', 'D. 与面积无关'], explanation: '在梯形的蝴蝶模型中，上下底的比与对应三角形的面积比有关。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型的应用不包括？', answer: 'D', options_json: ['A. 计算组合图形面积', 'B. 计算阴影部分面积', 'C. 证明面积关系', 'D. 计算图形体积'], explanation: '蝴蝶模型主要用于面积计算，不包括体积计算。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型的数学原理是？', answer: 'C', options_json: ['A. 面积的可加性', 'B. 面积的可减性', 'C. 三角形面积公式和相似三角形', 'D. 面积的随机性'], explanation: '蝴蝶模型的数学原理是基于三角形面积公式和相似三角形。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在蝴蝶模型中，对角线分成的四个三角形中，相邻的两个三角形面积比等于？', answer: 'A', options_json: ['A. 对应边的比', 'B. 对应边比的平方', 'C. 对应边和的比', 'D. 无法确定'], explanation: '在蝴蝶模型中，相邻的两个三角形面积比等于对应边的比。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  { question_body: '蝴蝶模型的优势是？', answer: 'A', options_json: ['A. 简化面积计算', 'B. 增加计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '蝴蝶模型的优势是简化面积计算。', knowledge_id: 39, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是6，三角形BOC的面积是12，三角形COD的面积是？', answer: 'B', options_json: ['A. 6', 'B. 12', 'C. 18', 'D. 24'], explanation: '根据蝴蝶模型，三角形AOB和三角形COD面积相等，所以三角形COD的面积是6。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是8，三角形AOD的面积是12，三角形BOC的面积是？', answer: 'C', options_json: ['A. 8', 'B. 12', 'C. 12', 'D. 16'], explanation: '根据蝴蝶模型，三角形AOD和三角形BOC面积相等，所以三角形BOC的面积是12。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比是2:3，对应的三角形面积比是？', answer: 'D', options_json: ['A. 2:3', 'B. 3:2', 'C. 4:9', 'D. 4:9'], explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比，所以2²:3²=4:9。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  { question_body: '蝴蝶模型在几何证明中的作用是？', answer: 'A', options_json: ['A. 简化面积证明', 'B. 增加证明难度', 'C. 改变面积大小', 'D. 与证明无关'], explanation: '蝴蝶模型在几何证明中的作用是简化面积证明。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是9，三角形BOC的面积是15，三角形AOD的面积是？', answer: 'B', options_json: ['A. 9', 'B. 15', 'C. 21', 'D. 25'], explanation: '根据蝴蝶模型，三角形AOD和三角形BOC面积相等，所以三角形AOD的面积是15。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是10，三角形COD的面积是？', answer: 'C', options_json: ['A. 5', 'B. 10', 'C. 10', 'D. 20'], explanation: '根据蝴蝶模型，三角形AOB和三角形COD面积相等，所以三角形COD的面积是10。', knowledge_id: 39, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是6，三角形BOC的面积是12，三角形AOD的面积是8，三角形COD的面积是？', answer: 'B', options_json: ['A. 6', 'B. 6', 'C. 8', 'D. 12'], explanation: '根据蝴蝶模型，三角形AOB和三角形COD面积相等，所以三角形COD的面积是6。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比是3:4，对应的三角形面积比是？', answer: 'C', options_json: ['A. 3:4', 'B. 4:3', 'C. 9:16', 'D. 16:9'], explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比，所以3²:4²=9:16。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是12，三角形BOC的面积是18，三角形AOD的面积是？', answer: 'B', options_json: ['A. 12', 'B. 18', 'C. 24', 'D. 30'], explanation: '根据蝴蝶模型，三角形AOD和三角形BOC面积相等，所以三角形AOD的面积是18。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是8，三角形BOC的面积是16，三角形COD的面积是？', answer: 'A', options_json: ['A. 8', 'B. 16', 'C. 24', 'D. 32'], explanation: '根据蝴蝶模型，三角形AOB和三角形COD面积相等，所以三角形COD的面积是8。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  { question_body: '蝴蝶模型的应用步骤是？', answer: 'A', options_json: ['A. 识别四边形→找到对角线交点→应用面积关系→计算面积', 'B. 直接计算', 'C. 测量长度→计算面积', 'D. 猜测面积'], explanation: '蝴蝶模型的应用步骤是识别四边形→找到对角线交点→应用面积关系→计算面积。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比是1:2，对应的三角形面积比是？', answer: 'D', options_json: ['A. 1:2', 'B. 2:1', 'C. 1:4', 'D. 1:4'], explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比，所以1²:2²=1:4。', knowledge_id: 39, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：蝴蝶模型的基本思想是利用四边形对角线分成的四个三角形之间的面积关系。', answer: '正确', options_json: ['正确', '错误'], explanation: '蝴蝶模型的基本思想是利用四边形对角线分成的四个三角形之间的面积关系。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：蝴蝶模型适用于三角形。', answer: '错误', options_json: ['正确', '错误'], explanation: '蝴蝶模型适用于四边形，不是三角形。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：蝴蝶模型中，对角线分成的四个三角形中，相对的两个三角形面积相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '蝴蝶模型中，对角线分成的四个三角形中，相对的两个三角形面积相等。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：蝴蝶模型的另一个名称是梯形模型。', answer: '正确', options_json: ['正确', '错误'], explanation: '蝴蝶模型的另一个名称是梯形模型，因为它在梯形中应用广泛。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：蝴蝶模型常用于解决面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '蝴蝶模型是解决面积计算问题的重要方法。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比。', answer: '正确', options_json: ['正确', '错误'], explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比。', knowledge_id: 39, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '蝴蝶模型的基本思想是利用四边形____分成的四个三角形之间的面积关系。', answer: '对角线', options_json: null, explanation: '蝴蝶模型的基本思想是利用四边形对角线分成的四个三角形之间的面积关系。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  { question_body: '蝴蝶模型适用于____形，特别是梯形。', answer: '四边', options_json: null, explanation: '蝴蝶模型适用于四边形，特别是梯形。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  { question_body: '蝴蝶模型中，对角线分成的四个三角形中，____的两个三角形面积相等。', answer: '相对', options_json: null, explanation: '蝴蝶模型中，对角线分成的四个三角形中，相对的两个三角形面积相等。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  { question_body: '蝴蝶模型的另一个名称是____模型。', answer: '梯形', options_json: null, explanation: '蝴蝶模型的另一个名称是梯形模型，因为它在梯形中应用广泛。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  { question_body: '蝴蝶模型常用于解决____计算问题。', answer: '面积', options_json: null, explanation: '蝴蝶模型常用于解决面积计算问题。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在蝴蝶模型中，对角线交点将对角线分成的两段长度比与对应的____面积比有关。', answer: '三角形', options_json: null, explanation: '在蝴蝶模型中，对角线交点将对角线分成的两段长度比与对应的三角形面积比有关。', knowledge_id: 39, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是6，三角形BOC的面积是12，三角形COD的面积是____。', answer: '6', options_json: null, explanation: '根据蝴蝶模型，三角形AOB和三角形COD面积相等，所以三角形COD的面积是6。', knowledge_id: 39, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在蝴蝶模型中，四边形ABCD的对角线AC和BD相交于点O，三角形AOB的面积是8，三角形AOD的面积是12，三角形BOC的面积是____。', answer: '12', options_json: null, explanation: '根据蝴蝶模型，三角形AOD和三角形BOC面积相等，所以三角形BOC的面积是12。', knowledge_id: 39, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比是2:3，对应的三角形面积比是____:____。', answer: '4,9', options_json: null, explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比，所以2²:3²=4:9。', knowledge_id: 39, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在梯形的蝴蝶模型中，上下底的比是1:2，对应的三角形面积比是____:____。', answer: '1,4', options_json: null, explanation: '在梯形的蝴蝶模型中，上下底的比的平方等于对应的三角形面积比，所以1²:2²=1:4。', knowledge_id: 39, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge39Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点39题目生成完成，共插入 ${knowledge39Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
