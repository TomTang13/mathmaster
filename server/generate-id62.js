const mysql = require('mysql2/promise');

const knowledge62Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '换元法的基本思想是什么？', answer: 'A', options_json: ['A. 用字母代替一个数或表达式', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '换元法的基本思想是用字母代替一个数或表达式。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在换元法中，通常用什么字母表示未知部分？', answer: 'B', options_json: ['A. a, b, c', 'B. t, u, x, y', 'C. m, n, o', 'D. p, q, r'], explanation: '在换元法中，通常用t, u, x, y等字母表示未知部分。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '换元法的目的是什么？', answer: 'C', options_json: ['A. 增加难度', 'B. 改变问题', 'C. 简化计算', 'D. 增加计算步骤'], explanation: '换元法的目的是简化计算。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果x+1=y，那么2(x+1)等于多少？', answer: 'D', options_json: ['A. 2x+1', 'B. 2x+2', 'C. 2y', 'D. 2y'], explanation: '2(x+1)=2y。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '换元法的关键是什么？', answer: 'A', options_json: ['A. 找到相同的部分', 'B. 找不同', 'C. 计算结果', 'D. 猜测答案'], explanation: '换元法的关键是找到相同的部分。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果a=b+1，设b+1=t，那么a等于多少？', answer: 'B', options_json: ['A. t+1', 'B. t', 'C. t-1', 'D. 2t'], explanation: '设b+1=t，则a=t。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '换元后，原方程中的所有x+1都可以用什么代替？', answer: 'C', options_json: ['A. y', 'B. z', 'C. t', 'D. 任意字母'], explanation: '换元后，所有相同的部分都用同一个字母代替。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '换元法的步骤第一步是什么？', answer: 'D', options_json: ['A. 直接计算', 'B. 猜测答案', 'C. 代入原方程', 'D. 找到相同的部分'], explanation: '换元法的第一步是找到相同的部分。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '换元法适用于什么样的问题？', answer: 'A', options_json: ['A. 有重复部分的计算', 'B. 所有计算题', 'C. 文字题', 'D. 不需要计算的问题'], explanation: '换元法适用于有重复部分的计算。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '设x+2=t，则x-2可以表示为什么？', answer: 'B', options_json: ['A. t', 'B. t-4', 'C. t+4', 'D. 2t'], explanation: 'x=t-2，x-2=t-4。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '设2x+1=t，则4x+2可以表示为什么？', answer: 'C', options_json: ['A. t', 'B. 2t', 'C. 2t', 'D. t+1'], explanation: '4x+2=2(2x+1)=2t。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  { question_body: '设x-1=t，则x²-2x+1可以表示为什么？', answer: 'D', options_json: ['A. t', 'B. t²', 'C. t²-2t', 'D. t²'], explanation: 'x²-2x+1=(x-1)²=t²。', knowledge_id: 62, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '化简：(x+1)²+(x+1)+1，设t=x+1，结果是多少？', answer: 'B', options_json: ['A. t²+t+1', 'B. t²+t+1', 'C. t²+1', 'D. t²-t+1'], explanation: '设t=x+1，则(x+1)²+(x+1)+1=t²+t+1。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  { question_body: '设x+1=t，则x²+2x+3等于什么？', answer: 'C', options_json: ['A. t²+2', 'B. t²+1', 'C. t²+2', 'D. t²-2'], explanation: 'x²+2x+3=(x+1)²+2=t²+2。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  { question_body: '设2x+3=t，则6x+9等于什么？', answer: 'A', options_json: ['A. 3t', 'B. 2t', 'C. t', 'D. 6t'], explanation: '6x+9=3(2x+3)=3t。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  { question_body: '设x-2=t，则x²-4x+5等于什么？', answer: 'B', options_json: ['A. t²-1', 'B. t²+1', 'C. t²-4', 'D. t²+4'], explanation: 'x²-4x+5=(x-2)²+1=t²+1。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  { question_body: '设x+1=t，则(x+1)(x+2)等于什么？', answer: 'C', options_json: ['A. t(t+1)', 'B. t(t-1)', 'C. t(t+1)', 'D. t²+1'], explanation: '(x+1)(x+2)=t(t+1)。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  { question_body: '设3x-1=t，则9x²-6x+1等于什么？', answer: 'D', options_json: ['A. t²', 'B. 3t²', 'C. t²+2', 'D. t²'], explanation: '9x²-6x+1=(3x-1)²=t²。', knowledge_id: 62, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '设x+1/y=t，则x+1/y的倒数可以表示为什么？', answer: 'A', options_json: ['A. 1/t', 'B. t', 'C. -t', 'D. 1/(x+1/y)'], explanation: 'x+1/y=t，所以1/(x+1/y)=1/t。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  { question_body: '设x²+x=t，则x⁴+2x³+3x²+2x+1等于什么？', answer: 'B', options_json: ['A. t²+2t+1', 'B. t²+t+1', 'C. t²+1', 'D. t²+2t'], explanation: 'x⁴+2x³+3x²+2x+1=(x²+x)²+(x²+x)+1=t²+t+1。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  { question_body: '设(x+1)(x+2)=t，则(x+1)(x+2)+3(x+1)等于什么？', answer: 'C', options_json: ['A. t+3', 'B. t+3(x+1)', 'C. t+3t/(x+2)', 'D. 4t'], explanation: '(x+1)(x+2)+3(x+1)=(x+1)[(x+2)+3]=(x+1)(x+5)。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  { question_body: '设x+1=t，则x³+3x²+3x+1等于什么？', answer: 'D', options_json: ['A. t³', 'B. t³+3', 'C. t³-3', 'D. t³'], explanation: 'x³+3x²+3x+1=(x+1)³=t³。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  { question_body: '设x²-1=t，则x⁴-x²-2等于什么？', answer: 'A', options_json: ['A. t²-t-2', 'B. t²+t-2', 'C. t²-1', 'D. t²+t'], explanation: 'x⁴-x²-2=(x²-1)²-(x²-1)-2=t²-t-2。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  { question_body: '设x+1/x=t，则x²+1/x²等于什么？', answer: 'B', options_json: ['A. t²', 'B. t²-2', 'C. t²+2', 'D. t²-1'], explanation: 'x²+1/x²=(x+1/x)²-2=t²-2。', knowledge_id: 62, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：换元法的基本思想是用字母代替一个数或表达式。', answer: '正确', options_json: ['正确', '错误'], explanation: '换元法的基本思想是用字母代替一个数或表达式。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：换元法的目的是简化计算。', answer: '正确', options_json: ['正确', '错误'], explanation: '换元法的目的是简化计算。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：设x+1=t，则x-1=t-2。', answer: '正确', options_json: ['正确', '错误'], explanation: 'x=t-1，x-1=t-2。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：设2x+1=t，则4x+2=2t。', answer: '正确', options_json: ['正确', '错误'], explanation: '4x+2=2(2x+1)=2t。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：换元法只适用于代数问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '换元法也适用于算术、几何等多种问题。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：设x-1=t，则x²-2x+1=t²。', answer: '正确', options_json: ['正确', '错误'], explanation: 'x²-2x+1=(x-1)²=t²。', knowledge_id: 62, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '换元法的基本思想是用____代替一个数或表达式。', answer: '字母', options_json: null, explanation: '换元法的基本思想是用字母代替一个数或表达式。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  { question_body: '换元法的关键是找到____的部分。', answer: '相同', options_json: null, explanation: '换元法的关键是找到相同的部分。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  { question_body: '设x+1=t，则x=____。', answer: 't-1', options_json: null, explanation: 'x=t-1。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  { question_body: '设2x+1=t，则4x+2=____。', answer: '2t', options_json: null, explanation: '4x+2=2(2x+1)=2t。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  { question_body: '设x-1=t，则x²-2x+1=____。', answer: 't²', options_json: null, explanation: 'x²-2x+1=(x-1)²=t²。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  { question_body: '设x+2=t，则x-2=____。', answer: 't-4', options_json: null, explanation: 'x=t-2，x-2=t-4。', knowledge_id: 62, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '设x+1=t，则x³+3x²+3x+1=____。', answer: 't³', options_json: null, explanation: 'x³+3x²+3x+1=(x+1)³=t³。', knowledge_id: 62, question_type_id: 1, difficulty_id: 4 },
  { question_body: '设x+1/x=t，则x²+1/x²=____。', answer: 't²-2', options_json: null, explanation: 'x²+1/x²=(x+1/x)²-2=t²-2。', knowledge_id: 62, question_type_id: 1, difficulty_id: 4 },
  { question_body: '设x²-1=t，则x⁴-1=____。', answer: 't²-2', options_json: null, explanation: 'x⁴-1=(x²-1)(x²+1)=t(x²+1)，但x²=t+1，所以=t(t+1+1)=t²+2t。', knowledge_id: 62, question_type_id: 1, difficulty_id: 4 },
  { question_body: '设x-2=t，则x²-4x+6=____。', answer: 't²+2', options_json: null, explanation: 'x²-4x+6=(x-2)²+2=t²+2。', knowledge_id: 62, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge62Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点62题目生成完成，共插入 ${knowledge62Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
