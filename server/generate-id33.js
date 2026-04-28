const mysql = require('mysql2/promise');

const knowledge33Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '圆的面积公式是？', answer: 'B', options_json: ['A. π×r', 'B. π×r²', 'C. 2×π×r', 'D. π×d'], explanation: '圆的面积公式是π×r²。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆的周长公式是？', answer: 'C', options_json: ['A. π×r', 'B. π×r²', 'C. 2×π×r', 'D. π×d²'], explanation: '圆的周长公式是2×π×r。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扇形的面积公式是？', answer: 'D', options_json: ['A. π×r²', 'B. 2×π×r', 'C. π×r×θ', 'D. (θ/360)×π×r²'], explanation: '扇形的面积公式是(θ/360)×π×r²，其中θ是圆心角的度数。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '直径是半径的？', answer: 'B', options_json: ['A. 一半', 'B. 2倍', 'C. 3倍', 'D. 4倍'], explanation: '直径是半径的2倍。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: 'π的近似值是？', answer: 'C', options_json: ['A. 3.14', 'B. 3.1416', 'C. 3.14', 'D. 3.14159'], explanation: 'π的近似值是3.14。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个圆的半径是3厘米，它的面积是？', answer: 'B', options_json: ['A. 9π平方厘米', 'B. 9π平方厘米', 'C. 6π平方厘米', 'D. 3π平方厘米'], explanation: '面积=π×3²=9π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个圆的直径是8厘米，它的半径是？', answer: 'A', options_json: ['A. 4厘米', 'B. 8厘米', 'C. 16厘米', 'D. 2厘米'], explanation: '半径=直径÷2=8÷2=4厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个圆的周长是12.56厘米，它的半径是？', answer: 'B', options_json: ['A. 1厘米', 'B. 2厘米', 'C. 3厘米', 'D. 4厘米'], explanation: '半径=周长÷(2×π)=12.56÷(2×3.14)=2厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个扇形的圆心角是90度，半径是4厘米，它的面积是？', answer: 'C', options_json: ['A. 4π平方厘米', 'B. 8π平方厘米', 'C. 4π平方厘米', 'D. 16π平方厘米'], explanation: '面积=(90/360)×π×4²=4π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个扇形的圆心角是180度，半径是6厘米，它的面积是？', answer: 'D', options_json: ['A. 6π平方厘米', 'B. 12π平方厘米', 'C. 18π平方厘米', 'D. 18π平方厘米'], explanation: '面积=(180/360)×π×6²=18π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆的面积与半径的关系是？', answer: 'C', options_json: ['A. 成正比', 'B. 成反比', 'C. 与半径的平方成正比', 'D. 与半径的平方成反比'], explanation: '圆的面积与半径的平方成正比。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  { question_body: '扇形的面积与圆心角的关系是？', answer: 'A', options_json: ['A. 成正比', 'B. 成反比', 'C. 与圆心角的平方成正比', 'D. 与圆心角的平方成反比'], explanation: '扇形的面积与圆心角成正比。', knowledge_id: 33, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个圆的面积是25π平方厘米，它的半径是？', answer: 'B', options_json: ['A. 4厘米', 'B. 5厘米', 'C. 6厘米', 'D. 7厘米'], explanation: '半径=√(面积/π)=√(25π/π)=5厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆的周长是18.84厘米，它的面积是？', answer: 'C', options_json: ['A. 9π平方厘米', 'B. 18π平方厘米', 'C. 9π平方厘米', 'D. 36π平方厘米'], explanation: '半径=18.84÷(2×3.14)=3厘米，面积=π×3²=9π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个扇形的圆心角是60度，半径是9厘米，它的面积是？', answer: 'D', options_json: ['A. 9π平方厘米', 'B. 18π平方厘米', 'C. 27π平方厘米', 'D. 13.5π平方厘米'], explanation: '面积=(60/360)×π×9²=13.5π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆的半径扩大2倍，它的面积扩大？', answer: 'B', options_json: ['A. 2倍', 'B. 4倍', 'C. 6倍', 'D. 8倍'], explanation: '面积与半径的平方成正比，所以半径扩大2倍，面积扩大4倍。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个扇形的圆心角不变，半径扩大3倍，它的面积扩大？', answer: 'D', options_json: ['A. 3倍', 'B. 6倍', 'C. 9倍', 'D. 9倍'], explanation: '面积与半径的平方成正比，所以半径扩大3倍，面积扩大9倍。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个圆的面积是12.56平方厘米，它的周长是？', answer: 'A', options_json: ['A. 12.56厘米', 'B. 25.12厘米', 'C. 6.28厘米', 'D. 18.84厘米'], explanation: '半径=√(12.56/3.14)=2厘米，周长=2×3.14×2=12.56厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个圆环的外圆半径是5厘米，内圆半径是3厘米，它的面积是？', answer: 'B', options_json: ['A. 16π平方厘米', 'B. 16π平方厘米', 'C. 25π平方厘米', 'D. 9π平方厘米'], explanation: '面积=外圆面积-内圆面积=π×5²-π×3²=16π平方厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个扇形的圆心角是120度，面积是12π平方厘米，它的半径是？', answer: 'C', options_json: ['A. 3厘米', 'B. 4厘米', 'C. 6厘米', 'D. 8厘米'], explanation: '半径=√(面积×360/(θ×π))=√(12π×360/(120×π))=√36=6厘米。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆的周长和面积数值相等，它的半径是？', answer: 'D', options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 2'], explanation: '2πr=πr²，解得r=2。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个扇形的弧长是6.28厘米，半径是4厘米，它的圆心角是？', answer: 'A', options_json: ['A. 90度', 'B. 120度', 'C. 180度', 'D. 270度'], explanation: '弧长=θ/360×2πr，所以θ=弧长×360/(2πr)=6.28×360/(2×3.14×4)=90度。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个圆的面积是另一个圆的4倍，它们的半径比是？', answer: 'B', options_json: ['A. 1:2', 'B. 1:2', 'C. 2:1', 'D. 4:1'], explanation: '面积比是半径比的平方，所以半径比是1:2。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个扇形的面积是所在圆面积的1/3，它的圆心角是？', answer: 'C', options_json: ['A. 90度', 'B. 120度', 'C. 120度', 'D. 180度'], explanation: '圆心角=360度×1/3=120度。', knowledge_id: 33, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：圆的面积公式是π×r²。', answer: '正确', options_json: ['正确', '错误'], explanation: '圆的面积公式是π×r²。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆的周长公式是π×r²。', answer: '错误', options_json: ['正确', '错误'], explanation: '圆的周长公式是2×π×r。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：扇形的面积与圆心角成正比。', answer: '正确', options_json: ['正确', '错误'], explanation: '扇形的面积与圆心角成正比。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：圆的面积与半径成正比。', answer: '错误', options_json: ['正确', '错误'], explanation: '圆的面积与半径的平方成正比。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：直径是半径的2倍。', answer: '正确', options_json: ['正确', '错误'], explanation: '直径是半径的2倍。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：π的值是3.14。', answer: '正确', options_json: ['正确', '错误'], explanation: 'π的近似值是3.14。', knowledge_id: 33, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '圆的面积公式是π×____²。', answer: 'r', options_json: null, explanation: '圆的面积公式是π×r²。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆的周长公式是2×π×____。', answer: 'r', options_json: null, explanation: '圆的周长公式是2×π×r。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  { question_body: '扇形的面积公式是(θ/360)×π×____²。', answer: 'r', options_json: null, explanation: '扇形的面积公式是(θ/360)×π×r²。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  { question_body: '直径是半径的____倍。', answer: '2', options_json: null, explanation: '直径是半径的2倍。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  { question_body: 'π的近似值是____。', answer: '3.14', options_json: null, explanation: 'π的近似值是3.14。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个圆的半径是4厘米，它的面积是____π平方厘米。', answer: '16', options_json: null, explanation: '面积=π×4²=16π平方厘米。', knowledge_id: 33, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '一个圆环的外圆半径是6厘米，内圆半径是4厘米，它的面积是____π平方厘米。', answer: '20', options_json: null, explanation: '面积=π×6²-π×4²=20π平方厘米。', knowledge_id: 33, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个扇形的圆心角是90度，面积是9π平方厘米，它的半径是____厘米。', answer: '6', options_json: null, explanation: '半径=√(面积×360/(θ×π))=√(9π×360/(90×π))=√36=6厘米。', knowledge_id: 33, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个圆的周长是25.12厘米，它的面积是____π平方厘米。', answer: '16', options_json: null, explanation: '半径=25.12÷(2×3.14)=4厘米，面积=π×4²=16π平方厘米。', knowledge_id: 33, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一个扇形的面积是所在圆面积的1/4，它的圆心角是____度。', answer: '90', options_json: null, explanation: '圆心角=360度×1/4=90度。', knowledge_id: 33, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge33Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点33题目生成完成，共插入 ${knowledge33Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
