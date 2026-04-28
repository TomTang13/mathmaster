const mysql = require('mysql2/promise');

const knowledge67Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '火车与人相遇时，火车的路程+人的路程等于什么？', answer: 'A', options_json: ['A. 火车车长+人的初始距离', 'B. 只有火车车长', 'C. 只有人的距离', 'D. 火车车长-人的距离'], explanation: '火车与人相遇时，火车的路程+人的路程=火车车长+人的初始距离。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车与人相向而行，从相遇到分开，火车的路程是多少？', answer: 'B', options_json: ['A. 只有火车车长', 'B. 火车车长', 'C. 火车车长的2倍', 'D. 火车车长+人的距离'], explanation: '火车与人相向而行，从相遇到分开，火车的路程=火车车长。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长200米，以每秒20米的速度行驶，一个人以每秒2米的速度与火车相向而行，从相遇到分开需要多少秒？', answer: 'C', options_json: ['A. 8秒', 'B. 9秒', 'C. 9.09秒', 'D. 10秒'], explanation: '相对速度=20+2=22米/秒，时间=200÷22≈9.09秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车追人的基本公式是什么？', answer: 'A', options_json: ['A. 路程差=车长', 'B. 路程和=车长', 'C. 路程差=2倍车长', 'D. 路程和=2倍车长'], explanation: '火车追人时，路程差=车长。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车与人同向而行，从追及到分开，火车的路程-人的路程等于什么？', answer: 'D', options_json: ['A. 火车车长', 'B. 人的距离', 'C. 火车车长-人的距离', 'D. 火车车长'], explanation: '火车与人同向而行，从追及到分开，火车的路程-人的路程=火车车长。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长300米，以每秒25米的速度追一个以每秒5米同向行走的人，追及到完全超过需要多少秒？', answer: 'A', options_json: ['A. 15秒', 'B. 20秒', 'C. 25秒', 'D. 30秒'], explanation: '追及时间=300÷(25-5)=15秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车与人相遇问题中，什么之和等于火车车长？', answer: 'B', options_json: ['A. 两车路程', 'B. 相对路程', 'C. 火车路程', 'D. 人走路程'], explanation: '火车与人相遇问题中，相对路程之和等于火车车长。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车与人追及问题中，什么之差等于火车车长？', answer: 'C', options_json: ['A. 两车路程', 'B. 相对路程', 'C. 火车路程-人的路程', 'D. 人的路程-火车路程'], explanation: '火车与人追及问题中，火车路程-人的路程=火车车长。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长250米，以每秒30米的速度行驶，一个人以每秒6米的速度与火车相向而行，从相遇到分开需要多少秒？', answer: 'D', options_json: ['A. 7秒', 'B. 8秒', 'C. 9秒', 'D. 7.14秒'], explanation: '相对速度=30+6=36米/秒，时间=250÷36≈6.94秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长400米，以每秒20米的速度追一个以每秒4米同向行走的人，追及到完全超过需要多少秒？', answer: 'A', options_json: ['A. 25秒', 'B. 20秒', 'C. 30秒', 'D. 35秒'], explanation: '追及时间=400÷(20-4)=25秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车从背后追人，从追上到完全离开，火车的路程是多少？', answer: 'B', options_json: ['A. 火车车长-人的路程', 'B. 火车车长+人的路程', 'C. 火车车长', 'D. 火车车长的2倍'], explanation: '火车从背后追人，从追上到完全离开，火车的路程=火车车长+人的路程。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长200米，以每秒15米的速度追一个以每秒3米同向行走的人，追及到完全超过需要多少秒？', answer: 'C', options_json: ['A. 12秒', 'B. 14秒', 'C. 16.67秒', 'D. 18秒'], explanation: '追及时间=200÷(15-3)=200÷12≈16.67秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一列火车长350米，以每秒28米的速度行驶，一个人以每秒7米的速度与火车相向而行，从相遇到分开需要多少秒？', answer: 'A', options_json: ['A. 10秒', 'B. 12秒', 'C. 14秒', 'D. 8秒'], explanation: '相对速度=28+7=35米/秒，时间=350÷35=10秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长280米，以每秒22米的速度追一个以每秒4米同向行走的人，追及到完全超过需要多少秒？', answer: 'B', options_json: ['A. 14秒', 'B. 15.56秒', 'C. 16秒', 'D. 18秒'], explanation: '追及时间=280÷(22-4)=280÷18≈15.56秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长300米，以每秒25米的速度行驶，一个人以每秒5米的速度与火车相向而行，火车完全超过这个人需要多少秒？', answer: 'C', options_json: ['A. 10秒', 'B. 11秒', 'C. 10秒', 'D. 12秒'], explanation: '相对速度=25+5=30米/秒，时间=300÷30=10秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长400米，以每秒30米的速度追一个以每秒6米同向行走的人，追及到完全超过需要多少秒？', answer: 'D', options_json: ['A. 12秒', 'B. 14秒', 'C. 16秒', 'D. 16.67秒'], explanation: '追及时间=400÷(30-6)=400÷24≈16.67秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长250米，以每秒20米的速度行驶，一个人站在某处，火车经过这个人用了15秒，人的位置在哪里？', answer: 'A', options_json: ['A. 火车车长范围内', 'B. 火车前方', 'C. 火车后方', 'D. 无法确定'], explanation: '火车经过一个人用15秒，说明相对速度=250÷15=50/3米/秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长320米，以每秒24米的速度行驶，一个人以每秒4米的速度与火车相向而行，从相遇到分开需要多少秒？', answer: 'B', options_json: ['A. 11秒', 'B. 11.43秒', 'C. 12秒', 'D. 13秒'], explanation: '相对速度=24+4=28米/秒，时间=320÷28≈11.43秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一列火车长400米，以每秒30米的速度追一个以每秒6米同向行走的人，当火车头追到人时，再经过多少秒火车尾才超过人？', answer: 'A', options_json: ['A. 13.33秒', 'B. 10秒', 'C. 15秒', 'D. 20秒'], explanation: '火车长400米，速度差24米/秒，需要400÷24≈16.67秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长300米，以每秒25米的速度行驶，一个人以每秒5米的速度与火车相向而行，火车车头遇到人到车尾离开人需要多少秒？', answer: 'B', options_json: ['A. 10秒', 'B. 10秒', 'C. 12秒', 'D. 15秒'], explanation: '相对速度=25+5=30米/秒，时间=300÷30=10秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长450米，以每秒36米的速度追一个以每秒9米同向行走的人，追及到完全超过需要多少秒？', answer: 'C', options_json: ['A. 12秒', 'B. 15秒', 'C. 16.67秒', 'D. 18秒'], explanation: '追及时间=450÷(36-9)=450÷27≈16.67秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长350米，以每秒28米的速度行驶，一个人以每秒7米的速度与火车相向而行，从火车头遇到人到火车尾离开人需要多少秒？', answer: 'D', options_json: ['A. 10秒', 'B. 11秒', 'C. 12秒', 'D. 10秒'], explanation: '相对速度=28+7=35米/秒，时间=350÷35=10秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长500米，以每秒40米的速度追一个以每秒8米同向行走的人，追及到完全超过需要多少秒？', answer: 'A', options_json: ['A. 15.63秒', 'B. 12.5秒', 'C. 16秒', 'D. 18秒'], explanation: '追及时间=500÷(40-8)=500÷32≈15.63秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长280米，以每秒22米的速度行驶，一个人以每秒5米的速度与火车相向而行，火车完全经过这个人需要多少秒？', answer: 'B', options_json: ['A. 10秒', 'B. 10.37秒', 'C. 12秒', 'D. 14秒'], explanation: '相对速度=22+5=27米/秒，时间=280÷27≈10.37秒。', knowledge_id: 67, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：火车与人相遇时，火车的路程+人的路程=火车车长。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车与人相遇时，火车的路程+人的路程=火车车长。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车追人时，火车路程-人的路程=火车车长。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车追人时，火车路程-人的路程=火车车长。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车与人相向而行，从相遇到分开，火车的路程=火车车长。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车与人相向而行，从相遇到分开，火车的路程=火车车长。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车与人同向而行，从追及到分开，火车的路程=火车车长。', answer: '错误', options_json: ['正确', '错误'], explanation: '火车与人同向而行，从追及到分开，火车的路程-人的路程=火车车长。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车经过一个人用的时间=火车车长÷相对速度。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车经过一个人用的时间=火车车长÷相对速度。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车追人时，速度差越大，追及时间越短。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车追人时，追及时间=车长÷速度差，速度差越大，追及时间越短。', knowledge_id: 67, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '火车与人相遇时，火车的路程+人的路程=火车____。', answer: '车长', options_json: null, explanation: '火车与人相遇时，火车的路程+人的路程=火车车长。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  { question_body: '火车追人时，火车路程-人的路程=火车____。', answer: '车长', options_json: null, explanation: '火车追人时，火车路程-人的路程=火车车长。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长200米，以每秒20米的速度行驶，一个人以每秒2米的速度与火车相向而行，从相遇到分开需要____秒。', answer: '9.09', options_json: null, explanation: '相对速度=20+2=22米/秒，时间=200÷22≈9.09秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长300米，以每秒25米的速度追一个以每秒5米同向行走的人，追及到完全超过需要____秒。', answer: '15', options_json: null, explanation: '追及时间=300÷(25-5)=15秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长250米，以每秒30米的速度行驶，一个人以每秒6米的速度与火车相向而行，从相遇到分开需要____秒。', answer: '6.94', options_json: null, explanation: '相对速度=30+6=36米/秒，时间=250÷36≈6.94秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长400米，以每秒20米的速度追一个以每秒4米同向行走的人，追及到完全超过需要____秒。', answer: '25', options_json: null, explanation: '追及时间=400÷(20-4)=25秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一列火车长350米，以每秒28米的速度行驶，一个人以每秒7米的速度与火车相向而行，从相遇到分开需要____秒。', answer: '10', options_json: null, explanation: '相对速度=28+7=35米/秒，时间=350÷35=10秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列火车长280米，以每秒22米的速度追一个以每秒4米同向行走的人，追及到完全超过需要____秒。', answer: '15.56', options_json: null, explanation: '追及时间=280÷(22-4)=280÷18≈15.56秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列火车长400米，以每秒30米的速度追一个以每秒6米同向行走的人，追及到完全超过需要____秒。', answer: '16.67', options_json: null, explanation: '追及时间=400÷(30-6)=400÷24≈16.67秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列火车长500米，以每秒40米的速度追一个以每秒8米同向行走的人，追及到完全超过需要____秒。', answer: '15.63', options_json: null, explanation: '追及时间=500÷(40-8)=500÷32≈15.63秒。', knowledge_id: 67, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge67Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点67题目生成完成，共插入 ${knowledge67Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
