const mysql = require('mysql2/promise');

const knowledge58Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '工程问题的基本公式是什么？', answer: 'A', options_json: ['A. 工作量=工作效率×工作时间', 'B. 工作量=工作效率÷工作时间', 'C. 工作效率=工作量×工作时间', 'D. 工作时间=工作量×工作效率'], explanation: '工程问题的基本公式是工作量=工作效率×工作时间。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '工作效率的单位是什么？', answer: 'B', options_json: ['A. 工作量/单位时间', 'B. 单位工作量/单位时间', 'C. 单位时间/工作量', 'D. 工作量/时间'], explanation: '工作效率的单位是单位工作量/单位时间。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要10天完成，甲的工作效率是多少？', answer: 'C', options_json: ['A. 1/5', 'B. 1/8', 'C. 1/10', 'D. 1/12'], explanation: '工作效率=1÷工作时间=1/10。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，乙的工作效率是1/8，乙单独做需要多少天完成？', answer: 'D', options_json: ['A. 6', 'B. 7', 'C. 9', 'D. 8'], explanation: '工作时间=1÷工作效率=8天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要10天，乙单独做需要15天，甲的工作效率比乙高多少？', answer: 'A', options_json: ['A. 1/30', 'B. 1/20', 'C. 1/15', 'D. 1/10'], explanation: '甲的工作效率=1/10，乙的工作效率=1/15，差值=1/10-1/15=1/30。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '工程问题中，通常将总工作量看作什么？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. 100', 'D. 任意数'], explanation: '工程问题中，通常将总工作量看作1。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要8天，乙单独做需要12天，两人合作的工作效率是多少？', answer: 'C', options_json: ['A. 1/10', 'B. 5/24', 'C. 5/24', 'D. 7/24'], explanation: '甲的工作效率=1/8，乙的工作效率=1/12，合作效率=1/8+1/12=5/24。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，两人合作的工作效率是1/6，合作完成需要多少天？', answer: 'D', options_json: ['A. 4', 'B. 5', 'C. 7', 'D. 6'], explanation: '工作时间=1÷合作效率=6天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '工程问题的解决关键是什么？', answer: 'A', options_json: ['A. 找到工作效率', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '工程问题的解决关键是找到工作效率。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要12天，乙单独做需要18天，甲的工作效率是乙的多少倍？', answer: 'B', options_json: ['A. 1.2', 'B. 1.5', 'C. 1.8', 'D. 2'], explanation: '甲的工作效率=1/12，乙的工作效率=1/18，倍数= (1/12)÷(1/18)=1.5。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要15天，乙单独做需要20天，两人合作的工作效率是多少？', answer: 'C', options_json: ['A. 7/60', 'B. 8/60', 'C. 7/60', 'D. 9/60'], explanation: '甲的工作效率=1/15，乙的工作效率=1/20，合作效率=1/15+1/20=7/60。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要20天，乙单独做需要30天，两人合作完成需要多少天？', answer: 'D', options_json: ['A. 10', 'B. 11', 'C. 13', 'D. 12'], explanation: '合作效率=1/20+1/30=1/12，工作时间=1÷1/12=12天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一项工程，甲单独做需要10天，乙单独做需要15天，两人合作3天后，剩下的由甲单独做，还需要多少天？', answer: 'B', options_json: ['A. 3', 'B. 5', 'C. 7', 'D. 9'], explanation: '合作3天完成的工作量=3×(1/10+1/15)=3×1/6=1/2，剩下的工作量=1/2，甲需要的时间=1/2÷1/10=5天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲单独做需要8天，乙单独做需要12天，丙单独做需要24天，三人合作需要多少天完成？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 4', 'D. 5'], explanation: '合作效率=1/8+1/12+1/24=6/24=1/4，工作时间=1÷1/4=4天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲、乙合作需要6天完成，甲单独做需要10天，乙单独做需要多少天？', answer: 'A', options_json: ['A. 15', 'B. 12', 'C. 18', 'D. 20'], explanation: '乙的工作效率=1/6-1/10=1/15，乙单独做需要15天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲单独做需要12天，乙单独做需要18天，甲先做3天后，乙加入合作，还需要多少天完成？', answer: 'B', options_json: ['A. 5', 'B. 5.4', 'C. 6', 'D. 7'], explanation: '甲先做3天完成的工作量=3×1/12=1/4，剩下的工作量=3/4，合作效率=1/12+1/18=5/36，需要的时间=3/4÷5/36=5.4天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲、乙合作需要8天完成，乙、丙合作需要10天完成，甲、丙合作需要12天完成，三人合作需要多少天完成？', answer: 'C', options_json: ['A. 5', 'B. 6', 'C. 120/37', 'D. 7'], explanation: '甲+乙=1/8，乙+丙=1/10，甲+丙=1/12，2(甲+乙+丙)=1/8+1/10+1/12=37/120，甲+乙+丙=37/240，工作时间=240/37≈6.49天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一项工程，甲单独做需要20天，乙单独做需要30天，甲、乙合作一段时间后，乙离开，甲继续做5天完成，甲、乙合作了多少天？', answer: 'D', options_json: ['A. 6', 'B. 7', 'C. 8', 'D. 9'], explanation: '设合作了x天，x(1/20+1/30)+5×1/20=1，x×1/12+1/4=1，x×1/12=3/4，x=9天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一项工程，甲单独做需要15天，乙单独做需要20天，丙单独做需要25天，甲、乙先合作3天，然后丙加入，还需要多少天完成？', answer: 'A', options_json: ['A. 4.55', 'B. 5', 'C. 5.5', 'D. 6'], explanation: '甲、乙合作3天完成的工作量=3×(1/15+1/20)=3×7/60=7/20，剩下的工作量=13/20，三人合作效率=1/15+1/20+1/25=47/300，需要的时间=13/20÷47/300≈4.55天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲单独做需要10天，乙单独做需要15天，甲先做2天后，乙加入，两人合作一段时间后，甲离开，乙单独做3天完成，两人合作了多少天？', answer: 'B', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '甲先做2天完成的工作量=2×1/10=1/5，乙单独做3天完成的工作量=3×1/15=1/5，剩下的工作量=3/5，合作效率=1/10+1/15=1/6，合作时间=3/5÷1/6=3.6天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲、乙合作需要12天完成，甲单独做需要20天，乙单独做需要多少天？', answer: 'C', options_json: ['A. 25', 'B. 28', 'C. 30', 'D. 35'], explanation: '乙的工作效率=1/12-1/20=1/30，乙单独做需要30天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲单独做需要8天，乙单独做需要12天，丙单独做需要16天，甲、乙先合作2天，然后丙加入，三人合作完成，还需要多少天？', answer: 'D', options_json: ['A. 2', 'B. 2.5', 'C. 3', 'D. 2.4'], explanation: '甲、乙合作2天完成的工作量=2×(1/8+1/12)=2×5/24=5/12，剩下的工作量=7/12，三人合作效率=1/8+1/12+1/16=13/48，需要的时间=7/12÷13/48≈2.46天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲单独做需要15天，乙单独做需要20天，甲、乙合作完成工程的3/4需要多少天？', answer: 'A', options_json: ['A. 45/7', 'B. 40/7', 'C. 50/7', 'D. 55/7'], explanation: '合作效率=1/15+1/20=7/60，完成3/4需要的时间=3/4÷7/60=45/7≈6.43天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一项工程，甲、乙、丙三人合作需要6天完成，甲、乙合作需要9天，乙、丙合作需要12天，甲单独做需要多少天？', answer: 'B', options_json: ['A. 18', 'B. 18', 'C. 20', 'D. 24'], explanation: '甲+乙+丙=1/6，甲+乙=1/9，乙+丙=1/12，丙=1/6-1/9=1/18，甲=1/6-1/12=1/12，甲单独做需要12天。', knowledge_id: 58, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：工程问题的基本公式是工作量=工作效率×工作时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '工程问题的基本公式是工作量=工作效率×工作时间。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：工程问题中，通常将总工作量看作1。', answer: '正确', options_json: ['正确', '错误'], explanation: '工程问题中，通常将总工作量看作1。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：合作工作效率等于各工作效率之和。', answer: '正确', options_json: ['正确', '错误'], explanation: '合作工作效率等于各工作效率之和。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：工作效率=工作量÷工作时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '工作效率=工作量÷工作时间。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：工作时间=工作量÷工作效率。', answer: '正确', options_json: ['正确', '错误'], explanation: '工作时间=工作量÷工作效率。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一项工程，甲单独做需要10天，乙单独做需要15天，两人合作需要25天。', answer: '错误', options_json: ['正确', '错误'], explanation: '合作效率=1/10+1/15=1/6，合作需要6天，不是25天。', knowledge_id: 58, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '工程问题的基本公式是工作量=____×工作时间。', answer: '工作效率', options_json: null, explanation: '工程问题的基本公式是工作量=工作效率×工作时间。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  { question_body: '工作效率=工作量÷____。', answer: '工作时间', options_json: null, explanation: '工作效率=工作量÷工作时间。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要10天完成，甲的工作效率是____。', answer: '1/10', options_json: null, explanation: '工作效率=1÷工作时间=1/10。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一项工程，乙的工作效率是1/8，乙单独做需要____天完成。', answer: '8', options_json: null, explanation: '工作时间=1÷工作效率=8天。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  { question_body: '工程问题中，通常将总工作量看作____。', answer: '1', options_json: null, explanation: '工程问题中，通常将总工作量看作1。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一项工程，甲单独做需要8天，乙单独做需要12天，两人合作的工作效率是____。', answer: '5/24', options_json: null, explanation: '甲的工作效率=1/8，乙的工作效率=1/12，合作效率=1/8+1/12=5/24。', knowledge_id: 58, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一项工程，甲单独做需要10天，乙单独做需要15天，两人合作3天后，剩下的由甲单独做，还需要____天。', answer: '5', options_json: null, explanation: '合作3天完成的工作量=3×(1/10+1/15)=1/2，剩下的工作量=1/2，甲需要的时间=1/2÷1/10=5天。', knowledge_id: 58, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一项工程，甲、乙合作需要6天完成，甲单独做需要10天，乙单独做需要____天。', answer: '15', options_json: null, explanation: '乙的工作效率=1/6-1/10=1/15，乙单独做需要15天。', knowledge_id: 58, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一项工程，甲单独做需要12天，乙单独做需要18天，甲先做3天后，乙加入合作，还需要____天完成。', answer: '5.4', options_json: null, explanation: '甲先做3天完成的工作量=3×1/12=1/4，剩下的工作量=3/4，合作效率=1/12+1/18=5/36，需要的时间=3/4÷5/36=5.4天。', knowledge_id: 58, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一项工程，甲单独做需要20天，乙单独做需要30天，甲、乙合作完成需要____天。', answer: '12', options_json: null, explanation: '合作效率=1/20+1/30=1/12，工作时间=1÷1/12=12天。', knowledge_id: 58, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge58Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点58题目生成完成，共插入 ${knowledge58Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
