const mysql = require('mysql2/promise');

const knowledge46Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '三视图是指哪三个视图？', answer: 'A', options_json: ['A. 主视图、左视图、俯视图', 'B. 前视图、后视图、侧视图', 'C. 正视图、左视图、右视图', 'D. 上视图、下视图、中视图'], explanation: '三视图是指主视图（正视图）、左视图和俯视图。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '俯视图反映的是物体的什么？', answer: 'B', options_json: ['A. 长度和高度', 'B. 长度和宽度', 'C. 宽度和高度', 'D. 长度、宽度和高度'], explanation: '俯视图反映的是物体的长度和宽度。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '主视图反映的是物体的什么？', answer: 'C', options_json: ['A. 长度和宽度', 'B. 宽度和高度', 'C. 长度和高度', 'D. 长度、宽度和高度'], explanation: '主视图反映的是物体的长度和高度。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '左视图反映的是物体的什么？', answer: 'A', options_json: ['A. 宽度和高度', 'B. 长度和宽度', 'C. 长度和高度', 'D. 长度、宽度和高度'], explanation: '左视图反映的是物体的宽度和高度。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用三视图求小方块个数时，每个视图中的每个格子代表什么？', answer: 'B', options_json: ['A. 一个面', 'B. 一列小方块', 'C. 一个点', 'D. 一个棱'], explanation: '每个视图中的每个格子代表该位置有一列小方块。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '三视图求小方块个数的原理是？', answer: 'A', options_json: ['A. 每个视图的格子数综合确定小方块的位置和数量', 'B. 三个视图的格子数相加', 'C. 三个视图的格子数相乘', 'D. 三个视图的格子数相减'], explanation: '三视图求小方块个数的原理是综合三个视图确定每个位置小方块的存在。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '三视图中的"主视图"又可以叫做？', answer: 'C', options_json: ['A. 俯视图', 'B. 左视图', 'C. 正视图', 'D. 右视图'], explanation: '主视图又叫做正视图。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '三视图通常用于什么场合？', answer: 'B', options_json: ['A. 测量长度', 'B. 确定立体图形中小方块的个数', 'C. 计算面积', 'D. 计算体积'], explanation: '三视图通常用于确定立体图形中小方块的个数。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果一个视图的某个位置有格子，表示什么？', answer: 'A', options_json: ['A. 该位置至少有一个小方块', 'B. 该位置没有小方块', 'C. 该位置有两个小方块', 'D. 无法确定'], explanation: '如果一个视图的某个位置有格子，表示该位置至少有一个小方块。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '三视图之间的关系是？', answer: 'B', options_json: ['A. 相互独立', 'B. 相互关联，共同确定立体结构', 'C. 完全相同', 'D. 没有任何关系'], explanation: '三视图相互关联，共同确定立体结构。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '俯视图的观察方向是？', answer: 'A', options_json: ['A. 从上往下看', 'B. 从下往上看', 'C. 从前往后看', 'D. 从左往右看'], explanation: '俯视图是从上往下看的视图。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  { question_body: '主视图的观察方向是？', answer: 'C', options_json: ['A. 从上往下看', 'B. 从侧面看', 'C. 从正面看', 'D. 从后面看'], explanation: '主视图（正视图）是从正面看的视图。', knowledge_id: 46, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '已知三视图，主视图每个位置的高度分别是2、3、1，俯视图的格子数是6，左视图的格子数是5，估计小方块个数的范围是？', answer: 'B', options_json: ['A. 6-10', 'B. 6-15', 'C. 5-10', 'D. 5-15'], explanation: '根据三视图，小方块个数取决于三个视图的综合，最少是俯视图的格子数6个，最多是主视图和左视图确定的总数。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果俯视图是2×2的格子，每个位置都有小方块，主视图显示的高度都是1，那么小方块总数是多少？', answer: 'C', options_json: ['A. 2', 'B. 4', 'C. 4', 'D. 8'], explanation: '俯视图2×2=4个格子，每个格子都有小方块，高度都是1，所以总共有4个小方块。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  { question_body: '三视图求小方块个数时，需要综合考虑几个视图？', answer: 'A', options_json: ['A. 3个', 'B. 2个', 'C. 1个', 'D. 4个'], explanation: '三视图求小方块个数时需要综合考虑3个视图。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果俯视图显示某个位置有格子，但主视图显示同一位置没有格子，结论是？', answer: 'B', options_json: ['A. 该位置有小方块', 'B. 该位置没有小方块', 'C. 无法确定', 'D. 需要更多视图确认'], explanation: '三个视图必须一致，如果俯视图有格子但主视图没有，则该位置实际上没有小方块。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  { question_body: '俯视图是3×2的格子，主视图是3列，高度分别为2、1、2，左视图是2列，高度分别为2、2，那么小方块总数最少是多少？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 8', 'D. 12'], explanation: '根据综合分析，小方块总数最少是俯视图的格子数6个，但需要满足主视图和左视图的高度约束。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  { question_body: '如果俯视图是2×3的格子，每个位置都有小方块，主视图显示高度分别为1、2、1，左视图显示高度分别为2、1，那么小方块总数是多少？', answer: 'D', options_json: ['A. 6', 'B. 8', 'C. 10', 'D. 12'], explanation: '俯视图2×3=6个格子，根据主视图和左视图的高度约束，每个格子都需要满足，综合分析后总共有12个小方块。', knowledge_id: 46, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '俯视图是3×3的格子，其中5个格子有方块，主视图高度分别为1、2、3，左视图高度分别为2、1、1，符合条件的小方块总数最少是多少？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '根据三个视图的综合分析，最少的小方块个数是5个（俯视图的5个格子），但需要满足主视图和左视图的高度约束。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  { question_body: '俯视图是2×2的格子，每个格子都有。主视图：第一列高度2，第二列高度1。左视图：第一列高度1，第二列高度2。小方块总数是多少？', answer: 'B', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], explanation: '综合分析：(1,1)位置高度至少2，(1,2)位置高度至少1，(2,1)位置高度至少1，(2,2)位置高度至少2，总数=2+1+1+2=6。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  { question_body: '俯视图是3×2的格子，5个格子有方块。主视图三列高度分别为2、1、2。左视图两列高度分别为1、2。小方块总数最少是多少？', answer: 'C', options_json: ['A. 5', 'B. 7', 'C. 7', 'D. 8'], explanation: '根据主视图和左视图的高度约束，综合分析后小方块总数最少是7个。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  { question_body: '俯视图是2×3的格子，每个格子都有。主视图三列高度分别为1、2、3。左视图两列高度分别为2、3。小方块总数是多少？', answer: 'D', options_json: ['A. 6', 'B. 9', 'C. 12', 'D. 12'], explanation: '综合分析每个位置的高度并求和：(1,1)=1,(1,2)=2,(1,3)=3,(2,1)=2,(2,2)=3,(2,3)=3，总数=1+2+3+2+3+3=14。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  { question_body: '俯视图是3×3的格子，7个格子有方块。主视图三列高度分别为1、2、1。左视图三列高度分别为2、1、2。小方块总数最少是多少？', answer: 'B', options_json: ['A. 7', 'B. 9', 'C. 10', 'D. 11'], explanation: '根据三个视图的综合分析，满足所有约束的小方块总数最少是9个。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  { question_body: '俯视图是2×2的格子，每个格子都有。主视图两列高度分别为3、2。左视图两列高度分别为2、3。小方块总数是多少？', answer: 'C', options_json: ['A. 8', 'B. 10', 'C. 10', 'D. 12'], explanation: '综合分析：(1,1)位置高度至少3，(1,2)位置高度至少2，(2,1)位置高度至少2，(2,2)位置高度至少3，总数=3+2+2+3=10。', knowledge_id: 46, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：三视图是指主视图、左视图和俯视图。', answer: '正确', options_json: ['正确', '错误'], explanation: '三视图是指主视图（正视图）、左视图和俯视图。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：俯视图反映的是物体的长度和宽度。', answer: '正确', options_json: ['正确', '错误'], explanation: '俯视图反映的是物体的长度和宽度。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：主视图反映的是物体的长度和宽度。', answer: '错误', options_json: ['正确', '错误'], explanation: '主视图反映的是物体的长度和高度，不是长度和宽度。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：左视图反映的是物体的宽度和高度。', answer: '正确', options_json: ['正确', '错误'], explanation: '左视图反映的是物体的宽度和高度。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：三视图中的每个格子代表一列小方块。', answer: '正确', options_json: ['正确', '错误'], explanation: '三视图中的每个格子代表该位置有一列小方块。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：俯视图是从上往下看的视图。', answer: '正确', options_json: ['正确', '错误'], explanation: '俯视图是从上往下看的视图。', knowledge_id: 46, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '三视图是指____视图、左视图和俯视图。', answer: '主', options_json: null, explanation: '三视图是指主视图、左视图和俯视图。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  { question_body: '俯视图反映的是物体的长度和____。', answer: '宽度', options_json: null, explanation: '俯视图反映的是物体的长度和宽度。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  { question_body: '主视图反映的是物体的长度和____。', answer: '高度', options_json: null, explanation: '主视图反映的是物体的长度和高度。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  { question_body: '左视图反映的是物体的宽度和____。', answer: '高度', options_json: null, explanation: '左视图反映的是物体的宽度和高度。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  { question_body: '三视图中的每个格子代表一____小方块。', answer: '列', options_json: null, explanation: '三视图中的每个格子代表该位置有一列小方块。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  { question_body: '俯视图的观察方向是从____往下看。', answer: '上', options_json: null, explanation: '俯视图是从上往下看的视图。', knowledge_id: 46, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '俯视图是2×2的格子，每个格子都有小方块，主视图两列高度分别为2、1，左视图两列高度分别为1、2，小方块总数是____。', answer: '6', options_json: null, explanation: '综合分析：(1,1)至少2，(1,2)至少1，(2,1)至少1，(2,2)至少2，总数=2+1+1+2=6。', knowledge_id: 46, question_type_id: 1, difficulty_id: 4 },
  { question_body: '俯视图是2×3的格子，每个格子都有小方块，主视图三列高度分别为1、2、3，左视图两列高度分别为2、3，小方块总数是____。', answer: '14', options_json: null, explanation: '综合分析：(1,1)=1,(1,2)=2,(1,3)=3,(2,1)=2,(2,2)=3,(2,3)=3，总数=1+2+3+2+3+3=14。', knowledge_id: 46, question_type_id: 1, difficulty_id: 4 },
  { question_body: '俯视图是3×3的格子，7个格子有方块。主视图三列高度分别为1、2、1。左视图三列高度分别为2、1、2。小方块总数最少是____。', answer: '9', options_json: null, explanation: '根据三个视图的综合分析，满足所有约束的小方块总数最少是9个。', knowledge_id: 46, question_type_id: 1, difficulty_id: 4 },
  { question_body: '俯视图是2×2的格子，每个格子都有小方块。主视图两列高度分别为3、2。左视图两列高度分别为2、3。小方块总数是____。', answer: '10', options_json: null, explanation: '综合分析：(1,1)至少3，(1,2)至少2，(2,1)至少2，(2,2)至少3，总数=3+2+2+3=10。', knowledge_id: 46, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge46Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点46题目生成完成，共插入 ${knowledge46Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
