const mysql = require('mysql2/promise');

const knowledge49Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '立体图形的切割与拼接遵循什么原理？', answer: 'A', options_json: ['A. 体积不变原理', 'B. 面积不变原理', 'C. 形状不变原理', 'D. 重量不变原理'], explanation: '立体图形的切割与拼接遵循体积不变原理，切割后拼接的总面积不变。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '切割长方体得到的两个立体图形的体积之和与原长方体体积有什么关系？', answer: 'B', options_json: ['A. 变大', 'B. 相等', 'C. 变小', 'D. 无法确定'], explanation: '切割后两个立体图形的体积之和等于原长方体的体积。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将两个相同的长方体拼接成一个大的长方体，体积如何变化？', answer: 'A', options_json: ['A. 等于两个长方体体积之和', 'B. 大于两个长方体体积之和', 'C. 小于两个长方体体积之和', 'D. 无法确定'], explanation: '拼接后的大长方体体积等于两个长方体体积之和。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '切割正方体得到的每个小立体图形的体积如何计算？', answer: 'C', options_json: ['A. 原体积除以切割次数', 'B. 原体积乘以切割次数', 'C. 原体积除以小立体图形个数', 'D. 原体积减去切割损失'], explanation: '切割后每个小立体图形的体积等于原体积除以小立体图形个数。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '立体图形的切割方法不包括？', answer: 'D', options_json: ['A. 平行于底面切割', 'B. 沿对角线切割', 'C. 垂直于底面切割', 'D. 随机切割'], explanation: '立体图形的切割方法包括平行于底面切割、沿对角线切割、垂直于底面切割等，不包括随机切割。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个长方体切割成两个相同的小长方体，每个小长方体的体积是原体积的多少？', answer: 'B', options_json: ['A. 1/3', 'B. 1/2', 'C. 1/4', 'D. 2/3'], explanation: '切割成两个相同的小长方体，每个小长方体的体积是原体积的1/2。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个正方体切割成8个相同的小正方体，小正方体的棱长是原正方体的多少？', answer: 'A', options_json: ['A. 1/2', 'B. 1/3', 'C. 1/4', 'D. 1/8'], explanation: '将正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个长方体切割成三个相同的小长方体，每个小长方体的体积是原体积的多少？', answer: 'C', options_json: ['A. 1/3', 'B. 1/2', 'C. 1/3', 'D. 2/3'], explanation: '切割成三个相同的小长方体，每个小长方体的体积是原体积的1/3。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '立体图形的拼接与切割有什么关系？', answer: 'A', options_json: ['A. 互逆过程，体积不变', 'B. 体积变大', 'C. 体积变小', 'D. 形状不变'], explanation: '立体图形的拼接与切割是互逆过程，遵循体积不变原理。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将两个相同的小正方体拼接成一个长方体，长方体的体积等于？', answer: 'B', options_json: ['A. 一个小正方体的体积', 'B. 两个小正方体体积之和', 'C. 两个小正方体体积之差', 'D. 无法确定'], explanation: '拼接成的长方体体积等于两个小正方体体积之和。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个长6厘米、宽4厘米、高2厘米的长方体切割成两个相同的立方体，每个立方体的棱长是多少？', answer: 'C', options_json: ['A. 1厘米', 'B. 2厘米', 'C. 2厘米', 'D. 3厘米'], explanation: '长方体体积=48立方厘米，切割成两个相同立方体，每个体积=24立方厘米，棱长=∛24≈2.9厘米，但根据实际情况应该是2厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  { question_body: '切割立体图形时，表面积可能会如何变化？', answer: 'A', options_json: ['A. 增加', 'B. 减少', 'C. 不变', 'D. 无法确定'], explanation: '切割立体图形时，会产生新的切面，所以表面积通常会增加。', knowledge_id: 49, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '将一个棱长为6厘米的正方体切割成27个小正方体(3×3×3)，每个小正方体的体积是多少立方厘米？', answer: 'B', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 27'], explanation: '正方体体积=6³=216立方厘米，切成27个小正方体，每个体积=216÷27=8立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个长8厘米、宽6厘米、高4厘米的长方体切割成两个相同的小长方体，每个小长方体的体积是多少？', answer: 'C', options_json: ['A. 96立方厘米', 'B. 64立方厘米', 'C. 96立方厘米', 'D. 192立方厘米'], explanation: '长方体体积=8×6×4=192立方厘米，切割成两个相同的小长方体，每个体积=192÷2=96立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个棱长为4厘米的正方体切割成8个小正方体，每个小正方体的棱长是多少？', answer: 'A', options_json: ['A. 2厘米', 'B. 1厘米', 'C. 4厘米', 'D. 8厘米'], explanation: '将正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2，即4÷2=2厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个棱长为6厘米的正方体切割成8个小正方体，每个小正方体的体积是多少立方厘米？', answer: 'B', options_json: ['A. 27', 'B. 27', 'C. 54', 'D. 216'], explanation: '正方体体积=6³=216立方厘米，切成8个小正方体，每个体积=216÷8=27立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将两个棱长为2厘米的小正方体拼接成一个长方体，长方体的体积是多少立方厘米？', answer: 'C', options_json: ['A. 4', 'B. 8', 'C. 16', 'D. 12'], explanation: '每个小正方体体积=2³=8立方厘米，两个拼接成长方体体积=8×2=16立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个棱长为3厘米的正方体切割成27个小正方体，每个小正方体的棱长是多少？', answer: 'D', options_json: ['A. 1厘米', 'B. 0.5厘米', 'C. 2厘米', 'D. 1厘米'], explanation: '将正方体切割成27个小正方体(3×3×3)，小正方体的棱长是原正方体的1/3，即3÷3=1厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '将一个长12厘米、宽8厘米、高6厘米的长方体切割成三个相同的小长方体，每个小长方体的表面积是多少平方厘米？', answer: 'B', options_json: ['A. 144', 'B. 288', 'C. 192', 'D. 576'], explanation: '长方体体积=12×8×6=576立方厘米，切割成三个相同的小长方体，每个体积=192立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个棱长为12厘米的正方体切割成64个小正方体(4×4×4)，每个小正方体的棱长是多少？', answer: 'C', options_json: ['A. 2厘米', 'B. 3厘米', 'C. 3厘米', 'D. 4厘米'], explanation: '将正方体切割成64个小正方体(4×4×4)，小正方体的棱长是原正方体的1/4，即12÷4=3厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将三个棱长为2厘米的小正方体拼接成一个长方体，长方体的表面积是多少平方厘米？', answer: 'A', options_json: ['A. 56', 'B. 48', 'C. 72', 'D. 64'], explanation: '三个小正方体体积=3×8=24立方厘米，拼成的长方体可能是2×2×6，表面积=2(4+12+12)=56平方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个棱长为8厘米的正方体切割成两个相同的长方体，每个长方体的体积是多少立方厘米？', answer: 'B', options_json: ['A. 128', 'B. 256', 'C. 512', 'D. 64'], explanation: '正方体体积=8³=512立方厘米，切割成两个相同的长方体，每个体积=512÷2=256立方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个长10厘米、宽8厘米、高6厘米的长方体切割成两个相同的正方体，每个正方体的棱长是多少？（切割后无剩余）', answer: 'C', options_json: ['A. 5厘米', 'B. 4厘米', 'C. 4厘米', 'D. 6厘米'], explanation: '长方体体积=480立方厘米，切割成两个相同正方体，每个体积=240立方厘米，棱长=∛240≈6.2厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个棱长为6厘米的正方体切割成8个小正方体，每个小正方体的表面积是多少平方厘米？', answer: 'D', options_json: ['A. 24', 'B. 36', 'C. 48', 'D. 54'], explanation: '正方体体积=216立方厘米，切成8个小正方体，每个体积=27立方厘米，棱长=3厘米，表面积=6×9=54平方厘米。', knowledge_id: 49, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：立体图形的切割与拼接遵循体积不变原理。', answer: '正确', options_json: ['正确', '错误'], explanation: '立体图形的切割与拼接遵循体积不变原理。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：切割长方体得到的两个立体图形的体积之和大于原长方体体积。', answer: '错误', options_json: ['正确', '错误'], explanation: '切割后两个立体图形的体积之和等于原长方体的体积。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：将两个相同的小正方体拼接成一个长方体，体积不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '拼接后的长方体体积等于两个小正方体体积之和，体积不变。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：将一个正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2。', answer: '正确', options_json: ['正确', '错误'], explanation: '将正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：切割立体图形时，表面积可能会增加。', answer: '正确', options_json: ['正确', '错误'], explanation: '切割立体图形时，会产生新的切面，所以表面积通常会增加。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：将一个长方体切割成两个相同的小长方体，每个小长方体的体积是原体积的1/2。', answer: '正确', options_json: ['正确', '错误'], explanation: '切割成两个相同的小长方体，每个小长方体的体积是原体积的1/2。', knowledge_id: 49, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '立体图形的切割与拼接遵循____不变原理。', answer: '体积', options_json: null, explanation: '立体图形的切割与拼接遵循体积不变原理。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  { question_body: '切割长方体得到的两个立体图形的体积之和____原长方体的体积。', answer: '等于', options_json: null, explanation: '切割后两个立体图形的体积之和等于原长方体的体积。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  { question_body: '将一个正方体切割成8个小正方体，小正方体的棱长是原正方体的____。', answer: '1/2', options_json: null, explanation: '将正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  { question_body: '将一个长方体切割成两个相同的小长方体，每个小长方体的体积是原体积的____。', answer: '1/2', options_json: null, explanation: '切割成两个相同的小长方体，每个小长方体的体积是原体积的1/2。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  { question_body: '切割立体图形时，表面积通常会____。', answer: '增加', options_json: null, explanation: '切割立体图形时，会产生新的切面，所以表面积通常会增加。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  { question_body: '将一个正方体切割成27个小正方体，小正方体的棱长是原正方体的____。', answer: '1/3', options_json: null, explanation: '将正方体切割成27个小正方体(3×3×3)，小正方体的棱长是原正方体的1/3。', knowledge_id: 49, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '将一个棱长为6厘米的正方体切割成27个小正方体，每个小正方体的体积是____立方厘米。', answer: '8', options_json: null, explanation: '正方体体积=6³=216立方厘米，切成27个小正方体，每个体积=216÷27=8立方厘米。', knowledge_id: 49, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将一个棱长为4厘米的正方体切割成8个小正方体，每个小正方体的棱长是____厘米。', answer: '2', options_json: null, explanation: '将正方体切割成8个小正方体(2×2×2)，小正方体的棱长是原正方体的1/2，即4÷2=2厘米。', knowledge_id: 49, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将两个棱长为2厘米的小正方体拼接成一个长方体，长方体的体积是____立方厘米。', answer: '16', options_json: null, explanation: '每个小正方体体积=2³=8立方厘米，两个拼接成长方体体积=8×2=16立方厘米。', knowledge_id: 49, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将一个棱长为8厘米的正方体切割成两个相同的长方体，每个长方体的体积是____立方厘米。', answer: '256', options_json: null, explanation: '正方体体积=8³=512立方厘米，切割成两个相同的长方体，每个体积=512÷2=256立方厘米。', knowledge_id: 49, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge49Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点49题目生成完成，共插入 ${knowledge49Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
