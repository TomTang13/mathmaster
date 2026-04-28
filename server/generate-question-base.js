const mysql = require('mysql2/promise');

// ========== 知识点 1: 加减法凑整（高斯求和、等差数列）==========
const knowledge1Questions = [
  // ===== 单选题 12题 =====
  // 简单题 6题 (difficulty_id=2)
  {
    question_body: '计算：1+2+3+4+5+6+7+8+9 = ?',
    answer: 'B',
    options_json: ['A. 44', 'B. 45', 'C. 46', 'D. 50'],
    explanation: '等差数列求和：(首项+末项)×项数÷2 = (1+9)×9÷2 = 45',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：2+4+6+8+10+12 = ?',
    answer: 'C',
    options_json: ['A. 40', 'B. 41', 'C. 42', 'D. 44'],
    explanation: '等差数列求和：(2+12)×6÷2 = 42',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：11+12+13+14+15 = ?',
    answer: 'A',
    options_json: ['A. 65', 'B. 60', 'C. 70', 'D. 75'],
    explanation: '等差数列求和：(11+15)×5÷2 = 65',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：5+10+15+20+25 = ?',
    answer: 'D',
    options_json: ['A. 70', 'B. 72', 'C. 78', 'D. 75'],
    explanation: '等差数列求和：(5+25)×5÷2 = 75',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：99+98+97+96+95 = ?',
    answer: 'C',
    options_json: ['A. 480', 'B. 475', 'C. 485', 'D. 490'],
    explanation: '等差数列求和：(99+95)×5÷2 = 485',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：1+3+5+7+9+11 = ?',
    answer: 'B',
    options_json: ['A. 34', 'B. 36', 'C. 38', 'D. 40'],
    explanation: '等差数列求和：(1+11)×6÷2 = 36',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题 3题 (difficulty_id=3)
  {
    question_body: '计算：1+2+3+...+20 = ?',
    answer: 'C',
    options_json: ['A. 200', 'B. 205', 'C. 210', 'D. 220'],
    explanation: '等差数列求和：(1+20)×20÷2 = 210',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：2+5+8+11+14+17+20 = ?',
    answer: 'A',
    options_json: ['A. 77', 'B. 75', 'C. 80', 'D. 84'],
    explanation: '等差数列求和：(2+20)×7÷2 = 77',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：10+11+12+...+20 = ?',
    answer: 'D',
    options_json: ['A. 160', 'B. 165', 'C. 170', 'D. 165'],
    explanation: '等差数列求和：(10+20)×11÷2 = 165',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题 3题 (difficulty_id=4)
  {
    question_body: '计算：1+2+3+...+100 = ?',
    answer: 'C',
    options_json: ['A. 5000', 'B. 5050', 'C. 5050', 'D. 5100'],
    explanation: '高斯求和：(1+100)×100÷2 = 5050',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：1+3+5+...+19 = ?',
    answer: 'B',
    options_json: ['A. 90', 'B. 100', 'C. 110', 'D. 120'],
    explanation: '项数=(19-1)÷2+1=10项，求和：(1+19)×10÷2 = 100',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：100-99+98-97+...+2-1 = ?',
    answer: 'A',
    options_json: ['A. 50', 'B. 51', 'C. 49', 'D. 100'],
    explanation: '分组计算：(100-99)+(98-97)+...+(2-1) = 1×50 = 50',
    knowledge_id: 1,
    question_type_id: 2,
    difficulty_id: 4
  },
  // ===== 判断题 3题 =====
  {
    question_body: '判断：1+2+3+...+10 = 55',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '等差数列求和：(1+10)×10÷2 = 55',
    knowledge_id: 1,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：等差数列求和公式是(首项+末项)×项数÷2',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '等差数列求和公式：S=(a₁+aₙ)×n÷2',
    knowledge_id: 1,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：2+4+6+8+10 = 30',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '等差数列求和：(2+10)×5÷2 = 30',
    knowledge_id: 1,
    question_type_id: 3,
    difficulty_id: 2
  },
  // ===== 填空题 5题 =====
  // 简单填空 3题
  {
    question_body: '计算：3+6+9+12+15 = ____',
    answer: '45',
    options_json: null,
    explanation: '等差数列求和：(3+15)×5÷2 = 45',
    knowledge_id: 1,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：20+19+18+...+11 = ____',
    answer: '155',
    options_json: null,
    explanation: '等差数列求和：(20+11)×10÷2 = 155',
    knowledge_id: 1,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：5+10+15+...+50 = ____',
    answer: '275',
    options_json: null,
    explanation: '项数=(50-5)÷5+1=10项，求和：(5+50)×10÷2 = 275',
    knowledge_id: 1,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空 2题
  {
    question_body: '计算：1+2+3+...+50 = ____',
    answer: '1275',
    options_json: null,
    explanation: '高斯求和：(1+50)×50÷2 = 1275',
    knowledge_id: 1,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '计算：2+4+6+...+100 = ____',
    answer: '2550',
    options_json: null,
    explanation: '项数=(100-2)÷2+1=50项，求和：(2+100)×50÷2 = 2550',
    knowledge_id: 1,
    question_type_id: 1,
    difficulty_id: 4
  }
];

// ========== 知识点 2: 乘法巧算（分配律、结合律、25×4等）==========
const knowledge2Questions = [
  // ===== 单选题 12题 =====
  // 简单题 6题 (difficulty_id=2)
  {
    question_body: '计算：25×4 = ?',
    answer: 'C',
    options_json: ['A. 105', 'B. 101', 'C. 100', 'D. 99'],
    explanation: '25×4=100，常用巧算组合',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：125×8 = ?',
    answer: 'A',
    options_json: ['A. 1000', 'B. 1001', 'C. 999', 'D. 1005'],
    explanation: '125×8=1000，常用巧算组合',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：25×12 = ?',
    answer: 'B',
    options_json: ['A. 305', 'B. 300', 'C. 301', 'D. 299'],
    explanation: '25×12=25×4×3=100×3=300',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：4×25×8 = ?',
    answer: 'D',
    options_json: ['A. 700', 'B. 750', 'C. 800', 'D. 800'],
    explanation: '4×25=100，100×8=800',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：5×17×2 = ?',
    answer: 'C',
    options_json: ['A. 160', 'B. 165', 'C. 170', 'D. 175'],
    explanation: '5×2=10，10×17=170，乘法交换律和结合律',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '计算：125×16 = ?',
    answer: 'A',
    options_json: ['A. 2000', 'B. 2001', 'C. 1999', 'D. 2010'],
    explanation: '125×16=125×8×2=1000×2=2000',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题 3题 (difficulty_id=3)
  {
    question_body: '计算：(40+4)×25 = ?',
    answer: 'D',
    options_json: ['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100'],
    explanation: '乘法分配律：40×25+4×25=1000+100=1100',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：36×25 = ?',
    answer: 'A',
    options_json: ['A. 900', 'B. 901', 'C. 899', 'D. 905'],
    explanation: '36×25=9×(4×25)=9×100=900',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '计算：99×45 = ?',
    answer: 'A',
    options_json: ['A. 4455', 'B. 4456', 'C. 4454', 'D. 4460'],
    explanation: '99×45=(100-1)×45=4500-45=4455',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题 3题 (difficulty_id=4)
  {
    question_body: '计算：25×32×125 = ?',
    answer: 'A',
    options_json: ['A. 100000', 'B. 100001', 'C. 99999', 'D. 100005'],
    explanation: '25×32×125=25×4×8×125=(25×4)×(8×125)=100×1000=100000',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：101×56 = ?',
    answer: 'C',
    options_json: ['A. 5655', 'B. 5657', 'C. 5656', 'D. 5660'],
    explanation: '101×56=(100+1)×56=5600+56=5656',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '计算：98×102 = ?',
    answer: 'B',
    options_json: ['A. 9995', 'B. 9996', 'C. 9994', 'D. 10000'],
    explanation: '98×102=(100-2)×(100+2)=100²-2²=10000-4=9996',
    knowledge_id: 2,
    question_type_id: 2,
    difficulty_id: 4
  },
  // ===== 判断题 3题 =====
  {
    question_body: '判断：25×44 = 25×4×11 = 1100',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '25×44=25×4×11=100×11=1100，运用乘法结合律',
    knowledge_id: 2,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：(a+b)×c = a×c + b×c 这是乘法分配律',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '乘法分配律的定义',
    knowledge_id: 2,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '判断：125×24 = 125×8×3 = 3000',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '125×24=125×8×3=1000×3=3000，运用乘法结合律',
    knowledge_id: 2,
    question_type_id: 3,
    difficulty_id: 2
  },
  // ===== 填空题 5题 =====
  // 简单填空 3题
  {
    question_body: '计算：25×28 = ____',
    answer: '700',
    options_json: null,
    explanation: '25×28=25×4×7=100×7=700',
    knowledge_id: 2,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：8×125×5 = ____',
    answer: '5000',
    options_json: null,
    explanation: '8×125=1000，1000×5=5000',
    knowledge_id: 2,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '计算：4×8×25 = ____',
    answer: '800',
    options_json: null,
    explanation: '4×25=100，100×8=800',
    knowledge_id: 2,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空 2题
  {
    question_body: '计算：25×64×125 = ____',
    answer: '200000',
    options_json: null,
    explanation: '25×64×125=25×8×8×125=(25×8)×(8×125)=200×1000=200000',
    knowledge_id: 2,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '计算：999×8 = ____',
    answer: '7992',
    options_json: null,
    explanation: '999×8=(1000-1)×8=8000-8=7992',
    knowledge_id: 2,
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
    const allQuestions = [...knowledge1Questions, ...knowledge2Questions];

    for (const q of allQuestions) {
      await connection.execute(
        `INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
      totalInserted++;
    }

    console.log(`========== 生成结果 ==========`);
    console.log(`知识点1 (加减法凑整): ${knowledge1Questions.length} 题`);
    console.log(`  - 单选题: 12题 (简单6+中等3+困难3)`);
    console.log(`  - 判断题: 3题`);
    console.log(`  - 填空题: 5题 (简单3+困难2)`);
    console.log(`知识点2 (乘法巧算): ${knowledge2Questions.length} 题`);
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
