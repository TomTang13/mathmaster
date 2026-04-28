const mysql = require('mysql2/promise');

const knowledge61Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '分数裂项中，1/6等于什么？', answer: 'A', options_json: ['A. 1/2-1/3', 'B. 1/3-1/2', 'C. 1/2+1/3', 'D. 1/2×1/3'], explanation: '1/2-1/3=(3-2)/6=1/6。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '分数裂项的基本形式是什么？', answer: 'B', options_json: ['A. a/(b+c)', 'B. 1/[n(n+1)]=1/n-1/(n+1)', 'C. (a+b)/c', 'D. a×b/c'], explanation: '分数裂项的基本形式是1/[n(n+1)]=1/n-1/(n+1)。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/2-1/3等于多少？', answer: 'C', options_json: ['A. 1/5', 'B. 1/6', 'C. 1/6', 'D. 1/4'], explanation: '1/2-1/3=(3-2)/6=1/6。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/3-1/4等于多少？', answer: 'D', options_json: ['A. 1/12', 'B. 1/7', 'C. 1/5', 'D. 1/12'], explanation: '1/3-1/4=(4-3)/12=1/12。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/4-1/5等于多少？', answer: 'A', options_json: ['A. 1/20', 'B. 1/9', 'C. 1/6', 'D. 1/8'], explanation: '1/4-1/5=(5-4)/20=1/20。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '分数裂项的目的是什么？', answer: 'B', options_json: ['A. 变大分数', 'B. 简化计算', 'C. 变成分数', 'D. 不需要计算'], explanation: '分数裂项的目的是简化计算。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/5-1/6等于多少？', answer: 'C', options_json: ['A. 1/30', 'B. 1/11', 'C. 1/30', 'D. 1/15'], explanation: '1/5-1/6=(6-5)/30=1/30。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/6-1/7等于多少？', answer: 'D', options_json: ['A. 1/42', 'B. 1/13', 'C. 1/7', 'D. 1/42'], explanation: '1/6-1/7=(7-6)/42=1/42。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '分数裂项1/[n(n+1)]的结果是什么？', answer: 'A', options_json: ['A. 1/n-1/(n+1)', 'B. 1/n+1/(n+1)', 'C. 1/n×1/(n+1)', 'D. 1/n÷1/(n+1)'], explanation: '1/[n(n+1)]=1/n-1/(n+1)。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/7-1/8等于多少？', answer: 'B', options_json: ['A. 1/56', 'B. 1/56', 'C. 1/15', 'D. 1/1'], explanation: '1/7-1/8=(8-7)/56=1/56。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在分数裂项中，分子是几时可以进行裂项？', answer: 'C', options_json: ['A. 任意数', 'B. 0', 'C. 1', 'D. 2'], explanation: '当分子是1时，可以进行1/[n(n+1)]形式的裂项。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1/8-1/9等于多少？', answer: 'D', options_json: ['A. 1/72', 'B. 1/17', 'C. 1/9', 'D. 1/72'], explanation: '1/8-1/9=(9-8)/72=1/72。', knowledge_id: 61, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '计算：1/(1×2)+1/(2×3)+1/(3×4）', answer: 'B', options_json: ['A. 1/4', 'B. 3/4', 'C. 1/2', 'D. 1'], explanation: '1/(1×2)+1/(2×3)+1/(3×4)=1-1/2+1/2-1/3+1/3-1/4=1-1/4=3/4。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  { question_body: '计算：1/(2×3)+1/(3×4)+1/(4×5）', answer: 'C', options_json: ['A. 1/5', 'B. 2/5', 'C. 3/10', 'D. 1/2'], explanation: '1/(2×3)+1/(3×4)+1/(4×5)=1/2-1/3+1/3-1/4+1/4-1/5=1/2-1/5=3/10。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1/(3×4)-1/(4×5)等于多少？', answer: 'A', options_json: ['A. 1/12', 'B. 1/15', 'C. 1/20', 'D. 1/60'], explanation: '1/(3×4)-1/(4×5)=1/12-1/20=(5-3)/60=2/60=1/30。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  { question_body: '计算：1/(5×6)+1/(6×7）', answer: 'B', options_json: ['A. 1/30', 'B. 2/35', 'C. 1/35', 'D. 1/42'], explanation: '1/(5×6)+1/(6×7)=1/30+1/42=(7+5)/210=12/210=2/35。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1/(4×5)+1/(5×6)等于多少？', answer: 'C', options_json: ['A. 1/20', 'B. 2/15', 'C. 2/15', 'D. 1/30'], explanation: '1/(4×5)+1/(5×6)=1/20+1/30=(3+2)/60=5/60=1/12。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  { question_body: '计算：1/(1×3)+1/(3×5)+1/(5×7）', answer: 'A', options_json: ['A. 3/7', 'B. 2/7', 'C. 1/7', 'D. 4/7'], explanation: '1/(1×3)+1/(3×5)+1/(5×7)=(1/2)(1-1/3+1/3-1/5+1/5-1/7)=(1/2)(1-1/7)=3/7。', knowledge_id: 61, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '计算：1/(1×2)+1/(2×3)+1/(3×4)+...+1/(9×10）', answer: 'A', options_json: ['A. 9/10', 'B. 8/9', 'C. 7/8', 'D. 1'], explanation: '裂项后=1-1/2+1/2-1/3+...+1/9-1/10=1-1/10=9/10。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  { question_body: '计算：1/(2×4)+1/(4×6)+1/(6×8)+...+1/(18×20）', answer: 'B', options_json: ['A. 9/20', 'B. 9/40', 'C. 9/38', 'D. 1/20'], explanation: '原式=(1/2)(1/2-1/4+1/4-1/6+...+1/18-1/20)=(1/2)(1/2-1/20)=9/40。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  { question_body: '计算：1/(1×3)+1/(3×5)+1/(5×7)+...+1/(19×21）', answer: 'C', options_json: ['A. 10/21', 'B. 10/19', 'C. 10/21', 'D. 11/21'], explanation: '原式=(1/2)(1-1/3+1/3-1/5+...+1/19-1/21)=(1/2)(1-1/21)=10/21。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  { question_body: '计算：1/(3×7)+1/(7×11)+1/(11×15)+...+1/(35×39）', answer: 'D', options_json: ['A. 6/39', 'B. 6/35', 'C. 4/39', 'D. 4/35'], explanation: '原式=(1/4)(1/3-1/7+1/7-1/11+...+1/35-1/39)=(1/4)(1/3-1/39)=4/35。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  { question_body: '计算：1/(1×4)+1/(4×7)+1/(7×10)+...+1/(28×31）', answer: 'A', options_json: ['A. 10/31', 'B. 10/28', 'C. 10/34', 'D. 10/27'], explanation: '原式=(1/3)(1-1/4+1/4-1/7+...+1/28-1/31)=(1/3)(1-1/31)=10/31。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  { question_body: '计算：1/(2×5)+1/(5×8)+1/(8×11)+...+1/(26×29）', answer: 'B', options_json: ['A. 9/58', 'B. 9/58', 'C. 9/52', 'D. 9/62'], explanation: '原式=(1/3)(1/2-1/5+1/5-1/8+...+1/26-1/29)=(1/3)(1/2-1/29)=9/58。', knowledge_id: 61, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：1/(n(n+1))=1/n-1/(n+1)是正确的分数裂项公式。', answer: '正确', options_json: ['正确', '错误'], explanation: '1/(n(n+1))=1/n-1/(n+1)是正确的分数裂项公式。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：分数裂项可以使计算更简单。', answer: '正确', options_json: ['正确', '错误'], explanation: '分数裂项可以将复杂的分数加减运算简化为简单的抵消运算。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1/2-1/3=1/6是正确的。', answer: '正确', options_json: ['正确', '错误'], explanation: '1/2-1/3=(3-2)/6=1/6。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1/(3×5)=1/3-1/5。', answer: '错误', options_json: ['正确', '错误'], explanation: '1/(3×5)=1/15，而1/3-1/5=2/15，不相等。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：分数裂项只适用于分子为1的情况。', answer: '错误', options_json: ['正确', '错误'], explanation: '分数裂项有多种形式，不仅限于分子为1的情况。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：1/(1×2)+1/(2×3)=1-1/3=2/3。', answer: '正确', options_json: ['正确', '错误'], explanation: '1/(1×2)+1/(2×3)=1-1/2+1/2-1/3=1-1/3=2/3。', knowledge_id: 61, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '1/3-1/4=____。', answer: '1/12', options_json: null, explanation: '1/3-1/4=(4-3)/12=1/12。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1/4-1/5=____。', answer: '1/20', options_json: null, explanation: '1/4-1/5=(5-4)/20=1/20。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  { question_body: '分数裂项公式：1/[n(n+1)]=1/n-1/____。', answer: '(n+1)', options_json: null, explanation: '1/[n(n+1)]=1/n-1/(n+1)。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1/5-1/6=____。', answer: '1/30', options_json: null, explanation: '1/5-1/6=(6-5)/30=1/30。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1/6-1/7=____。', answer: '1/42', options_json: null, explanation: '1/6-1/7=(7-6)/42=1/42。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1/(1×2)+1/(2×3)=____。', answer: '2/3', options_json: null, explanation: '1/(1×2)+1/(2×3)=1-1/2+1/2-1/3=1-1/3=2/3。', knowledge_id: 61, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '1/(1×2)+1/(2×3)+1/(3×4)+1/(4×5)=____。', answer: '4/5', options_json: null, explanation: '原式=1-1/5=4/5。', knowledge_id: 61, question_type_id: 1, difficulty_id: 4 },
  { question_body: '1/(1×3)+1/(3×5)=____。', answer: '2/5', options_json: null, explanation: '原式=(1/2)(1-1/3+1/3-1/5)=(1/2)(1-1/5)=2/5。', knowledge_id: 61, question_type_id: 1, difficulty_id: 4 },
  { question_body: '1/(2×4)+1/(4×6)=____。', answer: '1/6', options_json: null, explanation: '原式=(1/2)(1/2-1/4+1/4-1/6)=(1/2)(1/2-1/6)=(1/2)(1/3)=1/6。', knowledge_id: 61, question_type_id: 1, difficulty_id: 4 },
  { question_body: '1/(1×2)+1/(2×3)+...+1/(8×9)+1/(9×10)=____。', answer: '9/10', options_json: null, explanation: '原式=1-1/10=9/10。', knowledge_id: 61, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge61Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点61题目生成完成，共插入 ${knowledge61Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
