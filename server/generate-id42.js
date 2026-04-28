const mysql = require('mysql2/promise');

const knowledge42Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '勾股定理的内容是？', answer: 'A', options_json: ['A. 直角三角形两直角边的平方和等于斜边的平方', 'B. 任意三角形两边的平方和等于第三边的平方', 'C. 直角三角形两直角边的平方差等于斜边的平方', 'D. 任意三角形都满足勾股定理'], explanation: '勾股定理的内容是直角三角形两直角边的平方和等于斜边的平方。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股定理的公式是？', answer: 'B', options_json: ['A. a+b=c', 'B. a²+b²=c²', 'C. a²+b²=c', 'D. a+b²=c²'], explanation: '勾股定理的公式是a²+b²=c²，其中a、b是直角边，c是斜边。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股定理的逆定理用于判断什么？', answer: 'C', options_json: ['A. 判断三角形是否是等腰三角形', 'B. 判断三角形是否是等边三角形', 'C. 判断三角形是否是直角三角形', 'D. 判断三角形是否是钝角三角形'], explanation: '勾股定理的逆定理用于判断三角形是否是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股逆定理：如果三角形的两边平方和等于第三边的平方，那么这个三角形是？', answer: 'A', options_json: ['A. 直角三角形', 'B. 锐角三角形', 'C. 钝角三角形', 'D. 等腰三角形'], explanation: '勾股逆定理：如果三角形的两边平方和等于第三边的平方，那么这个三角形是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '常见的勾股数（3,4,5）满足什么关系？', answer: 'B', options_json: ['A. 3+4=5', 'B. 3²+4²=5²', 'C. 3²×4²=5²', 'D. 3²+4²=25'], explanation: '3²+4²=9+16=25=5²。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股定理适用于什么三角形？', answer: 'A', options_json: ['A. 直角三角形', 'B. 锐角三角形', 'C. 钝角三角形', 'D. 任意三角形'], explanation: '勾股定理只适用于直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在勾股定理中，c通常表示什么？', answer: 'B', options_json: ['A. 较短的一条直角边', 'B. 斜边', 'C. 最长边一定是斜边', 'D. 任意一条边'], explanation: '在勾股定理中，c通常表示斜边，即直角所对的边。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '常见的勾股数（5,12,13）满足什么关系？', answer: 'C', options_json: ['A. 5+12=13', 'B. 5×12=13', 'C. 5²+12²=13²', 'D. 5²×12²=13²'], explanation: '5²+12²=25+144=169=13²。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股定理的应用不包括？', answer: 'D', options_json: ['A. 计算直角三角形的边长', 'B. 判断三角形是否是直角三角形', 'C. 解决实际测量问题', 'D. 计算三角形面积'], explanation: '勾股定理主要用于计算边长和判断直角，不包括直接计算面积。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果一个三角形的边长分别是6、8、10，这个三角形是？', answer: 'A', options_json: ['A. 直角三角形', 'B. 锐角三角形', 'C. 钝角三角形', 'D. 无法确定'], explanation: '6²+8²=36+64=100=10²，所以是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '常见的勾股数（8,15,17）满足什么关系？', answer: 'B', options_json: ['A. 8+15=17', 'B. 8²+15²=17²', 'C. 8²×15²=17²', 'D. 8²+15²=289'], explanation: '8²+15²=64+225=289=17²。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  { question_body: '勾股定理的验证方法不包括？', answer: 'D', options_json: ['A. 面积法', 'B. 拼图法', 'C. 代数法', 'D. 测量法'], explanation: '勾股定理的验证方法包括面积法、拼图法、代数法，不包括测量法。', knowledge_id: 42, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '直角三角形的两条直角边分别是5和12，斜边是多少？', answer: 'B', options_json: ['A. 13', 'B. 13', 'C. 17', 'D. 14'], explanation: 'c²=5²+12²=25+144=169，c=13。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  { question_body: '直角三角形的斜边是25，一条直角边是24，另一条直角边是多少？', answer: 'C', options_json: ['A. 6', 'B. 7', 'C. 7', 'D. 8'], explanation: 'b²=25²-24²=625-576=49，b=7。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  { question_body: '三角形的边长分别是7、24、25，这个三角形是什么三角形？', answer: 'A', options_json: ['A. 直角三角形', 'B. 锐角三角形', 'C. 钝角三角形', 'D. 等腰三角形'], explanation: '7²+24²=49+576=625=25²，所以是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  { question_body: '直角三角形的两条直角边分别是8和15，斜边是多少？', answer: 'B', options_json: ['A. 16', 'B. 17', 'C. 18', 'D. 19'], explanation: 'c²=8²+15²=64+225=289，c=17。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  { question_body: '等腰直角三角形的直角边是6，斜边是多少？', answer: 'C', options_json: ['A. 6√2', 'B. 6√3', 'C. 6√2', 'D. 12'], explanation: 'c²=6²+6²=72，c=6√2。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  { question_body: '直角三角形的斜边是10，一条直角边是6，另一条直角边是多少？', answer: 'D', options_json: ['A. 4', 'B. 6', 'C. 7', 'D. 8'], explanation: 'b²=10²-6²=100-36=64，b=8。', knowledge_id: 42, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '直角三角形的周长是60，斜边是25，另外两条边分别是多少？', answer: 'B', options_json: ['A. 12和23', 'B. 15和20', 'C. 10和25', 'D. 18和17'], explanation: '设直角边为a和b，a+b=60-25=35，a²+b²=25²=625，(a+b)²=35²=1225，2ab=1225-625=600，ab=300，解得a=15，b=20。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个等腰三角形的底是16，腰是10，这个三角形是什么三角形？', answer: 'A', options_json: ['A. 钝角三角形', 'B. 直角三角形', 'C. 锐角三角形', 'D. 无法确定'], explanation: '腰的平方=10²=100，底的一半的平方=(8)²=64，因为100<64+? 10²<8²+? 100<64+36=100，所以是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  { question_body: '直角三角形的两条直角边分别是9和40，斜边是多少？', answer: 'C', options_json: ['A. 41', 'B. 42', 'C. 41', 'D. 49'], explanation: 'c²=9²+40²=81+1600=1681，c=41。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  { question_body: '三角形的边长分别是9、12、15，这个三角形是什么三角形？', answer: 'B', options_json: ['A. 锐角三角形', 'B. 钝角三角形', 'C. 直角三角形', 'D. 等腰三角形'], explanation: '9²+12²=81+144=225，15²=225，所以9²+12²=15²，是直角三角形。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  { question_body: '直角三角形的面积是30，一条直角边是5，另一条直角边是多少？', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 15', 'D. 18'], explanation: '面积=1/2×5×b=30，b=12。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  { question_body: '直角三角形的两条直角边分别是11和60，斜边是多少？', answer: 'D', options_json: ['A. 60', 'B. 61', 'C. 62', 'D. 61'], explanation: 'c²=11²+60²=121+3600=3721，c=61。', knowledge_id: 42, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：勾股定理的内容是直角三角形两直角边的平方和等于斜边的平方。', answer: '正确', options_json: ['正确', '错误'], explanation: '勾股定理的内容是直角三角形两直角边的平方和等于斜边的平方。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：勾股定理适用于所有三角形。', answer: '错误', options_json: ['正确', '错误'], explanation: '勾股定理只适用于直角三角形。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：勾股定理的逆定理用于判断三角形是否是直角三角形。', answer: '正确', options_json: ['正确', '错误'], explanation: '勾股定理的逆定理用于判断三角形是否是直角三角形。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果三角形的两边平方和等于第三边的平方，那么这个三角形是直角三角形。', answer: '正确', options_json: ['正确', '错误'], explanation: '勾股逆定理：如果三角形的两边平方和等于第三边的平方，那么这个三角形是直角三角形。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：勾股数（3,4,5）满足3²+4²=5²。', answer: '正确', options_json: ['正确', '错误'], explanation: '3²+4²=9+16=25=5²。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果一个三角形的边长分别是6、8、9，这个三角形是直角三角形。', answer: '错误', options_json: ['正确', '错误'], explanation: '6²+8²=36+64=100，9²=81，100≠81，所以不是直角三角形。', knowledge_id: 42, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '勾股定理的公式是a²+b²=____。', answer: 'c²', options_json: null, explanation: '勾股定理的公式是a²+b²=c²，其中a、b是直角边，c是斜边。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  { question_body: '勾股定理适用于____三角形。', answer: '直角', options_json: null, explanation: '勾股定理只适用于直角三角形。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  { question_body: '勾股定理的逆定理用于判断三角形是否是____三角形。', answer: '直角', options_json: null, explanation: '勾股定理的逆定理用于判断三角形是否是直角三角形。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  { question_body: '常见的勾股数（3,4,5）满足3²+4²=____。', answer: '25', options_json: null, explanation: '3²+4²=9+16=25=5²。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在勾股定理中，c表示____。', answer: '斜边', options_json: null, explanation: '在勾股定理中，c表示斜边，即直角所对的边。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  { question_body: '直角三角形的两条直角边分别是3和4，斜边是____。', answer: '5', options_json: null, explanation: 'c²=3²+4²=9+16=25，c=5。', knowledge_id: 42, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '直角三角形的两条直角边分别是5和12，斜边是____。', answer: '13', options_json: null, explanation: 'c²=5²+12²=25+144=169，c=13。', knowledge_id: 42, question_type_id: 1, difficulty_id: 4 },
  { question_body: '直角三角形的斜边是25，一条直角边是24，另一条直角边是____。', answer: '7', options_json: null, explanation: 'b²=25²-24²=625-576=49，b=7。', knowledge_id: 42, question_type_id: 1, difficulty_id: 4 },
  { question_body: '直角三角形的两条直角边分别是8和15，斜边是____。', answer: '17', options_json: null, explanation: 'c²=8²+15²=64+225=289，c=17。', knowledge_id: 42, question_type_id: 1, difficulty_id: 4 },
  { question_body: '直角三角形的两条直角边分别是9和40，斜边是____。', answer: '41', options_json: null, explanation: 'c²=9²+40²=81+1600=1681，c=41。', knowledge_id: 42, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge42Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点42题目生成完成，共插入 ${knowledge42Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
