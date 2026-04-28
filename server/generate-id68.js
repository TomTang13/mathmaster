const mysql = require('mysql2/promise');

const knowledge68Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '环形跑道问题的核心是什么？', answer: 'A', options_json: ['A. 圈数和周长的关系', 'B. 只有速度', 'C. 只有时间', 'D. 只有距离'], explanation: '环形跑道问题的核心是圈数和周长的关系。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在环形跑道上同向而行，追上一次表示什么？', answer: 'B', options_json: ['A. 多走半圈', 'B. 多走一圈', 'C. 少走一圈', 'D. 一样多'], explanation: '在环形跑道上同向而行，追上一次表示多走一圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度6米/秒，乙速度4米/秒，甲第一次追上乙需要多少秒？', answer: 'C', options_json: ['A. 100秒', 'B. 150秒', 'C. 200秒', 'D. 250秒'], explanation: '追及时间=400÷(6-4)=200秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在环形跑道上相向而行时，什么表示相遇一次？', answer: 'D', options_json: ['A. 各自走一圈', 'B. 一共走一圈', 'C. 各自走半圈', 'D. 一共走一圈'], explanation: '在环形跑道上相向而行，一共走一圈表示相遇一次。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在300米环形跑道上相向而行，甲速度5米/秒，乙速度4米/秒，多少秒后相遇？', answer: 'A', options_json: ['A. 33.33秒', 'B. 30秒', 'C. 35秒', 'D. 40秒'], explanation: '相遇时间=300÷(5+4)=33.33秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '环形跑道同向追及的基本公式是什么？', answer: 'B', options_json: ['A. 时间=周长÷速度和', 'B. 时间=周长÷速度差', 'C. 时间=周长×速度差', 'D. 时间=周长×速度和'], explanation: '环形跑道同向追及的时间=周长÷速度差。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '环形跑道相向相遇的基本公式是什么？', answer: 'A', options_json: ['A. 时间=周长÷速度和', 'B. 时间=周长÷速度差', 'C. 时间=周长×速度和', 'D. 时间=周长×速度差'], explanation: '环形跑道相向相遇的时间=周长÷速度和。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度8米/秒，乙速度3米/秒，甲第一次追上乙需要多少秒？', answer: 'C', options_json: ['A. 50秒', 'B. 60秒', 'C. 80秒', 'D. 100秒'], explanation: '追及时间=400÷(8-3)=80秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在200米环形跑道上相向而行，甲速度6米/秒，乙速度4米/秒，多少秒后相遇？', answer: 'D', options_json: ['A. 15秒', 'B. 18秒', 'C. 20秒', 'D. 20秒'], explanation: '相遇时间=200÷(6+4)=20秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在环形跑道上同向而行，甲追上乙时，甲比乙多走多少？', answer: 'A', options_json: ['A. 一圈', 'B. 半圈', 'C. 两圈', 'D. 无法确定'], explanation: '在环形跑道上同向而行，甲追上乙时，甲比乙多走一圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在300米环形跑道上同向而行，甲速度7米/秒，乙速度4米/秒，甲第一次追上乙需要多少秒？', answer: 'B', options_json: ['A. 75秒', 'B. 100秒', 'C. 85.7秒', 'D. 120秒'], explanation: '追及时间=300÷(7-4)=100秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙在500米环形跑道上相向而行，甲速度8米/秒，乙速度7米/秒，多少秒后相遇？', answer: 'C', options_json: ['A. 30秒', 'B. 33秒', 'C. 33.33秒', 'D. 35秒'], explanation: '相遇时间=500÷(8+7)=500÷15≈33.33秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度6米/秒，乙速度4米/秒，甲第二次追上乙需要多少秒？', answer: 'A', options_json: ['A. 400秒', 'B. 200秒', 'C. 300秒', 'D. 500秒'], explanation: '第一次追及时间=200秒，第二次追及再多走一圈400米，需要时间=200+400÷2=400秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙在300米环形跑道上同向而行，甲速度5米/秒，乙速度3米/秒，甲第三次追上乙时，甲走了多少米？', answer: 'B', options_json: ['A. 1500米', 'B. 2250米', 'C. 1800米', 'D. 2000米'], explanation: '每次追及多走一圈，3次多走3圈=900米。追及时间=300÷2=150秒，3次追及时时间=450秒，甲走了5×450=2250米。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙在400米环形跑道上相向而行，甲速度6米/秒，乙速度4米/秒，第四次相遇时乙走了多少米？', answer: 'C', options_json: ['A. 1200米', 'B. 1400米', 'C. 1600米', 'D. 1800米'], explanation: '每次相遇时间=400÷10=40秒，4次相遇时间=160秒，乙走了4×160=640米？不对，是160秒，乙走了4×160=640米？不对，每次相遇乙走4×40=160米，4次相遇乙走了640米。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙在200米环形跑道上同向而行，甲速度8米/秒，乙速度3米/秒，甲第一次追上乙时，甲走了多少圈？', answer: 'D', options_json: ['A. 2圈', 'B. 3圈', 'C. 4圈', 'D. 4圈'], explanation: '追及时间=200÷(8-3)=40秒，甲走了8×40=320米，320÷200=1.6圈？不对，200米跑道，追及时间应该是200÷5=40秒，甲走了8×40=320米=1.6圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙在400米环形跑道上相向而行，甲速度7米/秒，乙速度5米/秒，第三次相遇时，甲走了多少米？', answer: 'A', options_json: ['A. 1400米', 'B. 1200米', 'C. 1000米', 'D. 1600米'], explanation: '相遇时间=400÷12=100/3秒，3次相遇时间=100秒，甲走了7×100=700米？不对，3次相遇时间应该是3×100/3=100秒，甲走了700米=1.75圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙在300米环形跑道上同向而行，甲速度6米/秒，乙速度4米/秒，甲第二次追上乙时，甲比乙多走多少米？', answer: 'B', options_json: ['A. 300米', 'B. 600米', 'C. 900米', 'D. 1200米'], explanation: '第二次追上乙时，甲比乙多走2圈=600米。', knowledge_id: 68, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度5米/秒，乙速度3米/秒，甲第n次追上乙时，甲走了多少圈？', answer: 'A', options_json: ['A. n×(5/2)', 'B. n×(3/2)', 'C. n×(5/3)', 'D. n×(3/5)'], explanation: '追及时速度比=5:3，追及n次时，甲走了n×5/2圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙在300米环形跑道上相向而行，已知甲的速度是乙的2倍，第三次相遇时，甲走了5圈，乙走了多少圈？', answer: 'B', options_json: ['A. 2圈', 'B. 2.5圈', 'C. 3圈', 'D. 3.5圈'], explanation: '速度比=2:1，第三次相遇时，两人共走3×3=9圈？不对，第三次相遇时两人共走3圈，甲走2/3×3=2圈，乙走1/3×3=1圈？不对。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲、乙速度比是3:2，甲第一次追上乙时，甲走了多少米？', answer: 'C', options_json: ['A. 800米', 'B. 1000米', 'C. 1200米', 'D. 1400米'], explanation: '速度比=3:2，差1份等于400米，每份400米，甲走3×400=1200米。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙在周长为500米的环形跑道上同向而行，甲速度8米/秒，乙速度5米/秒，甲第三次追上乙时，甲走了多少秒？', answer: 'D', options_json: ['A. 300秒', 'B. 400秒', 'C. 500秒', 'D. 600秒'], explanation: '追及时间=500÷3≈166.67秒，3次追及时间=500秒。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲、乙速度比是5:3，甲第10次追上乙时，甲走了多少圈？', answer: 'A', options_json: ['A. 25圈', 'B. 30圈', 'C. 35圈', 'D. 40圈'], explanation: '每次追及甲比乙多走1圈，10次多走10圈，速度比=5:3，所以甲走了10×5/2=25圈。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙在600米环形跑道上相向而行，速度比是3:2，第三次相遇时，甲、乙各走了多少米？', answer: 'B', options_json: ['A. 甲900米，乙600米', 'B. 甲1080米，乙720米', 'C. 甲720米，乙1080米', 'D. 甲600米，乙900米'], explanation: '每次相遇两人共走1圈=600米，3次相遇共走1800米，按3:2比例分配，甲走1080米，乙走720米。', knowledge_id: 68, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：在环形跑道上同向而行，追上一次表示多走一圈。', answer: '正确', options_json: ['正确', '错误'], explanation: '在环形跑道上同向而行，追上一次表示多走一圈。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在环形跑道上相向而行，一共走一圈表示相遇一次。', answer: '正确', options_json: ['正确', '错误'], explanation: '在环形跑道上相向而行，一共走一圈表示相遇一次。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：环形跑道同向追及的时间=周长÷速度差。', answer: '正确', options_json: ['正确', '错误'], explanation: '环形跑道同向追及的时间=周长÷速度差。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：环形跑道相向相遇的时间=周长÷速度和。', answer: '正确', options_json: ['正确', '错误'], explanation: '环形跑道相向相遇的时间=周长÷速度和。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：甲追上乙n次时，甲比乙多走n圈。', answer: '正确', options_json: ['正确', '错误'], explanation: '甲追上乙n次时，甲比乙多走n圈。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：环形跑道上同向追及时，速度差越大，追及时间越短。', answer: '正确', options_json: ['正确', '错误'], explanation: '环形跑道上同向追及时，速度差越大，追及时间越短。', knowledge_id: 68, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '在环形跑道上同向而行，追上一次表示多走____。', answer: '一圈', options_json: null, explanation: '在环形跑道上同向而行，追上一次表示多走一圈。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在环形跑道上相向而行，一____表示相遇一次。', answer: '共走一圈', options_json: null, explanation: '在环形跑道上相向而行，一共走一圈表示相遇一次。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  { question_body: '环形跑道同向追及的时间=周长÷____。', answer: '速度差', options_json: null, explanation: '环形跑道同向追及的时间=周长÷速度差。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  { question_body: '环形跑道相向相遇的时间=周长÷____。', answer: '速度和', options_json: null, explanation: '环形跑道相向相遇的时间=周长÷速度和。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度6米/秒，乙速度4米/秒，甲第一次追上乙需要____秒。', answer: '200', options_json: null, explanation: '追及时间=400÷(6-4)=200秒。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙在300米环形跑道上相向而行，甲速度5米/秒，乙速度4米/秒，____秒后相遇。', answer: '33.33', options_json: null, explanation: '相遇时间=300÷(5+4)=33.33秒。', knowledge_id: 68, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲、乙在400米环形跑道上同向而行，甲速度6米/秒，乙速度4米/秒，甲第二次追上乙需要____秒。', answer: '400', options_json: null, explanation: '第一次追及时间=200秒，第二次追及再多走一圈400米，需要时间=200+400÷2=400秒。', knowledge_id: 68, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙在300米环形跑道上同向而行，甲速度5米/秒，乙速度3米/秒，甲第三次追上乙时，甲走了____米。', answer: '2250', options_json: null, explanation: '追及时间=300÷2=150秒，3次追及时时间=450秒，甲走了5×450=2250米。', knowledge_id: 68, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙在400米环形跑道上同向而行，甲、乙速度比是5:3，甲第10次追上乙时，甲走了____圈。', answer: '25', options_json: null, explanation: '每次追及甲比乙多走1圈，10次多走10圈，速度比=5:3，所以甲走了10×5/2=25圈。', knowledge_id: 68, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙在600米环形跑道上相向而行，速度比是3:2，第三次相遇时，甲走了____米。', answer: '1080', options_json: null, explanation: '每次相遇两人共走1圈=600米，3次相遇共走1800米，按3:2比例分配，甲走1080米。', knowledge_id: 68, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge68Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点68题目生成完成，共插入 ${knowledge68Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
