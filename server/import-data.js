const mysql = require('mysql2/promise');

async function importData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
    multipleStatements: true
  });

  console.log('Connected to MySQL server');

  const keyKnowledgeData = [
    [1, '掌握三位数乘两位数的竖式计算法则，注意数位对齐与进位。', 1, 1],
    [1, '熟练掌握由于因数末尾有0导致的简便算法（先算非零部分，再补0）。', 1, 1],
    [1, '速度与准确率：在5分钟内完成20道复杂乘法口算不丢分。', 3, 1],
    [1, '理解积的变化规律：一个因数不变，另一个因数扩大/缩小，积也相应变化。', 2, 2],
    [1, '进阶计算技巧：利用分配律简化大数乘法（如 101×37）。', 2, 2],
    [1, '除法商不变：理解被除数与除数同时缩放时，商的稳定性（计算神技）。', 2, 2],
    [1, '质量单位换算：1吨 = 1000千克，1千克 = 1000克。', 1, 3],
    [1, '长度单位换算：1千米 = 1000米，掌握生活中大距离的量感。', 1, 3],
    [2, '理解周长的概念：封闭图形一周的长度即为周长。', 1, 1],
    [2, '长方形周长公式：(长 + 宽) × 2，通过对边相等特征推导。', 1, 1],
    [2, '面积初探：理解面积是物体表面或平面图形的大小。', 2, 2],
    [2, '基本面积公式：长方形（长×宽），正方形（边长×边长）。', 1, 2],
    [2, '和差问题核心思维：(和 + 差) ÷ 2 = 大数；(和 - 差) ÷ 2 = 小数。', 3, 3],
    [3, '分数产生背景：在平均分时，无法得到整数结果的情况产生分数。', 1, 1],
    [3, '分数的意义：把单位"1"平均分成若干份，表示这样一份或几份的数。', 2, 1],
    [3, '小数的意义：分母是10、100、1000...的分数可以用小数表示。', 2, 2],
    [3, '小数与分数的转化：理解 0.1 = 1/10，0.01 = 1/100。', 2, 3]
  ];

  for (const k of keyKnowledgeData) {
    await connection.query('INSERT INTO key_knowledge (week_id, knowledge_text, difficulty, target_day) VALUES (?, ?, ?, ?)', k);
  }
  console.log('KeyKnowledge data imported: ' + keyKnowledgeData.length + ' records');

  const tasksData = [
    ['w1d1-1', 1, 1, 'warmup', '【快速委托】申城计算竞速', '15min', '挑战高频口算矩阵'],
    ['w1d1-2', 1, 1, 'new_knowledge', '【核心心法】竖法与估算', '20min', '掌握三位数乘两位数的竖式法则'],
    ['w1d1-3', 1, 1, 'practice', '【实战演练】魔都商贸风云', '30min', '模拟上海大宗采购'],
    ['w1d2-1', 1, 2, 'warmup', '【快速委托】法则变换', '5min', '练习积的变化规律与分配律初探'],
    ['w1d2-2', 1, 2, 'new_knowledge', '【核心心法】积与商的变幻', '20min', '理解积的变化规律及商不变的性质'],
    ['w2d1-1', 2, 1, 'warmup', '【快速委托】图形感官', '5min', '快速识别各种多边形'],
    ['w2d1-2', 2, 1, 'new_knowledge', '【核心心法】周长的边界', '20min', '理解周长概念'],
    ['w2d2-1', 2, 2, 'new_knowledge', '【核心心法】面积的维度', '20min', '区分长度单位与面积单位']
  ];

  for (const t of tasksData) {
    await connection.query('INSERT INTO tasks (task_id, week_id, day_number, task_type, title, duration, content) VALUES (?, ?, ?, ?, ?, ?, ?)', t);
  }
  console.log('Tasks data imported: ' + tasksData.length + ' records');

  const questionsData = [
    ['w1d1-1-q1', 'w1d1-1', '填充题', '125 × 32 = ?', '4000', null, null],
    ['w1d1-1-q2', 'w1d1-1', '填充题', '25 × 36 = ?', '900', null, null],
    ['w1d1-1-q3', 'w1d1-1', '填充题', '3.5 × 200 = ?', '700', null, null],
    ['w1d1-2-q1', 'w1d1-2', '单选题', '在计算 208 × 34 时，第二部分是用 30 去乘 208，得到的积应该是多少？', '6240', JSON.stringify(['624', '6240', '6040', '62400']), '30 × 208：先算 3 × 208 = 624，再在末尾补一个0'],
    ['w2d1-2-q1', 'w2d1-2', '填充题', '边长为5cm的正方形，周长是？', '20', null, null],
    ['w2d2-1-q1', 'w2d2-1', '填充题', '长12m，宽5m的长方形面积是？', '60', null, null]
  ];

  for (const q of questionsData) {
    await connection.query('INSERT INTO questions (question_id, task_id, question_type, question_body, answer, options_json, explanation) VALUES (?, ?, ?, ?, ?, ?, ?)', q);
  }
  console.log('Questions data imported: ' + questionsData.length + ' records');

  await connection.end();
  console.log('All data import completed');
}

importData().catch(console.error);
