const mysql = require('mysql2/promise');

const knowledge31Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '数阵图的基本要求是？', answer: 'B', options_json: ['A. 所有数字相同', 'B. 每条线上的数字和相等', 'C. 数字按顺序排列', 'D. 数字都是偶数'], explanation: '数阵图的基本要求是每条线上的数字和相等。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '辐射型数阵图的特点是？', answer: 'A', options_json: ['A. 有一个中心数', 'B. 没有中心数', 'C. 所有数字围成一个封闭图形', 'D. 数字排列成直线'], explanation: '辐射型数阵图有一个中心数，其他数字围绕中心排列。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '封闭型数阵图的特点是？', answer: 'C', options_json: ['A. 有一个中心数', 'B. 数字排列成直线', 'C. 所有数字围成一个封闭图形', 'D. 数字都在一条线上'], explanation: '封闭型数阵图的数字围成一个封闭图形。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在辐射型数阵图中，中心数通常会被计算几次？', answer: 'D', options_json: ['A. 1次', 'B. 2次', 'C. 3次', 'D. 多次（取决于线的数量）'], explanation: '中心数会被每条线计算一次，所以次数取决于线的数量。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列哪个是数阵图？', answer: 'B', options_json: ['A. 乘法表', 'B. 幻方', 'C. 加法表', 'D. 除法表'], explanation: '幻方是一种特殊的数阵图。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数阵图的解题关键是？', answer: 'C', options_json: ['A. 随机填数', 'B. 计算速度', 'C. 找到中心数或公共数', 'D. 记忆力'], explanation: '数阵图的解题关键是找到中心数或公共数。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一个三角形数阵图中，每条边有3个数，请问总共有多少个位置？', answer: 'A', options_json: ['A. 6', 'B. 7', 'C. 8', 'D. 9'], explanation: '三角形数阵图每条边3个数，共有6个位置（每个顶点被两条边共享）。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数阵图中，公共数指的是？', answer: 'B', options_json: ['A. 最大的数', 'B. 被多条线共享的数', 'C. 最小的数', 'D. 中间的数'], explanation: '公共数是被多条线共享的数。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数阵图的历史可以追溯到哪个国家？', answer: 'A', options_json: ['A. 中国', 'B. 古希腊', 'C. 古埃及', 'D. 古印度'], explanation: '数阵图起源于中国古代。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数阵图中，通常使用的数字是？', answer: 'C', options_json: ['A. 任意数字', 'B. 负数', 'C. 连续的自然数', 'D. 小数'], explanation: '数阵图通常使用连续的自然数。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '辐射型数阵图的线数通常是？', answer: 'B', options_json: ['A. 2条', 'B. 3条或更多', 'C. 1条', 'D. 任意条数'], explanation: '辐射型数阵图通常有3条或更多的线。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  { question_body: '封闭型数阵图的形状通常是？', answer: 'D', options_json: ['A. 直线', 'B. 射线', 'C. 点', 'D. 多边形'], explanation: '封闭型数阵图通常是多边形形状。', knowledge_id: 31, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在一个3阶辐射型数阵图中，使用数字1-7，中心数是4，每条线的和是多少？', answer: 'C', options_json: ['A. 10', 'B. 12', 'C. 12', 'D. 14'], explanation: '中心数是4，每条线包含中心数和另外两个数，1+7+4=12，2+6+4=12，3+5+4=12。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在一个三角形数阵图中，每条边有3个数，使用数字1-6，每条边的和相等，这个和是多少？', answer: 'B', options_json: ['A. 9', 'B. 9', 'C. 10', 'D. 11'], explanation: '1+2+3+4+5+6=21，每个顶点数被计算两次，所以3条边的和为21+顶点和，顶点和最小为1+2+3=6，所以每条边的和为(21+6)/3=9。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在数阵图中，下列哪种方法是常用的解题方法？', answer: 'A', options_json: ['A. 尝试法', 'B. 猜测法', 'C. 随机法', 'D. 放弃法'], explanation: '尝试法是数阵图常用的解题方法。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在一个正方形数阵图中，每条边有3个数，使用数字1-8，每条边的和相等，这个和是多少？', answer: 'C', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '1+2+3+4+5+6+7+8=36，每个顶点数被计算两次，所以4条边的和为36+顶点和，顶点和最小为1+2+3+4=10，所以每条边的和为(36+10)/4=11.5（不可能），顶点和为1+2+3+5=11，和为(36+11)/4=11.75（不可能），顶点和为1+2+4+5=12，和为(36+12)/4=12。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  { question_body: '数阵图的难度主要取决于什么？', answer: 'D', options_json: ['A. 数字大小', 'B. 图形形状', 'C. 线的数量', 'D. 数字范围和图形复杂度'], explanation: '数阵图的难度取决于数字范围和图形复杂度。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在数阵图中，中心数的选择通常要考虑什么？', answer: 'B', options_json: ['A. 最大的数', 'B. 中间的数', 'C. 最小的数', 'D. 任意数'], explanation: '中心数通常选择中间的数，这样更容易使每条线的和相等。', knowledge_id: 31, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在一个5阶辐射型数阵图中，使用数字1-11，中心数是6，每条线的和是多少？', answer: 'D', options_json: ['A. 18', 'B. 20', 'C. 22', 'D. 24'], explanation: '中心数是6，每条线包含中心数和另外两个数，1+11+6=18，2+10+6=18，3+9+6=18，4+8+6=18，5+7+6=18。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在一个五边形数阵图中，每条边有3个数，使用数字1-10，每条边的和相等，这个和是多少？', answer: 'C', options_json: ['A. 14', 'B. 15', 'C. 16', 'D. 17'], explanation: '1+2+3+4+5+6+7+8+9+10=55，每个顶点数被计算两次，所以5条边的和为55+顶点和，顶点和最小为1+2+3+4+5=15，所以每条边的和为(55+15)/5=14，验证：1+10+3=14，3+9+2=14，2+8+4=14，4+7+3=14（重复），所以顶点和为1+2+4+5+8=20，和为(55+20)/5=15，验证：1+10+4=15，4+9+2=15，2+8+5=15，5+7+3=15，3+6+6=15（重复），所以顶点和为1+3+5+7+9=25，和为(55+25)/5=16，验证：1+10+5=16，5+9+2=16，2+8+6=16，6+7+3=16，3+4+9=16（重复），正确的和是16。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在数阵图中，下列哪种情况不可能发生？', answer: 'A', options_json: ['A. 每条线的和不相等', 'B. 中心数是奇数', 'C. 中心数是偶数', 'D. 公共数有多个'], explanation: '数阵图的定义就是每条线的和相等，所以A不可能发生。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在一个4阶辐射型数阵图中，使用数字1-9，中心数是5，每条线的和是多少？', answer: 'B', options_json: ['A. 12', 'B. 15', 'C. 18', 'D. 21'], explanation: '中心数是5，每条线包含中心数和另外两个数，1+9+5=15，2+8+5=15，3+7+5=15，4+6+5=15。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  { question_body: '数阵图的解题步骤通常不包括？', answer: 'D', options_json: ['A. 确定中心数或公共数', 'B. 计算每条线的和', 'C. 尝试填充数字', 'D. 随机猜测'], explanation: '数阵图的解题步骤不包括随机猜测，应该通过逻辑推理。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在数阵图中，当数字范围确定时，每条线的和是？', answer: 'C', options_json: ['A. 任意值', 'B. 固定值', 'C. 有一定范围', 'D. 无法确定'], explanation: '当数字范围确定时，每条线的和有一定的范围。', knowledge_id: 31, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：数阵图的每条线上的数字和必须相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '数阵图的定义就是每条线上的数字和相等。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：辐射型数阵图有一个中心数。', answer: '正确', options_json: ['正确', '错误'], explanation: '辐射型数阵图的特点就是有一个中心数。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：封闭型数阵图没有中心数。', answer: '正确', options_json: ['正确', '错误'], explanation: '封闭型数阵图的数字围成一个封闭图形，没有中心数。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数阵图只能使用连续的自然数。', answer: '错误', options_json: ['正确', '错误'], explanation: '数阵图也可以使用其他数字，只要满足每条线的和相等。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数阵图的中心数只能是中间的数。', answer: '错误', options_json: ['正确', '错误'], explanation: '中心数可以是任意数，只要能使每条线的和相等。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数阵图的解题关键是找到中心数或公共数。', answer: '正确', options_json: ['正确', '错误'], explanation: '找到中心数或公共数是数阵图解题的关键。', knowledge_id: 31, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '数阵图的基本要求是每条线上的数字____相等。', answer: '和', options_json: null, explanation: '数阵图的基本要求是每条线上的数字和相等。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  { question_body: '辐射型数阵图的特点是有一个____数。', answer: '中心', options_json: null, explanation: '辐射型数阵图有一个中心数。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  { question_body: '封闭型数阵图的特点是所有数字围成一个____图形。', answer: '封闭', options_json: null, explanation: '封闭型数阵图的数字围成一个封闭图形。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在辐射型数阵图中，中心数会被每条线____一次。', answer: '计算', options_json: null, explanation: '中心数会被每条线计算一次。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  { question_body: '数阵图的解题关键是找到____数或公共数。', answer: '中心', options_json: null, explanation: '数阵图的解题关键是找到中心数或公共数。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  { question_body: '数阵图通常使用____的自然数。', answer: '连续', options_json: null, explanation: '数阵图通常使用连续的自然数。', knowledge_id: 31, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在一个3阶辐射型数阵图中，使用数字1-7，中心数是4，每条线的和是____。', answer: '12', options_json: null, explanation: '1+7+4=12，2+6+4=12，3+5+4=12。', knowledge_id: 31, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在一个三角形数阵图中，每条边有3个数，使用数字1-6，每条边的和是____。', answer: '9', options_json: null, explanation: '1+2+3+4+5+6=21，每个顶点数被计算两次，所以3条边的和为21+顶点和，顶点和最小为1+2+3=6，每条边的和为(21+6)/3=9。', knowledge_id: 31, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在一个4阶辐射型数阵图中，使用数字1-9，中心数是5，每条线的和是____。', answer: '15', options_json: null, explanation: '1+9+5=15，2+8+5=15，3+7+5=15，4+6+5=15。', knowledge_id: 31, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在一个正方形数阵图中，每条边有3个数，使用数字1-8，每条边的和是____。', answer: '12', options_json: null, explanation: '1+2+3+4+5+6+7+8=36，每个顶点数被计算两次，所以4条边的和为36+顶点和，顶点和为1+2+4+5=12，每条边的和为(36+12)/4=12。', knowledge_id: 31, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge31Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点31题目生成完成，共插入 ${knowledge31Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
