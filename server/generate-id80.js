const mysql = require('mysql2/promise');

const knowledge80Questions = [
  { question_body: '几何计数的基本方法是什么？', answer: 'A', options_json: ['A. 分类枚举', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '几何计数的基本方法是分类枚举。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数正方形时，通常用什么方法？', answer: 'B', options_json: ['A. 直接数', 'B. 分类数', 'C. 猜测', 'D. 随机'], explanation: '数正方形时，通常用分类法。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个2×2的网格中有多少个正方形？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 5', 'D. 6'], explanation: '2×2网格中有1个2×2正方形和4个1×1正方形，共5个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个3×3的网格中有多少个正方形？', answer: 'D', options_json: ['A. 9', 'B. 10', 'C. 12', 'D. 14'], explanation: '3×3网格中有1个3×3、4个2×2、9个1×1，共14个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '几何计数的关键是什么？', answer: 'A', options_json: ['A. 按大小分类', 'B. 直接数', 'C. 猜测', 'D. 随机'], explanation: '几何计数的关键是按大小分类。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个4×4的网格中有多少个正方形？', answer: 'B', options_json: ['A. 25', 'B. 30', 'C. 35', 'D. 40'], explanation: '4×4网格：1×1有16个，2×2有9个，3×3有4个，4×4有1个，共30个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数三角形时，通常用什么方法？', answer: 'C', options_json: ['A. 直接数', 'B. 猜测', 'C. 分类数', 'D. 随机'], explanation: '数三角形时，通常用分类法。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个2×2的网格中有多少个长方形？', answer: 'D', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 9'], explanation: '2×2网格中有9个不同大小的长方形。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个1×2的网格中有多少个长方形？', answer: 'A', options_json: ['A. 3', 'B. 2', 'C. 4', 'D. 5'], explanation: '1×2网格中有1个2×1、2个1×1，共3个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个3×3的网格中有多少个长方形？', answer: 'B', options_json: ['A. 20', 'B. 36', 'C. 45', 'D. 54'], explanation: '3×3网格中长方形个数=(1+2+3)×(1+2+3)=36个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个n×n的网格中，1×1的正方形有多少个？', answer: 'C', options_json: ['A. n', 'B. n²', 'C. n²', 'D. 2n'], explanation: '一个n×n的网格中，1×1的正方形有n²个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个n×n的网格中，所有正方形的个数是多少？', answer: 'D', options_json: ['A. n³', 'B. n⁴', 'C. n(n+1)/2', 'D. n(n+1)(2n+1)/6'], explanation: '正方形个数公式：1²+2²+...+n²=n(n+1)(2n+1)/6。', knowledge_id: 80, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个m×n的网格中，长方形的个数是多少？', answer: 'A', options_json: ['A. m(m+1)n(n+1)/4', 'B. mn', 'C. (m+n)²', 'D. 2mn'], explanation: '长方形个数=(1+2+...+m)×(1+2+...+n)=m(m+1)n(n+1)/4。', knowledge_id: 80, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个4×4的网格中有多少个长方形？', answer: 'B', options_json: ['A. 36', 'B. 100', 'C. 144', 'D. 81'], explanation: '4×4网格中长方形个数=(1+2+3+4)²=100个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个5×5的网格中有多少个正方形？', answer: 'C', options_json: ['A. 25', 'B. 30', 'C. 55', 'D. 70'], explanation: '5×5网格：1²+2²+3²+4²+5²=55个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个3×4的网格中有多少个长方形？', answer: 'D', options_json: ['A. 20', 'B. 30', 'C. 40', 'D. 60'], explanation: '3×4网格中长方形个数=(1+2+3)×(1+2+3+4)=6×10=60个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个5×5的网格中有多少个长方形？', answer: 'A', options_json: ['A. 225', 'B. 300', 'C. 400', 'D. 500'], explanation: '5×5网格中长方形个数=(1+2+3+4+5)²=225个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个n×n的网格中，2×2的正方形有多少个？', answer: 'B', options_json: ['A. (n-1)²', 'B. (n-1)²', 'C. n²-1', 'D. 2n'], explanation: '一个n×n的网格中，2×2的正方形有(n-1)²个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个6×6的网格中有多少个正方形？', answer: 'C', options_json: ['A. 70', 'B. 84', 'C. 91', 'D. 100'], explanation: '6×6网格：1²+2²+3²+4²+5²+6²=91个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个6×6的网格中有多少个长方形？', answer: 'D', options_json: ['A. 196', 'B. 225', 'C. 400', 'D. 441'], explanation: '6×6网格中长方形个数=(1+2+3+4+5+6)²=441个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个2×3的网格中有多少个长方形？', answer: 'A', options_json: ['A. 18', 'B. 12', 'C. 15', 'D. 20'], explanation: '2×3网格中长方形个数=(1+2)×(1+2+3)=3×6=18个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个n×n的网格中，k×k的正方形有多少个？(k≤n)', answer: 'B', options_json: ['A. nk', 'B. (n-k+1)²', 'C. n²-k²', 'D. (n+k-1)(n-k+1)/2'], explanation: 'k×k的正方形有(n-k+1)²个。', knowledge_id: 80, question_type_id: 2, difficulty_id: 4 },
  { question_body: '判断：几何计数的基本方法是分类枚举。', answer: '正确', options_json: ['正确', '错误'], explanation: '几何计数的基本方法是分类枚举。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个2×2的网格中有5个正方形。', answer: '正确', options_json: ['正确', '错误'], explanation: '2×2网格中有1个2×2和4个1×1，共5个。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个n×n的网格中，1×1的正方形有n²个。', answer: '正确', options_json: ['正确', '错误'], explanation: '一个n×n的网格中，1×1的正方形有n²个。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：几何计数的关键是按大小分类。', answer: '正确', options_json: ['正确', '错误'], explanation: '几何计数的关键是按大小分类。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个3×3的网格中有14个正方形。', answer: '正确', options_json: ['正确', '错误'], explanation: '3×3网格中有1个3×3、4个2×2、9个1×1，共14个。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一个m×n的网格中，长方形的个数是m(m+1)n(n+1)/4。', answer: '正确', options_json: ['正确', '错误'], explanation: '长方形个数=(1+2+...+m)×(1+2+...+n)=m(m+1)n(n+1)/4。', knowledge_id: 80, question_type_id: 3, difficulty_id: 2 },
  { question_body: '几何计数的基本方法是____。', answer: '分类枚举', options_json: null, explanation: '几何计数的基本方法是分类枚举。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个2×2的网格中有____个正方形。', answer: '5', options_json: null, explanation: '2×2网格中有1个2×2和4个1×1，共5个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个3×3的网格中有____个正方形。', answer: '14', options_json: null, explanation: '3×3网格中有1个3×3、4个2×2、9个1×1，共14个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个n×n的网格中，1×1的正方形有____个。', answer: 'n²', options_json: null, explanation: '一个n×n的网格中，1×1的正方形有n²个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个4×4的网格中有____个正方形。', answer: '30', options_json: null, explanation: '4×4网格：1×1有16个，2×2有9个，3×3有4个，4×4有1个，共30个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个4×4的网格中有____个长方形。', answer: '100', options_json: null, explanation: '4×4网格中长方形个数=(1+2+3+4)²=100个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个5×5的网格中有____个正方形。', answer: '55', options_json: null, explanation: '5×5网格：1²+2²+3²+4²+5²=55个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个6×6的网格中有____个正方形。', answer: '91', options_json: null, explanation: '6×6网格：1²+2²+3²+4²+5²+6²=91个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个6×6的网格中有____个长方形。', answer: '441', options_json: null, explanation: '6×6网格中长方形个数=(1+2+3+4+5+6)²=441个。', knowledge_id: 80, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个m×n的网格中，长方形的个数是____。', answer: 'm(m+1)n(n+1)/4', options_json: null, explanation: '长方形个数=(1+2+...+m)×(1+2+...+n)=m(m+1)n(n+1)/4。', knowledge_id: 80, question_type_id: 1, difficulty_id: 4 }
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
    for (const q of knowledge80Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点80题目生成完成，共插入 ${knowledge80Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
