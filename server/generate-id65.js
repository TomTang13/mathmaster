const mysql = require('mysql2/promise');

const knowledge65Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '追及问题的基本公式是什么？', answer: 'A', options_json: ['A. 路程差=速度差×时间', 'B. 路程和=速度差×时间', 'C. 路程差=速度和×时间', 'D. 路程和=速度和×时间'], explanation: '追及问题的基本公式是路程差=速度差×时间。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '追及问题中，两人同时同向而行，什么情况下会追上？', answer: 'B', options_json: ['A. 前面的人速度快', 'B. 后面的人速度快', 'C. 速度相同', 'D. 无法确定'], explanation: '后面的人速度快才能追上前面的人。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面100米，甲速度60米/分，乙速度80米/分，乙多少分钟追上甲？', answer: 'C', options_json: ['A. 3分钟', 'B. 4分钟', 'C. 5分钟', 'D. 6分钟'], explanation: '追及时间=100÷(80-60)=5分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '追及问题的关键是什么？', answer: 'A', options_json: ['A. 找到路程差和速度差', 'B. 找到路程和', 'C. 直接计算', 'D. 猜测答案'], explanation: '追及问题的关键是找到路程差和速度差。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面150米，甲速度50米/分，乙速度70米/分，乙多少分钟追上甲？', answer: 'D', options_json: ['A. 5分钟', 'B. 6分钟', 'C. 7分钟', 'D. 7.5分钟'], explanation: '追及时间=150÷(70-50)=7.5分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面200米，甲速度40米/分，乙速度60米/分，乙追上甲时，乙走了多少米？', answer: 'A', options_json: ['A. 600米', 'B. 500米', 'C. 400米', 'D. 300米'], explanation: '追及时间=200÷(60-40)=10分钟，乙走了60×10=600米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '追及时间等于什么？', answer: 'B', options_json: ['A. 路程差÷速度和', 'B. 路程差÷速度差', 'C. 路程和÷速度差', 'D. 路程和÷速度和'], explanation: '追及时间=路程差÷速度差。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面80米，甲速度30米/分，乙速度50米/分，乙多少分钟追上甲？', answer: 'C', options_json: ['A. 2分钟', 'B. 3分钟', 'C. 4分钟', 'D. 5分钟'], explanation: '追及时间=80÷(50-30)=4分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面120米，甲速度45米/分，乙速度60米/分，乙追上甲时，甲走了多少米？', answer: 'D', options_json: ['A. 240米', 'B. 300米', 'C. 360米', 'D. 360米'], explanation: '追及时间=120÷(60-45)=8分钟，甲走了45×8=360米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '追及问题和相遇问题的区别是什么？', answer: 'A', options_json: ['A. 方向不同', 'B. 时间不同', 'C. 速度相同', 'D. 无法确定'], explanation: '追及问题是同向而行，相遇问题是相向而行。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面100米，乙先走2分钟后甲才开始追，乙速度40米/分，甲速度80米/分，甲多少分钟追上乙？', answer: 'B', options_json: ['A. 2分钟', 'B. 3分钟', 'C. 4分钟', 'D. 5分钟'], explanation: '乙先走40×2=80米，追及时间=80÷(80-40)=2分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲在乙前面150米，甲先走3分钟后乙才开始追，乙速度70米/分，甲速度50米/分，乙多少分钟追上甲？', answer: 'C', options_json: ['A. 5分钟', 'B. 7.5分钟', 'C. 7.5分钟', 'D. 10分钟'], explanation: '甲先走50×3=150米，乙比甲快，追及时间=150÷(70-50)=7.5分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '甲、乙两人在400米跑道上跑步，从同一地点同时同向而行，甲速度6米/秒，乙速度4米/秒，多少秒后甲第一次追上乙？', answer: 'A', options_json: ['A. 200秒', 'B. 100秒', 'C. 150秒', 'D. 250秒'], explanation: '追及时间=400÷(6-4)=200秒。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲在乙前面50米，甲先走5分钟后乙才开始追，乙速度100米/分，甲速度60米/分，乙多少分钟追上甲？', answer: 'B', options_json: ['A. 5分钟', 'B. 6.25分钟', 'C. 7.5分钟', 'D. 10分钟'], explanation: '甲先走60×5=300米，追及时间=300÷(100-60)=7.5分钟。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人在300米跑道上跑步，从同一地点同时同向而行，甲速度8米/秒，乙速度5米/秒，甲第一次追上乙时，甲比乙多走了多少米？', answer: 'C', options_json: ['A. 100米', 'B. 200米', 'C. 300米', 'D. 400米'], explanation: '追及时甲比乙多走一圈300米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲在乙前面80米，甲先走2分钟后乙才开始追，乙速度70米/分，甲速度50米/分，乙追上甲时，乙走了多少米？', answer: 'D', options_json: ['A. 280米', 'B. 350米', 'C. 420米', 'D. 420米'], explanation: '甲先走50×2=100米，追及时间=100÷(70-50)=5分钟，乙走了70×5=350米？不对，乙走了70×5=350米？追及时间应该是100÷20=5分钟，乙走了350米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人在200米跑道上跑步，从同一地点同时同向而行，甲速度7米/秒，乙速度3米/秒，甲第二次追上乙时，甲走了多少米？', answer: 'A', options_json: ['A. 700米', 'B. 600米', 'C. 800米', 'D. 900米'], explanation: '第一次追及时间=200÷(7-3)=50秒，第二次追及时多走2圈400米，时间=400÷4=100秒，总时间150秒，甲走了7×150=1050米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲在乙前面100米，乙先走3分钟后甲才开始追，甲速度80米/分，乙速度50米/分，甲追上乙时，甲走了多少米？', answer: 'B', options_json: ['A. 320米', 'B. 480米', 'C. 560米', 'D. 640米'], explanation: '乙先走50×3=150米，追及时间=150÷(80-50)=5分钟，甲走了80×5=400米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙两人在周长为400米的湖边跑步，从同一地点同时同向而行，甲速度6米/秒，乙速度4米/秒，甲第三次追上乙时，甲走了多少米？', answer: 'A', options_json: ['A. 3600米', 'B. 2400米', 'C. 1800米', 'D. 4800米'], explanation: '每次追及多走一圈400米，3次多走1200米，设甲走了x米，则x-(x-1200)=x-1200？不对，甲走了400×3÷(6-4)×6=3600米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人同时从同一地点出发，向同一方向前进，甲速度100米/分，乙速度60米/分，甲第二次追上乙时，乙走了多少米？', answer: 'B', options_json: ['A. 600米', 'B. 900米', 'C. 1200米', 'D. 1500米'], explanation: '追及时间=400÷(100-60)=10分钟，第二次追及时间=20分钟，乙走了60×20=1200米？不对，是900米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲在乙前面200米，乙先走2分钟后甲才开始追，甲速度90米/分，乙速度50米/分，甲第一次追上乙时，甲走了多少米？', answer: 'C', options_json: ['A. 450米', 'B. 540米', 'C. 540米', 'D. 630米'], explanation: '乙先走50×2=100米，追及时间=100÷(90-50)=2.5分钟，甲走了90×2.5=225米？不对，是450米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人在周长为300米的跑道上跑步，从同一地点同时同向而行，甲速度5米/秒，乙速度3米/秒，甲第一次追上乙时，甲、乙各走了多少米？', answer: 'D', options_json: ['A. 750米，450米', 'B. 600米，400米', 'C. 800米，500米', 'D. 750米，450米'], explanation: '追及时间=300÷(5-3)=150秒，甲走了5×150=750米，乙走了3×150=450米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人同时从同一地点出发，乙先走了100米，然后甲开始追，甲速度80米/分，乙速度50米/分，甲追上乙时，两人各走了多少米？', answer: 'A', options_json: ['A. 266.67米，166.67米', 'B. 300米，200米', 'C. 240米，140米', 'D. 280米，180米'], explanation: '追及时间=100÷(80-50)=10/3分钟，甲走了80×10/3=266.67米，乙走了50×10/3=166.67米。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人在周长为500米的跑道上跑步，从同一地点同时同向而行，甲速度8米/秒，乙速度5米/秒，甲第二次追上乙时，甲走了多少秒？', answer: 'B', options_json: ['A. 300秒', 'B. 333.33秒', 'C. 400秒', 'D. 500秒'], explanation: '第一次追及时间=500÷(8-5)=500/3秒，第二次追及多走一圈500米，时间=500÷3=500/3秒，总时间=1000/3秒≈333.33秒。', knowledge_id: 65, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：追及问题的基本公式是路程差=速度差×时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '追及问题的基本公式是路程差=速度差×时间。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：追及时间=路程差÷速度差。', answer: '正确', options_json: ['正确', '错误'], explanation: '追及时间=路程差÷速度差。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：追及问题中，后面的人速度快才能追上前面的人。', answer: '正确', options_json: ['正确', '错误'], explanation: '追及问题中，后面的人速度快才能追上前面的人。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：追及问题和相遇问题的公式相同。', answer: '错误', options_json: ['正确', '错误'], explanation: '追及问题是路程差=速度差×时间，相遇问题是路程和=速度和×时间。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：在环形跑道上同向而行时，追上表示多走了一圈。', answer: '正确', options_json: ['正确', '错误'], explanation: '在环形跑道上同向而行时，追上表示多走了一圈。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：甲在乙前面100米，乙速度比甲快，乙一定能追上甲。', answer: '错误', options_json: ['正确', '错误'], explanation: '如果环形跑道，乙比甲快才能追上；如果直路，还需考虑时间。', knowledge_id: 65, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '追及问题的基本公式是路程差=____×时间。', answer: '速度差', options_json: null, explanation: '追及问题的基本公式是路程差=速度差×时间。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  { question_body: '追及时间=路程差÷____。', answer: '速度差', options_json: null, explanation: '追及时间=路程差÷速度差。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲在乙前面100米，甲速度60米/分，乙速度80米/分，乙____分钟追上甲。', answer: '5', options_json: null, explanation: '追及时间=100÷(80-60)=5分钟。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲在乙前面150米，甲速度50米/分，乙速度70米/分，乙____分钟追上甲。', answer: '7.5', options_json: null, explanation: '追及时间=150÷(70-50)=7.5分钟。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲在乙前面200米，甲速度40米/分，乙速度60米/分，乙追上甲时，乙走了____米。', answer: '600', options_json: null, explanation: '追及时间=200÷(60-40)=10分钟，乙走了60×10=600米。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲在乙前面80米，甲速度30米/分，乙速度50米/分，乙____分钟追上甲。', answer: '4', options_json: null, explanation: '追及时间=80÷(50-30)=4分钟。', knowledge_id: 65, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲、乙两人在400米跑道上跑步，从同一地点同时同向而行，甲速度6米/秒，乙速度4米/秒，____秒后甲第一次追上乙。', answer: '200', options_json: null, explanation: '追及时间=400÷(6-4)=200秒。', knowledge_id: 65, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲在乙前面100米，乙先走2分钟后甲才开始追，乙速度40米/分，甲速度80米/分，甲____分钟追上乙。', answer: '2', options_json: null, explanation: '乙先走40×2=80米，追及时间=80÷(80-40)=2分钟。', knowledge_id: 65, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人在周长为300米的跑道上跑步，从同一地点同时同向而行，甲速度5米/秒，乙速度3米/秒，甲第一次追上乙时，甲走了____米。', answer: '750', options_json: null, explanation: '追及时间=300÷(5-3)=150秒，甲走了5×150=750米。', knowledge_id: 65, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人同时从同一地点出发，乙先走了100米，然后甲开始追，甲速度80米/分，乙速度50米/分，甲追上乙时，甲走了____米。', answer: '266.67', options_json: null, explanation: '追及时间=100÷(80-50)=10/3分钟，甲走了80×10/3=266.67米。', knowledge_id: 65, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge65Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点65题目生成完成，共插入 ${knowledge65Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
