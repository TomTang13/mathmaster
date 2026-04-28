const mysql = require('mysql2/promise');

const knowledge30Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '标准幻方的阶数是？', answer: 'B', options_json: ['A. 2×2', 'B. 3×3', 'C. 4×4', 'D. 5×5'], explanation: '标准幻方通常指3×3的幻方。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3×3幻方的幻和是？', answer: 'C', options_json: ['A. 15', 'B. 18', 'C. 15', 'D. 20'], explanation: '3×3幻方的幻和是15。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '幻方的定义是？', answer: 'B', options_json: ['A. 所有数字相同', 'B. 每行、每列、每条对角线的和相等', 'C. 数字按顺序排列', 'D. 数字都是偶数'], explanation: '幻方的定义是每行、每列、每条对角线的和相等。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3×3幻方的中心数字是？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '3×3幻方的中心数字是5。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列哪个数字不可能出现在3×3幻方中？', answer: 'D', options_json: ['A. 1', 'B. 5', 'C. 9', 'D. 10'], explanation: '3×3幻方使用数字1-9，所以10不可能出现。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '4×4幻方的幻和是？', answer: 'C', options_json: ['A. 30', 'B. 34', 'C. 34', 'D. 38'], explanation: '4×4幻方的幻和是34。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '幻方的发明者是？', answer: 'A', options_json: ['A. 中国古代数学家', 'B. 古希腊数学家', 'C. 古埃及数学家', 'D. 古印度数学家'], explanation: '幻方起源于中国古代。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3×3幻方中，数字1的位置通常在？', answer: 'B', options_json: ['A. 中心', 'B. 角落', 'C. 边中间', 'D. 任意位置'], explanation: '3×3幻方中，数字1通常在角落。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '幻方的阶数指的是？', answer: 'C', options_json: ['A. 数字的大小', 'B. 数字的个数', 'C. 行数和列数', 'D. 对角线的数量'], explanation: '幻方的阶数指的是行数和列数。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列哪个是3×3幻方的正确排列？', answer: 'B', options_json: ['A. [[1,2,3],[4,5,6],[7,8,9]]', 'B. [[8,1,6],[3,5,7],[4,9,2]]', 'C. [[1,3,5],[2,4,6],[7,8,9]]', 'D. [[9,8,7],[6,5,4],[3,2,1]]'], explanation: '选项B是标准的3×3幻方。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '幻方的幻和公式是？', answer: 'A', options_json: ['A. n(n²+1)/2', 'B. n(n+1)/2', 'C. n²(n+1)/2', 'D. n(n²-1)/2'], explanation: '幻方的幻和公式是n(n²+1)/2，其中n是阶数。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3×3幻方中，数字9的位置通常在？', answer: 'B', options_json: ['A. 中心', 'B. 与1相对的角落', 'C. 边中间', 'D. 任意位置'], explanation: '3×3幻方中，数字9通常在与1相对的角落。', knowledge_id: 30, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '5×5幻方的幻和是？', answer: 'C', options_json: ['A. 60', 'B. 65', 'C. 65', 'D. 70'], explanation: '5×5幻方的幻和是65（5×(25+1)/2=65）。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  { question_body: '3×3幻方中，数字2的位置通常在？', answer: 'C', options_json: ['A. 中心', 'B. 角落', 'C. 边中间', 'D. 任意位置'], explanation: '3×3幻方中，数字2通常在边中间。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  { question_body: '下列关于幻方的说法错误的是？', answer: 'D', options_json: ['A. 幻方的阶数可以是奇数', 'B. 幻方的阶数可以是偶数', 'C. 2×2幻方不存在', 'D. 所有幻方的中心数字都是5'], explanation: '只有3×3幻方的中心数字是5，其他阶数的幻方中心数字不同。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  { question_body: '4×4幻方中，数字1的位置通常在？', answer: 'A', options_json: ['A. 左上角', 'B. 中心', 'C. 右下角', 'D. 任意位置'], explanation: '4×4幻方中，数字1通常在左上角。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  { question_body: '3×3幻方中，每行、每列、每条对角线的和是？', answer: 'A', options_json: ['A. 15', 'B. 16', 'C. 17', 'D. 18'], explanation: '3×3幻方的幻和是15。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  { question_body: '幻方的构造方法不包括？', answer: 'C', options_json: ['A. 罗伯法', 'B. 对称交换法', 'C. 随机排列法', 'D. 杨辉法'], explanation: '幻方的构造需要特定方法，不能随机排列。', knowledge_id: 30, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '6×6幻方的幻和是？', answer: 'D', options_json: ['A. 110', 'B. 111', 'C. 112', 'D. 111'], explanation: '6×6幻方的幻和是111（6×(36+1)/2=111）。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  { question_body: '3×3幻方中，数字7的位置通常在？', answer: 'B', options_json: ['A. 左上角', 'B. 与2相对的边中间', 'C. 右下角', 'D. 中心'], explanation: '3×3幻方中，数字7通常在与2相对的边中间。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  { question_body: '下列关于幻方的说法正确的是？', answer: 'B', options_json: ['A. 所有幻方的构造方法都相同', 'B. 奇数阶幻方的构造方法与偶数阶不同', 'C. 幻方的中心数字一定是奇数', 'D. 幻方的数字必须连续'], explanation: '奇数阶和偶数阶幻方的构造方法不同。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  { question_body: '7×7幻方的幻和是？', answer: 'C', options_json: ['A. 170', 'B. 175', 'C. 175', 'D. 180'], explanation: '7×7幻方的幻和是175（7×(49+1)/2=175）。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  { question_body: '3×3幻方中，数字3的位置通常在？', answer: 'A', options_json: ['A. 与8相对的边中间', 'B. 左上角', 'C. 右下角', 'D. 中心'], explanation: '3×3幻方中，数字3通常在与8相对的边中间。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  { question_body: '幻方的历史可以追溯到哪个时期？', answer: 'A', options_json: ['A. 中国古代', 'B. 古希腊', 'C. 古埃及', 'D. 古罗马'], explanation: '幻方起源于中国古代，最早的记录可以追溯到《洛书》。', knowledge_id: 30, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：标准幻方指的是3×3的幻方。', answer: '正确', options_json: ['正确', '错误'], explanation: '标准幻方通常指3×3的幻方。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3×3幻方的幻和是15。', answer: '正确', options_json: ['正确', '错误'], explanation: '3×3幻方的幻和是15。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：2×2幻方存在。', answer: '错误', options_json: ['正确', '错误'], explanation: '2×2幻方不存在，因为无法满足每行、每列、每条对角线的和相等。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：幻方的阶数可以是任意正整数。', answer: '错误', options_json: ['正确', '错误'], explanation: '除了2阶，其他阶数的幻方都存在。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3×3幻方的中心数字一定是5。', answer: '正确', options_json: ['正确', '错误'], explanation: '3×3幻方的中心数字一定是5。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：幻方的数字必须是连续的。', answer: '正确', options_json: ['正确', '错误'], explanation: '标准幻方使用连续的数字。', knowledge_id: 30, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '标准幻方的阶数是____×____。', answer: '3,3', options_json: null, explanation: '标准幻方通常指3×3的幻方。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  { question_body: '3×3幻方的幻和是____。', answer: '15', options_json: null, explanation: '3×3幻方的幻和是15。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  { question_body: '3×3幻方的中心数字是____。', answer: '5', options_json: null, explanation: '3×3幻方的中心数字是5。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  { question_body: '4×4幻方的幻和是____。', answer: '34', options_json: null, explanation: '4×4幻方的幻和是34。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  { question_body: '幻方的阶数指的是____数和____数。', answer: '行,列', options_json: null, explanation: '幻方的阶数指的是行数和列数。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  { question_body: '幻方的幻和公式是n(n²+1)/____。', answer: '2', options_json: null, explanation: '幻方的幻和公式是n(n²+1)/2。', knowledge_id: 30, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '5×5幻方的幻和是____。', answer: '65', options_json: null, explanation: '5×5幻方的幻和是65（5×(25+1)/2=65）。', knowledge_id: 30, question_type_id: 1, difficulty_id: 4 },
  { question_body: '6×6幻方的幻和是____。', answer: '111', options_json: null, explanation: '6×6幻方的幻和是111（6×(36+1)/2=111）。', knowledge_id: 30, question_type_id: 1, difficulty_id: 4 },
  { question_body: '7×7幻方的幻和是____。', answer: '175', options_json: null, explanation: '7×7幻方的幻和是175（7×(49+1)/2=175）。', knowledge_id: 30, question_type_id: 1, difficulty_id: 4 },
  { question_body: '8×8幻方的幻和是____。', answer: '260', options_json: null, explanation: '8×8幻方的幻和是260（8×(64+1)/2=260）。', knowledge_id: 30, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge30Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点30题目生成完成，共插入 ${knowledge30Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
