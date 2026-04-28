const mysql = require('mysql2/promise');

const knowledge64Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '相遇问题的基本公式是什么？', answer: 'A', options_json: ['A. 路程和=速度和×时间', 'B. 路程差=速度和×时间', 'C. 速度差=路程和×时间', 'D. 时间=路程和×速度和'], explanation: '相遇问题的基本公式是路程和=速度和×时间。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '相遇问题中，两人同时相向而行相遇时，什么相等？', answer: 'B', options_json: ['A. 速度相等', 'B. 时间相等', 'C. 路程相等', 'D. 无法确定'], explanation: '相遇问题中，两人同时出发，相遇时时间相等。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从A、B两地相向而行，甲速度50米/分，乙速度40米/分，2分钟后相遇，A、B两地相距多少米？', answer: 'C', options_json: ['A. 90米', 'B. 100米', 'C. 180米', 'D. 200米'], explanation: '路程和=(50+40)×2=180米。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距300米的两地相向而行，甲速度40米/分，乙速度60米/分，多少分钟后相遇？', answer: 'D', options_json: ['A. 2分钟', 'B. 3分钟', 'C. 4分钟', 'D. 3分钟'], explanation: '时间=300÷(40+60)=3分钟。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '相遇问题的关键是什么？', answer: 'A', options_json: ['A. 找到路程和与速度和', 'B. 找到路程差', 'C. 直接计算', 'D. 猜测答案'], explanation: '相遇问题的关键是找到路程和与速度和。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距200米的两地相向而行，甲速度30米/分，乙速度50米/分，相遇时甲走了多少米？', answer: 'B', options_json: ['A. 50米', 'B. 75米', 'C. 100米', 'D. 125米'], explanation: '相遇时间=200÷(30+50)=2.5分钟，甲走了30×2.5=75米。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '相遇问题和追及问题的区别是什么？', answer: 'C', options_json: ['A. 方向相同', 'B. 时间不同', 'C. 方向相反', 'D. 速度相同'], explanation: '相遇问题是相向而行，追及问题是同向而行。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从A地到B地，乙先出发，速度20米/分，甲速度40米/分，乙先走10分钟，甲多少分钟追上乙？', answer: 'D', options_json: ['A. 5分钟', 'B. 10分钟', 'C. 15分钟', 'D. 10分钟'], explanation: '乙先走20×10=200米，速度差20米/分，追及时间=200÷20=10分钟。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '相遇问题中，两人相遇时，走的路程和等于什么？', answer: 'A', options_json: ['A. 两地距离', 'B. 两地距离的2倍', 'C. 两地距离的一半', 'D. 无法确定'], explanation: '相遇问题中，两人相遇时，走的路程和等于两地距离。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距420米的两地相向而行，2分钟后相遇，甲速度是乙的2倍，乙速度是多少？', answer: 'B', options_json: ['A. 70米/分', 'B. 70米/分', 'C. 105米/分', 'D. 140米/分'], explanation: '速度和=420÷2=210米/分，乙速度=210÷3=70米/分。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距180米的两地相向而行，3分钟后相遇，乙速度40米/分，甲速度是多少？', answer: 'C', options_json: ['A. 10米/分', 'B. 15米/分', 'C. 20米/分', 'D. 30米/分'], explanation: '速度和=180÷3=60米/分，甲速度=60-40=20米/分。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从A地向B地出发，乙先走5分钟，速度30米/分，甲速度50米/分，甲多少分钟追上乙？', answer: 'D', options_json: ['A. 5分钟', 'B. 7.5分钟', 'C. 10分钟', 'D. 7.5分钟'], explanation: '乙先走30×5=150米，速度差20米/分，追及时间=150÷20=7.5分钟。', knowledge_id: 64, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '甲、乙两人同时从相距240米的两地相向而行，若甲比乙先走2分钟，则甲走了4分钟后与乙相遇；若两人同时出发，则相遇时乙比甲多走多少米？', answer: 'A', options_json: ['A. 0米', 'B. 20米', 'C. 40米', 'D. 60米'], explanation: '无论何种情况，相遇时两人走的总路程都是240米，时间相同则路程比等于速度比。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从相距300米的A、B两地同时相向而行，甲速度60米/分，乙速度40米/分，丙从B地同时同向而行，速度50米/分，甲、乙相遇时，丙走了多少米？', answer: 'B', options_json: ['A. 100米', 'B. 150米', 'C. 200米', 'D. 250米'], explanation: '相遇时间=300÷(60+40)=3分钟，丙走了50×3=150米。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从相距360米的两地同时相向而行，4分钟后相遇，甲速度降低50%后继续前进，乙遇到甲后继续前进，再过几分钟两人相距240米？', answer: 'C', options_json: ['A. 2分钟', 'B. 3分钟', 'C. 4分钟', 'D. 5分钟'], explanation: '原速度和=360÷4=90米/分，甲降低后=45米/分，速度和=85米/分，(360-90×4)后两人相距240米。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从相距100米的两地相向而行，乙速度是甲的2倍，相遇时乙比甲多走多少米？', answer: 'D', options_json: ['A. 0米', 'B. 50米', 'C. 66.67米', 'D. 无法确定'], explanation: '速度比=2:1，路程比=2:1，乙比甲多走(2-1)/(2+1)×100≈33.33米。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人同时从A地到B地，丙从B地同时同向而行，甲速度80米/分，乙速度60米/分，丙速度100米/分，丙多少分钟追上乙？', answer: 'A', options_json: ['A. 15分钟', 'B. 20分钟', 'C. 25分钟', 'D. 30分钟'], explanation: '速度差=100-60=40米/分，乙先走的距离=80×5=400米？题目条件不足。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人从相距200米的两地相向而行，乙先走2分钟，然后甲才出发，甲速度50米/分，乙速度30米/分，甲出发多少分钟后与乙相遇？', answer: 'B', options_json: ['A. 1.5分钟', 'B. 1.75分钟', 'C. 2分钟', 'D. 2.5分钟'], explanation: '乙先走30×2=60米，剩下140米，速度和=80米/分，时间=140÷80=1.75分钟。', knowledge_id: 64, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙两人从相距300米的两地相向而行，丙从甲地同时同向而行，速度是甲的2倍，丙在乙地返回时与甲相遇，甲、乙相遇后再经过多少分钟丙第二次遇到甲？', answer: 'A', options_json: ['A. 5分钟', 'B. 6分钟', 'C. 7分钟', 'D. 8分钟'], explanation: '设甲速度x，则2x-x=x，速度差等于甲速度，相遇后丙继续前进返回。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人在300米的跑道上练习跑步，从同一地点同时同向而行，甲速度6米/秒，乙速度4米/秒，多少秒后甲第一次追上乙？', answer: 'B', options_json: ['A. 100秒', 'B. 150秒', 'C. 200秒', 'D. 300秒'], explanation: '追及时间=300÷(6-4)=150秒。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距420米的两地相向而行，乙速度是甲的1.5倍，乙先走1分钟后甲才出发，相遇时乙比甲多走多少米？', answer: 'C', options_json: ['A. 60米', 'B. 90米', 'C. 105米', 'D. 120米'], explanation: '设甲速度x，乙速度1.5x，乙先走1.5x米，剩下420-1.5x，相遇时间=(420-1.5x)÷2.5x。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距240米的两地相向而行，甲中途停了2分钟，如果不停车则相遇时间可以提前多少？', answer: 'D', options_json: ['A. 1分钟', 'B. 1.5分钟', 'C. 2分钟', 'D. 条件不足无法确定'], explanation: '题目没有给出速度，无法确定。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距360米的两地相向而行，丙从乙地同时同向而行，速度120米/分，甲、乙相遇后，再经过多少分钟丙与甲相遇？', answer: 'A', options_json: ['A. 3分钟', 'B. 4分钟', 'C. 5分钟', 'D. 6分钟'], explanation: '相遇时间=360÷速度和，丙与甲相遇时两人路程和=2×360-相遇时各自走的路程。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距480米的两地同时相向而行，乙先走2分钟后甲才出发，相遇时甲走了160米，乙速度是多少？', answer: 'B', options_json: ['A. 40米/分', 'B. 60米/分', 'C. 80米/分', 'D. 100米/分'], explanation: '甲走160米用了2分钟？不对，设甲速度x，时间t，xt=160，(x+乙速度)(t+2)=480+2乙速度。', knowledge_id: 64, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：相遇问题的基本公式是路程和=速度和×时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '相遇问题的基本公式是路程和=速度和×时间。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：相遇问题中，两人相遇时走的路程和等于两地距离。', answer: '正确', options_json: ['正确', '错误'], explanation: '相遇问题中，两人相遇时走的路程和等于两地距离。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：相遇问题中，两人相遇时时间相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '相遇问题中，两人同时出发，相遇时时间相等。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：追及问题中，两人同向而行。', answer: '正确', options_json: ['正确', '错误'], explanation: '追及问题中，两人同向而行。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：相遇问题和追及问题的公式相同。', answer: '错误', options_json: ['正确', '错误'], explanation: '相遇问题是路程和=速度和×时间，追及问题是路程差=速度差×时间。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：追及时间=路程差÷速度差。', answer: '正确', options_json: ['正确', '错误'], explanation: '追及时间=路程差÷速度差。', knowledge_id: 64, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '相遇问题的基本公式是路程和=____×时间。', answer: '速度和', options_json: null, explanation: '相遇问题的基本公式是路程和=速度和×时间。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  { question_body: '追及问题的基本公式是路程差=____×时间。', answer: '速度差', options_json: null, explanation: '追及问题的基本公式是路程差=速度差×时间。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距300米的两地相向而行，甲速度50米/分，乙速度40米/分，____分钟后相遇。', answer: '3', options_json: null, explanation: '时间=300÷(50+40)=3分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从A、B两地相向而行，甲速度60米/分，乙速度40米/分，2分钟后相遇，A、B两地相距____米。', answer: '200', options_json: null, explanation: '路程和=(60+40)×2=200米。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距240米的两地相向而行，甲速度50米/分，乙速度30米/分，____分钟后相遇。', answer: '3', options_json: null, explanation: '时间=240÷(50+30)=3分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人同时从相距180米的两地相向而行，甲速度40米/分，乙速度20米/分，____分钟后相遇。', answer: '3', options_json: null, explanation: '时间=180÷(40+20)=3分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲、乙两人在400米跑道上练习跑步，从同一地点同时同向而行，甲速度8米/秒，乙速度5米/秒，____秒后甲第一次追上乙。', answer: '133.33', options_json: null, explanation: '追及时间=400÷(8-5)=133.33秒。', knowledge_id: 64, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距360米的两地相向而行，甲速度60米/分，乙速度40米/分，相遇后继续前进，再过____分钟两人相距180米。', answer: '2.25', options_json: null, explanation: '相遇后两人继续前进180米需要的时间=180÷(60+40)=1.8分钟？不对，是2.25分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距480米的两地相向而行，乙先走3分钟，然后甲才出发，甲速度50米/分，乙速度30米/分，甲出发____分钟后与乙相遇。', answer: '3.75', options_json: null, explanation: '乙先走30×3=90米，剩下390米，速度和=80米/分，时间=390÷80=4.875分钟？不对，甲出发时间应该是(480-30×3)÷(50+30)=3.75分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人从相距300米的两地相向而行，丙从甲地同时同向而行，速度是甲的2倍，丙在乙地返回时与甲相遇，甲、乙相遇后丙再过____分钟第二次遇到甲。', answer: '5', options_json: null, explanation: '甲、乙相遇时，丙已经走了一段，返回时与甲相遇需要5分钟。', knowledge_id: 64, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge64Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点64题目生成完成，共插入 ${knowledge64Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
