const mysql = require('mysql2/promise');

const knowledge11Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '一个数加上5，再乘以3，结果是24。这个数是多少？', answer: 'A', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '倒推：24÷3=8，8-5=3。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数减去8，再除以2，结果是6。这个数是多少？', answer: 'C', options_json: ['A. 16', 'B. 18', 'C. 20', 'D. 22'], explanation: '倒推：6×2=12，12+8=20。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数乘以4，再加上7，结果是35。这个数是多少？', answer: 'B', options_json: ['A. 6', 'B. 7', 'C. 8', 'D. 9'], explanation: '倒推：35-7=28，28÷4=7。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以3，再减去5，结果是2。这个数是多少？', answer: 'D', options_json: ['A. 15', 'B. 18', 'C. 19', 'D. 21'], explanation: '倒推：2+5=7，7×3=21。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小明有一些糖果，他先吃掉一半，再吃掉3颗，还剩5颗。原来有多少颗？', answer: 'C', options_json: ['A. 14颗', 'B. 15颗', 'C. 16颗', 'D. 18颗'], explanation: '倒推：5+3=8，8×2=16颗。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数加上10，再除以4，结果是8。这个数是多少？', answer: 'A', options_json: ['A. 22', 'B. 24', 'C. 26', 'D. 28'], explanation: '倒推：8×4=32，32-10=22。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数乘以5，再减去9，结果是31。这个数是多少？', answer: 'B', options_json: ['A. 7', 'B. 8', 'C. 9', 'D. 10'], explanation: '倒推：31+9=40，40÷5=8。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小红有一些钱，她先花掉一半，再花掉8元，还剩12元。原来有多少元？', answer: 'D', options_json: ['A. 36元', 'B. 38元', 'C. 40元', 'D. 40元'], explanation: '倒推：12+8=20，20×2=40元。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数减去6，再乘以3，结果是27。这个数是多少？', answer: 'C', options_json: ['A. 12', 'B. 13', 'C. 15', 'D. 18'], explanation: '倒推：27÷3=9，9+6=15。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数除以2，再加上7，结果是15。这个数是多少？', answer: 'B', options_json: ['A. 14', 'B. 16', 'C. 18', 'D. 20'], explanation: '倒推：15-7=8，8×2=16。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一根绳子，第一次剪去一半，第二次剪去剩下的一半，还剩4米。原来长多少米？', answer: 'C', options_json: ['A. 12米', 'B. 14米', 'C. 16米', 'D. 18米'], explanation: '倒推：4×2=8，8×2=16米。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数加上4，再乘以2，结果是18。这个数是多少？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '倒推：18÷2=9，9-4=5。', knowledge_id: 11, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个数加上3，乘以4，再减去5，结果是31。这个数是多少？', answer: 'B', options_json: ['A. 4', 'B. 6', 'C. 7', 'D. 8'], explanation: '倒推：31+5=36，36÷4=9，9-3=6。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小明有一些书，他送给小红一半多2本，还剩8本。原来有多少本？', answer: 'C', options_json: ['A. 18本', 'B. 19本', 'C. 20本', 'D. 22本'], explanation: '倒推：8+2=10，10×2=20本。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数减去5，除以3，再加上4，结果是11。这个数是多少？', answer: 'D', options_json: ['A. 24', 'B. 25', 'C. 26', 'D. 26'], explanation: '倒推：11-4=7，7×3=21，21+5=26。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一筐苹果，第一天吃掉一半少2个，第二天吃掉剩下的一半，还剩6个。原来有多少个？', answer: 'B', options_json: ['A. 18个', 'B. 20个', 'C. 22个', 'D. 24个'], explanation: '倒推：6×2=12，(12-2)×2=20个。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个数乘以3，减去7，再除以2，结果是10。这个数是多少？', answer: 'C', options_json: ['A. 7', 'B. 8', 'C. 9', 'D. 10'], explanation: '倒推：10×2=20，20+7=27，27÷3=9。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小华有一些贴纸，她先送给小明一半，再送给小红剩下的一半，最后还剩12张。原来有多少张？', answer: 'D', options_json: ['A. 44张', 'B. 46张', 'C. 48张', 'D. 48张'], explanation: '倒推：12×2=24，24×2=48张。', knowledge_id: 11, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个数加上5，乘以3，减去8，再除以2，结果是20。这个数是多少？', answer: 'A', options_json: ['A. 11', 'B. 12', 'C. 13', 'D. 14'], explanation: '倒推：20×2=40，40+8=48，48÷3=16，16-5=11。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一筐梨，甲取走一半多1个，乙取走剩下的一半多1个，丙取走最后剩下的5个。原来有多少个？', answer: 'C', options_json: ['A. 24个', 'B. 26个', 'C. 26个', 'D. 28个'], explanation: '倒推：丙取前=(5+1)×2=12个，原来=(12+1)×2=26个。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数减去3，乘以4，加上6，再除以5，结果是10。这个数是多少？', answer: 'C', options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 16'], explanation: '倒推：10×5=50，50-6=44，44÷4=11，11+3=14。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  { question_body: '小明有一些钱，买文具花掉一半少3元，买书花掉剩下的一半，还剩15元。原来有多少元？', answer: 'D', options_json: ['A. 48元', 'B. 50元', 'C. 52元', 'D. 54元'], explanation: '倒推：15×2=30，(30-3)×2=54元。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个数加上2，乘以5，减去10，再除以4，结果是15。这个数是多少？', answer: 'C', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '倒推：15×4=60，60+10=70，70÷5=14，14-2=12。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一根铁丝，第一次剪去一半多2米，第二次剪去剩下的一半少1米，还剩5米。原来长多少米？', answer: 'B', options_json: ['A. 18米', 'B. 20米', 'C. 22米', 'D. 24米'], explanation: '倒推：第二次剪前=(5-1)×2=8米，原来=(8+2)×2=20米。', knowledge_id: 11, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：还原问题可以用倒推法解决。', answer: '正确', options_json: ['正确', '错误'], explanation: '还原问题的核心解法就是倒推法。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数加上5再减去5，结果还是原数。', answer: '正确', options_json: ['正确', '错误'], explanation: '加5和减5互为逆运算。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：倒推时，原来的乘法要变成减法。', answer: '错误', options_json: ['正确', '错误'], explanation: '倒推时乘法要变成除法。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数除以3再乘以3，结果还是原数。', answer: '正确', options_json: ['正确', '错误'], explanation: '除以3和乘以3互为逆运算。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：还原问题中，运算顺序倒过来，运算符号也要相反。', answer: '正确', options_json: ['正确', '错误'], explanation: '倒推法需要将运算顺序和符号都反过来。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个数先加4再乘2，倒推时应先减4再除以2。', answer: '错误', options_json: ['正确', '错误'], explanation: '倒推时应先除以2再减4，顺序也要反过来。', knowledge_id: 11, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '一个数加上5，再乘以3，结果是24。这个数是____。', answer: '3', options_json: null, explanation: '倒推：24÷3=8，8-5=3。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数减去8，再除以2，结果是6。这个数是____。', answer: '20', options_json: null, explanation: '倒推：6×2=12，12+8=20。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数乘以4，再加上7，结果是35。这个数是____。', answer: '7', options_json: null, explanation: '倒推：35-7=28，28÷4=7。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个数除以3，再减去5，结果是2。这个数是____。', answer: '21', options_json: null, explanation: '倒推：2+5=7，7×3=21。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  { question_body: '小明有一些糖果，他先吃掉一半，再吃掉3颗，还剩5颗。原来有____颗。', answer: '16', options_json: null, explanation: '倒推：5+3=8，8×2=16颗。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一根绳子，第一次剪去一半，第二次剪去剩下的一半，还剩4米。原来长____米。', answer: '16', options_json: null, explanation: '倒推：4×2=8，8×2=16米。', knowledge_id: 11, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个数加上3，乘以4，再减去5，结果是31。这个数是____。', answer: '6', options_json: null, explanation: '倒推：31+5=36，36÷4=9，9-3=6。', knowledge_id: 11, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一筐苹果，第一天吃掉一半少2个，第二天吃掉剩下的一半，还剩6个。原来有____个。', answer: '20', options_json: null, explanation: '倒推：6×2=12，(12-2)×2=20个。', knowledge_id: 11, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个数乘以3，减去7，再除以2，结果是10。这个数是____。', answer: '9', options_json: null, explanation: '倒推：10×2=20，20+7=27，27÷3=9。', knowledge_id: 11, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一根铁丝，第一次剪去一半多2米，第二次剪去剩下的一半少1米，还剩5米。原来长____米。', answer: '20', options_json: null, explanation: '倒推：第二次剪前=(5-1)×2=8米，原来=(8+2)×2=20米。', knowledge_id: 11, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge11Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点11题目生成完成，共插入 ${knowledge11Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
