const mysql = require('mysql2/promise');

const knowledge27Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '下列图形中，哪个是一笔画图形？', answer: 'A', options_json: ['A. 三角形', 'B. 四边形', 'C. 五边形', 'D. 六边形'], explanation: '三角形是连通图，且所有顶点都是偶点，所以可以一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一笔画图形的必要条件是？', answer: 'B', options_json: ['A. 所有顶点都是偶点', 'B. 连通且奇点数为0或2', 'C. 图形是凸的', 'D. 图形是简单多边形'], explanation: '一笔画的必要条件是图形连通且奇点数为0或2。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个连通图有2个奇点，它是？', answer: 'C', options_json: ['A. 不能一笔画', 'B. 可以一笔画但需要起点和终点相同', 'C. 可以一笔画且起点和终点不同', 'D. 无法确定'], explanation: '有2个奇点的连通图可以一笔画，且必须从一个奇点开始，另一个奇点结束。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个连通图有4个奇点，它是？', answer: 'A', options_json: ['A. 不能一笔画', 'B. 可以一笔画', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '奇点数量必须是0或2才能一笔画，4个奇点需要两笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方形有多少个奇点？', answer: 'A', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 4'], explanation: '正方形的每个顶点都是偶点，所以奇点数为0。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '“日”字图形有多少个奇点？', answer: 'C', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 4'], explanation: '“日”字图形有2个奇点，所以可以一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '“田”字图形有多少个奇点？', answer: 'D', options_json: ['A. 0', 'B. 2', 'C. 3', 'D. 4'], explanation: '“田”字图形有4个奇点，所以需要两笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列哪个图形可以一笔画？', answer: 'B', options_json: ['A. 田字', 'B. 日字', 'C. 回字', 'D. 井字'], explanation: '“日”字有2个奇点，可以一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一笔画的起点和终点相同的条件是？', answer: 'A', options_json: ['A. 所有顶点都是偶点', 'B. 有2个奇点', 'C. 有4个奇点', 'D. 图形是连通的'], explanation: '当所有顶点都是偶点时，起点和终点相同。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个连通图有6个奇点，需要几笔画？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 6'], explanation: '奇点数除以2等于需要的笔画数，6÷2=3。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '下列关于一笔画的说法正确的是？', answer: 'C', options_json: ['A. 所有图形都可以一笔画', 'B. 只有三角形可以一笔画', 'C. 连通且奇点数为0或2的图形可以一笔画', 'D. 所有多边形都可以一笔画'], explanation: '一笔画的条件是连通且奇点数为0或2。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个连通图有1个奇点，这种情况？', answer: 'A', options_json: ['A. 不可能存在', 'B. 可以一笔画', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '一个连通图的奇点数必须是偶数，所以不可能有1个奇点。', knowledge_id: 27, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '下图是一个连通图，顶点A、B、C、D的度数分别为3、2、2、3，请问它可以一笔画吗？', answer: 'B', options_json: ['A. 不能', 'B. 可以', 'C. 需要两笔画', 'D. 无法确定'], explanation: '奇点数为2（A和D），所以可以一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个连通图有8个奇点，需要几笔画？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 8'], explanation: '奇点数除以2等于需要的笔画数，8÷2=4。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  { question_body: '下列图形中，哪个需要三笔画？', answer: 'D', options_json: ['A. 日字', 'B. 田字', 'C. 回字', 'D. 有6个奇点的连通图'], explanation: '6个奇点需要3笔画（6÷2=3）。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个连通图有10个奇点，需要几笔画？', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 10'], explanation: '奇点数除以2等于需要的笔画数，10÷2=5。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  { question_body: '下列关于一笔画的说法错误的是？', answer: 'D', options_json: ['A. 连通图是一笔画的必要条件', 'B. 奇点数为0的图形可以一笔画', 'C. 奇点数为2的图形可以一笔画', 'D. 奇点数为4的图形可以一笔画'], explanation: '奇点数为4的图形需要两笔画，不能一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个连通图有3个奇点，这种情况？', answer: 'A', options_json: ['A. 不可能存在', 'B. 可以一笔画', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '一个连通图的奇点数必须是偶数，所以不可能有3个奇点。', knowledge_id: 27, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '下图是一个连通图，顶点度数分别为2、2、3、3、4，请问它可以一笔画吗？', answer: 'B', options_json: ['A. 不能', 'B. 可以', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '奇点数为2（两个度数为3的顶点），所以可以一笔画。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个连通图有12个奇点，需要几笔画？', answer: 'D', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 6'], explanation: '奇点数除以2等于需要的笔画数，12÷2=6。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  { question_body: '下列图形中，哪个需要四笔画？', answer: 'C', options_json: ['A. 有4个奇点的连通图', 'B. 有6个奇点的连通图', 'C. 有8个奇点的连通图', 'D. 有10个奇点的连通图'], explanation: '8个奇点需要4笔画（8÷2=4）。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个连通图有5个顶点，每个顶点的度数都是3，请问它可以一笔画吗？', answer: 'A', options_json: ['A. 不能', 'B. 可以', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '5个顶点每个度数为3，总奇点数为5，这不可能，因为奇点数必须是偶数。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  { question_body: '下列关于一笔画的说法正确的是？', answer: 'B', options_json: ['A. 所有连通图都可以一笔画', 'B. 奇点数为0的连通图可以一笔画且起点终点相同', 'C. 奇点数为2的连通图可以一笔画且起点终点相同', 'D. 奇点数为4的连通图可以一笔画'], explanation: '奇点数为0的连通图可以一笔画，且起点和终点相同。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个连通图有7个顶点，其中3个顶点度数为3，4个顶点度数为2，请问它可以一笔画吗？', answer: 'A', options_json: ['A. 不能', 'B. 可以', 'C. 需要两笔画', 'D. 需要三笔画'], explanation: '奇点数为3，这不可能，因为奇点数必须是偶数。', knowledge_id: 27, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：所有连通图都可以一笔画。', answer: '错误', options_json: ['正确', '错误'], explanation: '只有奇点数为0或2的连通图可以一笔画。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：奇点数为0的连通图可以一笔画，且起点和终点相同。', answer: '正确', options_json: ['正确', '错误'], explanation: '奇点数为0的连通图可以一笔画，且起点和终点相同。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：奇点数为2的连通图可以一笔画，且起点和终点不同。', answer: '正确', options_json: ['正确', '错误'], explanation: '奇点数为2的连通图可以一笔画，且必须从一个奇点开始，另一个奇点结束。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：“田”字图形可以一笔画。', answer: '错误', options_json: ['正确', '错误'], explanation: '“田”字图形有4个奇点，需要两笔画。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个连通图的奇点数必须是偶数。', answer: '正确', options_json: ['正确', '错误'], explanation: '所有图的奇点数之和一定是偶数，所以连通图的奇点数也必须是偶数。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：奇点数为4的连通图需要两笔画。', answer: '正确', options_json: ['正确', '错误'], explanation: '奇点数除以2等于需要的笔画数，4÷2=2。', knowledge_id: 27, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '一笔画图形的必要条件是：图形____且奇点数为0或2。', answer: '连通', options_json: null, explanation: '一笔画的必要条件是图形连通且奇点数为0或2。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  { question_body: '“日”字图形有____个奇点。', answer: '2', options_json: null, explanation: '“日”字图形有2个奇点。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  { question_body: '“田”字图形有____个奇点。', answer: '4', options_json: null, explanation: '“田”字图形有4个奇点。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个连通图有6个奇点，需要____笔画。', answer: '3', options_json: null, explanation: '奇点数除以2等于需要的笔画数，6÷2=3。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正方形有____个奇点。', answer: '0', options_json: null, explanation: '正方形的每个顶点都是偶点，所以奇点数为0。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个连通图有8个奇点，需要____笔画。', answer: '4', options_json: null, explanation: '奇点数除以2等于需要的笔画数，8÷2=4。', knowledge_id: 27, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个连通图有10个奇点，需要____笔画。', answer: '5', options_json: null, explanation: '奇点数除以2等于需要的笔画数，10÷2=5。', knowledge_id: 27, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个连通图有12个奇点，需要____笔画。', answer: '6', options_json: null, explanation: '奇点数除以2等于需要的笔画数，12÷2=6。', knowledge_id: 27, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个连通图有14个奇点，需要____笔画。', answer: '7', options_json: null, explanation: '奇点数除以2等于需要的笔画数，14÷2=7。', knowledge_id: 27, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个连通图有16个奇点，需要____笔画。', answer: '8', options_json: null, explanation: '奇点数除以2等于需要的笔画数，16÷2=8。', knowledge_id: 27, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge27Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点27题目生成完成，共插入 ${knowledge27Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
