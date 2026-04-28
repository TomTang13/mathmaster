const mysql = require('mysql2/promise');

// ========== 知识点 3: 带符号搬家法则 ==========
const knowledge3Questions = [
  // ===== 单选题 12题 =====
  // 简单题 6题 (difficulty_id=2)
  {
    question_body: '计算：256+78-56 = ?',
    answer: 'B',
    options_json: ['A. 278', 'B. 278', 'C. 280', 'D. 276'],
    explanation: '带符号搬家：256-56+78 = 200+78 = 278',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：145+67-45 = ?',
    answer: 'C',
    options_json: ['A. 165', 'B. 168', 'C. 167', 'D. 170'],
    explanation: '带符号搬家：145-45+67 = 100+67 = 167',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：328-99+72 = ?',
    answer: 'A',
    options_json: ['A. 301', 'B. 300', 'C. 302', 'D. 299'],
    explanation: '带符号搬家：328+72-99 = 400-99 = 301',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：500-136-64 = ?',
    answer: 'D',
    options_json: ['A. 300', 'B. 310', 'C. 290', 'D. 300'],
    explanation: '带符号搬家：500-(136+64) = 500-200 = 300',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：234-58+66 = ?',
    answer: 'B',
    options_json: ['A. 240', 'B. 242', 'C. 244', 'D. 238'],
    explanation: '带符号搬家：234+66-58 = 300-58 = 242',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：189+76-89 = ?',
    answer: 'C',
    options_json: ['A. 175', 'B. 178', 'C. 176', 'D. 180'],
    explanation: '带符号搬家：189-89+76 = 100+76 = 176',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题 3题 (difficulty_id=3)
  {
    question_body: '计算：456-78-56+78 = ?',
    answer: 'A',
    options_json: ['A. 400', 'B. 401', 'C. 399', 'D. 402'],
    explanation: '带符号搬家：456-56-78+78 = 400+0 = 400',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：125+68-25-38 = ?',
    answer: 'D',
    options_json: ['A. 128', 'B. 130', 'C. 132', 'D. 130'],
    explanation: '带符号搬家：125-25+68-38 = 100+30 = 130',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：367+89-167-39 = ?',
    answer: 'B',
    options_json: ['A. 248', 'B. 250', 'C. 252', 'D. 245'],
    explanation: '带符号搬家：367-167+89-39 = 200+50 = 250',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题 3题 (difficulty_id=4)
  {
    question_body: '计算：1000-91-92-93-94-95 = ?',
    answer: 'C',
    options_json: ['A. 530', 'B. 535', 'C. 535', 'D. 540'],
    explanation: '带符号搬家：1000-(91+92+93+94+95) = 1000-465 = 535',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：1-2+3-4+5-6+7-8+9 = ?',
    answer: 'A',
    options_json: ['A. 5', 'B. 6', 'C. 4', 'D. 7'],
    explanation: '带符号搬家：(1+3+5+7+9)-(2+4+6+8) = 25-20 = 5',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：100-99+98-97+...+2-1 = ?',
    answer: 'B',
    options_json: ['A. 49', 'B. 50', 'C. 51', 'D. 48'],
    explanation: '分组计算：(100-99)+(98-97)+...+(2-1) = 1×50 = 50',
    knowledge_id: 3,
    question_type_id: 2,
    difficulty_id: 4
  },
  // ===== 判断题 3题 =====
  {
    question_body: '判断：带符号搬家时，数字前面的符号要跟着数字一起移动',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '带符号搬家的核心规则：数字和前面的符号作为一个整体移动',
    knowledge_id: 3,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：256-78+56 = 256+56-78',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '带符号搬家：-78和+56交换位置，符号跟着数字走',
    knowledge_id: 3,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：a-b-c = a-(b+c)',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '连续减去两个数，等于减去这两个数的和',
    knowledge_id: 3,
    question_type_id: 3,
    difficulty_id: 2
  },
  // ===== 填空题 5题 =====
  // 简单填空 3题
  {
    question_body: '计算：345+87-45 = ____',
    answer: '387',
    options_json: null,
    explanation: '带符号搬家：345-45+87 = 300+87 = 387',
    knowledge_id: 3,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：500-127-73 = ____',
    answer: '300',
    options_json: null,
    explanation: '带符号搬家：500-(127+73) = 500-200 = 300',
    knowledge_id: 3,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：278+36-78 = ____',
    answer: '236',
    options_json: null,
    explanation: '带符号搬家：278-78+36 = 200+36 = 236',
    knowledge_id: 3,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空 2题
  {
    question_body: '计算：100-98+96-94+...+4-2 = ____',
    answer: '50',
    options_json: null,
    explanation: '分组计算：(100-98)+(96-94)+...+(4-2) = 2×25 = 50',
    knowledge_id: 3,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '计算：1+2-3+4+5-6+7+8-9 = ____',
    answer: '9',
    options_json: null,
    explanation: '分组计算：(1+2-3)+(4+5-6)+(7+8-9) = 0+3+6 = 9',
    knowledge_id: 3,
    question_type_id: 1,
    difficulty_id: 4
  }
];

// ========== 知识点 4: 去括号法则 ==========
const knowledge4Questions = [
  // ===== 单选题 12题 =====
  // 简单题 6题 (difficulty_id=2)
  {
    question_body: '计算：125-(25+40) = ?',
    answer: 'C',
    options_json: ['A. 160', 'B. 90', 'C. 60', 'D. 65'],
    explanation: '去括号法则：125-25-40 = 60',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：200-(100-30) = ?',
    answer: 'B',
    options_json: ['A. 70', 'B. 130', 'C. 120', 'D. 140'],
    explanation: '去括号法则：200-100+30 = 130',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：156-(56+24) = ?',
    answer: 'A',
    options_json: ['A. 76', 'B. 80', 'C. 75', 'D. 78'],
    explanation: '去括号法则：156-56-24 = 76',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：300-(150-50) = ?',
    answer: 'D',
    options_json: ['A. 100', 'B. 150', 'C. 250', 'D. 200'],
    explanation: '去括号法则：300-150+50 = 200',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：478-(78+22) = ?',
    answer: 'C',
    options_json: ['A. 380', 'B. 370', 'C. 378', 'D. 375'],
    explanation: '去括号法则：478-78-22 = 378',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：500-(200-80) = ?',
    answer: 'B',
    options_json: ['A. 220', 'B. 380', 'C. 400', 'D. 360'],
    explanation: '去括号法则：500-200+80 = 380',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题 3题 (difficulty_id=3)
  {
    question_body: '计算：1000-(500+200-100) = ?',
    answer: 'A',
    options_json: ['A. 400', 'B. 300', 'C. 500', 'D. 600'],
    explanation: '去括号法则：1000-500-200+100 = 400',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：256-(56-28+12) = ?',
    answer: 'D',
    options_json: ['A. 200', 'B. 210', 'C. 220', 'D. 216'],
    explanation: '去括号法则：256-56+28-12 = 216',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：800-(300-150+50) = ?',
    answer: 'C',
    options_json: ['A. 500', 'B. 550', 'C. 600', 'D. 650'],
    explanation: '去括号法则：800-300+150-50 = 600',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题 3题 (difficulty_id=4)
  {
    question_body: '计算：100-(10-20+30-40+50) = ?',
    answer: 'B',
    options_json: ['A. 60', 'B. 70', 'C. 80', 'D. 90'],
    explanation: '去括号法则：100-10+20-30+40-50 = 70',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：500-(125+75-25+50) = ?',
    answer: 'A',
    options_json: ['A. 275', 'B. 280', 'C. 270', 'D. 285'],
    explanation: '去括号法则：500-125-75+25-50 = 275',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：1000-(100-200+300-400+500) = ?',
    answer: 'C',
    options_json: ['A. 600', 'B. 700', 'C. 700', 'D. 800'],
    explanation: '去括号法则：1000-100+200-300+400-500 = 700',
    knowledge_id: 4,
    question_type_id: 2,
    difficulty_id: 4
  },
  // ===== 判断题 3题 =====
  {
    question_body: '判断：a-(b+c) = a-b-c',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '去括号法则：括号前是减号，去掉括号后，括号内的加号变减号',
    knowledge_id: 4,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：a-(b-c) = a-b-c',
    answer: '错误',
    options_json: ['正确', '错误'],
    explanation: '去括号法则：a-(b-c) = a-b+c，不是a-b-c',
    knowledge_id: 4,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：a+(b-c) = a+b-c',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '去括号法则：括号前是加号，去掉括号后符号不变',
    knowledge_id: 4,
    question_type_id: 3,
    difficulty_id: 2
  },
  // ===== 填空题 5题 =====
  // 简单填空 3题
  {
    question_body: '计算：300-(150+50) = ____',
    answer: '100',
    options_json: null,
    explanation: '去括号法则：300-150-50 = 100',
    knowledge_id: 4,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：250-(50-20) = ____',
    answer: '220',
    options_json: null,
    explanation: '去括号法则：250-50+20 = 220',
    knowledge_id: 4,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：400-(120+80) = ____',
    answer: '200',
    options_json: null,
    explanation: '去括号法则：400-120-80 = 200',
    knowledge_id: 4,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空 2题
  {
    question_body: '计算：1000-(200-100+50-25) = ____',
    answer: '875',
    options_json: null,
    explanation: '去括号法则：1000-200+100-50+25 = 875',
    knowledge_id: 4,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '计算：500-(125-75+50-25) = ____',
    answer: '425',
    options_json: null,
    explanation: '去括号法则：500-125+75-50+25 = 425',
    knowledge_id: 4,
    question_type_id: 1,
    difficulty_id: 4
  }
];

// ========== 知识点 5: 多位数计算（如 999…9 × 某个数）==========
const knowledge5Questions = [
  // ===== 单选题 12题 =====
  // 简单题 6题 (difficulty_id=2)
  {
    question_body: '计算：99×5 = ?',
    answer: 'B',
    options_json: ['A. 490', 'B. 495', 'C. 500', 'D. 485'],
    explanation: '99×5=(100-1)×5=500-5=495',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：999×3 = ?',
    answer: 'C',
    options_json: ['A. 2990', 'B. 2995', 'C. 2997', 'D. 3000'],
    explanation: '999×3=(1000-1)×3=3000-3=2997',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：99×8 = ?',
    answer: 'A',
    options_json: ['A. 792', 'B. 800', 'C. 790', 'D. 798'],
    explanation: '99×8=(100-1)×8=800-8=792',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：999×6 = ?',
    answer: 'D',
    options_json: ['A. 5990', 'B. 5995', 'C. 6000', 'D. 5994'],
    explanation: '999×6=(1000-1)×6=6000-6=5994',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：199×4 = ?',
    answer: 'B',
    options_json: ['A. 790', 'B. 796', 'C. 800', 'D. 794'],
    explanation: '199×4=(200-1)×4=800-4=796',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：299×3 = ?',
    answer: 'C',
    options_json: ['A. 895', 'B. 900', 'C. 897', 'D. 890'],
    explanation: '299×3=(300-1)×3=900-3=897',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题 3题 (difficulty_id=3)
  {
    question_body: '计算：99×99 = ?',
    answer: 'A',
    options_json: ['A. 9801', 'B. 9900', 'C. 9800', 'D. 9999'],
    explanation: '99×99=(100-1)×99=9900-99=9801',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：999×7+999×3 = ?',
    answer: 'D',
    options_json: ['A. 9990', 'B. 9999', 'C. 9900', 'D. 9990'],
    explanation: '乘法分配律：999×(7+3)=999×10=9990',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：199×5+199×5 = ?',
    answer: 'B',
    options_json: ['A. 1990', 'B. 1990', 'C. 2000', 'D. 1980'],
    explanation: '乘法分配律：199×(5+5)=199×10=1990',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题 3题 (difficulty_id=4)
  {
    question_body: '计算：999×999 = ?',
    answer: 'C',
    options_json: ['A. 998001', 'B. 999000', 'C. 998001', 'D. 999999'],
    explanation: '999×999=(1000-1)×999=999000-999=998001',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：9999×8 = ?',
    answer: 'A',
    options_json: ['A. 79992', 'B. 80000', 'C. 79990', 'D. 79998'],
    explanation: '9999×8=(10000-1)×8=80000-8=79992',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：99×101 = ?',
    answer: 'B',
    options_json: ['A. 9990', 'B. 9999', 'C. 10000', 'D. 9900'],
    explanation: '99×101=(100-1)×101=10100-101=9999',
    knowledge_id: 5,
    question_type_id: 2,
    difficulty_id: 4
  },
  // ===== 判断题 3题 =====
  {
    question_body: '判断：99×7 = (100-1)×7 = 700-7 = 693',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '将99看作100-1，运用乘法分配律',
    knowledge_id: 5,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：999×5 = 1000×5 - 1 = 4999',
    answer: '错误',
    options_json: ['正确', '错误'],
    explanation: '999×5=(1000-1)×5=5000-5=4995，不是4999',
    knowledge_id: 5,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：199×4 = 200×4 - 4 = 796',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '将199看作200-1，运用乘法分配律：(200-1)×4=800-4=796',
    knowledge_id: 5,
    question_type_id: 3,
    difficulty_id: 2
  },
  // ===== 填空题 5题 =====
  // 简单填空 3题
  {
    question_body: '计算：99×6 = ____',
    answer: '594',
    options_json: null,
    explanation: '99×6=(100-1)×6=600-6=594',
    knowledge_id: 5,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：999×4 = ____',
    answer: '3996',
    options_json: null,
    explanation: '999×4=(1000-1)×4=4000-4=3996',
    knowledge_id: 5,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：199×5 = ____',
    answer: '995',
    options_json: null,
    explanation: '199×5=(200-1)×5=1000-5=995',
    knowledge_id: 5,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空 2题
  {
    question_body: '计算：999×999+999 = ____',
    answer: '999000',
    options_json: null,
    explanation: '999×999+999=999×(999+1)=999×1000=999000',
    knowledge_id: 5,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '计算：99×101-99 = ____',
    answer: '9900',
    options_json: null,
    explanation: '99×101-99=99×(101-1)=99×100=9900',
    knowledge_id: 5,
    question_type_id: 1,
    difficulty_id: 4
  }
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
    let totalInserted = 0;
    const allQuestions = [...knowledge3Questions, ...knowledge4Questions, ...knowledge5Questions];

    for (const q of allQuestions) {
      await connection.execute(
        `INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
      totalInserted++;
    }

    console.log(`========== 生成结果 ==========`);
    console.log(`知识点3 (带符号搬家法则): ${knowledge3Questions.length} 题`);
    console.log(`  - 单选题: 12题 (简单6+中等3+困难3)`);
    console.log(`  - 判断题: 3题`);
    console.log(`  - 填空题: 5题 (简单3+困难2)`);
    console.log(`知识点4 (去括号法则): ${knowledge4Questions.length} 题`);
    console.log(`  - 单选题: 12题 (简单6+中等3+困难3)`);
    console.log(`  - 判断题: 3题`);
    console.log(`  - 填空题: 5题 (简单3+困难2)`);
    console.log(`知识点5 (多位数计算): ${knowledge5Questions.length} 题`);
    console.log(`  - 单选题: 12题 (简单6+中等3+困难3)`);
    console.log(`  - 判断题: 3题`);
    console.log(`  - 填空题: 5题 (简单3+困难2)`);
    console.log(`总计写入: ${totalInserted} 题`);
    console.log(`==============================`);

  } catch (error) {
    console.error('生成失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
