const mysql = require('mysql2/promise');

const knowledge23Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '一个数除以3余2，除以5余3，这个数最小是多少？', answer: 'B', options_json: ['A. 5', 'B. 8', 'C. 11', 'D. 14'], explanation: '用中国剩余定理求解，最小解是8。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以4余3，除以6余5，这个数最小是多少？', answer: 'A', options_json: ['A. 11', 'B. 17', 'C. 23', 'D. 29'], explanation: '满足条件的最小数是11。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以2余1，除以3余2，这个数最小是多少？', answer: 'C', options_json: ['A. 3', 'B. 5', 'C. 5', 'D. 7'], explanation: '满足条件的最小数是5。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以5余1，除以7余2，这个数最小是多少？', answer: 'B', options_json: ['A. 11', 'B. 16', 'C. 21', 'D. 26'], explanation: '满足条件的最小数是16。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以3余1，除以4余2，这个数最小是多少？', answer: 'C', options_json: ['A. 10', 'B. 14', 'C. 10', 'D. 16'], explanation: '满足条件的最小数是10。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以6余3，除以8余5，这个数最小是多少？', answer: 'B', options_json: ['A. 15', 'B. 21', 'C. 27', 'D. 33'], explanation: '满足条件的最小数是21。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以5余4，除以9余7，这个数最小是多少？', answer: 'D', options_json: ['A. 22', 'B. 37', 'C. 52', 'D. 37'], explanation: '满足条件的最小数是37。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以7余3，除以9余5，这个数最小是多少？', answer: 'A', options_json: ['A. 31', 'B. 44', 'C. 57', 'D. 70'], explanation: '满足条件的最小数是31。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以4余1，除以5余2，这个数最小是多少？', answer: 'B', options_json: ['A. 17', 'B. 17', 'C. 22', 'D. 27'], explanation: '满足条件的最小数是17。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以3余2，除以7余4，这个数最小是多少？', answer: 'C', options_json: ['A. 11', 'B. 18', 'C. 11', 'D. 25'], explanation: '满足条件的最小数是11。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以5余3，除以8余3，这个数最小是多少？', answer: 'A', options_json: ['A. 3', 'B. 8', 'C. 13', 'D. 18'], explanation: '满足条件的最小数是3。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以6余4，除以9余1，这个数最小是多少？', answer: 'D', options_json: ['A. 10', 'B. 16', 'C. 22', 'D. 10'], explanation: '满足条件的最小数是10。', knowledge_id: 23, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个数除以3余1，除以4余2，除以5余3，这个数最小是多少？', answer: 'B', options_json: ['A. 58', 'B. 58', 'C. 68', 'D. 78'], explanation: '用中国剩余定理求解，最小解是58。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以5余2，除以7余3，除以9余4，这个数最小是多少？', answer: 'C', options_json: ['A. 187', 'B. 217', 'C. 187', 'D. 247'], explanation: '满足条件的最小数是187。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以4余3，除以6余5，除以8余7，这个数最小是多少？', answer: 'B', options_json: ['A. 23', 'B. 23', 'C. 47', 'D. 71'], explanation: '满足条件的最小数是23。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以3余2，除以5余3，除以7余4，这个数最小是多少？', answer: 'D', options_json: ['A. 53', 'B. 83', 'C. 113', 'D. 53'], explanation: '用中国剩余定理求解，最小解是53。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以2余1，除以3余2，除以4余3，这个数最小是多少？', answer: 'A', options_json: ['A. 11', 'B. 17', 'C. 23', 'D. 29'], explanation: '满足条件的最小数是11。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数除以5余1，除以6余2，除以7余3，这个数最小是多少？', answer: 'B', options_json: ['A. 206', 'B. 206', 'C. 241', 'D. 276'], explanation: '用中国剩余定理求解，最小解是206。', knowledge_id: 23, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个数除以3余1，除以5余2，除以7余3，除以11余4，这个数最小是多少？', answer: 'C', options_json: ['A. 172', 'B. 232', 'C. 172', 'D. 292'], explanation: '用中国剩余定理求解，最小解是172。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以4余1，除以5余2，除以6余3，除以7余4，这个数最小是多少？', answer: 'D', options_json: ['A. 417', 'B. 477', 'C. 537', 'D. 417'], explanation: '用中国剩余定理求解，最小解是417。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以9余7，除以11余9，除以13余11，这个数最小是多少？', answer: 'A', options_json: ['A. 1285', 'B. 1397', 'C. 1509', 'D. 1621'], explanation: '满足条件的最小数是1285。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以2余1，除以3余2，除以5余4，除以7余6，这个数最小是多少？', answer: 'B', options_json: ['A. 209', 'B. 209', 'C. 419', 'D. 629'], explanation: '用中国剩余定理求解，最小解是209。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以6余5，除以10余9，除以15余14，这个数最小是多少？', answer: 'C', options_json: ['A. 29', 'B. 59', 'C. 29', 'D. 89'], explanation: '满足条件的最小数是29。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数除以7余2，除以11余5，除以13余8，这个数最小是多少？', answer: 'D', options_json: ['A. 247', 'B. 319', 'C. 391', 'D. 247'], explanation: '用中国剩余定理求解，最小解是247。', knowledge_id: 23, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：中国剩余定理适用于求解同余方程组。', answer: '正确', options_json: ['正确', '错误'], explanation: '中国剩余定理是求解同余方程组的有效方法。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果两个模数互质，那么同余方程组一定有解。', answer: '正确', options_json: ['正确', '错误'], explanation: '中国剩余定理保证了互质模数的同余方程组有解。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数除以3余2，除以5余3，最小解是8。', answer: '正确', options_json: ['正确', '错误'], explanation: '8除以3余2，除以5余3，是最小解。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数除以4余3，除以6余5，最小解是11。', answer: '正确', options_json: ['正确', '错误'], explanation: '11除以4余3，除以6余5，是最小解。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：中国剩余定理只适用于两个同余方程的情况。', answer: '错误', options_json: ['正确', '错误'], explanation: '中国剩余定理可以推广到多个同余方程的情况。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果模数不互质，同余方程组可能无解。', answer: '正确', options_json: ['正确', '错误'], explanation: '当模数不互质时，同余方程组可能无解。', knowledge_id: 23, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '一个数除以3余2，除以5余3，这个数最小是____。', answer: '8', options_json: null, explanation: '满足条件的最小数是8。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以4余3，除以6余5，这个数最小是____。', answer: '11', options_json: null, explanation: '满足条件的最小数是11。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以2余1，除以3余2，这个数最小是____。', answer: '5', options_json: null, explanation: '满足条件的最小数是5。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以5余1，除以7余2，这个数最小是____。', answer: '16', options_json: null, explanation: '满足条件的最小数是16。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以3余1，除以4余2，这个数最小是____。', answer: '10', options_json: null, explanation: '满足条件的最小数是10。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以6余3，除以8余5，这个数最小是____。', answer: '21', options_json: null, explanation: '满足条件的最小数是21。', knowledge_id: 23, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个数除以3余1，除以4余2，除以5余3，这个数最小是____。', answer: '58', options_json: null, explanation: '用中国剩余定理求解，最小解是58。', knowledge_id: 23, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数除以3余2，除以5余3，除以7余4，这个数最小是____。', answer: '53', options_json: null, explanation: '用中国剩余定理求解，最小解是53。', knowledge_id: 23, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数除以2余1，除以3余2，除以5余4，除以7余6，这个数最小是____。', answer: '209', options_json: null, explanation: '用中国剩余定理求解，最小解是209。', knowledge_id: 23, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数除以7余2，除以11余5，除以13余8，这个数最小是____。', answer: '247', options_json: null, explanation: '用中国剩余定理求解，最小解是247。', knowledge_id: 23, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge23Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点23题目生成完成，共插入 ${knowledge23Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
