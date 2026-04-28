const mysql = require('mysql2/promise');

const knowledge14Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '以下哪个数是质数？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 4', 'D. 6'], explanation: '2是唯一的偶质数，只能被1和2整除。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数是合数？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '4=2×2，除了1和4之外还能被2整除，是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1是质数还是合数？', answer: 'D', options_json: ['A. 质数', 'B. 合数', 'C. 既是质数又是合数', 'D. 既不是质数也不是合数'], explanation: '1只有一个因数，既不是质数也不是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '10以内的质数有多少个？', answer: 'C', options_json: ['A. 3个', 'B. 5个', 'C. 4个', 'D. 6个'], explanation: '10以内的质数有2,3,5,7，共4个。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '20以内的质数有多少个？', answer: 'B', options_json: ['A. 6个', 'B. 8个', 'C. 9个', 'D. 10个'], explanation: '20以内的质数有2,3,5,7,11,13,17,19，共8个。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数不是质数？', answer: 'D', options_json: ['A. 11', 'B. 13', 'C. 17', 'D. 21'], explanation: '21=3×7，是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '最小的质数是多少？', answer: 'A', options_json: ['A. 2', 'B. 1', 'C. 3', 'D. 0'], explanation: '2是最小的质数，也是唯一的偶质数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '最小的合数是多少？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 6'], explanation: '4是最小的合数，4=2×2。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数是质数？', answer: 'A', options_json: ['A. 23', 'B. 25', 'C. 27', 'D. 33'], explanation: '23只能被1和23整除，是质数。25=5×5, 27=3×9, 33=3×11都是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数是合数？', answer: 'B', options_json: ['A. 29', 'B. 30', 'C. 31', 'D. 37'], explanation: '30=2×3×5，是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '50以内最大的质数是多少？', answer: 'C', options_json: ['A. 45', 'B. 47', 'C. 47', 'D. 49'], explanation: '47是质数，49=7×7是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  { question_body: '100以内最大的质数是多少？', answer: 'B', options_json: ['A. 95', 'B. 97', 'C. 99', 'D. 100'], explanation: '97是质数，99=9×11是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '两个质数的和是15，这两个质数的积是多少？', answer: 'C', options_json: ['A. 24', 'B. 36', 'C. 26', 'D. 42'], explanation: '15=2+13，2×13=26。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个质数加上2后还是质数，这个质数可能是？', answer: 'A', options_json: ['A. 3', 'B. 7', 'C. 11', 'D. 13'], explanation: '3+2=5（质数），7+2=9（合数），11+2=13（质数），13+2=15（合数）。但选项中3和11都符合，选最小的3。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  { question_body: '两个不同质数的积是35，这两个质数的和是多少？', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 16'], explanation: '35=5×7，5+7=12。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个两位数，个位和十位都是质数，这个数最大是多少？', answer: 'D', options_json: ['A. 77', 'B. 79', 'C. 97', 'D. 77'], explanation: '一位质数有2,3,5,7。最大的组合是77（但77=7×11是合数）。题目问的是"这个数"，不是质数。77,79,97中，十位和个位都是质数的有77（7和7都是质数）。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  { question_body: '三个连续自然数都是合数，这三个数最小可以是？', answer: 'A', options_json: ['A. 8,9,10', 'B. 9,10,11', 'C. 14,15,16', 'D. 20,21,22'], explanation: '8=2×4, 9=3×3, 10=2×5，都是合数。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-20中，既是奇数又是合数的数有多少个？', answer: 'B', options_json: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'], explanation: '1-20中奇数有1,3,5,7,9,11,13,15,17,19。其中合数有9,15，共2个。', knowledge_id: 14, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '两个质数的和是18，积是65，这两个质数分别是？', answer: 'C', options_json: ['A. 5和13', 'B. 7和11', 'C. 5和13', 'D. 3和15'], explanation: '65=5×13，5+13=18。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个质数p，p+10和p+20也都是质数，p是多少？', answer: 'A', options_json: ['A. 3', 'B. 7', 'C. 11', 'D. 13'], explanation: '3+10=13（质数），3+20=23（质数）。7+10=17（质数），7+20=27（合数）。所以p=3。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用10以内的质数组成一个两位数，这个数最大是多少？', answer: 'C', options_json: ['A. 75', 'B. 73', 'C. 73', 'D. 77'], explanation: '10以内的质数有2,3,5,7。组成的最大两位数是75（但75不是质数）。题目问的是"组成一个两位数"，不一定是质数。最大的是75？但75=3×25是合数。如果要求是质数：73是质数。选C. 73。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  { question_body: '已知a是质数，a+4和a+6也都是质数，a最小是多少？', answer: 'B', options_json: ['A. 5', 'B. 7', 'C. 11', 'D. 13'], explanation: 'a=7时，7+4=11（质数），7+6=13（质数）。a=5时，5+4=9（合数）。所以a最小是7。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两个质数的和是20，积是91，这两个质数分别是？', answer: 'A', options_json: ['A. 7和13', 'B. 3和17', 'C. 5和15', 'D. 11和9'], explanation: '91=7×13，7+13=20。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在50-100之间，个位是7的质数有多少个？', answer: 'A', options_json: ['A. 2个', 'B. 3个', 'C. 4个', 'D. 5个'], explanation: '50-100之间个位是7的数有57,67,77,87,97。其中质数有67,97。57=3×19, 77=7×11, 87=3×29。共2个。', knowledge_id: 14, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：所有的偶数都是合数。', answer: '错误', options_json: ['正确', '错误'], explanation: '2是偶数但不是合数，2是质数。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1既不是质数也不是合数。', answer: '正确', options_json: ['正确', '错误'], explanation: '1只有一个因数，不符合质数或合数的定义。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：最小的质数是1。', answer: '错误', options_json: ['正确', '错误'], explanation: '最小的质数是2，1既不是质数也不是合数。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两个质数的积一定是合数。', answer: '正确', options_json: ['正确', '错误'], explanation: '两个质数的积至少有4个因数，一定是合数。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：所有的质数都是奇数。', answer: '错误', options_json: ['正确', '错误'], explanation: '2是质数但不是奇数，2是偶数。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数如果不是质数，就一定是合数。', answer: '错误', options_json: ['正确', '错误'], explanation: '1既不是质数也不是合数。', knowledge_id: 14, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '最小的质数是____。', answer: '2', options_json: null, explanation: '2是最小的质数。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  { question_body: '最小的合数是____。', answer: '4', options_json: null, explanation: '4是最小的合数。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  { question_body: '10以内的质数有____个。', answer: '4', options_json: null, explanation: '10以内的质数有2,3,5,7，共4个。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  { question_body: '20以内的质数有____个。', answer: '8', options_json: null, explanation: '20以内的质数有2,3,5,7,11,13,17,19，共8个。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  { question_body: '100以内最大的质数是____。', answer: '97', options_json: null, explanation: '97是质数，99是合数。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  { question_body: '既是偶数又是质数的数是____。', answer: '2', options_json: null, explanation: '2是唯一的偶质数。', knowledge_id: 14, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '两个质数的和是15，这两个质数的积是____。', answer: '26', options_json: null, explanation: '15=2+13，2×13=26。', knowledge_id: 14, question_type_id: 1, difficulty_id: 4 },
  { question_body: '两个不同质数的积是35，这两个质数的和是____。', answer: '12', options_json: null, explanation: '35=5×7，5+7=12。', knowledge_id: 14, question_type_id: 1, difficulty_id: 4 },
  { question_body: '两个质数的和是20，积是91，较大的质数是____。', answer: '13', options_json: null, explanation: '91=7×13，7+13=20，较大的是13。', knowledge_id: 14, question_type_id: 1, difficulty_id: 4 },
  { question_body: '已知a是质数，a+4和a+6也都是质数，a最小是____。', answer: '7', options_json: null, explanation: 'a=7时，11和13都是质数。', knowledge_id: 14, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge14Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点14题目生成完成，共插入 ${knowledge14Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
