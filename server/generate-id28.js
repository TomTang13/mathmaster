const mysql = require('mysql2/promise');

const knowledge28Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '标准数独的棋盘是多大的？', answer: 'B', options_json: ['A. 6×6', 'B. 9×9', 'C. 12×12', 'D. 16×16'], explanation: '标准数独的棋盘是9×9的。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数独规则中，每行、每列、每个3×3宫格内的数字必须？', answer: 'C', options_json: ['A. 全部相同', 'B. 都是偶数', 'C. 1-9不重复', 'D. 都是奇数'], explanation: '数独规则要求每行、每列、每个3×3宫格内的数字1-9不重复。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，一个3×3宫格内有多少个单元格？', answer: 'A', options_json: ['A. 9', 'B. 6', 'C. 12', 'D. 15'], explanation: '一个3×3宫格内有9个单元格。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '标准数独中，整个棋盘共有多少个3×3宫格？', answer: 'B', options_json: ['A. 6', 'B. 9', 'C. 12', 'D. 16'], explanation: '标准数独中，整个棋盘共有9个3×3宫格。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，下列哪个数字可以填入空格？', answer: 'D', options_json: ['A. 0', 'B. 10', 'C. 负数', 'D. 5'], explanation: '数独中只能填入1-9的数字。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数独的英文名称是？', answer: 'A', options_json: ['A. Sudoku', 'B. Sudoko', 'C. Sodoku', 'D. Sudokuu'], explanation: '数独的英文名称是Sudoku。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，如果某行已经有数字5，那么该行的其他单元格？', answer: 'B', options_json: ['A. 可以再填5', 'B. 不能再填5', 'C. 必须填5', 'D. 可以填0'], explanation: '数独规则要求每行数字不重复，所以该行其他单元格不能再填5。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，如果某列已经有数字8，那么该列的其他单元格？', answer: 'B', options_json: ['A. 可以再填8', 'B. 不能再填8', 'C. 必须填8', 'D. 可以填9'], explanation: '数独规则要求每列数字不重复，所以该列其他单元格不能再填8。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，如果某个3×3宫格已经有数字3，那么该宫格的其他单元格？', answer: 'B', options_json: ['A. 可以再填3', 'B. 不能再填3', 'C. 必须填3', 'D. 可以填4'], explanation: '数独规则要求每个3×3宫格内数字不重复，所以该宫格其他单元格不能再填3。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '数独的起源可以追溯到哪个国家？', answer: 'C', options_json: ['A. 中国', 'B. 美国', 'C. 日本', 'D. 英国'], explanation: '数独起源于日本，由日本出版商 Nikoli 在1984年命名。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在数独中，空格需要填入的数字范围是？', answer: 'D', options_json: ['A. 0-9', 'B. 1-10', 'C. 2-8', 'D. 1-9'], explanation: '数独中只能填入1-9的数字。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  { question_body: '标准数独共有多少个单元格？', answer: 'A', options_json: ['A. 81', 'B. 64', 'C. 100', 'D. 121'], explanation: '标准数独是9×9的棋盘，共有81个单元格。', knowledge_id: 28, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在数独中，如果某行有数字1、2、3、4、5、6、7、8，那么该行的最后一个单元格应该填？', answer: 'A', options_json: ['A. 9', 'B. 0', 'C. 重复的数字', 'D. 任意数字'], explanation: '数独规则要求每行数字1-9不重复，所以最后一个单元格应该填9。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在数独中，如果某列有数字2、3、4、5、6、7、8、9，那么该列的第一个单元格应该填？', answer: 'B', options_json: ['A. 0', 'B. 1', 'C. 重复的数字', 'D. 任意数字'], explanation: '数独规则要求每列数字1-9不重复，所以第一个单元格应该填1。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在数独中，如果某个3×3宫格有数字1、2、3、4、5、6、7、9，那么该宫格的最后一个单元格应该填？', answer: 'C', options_json: ['A. 0', 'B. 10', 'C. 8', 'D. 重复的数字'], explanation: '数独规则要求每个3×3宫格内数字1-9不重复，所以最后一个单元格应该填8。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  { question_body: '数独的难度主要取决于什么？', answer: 'D', options_json: ['A. 棋盘大小', 'B. 数字大小', 'C. 颜色深浅', 'D. 初始数字的位置和数量'], explanation: '数独的难度主要取决于初始数字的位置和数量。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在数独中，下列哪种情况是不允许的？', answer: 'A', options_json: ['A. 某行有两个相同的数字', 'B. 某列有1-9的数字', 'C. 某个3×3宫格有1-9的数字', 'D. 空格中填入1-9的数字'], explanation: '数独规则不允许同一行有重复的数字。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  { question_body: '数独的解法通常不包括哪种方法？', answer: 'C', options_json: ['A. 唯一解法', 'B. 排除法', 'C. 猜测法', 'D. 候选数法'], explanation: '数独的正规解法不包括猜测法，应该通过逻辑推理解决。', knowledge_id: 28, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在数独中，如果某个单元格所在的行、列和宫格中已经出现了数字1-8，那么该单元格应该填？', answer: 'A', options_json: ['A. 9', 'B. 0', 'C. 任意数字', 'D. 重复的数字'], explanation: '根据数独规则，该单元格只能填9。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  { question_body: '数独的最少提示数是多少？', answer: 'B', options_json: ['A. 16', 'B. 17', 'C. 18', 'D. 19'], explanation: '数独的最少提示数是17个，少于17个提示数的数独可能有多个解。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在数独中，候选数法是指？', answer: 'C', options_json: ['A. 随机猜测数字', 'B. 只填大数字', 'C. 为每个空格列出可能的数字', 'D. 只填小数字'], explanation: '候选数法是指为每个空格列出可能的数字，然后通过排除法缩小范围。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  { question_body: '数独的解是否唯一？', answer: 'B', options_json: ['A. 一定唯一', 'B. 通常唯一，但可能不唯一', 'C. 一定不唯一', 'D. 取决于棋盘大小'], explanation: '标准数独通常设计为唯一解，但如果提示数不足，可能有多个解。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在数独中，X-Wing技巧是用于解决什么问题的？', answer: 'D', options_json: ['A. 快速填充空格', 'B. 检查错误', 'C. 随机生成数字', 'D. 排除候选数'], explanation: 'X-Wing是一种高级技巧，用于排除候选数。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  { question_body: '数独的历史可以追溯到哪个时期？', answer: 'C', options_json: ['A. 古代埃及', 'B. 中世纪欧洲', 'C. 18世纪瑞士', 'D. 20世纪美国'], explanation: '数独的前身可以追溯到18世纪瑞士数学家欧拉的拉丁方块。', knowledge_id: 28, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：标准数独的棋盘是9×9的。', answer: '正确', options_json: ['正确', '错误'], explanation: '标准数独的棋盘是9×9的。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数独规则要求每行、每列、每个3×3宫格内的数字1-9不重复。', answer: '正确', options_json: ['正确', '错误'], explanation: '数独的基本规则就是数字不重复。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数独中可以填入数字0。', answer: '错误', options_json: ['正确', '错误'], explanation: '数独中只能填入1-9的数字。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数独的解一定是唯一的。', answer: '错误', options_json: ['正确', '错误'], explanation: '如果提示数不足，数独可能有多个解。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数独起源于日本。', answer: '正确', options_json: ['正确', '错误'], explanation: '数独由日本出版商 Nikoli 在1984年命名并推广。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：数独的最少提示数是17个。', answer: '正确', options_json: ['正确', '错误'], explanation: '研究表明，数独的最少提示数是17个。', knowledge_id: 28, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '标准数独的棋盘是____×____的。', answer: '9,9', options_json: null, explanation: '标准数独的棋盘是9×9的。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  { question_body: '数独规则要求每行、每列、每个3×3宫格内的数字____-____不重复。', answer: '1,9', options_json: null, explanation: '数独规则要求数字1-9不重复。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  { question_body: '标准数独共有____个单元格。', answer: '81', options_json: null, explanation: '9×9=81个单元格。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  { question_body: '标准数独中，整个棋盘共有____个3×3宫格。', answer: '9', options_json: null, explanation: '标准数独共有9个3×3宫格。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一个3×3宫格内有____个单元格。', answer: '9', options_json: null, explanation: '一个3×3宫格内有9个单元格。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  { question_body: '数独的英文名称是____。', answer: 'Sudoku', options_json: null, explanation: '数独的英文名称是Sudoku。', knowledge_id: 28, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '数独的最少提示数是____个。', answer: '17', options_json: null, explanation: '数独的最少提示数是17个。', knowledge_id: 28, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在数独中，如果某行有数字1-8，那么该行的最后一个单元格应该填____。', answer: '9', options_json: null, explanation: '根据数独规则，该单元格只能填9。', knowledge_id: 28, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在数独中，如果某列有数字2-9，那么该列的第一个单元格应该填____。', answer: '1', options_json: null, explanation: '根据数独规则，该单元格只能填1。', knowledge_id: 28, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在数独中，如果某个3×3宫格有数字1-7和9，那么该宫格的最后一个单元格应该填____。', answer: '8', options_json: null, explanation: '根据数独规则，该单元格只能填8。', knowledge_id: 28, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge28Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点28题目生成完成，共插入 ${knowledge28Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
