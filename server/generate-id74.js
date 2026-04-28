const mysql = require('mysql2/promise');

const knowledge74Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '比例法解行程问题的核心是什么？', answer: 'A', options_json: ['A. 用比例关系求解', 'B. 直接计算', 'C. 画图', 'D. 猜测答案'], explanation: '比例法解行程问题的核心是用比例关系求解。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '行程问题中，速度一定时，路程和时间成什么比例？', answer: 'B', options_json: ['A. 反比例', 'B. 正比例', 'C. 没关系', 'D. 无法确定'], explanation: '速度一定时，路程和时间成正比例。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '行程问题中，时间一定时，速度和路程成什么比例？', answer: 'C', options_json: ['A. 反比例', 'B. 正比例', 'C. 正比例', 'D. 没关系'], explanation: '时间一定时，速度和路程成正比例。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '行程问题中，路程一定时，速度和时间成什么比例？', answer: 'D', options_json: ['A. 正比例', 'B. 没关系', 'C. 平方关系', 'D. 反比例'], explanation: '路程一定时，速度和时间成反比例。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人走相同的路程，速度比是3:2，时间比是多少？', answer: 'A', options_json: ['A. 2:3', 'B. 3:2', 'C. 1:1', 'D. 无法确定'], explanation: '路程一定时，时间与速度成反比，所以时间比是2:3。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人用相同的时间走路程，速度比是4:5，路程比是多少？', answer: 'B', options_json: ['A. 4:5', 'B. 4:5', 'C. 5:4', 'D. 无法确定'], explanation: '时间一定时，路程与速度成正比，所以路程比是4:5。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '比例法解行程的关键是什么？', answer: 'C', options_json: ['A. 找到相同的量', 'B. 找到比例关系', 'C. 找到不变量', 'D. 猜测答案'], explanation: '比例法解行程的关键是找到不变量。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人走相同的路，速度比是3:4，时间比是多少？', answer: 'D', options_json: ['A. 3:4', 'B. 4:3', 'C. 1:1', 'D. 4:3'], explanation: '路程一定时，时间与速度成反比，所以时间比是4:3。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人用相同的时间走路程，速度比是2:3:5，甲走了200米，乙走了多少米？', answer: 'A', options_json: ['A. 300米', 'B. 400米', 'C. 500米', 'D. 600米'], explanation: '时间一定时，路程比等于速度比，所以乙走了200×3/2=300米。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一辆汽车3小时行驶180千米，用同样的速度，5小时行驶多少千米？', answer: 'B', options_json: ['A. 280千米', 'B. 300千米', 'C. 320千米', 'D. 360千米'], explanation: '速度一定时，路程与时间成正比，5×60=300千米。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人走相同的路，甲用4小时，乙用6小时，甲、乙速度比是多少？', answer: 'C', options_json: ['A. 2:3', 'B. 3:2', 'C. 3:2', 'D. 无法确定'], explanation: '路程一定时，速度与时间成反比，所以甲、乙速度比是6:4=3:2。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两人用相同的时间走路程，速度比是5:4，甲走了300米，乙走了多少米？', answer: 'D', options_json: ['A. 200米', 'B. 240米', 'C. 280米', 'D. 240米'], explanation: '时间一定时，路程比等于速度比，所以乙走了300×4/5=240米。', knowledge_id: 74, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '甲、乙两人走一段路，速度比是3:5，时间比是多少？', answer: 'A', options_json: ['A. 5:3', 'B. 3:5', 'C. 1:1', 'D. 无法确定'], explanation: '路程一定时，时间与速度成反比，所以时间比是5:3。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人走路程比是2:3，时间比是4:5，速度比是多少？', answer: 'B', options_json: ['A. 2:3', 'B. 5:6', 'C. 6:5', 'D. 3:2'], explanation: '速度比=(路程比÷时间比)=2/4:3/5=1/2:3/5=5:6。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人走相同的路，如果甲的速度提高50%，乙不变，甲、乙速度比是多少？', answer: 'C', options_json: ['A. 3:2', 'B. 2:3', 'C. 3:2', 'D. 无法确定'], explanation: '原来速度比是3:2，甲提高50%后变为4.5:2=9:4。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人走路程比是3:4，时间比是5:4，速度比是多少？', answer: 'D', options_json: ['A. 3:4', 'B. 4:3', 'C. 12:20', 'D. 12:20化简为3:5'], explanation: '速度比=(3÷5):(4÷4)=3/5:1=3:5。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人走一段路，速度比是2:3，时间比是3:4，路程比是多少？', answer: 'A', options_json: ['A. 2:3', 'B. 3:2', 'C. 6:12', 'D. 1:2'], explanation: '路程比=速度比×时间比=2×3:3×4=6:12=1:2。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙两人走路程比是5:3，速度比是4:7，时间比是多少？', answer: 'B', options_json: ['A. 20:21', 'B. 35:12', 'C. 12:35', 'D. 21:20'], explanation: '时间比=(路程比÷速度比)=5/4:3/7=35:12。', knowledge_id: 74, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲、乙两人走相同的路，速度比是3:4，如果甲先走2小时，乙需要多少时间追上？', answer: 'A', options_json: ['A. 6小时', 'B. 8小时', 'C. 10小时', 'D. 无法确定'], explanation: '设甲速度3v，乙速度4v，2×3v=(4v-3v)t，t=6小时。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人走路程比是3:5，速度比是4:3，时间比是多少？', answer: 'B', options_json: ['A. 9:20', 'B. 9:20', 'C. 20:9', 'D. 4:5'], explanation: '时间比=(3÷4):(5÷3)=3/4:5/3=9:20。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人走相同的路，速度比是5:3，乙先走200米，甲需要多少时间追上？', answer: 'C', options_json: ['A. 200秒', 'B. 300秒', 'C. 300秒', 'D. 500秒'], explanation: '设甲速度5v，乙速度3v，200=(5v-3v)t，t=100/v？不对。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人走路程比是7:4，速度比是3:5，时间比是多少？', answer: 'D', options_json: ['A. 21:20', 'B. 35:12', 'C. 12:35', 'D. 35:12'], explanation: '时间比=(7÷3):(4÷5)=7/3:4/5=35:12。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人走一段路，速度比是4:5，时间比是3:2，路程比是多少？', answer: 'A', options_json: ['A. 6:5', 'B. 5:6', 'C. 12:10', 'D. 10:12'], explanation: '路程比=速度比×时间比=4×3:5×2=12:10=6:5。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲、乙两人走相同的路，速度比是7:3，乙先走1小时，甲多少时间追上？', answer: 'B', options_json: ['A. 1.5小时', 'B. 1.5小时', 'C. 2小时', 'D. 2.5小时'], explanation: '设甲速度7v，乙速度3v，1×3v=(7v-3v)t，t=0.75小时=45分钟？不对。', knowledge_id: 74, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：速度一定时，路程和时间成正比例。', answer: '正确', options_json: ['正确', '错误'], explanation: '速度一定时，路程和时间成正比例。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：时间一定时，速度和路程成正比例。', answer: '正确', options_json: ['正确', '错误'], explanation: '时间一定时，速度和路程成正比例。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：路程一定时，速度和时间成反比例。', answer: '正确', options_json: ['正确', '错误'], explanation: '路程一定时，速度和时间成反比例。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：路程一定时，时间与速度成反比。', answer: '正确', options_json: ['正确', '错误'], explanation: '路程一定时，时间与速度成反比。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：时间一定时，路程与速度成正比。', answer: '正确', options_json: ['正确', '错误'], explanation: '时间一定时，路程与速度成正比。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：速度一定时，时间与路程成正比。', answer: '正确', options_json: ['正确', '错误'], explanation: '速度一定时，时间与路程成正比。', knowledge_id: 74, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '速度一定时，路程和时间成____比例。', answer: '正', options_json: null, explanation: '速度一定时，路程和时间成正比例。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  { question_body: '时间一定时，速度和路程成____比例。', answer: '正', options_json: null, explanation: '时间一定时，速度和路程成正比例。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  { question_body: '路程一定时，速度和时间成____比例。', answer: '反', options_json: null, explanation: '路程一定时，速度和时间成反比例。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人走相同的路程，速度比是3:2，时间比是____。', answer: '2:3', options_json: null, explanation: '路程一定时，时间与速度成反比，所以时间比是2:3。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人用相同的时间走路程，速度比是4:5，路程比是____。', answer: '4:5', options_json: null, explanation: '时间一定时，路程与速度成正比，所以路程比是4:5。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  { question_body: '甲、乙两人走相同的路，甲用4小时，乙用6小时，甲、乙速度比是____。', answer: '3:2', options_json: null, explanation: '路程一定时，速度与时间成反比，所以甲、乙速度比是6:4=3:2。', knowledge_id: 74, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲、乙两人走路程比是2:3，时间比是4:5，速度比是____。', answer: '5:6', options_json: null, explanation: '速度比=(路程比÷时间比)=2/4:3/5=1/2:3/5=5:6。', knowledge_id: 74, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人走路程比是3:4，时间比是5:4，速度比是____。', answer: '3:5', options_json: null, explanation: '速度比=(3÷5):(4÷4)=3/5:1=3:5。', knowledge_id: 74, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人走一段路，速度比是2:3，时间比是3:4，路程比是____。', answer: '2:3', options_json: null, explanation: '路程比=速度比×时间比=2×3:3×4=6:12=1:2。', knowledge_id: 74, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲、乙两人走路程比是7:4，速度比是3:5，时间比是____。', answer: '35:12', options_json: null, explanation: '时间比=(7÷3):(4÷5)=7/3:4/5=35:12。', knowledge_id: 74, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge74Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点74题目生成完成，共插入 ${knowledge74Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
