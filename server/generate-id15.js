const mysql = require('mysql2/promise');

const knowledge15Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '以下哪个数能被2整除？', answer: 'B', options_json: ['A. 13', 'B. 14', 'C. 15', 'D. 17'], explanation: '个位是0,2,4,6,8的数能被2整除。14的个位是4。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被5整除？', answer: 'C', options_json: ['A. 12', 'B. 18', 'C. 20', 'D. 23'], explanation: '个位是0或5的数能被5整除。20的个位是0。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被3整除？', answer: 'A', options_json: ['A. 27', 'B. 28', 'C. 29', 'D. 31'], explanation: '各位数字之和能被3整除，这个数就能被3整除。2+7=9，9能被3整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被9整除？', answer: 'D', options_json: ['A. 18', 'B. 27', 'C. 36', 'D. 45'], explanation: '各位数字之和能被9整除，这个数就能被9整除。4+5=9，9能被9整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个数既是2的倍数又是5的倍数，它的个位一定是？', answer: 'A', options_json: ['A. 0', 'B. 2', 'C. 5', 'D. 无法确定'], explanation: '能被2整除个位是偶数，能被5整除个位是0或5，同时满足只能是0。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '123能被3整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '1+2+3=6，6能被3整除，所以123能被3整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数同时能被2和3整除？', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 15', 'D. 18'], explanation: '能被2整除：个位是偶数；能被3整除：各位和能被3整除。12满足两个条件。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数同时能被3和5整除？', answer: 'C', options_json: ['A. 20', 'B. 25', 'C. 30', 'D. 35'], explanation: '能被5整除：个位是0或5；能被3整除：各位和能被3整除。30满足两个条件。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '235能被9整除吗？', answer: 'B', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '2+3+5=10，10不能被9整除，所以235不能被9整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个三位数，个位是0，且各位数字之和是9，这个数最小是多少？', answer: 'B', options_json: ['A. 108', 'B. 180', 'C. 270', 'D. 360'], explanation: '个位是0，各位和是9，最小是180（百位1，十位8，个位0）。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '以下哪个数能被2、3、5同时整除？', answer: 'D', options_json: ['A. 30', 'B. 60', 'C. 90', 'D. 120'], explanation: '能被2、3、5同时整除，即能被30整除。120÷30=4。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  { question_body: '357能被3整除吗？', answer: 'A', options_json: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explanation: '3+5+7=15，15能被3整除，所以357能被3整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在1-100中，能被3整除的数有多少个？', answer: 'C', options_json: ['A. 30个', 'B. 31个', 'C. 33个', 'D. 34个'], explanation: '100÷3=33余1，所以有33个。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个四位数3□5□，能同时被2、3、5整除，这个数最大是多少？', answer: 'C', options_json: ['A. 3150', 'B. 3250', 'C. 3750', 'D. 3950'], explanation: '能被2和5整除，个位必须是0。能被3整除，各位和能被3整除。3+□+5+0=8+□，□可以是1,4,7。最大是3750。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-50中，能被2或5整除的数有多少个？', answer: 'C', options_json: ['A. 25个', 'B. 28个', 'C. 30个', 'D. 32个'], explanation: '能被2整除的有25个，能被5整除的有10个，能同时被2和5整除的有5个。25+10-5=30个。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个五位数1□234，能被9整除，□里可以填几？', answer: 'C', options_json: ['A. 5', 'B. 7', 'C. 8', 'D. 9'], explanation: '1+□+2+3+4=10+□，要能被9整除，10+□=18，□=8。1+8+2+3+4=18，能被9整除。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在1-100中，能被3整除的数有____个。', answer: 'C', options_json: ['A. 30个', 'B. 31个', 'C. 33个', 'D. 34个'], explanation: '100÷3=33余1，所以有33个。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个三位数□25，能被3整除，□里可以填几？', answer: 'D', options_json: ['A. 1', 'B. 3', 'C. 4', 'D. 2'], explanation: '□+2+5=□+7，要能被3整除，□+7可以是9,12,15。所以□可以是2,5,8。选项中只有2。', knowledge_id: 15, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在1-100中，能被2、3、5同时整除的数有多少个？', answer: 'B', options_json: ['A. 2个', 'B. 3个', 'C. 4个', 'D. 5个'], explanation: '能被2、3、5同时整除即能被30整除。100÷30=3余10，所以有3个（30,60,90）。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个六位数234□56，能被9整除，□里可以填几？', answer: 'C', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '2+3+4+□+5+6=20+□，要能被9整除，20+□=27，□=7。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-200中，能被3整除但不能被2整除的数有多少个？', answer: 'C', options_json: ['A. 30个', 'B. 31个', 'C. 33个', 'D. 34个'], explanation: '能被3整除的有66个（200÷3=66余2），能被6整除的有33个（200÷6=33余2）。66-33=33个。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个四位数□234，能同时被2和3整除，这个数是多少？', answer: 'B', options_json: ['A. 1234', 'B. 3234', 'C. 4234', 'D. 6234'], explanation: '能被2整除：个位是偶数（4满足）。能被3整除：各位和能被3整除。□+2+3+4=□+9，要能被3整除，□可以是3,6,9。3234满足。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在1-100中，能被5整除但不能被3整除的数有多少个？', answer: 'B', options_json: ['A. 10个', 'B. 14个', 'C. 15个', 'D. 16个'], explanation: '能被5整除的有20个，能被15整除的有6个（15,30,45,60,75,90）。20-6=14个。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个五位数14□34，能被9整除，□里可以填几？', answer: 'D', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '1+4+□+3+4=12+□，要能被9整除，12+□=18，□=6。', knowledge_id: 15, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：个位是0、2、4、6、8的数都能被2整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被2整除的数的特征是个位是偶数。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：各位数字之和能被3整除的数，一定能被3整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被3整除的数的特征是各位数字之和能被3整除。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：个位是0或5的数都能被5整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被5整除的数的特征是个位是0或5。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被9整除的数一定能被3整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '9是3的倍数，能被9整除的数一定能被3整除。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：能被3整除的数一定能被9整除。', answer: '错误', options_json: ['正确', '错误'], explanation: '例如6能被3整除但不能被9整除。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：各位数字之和能被9整除的数，一定能被9整除。', answer: '正确', options_json: ['正确', '错误'], explanation: '能被9整除的数的特征是各位数字之和能被9整除。', knowledge_id: 15, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '个位是____的数能被2整除。', answer: '0', options_json: null, explanation: '个位是0,2,4,6,8的数能被2整除。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  { question_body: '个位是0或5的数能被____整除。', answer: '5', options_json: null, explanation: '个位是0或5的数能被5整除。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  { question_body: '123的各位数字之和是____，所以123能被3整除。', answer: '6', options_json: null, explanation: '1+2+3=6，6能被3整除。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  { question_body: '234的各位数字之和是____，所以234能被9整除。', answer: '9', options_json: null, explanation: '2+3+4=9，9能被9整除。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在1-50中，能被2整除的数有____个。', answer: '25', options_json: null, explanation: '50÷2=25个。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在1-100中，能被5整除的数有____个。', answer: '20', options_json: null, explanation: '100÷5=20个。', knowledge_id: 15, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在1-100中，能被2、3、5同时整除的数有____个。', answer: '3', options_json: null, explanation: '能被30整除，100÷30=3余10，有3个（30,60,90）。', knowledge_id: 15, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-200中，能被3整除但不能被2整除的数有____个。', answer: '33', options_json: null, explanation: '能被3整除的有66个，能被6整除的有33个。66-33=33个。', knowledge_id: 15, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在1-100中，能被5整除但不能被3整除的数有____个。', answer: '14', options_json: null, explanation: '能被5整除的有20个，能被15整除的有6个。20-6=14个。', knowledge_id: 15, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个四位数3□5□能同时被2、3、5整除，这个数最大是____。', answer: '3750', options_json: null, explanation: '能被2和5整除，个位是0。能被3整除，3+□+5+0=8+□，□可以是1,4,7。最大是3750。', knowledge_id: 15, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge15Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点15题目生成完成，共插入 ${knowledge15Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
