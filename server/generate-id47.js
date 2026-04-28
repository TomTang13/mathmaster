const mysql = require('mysql2/promise');

const knowledge47Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '一个表面涂色的大正方体切成27个相同的小正方体，没有涂色的小正方体有几个？', answer: 'A', options_json: ['A. 1', 'B. 6', 'C. 8', 'D. 27'], explanation: '一个表面涂色的大正方体切成27个小正方体（3×3×3），没有涂色的小正方体只有中心位置的1个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成8个相同的小正方体，没有涂色的小正方体有几个？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. 2', 'D. 8'], explanation: '一个表面涂色的大正方体切成8个小正方体（2×2×2），没有涂色的小正方体只有中心位置的1个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成64个相同的小正方体（4×4×4），三面涂色的小正方体有几个？', answer: 'C', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], explanation: '三面涂色的小正方体位于大正方体的8个顶点，所以有8个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成27个小正方体（3×3×3），两面涂色的小正方体有几个？', answer: 'A', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 0'], explanation: '两面涂色的小正方体位于大正方体的棱上（不包括顶点）。3×3×3的结构中，两面涂色的有6个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成27个小正方体（3×3×3），一面涂色的小正方体有几个？', answer: 'B', options_json: ['A. 1', 'B. 6', 'C. 8', 'D. 12'], explanation: '一面涂色的小正方体位于大正方体的每个面中心位置。3×3×3的结构中，一面涂色的有6个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '染色问题中，三面涂色的小正方体位于大正方体的什么位置？', answer: 'A', options_json: ['A. 顶点', 'B. 棱中点', 'C. 面中心', 'D. 内部'], explanation: '三面涂色的小正方体位于大正方体的8个顶点位置。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '染色问题中，两面涂色的小正方体位于大正方体的什么位置？', answer: 'B', options_json: ['A. 顶点', 'B. 棱上', 'C. 面中心', 'D. 内部'], explanation: '两面涂色的小正方体位于大正方体的棱上（不包括顶点）。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '染色问题中，一面涂色的小正方体位于大正方体的什么位置？', answer: 'C', options_json: ['A. 顶点', 'B. 棱上', 'C. 面中心', 'D. 内部'], explanation: '一面涂色的小正方体位于大正方体的每个面的中心位置。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '染色问题中，没有涂色的小正方体位于大正方体的什么位置？', answer: 'D', options_json: ['A. 顶点', 'B. 棱上', 'C. 面中心', 'D. 内部'], explanation: '没有涂色的小正方体位于大正方体的内部。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成125个相同的小正方体（5×5×5），三面涂色的小正方体有几个？', answer: 'A', options_json: ['A. 8', 'B. 12', 'C. 6', 'D. 27'], explanation: '三面涂色的小正方体位于大正方体的8个顶点，所以有8个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个表面涂色的大正方体切成8个相同的小正方体（2×2×2），三面涂色的小正方体有几个？', answer: 'B', options_json: ['A. 1', 'B. 8', 'C. 6', 'D. 4'], explanation: '一个表面涂色的大正方体切成8个小正方体（2×2×2），所有小正方体都位于顶点位置，所以8个小正方体都是三面涂色。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  { question_body: '染色问题的基本原理是什么？', answer: 'A', options_json: ['A. 大正方体表面涂色后切成小正方体，根据位置确定涂色情况', 'B. 直接给每个小正方体涂色', 'C. 随机涂色', 'D. 与涂色无关'], explanation: '染色问题的基本原理是大正方体表面涂色后切成小正方体，根据位置确定涂色情况。', knowledge_id: 47, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '一个表面涂色的大正方体切成64个小正方体（4×4×4），两面涂色的小正方体有几个？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 24', 'D. 12'], explanation: '两面涂色的小正方体位于棱上（不包括顶点）。4×4×4的结构中，两面涂色的有24个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个表面涂色的大正方体切成125个小正方体（5×5×5），两面涂色的小正方体有几个？', answer: 'B', options_json: ['A. 24', 'B. 48', 'C. 54', 'D. 36'], explanation: '两面涂色的小正方体位于棱上（不包括顶点）。5×5×5的结构中，两面涂色的有48个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个表面涂色的大正方体切成27个小正方体（3×3×3），没有涂色的小正方体有几个？', answer: 'A', options_json: ['A. 1', 'B. 0', 'C. 8', 'D. 6'], explanation: '3×3×3的结构中，没有涂色的小正方体只有中心位置的1个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个表面涂色的大正方体切成64个小正方体（4×4×4），一面涂色的小正方体有几个？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 24', 'D. 12'], explanation: '一面涂色的小正方体位于每个面中心位置。4×4×4的结构中，一面涂色的有24个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个表面涂色的大正方体切成125个小正方体（5×5×5），一面涂色的小正方体有几个？', answer: 'B', options_json: ['A. 24', 'B. 54', 'C. 48', 'D. 36'], explanation: '一面涂色的小正方体位于每个面中心位置。5×5×5的结构中，一面涂色的有54个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个表面涂色的大正方体切成64个小正方体（4×4×4），没有涂色的小正方体有几个？', answer: 'A', options_json: ['A. 8', 'B. 1', 'C. 27', 'D. 0'], explanation: '4×4×4的结构中，没有涂色的小正方体是内部8个（2×2×2）。', knowledge_id: 47, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个表面涂色的大正方体切成216个小正方体（6×6×6），三面涂色的小正方体有几个？', answer: 'B', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 16'], explanation: '三面涂色的小正方体位于大正方体的8个顶点，所以有8个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个表面涂色的大正方体切成216个小正方体（6×6×6），两面涂色的小正方体有几个？', answer: 'C', options_json: ['A. 36', 'B. 48', 'C. 48', 'D. 72'], explanation: '两面涂色的小正方体位于棱上（不包括顶点）。6×6×6的结构中，两面涂色的有48个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个表面涂色的大正方体切成216个小正方体（6×6×6），一面涂色的小正方体有几个？', answer: 'A', options_json: ['A. 96', 'B. 54', 'C. 72', 'D. 108'], explanation: '一面涂色的小正方体位于每个面中心位置。6×6×6的结构中，一面涂色的有96个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个表面涂色的大正方体切成216个小正方体（6×6×6），没有涂色的小正方体有几个？', answer: 'B', options_json: ['A. 27', 'B. 64', 'C. 125', 'D. 8'], explanation: '6×6×6的结构中，没有涂色的小正方体是内部4×4×4=64个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个表面涂色的大正方体切成512个小正方体（8×8×8），两面涂色的小正方体有几个？', answer: 'C', options_json: ['A. 48', 'B. 96', 'C. 96', 'D. 72'], explanation: '两面涂色的小正方体位于棱上（不包括顶点）。8×8×8的结构中，两面涂色的有96个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个表面涂色的大正方体切成512个小正方体（8×8×8），一面涂色的小正方体有几个？', answer: 'D', options_json: ['A. 96', 'B. 108', 'C. 144', 'D. 384'], explanation: '一面涂色的小正方体位于每个面中心位置。8×8×8的结构中，一面涂色的有384个。', knowledge_id: 47, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：三面涂色的小正方体位于大正方体的顶点位置。', answer: '正确', options_json: ['正确', '错误'], explanation: '三面涂色的小正方体位于大正方体的8个顶点位置。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两面涂色的小正方体位于大正方体的面中心位置。', answer: '错误', options_json: ['正确', '错误'], explanation: '两面涂色的小正方体位于大正方体的棱上（不包括顶点），一面涂色的才位于面中心位置。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：没有涂色的小正方体位于大正方体的内部。', answer: '正确', options_json: ['正确', '错误'], explanation: '没有涂色的小正方体位于大正方体的内部。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3×3×3的大正方体切成27个小正方体，三面涂色的有8个。', answer: '正确', options_json: ['正确', '错误'], explanation: '3×3×3的大正方体切成27个小正方体，三面涂色的有8个（位于顶点）。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：4×4×4的大正方体切成64个小正方体，没有涂色的有8个。', answer: '错误', options_json: ['正确', '错误'], explanation: '4×4×4的大正方体切成64个小正方体，没有涂色的有(4-2)³=8个。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一面涂色的小正方体位于大正方体的每个面中心位置。', answer: '正确', options_json: ['正确', '错误'], explanation: '一面涂色的小正方体位于大正方体的每个面中心位置。', knowledge_id: 47, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '三面涂色的小正方体位于大正方体的____位置。', answer: '顶点', options_json: null, explanation: '三面涂色的小正方体位于大正方体的8个顶点位置。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  { question_body: '两面涂色的小正方体位于大正方体的____上。', answer: '棱', options_json: null, explanation: '两面涂色的小正方体位于大正方体的棱上（不包括顶点）。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一面涂色的小正方体位于大正方体的面____位置。', answer: '中心', options_json: null, explanation: '一面涂色的小正方体位于大正方体的每个面的中心位置。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  { question_body: '没有涂色的小正方体位于大正方体的____。', answer: '内部', options_json: null, explanation: '没有涂色的小正方体位于大正方体的内部。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  { question_body: '3×3×3的大正方体切成27个小正方体，三面涂色的有____个。', answer: '8', options_json: null, explanation: '三面涂色的小正方体位于8个顶点，所以有8个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  { question_body: '3×3×3的大正方体切成27个小正方体，没有涂色的有____个。', answer: '1', options_json: null, explanation: '3×3×3的结构中，没有涂色的小正方体只有中心位置的1个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '4×4×4的大正方体切成64个小正方体，两面涂色的有____个。', answer: '24', options_json: null, explanation: '两面涂色的小正方体位于棱上（不包括顶点）。4×4×4的结构中，两面涂色的有24个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 4 },
  { question_body: '5×5×5的大正方体切成125个小正方体，两面涂色的有____个。', answer: '48', options_json: null, explanation: '两面涂色的小正方体位于棱上（不包括顶点）。5×5×5的结构中，两面涂色的有48个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 4 },
  { question_body: '5×5×5的大正方体切成125个小正方体，一面涂色的有____个。', answer: '54', options_json: null, explanation: '一面涂色的小正方体位于每个面中心位置。5×5×5的结构中，一面涂色的有54个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 4 },
  { question_body: '6×6×6的大正方体切成216个小正方体，没有涂色的有____个。', answer: '64', options_json: null, explanation: '6×6×6的结构中，没有涂色的小正方体是内部4×4×4=64个。', knowledge_id: 47, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge47Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点47题目生成完成，共插入 ${knowledge47Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
