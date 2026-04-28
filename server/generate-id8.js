const mysql = require('mysql2/promise');

const knowledge8Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '今年小明8岁，爸爸32岁。爸爸比小明大几岁？', answer: 'C', options_json: ['A. 22岁', 'B. 23岁', 'C. 24岁', 'D. 25岁'], explanation: '年龄差=32-8=24岁，永远不变。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年妈妈36岁，儿子9岁。5年后妈妈多少岁？', answer: 'B', options_json: ['A. 40岁', 'B. 41岁', 'C. 42岁', 'D. 43岁'], explanation: '5年后妈妈=36+5=41岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爷爷65岁，孙子5岁。几年前爷爷60岁？', answer: 'A', options_json: ['A. 5年', 'B. 6年', 'C. 4年', 'D. 3年'], explanation: '65-60=5年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年姐姐12岁，妹妹6岁。姐姐比妹妹大几岁？', answer: 'C', options_json: ['A. 4岁', 'B. 5岁', 'C. 6岁', 'D. 7岁'], explanation: '年龄差=12-6=6岁，永远不变。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年父亲40岁，儿子10岁。10年后父亲多少岁？', answer: 'C', options_json: ['A. 48岁', 'B. 49岁', 'C. 50岁', 'D. 52岁'], explanation: '10年后父亲=40+10=50岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年哥哥15岁，弟弟9岁。3年前弟弟多少岁？', answer: 'B', options_json: ['A. 5岁', 'B. 6岁', 'C. 7岁', 'D. 8岁'], explanation: '3年前弟弟=9-3=6岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小明和爸爸的年龄和是44岁。3年后年龄和是多少岁？', answer: 'C', options_json: ['A. 47岁', 'B. 48岁', 'C. 50岁', 'D. 53岁'], explanation: '3年后两人都长3岁，年龄和增加6岁，44+6=50岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小红10岁，妈妈34岁。妈妈比小红大几岁？', answer: 'B', options_json: ['A. 22岁', 'B. 24岁', 'C. 26岁', 'D. 28岁'], explanation: '年龄差=34-10=24岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爷爷70岁，爸爸40岁。爷爷比爸爸大几岁？', answer: 'C', options_json: ['A. 28岁', 'B. 29岁', 'C. 30岁', 'D. 32岁'], explanation: '年龄差=70-40=30岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小明12岁，5年前小明几岁？', answer: 'A', options_json: ['A. 7岁', 'B. 8岁', 'C. 6岁', 'D. 9岁'], explanation: '5年前=12-5=7岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年妈妈30岁，儿子6岁。几年后妈妈36岁？', answer: 'B', options_json: ['A. 4年', 'B. 6年', 'C. 5年', 'D. 7年'], explanation: '36-30=6年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爸爸35岁，儿子7岁。爸爸是儿子的几倍？', answer: 'C', options_json: ['A. 4倍', 'B. 6倍', 'C. 5倍', 'D. 7倍'], explanation: '35÷7=5倍。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '今年小明8岁，爸爸32岁。几年后爸爸年龄是小明的3倍？', answer: 'B', options_json: ['A. 2年', 'B. 4年', 'C. 6年', 'D. 8年'], explanation: '年龄差24岁不变。爸爸是小明3倍时，差2份，24÷2=12岁（小明），12-8=4年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年爷爷65岁，孙子5岁。几年后爷爷年龄是孙子的5倍？', answer: 'C', options_json: ['A. 5年', 'B. 8年', 'C. 10年', 'D. 12年'], explanation: '年龄差60岁不变。爷爷是孙子5倍时，差4份，60÷4=15岁（孙子），15-5=10年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年姐姐12岁，妹妹6岁。当两人年龄和为40岁时，姐姐多少岁？', answer: 'C', options_json: ['A. 20岁', 'B. 22岁', 'C. 23岁', 'D. 25岁'], explanation: '年龄差6岁不变。和40差6，姐姐=(40+6)÷2=23岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年哥哥15岁，弟弟9岁。哥哥年龄是弟弟2倍时，哥哥几岁？', answer: 'C', options_json: ['A. 10岁', 'B. 11岁', 'C. 12岁', 'D. 18岁'], explanation: '差6岁，哥哥是弟弟2倍时差1份=6岁，弟弟6岁，哥哥12岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年小明和爸爸的年龄和是44岁，3年前年龄和是多少岁？', answer: 'B', options_json: ['A. 36岁', 'B. 38岁', 'C. 40岁', 'D. 42岁'], explanation: '3年前两人都少3岁，年龄和减少6岁，44-6=38岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年妈妈38岁，儿子8岁。几年前妈妈年龄是儿子的6倍？', answer: 'B', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(38-x)=6(8-x) → 38-x=48-6x → 5x=10 → x=2。2年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '今年父亲38岁，儿子8岁。几年前父亲年龄是儿子的7倍？', answer: 'C', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(38-x)=7(8-x) → 38-x=56-7x → 6x=18 → x=3。3年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年小明和爷爷年龄和是70岁，爷爷比小明大50岁。小明今年几岁？', answer: 'A', options_json: ['A. 10岁', 'B. 12岁', 'C. 15岁', 'D. 20岁'], explanation: '小明=(70-50)÷2=10岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年甲乙两人年龄和是50岁，5年前甲是乙的3倍。甲今年多少岁？', answer: 'C', options_json: ['A. 30岁', 'B. 32岁', 'C. 35岁', 'D. 38岁'], explanation: '5年前年龄和=50-10=40岁。乙=40÷(3+1)=10岁，甲=10×3=30岁。今年甲=30+5=35岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年爸爸45岁，妈妈43岁，儿子14岁。几年后爸爸妈妈年龄和是儿子的6倍？', answer: 'A', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(45+x)+(43+x)=6(14+x) → 88+2x=84+6x → 4x=4 → x=1。1年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年小明和爸爸的年龄和是44岁，3年后爸爸年龄是小明的4倍。小明今年几岁？', answer: 'B', options_json: ['A. 5岁', 'B. 7岁', 'C. 8岁', 'D. 9岁'], explanation: '设小明今年x岁，爸爸(44-x)岁。3年后：44-x+3=4(x+3) → 47-x=4x+12 → 5x=35 → x=7。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年爷爷62岁，孙子8岁。几年后爷爷年龄是孙子的7倍？', answer: 'A', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(62+x)=7(8+x) → 62+x=56+7x → 6x=6 → x=1。1年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：两个人的年龄差永远不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '每过一年，两人都长一岁，所以年龄差不变。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：5年前爸爸比小明大25岁，5年后爸爸比小明大30岁。', answer: '错误', options_json: ['正确', '错误'], explanation: '年龄差永远不变，始终是25岁。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：今年小明8岁，爸爸32岁，10年后小明18岁，爸爸42岁。', answer: '正确', options_json: ['正确', '错误'], explanation: '10年后两人都长10岁。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：年龄问题中，两人的年龄和每年增加2岁。', answer: '正确', options_json: ['正确', '错误'], explanation: '每过一年，两人都长一岁，所以年龄和增加2岁。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：今年哥哥10岁，弟弟5岁，2年前哥哥是弟弟的2倍。', answer: '错误', options_json: ['正确', '错误'], explanation: '2年前哥哥8岁，弟弟3岁，8÷3不是整数倍。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：今年妈妈30岁，儿子6岁，4年后妈妈34岁，儿子10岁。', answer: '正确', options_json: ['正确', '错误'], explanation: '4年后妈妈=30+4=34岁，儿子=6+4=10岁。', knowledge_id: 8, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '今年小明8岁，爸爸32岁。爸爸比小明大____岁。', answer: '24', options_json: null, explanation: '年龄差=32-8=24岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今年妈妈36岁，儿子9岁。5年后妈妈____岁。', answer: '41', options_json: null, explanation: '5年后妈妈=36+5=41岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今年姐姐12岁，妹妹6岁。姐姐比妹妹大____岁。', answer: '6', options_json: null, explanation: '年龄差=12-6=6岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今年小明和爸爸的年龄和是44岁。3年后年龄和是____岁。', answer: '50', options_json: null, explanation: '3年后年龄和增加6岁，44+6=50岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今年爷爷70岁，爸爸40岁。爷爷比爸爸大____岁。', answer: '30', options_json: null, explanation: '年龄差=70-40=30岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今年爸爸35岁，儿子7岁。爸爸是儿子的____倍。', answer: '5', options_json: null, explanation: '35÷7=5倍。', knowledge_id: 8, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '今年小明8岁，爸爸32岁。____年后爸爸年龄是小明的3倍。', answer: '4', options_json: null, explanation: '年龄差24岁不变。爸爸是小明3倍时，小明=24÷2=12岁，12-8=4年后。', knowledge_id: 8, question_type_id: 1, difficulty_id: 4 },
  { question_body: '今年爷爷65岁，孙子5岁。____年后爷爷年龄是孙子的5倍。', answer: '10', options_json: null, explanation: '年龄差60岁不变。爷爷是孙子5倍时，孙子=60÷4=15岁，15-5=10年后。', knowledge_id: 8, question_type_id: 1, difficulty_id: 4 },
  { question_body: '今年小明和爷爷年龄和是70岁，爷爷比小明大50岁。小明今年____岁。', answer: '10', options_json: null, explanation: '小明=(70-50)÷2=10岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 4 },
  { question_body: '今年甲乙两人年龄和是50岁，5年前甲是乙的3倍。甲今年____岁。', answer: '35', options_json: null, explanation: '5年前年龄和=40岁。乙=40÷4=10岁，甲=30岁。今年甲=30+5=35岁。', knowledge_id: 8, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge8Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点8题目生成完成，共插入 ${knowledge8Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
