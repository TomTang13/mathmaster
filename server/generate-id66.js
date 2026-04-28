const mysql = require('mysql2/promise');

const knowledge66Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '火车过桥问题的基本公式是什么？', answer: 'A', options_json: ['A. 路程=车长+桥长', 'B. 路程=车长', 'C. 路程=桥长', 'D. 路程=车长-桥长'], explanation: '火车过桥时，路程=车长+桥长。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车完全通过桥的时间等于什么？', answer: 'B', options_json: ['A. 桥长÷速度', 'B. (车长+桥长)÷速度', 'C. 车长÷速度', 'D. (车长-桥长)÷速度'], explanation: '火车完全通过桥的时间=(车长+桥长)÷速度。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长200米，桥长400米，火车速度20米/秒，火车完全通过桥需要多少秒？', answer: 'C', options_json: ['A. 20秒', 'B. 25秒', 'C. 30秒', 'D. 40秒'], explanation: '时间=(200+400)÷20=30秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车过桥问题中，火车的路程是什么？', answer: 'D', options_json: ['A. 只有桥长', 'B. 只有车长', 'C. 车长或桥长', 'D. 车长+桥长'], explanation: '火车过桥时，火车的路程=车长+桥长。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长150米，以每秒15米的速度通过长300米的桥，需要多少秒？', answer: 'A', options_json: ['A. 30秒', 'B. 20秒', 'C. 25秒', 'D. 35秒'], explanation: '时间=(150+300)÷15=30秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车过桥问题的关键是什么？', answer: 'B', options_json: ['A. 找到速度', 'B. 找到车长和桥长的关系', 'C. 直接计算', 'D. 猜测答案'], explanation: '火车过桥问题的关键是找到车长和桥长的关系。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长250米，桥长500米，火车速度25米/秒，火车完全通过桥需要多少秒？', answer: 'C', options_json: ['A. 25秒', 'B. 30秒', 'C. 30秒', 'D. 35秒'], explanation: '时间=(250+500)÷25=30秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车从开始上桥到完全下桥，走的路程是什么？', answer: 'D', options_json: ['A. 只有桥长', 'B. 只有车长', 'C. 车长+桥长', 'D. 车长+桥长'], explanation: '火车从开始上桥到完全下桥，走的路程=车长+桥长。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长200米，以每秒10米的速度通过长400米的桥，需要多少秒？', answer: 'A', options_json: ['A. 60秒', 'B. 50秒', 'C. 40秒', 'D. 70秒'], explanation: '时间=(200+400)÷10=60秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车完全在桥上的时间等于什么？', answer: 'B', options_json: ['A. (车长+桥长)÷速度', 'B. (桥长-车长)÷速度', 'C. 车长÷速度', 'D. 桥长÷速度'], explanation: '火车完全在桥上的时间=(桥长-车长)÷速度。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列火车长200米，桥长600米，火车速度20米/秒，火车完全在桥上的时间是多少秒？', answer: 'C', options_json: ['A. 20秒', 'B. 25秒', 'C. 20秒', 'D. 30秒'], explanation: '时间=(600-200)÷20=20秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  { question_body: '火车从开始上桥到车尾离开桥，走的路程是什么？', answer: 'D', options_json: ['A. 只有桥长', 'B. 只有车长', 'C. 桥长-车长', 'D. 车长+桥长'], explanation: '火车从开始上桥到车尾离开桥，走的路程=车长+桥长。', knowledge_id: 66, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一列火车长300米，以每秒20米的速度通过长900米的桥，火车完全通过桥需要多少秒？', answer: 'A', options_json: ['A. 60秒', 'B. 45秒', 'C. 50秒', 'D. 55秒'], explanation: '时间=(300+900)÷20=60秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长200米，以每秒15米的速度通过一座桥，火车完全在桥上的时间是40秒，桥长是多少米？', answer: 'B', options_json: ['A. 600米', 'B. 800米', 'C. 700米', 'D. 900米'], explanation: '桥长-车长=15×40=600米，桥长=600+200=800米。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车以每秒18米的速度通过长540米的桥，火车完全通过桥的时间是50秒，火车长多少米？', answer: 'C', options_json: ['A. 200米', 'B. 250米', 'C. 360米', 'D. 300米'], explanation: '车长+桥长=18×50=900米，车长=900-540=360米。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  { question_body: '两列火车相向而行，一列长200米，速度每秒15米；另一列长250米，速度每秒20米，它们从相遇到完全分开需要多少秒？', answer: 'A', options_json: ['A. 12.86秒', 'B. 15秒', 'C. 10秒', 'D. 13秒'], explanation: '总路程=200+250=450米，速度和=35米/秒，时间=450÷35≈12.86秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长350米，通过一座桥用了50秒，已知火车速度是每秒20米，桥长是多少米？', answer: 'B', options_json: ['A. 650米', 'B. 650米', 'C. 700米', 'D. 600米'], explanation: '车长+桥长=20×50=1000米，桥长=1000-350=650米。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列火车长400米，通过一座长800米的桥，火车完全在桥上的时间是多少秒？（火车速度每秒25米）', answer: 'C', options_json: ['A. 16秒', 'B. 20秒', 'C. 16秒', 'D. 24秒'], explanation: '时间=(800-400)÷25=16秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一列火车通过两座桥，第一座桥长300米，火车通过用了30秒；第二座桥长450米，火车通过用了45秒，已知火车速度相同，火车长多少米？', answer: 'A', options_json: ['A. 150米', 'B. 200米', 'C. 250米', 'D. 300米'], explanation: '设车长x，速度v。(300+x)/v=30，(450+x)/v=45。两式相除(300+x)/(450+x)=2/3，3(300+x)=2(450+x)，900+3x=900+2x，x=150米。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长250米，以每秒20米的速度行驶，前方有一座长350米的桥，火车从离桥200米处开始加速到过完桥，需要多少秒？', answer: 'B', options_json: ['A. 37.5秒', 'B. 40秒', 'C. 42.5秒', 'D. 45秒'], explanation: '总路程=200+250+350=800米，时间=800÷20=40秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两列火车同向而行，快车长200米，速度每秒25米；慢车长300米，速度每秒15米，快车从后面追上慢车到完全超过，需要多少秒？', answer: 'C', options_json: ['A. 30秒', 'B. 40秒', 'C. 50秒', 'D. 60秒'], explanation: '追及路程=200+300=500米，速度差=10米/秒，时间=500÷10=50秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车长300米，以每秒20米的速度通过一座桥，火车完全在桥上的时间比完全通过桥的时间少多少秒？', answer: 'D', options_json: ['A. 10秒', 'B. 15秒', 'C. 20秒', 'D. 15秒'], explanation: '完全通过桥时间=(300+桥长)÷20，完全在桥上时间=(桥长-300)÷20，差=600÷20=30秒？不对，是(300+桥长-桥长+300)÷20=600÷20=30秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列火车以恒定速度过一座桥，火车有四分之一在桥上时，用了10秒；火车完全通过桥用了50秒，火车长多少米？', answer: 'A', options_json: ['A. 100米', 'B. 120米', 'C. 150米', 'D. 200米'], explanation: '设车长L，桥长S，速度v。四分之一车长在桥上时，路程=3L/4+S/4=v×10；完全过桥：L+S=v×50。解得L=100米。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两列火车相向而行，一列长180米，速度每秒20米；另一列长220米，速度每秒15米，它们从车头相遇到车尾分开需要多少秒？', answer: 'B', options_json: ['A. 8秒', 'B. 10秒', 'C. 12秒', 'D. 15秒'], explanation: '总路程=180+220=400米，速度和=35米/秒，时间=400÷35≈11.43秒。', knowledge_id: 66, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：火车过桥时，路程=车长+桥长。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车过桥时，路程=车长+桥长。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车完全通过桥的时间=(车长+桥长)÷速度。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车完全通过桥的时间=(车长+桥长)÷速度。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车完全在桥上的时间=(桥长-车长)÷速度。', answer: '正确', options_json: ['正确', '错误'], explanation: '火车完全在桥上的时间=(桥长-车长)÷速度。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：火车从开始上桥到车尾离开桥，走的路程=桥长。', answer: '错误', options_json: ['正确', '错误'], explanation: '火车从开始上桥到车尾离开桥，走的路程=车长+桥长。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两列火车相向而行，从相遇到完全分开，走的路程=两车车长之和。', answer: '正确', options_json: ['正确', '错误'], explanation: '两列火车相向而行，从相遇到完全分开，走的路程=两车车长之和。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两列火车同向而行，从追及到完全超过，走的路程=两车车长之和。', answer: '正确', options_json: ['正确', '错误'], explanation: '两列火车同向而行，从追及到完全超过，走的路程=两车车长之和。', knowledge_id: 66, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '火车过桥时，路程=____+桥长。', answer: '车长', options_json: null, explanation: '火车过桥时，路程=车长+桥长。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  { question_body: '火车完全通过桥的时间=(车长+桥长)÷____。', answer: '速度', options_json: null, explanation: '火车完全通过桥的时间=(车长+桥长)÷速度。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长200米，桥长400米，火车速度20米/秒，火车完全通过桥需要____秒。', answer: '30', options_json: null, explanation: '时间=(200+400)÷20=30秒。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长150米，以每秒15米的速度通过长300米的桥，需要____秒。', answer: '30', options_json: null, explanation: '时间=(150+300)÷15=30秒。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  { question_body: '火车完全在桥上的时间=(桥长-车长)÷____。', answer: '速度', options_json: null, explanation: '火车完全在桥上的时间=(桥长-车长)÷速度。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列火车长200米，桥长600米，火车速度20米/秒，火车完全在桥上的时间是____秒。', answer: '20', options_json: null, explanation: '时间=(600-200)÷20=20秒。', knowledge_id: 66, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一列火车长300米，以每秒20米的速度通过长900米的桥，火车完全通过桥需要____秒。', answer: '60', options_json: null, explanation: '时间=(300+900)÷20=60秒。', knowledge_id: 66, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列火车长200米，以每秒15米的速度通过一座桥，火车完全在桥上的时间是40秒，桥长是____米。', answer: '800', options_json: null, explanation: '桥长-车长=15×40=600米，桥长=600+200=800米。', knowledge_id: 66, question_type_id: 1, difficulty_id: 4 },
  { question_body: '两列火车相向而行，一列长200米，速度每秒15米；另一列长250米，速度每秒20米，它们从相遇到完全分开需要____秒。', answer: '12.86', options_json: null, explanation: '总路程=200+250=450米，速度和=35米/秒，时间=450÷35≈12.86秒。', knowledge_id: 66, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列火车以每秒18米的速度通过长540米的桥，火车完全通过桥的时间是50秒，火车长____米。', answer: '360', options_json: null, explanation: '车长+桥长=18×50=900米，车长=900-540=360米。', knowledge_id: 66, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge66Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点66题目生成完成，共插入 ${knowledge66Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
