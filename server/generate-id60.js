const mysql = require('mysql2/promise');

const knowledge60Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '比例的基本性质是什么？', answer: 'A', options_json: ['A. 内项之积等于外项之积', 'B. 内项之和等于外项之和', 'C. 内项之差等于外项之差', 'D. 内项之商等于外项之商'], explanation: '比例的基本性质是内项之积等于外项之积。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在比例3:4=6:8中，内项是多少？', answer: 'B', options_json: ['A. 3和4', 'B. 4和6', 'C. 3和8', 'D. 6和8'], explanation: '在比例a:b=c:d中，内项是b和c。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在比例3:4=6:8中，外项是多少？', answer: 'C', options_json: ['A. 3和4', 'B. 4和6', 'C. 3和8', 'D. 6和8'], explanation: '在比例a:b=c:d中，外项是a和d。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '判断3:4和6:8是否成比例？', answer: 'D', options_json: ['A. 不成比例', 'B. 无法判断', 'C. 成反比例', 'D. 成正比例'], explanation: '3:4=6:8，因为3×8=4×6，所以成比例。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果a:b=2:3，b:c=4:5，那么a:c=？', answer: 'A', options_json: ['A. 8:15', 'B. 6:5', 'C. 5:6', 'D. 15:8'], explanation: 'a:b=2:3=8:12，b:c=4:5=12:15，所以a:c=8:15。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果x:5=3:15，那么x=？', answer: 'B', options_json: ['A. 1', 'B. 1', 'C. 2', 'D. 3'], explanation: '根据比例基本性质，15x=5×3，x=1。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正比例的特点是什么？', answer: 'C', options_json: ['A. 两个量的和一定', 'B. 两个量的差一定', 'C. 两个量的比值一定', 'D. 两个量的积一定'], explanation: '正比例的特点是两个量的比值一定。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '反比例的特点是什么？', answer: 'D', options_json: ['A. 两个量的和一定', 'B. 两个量的差一定', 'C. 两个量的比值一定', 'D. 两个量的积一定'], explanation: '反比例的特点是两个量的积一定。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一辆汽车3小时行驶180千米，照这样计算，5小时行驶多少千米？', answer: 'A', options_json: ['A. 300', 'B. 250', 'C. 200', 'D. 150'], explanation: '速度=180÷3=60千米/小时，5小时行驶=60×5=300千米。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，6人做需要12天完成，9人做需要多少天完成？', answer: 'B', options_json: ['A. 6', 'B. 8', 'C. 10', 'D. 14'], explanation: '工作量=6×12=72，9人需要的时间=72÷9=8天。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比例应用题的关键是什么？', answer: 'C', options_json: ['A. 直接计算', 'B. 猜测答案', 'C. 找到比例关系', 'D. 不需要计算'], explanation: '比例应用题的关键是找到比例关系。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果a:b=3:4，那么(a+b):b=？', answer: 'D', options_json: ['A. 3:4', 'B. 4:3', 'C. 7:3', 'D. 7:4'], explanation: '(a+b):b=(3+4):4=7:4。', knowledge_id: 60, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在比例尺1:1000的地图上，量得两地距离是5厘米，实际距离是多少米？', answer: 'B', options_json: ['A. 50', 'B. 50', 'C. 500', 'D. 5000'], explanation: '实际距离=5×1000=5000厘米=50米。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两地相距240千米，在比例尺1:6000000的地图上，两地距离是多少厘米？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '图上距离=240千米÷6000000=4厘米。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  { question_body: '配制一种药水，药粉和水的比例是1:500，要配制2004克药水，需要药粉多少克？', answer: 'A', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '药粉占总量的1/501，2004×1/501=4克。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙、丙三人的年龄比是3:4:5，他们的年龄和是60岁，丙的年龄是多少？', answer: 'B', options_json: ['A. 15', 'B. 25', 'C. 20', 'D. 30'], explanation: '总份数=3+4+5=12，丙占5份，60×5/12=25岁。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一辆汽车从甲地到乙地，前3小时行驶180千米，照这样的速度，再行驶2小时到达乙地，甲乙两地相距多少千米？', answer: 'C', options_json: ['A. 240', 'B. 260', 'C. 300', 'D. 320'], explanation: '速度=180÷3=60千米/小时，总时间=5小时，总距离=60×5=300千米。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲单独做需要10天，乙单独做需要15天，甲、乙工作效率的比是多少？', answer: 'D', options_json: ['A. 2:3', 'B. 1:2', 'C. 3:4', 'D. 3:2'], explanation: '甲的工作效率=1/10，乙的工作效率=1/15，比=1/10:1/15=3:2。', knowledge_id: 60, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙、丙三个数的比是2:3:4，甲数比丙数少12，这三个数的和是多少？', answer: 'A', options_json: ['A. 54', 'B. 60', 'C. 66', 'D. 72'], explanation: '丙比甲多2份，12÷2=6，每份6，和=6×(2+3+4)=54。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  { question_body: '配制一种盐水，盐和水的比是1:9，加入10克盐后，盐和水的比是1:8，原来的盐水多少克？', answer: 'B', options_json: ['A. 800', 'B. 900', 'C. 1000', 'D. 1100'], explanation: '设原来盐x克，水9x克，(x+10):9x=1:8，8x+80=9x，x=80，原来盐水=10x=800克。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两车同时从A、B两地相向而行，速度比是3:2，相遇时甲车比乙车多行120千米，A、B两地相距多少千米？', answer: 'C', options_json: ['A. 400', 'B. 500', 'C. 600', 'D. 700'], explanation: '相遇时路程比=速度比=3:2，甲车比乙车多1份，120千米，总路程=5份=600千米。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲、乙合作需要6天完成，甲、乙工作效率的比是3:2，甲单独做需要多少天？', answer: 'D', options_json: ['A. 10', 'B. 12', 'C. 15', 'D. 10'], explanation: '合作效率=1/6，甲的效率=1/6×3/5=1/10，甲单独做需要10天。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在比例尺1:5000000的地图上，量得A、B两地距离是8厘米，一辆汽车以每小时80千米的速度从A地到B地，需要多少小时？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '实际距离=8×5000000=40000000厘米=400千米，时间=400÷80=5小时。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两桶油的重量比是3:5，从乙桶倒出20千克油到甲桶后，两桶油的重量相等，原来乙桶有多少千克油？', answer: 'B', options_json: ['A. 50', 'B. 100', 'C. 120', 'D. 150'], explanation: '乙比甲多2份，倒出1份后相等，1份=20千克，乙原来有5份=100千克。', knowledge_id: 60, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：比例的基本性质是内项之积等于外项之积。', answer: '正确', options_json: ['正确', '错误'], explanation: '比例的基本性质是内项之积等于外项之积。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：正比例的特点是两个量的比值一定。', answer: '正确', options_json: ['正确', '错误'], explanation: '正比例的特点是两个量的比值一定。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：反比例的特点是两个量的积一定。', answer: '正确', options_json: ['正确', '错误'], explanation: '反比例的特点是两个量的积一定。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在比例中，两个外项的积等于两个内项的积。', answer: '正确', options_json: ['正确', '错误'], explanation: '比例的基本性质。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：比例尺是图上距离与实际距离的比。', answer: '正确', options_json: ['正确', '错误'], explanation: '比例尺=图上距离:实际距离。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果a:b=c:d，那么ad=bc。', answer: '正确', options_json: ['正确', '错误'], explanation: '比例的基本性质。', knowledge_id: 60, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '比例的基本性质是____之积等于外项之积。', answer: '内项', options_json: null, explanation: '比例的基本性质是内项之积等于外项之积。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正比例的特点是两个量的____一定。', answer: '比值', options_json: null, explanation: '正比例的特点是两个量的比值一定。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  { question_body: '反比例的特点是两个量的____一定。', answer: '积', options_json: null, explanation: '反比例的特点是两个量的积一定。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果x:5=3:15，那么x=____。', answer: '1', options_json: null, explanation: '15x=5×3，x=1。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一辆汽车3小时行驶180千米，照这样计算，5小时行驶____千米。', answer: '300', options_json: null, explanation: '速度=180÷3=60千米/小时，5小时行驶=60×5=300千米。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一项工程，6人做需要12天完成，9人做需要____天完成。', answer: '8', options_json: null, explanation: '工作量=6×12=72，9人需要的时间=72÷9=8天。', knowledge_id: 60, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在比例尺1:1000的地图上，量得两地距离是5厘米，实际距离是____米。', answer: '50', options_json: null, explanation: '实际距离=5×1000=5000厘米=50米。', knowledge_id: 60, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙、丙三人的年龄比是3:4:5，他们的年龄和是60岁，丙的年龄是____岁。', answer: '25', options_json: null, explanation: '总份数=3+4+5=12，丙占5份，60×5/12=25岁。', knowledge_id: 60, question_type_id: 1, difficulty_id: 4 },
  { question_body: '配制一种药水，药粉和水的比例是1:500，要配制2004克药水，需要药粉____克。', answer: '4', options_json: null, explanation: '药粉占总量的1/501，2004×1/501=4克。', knowledge_id: 60, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两桶油的重量比是3:5，从乙桶倒出20千克油到甲桶后，两桶油的重量相等，原来乙桶有____千克油。', answer: '100', options_json: null, explanation: '乙比甲多2份，倒出1份后相等，1份=20千克，乙原来有5份=100千克。', knowledge_id: 60, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge60Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点60题目生成完成，共插入 ${knowledge60Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
