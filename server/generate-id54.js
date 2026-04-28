const mysql = require('mysql2/promise');

const knowledge54Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '平均数的计算公式是？', answer: 'A', options_json: ['A. 平均数=总数量÷总份数', 'B. 平均数=总数量×总份数', 'C. 平均数=总数量-总份数', 'D. 平均数=总数量+总份数'], explanation: '平均数的计算公式是平均数=总数量÷总份数。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '总数量的计算公式是？', answer: 'B', options_json: ['A. 总数量=平均数÷总份数', 'B. 总数量=平均数×总份数', 'C. 总数量=平均数-总份数', 'D. 总数量=平均数+总份数'], explanation: '总数量的计算公式是总数量=平均数×总份数。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '总份数的计算公式是？', answer: 'C', options_json: ['A. 总份数=总数量×平均数', 'B. 总份数=总数量-平均数', 'C. 总份数=总数量÷平均数', 'D. 总份数=总数量+平均数'], explanation: '总份数的计算公式是总份数=总数量÷平均数。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '5个数的平均数是8，这5个数的总和是多少？', answer: 'A', options_json: ['A. 40', 'B. 35', 'C. 45', 'D. 30'], explanation: '总数量=平均数×总份数=8×5=40。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '6个数的总和是42，这6个数的平均数是多少？', answer: 'B', options_json: ['A. 6', 'B. 7', 'C. 8', 'D. 9'], explanation: '平均数=总数量÷总份数=42÷6=7。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一组数的平均数是10，总和是50，这组数有几个数？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 5', 'D. 6'], explanation: '总份数=总数量÷平均数=50÷10=5。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小明的考试成绩：语文90分，数学85分，英语95分，三科的平均分是多少？', answer: 'D', options_json: ['A. 88', 'B. 89', 'C. 90', 'D. 90'], explanation: '(90+85+95)÷3=270÷3=90分。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小红前3次数学测验的平均成绩是88分，第4次测验后，平均成绩变成90分，第4次测验她得了多少分？', answer: 'A', options_json: ['A. 96', 'B. 94', 'C. 92', 'D. 90'], explanation: '前3次总分=88×3=264分，4次总分=90×4=360分，第4次分数=360-264=96分。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平均数的意义是什么？', answer: 'B', options_json: ['A. 表示最大的数', 'B. 表示一组数据的平均水平', 'C. 表示最小的数', 'D. 表示中间的数'], explanation: '平均数表示一组数据的平均水平。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '5个连续自然数的平均数是10，这5个数中最大的数是多少？', answer: 'C', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '5个连续自然数的平均数是中间的数，所以中间数是10，最大的数是10+2=12。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平均数问题的基本类型不包括？', answer: 'D', options_json: ['A. 已知总数量和总份数求平均数', 'B. 已知平均数和总份数求总数量', 'C. 已知总数量和平均数求总份数', 'D. 已知最大值和最小值求平均数'], explanation: '平均数问题的基本类型包括已知总数量和总份数求平均数、已知平均数和总份数求总数量、已知总数量和平均数求总份数，不包括已知最大值和最小值求平均数。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  { question_body: '平均数问题的解决关键是？', answer: 'A', options_json: ['A. 找到总数量和总份数', 'B. 直接计算最大值', 'C. 直接计算最小值', 'D. 猜测答案'], explanation: '平均数问题的解决关键是找到总数量和总份数。', knowledge_id: 54, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '4个数的平均数是9，其中3个数分别是8、9、10，第四个数是多少？', answer: 'B', options_json: ['A. 7', 'B. 9', 'C. 10', 'D. 11'], explanation: '4个数总和=9×4=36，第四个数=36-(8+9+10)=36-27=9。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  { question_body: '5个同学的身高分别是135cm、140cm、145cm、150cm、155cm，他们的平均身高是多少？', answer: 'C', options_json: ['A. 140cm', 'B. 142cm', 'C. 145cm', 'D. 148cm'], explanation: '(135+140+145+150+155)÷5=725÷5=145cm。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小红前5次数学测验的平均成绩是85分，第6次测验后，平均成绩变成87分，第6次测验她得了多少分？', answer: 'A', options_json: ['A. 97', 'B. 95', 'C. 93', 'D. 91'], explanation: '前5次总分=85×5=425分，6次总分=87×6=522分，第6次分数=522-425=97分。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一组数的平均数是12，其中一个数是15，去掉这个数后，剩下的数的平均数是11，这组数原来有几个数？', answer: 'B', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '设原来有n个数，12n - 15 = 11(n-1)，12n - 15 = 11n - 11，n=4。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  { question_body: '8个同学的平均体重是35千克，其中3个同学的平均体重是32千克，另外5个同学的平均体重是多少？', answer: 'C', options_json: ['A. 36.8', 'B. 37.2', 'C. 36.8', 'D. 37.6'], explanation: '总重量=35×8=280千克，3个同学总重量=32×3=96千克，5个同学总重量=280-96=184千克，平均体重=184÷5=36.8千克。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  { question_body: '6个数的平均数是15，其中3个数的平均数是12，另外3个数的平均数是多少？', answer: 'D', options_json: ['A. 16', 'B. 17', 'C. 18', 'D. 18'], explanation: '总数量=15×6=90，3个数总和=12×3=36，另外3个数总和=90-36=54，平均数=54÷3=18。', knowledge_id: 54, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '10个同学的平均成绩是85分，其中前6个同学的平均成绩是88分，后4个同学的平均成绩是多少？', answer: 'A', options_json: ['A. 80.5', 'B. 81.5', 'C. 82.5', 'D. 83.5'], explanation: '总分数=85×10=850分，前6个总分数=88×6=528分，后4个总分数=850-528=322分，平均成绩=322÷4=80.5分。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一组数的平均数是14，加入一个数20后，平均数变成15，这组数原来有几个数？', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '设原来有n个数，14n + 20 = 15(n+1)，14n + 20 = 15n + 15，n=5。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  { question_body: '8个连续自然数的平均数是12.5，这8个数中最小的数是多少？', answer: 'C', options_json: ['A. 9', 'B. 10', 'C. 9', 'D. 11'], explanation: '8个连续自然数的平均数是中间两个数的平均值，中间两个数是12和13，所以最小的数是12-3=9。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  { question_body: '12个同学的平均身高是145cm，其中男生的平均身高是150cm，女生的平均身高是140cm，男生有多少人？', answer: 'D', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 6'], explanation: '设男生有x人，女生有12-x人，150x + 140(12-x) = 145×12，150x + 1680 - 140x = 1740，10x=60，x=6。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  { question_body: '5个数的平均数是18，把其中一个数改为25后，平均数变成20，被改的数原来是多少？', answer: 'A', options_json: ['A. 15', 'B. 16', 'C. 17', 'D. 18'], explanation: '原来总和=18×5=90，改后总和=20×5=100，增加了10，所以原数=25-10=15。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  { question_body: '15个同学的平均成绩是88分，其中前10个同学的平均成绩是90分，后5个同学的平均成绩是多少？', answer: 'B', options_json: ['A. 82', 'B. 84', 'C. 86', 'D. 88'], explanation: '总分数=88×15=1320分，前10个总分数=90×10=900分，后5个总分数=1320-900=420分，平均成绩=420÷5=84分。', knowledge_id: 54, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：平均数的计算公式是平均数=总数量÷总份数。', answer: '正确', options_json: ['正确', '错误'], explanation: '平均数的计算公式是平均数=总数量÷总份数。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：总数量=平均数×总份数。', answer: '正确', options_json: ['正确', '错误'], explanation: '总数量=平均数×总份数。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：总份数=总数量÷平均数。', answer: '正确', options_json: ['正确', '错误'], explanation: '总份数=总数量÷平均数。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平均数表示一组数据的平均水平。', answer: '正确', options_json: ['正确', '错误'], explanation: '平均数表示一组数据的平均水平。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：5个连续自然数的平均数是中间的数。', answer: '正确', options_json: ['正确', '错误'], explanation: '5个连续自然数的平均数是中间的数。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：平均数问题的解决关键是找到总数量和总份数。', answer: '正确', options_json: ['正确', '错误'], explanation: '平均数问题的解决关键是找到总数量和总份数。', knowledge_id: 54, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '平均数的计算公式是平均数=____÷总份数。', answer: '总数量', options_json: null, explanation: '平均数的计算公式是平均数=总数量÷总份数。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  { question_body: '总数量的计算公式是总数量=____×总份数。', answer: '平均数', options_json: null, explanation: '总数量的计算公式是总数量=平均数×总份数。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  { question_body: '总份数的计算公式是总份数=总数量÷____。', answer: '平均数', options_json: null, explanation: '总份数的计算公式是总份数=总数量÷平均数。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  { question_body: '5个数的平均数是8，这5个数的总和是____。', answer: '40', options_json: null, explanation: '总数量=平均数×总份数=8×5=40。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  { question_body: '6个数的总和是42，这6个数的平均数是____。', answer: '7', options_json: null, explanation: '平均数=总数量÷总份数=42÷6=7。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一组数的平均数是10，总和是50，这组数有____个数。', answer: '5', options_json: null, explanation: '总份数=总数量÷平均数=50÷10=5。', knowledge_id: 54, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '小明的考试成绩：语文90分，数学85分，英语95分，三科的平均分是____分。', answer: '90', options_json: null, explanation: '(90+85+95)÷3=270÷3=90分。', knowledge_id: 54, question_type_id: 1, difficulty_id: 4 },
  { question_body: '小红前3次数学测验的平均成绩是88分，第4次测验后，平均成绩变成90分，第4次测验她得了____分。', answer: '96', options_json: null, explanation: '前3次总分=88×3=264分，4次总分=90×4=360分，第4次分数=360-264=96分。', knowledge_id: 54, question_type_id: 1, difficulty_id: 4 },
  { question_body: '5个同学的身高分别是135cm、140cm、145cm、150cm、155cm，他们的平均身高是____cm。', answer: '145', options_json: null, explanation: '(135+140+145+150+155)÷5=725÷5=145cm。', knowledge_id: 54, question_type_id: 1, difficulty_id: 4 },
  { question_body: '小红前5次数学测验的平均成绩是85分，第6次测验后，平均成绩变成87分，第6次测验她得了____分。', answer: '97', options_json: null, explanation: '前5次总分=85×5=425分，6次总分=87×6=522分，第6次分数=522-425=97分。', knowledge_id: 54, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge54Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点54题目生成完成，共插入 ${knowledge54Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
