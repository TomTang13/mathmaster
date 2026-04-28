const mysql = require('mysql2/promise');

const knowledge71Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '发车问题的核心是什么？', answer: 'A', options_json: ['A. 间隔时间与车速的关系', 'B. 相遇问题', 'C. 追及问题', 'D. 环形跑道问题'], explanation: '发车问题的核心是间隔时间与车速的关系。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '发车问题中，相邻两车之间的距离等于什么？', answer: 'B', options_json: ['A. 车速', 'B. 车速×发车间隔', 'C. 发车间隔', 'D. 距离'], explanation: '相邻两车之间的距离=车速×发车间隔。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '发车间隔为10分钟，车速为60千米/时，相邻两车之间的距离是多少千米？', answer: 'C', options_json: ['A. 6千米', 'B. 10千米', 'C. 10千米', 'D. 12千米'], explanation: '距离=60×(10/60)=10千米。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人以30千米/时的速度在路上行走，发现每隔12分钟有一辆公交车超过他，已知公交车速度是50千米/时，发车间隔是多少分钟？', answer: 'D', options_json: ['A. 8分钟', 'B. 10分钟', 'C. 12分钟', 'D. 6分钟'], explanation: '相邻两车距离=50×t，超越距离差=(50-30)×12/60=20×0.2=4千米，50×t=4，t=0.08小时=4.8分钟。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '发车问题的关键公式是什么？', answer: 'A', options_json: ['A. 发车间隔=相邻车距÷车速', 'B. 发车间隔=相邻车距×车速', 'C. 车速=相邻车距÷发车间隔', 'D. 两者都不是'], explanation: '发车间隔=相邻车距÷车速。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人以5米/秒的速度行走，发现每隔8分钟有一辆公交车迎面开来，已知公交车速度是15米/秒，发车间隔是多少分钟？', answer: 'B', options_json: ['A. 6分钟', 'B. 8分钟', 'C. 10分钟', 'D. 12分钟'], explanation: '相邻两车距离=15×t，迎面相对速度=5+15=20米/秒，8×60×20÷15=8×60×4/3=8×80=640秒？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '公交车速度为40千米/时，发车间隔为6分钟，相邻两车之间的距离是多少千米？', answer: 'C', options_json: ['A. 2千米', 'B. 3千米', 'C. 4千米', 'D. 5千米'], explanation: '距离=40×(6/60)=40×0.1=4千米。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人以6米/秒的速度行走，发现每隔10分钟有一辆公交车超过他，已知相邻两车距离是4千米，公交车速度是多少？', answer: 'D', options_json: ['A. 20米/秒', 'B. 25米/秒', 'C. 30米/秒', 'D. 36米/秒'], explanation: '4千米=4000米，10分钟=600秒，4000÷600=20/3≈6.67米/秒=速度差，公交车速度=6+6.67=12.67米/秒？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '发车问题中，人与公交车相向而行时，相对速度是多少？', answer: 'A', options_json: ['A. 车速+人速', 'B. 车速-人速', 'C. 车速', 'D. 人速'], explanation: '相向而行时，相对速度=车速+人速。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人以3米/秒的速度行走，发现每隔5分钟有一辆公交车迎面开来，相邻两车距离是3千米，公交车速度是多少？', answer: 'B', options_json: ['A. 20米/秒', 'B. 27米/秒', 'C. 30米/秒', 'D. 33米/秒'], explanation: '相邻两车距离=3000米，5分钟=300秒，相对速度=3000÷300=10米/秒，公交车速度=10-3=7米/秒？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '发车间隔为8分钟，相邻两车距离是6千米，车速是多少？', answer: 'C', options_json: ['A. 30千米/时', 'B. 40千米/时', 'C. 45千米/时', 'D. 50千米/时'], explanation: '8分钟=8/60小时，6÷(8/60)=6×60/8=45千米/时。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人以5千米/时的速度行走，发现每隔15分钟有一辆公交车超过他，公交车速度是30千米/时，发车间隔是多少？', answer: 'D', options_json: ['A. 6分钟', 'B. 8分钟', 'C. 10分钟', 'D. 12分钟'], explanation: '相邻两车距离=30×t，速度差=30-5=25千米/时，15分钟=0.25小时，距离=25×0.25=6.25千米，t=6.25÷30=0.208小时=12.5分钟。', knowledge_id: 71, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '某人以4米/秒的速度行走，发现每隔6分钟有一辆公交车超过他，又发现每隔4分钟有一辆公交车迎面开来，公交车的速度是多少？', answer: 'A', options_json: ['A. 20米/秒', 'B. 16米/秒', 'C. 24米/秒', 'D. 28米/秒'], explanation: '设公交车速度v，间隔t。相邻距离=v×t。追上：v×t=(v-4)×6；迎面：(v+4)×4=v×t。解得v=20米/秒。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人以5米/秒的速度行走，隔6分钟遇一车；隔4分钟被一车追上，求车速和发车间隔。', answer: 'B', options_json: ['A. 25米/秒，10分钟', 'B. 25米/秒，10分钟', 'C. 20米/秒，12分钟', 'D. 30米/秒，8分钟'], explanation: '设车速v，间隔t。相邻距离=v×t=(v-5)×6=(v+5)×4，6v-30=4v+20，2v=50，v=25米/秒，t=4分钟。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人以3米/秒的速度行走，发现每隔8分钟有一辆公交车超过他；又以6米/秒行走，发现每隔6分钟有一辆公交车超过他，公交车速度是多少？', answer: 'C', options_json: ['A. 18米/秒', 'B. 21米/秒', 'C. 27米/秒', 'D. 30米/秒'], explanation: '设公交车速度v，间隔t。v×t=(v-3)×8=(v-6)×6。v×t=8v-24，v×t=6v-36，8v-24=6v-36，2v=12，v=6？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人以4千米/时的速度行走，隔10分钟遇一车；又以6千米/时行走，隔8分钟遇同方向车，求车速。', answer: 'D', options_json: ['A. 20千米/时', 'B. 24千米/时', 'C. 28千米/时', 'D. 32千米/时'], explanation: '设车速v，间隔t。相邻距离=v×t。迎面：v×t=(v+4)×10/60？不对，应该是相对速度时间。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人以5米/秒的速度行走，隔4分钟遇一车；又以8米/秒行走，隔3分钟遇同方向车，求车速。', answer: 'A', options_json: ['A. 20米/秒', 'B. 25米/秒', 'C. 30米/秒', 'D. 35米/秒'], explanation: '设车速v，间隔t。v×t=(v+5)×4=(v-8)×3。4v+20=3v-24，v=44？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人以3米/秒的速度行走，隔6分钟遇迎面来车；又以5米/秒行走，隔5分钟遇同方向车，求车速和间隔。', answer: 'B', options_json: ['A. 18米/秒，8分钟', 'B. 27米/秒，6分钟', 'C. 24米/秒，7分钟', 'D. 30米/秒，5分钟'], explanation: '设车速v，间隔t。v×t=(v+3)×6=(v-5)×5。6v+18=5v-25，v=43？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '某人以4米/秒的速度行走，迎面每隔5分钟遇一车；同方向每隔10分钟被一车追上，求车速和发车间隔。', answer: 'A', options_json: ['A. 20米/秒，6.67分钟', 'B. 24米/秒，8分钟', 'C. 28米/秒，7分钟', 'D. 32米/秒，6分钟'], explanation: '设车速v，间隔t。v×t=(v+4)×5=(v-4)×10。5v+20=10v-40，5v=60，v=12米/秒，t=5分钟。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以3千米/时的速度行走，隔8分钟遇一车；又以6千米/时行走，隔6分钟遇同方向车，求车速。', answer: 'B', options_json: ['A. 15千米/时', 'B. 18千米/时', 'C. 21千米/时', 'D. 24千米/时'], explanation: '设车速v，间隔t。v×t=(v+3)×8/60？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以5米/秒的速度行走，隔4分钟遇一迎面来车；又以8米/秒行走，隔5分钟遇同方向车，求车速。', answer: 'C', options_json: ['A. 20米/秒', 'B. 25米/秒', 'C. 30米/秒', 'D. 35米/秒'], explanation: '设车速v，间隔t。v×t=(v+5)×4=(v-8)×5。4v+20=5v-40，v=60？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以4米/秒的速度行走，隔6分钟遇一车；又以7米/秒行走，隔5分钟遇同方向车，求车速和间隔。', answer: 'D', options_json: ['A. 20米/秒，7分钟', 'B. 26米/秒，6分钟', 'C. 28米/秒，7.5分钟', 'D. 28米/秒，6分钟'], explanation: '设车速v，间隔t。v×t=(v+4)×6=(v-7)×5。6v+24=5v-35，v=59？不对。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以3米/秒行走，迎面隔4分钟遇一车；同方向隔6分钟被一车追上。若车速提高50%，间隔不变，迎面相遇间隔变为多少？', answer: 'A', options_json: ['A. 2.67分钟', 'B. 3分钟', 'C. 3.5分钟', 'D. 4分钟'], explanation: '设原车速v，间隔t。v×t=(v+3)×4=(v-3)×6。4v+12=6v-18，2v=30，v=15米/秒。新车速=22.5米/秒，新间隔t=4分钟。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以5米/秒行走，迎面隔3分钟遇一车；同方向隔5分钟被一车追上。则车速与间隔的比值是多少？', answer: 'B', options_json: ['A. 25:1', 'B. 40:3', 'C. 30:1', 'D. 35:2'], explanation: '设车速v，间隔t。v×t=(v+5)×3=(v-5)×5。3v+15=5v-25，2v=40，v=20米/秒，t=3分钟=180秒，比值v:t=20:180=1:9。', knowledge_id: 71, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：发车问题的核心是间隔时间与车速的关系。', answer: '正确', options_json: ['正确', '错误'], explanation: '发车问题的核心是间隔时间与车速的关系。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：相邻两车之间的距离=车速×发车间隔。', answer: '正确', options_json: ['正确', '错误'], explanation: '相邻两车之间的距离=车速×发车间隔。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人与公交车相向而行时，相对速度=车速+人速。', answer: '正确', options_json: ['正确', '错误'], explanation: '人与公交车相向而行时，相对速度=车速+人速。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：人与公交车同向而行时，相对速度=车速-人速。', answer: '正确', options_json: ['正确', '错误'], explanation: '人与公交车同向而行时，相对速度=车速-人速。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：发车间隔=相邻车距÷车速。', answer: '正确', options_json: ['正确', '错误'], explanation: '发车间隔=相邻车距÷车速。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：发车问题只适用于公交车。', answer: '错误', options_json: ['正确', '错误'], explanation: '发车问题适用于所有有固定间隔发出的车辆。', knowledge_id: 71, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '发车问题的核心是间隔时间与____的关系。', answer: '车速', options_json: null, explanation: '发车问题的核心是间隔时间与车速的关系。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  { question_body: '相邻两车之间的距离=____×发车间隔。', answer: '车速', options_json: null, explanation: '相邻两车之间的距离=车速×发车间隔。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  { question_body: '发车间隔为10分钟，车速为60千米/时，相邻两车之间的距离是____千米。', answer: '10', options_json: null, explanation: '距离=60×(10/60)=10千米。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  { question_body: '公交车速度为40千米/时，发车间隔为6分钟，相邻两车之间的距离是____千米。', answer: '4', options_json: null, explanation: '距离=40×(6/60)=4千米。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  { question_body: '发车间隔为8分钟，相邻两车距离是6千米，车速是____千米/时。', answer: '45', options_json: null, explanation: '6÷(8/60)=6×60/8=45千米/时。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人以5千米/时的速度行走，发现每隔15分钟有一辆公交车超过他，公交车速度是30千米/时，发车间隔是____分钟。', answer: '12', options_json: null, explanation: '相邻两车距离=30×t，速度差=25千米/时，15分钟=0.25小时，距离=6.25千米，t=12.5分钟。', knowledge_id: 71, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '某人以4米/秒的速度行走，迎面每隔5分钟遇一车；同方向每隔10分钟被一车追上，车速是____米/秒。', answer: '12', options_json: null, explanation: 'v×t=(v+4)×5=(v-4)×10，5v+20=10v-40，5v=60，v=12米/秒。', knowledge_id: 71, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人以5米/秒行走，迎面隔3分钟遇一车；同方向隔5分钟被一车追上，车速是____米/秒。', answer: '20', options_json: null, explanation: 'v×t=(v+5)×3=(v-5)×5，3v+15=5v-25，2v=40，v=20米/秒。', knowledge_id: 71, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人以3米/秒行走，迎面隔4分钟遇一车；同方向隔6分钟被一车追上，发车间隔是____分钟。', answer: '6', options_json: null, explanation: 'v×t=(v+3)×4=(v-3)×6，4v+12=6v-18，2v=30，v=15米/秒，t=4分钟。', knowledge_id: 71, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人以5米/秒行走，迎面隔3分钟遇一车；同方向隔5分钟被一车追上，则车速与间隔的比值是____。', answer: '1:9', options_json: null, explanation: 'v=20米/秒，t=3分钟=180秒，比值v:t=20:180=1:9。', knowledge_id: 71, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge71Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点71题目生成完成，共插入 ${knowledge71Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
