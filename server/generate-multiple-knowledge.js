const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

// 待处理的 key_knowledge 数据 (X = 8, 9, 10)
const knowledgeIds = [8, 9, 10];

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
    case 8: // 估算能力
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "估算：21 × 19 ≈ ?",
          answer: "400",
          options_json: JSON.stringify(['A. 300', 'B. 400', 'C. 500', 'D. 600']),
          explanation: "21 ≈ 20，19 ≈ 20，20 × 20 = 400，使用四舍五入法进行估算",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "估算：38 × 51 ≈ ?",
          answer: "2000",
          options_json: JSON.stringify(['A. 1500', 'B. 1800', 'C. 2000', 'D. 2500']),
          explanation: "38 ≈ 40，51 ≈ 50，40 × 50 = 2000，使用四舍五入法进行估算",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 3,
          question_body: "估算：123 × 78 ≈ ?",
          answer: "9600",
          options_json: JSON.stringify(['A. 8000', 'B. 9000', 'C. 9600', 'D. 10000']),
          explanation: "123 ≈ 120，78 ≈ 80，120 × 80 = 9600，使用四舍五入法进行估算",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：估算时应该使用四舍五入法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "四舍五入是常用的估算方法，能快速判定计算结果的合理范围",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 3,
          question_body: "估算：256 × 32 ≈ ?",
          answer: "8000",
          options_json: JSON.stringify(['A. 7000', 'B. 8000', 'C. 9000', 'D. 10000']),
          explanation: "256 ≈ 250，32 ≈ 32，250 × 32 = 8000，使用四舍五入法进行估算",
          order_index: 5
        }
      );
      break;

    case 9: // 积的变化规律
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "一个因数不变，另一个因数扩大10倍，积会怎样变化？",
          answer: "扩大10倍",
          options_json: JSON.stringify(['A. 不变', 'B. 扩大10倍', 'C. 缩小10倍', 'D. 扩大100倍']),
          explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "一个因数不变，另一个因数缩小5倍，积会怎样变化？",
          answer: "缩小5倍",
          options_json: JSON.stringify(['A. 不变', 'B. 扩大5倍', 'C. 缩小5倍', 'D. 缩小25倍']),
          explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "如果 3 × 4 = 12，那么 3 × 40 = ?",
          answer: "120",
          options_json: JSON.stringify(['A. 12', 'B. 120', 'C. 1200', 'D. 12000']),
          explanation: "一个因数3不变，另一个因数4扩大10倍变为40，积也扩大10倍变为120",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：积的变化规律只适用于乘法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "积的变化规律是乘法的基本规律，描述了因数变化对积的影响",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "如果 5 × 8 = 40，那么 5 × 2 = ?",
          answer: "10",
          options_json: JSON.stringify(['A. 10', 'B. 20', 'C. 30', 'D. 40']),
          explanation: "一个因数5不变，另一个因数8缩小4倍变为2，积也缩小4倍变为10",
          order_index: 5
        }
      );
      break;

    case 10: // 进阶计算技巧
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "计算：101 × 37 = ?",
          answer: "3737",
          options_json: JSON.stringify(['A. 3700', 'B. 3737', 'C. 3800', 'D. 3837']),
          explanation: "利用分配律：(100 + 1) × 37 = 3700 + 37 = 3737",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "计算：99 × 45 = ?",
          answer: "4455",
          options_json: JSON.stringify(['A. 4455', 'B. 4500', 'C. 4545', 'D. 4600']),
          explanation: "利用分配律：(100 - 1) × 45 = 4500 - 45 = 4455",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 2,
          question_body: "计算：25 × 44 = ?",
          answer: "1100",
          options_json: JSON.stringify(['A. 1000', 'B. 1100', 'C. 1200', 'D. 1300']),
          explanation: "利用分配律：25 × (40 + 4) = 1000 + 100 = 1100",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3, // 是非题
          difficulty_id: 1,
          question_body: "判断：分配律只适用于加法",
          answer: "错误",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "分配律适用于乘法对加法的分配，也适用于乘法对减法的分配",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2, // 单选题
          difficulty_id: 3,
          question_body: "计算：125 × 88 = ?",
          answer: "11000",
          options_json: JSON.stringify(['A. 10000', 'B. 11000', 'C. 12000', 'D. 13000']),
          explanation: "利用分配律：125 × (80 + 8) = 10000 + 1000 = 11000",
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