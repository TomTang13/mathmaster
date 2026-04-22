const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

// 待处理的 key_knowledge 数据 (X = 11, 12, 13)
const knowledgeIds = [11, 12, 13];

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

    for (const knowledgeId of knowledgeIds) {
      // 查询 key_knowledge 表中当前 id 的数据
      console.log(`\n=== 查询 key_knowledge 表 id=${knowledgeId} ===`);
      const [knowledgeRows] = await connection.execute(
        'SELECT * FROM key_knowledge WHERE id = ?',
        [knowledgeId]
      );
      console.table(knowledgeRows);

      if (knowledgeRows.length === 0) {
        console.log(`没有找到 id=${knowledgeId} 的 key_knowledge 数据`);
        continue;
      }

      const knowledge = knowledgeRows[0];
      console.log(`\n=== 处理 key_knowledge id=${knowledgeId} ===`);
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

      console.log(`\n=== 知识点 id=${knowledgeId} 数据生成完成 ===`);
      console.log(`生成了 1 个任务和 ${questions.length} 个题目`);
    }

    console.log('\n=== 所有数据生成完成 ===');

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
  switch (knowledge.id) {
    case 11: // 商不变规律
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "在除法中，被除数和除数同时扩大10倍，商怎样变化？",
          answer: "不变",
          options_json: JSON.stringify(['A. 扩大10倍', 'B. 缩小10倍', 'C. 不变', 'D. 扩大100倍']),
          explanation: "商不变规律：被除数和除数同时扩大（或缩小）相同的倍数，商不变",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "如果 72 ÷ 9 = 8，那么 720 ÷ 90 = ?",
          answer: "8",
          options_json: JSON.stringify(['A. 80', 'B. 8', 'C. 800', 'D. 0.8']),
          explanation: "被除数和除数同时扩大10倍，商不变，仍然是8",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "如果 48 ÷ 6 = 8，那么 480 ÷ 60 = ?",
          answer: "8",
          options_json: JSON.stringify(['A. 80', 'B. 8', 'C. 800', 'D. 0.8']),
          explanation: "被除数和除数同时扩大10倍，商不变，仍然是8",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：商不变规律只适用于除法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "商不变规律是除法的基本规律，描述了被除数和除数同时变化时商的变化情况",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "如果 36 ÷ 4 = 9，那么 360 ÷ 40 = ?",
          answer: "9",
          options_json: JSON.stringify(['A. 90', 'B. 9', 'C. 900', 'D. 0.9']),
          explanation: "被除数和除数同时扩大10倍，商不变，仍然是9",
          order_index: 5
        }
      );
      break;

    case 12: // 面积计算
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "长方形的长是8厘米，宽是5厘米，面积是多少平方厘米？",
          answer: "40",
          options_json: JSON.stringify(['A. 13', 'B. 26', 'C. 40', 'D. 80']),
          explanation: "长方形面积 = 长 × 宽 = 8 × 5 = 40 平方厘米",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "正方形的边长是6厘米，面积是多少平方厘米？",
          answer: "36",
          options_json: JSON.stringify(['A. 24', 'B. 36', 'C. 48', 'D. 72']),
          explanation: "正方形面积 = 边长 × 边长 = 6 × 6 = 36 平方厘米",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 3,
          question_body: "长方形的长扩大2倍，宽不变，面积会怎样变化？",
          answer: "扩大2倍",
          options_json: JSON.stringify(['A. 不变', 'B. 扩大2倍', 'C. 缩小2倍', 'D. 扩大4倍']),
          explanation: "长方形面积与长成正比，长扩大2倍，面积也扩大2倍",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：面积相等的两个长方形，它们的周长一定相等",
          answer: "错误",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "面积相等的两个长方形，它们的周长不一定相等，例如4×9和6×6面积都是36，但周长分别是26和24",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "平行四边形的底是10厘米，高是6厘米，面积是多少平方厘米？",
          answer: "60",
          options_json: JSON.stringify(['A. 16', 'B. 32', 'C. 60', 'D. 120']),
          explanation: "平行四边形面积 = 底 × 高 = 10 × 6 = 60 平方厘米",
          order_index: 5
        }
      );
      break;

    case 13: // 分数初步认识
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 1,
          question_body: "把一个蛋糕平均分成4份，每份是整个蛋糕的几分之几？",
          answer: "1/4",
          options_json: JSON.stringify(['A. 1/2', 'B. 1/3', 'C. 1/4', 'D. 1/5']),
          explanation: "把蛋糕平均分成4份，每份就是整个蛋糕的1/4",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 1,
          question_body: "比较大小：1/2 和 1/3，哪个更大？",
          answer: "1/2",
          options_json: JSON.stringify(['A. 1/2', 'B. 1/3', 'C. 一样大', 'D. 无法比较']),
          explanation: "分子相同的分数，分母越小，分数越大，所以1/2 > 1/3",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "2/5 表示什么意思？",
          answer: "把整体平均分成5份，取其中的2份",
          options_json: JSON.stringify(['A. 把整体平均分成2份，取其中的5份', 'B. 把整体平均分成5份，取其中的2份', 'C. 把整体分成2和5两部分', 'D. 表示2个5相除']),
          explanation: "分数2/5表示把整体平均分成5份，取其中的2份",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：分数中分母不能为0",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "分母为0没有意义，因此分数的分母不能为0",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "比较大小：3/4 和 3/5，哪个更大？",
          answer: "3/4",
          options_json: JSON.stringify(['A. 3/4', 'B. 3/5', 'C. 一样大', 'D. 无法比较']),
          explanation: "分子相同的分数，分母越小，分数越大，所以3/4 > 3/5",
          order_index: 5
        }
      );
      break;

    default:
      // 默认题目
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 1,
          question_body: "计算：25 × 4 = ?",
          answer: "100",
          options_json: JSON.stringify(['A. 105', 'B. 101', 'C. 100', 'D. 99']),
          explanation: "25 × 4 = 100，这是常用的巧算组合",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 1,
          question_body: "计算：125 × 8 = ?",
          answer: "1000",
          options_json: JSON.stringify(['A. 1000', 'B. 1001', 'C. 999', 'D. 1002']),
          explanation: "125 × 8 = 1000，这是重要的巧算组合",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "计算：25 × 12 = ?",
          answer: "300",
          options_json: JSON.stringify(['A. 305', 'B. 300', 'C. 301', 'D. 299']),
          explanation: "25 × 12 = 25 × 4 × 3 = 100 × 3 = 300",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3,
          difficulty_id: 2,
          question_body: "判断：数学计算中可以使用巧算方法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "巧算方法可以提高计算速度和准确率",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "计算：(40 + 4) × 25 = ?",
          answer: "1100",
          options_json: JSON.stringify(['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100']),
          explanation: "乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100",
          order_index: 5
        }
      );
  }

  return questions;
}

generateTasksAndQuestions();