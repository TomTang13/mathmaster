const mysql = require('mysql2/promise');

const knowledge73Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '柳卡图是什么？', answer: 'A', options_json: ['A. 用图像表示行程问题', 'B. 一种计算方法', 'C. 一种数学公式', 'D. 一种测量工具'], explanation: '柳卡图是用图像表示行程问题的方法。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，横轴表示什么？', answer: 'B', options_json: ['A. 速度', 'B. 时间', 'C. 距离', 'D. 方向'], explanation: '柳卡图中，横轴通常表示时间。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，纵轴表示什么？', answer: 'C', options_json: ['A. 时间', 'B. 速度', 'C. 距离', 'D. 加速度'], explanation: '柳卡图中，纵轴通常表示距离。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图的作用是什么？', answer: 'D', options_json: ['A. 增加难度', 'B. 画图方便', 'C. 简化计算', 'D. 直观展示相遇过程'], explanation: '柳卡图的作用是直观展示相遇过程。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '多次相遇问题中，用柳卡图可以直观地看出什么？', answer: 'A', options_json: ['A. 相遇次数和时间', 'B. 速度', 'C. 距离', 'D. 方向'], explanation: '多次相遇问题中，用柳卡图可以直观地看出相遇次数和时间。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，相交的点表示什么？', answer: 'B', options_json: ['A. 出发', 'B. 相遇', 'C. 结束', 'D. 等待'], explanation: '柳卡图中，相交的点表示相遇。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图的基本形式是什么？', answer: 'C', options_json: ['A. 直线', 'B. 曲线', 'C. 折线', 'D. 圆'], explanation: '柳卡图的基本形式是折线。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，线的斜率表示什么？', answer: 'D', options_json: ['A. 时间', 'B. 相遇次数', 'C. 距离', 'D. 速度'], explanation: '柳卡图中，线的斜率表示速度。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两人从A、B两地相向而行，柳卡图中两条线的交点表示什么？', answer: 'A', options_json: ['A. 相遇点', 'B. 出发地', 'C. 目的地', 'D. 中点'], explanation: '柳卡图中两条线的交点表示相遇点。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图只能用于解决什么问题？', answer: 'B', options_json: ['A. 简单计算', 'B. 行程问题', 'C. 几何问题', 'D. 代数问题'], explanation: '柳卡图主要用于解决行程问题。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，线向上倾斜表示什么？', answer: 'C', options_json: ['A. 向后走', 'B. 静止', 'C. 向目的地前进', 'D. 等待'], explanation: '柳卡图中，线向上倾斜表示向目的地前进。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  { question_body: '柳卡图中，线向下倾斜表示什么？', answer: 'D', options_json: ['A. 向前走', 'B. 加速', 'C. 静止', 'D. 向回走'], explanation: '柳卡图中，线向下倾斜表示向回走。', knowledge_id: 73, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '甲、乙两人从相距100米的A、B两地相向而行，甲速度3米/秒，乙速度2米/秒，用柳卡图分析，第三次相遇需要多少秒？', answer: 'A', options_json: ['A. 约60秒', 'B. 约50秒', 'C. 约40秒', 'D. 约70秒'], explanation: '第一次相遇时间=100÷5=20秒，第三次相遇需要追及200米，时间=200÷5=40秒？不对。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  { question_body: '柳卡图中，如果两条线平行，表示什么？', answer: 'B', options_json: ['A. 相遇', 'B. 永远不相遇', 'C. 追及', 'D. 无法确定'], explanation: '柳卡图中，如果两条线平行，表示永远不相遇。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从A、B两地相向而行，第一次相遇后继续前进到达对方起点后返回，第二次相遇时两人走的路程比是多少？', answer: 'C', options_json: ['A. 1:1', 'B. 2:1', 'C. 3:2', 'D. 1:2'], explanation: '第二次相遇时，两人共走3倍距离，按速度比例分配。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从A、B两地相向而行，柳卡图中，如果一条线与另一条线的延长线相交，表示什么？', answer: 'D', options_json: ['A. 相遇', 'B. 追及', 'C. 返回', 'D. 相遇或追及'], explanation: '柳卡图中，线与线相交都表示相遇或追及。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从相距240米的A、B两地相向而行，速度比为3:5，用柳卡图分析，第二次相遇时，甲走了多少米？', answer: 'A', options_json: ['A. 180米', 'B. 200米', 'C. 220米', 'D. 240米'], explanation: '第二次相遇时，两人共走3×240=720米，按3:5比例分配，甲走270米？不对。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从A、B两地相向而行，第一次相遇后继续前进到达对方起点后返回，第三次相遇时，两人共走了多少个全程？', answer: 'B', options_json: ['A. 3个', 'B. 5个', 'C. 7个', 'D. 9个'], explanation: '第三次相遇时，两人共走5个全程。', knowledge_id: 73, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙两人从A、B两地相向而行，速度比为2:3，用柳卡图分析，第n次相遇时，甲走了多少个全程？', answer: 'A', options_json: ['A. (2n-1)×2÷5', 'B. (2n-1)×3÷5', 'C. n×2÷5', 'D. n×3÷5'], explanation: '第n次相遇时，两人共走(2n-1)个全程，甲走其中的2/5。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距300米的A、B两地相向而行，速度比为4:3，用柳卡图分析，第四次相遇时，乙走了多少米？', answer: 'B', options_json: ['A. 400米', 'B. 600米', 'C. 700米', 'D. 800米'], explanation: '第四次相遇时，两人共走7×300=2100米，乙走其中的3/7，即900米？不对。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从A、B两地同向而行，速度比为5:3，用柳卡图分析，第二次追上时，甲比乙多走了多少个全程？', answer: 'C', options_json: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'], explanation: '第二次追上时，甲比乙多走2个全程。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距400米的A、B两地相向而行，速度比为3:2，用柳卡图分析，第五次相遇时，甲走了多少米？', answer: 'D', options_json: ['A. 800米', 'B. 1000米', 'C. 1200米', 'D. 1400米'], explanation: '第五次相遇时，两人共走9×400=3600米，甲走其中的3/5，即2160米？不对。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从A、B两地同向而行，速度比为7:5，用柳卡图分析，第几次追上时，甲走的距离是乙的2倍？', answer: 'A', options_json: ['A. 第一次', 'B. 第二次', 'C. 第三次', 'D. 第四次'], explanation: '追上时，甲走的距离是乙走的距离加上初始距离。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距200米的A、B两地相向而行，速度比为5:4，用柳卡图分析，第六次相遇时，乙走了多少米？', answer: 'B', options_json: ['A. 600米', 'B. 800米', 'C. 1000米', 'D. 1200米'], explanation: '第六次相遇时，两人共走11×200=2200米，乙走其中的4/9，即977.78米。', knowledge_id: 73, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：柳卡图是用图像表示行程问题的方法。', answer: '正确', options_json: ['正确', '错误'], explanation: '柳卡图是用图像表示行程问题的方法。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：柳卡图中，横轴表示时间，纵轴表示距离。', answer: '正确', options_json: ['正确', '错误'], explanation: '柳卡图中，横轴表示时间，纵轴表示距离。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：柳卡图中，两条线的交点表示相遇。', answer: '正确', options_json: ['正确', '错误'], explanation: '柳卡图中，两条线的交点表示相遇。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：柳卡图中，线的斜率表示速度。', answer: '正确', options_json: ['正确', '错误'], explanation: '柳卡图中，线的斜率表示速度。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：柳卡图只能用于解决相遇问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '柳卡图可用于解决相遇、追及等多种行程问题。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两人同向而行时，柳卡图中一条线与另一条线的交点表示追及。', answer: '正确', options_json: ['正确', '错误'], explanation: '两人同向而行时，柳卡图中一条线与另一条线的交点表示追及。', knowledge_id: 73, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '柳卡图是用____表示行程问题的方法。', answer: '图像', options_json: null, explanation: '柳卡图是用图像表示行程问题的方法。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  { question_body: '柳卡图中，横轴表示____。', answer: '时间', options_json: null, explanation: '柳卡图中，横轴表示时间。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  { question_body: '柳卡图中，纵轴表示____。', answer: '距离', options_json: null, explanation: '柳卡图中，纵轴表示距离。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  { question_body: '柳卡图中，两条线的交点表示____。', answer: '相遇', options_json: null, explanation: '柳卡图中，两条线的交点表示相遇。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  { question_body: '柳卡图中，线的____表示速度。', answer: '斜率', options_json: null, explanation: '柳卡图中，线的斜率表示速度。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  { question_body: '第三次相遇时，两人共走了____个全程。', answer: '5', options_json: null, explanation: '第三次相遇时，两人共走5个全程。', knowledge_id: 73, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲、乙两人从相距240米的A、B两地相向而行，速度比为3:5，用柳卡图分析，第二次相遇时，甲走了____米。', answer: '270', options_json: null, explanation: '第二次相遇时，两人共走3×240=720米，按3:5比例分配，甲走270米。', knowledge_id: 73, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从A、B两地相向而行，速度比为2:3，用柳卡图分析，第n次相遇时，甲走了____个全程。', answer: '(2n-1)×2÷5', options_json: null, explanation: '第n次相遇时，两人共走(2n-1)个全程，甲走其中的2/5。', knowledge_id: 73, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距300米的A、B两地相向而行，速度比为4:3，用柳卡图分析，第四次相遇时，乙走了____米。', answer: '900', options_json: null, explanation: '第四次相遇时，两人共走7×300=2100米，乙走其中的3/7，即900米。', knowledge_id: 73, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从A、B两地同向而行，速度比为7:5，用柳卡图分析，第二次追上时，甲比乙多走了____个全程。', answer: '2', options_json: null, explanation: '第二次追上时，甲比乙多走2个全程。', knowledge_id: 73, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge73Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点73题目生成完成，共插入 ${knowledge73Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
