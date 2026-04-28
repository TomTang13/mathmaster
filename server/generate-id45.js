const mysql = require('mysql2/promise');

const knowledge45Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '长方体的表面积公式是？', answer: 'A', options_json: ['A. 2(ab+bc+ac)', 'B. ab+bc+ac', 'C. 2abc', 'D. a+b+c'], explanation: '长方体的表面积公式是2(ab+bc+ac)，其中a、b、c是长、宽、高。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '长方体的体积公式是？', answer: 'B', options_json: ['A. abc/2', 'B. abc', 'C. a+b+c', 'D. 2(a+b+c)'], explanation: '长方体的体积公式是V=abc。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方体的表面积公式是？', answer: 'C', options_json: ['A. 4a²', 'B. 2a²', 'C. 6a²', 'D. a³'], explanation: '正方体的表面积公式是S=6a²，其中a是边长。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方体的体积公式是？', answer: 'A', options_json: ['A. a³', 'B. 6a²', 'C. 4a²', 'D. a²'], explanation: '正方体的体积公式是V=a³。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '长方体有几个面？', answer: 'B', options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], explanation: '长方体有6个面。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方体有几个面？', answer: 'A', options_json: ['A. 6', 'B. 4', 'C. 8', 'D. 12'], explanation: '正方体有6个面，且每个面都是正方形。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '长方体的长、宽、高分别用字母表示时，通常用什么字母？', answer: 'C', options_json: ['A. a, b, c', 'B. a, a, a', 'C. a, b, h', 'D. l, w, h'], explanation: '长方体的长、宽、高通常用a、b、c或l、w、h表示。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '正方体的棱长通常用什么字母表示？', answer: 'A', options_json: ['A. a', 'B. b', 'C. c', 'D. d'], explanation: '正方体的棱长通常用a表示。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '长方体的表面积公式中，ab、bc、ac分别表示什么？', answer: 'B', options_json: ['A. 三个不同的面', 'B. 三个两两相邻面的面积', 'C. 三个面的周长', 'D. 三个对面的面积'], explanation: 'ab、bc、ac分别表示长方体三个两两相邻面的面积。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个正方体的棱长是3厘米，它的表面积是多少平方厘米？', answer: 'C', options_json: ['A. 27', 'B. 36', 'C. 54', 'D. 72'], explanation: '正方体表面积=6×3²=6×9=54平方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一个正方体的棱长是2厘米，它的体积是多少立方厘米？', answer: 'B', options_json: ['A. 6', 'B. 8', 'C. 12', 'D. 24'], explanation: '正方体体积=2³=8立方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  { question_body: '长方体的体积单位是什么？', answer: 'A', options_json: ['A. 立方单位', 'B. 平方单位', 'C. 单位', 'D. 无法确定'], explanation: '长方体的体积单位是立方单位。', knowledge_id: 45, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '长方体的长、宽、高分别是5厘米、4厘米、3厘米，它的表面积是多少平方厘米？', answer: 'B', options_json: ['A. 60', 'B. 94', 'C. 47', 'D. 120'], explanation: '表面积=2(5×4+4×3+5×3)=2(20+12+15)=2×47=94平方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  { question_body: '长方体的长、宽、高分别是6厘米、5厘米、4厘米，它的体积是多少立方厘米？', answer: 'C', options_json: ['A. 120', 'B. 100', 'C. 120', 'D. 150'], explanation: '体积=6×5×4=120立方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  { question_body: '长方体的表面积是94平方厘米，已知长5厘米、宽4厘米，高是多少厘米？', answer: 'A', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '94=2(5×4+4×h+5×h)=2(20+9h)=40+18h，18h=54，h=3厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  { question_body: '长方体的体积是120立方厘米，已知长6厘米、宽5厘米，高是多少厘米？', answer: 'B', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '120=6×5×h，h=120÷30=4厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一个长方体的表面积是100平方厘米，它的长是5厘米，宽是4厘米，高是多少厘米？', answer: 'C', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '100=2(5×4+4×h+5×h)=2(20+9h)=40+18h，18h=60，h=60/18=10/3厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  { question_body: '长方体的长、宽、高分别是8厘米、6厘米、5厘米，它的表面积是多少平方厘米？', answer: 'D', options_json: ['A. 120', 'B. 180', 'C. 200', 'D. 236'], explanation: '表面积=2(8×6+6×5+8×5)=2(48+30+40)=2×118=236平方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一个长方体的体积是180立方厘米，它的长是9厘米，宽是5厘米，高是多少厘米？', answer: 'B', options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], explanation: '180=9×5×h，h=180÷45=4厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个长方体的表面积是208平方厘米，它的长是8厘米，宽是6厘米，高是多少厘米？', answer: 'C', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '208=2(8×6+6×h+8×h)=2(48+14h)=96+28h，28h=112，h=4厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个正方体的体积是125立方厘米，它的棱长是多少厘米？', answer: 'A', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: 'a³=125，a=5厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一个正方体的表面积是150平方厘米，它的棱长是多少厘米？', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '6a²=150，a²=25，a=5厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  { question_body: '长方体的长、宽、高分别是10厘米、8厘米、6厘米，它的体积是多少立方厘米？', answer: 'D', options_json: ['A. 360', 'B. 400', 'C. 480', 'D. 480'], explanation: '体积=10×8×6=480立方厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  { question_body: '长方体的体积是200立方厘米，它的长是10厘米，宽是5厘米，高是多少厘米？', answer: 'A', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 8'], explanation: '200=10×5×h，h=200÷50=4厘米。', knowledge_id: 45, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：长方体的表面积公式是2(ab+bc+ac)。', answer: '正确', options_json: ['正确', '错误'], explanation: '长方体的表面积公式是2(ab+bc+ac)。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：长方体的体积公式是abc。', answer: '正确', options_json: ['正确', '错误'], explanation: '长方体的体积公式是V=abc。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：正方体的表面积公式是6a²。', answer: '正确', options_json: ['正确', '错误'], explanation: '正方体的表面积公式是S=6a²。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：正方体的体积公式是a³。', answer: '正确', options_json: ['正确', '错误'], explanation: '正方体的体积公式是V=a³。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：长方体有8个面。', answer: '错误', options_json: ['正确', '错误'], explanation: '长方体有6个面，不是8个。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：正方体是特殊的长方体。', answer: '正确', options_json: ['正确', '错误'], explanation: '正方体是特殊的长方体，其长、宽、高都相等。', knowledge_id: 45, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '长方体的表面积公式是____(ab+bc+ac)。', answer: '2', options_json: null, explanation: '长方体的表面积公式是2(ab+bc+ac)。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  { question_body: '长方体的体积公式是____。', answer: 'abc', options_json: null, explanation: '长方体的体积公式是V=abc。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正方体的表面积公式是____a²。', answer: '6', options_json: null, explanation: '正方体的表面积公式是S=6a²。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正方体的体积公式是____。', answer: 'a³', options_json: null, explanation: '正方体的体积公式是V=a³。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  { question_body: '长方体有____个面。', answer: '6', options_json: null, explanation: '长方体有6个面。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  { question_body: '正方体有____个面。', answer: '6', options_json: null, explanation: '正方体有6个面。', knowledge_id: 45, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '长方体的长、宽、高分别是5厘米、4厘米、3厘米，它的表面积是____平方厘米。', answer: '94', options_json: null, explanation: '表面积=2(5×4+4×3+5×3)=2(20+12+15)=2×47=94平方厘米。', knowledge_id: 45, question_type_id: 1, difficulty_id: 4 },
  { question_body: '长方体的长、宽、高分别是6厘米、5厘米、4厘米，它的体积是____立方厘米。', answer: '120', options_json: null, explanation: '体积=6×5×4=120立方厘米。', knowledge_id: 45, question_type_id: 1, difficulty_id: 4 },
  { question_body: '正方体的棱长是5厘米，它的表面积是____平方厘米。', answer: '150', options_json: null, explanation: '正方体表面积=6×5²=6×25=150平方厘米。', knowledge_id: 45, question_type_id: 1, difficulty_id: 4 },
  { question_body: '正方体的体积是27立方厘米，它的棱长是____厘米。', answer: '3', options_json: null, explanation: 'a³=27，a=3厘米。', knowledge_id: 45, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge45Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点45题目生成完成，共插入 ${knowledge45Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
