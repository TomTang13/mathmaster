const mysql = require('mysql2/promise');

const knowledge35Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '割补法的基本思想是？', answer: 'A', options_json: ['A. 将不规则图形割补成规则图形', 'B. 将规则图形割补成不规则图形', 'C. 直接计算不规则图形面积', 'D. 不改变图形形状'], explanation: '割补法的基本思想是将不规则图形割补成规则图形。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平移法常用于解决什么问题？', answer: 'B', options_json: ['A. 体积计算', 'B. 面积计算', 'C. 长度计算', 'D. 角度计算'], explanation: '平移法常用于解决面积计算问题。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '旋转法的核心是？', answer: 'C', options_json: ['A. 改变图形大小', 'B. 改变图形位置', 'C. 保持图形大小和形状不变', 'D. 改变图形形状'], explanation: '旋转法的核心是保持图形大小和形状不变，只改变位置。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '割补法的步骤通常不包括？', answer: 'D', options_json: ['A. 分割图形', 'B. 移动部分图形', 'C. 补全图形', 'D. 改变图形大小'], explanation: '割补法不改变图形大小，只改变形状。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平移法的特点是？', answer: 'A', options_json: ['A. 图形沿直线移动', 'B. 图形绕点旋转', 'C. 图形放大或缩小', 'D. 图形形状改变'], explanation: '平移法的特点是图形沿直线移动。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '旋转法的特点是？', answer: 'B', options_json: ['A. 图形沿直线移动', 'B. 图形绕点旋转', 'C. 图形放大或缩小', 'D. 图形形状改变'], explanation: '旋转法的特点是图形绕点旋转。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '割补法在小学数学中常用于计算什么图形的面积？', answer: 'C', options_json: ['A. 正方形', 'B. 长方形', 'C. 不规则图形', 'D. 圆形'], explanation: '割补法常用于计算不规则图形的面积。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平移法可以将分散的图形部分？', answer: 'D', options_json: ['A. 放大', 'B. 缩小', 'C. 变形', 'D. 拼接成规则图形'], explanation: '平移法可以将分散的图形部分拼接成规则图形。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '旋转法可以将图形？', answer: 'A', options_json: ['A. 绕某点旋转一定角度', 'B. 沿直线移动', 'C. 放大', 'D. 缩小'], explanation: '旋转法可以将图形绕某点旋转一定角度。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '割补法的关键是？', answer: 'B', options_json: ['A. 改变图形大小', 'B. 找到合适的分割点', 'C. 直接计算', 'D. 忽略图形细节'], explanation: '割补法的关键是找到合适的分割点。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平移法的应用不包括？', answer: 'C', options_json: ['A. 计算组合图形面积', 'B. 计算不规则图形面积', 'C. 计算图形周长', 'D. 计算阴影部分面积'], explanation: '平移法主要用于面积计算，不包括周长计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  { question_body: '旋转法的应用不包括？', answer: 'D', options_json: ['A. 计算组合图形面积', 'B. 计算不规则图形面积', 'C. 证明面积相等', 'D. 计算图形体积'], explanation: '旋转法主要用于面积计算，不包括体积计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个不规则图形通过割补法转化为长方形后，面积？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '割补法不改变图形面积，只改变形状。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个图形平移后，面积？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '平移不改变图形面积，只改变位置。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个图形旋转后，面积？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '旋转不改变图形面积，只改变位置。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  { question_body: '割补法的优势是？', answer: 'A', options_json: ['A. 简化计算', 'B. 增加计算难度', 'C. 改变面积大小', 'D. 与面积计算无关'], explanation: '割补法的优势是简化面积计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  { question_body: '平移法的核心是？', answer: 'C', options_json: ['A. 改变图形大小', 'B. 改变图形形状', 'C. 保持图形大小和形状不变', 'D. 改变图形面积'], explanation: '平移法的核心是保持图形大小和形状不变。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  { question_body: '旋转法的核心是？', answer: 'C', options_json: ['A. 改变图形大小', 'B. 改变图形形状', 'C. 保持图形大小和形状不变', 'D. 改变图形面积'], explanation: '旋转法的核心是保持图形大小和形状不变。', knowledge_id: 35, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个不规则图形通过割补法转化为平行四边形后，面积？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '割补法不改变图形面积，只改变形状。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在计算阴影部分面积时，常用的方法不包括？', answer: 'D', options_json: ['A. 割补法', 'B. 平移法', 'C. 旋转法', 'D. 随机猜测法'], explanation: '计算阴影部分面积常用割补法、平移法、旋转法等，不包括随机猜测法。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  { question_body: '割补法的应用步骤是？', answer: 'A', options_json: ['A. 分割→移动→补全→计算', 'B. 直接计算', 'C. 放大→计算→缩小', 'D. 旋转→计算→平移'], explanation: '割补法的应用步骤是分割→移动→补全→计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  { question_body: '平移法的应用步骤是？', answer: 'B', options_json: ['A. 分割→移动→补全→计算', 'B. 平移→拼接→计算', 'C. 旋转→计算', 'D. 直接计算'], explanation: '平移法的应用步骤是平移→拼接→计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  { question_body: '旋转法的应用步骤是？', answer: 'C', options_json: ['A. 分割→移动→补全→计算', 'B. 平移→拼接→计算', 'C. 旋转→拼接→计算', 'D. 直接计算'], explanation: '旋转法的应用步骤是旋转→拼接→计算。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  { question_body: '割补法、平移法、旋转法的共同点是？', answer: 'D', options_json: ['A. 改变图形大小', 'B. 改变图形形状', 'C. 改变图形面积', 'D. 保持图形面积不变'], explanation: '这三种方法的共同点是保持图形面积不变。', knowledge_id: 35, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：割补法的基本思想是将不规则图形割补成规则图形。', answer: '正确', options_json: ['正确', '错误'], explanation: '割补法的基本思想是将不规则图形割补成规则图形。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平移法会改变图形的面积。', answer: '错误', options_json: ['正确', '错误'], explanation: '平移法不改变图形面积，只改变位置。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：旋转法会改变图形的形状。', answer: '错误', options_json: ['正确', '错误'], explanation: '旋转法不改变图形形状，只改变位置。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：割补法不改变图形的面积。', answer: '正确', options_json: ['正确', '错误'], explanation: '割补法只改变图形形状，不改变面积。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平移法常用于解决面积计算问题。', answer: '正确', options_json: ['正确', '错误'], explanation: '平移法是解决面积计算问题的重要方法。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：旋转法常用于解决体积计算问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '旋转法主要用于面积计算，不包括体积计算。', knowledge_id: 35, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '割补法的基本思想是将____图形割补成规则图形。', answer: '不规则', options_json: null, explanation: '割补法的基本思想是将不规则图形割补成规则图形。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  { question_body: '平移法的特点是图形沿____移动。', answer: '直线', options_json: null, explanation: '平移法的特点是图形沿直线移动。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  { question_body: '旋转法的特点是图形绕____旋转。', answer: '点', options_json: null, explanation: '旋转法的特点是图形绕点旋转。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  { question_body: '割补法不改变图形的____。', answer: '面积', options_json: null, explanation: '割补法只改变图形形状，不改变面积。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  { question_body: '平移法不改变图形的____和形状。', answer: '大小', options_json: null, explanation: '平移法只改变图形位置，不改变大小和形状。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  { question_body: '旋转法不改变图形的____和形状。', answer: '大小', options_json: null, explanation: '旋转法只改变图形位置，不改变大小和形状。', knowledge_id: 35, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '割补法的应用步骤是____→移动→补全→计算。', answer: '分割', options_json: null, explanation: '割补法的应用步骤是分割→移动→补全→计算。', knowledge_id: 35, question_type_id: 1, difficulty_id: 4 },
  { question_body: '平移法的应用步骤是____→拼接→计算。', answer: '平移', options_json: null, explanation: '平移法的应用步骤是平移→拼接→计算。', knowledge_id: 35, question_type_id: 1, difficulty_id: 4 },
  { question_body: '旋转法的应用步骤是____→拼接→计算。', answer: '旋转', options_json: null, explanation: '旋转法的应用步骤是旋转→拼接→计算。', knowledge_id: 35, question_type_id: 1, difficulty_id: 4 },
  { question_body: '割补法、平移法、旋转法的共同点是保持图形____不变。', answer: '面积', options_json: null, explanation: '这三种方法的共同点是保持图形面积不变。', knowledge_id: 35, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge35Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点35题目生成完成，共插入 ${knowledge35Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
