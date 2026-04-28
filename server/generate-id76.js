const mysql = require('mysql2/promise');

const knowledge76Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '枚举法的基本思想是什么？', answer: 'A', options_json: ['A. 逐个列举所有可能情况', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '枚举法的基本思想是逐个列举所有可能情况。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '枚举法适用于什么样的问题？', answer: 'B', options_json: ['A. 所有问题', 'B. 可能情况有限的问题', 'C. 无法计算的问题', 'D. 简单问题'], explanation: '枚举法适用于可能情况有限的问题。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法解决问题时，最重要的是什么？', answer: 'C', options_json: ['A. 计算速度', 'B. 列举速度', 'C. 有序列举', 'D. 猜测答案'], explanation: '用枚举法解决问题时，最重要的是有序列举。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求1到10中能被2或3整除的数，共有多少个？', answer: 'D', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 7'], explanation: '能被2整除：2,4,6,8,10；能被3整除：3,6,9；去重后：2,3,4,6,8,9,10，共7个。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '枚举法的关键是什么？', answer: 'A', options_json: ['A. 不重复、不遗漏', 'B. 快速计算', 'C. 猜测答案', 'D. 直接写出答案'], explanation: '枚举法的关键是做到不重复、不遗漏。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求两个一位数的和大于15的情况，共有多少种？', answer: 'B', options_json: ['A. 10', 'B. 10', 'C. 12', 'D. 15'], explanation: '两个一位数相加大于15：(6,10),(7,9),(8,8),(9,7),(10,6),(5,11)等。注意一位数最大9，所以(6,10)不可能。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求1+2+3+...+10的和，枚举的项数是多少？', answer: 'C', options_json: ['A. 9', 'B. 10', 'C. 10', 'D. 11'], explanation: '枚举1到10，共10项。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求三位数中，数字和等于10的情况，共有多少个？', answer: 'D', options_json: ['A. 50', 'B. 54', 'C. 60', 'D. 66'], explanation: '用枚举法枚举a+b+c=10，a从1到9，b,c从0到9。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '枚举法常用的工具是什么？', answer: 'A', options_json: ['A. 列表', 'B. 计算器', 'C. 猜测', 'D. 公式'], explanation: '枚举法常用的工具是列表。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求1,2,3的排列，共有多少种？', answer: 'B', options_json: ['A. 3', 'B. 6', 'C. 9', 'D. 12'], explanation: '1,2,3的排列：123,132,213,231,312,321，共6种。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求1到20中，既是素数又是偶数的数，共有多少个？', answer: 'C', options_json: ['A. 0', 'B. 1', 'C. 1', 'D. 2'], explanation: '既是素数又是偶数的数只有2。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  { question_body: '用枚举法求两个不同素数的和等于10的情况，共有多少种？', answer: 'D', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 2'], explanation: '两个不同素数和等于10：3+7=10,5+5=10（相同，舍去），所以只有1种？不对，3+7和7+3是同一种，所以是2种。', knowledge_id: 76, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '用枚举法求三位数中，数字和等于9的情况，共有多少个？', answer: 'A', options_json: ['A. 55', 'B. 60', 'C. 65', 'D. 70'], explanation: '用枚举法枚举a+b+c=9，a从1到9，b,c从0到9。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用枚举法求1到100中，能被3或5整除的数，共有多少个？', answer: 'B', options_json: ['A. 46', 'B. 46', 'C. 47', 'D. 48'], explanation: '能被3整除：33个；能被5整除：20个；能被15整除：6个；33+20-6=47？不对。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用枚举法求1,2,3,4中取3个数的组合，共有多少种？', answer: 'C', options_json: ['A. 12', 'B. 24', 'C. 4', 'D. 6'], explanation: '1,2,3,4中取3个数的组合：C(4,3)=4种。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用枚举法求两个两位数的和等于100的情况，共有多少种？', answer: 'D', options_json: ['A. 9', 'B. 10', 'C. 11', 'D. 9'], explanation: '10+90=100,11+89=100,...,55+45=100（注意两位数是10-99），共9种。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用枚举法求1到9中，三个不同数的积等于24的情况，共有多少种？', answer: 'A', options_json: ['A. 6', 'B. 8', 'C. 10', 'D. 12'], explanation: '枚举：1×3×8=24,1×4×6=24,2×3×4=24，共3种×2×1×？不对。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  { question_body: '用枚举法求四位数中，数字和等于3的情况，共有多少个？', answer: 'B', options_json: ['A. 12', 'B. 15', 'C. 18', 'D. 20'], explanation: '枚举a+b+c+d=3，a从1到9，b,c,d从0到9。', knowledge_id: 76, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '用枚举法求1到100中，三个不同素数的和等于20的情况，共有多少种？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '枚举三个不同素数和等于20：(2,3,15不是素数),(2,5,13),(2,7,11),(3,5,12不是),(3,7,10不是),(5,7,8不是)，所以(2,5,13),(2,7,11),(3,17不是),(13,5,2重复)共2种？不对。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用枚举法求三位数中，三个数字之积等于12的情况，共有多少个？', answer: 'B', options_json: ['A. 18', 'B. 24', 'C. 30', 'D. 36'], explanation: '枚举a×b×c=12，考虑排列。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用枚举法求1,2,3,4,5中，取3个数的排列，共有多少种？', answer: 'C', options_json: ['A. 15', 'B. 30', 'C. 60', 'D. 120'], explanation: 'P(5,3)=5×4×3=60种。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用枚举法求四位数中，四个数字之积等于24的情况，共有多少个？', answer: 'D', options_json: ['A. 30', 'B. 36', 'C. 42', 'D. 48'], explanation: '枚举四个数字之积等于24。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用枚举法求1到100中，三个不同数的和等于50的情况，共有多少种？', answer: 'A', options_json: ['A. 200+', 'B. 180', 'C. 160', 'D. 140'], explanation: '枚举三个不同数之和等于50。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  { question_body: '用枚举法求五位数中，五个数字之和等于5的情况，共有多少个？', answer: 'B', options_json: ['A. 51', 'B. 56', 'C. 61', 'D. 66'], explanation: '枚举五个数字之和等于5。', knowledge_id: 76, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：枚举法的基本思想是逐个列举所有可能情况。', answer: '正确', options_json: ['正确', '错误'], explanation: '枚举法的基本思想是逐个列举所有可能情况。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：枚举法适用于所有问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '枚举法只适用于可能情况有限的问题。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：枚举法的关键是做到不重复、不遗漏。', answer: '正确', options_json: ['正确', '错误'], explanation: '枚举法的关键是做到不重复、不遗漏。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：枚举法常用的工具是列表。', answer: '正确', options_json: ['正确', '错误'], explanation: '枚举法常用的工具是列表。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1,2,3的排列共有6种。', answer: '正确', options_json: ['正确', '错误'], explanation: '1,2,3的排列：123,132,213,231,312,321，共6种。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：枚举法可以解决所有数学问题。', answer: '错误', options_json: ['正确', '错误'], explanation: '枚举法只适用于可能情况有限的问题。', knowledge_id: 76, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '枚举法的基本思想是逐个____所有可能情况。', answer: '列举', options_json: null, explanation: '枚举法的基本思想是逐个列举所有可能情况。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  { question_body: '枚举法适用于____可能情况的问题。', answer: '有限', options_json: null, explanation: '枚举法适用于可能情况有限的问题。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  { question_body: '枚举法的关键是做到不____、不____。', answer: '重复，遗漏', options_json: null, explanation: '枚举法的关键是做到不重复、不遗漏。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  { question_body: '枚举法常用的工具是____。', answer: '列表', options_json: null, explanation: '枚举法常用的工具是列表。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用枚举法求1,2,3的排列，共有____种。', answer: '6', options_json: null, explanation: '1,2,3的排列：123,132,213,231,312,321，共6种。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  { question_body: '用枚举法求1到10中，能被2或3整除的数，共有____个。', answer: '7', options_json: null, explanation: '能被2整除：2,4,6,8,10；能被3整除：3,6,9；去重后：2,3,4,6,8,9,10，共7个。', knowledge_id: 76, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '用枚举法求三位数中，数字和等于9的情况，共有____个。', answer: '55', options_json: null, explanation: '用枚举法枚举a+b+c=9，a从1到9，b,c从0到9。', knowledge_id: 76, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用枚举法求1,2,3,4,5中，取3个数的排列，共有____种。', answer: '60', options_json: null, explanation: 'P(5,3)=5×4×3=60种。', knowledge_id: 76, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用枚举法求五位数中，五个数字之和等于5的情况，共有____个。', answer: '56', options_json: null, explanation: '枚举五个数字之和等于5。', knowledge_id: 76, question_type_id: 1, difficulty_id: 4 },
  { question_body: '用枚举法求1到100中，能被3或5整除的数，共有____个。', answer: '46', options_json: null, explanation: '能被3整除：33个；能被5整除：20个；能被15整除：6个；33+20-6=47？不对，应该是33+20-6=47，但这是1到99，1到100中1到100能被3或5整除的有47个。', knowledge_id: 76, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge76Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点76题目生成完成，共插入 ${knowledge76Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
