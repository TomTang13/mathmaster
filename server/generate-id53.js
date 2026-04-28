const mysql = require('mysql2/promise');

const knowledge53Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '盈亏问题的核心是什么？', answer: 'A', options_json: ['A. 分配物品时的盈余或亏损', 'B. 计算物品总数', 'C. 计算人数', 'D. 计算利润'], explanation: '盈亏问题的核心是分配物品时出现的盈余或亏损情况。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一盈一亏问题的计算公式是？', answer: 'B', options_json: ['A. (盈-亏)÷两次分配差', 'B. (盈+亏)÷两次分配差', 'C. 盈×亏÷两次分配差', 'D. 盈+亏×两次分配差'], explanation: '一盈一亏问题的计算公式是(盈+亏)÷两次分配差。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两盈问题的计算公式是？', answer: 'C', options_json: ['A. (大盈+小盈)÷两次分配差', 'B. 大盈×小盈÷两次分配差', 'C. (大盈-小盈)÷两次分配差', 'D. 大盈-小盈×两次分配差'], explanation: '两盈问题的计算公式是(大盈-小盈)÷两次分配差。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两亏问题的计算公式是？', answer: 'A', options_json: ['A. (大亏-小亏)÷两次分配差', 'B. (大亏+小亏)÷两次分配差', 'C. 大亏×小亏÷两次分配差', 'D. 大亏-小亏×两次分配差'], explanation: '两亏问题的计算公式是(大亏-小亏)÷两次分配差。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小朋友分糖果，每人分5颗，多10颗；每人分7颗，少6颗，有多少个小朋友？', answer: 'B', options_json: ['A. 6', 'B. 8', 'C. 10', 'D. 12'], explanation: '这是一盈一亏问题，(10+6)÷(7-5)=16÷2=8个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小朋友分苹果，每人分3个，多8个；每人分5个，多2个，有多少个小朋友？', answer: 'C', options_json: ['A. 2', 'B. 3', 'C. 3', 'D. 4'], explanation: '这是两盈问题，(8-2)÷(5-3)=6÷2=3个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小朋友分饼干，每人分4块，少6块；每人分3块，少2块，有多少个小朋友？', answer: 'A', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '这是两亏问题，(6-2)÷(4-3)=4÷1=4个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '盈亏问题中，分配对象数指的是什么？', answer: 'B', options_json: ['A. 物品总数', 'B. 参与分配的人数', 'C. 每次分配的数量', 'D. 盈余或亏损的数量'], explanation: '分配对象数指的是参与分配的人数。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小朋友分铅笔，每人分2支，多5支；每人分3支，刚好用完，有多少个小朋友？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '这是一盈一尽问题，5÷(3-2)=5个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小朋友分橡皮，每人分3块，少4块；每人分2块，刚好用完，有多少个小朋友？', answer: 'D', options_json: ['A. 2', 'B. 3', 'C. 3', 'D. 4'], explanation: '这是一亏一尽问题，4÷(3-2)=4个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '盈亏问题的基本类型不包括？', answer: 'D', options_json: ['A. 一盈一亏', 'B. 两盈', 'C. 两亏', 'D. 三盈'], explanation: '盈亏问题的基本类型包括一盈一亏、两盈、两亏、一盈一尽、一亏一尽，不包括三盈。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  { question_body: '盈亏问题的解决关键是？', answer: 'A', options_json: ['A. 找到两次分配的差和盈亏数', 'B. 直接计算物品总数', 'C. 猜测人数', 'D. 不需要计算'], explanation: '盈亏问题的解决关键是找到两次分配的差和盈亏数。', knowledge_id: 53, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '同学分练习本，每人分4本，多12本；每人分6本，少6本，有多少个同学？', answer: 'B', options_json: ['A. 8', 'B. 9', 'C. 10', 'D. 11'], explanation: '一盈一亏问题，(12+6)÷(6-4)=18÷2=9个同学。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小朋友分糖果，每人分5颗，多15颗；每人分8颗，多3颗，有多少个小朋友？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 4', 'D. 5'], explanation: '两盈问题，(15-3)÷(8-5)=12÷3=4个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小朋友分苹果，每人分6个，少10个；每人分4个，少2个，有多少个小朋友？', answer: 'A', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '两亏问题，(10-2)÷(6-4)=8÷2=4个小朋友。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  { question_body: '同学分铅笔，每人分3支，多8支；每人分5支，少4支，有多少支铅笔？', answer: 'B', options_json: ['A. 20', 'B. 23', 'C. 25', 'D. 28'], explanation: '一盈一亏问题，人数=(8+4)÷(5-3)=6人，铅笔数=3×6+8=26支。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  { question_body: '小朋友分饼干，每人分4块，多12块；每人分7块，少3块，有多少块饼干？', answer: 'C', options_json: ['A. 30', 'B. 32', 'C. 32', 'D. 36'], explanation: '一盈一亏问题，人数=(12+3)÷(7-4)=5人，饼干数=4×5+12=32块。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  { question_body: '同学分练习本，每人分5本，多20本；每人分8本，多5本，有多少本练习本？', answer: 'D', options_json: ['A. 40', 'B. 45', 'C. 50', 'D. 45'], explanation: '两盈问题，人数=(20-5)÷(8-5)=5人，练习本数=5×5+20=45本。', knowledge_id: 53, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '小朋友分糖果，每人分6颗，多14颗；每人分9颗，少10颗，有多少个小朋友和多少颗糖果？', answer: 'A', options_json: ['A. 8个小朋友，62颗糖果', 'B. 7个小朋友，56颗糖果', 'C. 9个小朋友，68颗糖果', 'D. 10个小朋友，74颗糖果'], explanation: '一盈一亏问题，人数=(14+10)÷(9-6)=8人，糖果数=6×8+14=62颗。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  { question_body: '同学分铅笔，每人分4支，多24支；每人分7支，多3支，有多少个同学和多少支铅笔？', answer: 'B', options_json: ['A. 6个同学，48支铅笔', 'B. 7个同学，52支铅笔', 'C. 8个同学，56支铅笔', 'D. 9个同学，60支铅笔'], explanation: '两盈问题，人数=(24-3)÷(7-4)=7人，铅笔数=4×7+24=52支。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  { question_body: '小朋友分苹果，每人分5个，少12个；每人分3个，少2个，有多少个小朋友和多少个苹果？', answer: 'C', options_json: ['A. 4个小朋友，8个苹果', 'B. 5个小朋友，13个苹果', 'C. 5个小朋友，13个苹果', 'D. 6个小朋友，18个苹果'], explanation: '两亏问题，人数=(12-2)÷(5-3)=5人，苹果数=3×5-2=13个。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  { question_body: '同学分练习本，每人分6本，多30本；每人分8本，少10本，有多少个同学？', answer: 'D', options_json: ['A. 15', 'B. 18', 'C. 20', 'D. 20'], explanation: '一盈一亏问题，人数=(30+10)÷(8-6)=20人。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  { question_body: '小朋友分饼干，每人分8块，多24块；每人分10块，多8块，有多少个小朋友？', answer: 'A', options_json: ['A. 8', 'B. 10', 'C. 12', 'D. 14'], explanation: '两盈问题，人数=(24-8)÷(10-8)=8人。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  { question_body: '同学分铅笔，每人分5支，少15支；每人分3支，少3支，有多少个同学？', answer: 'B', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '两亏问题，人数=(15-3)÷(5-3)=6人。', knowledge_id: 53, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：盈亏问题的核心是分配物品时的盈余或亏损情况。', answer: '正确', options_json: ['正确', '错误'], explanation: '盈亏问题的核心是分配物品时出现的盈余或亏损情况。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一盈一亏问题的计算公式是(盈+亏)÷两次分配差。', answer: '正确', options_json: ['正确', '错误'], explanation: '一盈一亏问题的计算公式是(盈+亏)÷两次分配差。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两盈问题的计算公式是(大盈+小盈)÷两次分配差。', answer: '错误', options_json: ['正确', '错误'], explanation: '两盈问题的计算公式是(大盈-小盈)÷两次分配差。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两亏问题的计算公式是(大亏-小亏)÷两次分配差。', answer: '正确', options_json: ['正确', '错误'], explanation: '两亏问题的计算公式是(大亏-小亏)÷两次分配差。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：分配对象数指的是参与分配的人数。', answer: '正确', options_json: ['正确', '错误'], explanation: '分配对象数指的是参与分配的人数。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：盈亏问题的解决关键是找到两次分配的差和盈亏数。', answer: '正确', options_json: ['正确', '错误'], explanation: '盈亏问题的解决关键是找到两次分配的差和盈亏数。', knowledge_id: 53, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '盈亏问题的核心是分配物品时的____或亏损情况。', answer: '盈余', options_json: null, explanation: '盈亏问题的核心是分配物品时的盈余或亏损情况。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一盈一亏问题的计算公式是(盈+____)÷两次分配差。', answer: '亏', options_json: null, explanation: '一盈一亏问题的计算公式是(盈+亏)÷两次分配差。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  { question_body: '两盈问题的计算公式是(大盈-____)÷两次分配差。', answer: '小盈', options_json: null, explanation: '两盈问题的计算公式是(大盈-小盈)÷两次分配差。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  { question_body: '两亏问题的计算公式是(大亏-____)÷两次分配差。', answer: '小亏', options_json: null, explanation: '两亏问题的计算公式是(大亏-小亏)÷两次分配差。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  { question_body: '分配对象数指的是参与分配的____数。', answer: '人', options_json: null, explanation: '分配对象数指的是参与分配的人数。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  { question_body: '盈亏问题的解决关键是找到两次分配的____和盈亏数。', answer: '差', options_json: null, explanation: '盈亏问题的解决关键是找到两次分配的差和盈亏数。', knowledge_id: 53, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '小朋友分糖果，每人分5颗，多10颗；每人分7颗，少6颗，有____个小朋友。', answer: '8', options_json: null, explanation: '一盈一亏问题，(10+6)÷(7-5)=8个小朋友。', knowledge_id: 53, question_type_id: 1, difficulty_id: 4 },
  { question_body: '小朋友分苹果，每人分3个，多8个；每人分5个，多2个，有____个小朋友。', answer: '3', options_json: null, explanation: '两盈问题，(8-2)÷(5-3)=3个小朋友。', knowledge_id: 53, question_type_id: 1, difficulty_id: 4 },
  { question_body: '小朋友分饼干，每人分4块，少6块；每人分3块，少2块，有____个小朋友。', answer: '4', options_json: null, explanation: '两亏问题，(6-2)÷(4-3)=4个小朋友。', knowledge_id: 53, question_type_id: 1, difficulty_id: 4 },
  { question_body: '同学分练习本，每人分4本，多12本；每人分6本，少6本，有____个同学。', answer: '9', options_json: null, explanation: '一盈一亏问题，(12+6)÷(6-4)=9个同学。', knowledge_id: 53, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge53Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点53题目生成完成，共插入 ${knowledge53Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
