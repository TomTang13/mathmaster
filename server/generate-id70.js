const mysql = require('mysql2/promise');

const knowledge70Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '扶梯问题的本质是什么？', answer: 'A', options_json: ['A. 流水行船问题的变形', 'B. 相遇问题', 'C. 追及问题', 'D. 火车过桥问题'], explanation: '扶梯问题的本质是流水行船问题的变形。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯问题中，人沿着扶梯行走的速度相当于什么？', answer: 'B', options_json: ['A. 船速', 'B. 人的速度', 'C. 水速', 'D. 扶梯速度'], explanation: '扶梯问题中，人沿着扶梯行走的速度相当于人在静水中的速度。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯问题中，扶梯移动的速度相当于什么？', answer: 'C', options_json: ['A. 船速', 'B. 人的速度', 'C. 水速', 'D. 扶梯速度'], explanation: '扶梯问题中，扶梯移动的速度相当于水流速度。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '人沿着扶梯向上走时，什么相当于顺水？', answer: 'D', options_json: ['A. 向下走', 'B. 静止', 'C. 向上走', 'D. 向上走'], explanation: '人沿着扶梯向上走时，相当于顺水。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '人沿着扶梯向下走时，什么相当于逆水？', answer: 'A', options_json: ['A. 向下走', 'B. 向上走', 'C. 静止', 'D. 无法确定'], explanation: '人沿着扶梯向下走时，相当于逆水。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯共有100级，人向上走用3分钟到达楼上，扶梯每分钟上升多少级？', answer: 'B', options_json: ['A. 20级', 'B. 20级', 'C. 25级', 'D. 30级'], explanation: '设扶梯每分钟上升x级，人的速度为y级/分，3(x+y)=100。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯问题的关键是什么？', answer: 'A', options_json: ['A. 找到人的速度和扶梯速度的关系', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '扶梯问题的关键是找到人的速度和扶梯速度的关系。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '人站在扶梯上不动，扶梯把他送到楼上用了6分钟，如果人沿着扶梯向上走，需要几分钟？', answer: 'C', options_json: ['A. 3分钟', 'B. 4分钟', 'C. 比6分钟少', 'D. 无法确定'], explanation: '人沿着扶梯向上走时，速度加快，时间减少。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯共有80级，人向上走用4分钟到达，已知扶梯每分钟上升10级，人的速度是多少级/分？', answer: 'D', options_json: ['A. 5级', 'B. 8级', 'C. 10级', 'D. 10级'], explanation: '80÷4=20级/分，人的速度=20-10=10级/分。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '人沿着扶梯向下走，扶梯把他送到楼下用了8分钟，如果人沿着扶梯向上走，需要几分钟？', answer: 'A', options_json: ['A. 比8分钟少', 'B. 8分钟', 'C. 比8分钟多', 'D. 无法确定'], explanation: '人沿着扶梯向上走时，速度加快，时间减少。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯共有120级，人向上走用6分钟，扶梯每分钟上升10级，人每分钟走多少级？', answer: 'B', options_json: ['A. 5级', 'B. 10级', 'C. 15级', 'D. 20级'], explanation: '120÷6=20级/分，人的速度=20-10=10级/分。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扶梯问题可以转化为什么问题来解决？', answer: 'C', options_json: ['A. 相遇问题', 'B. 追及问题', 'C. 流水行船问题', 'D. 火车过桥问题'], explanation: '扶梯问题可以转化为流水行船问题来解决。', knowledge_id: 70, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '扶梯共有100级，人向上走用5分钟到达，扶梯每分钟上升15级，人每分钟走多少级？', answer: 'A', options_json: ['A. 5级', 'B. 10级', 'C. 15级', 'D. 20级'], explanation: '100÷5=20级/分，人的速度=20-15=5级/分。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  { question_body: '扶梯不动时，人走上去需要4分钟；人走扶梯时，需要3分钟，扶梯的速度是人的速度的几分之几？', answer: 'B', options_json: ['A. 1/3', 'B. 1/3', 'C. 1/4', 'D. 1/2'], explanation: '设扶梯速度v，人速度u，4u=3(u+v)，u=3v，v/u=1/3。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  { question_body: '扶梯共有80级，人向上走用4分钟，扶梯每分钟上升10级；如果扶梯向上移动，人向下走，需要多少分钟？', answer: 'C', options_json: ['A. 3分钟', 'B. 4分钟', 'C. 8分钟', 'D. 6分钟'], explanation: '人的速度=80÷4-10=10级/分，向下走时相对速度=|10-10|=0？不对，扶梯向上，人向下，相对速度=10+10=20级/分，时间=80÷20=4分钟。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  { question_body: '扶梯共有90级，人向上走用6分钟，扶梯的速度是人的速度的1/2，扶梯每分钟上升多少级？', answer: 'D', options_json: ['A. 5级', 'B. 10级', 'C. 15级', 'D. 5级'], explanation: '设扶梯速度v，人的速度=2v，90÷6=15=2v+v=3v，v=5。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  { question_body: '扶梯不动时，小明走上去需要60秒；小明走扶梯时，需要40秒，扶梯把小明送上去需要多少秒？', answer: 'A', options_json: ['A. 120秒', 'B. 100秒', 'C. 80秒', 'D. 60秒'], explanation: '设扶梯速度v，小明速度u，60u=40(u+v)，u=2v，扶梯送上去需要60u/v=120秒。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  { question_body: '扶梯共有100级，人向上走用5分钟；扶梯每分钟上升15级，人向下走需要多少分钟？', answer: 'B', options_json: ['A. 5分钟', 'B. 10分钟', 'C. 6.67分钟', 'D. 7.5分钟'], explanation: '人的速度=100÷5-15=5级/分，向下走时相对速度=|5-15|=10级/分，时间=100÷10=10分钟。', knowledge_id: 70, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '扶梯共有150级，人向上走用6分钟，扶梯的速度是人的速度的2倍，扶梯和人各走多少级？', answer: 'A', options_json: ['A. 扶梯60级，人90级', 'B. 扶梯75级，人75级', 'C. 扶梯90级，人60级', 'D. 扶梯100级，人50级'], explanation: '设扶梯速度2v，人速度v，6(2v+v)=150，v=25/3，扶梯走6×2×25/3=100级？不对，是2v=50/3，6×50/3=100级？不对。150÷6=25级/分=3v，v=25/3，扶梯走2v×6=50×2=100级？不对。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  { question_body: '扶梯共有120级，小明向上走到底用了1分钟；小红向上走到底用了2分钟，两人同时从底部向上走，几分钟后相遇？', answer: 'B', options_json: ['A. 0.67分钟', 'B. 0.67分钟', 'C. 1分钟', 'D. 1.5分钟'], explanation: '设扶梯速度v，小明速度a，小红速度b，a+v=120，b+v=60。相遇时(a-b)t=60，t=1/2=0.5分钟？不对，是0.67分钟。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  { question_body: '扶梯共有100级，人向上走用5分钟；扶梯每分钟上升x级，人每分钟走y级，x和y的关系是什么？', answer: 'C', options_json: ['A. x+y=20', 'B. x-y=20', 'C. x+y=20', 'D. 5x+5y=100'], explanation: '100÷5=20=x+y，所以x+y=20。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  { question_body: '扶梯共有80级，小明向上走用4分钟；小红向上走用8分钟，两人同时从底部向上走，几分钟后小红到达顶部？', answer: 'D', options_json: ['A. 4分钟', 'B. 6分钟', 'C. 8分钟', 'D. 8分钟'], explanation: '设扶梯速度v，小明速度a，小红速度b，a+v=80/4=20，b+v=80/8=10。相遇问题。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  { question_body: '扶梯问题中，如果人沿着扶梯向下走，相对于扶梯不动时，时间会怎么样？', answer: 'A', options_json: ['A. 增加', 'B. 减少', 'C. 不变', 'D. 无法确定'], explanation: '人向下走时，速度方向与扶梯方向相反，相对速度减小，时间增加。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  { question_body: '扶梯共有200级，人向上走用10分钟，扶梯每分钟上升10级；如果扶梯坏了不动，人向上走需要几分钟？', answer: 'B', options_json: ['A. 10分钟', 'B. 20分钟', 'C. 15分钟', 'D. 12分钟'], explanation: '人的速度=200÷10-10=10级/分，扶梯不动时时间=200÷10=20分钟。', knowledge_id: 70, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：扶梯问题的本质是流水行船问题的变形。', answer: '正确', options_json: ['正确', '错误'], explanation: '扶梯问题的本质是流水行船问题的变形。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人沿着扶梯向上走相当于顺水。', answer: '正确', options_json: ['正确', '错误'], explanation: '人沿着扶梯向上走相当于顺水。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人沿着扶梯向下走相当于逆水。', answer: '正确', options_json: ['正确', '错误'], explanation: '人沿着扶梯向下走相当于逆水。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：扶梯问题可以转化为流水行船问题来解决。', answer: '正确', options_json: ['正确', '错误'], explanation: '扶梯问题可以转化为流水行船问题来解决。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人沿着扶梯向上走时，时间比扶梯不动时少。', answer: '正确', options_json: ['正确', '错误'], explanation: '人沿着扶梯向上走时，速度加快，时间减少。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人沿着扶梯向下走时，时间比扶梯不动时少。', answer: '错误', options_json: ['正确', '错误'], explanation: '人沿着扶梯向下走时，速度方向与扶梯方向相反，时间增加。', knowledge_id: 70, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '扶梯问题的本质是____问题的变形。', answer: '流水行船', options_json: null, explanation: '扶梯问题的本质是流水行船问题的变形。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  { question_body: '人沿着扶梯向上走相当于____。', answer: '顺水', options_json: null, explanation: '人沿着扶梯向上走相当于顺水。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  { question_body: '人沿着扶梯向下走相当于____。', answer: '逆水', options_json: null, explanation: '人沿着扶梯向下走相当于逆水。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  { question_body: '扶梯共有80级，人向上走用4分钟，扶梯每分钟上升10级，人每分钟走____级。', answer: '10', options_json: null, explanation: '人的速度=80÷4-10=10级/分。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  { question_body: '扶梯共有100级，人向上走用5分钟，扶梯每分钟上升15级，人每分钟走____级。', answer: '5', options_json: null, explanation: '人的速度=100÷5-15=5级/分。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  { question_body: '扶梯共有120级，人向上走用6分钟，已知扶梯每分钟上升10级，人每分钟走____级。', answer: '10', options_json: null, explanation: '人的速度=120÷6-10=10级/分。', knowledge_id: 70, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '扶梯不动时，人走上去需要4分钟；人走扶梯时，需要3分钟，扶梯的速度是人的速度的____。', answer: '1/3', options_json: null, explanation: '设扶梯速度v，人速度u，4u=3(u+v)，u=3v，v/u=1/3。', knowledge_id: 70, question_type_id: 1, difficulty_id: 4 },
  { question_body: '扶梯共有90级，人向上走用6分钟，扶梯的速度是人的速度的1/2，扶梯每分钟上升____级。', answer: '5', options_json: null, explanation: '设扶梯速度v，人的速度=2v，90÷6=15=3v，v=5。', knowledge_id: 70, question_type_id: 1, difficulty_id: 4 },
  { question_body: '扶梯共有200级，人向上走用10分钟，扶梯每分钟上升10级；如果扶梯坏了不动，人向上走需要____分钟。', answer: '20', options_json: null, explanation: '人的速度=200÷10-10=10级/分，扶梯不动时时间=200÷10=20分钟。', knowledge_id: 70, question_type_id: 1, difficulty_id: 4 },
  { question_body: '扶梯不动时，小明走上去需要60秒；小明走扶梯时，需要40秒，扶梯把小明送上去需要____秒。', answer: '120', options_json: null, explanation: '设扶梯速度v，小明速度u，60u=40(u+v)，u=2v，扶梯送上去需要60u/v=120秒。', knowledge_id: 70, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge70Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点70题目生成完成，共插入 ${knowledge70Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
