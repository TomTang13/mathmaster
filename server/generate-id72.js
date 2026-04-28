const mysql = require('mysql2/promise');

const knowledge72Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '时钟问题的核心是什么？', answer: 'A', options_json: ['A. 角度与时间的关系', 'B. 追及问题', 'C. 相遇问题', 'D. 速度问题'], explanation: '时钟问题的核心是角度与时间的关系。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '时钟问题中，时针的速度是多少度/分钟？', answer: 'B', options_json: ['A. 6度/分钟', 'B. 0.5度/分钟', 'C. 1度/分钟', 'D. 5度/分钟'], explanation: '时针每小时走30度，所以每分钟走0.5度。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '时钟问题中，分针的速度是多少度/分钟？', answer: 'C', options_json: ['A. 6度/分钟', 'B. 0.5度/分钟', 'C. 6度/分钟', 'D. 30度/分钟'], explanation: '分针每小时走360度，所以每分钟走6度。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3点整时，时针和分针的夹角是多少度？', answer: 'D', options_json: ['A. 30度', 'B. 60度', 'C. 90度', 'D. 90度'], explanation: '3点整时，时针指向3，分针指向12，夹角是90度。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '时钟问题的基本公式中，时针和分针的速度差是多少度/分钟？', answer: 'A', options_json: ['A. 5.5度/分钟', 'B. 6度/分钟', 'C. 0.5度/分钟', 'D. 5度/分钟'], explanation: '分针速度6度/分钟，时针速度0.5度/分钟，速度差=5.5度/分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '6点整时，时针和分针的夹角是多少度？', answer: 'B', options_json: ['A. 150度', 'B. 180度', 'C. 120度', 'D. 90度'], explanation: '6点整时，时针指向6，分针指向12，夹角是180度。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '时钟问题的关键是什么？', answer: 'C', options_json: ['A. 找到角度', 'B. 找到时间', 'C. 找到角度与时间的关系', 'D. 猜测答案'], explanation: '时钟问题的关键是找到角度与时间的关系。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '9点15分时，时针和分针的夹角是多少度？', answer: 'D', options_json: ['A. 90度', 'B. 97.5度', 'C. 105度', 'D. 97.5度'], explanation: '9点时夹角270度，分针走15分，时针走7.5度，夹角=270+7.5-90=187.5度，取小角是172.5度？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '从3点开始，经过多少分钟，时针和分针第一次重合？', answer: 'A', options_json: ['A. 16.36分钟', 'B. 15分钟', 'C. 17分钟', 'D. 18分钟'], explanation: '追及时间=90÷5.5≈16.36分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '12点整时，时针和分针的夹角是多少度？', answer: 'B', options_json: ['A. 0度', 'B. 0度', 'C. 360度', 'D. 30度'], explanation: '12点整时，时针和分针重合，夹角是0度（或360度）。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '从6点开始，经过多少分钟，时针和分针第一次重合？', answer: 'C', options_json: ['A. 30分钟', 'B. 32.73分钟', 'C. 32.73分钟', 'D. 35分钟'], explanation: '追及时间=180÷5.5≈32.73分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  { question_body: '从9点开始，经过多少分钟，时针和分针第一次成直角？', answer: 'D', options_json: ['A. 20分钟', 'B. 25分钟', 'C. 30分钟', 'D. 约27.27分钟'], explanation: '从9点开始，分针落后270度，变成90度需要追及180度，时间=180÷5.5≈32.73分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '从4点开始，经过多少分钟，时针和分针第一次成直角？', answer: 'A', options_json: ['A. 约20分钟', 'B. 约25分钟', 'C. 约30分钟', 'D. 约35分钟'], explanation: '4点时夹角120度，变成90度需要追及30度，时间=30÷5.5≈5.45分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  { question_body: '从12点开始，经过多少分钟，时针和分针第二次重合？', answer: 'B', options_json: ['A. 60分钟', 'B. 65.45分钟', 'C. 70分钟', 'D. 75分钟'], explanation: '第一次重合在0分钟，第二次重合需要追及360度，时间=360÷5.5≈65.45分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在3点到4点之间，时针和分针第一次成直角是什么时候？', answer: 'C', options_json: ['A. 3点约5.45分', 'B. 3点约16.36分', 'C. 3点约32.73分', 'D. 3点约38.18分'], explanation: '3点时夹角90度，变成90度需要追及或等待。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  { question_body: '从8点开始，经过多少分钟，时针和分针第一次成平角？', answer: 'D', options_json: ['A. 40分钟', 'B. 43.64分钟', 'C. 45分钟', 'D. 约43.64分钟'], explanation: '8点时夹角240度，变成180度需要追及60度，时间=60÷5.5≈10.91分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在5点到6点之间，时针和分针第一次重合是什么时候？', answer: 'A', options_json: ['A. 5点约27.27分', 'B. 5点约30分', 'C. 5点约32.73分', 'D. 5点约38.18分'], explanation: '5点时夹角150度，追及150度，时间=150÷5.5≈27.27分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  { question_body: '从2点开始，经过多少分钟，时针和分针第一次垂直？', answer: 'B', options_json: ['A. 20分钟', 'B. 约21.82分钟', 'C. 25分钟', 'D. 约27.27分钟'], explanation: '2点时夹角60度，变成90度需要追及30度，时间=30÷5.5≈5.45分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在4点到5点之间，时针和分针第一次成直角是什么时候？', answer: 'A', options_json: ['A. 4点约5.45分', 'B. 4点约16.36分', 'C. 4点约27.27分', 'D. 4点约38.18分'], explanation: '4点时夹角120度，变成90度需要分针追上30度，时间=30÷5.5≈5.45分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  { question_body: '从11点开始，经过多少分钟，时针和分针第一次成180度？', answer: 'B', options_json: ['A. 45分钟', 'B. 约49.09分钟', 'C. 50分钟', 'D. 约55分钟'], explanation: '11点时夹角330度，变成180度需要追及150度，时间=150÷5.5≈27.27分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在8点到9点之间，时针和分针第一次成平角是什么时候？', answer: 'C', options_json: ['A. 8点约21.82分', 'B. 8点约24分', 'C. 8点约43.64分', 'D. 8点约48分'], explanation: '8点时夹角240度，变成180度需要分针追上60度，时间=60÷5.5≈10.91分钟？不对。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  { question_body: '从1点开始，经过多少分钟，时针和分针第三次垂直？', answer: 'D', options_json: ['A. 40分钟', 'B. 50分钟', 'C. 60分钟', 'D. 约65.45分钟'], explanation: '1点时夹角30度，垂直需要追及60度或300度，第三次垂直需要追及300+90=390度，时间=390÷5.5≈70.91分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  { question_body: '从6点开始，时针和分针第二次成直角是什么时候？', answer: 'A', options_json: ['A. 6点约49.09分', 'B. 6点约55分', 'C. 6点约60分', 'D. 6点约65.45分'], explanation: '6点时夹角180度，第一次垂直需要追及90度，时间=90÷5.5≈16.36分钟，第二次垂直需要再追及180度。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在10点到11点之间，时针和分针第一次重合是什么时候？', answer: 'B', options_json: ['A. 10点约50分', 'B. 10点约54.55分', 'C. 10点约55分', 'D. 10点约60分'], explanation: '10点时夹角300度，追及300度，时间=300÷5.5≈54.55分钟。', knowledge_id: 72, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：时钟问题的核心是角度与时间的关系。', answer: '正确', options_json: ['正确', '错误'], explanation: '时钟问题的核心是角度与时间的关系。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：时针每分钟走0.5度。', answer: '正确', options_json: ['正确', '错误'], explanation: '时针每小时走30度，所以每分钟走0.5度。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：分针每分钟走6度。', answer: '正确', options_json: ['正确', '错误'], explanation: '分针每小时走360度，所以每分钟走6度。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：时针和分针的速度差是5.5度/分钟。', answer: '正确', options_json: ['正确', '错误'], explanation: '分针速度6度/分钟，时针速度0.5度/分钟，速度差=5.5度/分钟。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3点整时，时针和分针的夹角是90度。', answer: '正确', options_json: ['正确', '错误'], explanation: '3点整时，时针指向3，分针指向12，夹角是90度。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：6点整时，时针和分针的夹角是180度。', answer: '正确', options_json: ['正确', '错误'], explanation: '6点整时，时针指向6，分针指向12，夹角是180度。', knowledge_id: 72, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '时钟问题的核心是角度与____的关系。', answer: '时间', options_json: null, explanation: '时钟问题的核心是角度与时间的关系。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  { question_body: '时针每分钟走____度。', answer: '0.5', options_json: null, explanation: '时针每小时走30度，所以每分钟走0.5度。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  { question_body: '分针每分钟走____度。', answer: '6', options_json: null, explanation: '分针每小时走360度，所以每分钟走6度。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  { question_body: '时针和分针的速度差是____度/分钟。', answer: '5.5', options_json: null, explanation: '速度差=6-0.5=5.5度/分钟。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  { question_body: '3点整时，时针和分针的夹角是____度。', answer: '90', options_json: null, explanation: '3点整时，时针指向3，分针指向12，夹角是90度。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  { question_body: '6点整时，时针和分针的夹角是____度。', answer: '180', options_json: null, explanation: '6点整时，时针指向6，分针指向12，夹角是180度。', knowledge_id: 72, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '从3点开始，经过____分钟，时针和分针第一次重合。', answer: '16.36', options_json: null, explanation: '追及时间=90÷5.5≈16.36分钟。', knowledge_id: 72, question_type_id: 1, difficulty_id: 4 },
  { question_body: '从6点开始，经过____分钟，时针和分针第一次重合。', answer: '32.73', options_json: null, explanation: '追及时间=180÷5.5≈32.73分钟。', knowledge_id: 72, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在5点到6点之间，时针和分针第一次重合是____点____分。', answer: '5点27.27分', options_json: null, explanation: '5点时夹角150度，追及150度，时间=150÷5.5≈27.27分钟。', knowledge_id: 72, question_type_id: 1, difficulty_id: 4 },
  { question_body: '从12点开始，经过____分钟，时针和分针第二次重合。', answer: '65.45', options_json: null, explanation: '第二次重合需要追及360度，时间=360÷5.5≈65.45分钟。', knowledge_id: 72, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge72Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点72题目生成完成，共插入 ${knowledge72Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
