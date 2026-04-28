const mysql = require('mysql2/promise');

const knowledge78Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: "从A到B只能向右或向上走，格子是1×1，A在左下角，B在右上角，共有多少种走法？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "1×1格子，需要走2步，有1步向右1步向上，C(2,1)=2种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "标数法中，起点的标数是什么？", answer: "C", options_json: ["A. 0", "B. 2", "C. 1", "D. 任意数"], explanation: "标数法中，起点的标数是1。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是2×1，A在左下角，B在右上角，共有多少种走法？", answer: "B", options_json: ["A. 2", "B. 3", "C. 4", "D. 5"], explanation: "2×1格子，需要走3步，2步向右1步向上，C(3,2)=3种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是1×2，A在左下角，B在右上角，共有多少种走法？", answer: "C", options_json: ["A. 2", "B. 3", "C. 3", "D. 4"], explanation: "1×2格子，需要走3步，1步向右2步向上，C(3,1)=3种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是2×2，A在左下角，B在右上角，共有多少种走法？", answer: "D", options_json: ["A. 4", "B. 6", "C. 8", "D. 6"], explanation: "2×2格子需要走4步，2步向右2步向上，C(4,2)=6种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "标数法中，每个点的方法数等于什么？", answer: "A", options_json: ["A. 到达该点的所有路径的方法数之和", "B. 该点的坐标", "C. 该点的位置", "D. 任意值"], explanation: "标数法中，每个点的方法数等于到达该点的所有路径的方法数之和。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是3×3，A在左下角，B在右上角，共有多少种走法？", answer: "D", options_json: ["A. 18", "B. 20", "C. 36", "D. 20"], explanation: "3×3格子需要走6步，3步向右3步向上，C(6,3)=20种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "标数法适用于什么问题？", answer: "A", options_json: ["A. 最短路径问题", "B. 计算问题", "C. 图形问题", "D. 文字问题"], explanation: "标数法适用于最短路径问题。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "标数法的关键是什么？", answer: "A", options_json: ["A. 从起点开始逐点标注", "B. 直接写出答案", "C. 猜测", "D. 计算"], explanation: "标数法的关键是从起点开始逐点标注。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是4×4，A在左下角，B在右上角，共有多少种走法？", answer: "D", options_json: ["A. 32", "B. 48", "C. 64", "D. 70"], explanation: "4×4格子需要走8步，4步向右4步向上，C(8,4)=70种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向右走，有多少种走法？", answer: "A", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "只有一条路径。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A到B只能向上走，有多少种走法？", answer: "B", options_json: ["A. 0", "B. 1", "C. 2", "D. 3"], explanation: "只有一条路径。", knowledge_id: 78, question_type_id: 2, difficulty_id: 2 },

  // 中等题 6题 (difficulty_id=3)
  { question_body: "从A到B只能向右或向上走，格子是5×5，A在左下角，B在右上角，共有多少种走法？", answer: "A", options_json: ["A. 252", "B. 120", "C. 200", "D. 180"], explanation: "5×5格子需要走10步，5步向右5步向上，C(10,5)=252种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从A到B只能向右或向上走，格子是2×3，A在左下角，B在右上角，共有多少种走法？", answer: "C", options_json: ["A. 8", "B. 9", "C. 10", "D. 12"], explanation: "2×3格子需要走5步，2步向右3步向上，C(5,2)=10种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从A到B只能向右或向上走，格子是3×2，A在左下角，B在右上角，共有多少种走法？", answer: "D", options_json: ["A. 8", "B. 9", "C. 10", "D. 10"], explanation: "3×2格子需要走5步，3步向右2步向上，C(5,3)=10种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从A到B只能向右或向上走，格子是6×6，A在左下角，B在右上角，共有多少种走法？", answer: "A", options_json: ["A. 924", "B. 720", "C. 480", "D. 360"], explanation: "6×6格子需要走12步，6步向右6步向上，C(12,6)=924种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从A到B只能向右或向上走，但必须经过C点，格子是2×2，共有多少种走法？", answer: "D", options_json: ["A. 4", "B. 6", "C. 8", "D. 4"], explanation: "从A到C有C(2,1)=2种，从C到B有C(2,1)=2种，共2×2=4种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从A到B只能向右或向上走，格子是7×7，A在左下角，B在右上角，共有多少种走法？", answer: "B", options_json: ["A. 720", "B. 3432", "C. 1200", "D. 2431"], explanation: "7×7格子需要走14步，7步向右7步向上，C(14,7)=3432种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 3 },

  // 困难题 6题 (difficulty_id=4)
  { question_body: "从A到B可以向右、向上或向右上方走对角线，格子是1×1，共有多少种走法？", answer: "B", options_json: ["A. 2", "B. 3", "C. 4", "D. 5"], explanation: "1×1格子，可以：右+上，上+右，对角线，共3种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从A到B可以向右、向上或向右上方走对角线，格子是2×2，共有多少种走法？", answer: "C", options_json: ["A. 10", "B. 13", "C. 13", "D. 15"], explanation: "2×2格子，用标数法计算。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从A到B只能向右或向上走，但必须经过C点和D点，格子是2×2，共有多少种走法？", answer: "A", options_json: ["A. 4", "B. 6", "C. 8", "D. 12"], explanation: "从A到C到D到B的走法之积。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从A到B只能向右或向上走，格子是8×8，A在左下角，B在右上角，共有多少种走法？", answer: "B", options_json: ["A. 4860", "B. 12870", "C. 123480", "D. 24310"], explanation: "8×8格子需要走16步，8步向右8步向上，C(16,8)=12870种。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从A到B只能向右或向上走，有一处障碍不能通过，共有多少种走法？", answer: "A", options_json: ["A. 从总走法中减去经过障碍的走法", "B. 分类讨论", "C. 直接计算", "D. 无法确定"], explanation: "有障碍时，需要分类讨论。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从A到B可以向右、向上或向右上方走对角线，格子是3×3，共有多少种走法？", answer: "C", options_json: ["A. 20", "B. 37", "C. 63", "D. 100"], explanation: "用标数法计算。", knowledge_id: 78, question_type_id: 2, difficulty_id: 4 },

  // ===== 判断题 6题 =====
  { question_body: "标数法适用于最短路径问题。", answer: "正确", options_json: ["正确", "错误"], explanation: "标数法适用于最短路径问题。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },
  { question_body: "标数法的基本思想是每个点标注到达该点的方法数。", answer: "正确", options_json: ["正确", "错误"], explanation: "标数法的基本思想是每个点标注到达该点的方法数。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },
  { question_body: "标数法中，起点的标数是1。", answer: "正确", options_json: ["正确", "错误"], explanation: "标数法中，起点的标数是1。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是2×2，共有4种走法。", answer: "错误", options_json: ["正确", "错误"], explanation: "2×2格子需要走4步，2步向右2步向上，C(4,2)=6种。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是3×3，共有20种走法。", answer: "正确", options_json: ["正确", "错误"], explanation: "3×3格子需要走6步，3步向右3步向上，C(6,3)=20种。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },
  { question_body: "标数法中，每个点的方法数等于到达该点的所有路径的方法数之和。", answer: "正确", options_json: ["正确", "错误"], explanation: "标数法中，每个点的方法数等于到达该点的所有路径的方法数之和。", knowledge_id: 78, question_type_id: 3, difficulty_id: 2 },

  // ===== 填空题 10题 =====
  // 简单填空 6题 (difficulty_id=2)
  { question_body: "从A到B只能向右或向上走，格子是1×1，共有____种走法。", answer: "2", options_json: null, explanation: "1×1格子，需要走2步，有1步向右1步向上，C(2,1)=2种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },
  { question_body: "标数法中，起点的标数是____。", answer: "1", options_json: null, explanation: "标数法中，起点的标数是1。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是2×1，共有____种走法。", answer: "3", options_json: null, explanation: "2×1格子，需要走3步，2步向右1步向上，C(3,2)=3种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是2×2，共有____种走法。", answer: "6", options_json: null, explanation: "2×2格子需要走4步，2步向右2步向上，C(4,2)=6种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是3×3，共有____种走法。", answer: "20", options_json: null, explanation: "3×3格子需要走6步，3步向右3步向上，C(6,3)=20种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从A到B只能向右或向上走，格子是4×4，共有____种走法。", answer: "70", options_json: null, explanation: "4×4格子需要走8步，4步向右4步向上，C(8,4)=70种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 2 },

  // 困难填空 4题 (difficulty_id=4)
  { question_body: "从A到B只能向右或向上走，格子是5×5，共有____种走法。", answer: "252", options_json: null, explanation: "5×5格子需要走10步，5步向右5步向上，C(10,5)=252种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 4 },
  { question_body: "从A到B只能向右或向上走，格子是6×6，共有____种走法。", answer: "924", options_json: null, explanation: "6×6格子需要走12步，6步向右6步向上，C(12,6)=924种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 4 },
  { question_body: "从A到B可以向右、向上或向右上方走对角线，格子是1×1，共有____种走法。", answer: "3", options_json: null, explanation: "1×1格子，可以：右+上，上+右，对角线，共3种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 4 },
  { question_body: "从A到B只能向右或向上走，格子是8×8，共有____种走法。", answer: "12870", options_json: null, explanation: "8×8格子需要走16步，8步向右8步向上，C(16,8)=12870种。", knowledge_id: 78, question_type_id: 1, difficulty_id: 4 }
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
    await connection.execute('DELETE FROM question_base WHERE knowledge_id = ?', [78]);
    await connection.beginTransaction();
    for (const q of knowledge78Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log('知识点78题目生成完成，共插入', knowledge78Questions.length, '题');
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
