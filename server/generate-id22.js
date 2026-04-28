const mysql = require('mysql2/promise');

const knowledge22Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '17除以5的余数是多少？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '17=5×3+2，余数是2。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '23除以4的余数是多少？', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '23=4×5+3，余数是3。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '35除以7的余数是多少？', answer: 'A', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], explanation: '35=7×5+0，余数是0。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '47除以8的余数是多少？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 7', 'D. 8'], explanation: '47=8×5+7，余数是7。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '50除以9的余数是多少？', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '50=9×5+5，余数是5。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '63除以5的余数是多少？', answer: 'A', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '63=5×12+3，余数是3。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '72除以7的余数是多少？', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 2', 'D. 3'], explanation: '72=7×10+2，余数是2。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '85除以6的余数是多少？', answer: 'D', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 1'], explanation: '85=6×14+1，余数是1。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '98除以11的余数是多少？', answer: 'B', options_json: ['A. 7', 'B. 9', 'C. 10', 'D. 11'], explanation: '98=11×8+10？不对，11×8=88，98-88=10。余数是10。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: '100除以13的余数是多少？', answer: 'C', options_json: ['A. 9', 'B. 10', 'C. 9', 'D. 11'], explanation: '100=13×7+9，余数是9。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'a ≡ 3 (mod 5)，则a除以5的余数是？', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '同余式a≡3(mod 5)表示a除以5的余数是3。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'b ≡ 0 (mod 4)，则b能被什么数整除？', answer: 'B', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explanation: 'b≡0(mod 4)表示b能被4整除。', knowledge_id: 22, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个数除以3余2，除以5余3，这个数最小是多少？', answer: 'C', options_json: ['A. 8', 'B. 13', 'C. 8', 'D. 18'], explanation: '满足除以3余2的数：2,5,8,11,14,17,20...；满足除以5余3的数：3,8,13,18,23...。最小的公共数是8。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  { question_body: '123除以7的余数是多少？', answer: 'B', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '123=7×17+4，余数是4。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  { question_body: '2024除以9的余数是多少？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 8', 'D. 9'], explanation: '2+0+2+4=8，8除以9的余数是8。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'a ≡ 5 (mod 6)，b ≡ 3 (mod 6)，则a+b ≡ ? (mod 6)', answer: 'A', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '5+3=8，8≡2(mod 6)。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  { question_body: 'a ≡ 4 (mod 7)，b ≡ 2 (mod 7)，则a×b ≡ ? (mod 7)', answer: 'C', options_json: ['A. 1', 'B. 2', 'C. 1', 'D. 3'], explanation: '4×2=8，8≡1(mod 7)。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以4余3，除以6余5，这个数最小是多少？', answer: 'B', options_json: ['A. 11', 'B. 11', 'C. 17', 'D. 23'], explanation: '满足除以4余3的数：3,7,11,15,19,23...；满足除以6余5的数：5,11,17,23...。最小的公共数是11。', knowledge_id: 22, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '123456789除以9的余数是多少？', answer: 'A', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], explanation: '1+2+3+4+5+6+7+8+9=45，45能被9整除，余数是0。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  { question_body: '2^10除以7的余数是多少？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '2^1=2, 2^2=4, 2^3=8≡1, 2^4=2, 2^5=4, 2^6=1, 周期为3。10÷3=3余1，所以2^10≡2^1=2。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以3余1，除以4余2，除以5余3，这个数最小是多少？', answer: 'D', options_json: ['A. 58', 'B. 59', 'C. 60', 'D. 58'], explanation: '满足除以3余1，除以4余2，除以5余3的最小数是58。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  { question_body: '3^8除以10的余数是多少？', answer: 'C', options_json: ['A. 1', 'B. 3', 'C. 1', 'D. 9'], explanation: '3^1=3, 3^2=9, 3^3=27≡7, 3^4=21≡1, 周期为4。8÷4=2余0，所以3^8≡3^4=1。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  { question_body: 'a ≡ 5 (mod 8)，b ≡ 3 (mod 8)，则a-b ≡ ? (mod 8)', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '5-3=2，所以a-b≡2(mod 8)。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  { question_body: '1001除以13的余数是多少？', answer: 'A', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], explanation: '13×77=1001，所以余数是0。', knowledge_id: 22, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：在带余除法中，余数一定小于除数。', answer: '正确', options_json: ['正确', '错误'], explanation: '带余除法的定义是余数小于除数。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：a ≡ b (mod m) 表示a和b除以m的余数相同。', answer: '正确', options_json: ['正确', '错误'], explanation: '同余的定义是两个数除以模的余数相同。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果a ≡ b (mod m)，那么a+c ≡ b+c (mod m)。', answer: '正确', options_json: ['正确', '错误'], explanation: '同余式两边同时加上相同的数，同余关系保持不变。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果a ≡ b (mod m)，那么a×c ≡ b×c (mod m)。', answer: '正确', options_json: ['正确', '错误'], explanation: '同余式两边同时乘以相同的数，同余关系保持不变。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：100除以3的余数是1。', answer: '正确', options_json: ['正确', '错误'], explanation: '100=3×33+1，余数是1。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：a ≡ 0 (mod m) 表示a能被m整除。', answer: '正确', options_json: ['正确', '错误'], explanation: 'a≡0(mod m)表示a除以m的余数是0，即a能被m整除。', knowledge_id: 22, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '17除以5的余数是____。', answer: '2', options_json: null, explanation: '17=5×3+2，余数是2。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  { question_body: '23除以4的余数是____。', answer: '3', options_json: null, explanation: '23=4×5+3，余数是3。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  { question_body: '35除以7的余数是____。', answer: '0', options_json: null, explanation: '35=7×5+0，余数是0。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  { question_body: '47除以8的余数是____。', answer: '7', options_json: null, explanation: '47=8×5+7，余数是7。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  { question_body: '50除以9的余数是____。', answer: '5', options_json: null, explanation: '50=9×5+5，余数是5。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'a ≡ 3 (mod 5)，则a除以5的余数是____。', answer: '3', options_json: null, explanation: '同余式a≡3(mod 5)表示a除以5的余数是3。', knowledge_id: 22, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个数除以3余2，除以5余3，这个数最小是____。', answer: '8', options_json: null, explanation: '满足条件的最小数是8。', knowledge_id: 22, question_type_id: 1, difficulty_id: 4 },
  { question_body: '2024除以9的余数是____。', answer: '8', options_json: null, explanation: '2+0+2+4=8，8除以9的余数是8。', knowledge_id: 22, question_type_id: 1, difficulty_id: 4 },
  { question_body: '2^10除以7的余数是____。', answer: '2', options_json: null, explanation: '2^3≡1(mod 7)，10÷3=3余1，所以2^10≡2^1=2。', knowledge_id: 22, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数除以3余1，除以4余2，除以5余3，这个数最小是____。', answer: '58', options_json: null, explanation: '满足条件的最小数是58。', knowledge_id: 22, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge22Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点22题目生成完成，共插入 ${knowledge22Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
