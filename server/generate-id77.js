const mysql = require('mysql2/promise');

const knowledge77Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: "从甲地到乙地，可以坐汽车、火车或飞机，汽车有3班，火车有2班，飞机有1班，共有多少种走法？", answer: "C", options_json: ["A. 3", "B. 2", "C. 6", "D. 5"], explanation: "加法原理：3+2+1=6种走法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从甲地到乙地必须先坐汽车到丙地，再坐火车到乙地，汽车有3班，火车有2班，共有多少种走法？", answer: "A", options_json: ["A. 6", "B. 5", "C. 3", "D. 2"], explanation: "乘法原理：3×2=6种走法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用1、2、3可以组成多少个一位数？", answer: "B", options_json: ["A. 1", "B. 3", "C. 6", "D. 9"], explanation: "加法原理：1、2、3共3个一位数。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用1、2、3可以组成多少个两位数（允许重复）？", answer: "C", options_json: ["A. 3", "B. 6", "C. 9", "D. 12"], explanation: "乘法原理：3×3=9个两位数。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "某班男生有20人，女生有15人，选一人当班长，有多少种选法？", answer: "D", options_json: ["A. 20", "B. 15", "C. 30", "D. 35"], explanation: "加法原理：20+15=35种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从1、2、3、4中选一个数，有多少种选法？", answer: "A", options_json: ["A. 4", "B. 3", "C. 2", "D. 1"], explanation: "加法原理：4种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用数字0、1、2可以组成多少个一位数？", answer: "B", options_json: ["A. 2", "B. 3", "C. 4", "D. 5"], explanation: "加法原理：0、1、2共3个一位数。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "有红、黄、蓝三种颜色的球各一个，选一个球，有多少种选法？", answer: "C", options_json: ["A. 1", "B. 2", "C. 3", "D. 6"], explanation: "加法原理：3种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从1到10中选一个偶数，有多少种选法？", answer: "D", options_json: ["A. 3", "B. 4", "C. 6", "D. 5"], explanation: "加法原理：2、4、6、8、10共5种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用数字1、2、3、4组成两位数，十位和个位可以相同，有多少种？", answer: "A", options_json: ["A. 16", "B. 12", "C. 8", "D. 4"], explanation: "乘法原理：4×4=16个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "书架上有5本故事书和3本漫画书，选一本看，有多少种选法？", answer: "B", options_json: ["A. 5", "B. 8", "C. 3", "D. 15"], explanation: "加法原理：5+3=8种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },
  { question_body: "从A地到B地有3条路，从B地到C地有4条路，从A经B到C有多少种走法？", answer: "C", options_json: ["A. 7", "B. 10", "C. 12", "D. 15"], explanation: "乘法原理：3×4=12种。", knowledge_id: 77, question_type_id: 2, difficulty_id: 2 },

  // 中等题 6题 (difficulty_id=3)
  { question_body: "用1、2、3可以组成多少个没有重复数字的两位数？", answer: "A", options_json: ["A. 6", "B. 9", "C. 12", "D. 18"], explanation: "乘法原理：3×2=6个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用0、1、2可以组成多少个没有重复数字的两位数？", answer: "B", options_json: ["A. 4", "B. 4", "C. 6", "D. 8"], explanation: "乘法原理：2×2=4个（十位不能为0）。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用1、2、3、4可以组成多少个没有重复数字的两位数？", answer: "C", options_json: ["A. 12", "B. 16", "C. 12", "D. 8"], explanation: "乘法原理：4×3=12个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从1到5中选两个不同的数，共有多少种选法？", answer: "D", options_json: ["A. 5", "B. 10", "C. 15", "D. 10"], explanation: "C(5,2)=10种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有红、黄、蓝三种颜色的球各2个，选一个球，有多少种选法？", answer: "A", options_json: ["A. 6", "B. 3", "C. 9", "D. 12"], explanation: "加法原理：2+2+2=6种。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },
  { question_body: "从1到10中选一个数是2的倍数或3的倍数，有多少种选法？", answer: "B", options_json: ["A. 5", "B. 7", "C. 8", "D. 9"], explanation: "容斥原理：5+3-1=7种。", knowledge_id: 77, question_type_id: 2, difficulty_id: 3 },

  // 困难题 6题 (difficulty_id=4)
  { question_body: "用1、2、3、4可以组成多少个没有重复数字的三位数？", answer: "A", options_json: ["A. 24", "B. 12", "C. 48", "D. 64"], explanation: "乘法原理：4×3×2=24个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用0、1、2、3可以组成多少个没有重复数字的三位数？", answer: "B", options_json: ["A. 18", "B. 18", "C. 24", "D. 12"], explanation: "乘法原理：3×3×2=18个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用1、2、3、4、5可以组成多少个没有重复数字的两位数？", answer: "C", options_json: ["A. 20", "B. 25", "C. 20", "D. 10"], explanation: "乘法原理：5×4=20个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从1到10中选两个不同的数，一个做分子，一个做分母，能组成多少个不同的分数？", answer: "D", options_json: ["A. 45", "B. 90", "C. 100", "D. 90"], explanation: "排列问题：10×9=90个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用1、2、3、4可以组成多少个没有重复数字的四位数？", answer: "A", options_json: ["A. 24", "B. 12", "C. 48", "D. 16"], explanation: "乘法原理：4×3×2×1=24个。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },
  { question_body: "从1到6中选三个不同的数，共有多少种选法？", answer: "B", options_json: ["A. 10", "B. 20", "C. 30", "D. 40"], explanation: "C(6,3)=20种选法。", knowledge_id: 77, question_type_id: 2, difficulty_id: 4 },

  // ===== 判断题 6题 =====
  { question_body: "加法原理是做一件事，完成它有n类办法，每类办法都能独立完成这件事。", answer: "正确", options_json: ["正确", "错误"], explanation: "加法原理是做一件事，完成它有n类办法，每类办法都能独立完成这件事。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },
  { question_body: "乘法原理是做一件事，需要分n个步骤，各步骤缺一不可。", answer: "正确", options_json: ["正确", "错误"], explanation: "乘法原理是做一件事，需要分n个步骤，各步骤缺一不可。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },
  { question_body: "从甲地到乙地可以坐汽车、火车或飞机，汽车有3班，火车有2班，飞机有1班，共有6种走法。", answer: "正确", options_json: ["正确", "错误"], explanation: "加法原理：3+2+1=6种走法。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },
  { question_body: "从甲地到乙地必须先坐汽车到丙地，再坐火车到乙地，汽车有3班，火车有2班，共有5种走法。", answer: "错误", options_json: ["正确", "错误"], explanation: "乘法原理：3×2=6种走法。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },
  { question_body: "用1、2、3可以组成9个两位数（允许重复）。", answer: "正确", options_json: ["正确", "错误"], explanation: "乘法原理：3×3=9个两位数。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },
  { question_body: "加法原理和乘法原理的区别是加法分类，乘法分步。", answer: "正确", options_json: ["正确", "错误"], explanation: "加法原理分类，乘法原理分步。", knowledge_id: 77, question_type_id: 3, difficulty_id: 2 },

  // ===== 填空题 10题 =====
  // 简单填空 6题 (difficulty_id=2)
  { question_body: "从甲地到乙地，可以坐汽车、火车或飞机，汽车有3班，火车有2班，飞机有1班，共有____种走法。", answer: "6", options_json: null, explanation: "加法原理：3+2+1=6种走法。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从甲地到乙地必须先坐汽车到丙地，再坐火车到乙地，汽车有3班，火车有2班，共有____种走法。", answer: "6", options_json: null, explanation: "乘法原理：3×2=6种走法。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用1、2、3可以组成____个一位数。", answer: "3", options_json: null, explanation: "加法原理：1、2、3共3个一位数。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用1、2、3可以组成____个两位数（允许重复）。", answer: "9", options_json: null, explanation: "乘法原理：3×3=9个两位数。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },
  { question_body: "某班男生有20人，女生有15人，选一人当班长，有____种选法。", answer: "35", options_json: null, explanation: "加法原理：20+15=35种选法。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },
  { question_body: "从1、2、3、4中选一个数，有____种选法。", answer: "4", options_json: null, explanation: "加法原理：4种选法。", knowledge_id: 77, question_type_id: 1, difficulty_id: 2 },

  // 困难填空 4题 (difficulty_id=4)
  { question_body: "用1、2、3可以组成____个没有重复数字的两位数。", answer: "6", options_json: null, explanation: "乘法原理：3×2=6个。", knowledge_id: 77, question_type_id: 1, difficulty_id: 4 },
  { question_body: "用0、1、2可以组成____个没有重复数字的两位数。", answer: "4", options_json: null, explanation: "乘法原理：2×2=4个（十位不能为0）。", knowledge_id: 77, question_type_id: 1, difficulty_id: 4 },
  { question_body: "用1、2、3、4可以组成____个没有重复数字的三位数。", answer: "24", options_json: null, explanation: "乘法原理：4×3×2=24个。", knowledge_id: 77, question_type_id: 1, difficulty_id: 4 },
  { question_body: "从1到5中选两个不同的数，共有____种选法。", answer: "10", options_json: null, explanation: "C(5,2)=10种选法。", knowledge_id: 77, question_type_id: 1, difficulty_id: 4 }
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
    await connection.execute('DELETE FROM question_base WHERE knowledge_id = ?', [77]);
    await connection.beginTransaction();
    for (const q of knowledge77Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log('知识点77题目生成完成，共插入', knowledge77Questions.length, '题');
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
