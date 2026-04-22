const { createConnection } = require('typeorm');

async function generateQuestions() {
  try {
    // 创建数据库连接
    const connection = await createConnection({
      type: 'mysql',
      host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: 3306,
      username: 'mathmaster_dev',
      password: 'mathmaster_DEV123!',
      database: 'mathmaster',
      synchronize: false,
    });

    console.log('数据库连接成功');

    // 检查task_id列是否存在，如果不存在则添加
    const columns = await connection.query('SHOW COLUMNS FROM questions LIKE "task_id"');
    if (columns.length === 0) {
      console.log('task_id列不存在，正在添加...');
      await connection.query('ALTER TABLE questions ADD COLUMN task_id VARCHAR(255)');
      console.log('已添加task_id列');
    }

    // 先删除user_answers表中引用W1D1题目相关的数据
    await connection.query(`
      DELETE FROM user_answers
      WHERE question_id IN (
        SELECT question_id FROM questions WHERE knowledge_id IN (1, 2)
      )
    `);
    console.log('已删除user_answers表中的相关数据');

    // 再删除questions表中knowledge_id为1或2的数据
    await connection.query('DELETE FROM questions WHERE knowledge_id IN (1, 2)');
    console.log('已删除questions表中的W1D1奥义题目');

    // W1D1核心奥义1：加减法凑整（高斯求和、等差数列）
    const knowledgeId1 = 1;
    const knowledge1Questions = [
      // 填充题 - 基础理解
      {
        questionId: 'q_1_1_1',
        taskId: 'practice-1-1-1',
        knowledgeId: knowledgeId1,
        questionTypeId: 1,
        difficultyId: 1,
        questionBody: '高斯求和公式：1+2+3+...+n = ________',
        answer: 'n×(n+1)÷2',
        optionsJson: null,
        explanation: '高斯求和公式适用于求等差数列的和，首项为1，公差为1。公式为：和=(首项+末项)×项数÷2，即n×(n+1)÷2',
        orderIndex: 1
      },
      // 选择题 - 应用
      {
        questionId: 'q_1_1_2',
        taskId: 'practice-1-1-1',
        knowledgeId: knowledgeId1,
        questionTypeId: 4,
        difficultyId: 2,
        questionBody: '使用加减法凑整计算：48+97+52+103 = ?',
        answer: 'B',
        optionsJson: JSON.stringify(['A. 290', 'B. 300', 'C. 310', 'D. 320']),
        explanation: '48+52=100，97+103=200，100+200=300。通过凑整使计算更简便',
        orderIndex: 2
      },
      // 是非题 - 概念理解
      {
        questionId: 'q_1_1_3',
        taskId: 'practice-1-1-1',
        knowledgeId: knowledgeId1,
        questionTypeId: 3,
        difficultyId: 1,
        questionBody: '判断：等差数列的和可以用"（首项+末项）×项数÷2"来计算。',
        answer: '正确',
        optionsJson: JSON.stringify(['正确', '错误']),
        explanation: '这是等差数列求和的标准公式，适用于所有等差数列',
        orderIndex: 3
      },
      // 选择题 - 进阶应用
      {
        questionId: 'q_1_1_4',
        taskId: 'practice-1-1-1',
        knowledgeId: knowledgeId1,
        questionTypeId: 4,
        difficultyId: 3,
        questionBody: '计算：2+4+6+8+...+20 = ?',
        answer: 'C',
        optionsJson: JSON.stringify(['A. 100', 'B. 105', 'C. 110', 'D. 120']),
        explanation: '这是公差为2的等差数列，共10项。和=(2+20)×10÷2=110',
        orderIndex: 4
      },
      // 填充题 - 技巧应用
      {
        questionId: 'q_1_1_5',
        taskId: 'practice-1-1-1',
        knowledgeId: knowledgeId1,
        questionTypeId: 1,
        difficultyId: 4,
        questionBody: '用凑整法计算：999+298+97+503 = ________',
        answer: '1897',
        optionsJson: null,
        explanation: '999+1=1000，298+2=300，97+3=100，503-6=497，1000+300+100+497=1897',
        orderIndex: 5
      }
    ];

    // W1D1核心奥义2：乘法巧算（分配律、结合律、25×4等）
    const knowledgeId2 = 2;
    const knowledge2Questions = [
      // 填充题 - 基础理解
      {
        questionId: 'q_1_2_1',
        taskId: 'practice-1-1-2',
        knowledgeId: knowledgeId2,
        questionTypeId: 1,
        difficultyId: 1,
        questionBody: '乘法分配律公式：(a+b)×c = ________',
        answer: 'a×c+b×c',
        optionsJson: null,
        explanation: '乘法分配律是数学中的基本运算律，表示两个数的和与第三个数相乘，等于分别相乘再相加',
        orderIndex: 1
      },
      // 选择题 - 应用
      {
        questionId: 'q_1_2_2',
        taskId: 'practice-1-1-2',
        knowledgeId: knowledgeId2,
        questionTypeId: 4,
        difficultyId: 2,
        questionBody: '使用乘法巧算计算：25×4 = ?（利用特殊数的组合）',
        answer: 'A',
        optionsJson: JSON.stringify(['A. 100', 'B. 200', 'C. 50', 'D. 125']),
        explanation: '25×4=100，这是乘法中的特殊组合，经常用于简化计算',
        orderIndex: 2
      },
      // 是非题 - 概念理解
      {
        questionId: 'q_1_2_3',
        taskId: 'practice-1-1-2',
        knowledgeId: knowledgeId2,
        questionTypeId: 3,
        difficultyId: 1,
        questionBody: '判断：125×8=1000 可以利用"25×4=100"的技巧来记忆。',
        answer: '正确',
        optionsJson: JSON.stringify(['正确', '错误']),
        explanation: '125×8=1000与25×4=100都是特殊的乘法组合，可以通过类比来记忆',
        orderIndex: 3
      },
      // 选择题 - 进阶应用
      {
        questionId: 'q_1_2_4',
        taskId: 'practice-1-1-2',
        knowledgeId: knowledgeId2,
        questionTypeId: 4,
        difficultyId: 3,
        questionBody: '计算：36×25 = ? (提示：36=9×4)',
        answer: 'B',
        optionsJson: JSON.stringify(['A. 800', 'B. 900', 'C. 950', 'D. 1000']),
        explanation: '36×25=9×4×25=9×100=900，利用乘法结合律简化计算',
        orderIndex: 4
      },
      // 填充题 - 综合应用
      {
        questionId: 'q_1_2_5',
        taskId: 'practice-1-1-2',
        knowledgeId: knowledgeId2,
        questionTypeId: 1,
        difficultyId: 4,
        questionBody: '用分配律计算：101×37 = ________',
        answer: '3737',
        optionsJson: null,
        explanation: '101×37=(100+1)×37=100×37+1×37=3700+37=3737',
        orderIndex: 5
      }
    ];

    // 插入所有题目
    const allQuestions = [...knowledge1Questions, ...knowledge2Questions];
    for (const q of allQuestions) {
      await connection.query(
        `INSERT INTO questions (question_id, task_id, knowledge_id, question_type_id, difficulty_id, question_body, answer, options_json, explanation, order_index)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [q.questionId, q.taskId, q.knowledgeId, q.questionTypeId, q.difficultyId, q.questionBody, q.answer, q.optionsJson, q.explanation, q.orderIndex]
      );
      console.log(`已添加题目: ${q.questionId}`);
    }

    console.log('题目生成完成！');
    console.log(`共生成 ${allQuestions.length} 道题目`);

    await connection.close();
  } catch (error) {
    console.error('生成题目失败:', error);
  }
}

// 运行脚本
generateQuestions();
