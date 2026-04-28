const mysql = require('mysql2/promise');

const knowledge17Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '以下哪个数能被7整除？', answer: 'B', options_json: ['A. 20', 'B. 21', 'C. 22', 'D. 23'], explanation: '21÷7=3，所以21能被7整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被11整除？', answer: 'C', options_json: ['A. 20', 'B. 21', 'C. 22', 'D. 23'], explanation: '22÷11=2，所以22能被11整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被13整除？', answer: 'D', options_json: ['A. 24', 'B. 25', 'C. 26', 'D. 26'], explanation: '26÷13=2，所以26能被13整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '154能被7整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '154÷7=22，所以154能被7整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '121能被11整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '121÷11=11，所以121能被11整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '169能被13整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '169÷13=13，所以169能被13整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被7整除？', answer: 'C', options_json: ['A. 30', 'B. 31', 'C. 35', 'D. 36'], explanation: '35÷7=5，所以35能被7整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被11整除？', answer: 'B', options_json: ['A. 30', 'B. 33', 'C. 34', 'D. 35'], explanation: '33÷11=3，所以33能被11整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被13整除？', answer: 'D', options_json: ['A. 48', 'B. 49', 'C. 50', 'D. 52'], explanation: '52÷13=4，所以52能被13整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '77能被7整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '77÷7=11，所以77能被7整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '88能被11整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '88÷11=8，所以88能被11整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  { question_body: '91能被13整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '91÷13=7，所以91能被13整除。', knowledge_id: 17, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在1-100中，能被7整除的数有多少个？', answer: 'B', options_json: ['A. 12个', 'B. 14个', 'C. 15个', 'D. 16个'], explanation: '100÷7=14余2，所以有14个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-100中，能被11整除的数有多少个？', answer: 'A', options_json: ['A. 9个', 'B. 10个', 'C. 11个', 'D. 12个'], explanation: '100÷11=9余1，所以有9个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-100中，能被13整除的数有多少个？', answer: 'B', options_json: ['A. 6个', 'B. 7个', 'C. 8个', 'D. 9个'], explanation: '100÷13=7余9，所以有7个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三位数2□4，能被7整除，□里可以填几？', answer: 'B', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explanation: '224÷7=32，能整除。□=2。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  { question_body: '以下哪个数能同时被7和11整除？', answer: 'C', options_json: ['A. 66', 'B. 70', 'C. 77', 'D. 88'], explanation: '能同时被7和11整除即能被77整除。77÷77=1。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  { question_body: '以下哪个数能同时被7和13整除？', answer: 'B', options_json: ['A. 84', 'B. 91', 'C. 98', 'D. 105'], explanation: '能同时被7和13整除即能被91整除。91÷91=1。', knowledge_id: 17, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在1-1000中，能被7整除的数有多少个？', answer: 'C', options_json: ['A. 140个', 'B. 141个', 'C. 142个', 'D. 143个'], explanation: '1000÷7=142余6，所以有142个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-1000中，能被11整除的数有多少个？', answer: 'B', options_json: ['A. 88个', 'B. 90个', 'C. 91个', 'D. 92个'], explanation: '1000÷11=90余10，所以有90个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-1000中，能被13整除的数有多少个？', answer: 'C', options_json: ['A. 75个', 'B. 76个', 'C. 76个', 'D. 78个'], explanation: '1000÷13=76余12，所以有76个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-100中，能被7整除但不能被11整除的数有多少个？', answer: 'A', options_json: ['A. 13个', 'B. 14个', 'C. 12个', 'D. 11个'], explanation: '能被7整除的有14个（100÷7=14余2），能被77整除的有1个（77）。14-1=13个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个四位数123□，能被11整除，□里可以填几？', answer: 'A', options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], explanation: '奇数位和-偶数位和=(1+3)-(2+□)=4-2-□=2-□，要能被11整除，2-□=0，□=2。1232÷11=112。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-500中，能被7整除的数有____个。', answer: 'B', options_json: ['A. 70个', 'B. 71个', 'C. 72个', 'D. 73个'], explanation: '500÷7=71余3，所以有71个。', knowledge_id: 17, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：能被7整除的数，末位一定是7。', answer: '错误', options_json: ['正确', '错误'], explanation: '例如14能被7整除，但末位是4。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被11整除的数，奇数位数字之和与偶数位数字之和的差能被11整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被11整除的数的特征是奇数位和与偶数位和的差能被11整除。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被13整除的数，末位一定是3。', answer: '错误', options_json: ['正确', '错误'], explanation: '例如26能被13整除，但末位是6。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：77能同时被7和11整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '77=7×11，能同时被7和11整除。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：91能同时被7和13整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '91=7×13，能同时被7和13整除。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被7、11、13同时整除的数，一定能被1001整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '7×11×13=1001，能被7、11、13同时整除即能被1001整除。', knowledge_id: 17, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '21能被____整除。', answer: '7', options_json: null, explanation: '21÷7=3，所以21能被7整除。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  { question_body: '22能被____整除。', answer: '11', options_json: null, explanation: '22÷11=2，所以22能被11整除。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  { question_body: '26能被____整除。', answer: '13', options_json: null, explanation: '26÷13=2，所以26能被13整除。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  { question_body: '154能被7整除吗？____（填1表示能，填2表示不能）', answer: '1', options_json: null, explanation: '154÷7=22，所以154能被7整除。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  { question_body: '121能被11整除吗？____（填1表示能，填2表示不能）', answer: '1', options_json: null, explanation: '121÷11=11，所以121能被11整除。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在1-100中，能被7整除的数有____个。', answer: '14', options_json: null, explanation: '100÷7=14余2，所以有14个。', knowledge_id: 17, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在1-1000中，能被7整除的数有____个。', answer: '142', options_json: null, explanation: '1000÷7=142余6，所以有142个。', knowledge_id: 17, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-1000中，能被11整除的数有____个。', answer: '90', options_json: null, explanation: '1000÷11=90余10，所以有90个。', knowledge_id: 17, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个四位数123□能被11整除，□里应填____。', answer: '2', options_json: null, explanation: '奇数位和-偶数位和=(1+3)-(2+□)=2-□=0，□=2。', knowledge_id: 17, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-500中，能被7整除的数有____个。', answer: '71', options_json: null, explanation: '500÷7=71余3，所以有71个。', knowledge_id: 17, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge17Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点17题目生成完成，共插入 ${knowledge17Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
