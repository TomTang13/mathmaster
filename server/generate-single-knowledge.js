const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

// 待处理的 key_knowledge 数据 (X = 7)
const knowledgeId = 7;

async function generateTasksAndQuestions() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 查询 question_types 表
    console.log('=== 查询 question_types 表 ===');
    const [typesRows] = await connection.execute('SELECT * FROM question_types');
    console.table(typesRows);

    // 查询 questions 表前 50 条作为参考
    console.log('\n=== 查询 questions 表前 50 条 ===');
    const [questionsRows] = await connection.execute('SELECT * FROM questions LIMIT 50');
    console.table(questionsRows);

    // 查询 key_knowledge 表中 id=7 的数据
    console.log('\n=== 查询 key_knowledge 表 id=7 ===');
    const [knowledgeRows] = await connection.execute(
      'SELECT * FROM key_knowledge WHERE id = ?',
      [knowledgeId]
    );
    console.table(knowledgeRows);

    if (knowledgeRows.length === 0) {
      console.log('没有找到 id=7 的 key_knowledge 数据');
      return;
    }

    const knowledge = knowledgeRows[0];
    console.log('\n=== 处理 key_knowledge id=7 ===');
    console.log('知识点:', knowledge);
    console.log('文件名:', knowledge.filename);
    console.log('PDF路径: /file/' + knowledge.filename);

    // 生成任务ID
    const taskType = 'practice';
    const taskId = `${taskType}-w${knowledge.week_id}d${knowledge.target_day}-k${knowledge.id}`;

    // 生成任务
    const taskTitle = `【练习】${knowledge.knowledge_text.substring(0, 30)}...`;
    const taskContent = `基于知识点：${knowledge.knowledge_text}\n\n请完成以下练习题目，巩固对该知识点的理解。\n\nPDF学习资料：/file/${knowledge.filename}`;
    const duration = '15分钟';

    // 插入任务
    console.log('\n=== 插入任务 ===');
    const taskInsertSql = `
      INSERT INTO tasks (task_id, week_id, day_number, task_type, title, content, duration)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        title = VALUES(title),
        content = VALUES(content),
        duration = VALUES(duration)
    `;
    
    await connection.execute(taskInsertSql, [
      taskId,
      knowledge.week_id,
      knowledge.target_day,
      taskType,
      taskTitle,
      taskContent,
      duration
    ]);
    console.log('任务插入成功:', taskId);

    // 生成题目 - 根据知识点生成5条高质量题目
    console.log('\n=== 生成题目 ===');
    const questions = generateQuestions(knowledge, taskId);

    for (const question of questions) {
      const questionInsertSql = `
        INSERT INTO questions (
          question_id, task_id, knowledge_id, question_type_id, difficulty_id,
          question_body, answer, options_json, explanation, order_index
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          question_body = VALUES(question_body),
          answer = VALUES(answer),
          options_json = VALUES(options_json),
          explanation = VALUES(explanation)
      `;

      await connection.execute(questionInsertSql, [
        question.question_id,
        question.task_id,
        question.knowledge_id,
        question.question_type_id,
        question.difficulty_id,
        question.question_body,
        question.answer,
        question.options_json,
        question.explanation,
        question.order_index
      ]);
      console.log('题目插入成功:', question.question_id);
    }

    console.log('\n=== 数据生成完成 ===');
    console.log(`生成了 1 个任务和 ${questions.length} 个题目`);

  } catch (error) {
    console.error('生成数据时出错:', error);
  } finally {
    await connection.end();
  }
}

// 根据知识点生成题目
function generateQuestions(knowledge, taskId) {
  const baseId = `${taskId.replace('practice-', 'pq_')}`;
  const questions = [];

  // 根据不同的知识点生成不同类型的题目
  // 这里需要根据实际的知识点内容来生成合适的题目
  
  // 示例：针对"速度与准确率"知识点生成题目
  questions.push(
    {
      question_id: `${baseId}_1`,
      task_id: taskId,
      knowledge_id: knowledge.id,
      question_type_id: 2, // 单选题
      difficulty_id: 1,
      question_body: "计算：25 × 4 = ?",
      answer: "100",
      options_json: JSON.stringify(['A. 105', 'B. 101', 'C. 100', 'D. 99']),
      explanation: "25 × 4 = 100，这是常用的巧算组合，在5分钟内完成20道这样的题目是可以达到的",
      order_index: 1
    },
    {
      question_id: `${baseId}_2`,
      task_id: taskId,
      knowledge_id: knowledge.id,
      question_type_id: 2, // 单选题
      difficulty_id: 1,
      question_body: "计算：125 × 8 = ?",
      answer: "1000",
      options_json: JSON.stringify(['A. 1000', 'B. 1001', 'C. 999', 'D. 1002']),
      explanation: "125 × 8 = 1000，这是重要的巧算组合，需要熟练掌握",
      order_index: 2
    },
    {
      question_id: `${baseId}_3`,
      task_id: taskId,
      knowledge_id: knowledge.id,
      question_type_id: 2, // 单选题
      difficulty_id: 2,
      question_body: "计算：25 × 12 = ?",
      answer: "300",
      options_json: JSON.stringify(['A. 305', 'B. 300', 'C.  301', 'D. 299']),
      explanation: "25 × 12 = 25 × 4 × 3 = 100 × 3 = 300，运用了乘法结合律进行巧算",
      order_index: 3
    },
    {
      question_id: `${baseId}_4`,
      task_id: taskId,
      knowledge_id: knowledge.id,
      question_type_id: 3, // 是非题
      difficulty_id: 2,
      question_body: "判断：在5分钟内完成20道复杂乘法口算是可以做到的",
      answer: "正确",
      options_json: JSON.stringify(['正确', '错误']),
      explanation: "通过训练，是可以达到这个速度和准确率的",
      order_index: 4
    },
    {
      question_id: `${baseId}_5`,
      task_id: taskId,
      knowledge_id: knowledge.id,
      question_type_id: 2, // 单选题
      difficulty_id: 2,
      question_body: "计算：(40 + 4) × 25 = ?",
      answer: "1100",
      options_json: JSON.stringify(['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100']),
      explanation: "乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100",
      order_index: 5
    }
  );

  return questions;
}

generateTasksAndQuestions();