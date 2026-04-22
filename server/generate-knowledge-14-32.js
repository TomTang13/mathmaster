const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

// 待处理的 key_knowledge 数据 (X = 14-32)
const knowledgeIds = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

async function generateTasksAndQuestions() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 查询 question_types 表
    console.log('=== 查询 question_types 表 ===');
    const [typesRows] = await connection.execute('SELECT * FROM question_types');
    console.table(typesRows);

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
  const knowledgeTexts = {
    14: '和差问题',
    15: '和倍问题',
    16: '差倍问题',
    17: '倍比问题',
    18: '相遇问题',
    19: '追及问题',
    20: '植树问题',
    21: '年龄问题',
    22: '时钟问题',
    23: '盈亏问题',
    24: '工程问题',
    25: '正反比例',
    26: '比例分配',
    27: '百分数问题',
    28: '浓度问题',
    29: '经济问题',
    30: '面积综合',
    31: '体积综合',
    32: '统计问题'
  };

  // 根据不同的知识点生成不同类型的题目
  switch (knowledge.id) {
    case 14: // 和差问题
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "两个数的和是20，差是4，这两个数分别是多少？",
          answer: "12和8",
          options_json: JSON.stringify(['A. 12和8', 'B. 13和7', 'C. 14和6', 'D. 11和9']),
          explanation: "大数 = (和 + 差) ÷ 2 = 12，小数 = (和 - 差) ÷ 2 = 8",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "小明和小红共有糖果30颗，小明比小红多6颗，他们各有几颗？",
          answer: "18颗和12颗",
          options_json: JSON.stringify(['A. 18颗和12颗', 'B. 20颗和10颗', 'C. 17颗和13颗', 'D. 19颗和11颗']),
          explanation: "小明 = (30 + 6) ÷ 2 = 18颗，小红 = (30 - 6) ÷ 2 = 12颗",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲乙两数之和为100，甲比乙多20，求甲乙两数",
          answer: "甲60，乙40",
          options_json: JSON.stringify(['A. 甲60，乙40', 'B. 甲55，乙45', 'C. 甲65，乙35', 'D. 甲70，乙30']),
          explanation: "甲 = (100 + 20) ÷ 2 = 60，乙 = (100 - 20) ÷ 2 = 40",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3,
          difficulty_id: 1,
          question_body: "判断：和差问题的公式是：大数 = (和 + 差) ÷ 2",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "和差问题的标准公式",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "父子年龄之和是60，父亲比儿子大24岁，父亲多少岁？",
          answer: "42岁",
          options_json: JSON.stringify(['A. 42岁', 'B. 40岁', 'C. 38岁', 'D. 44岁']),
          explanation: "父亲 = (60 + 24) ÷ 2 = 42岁",
          order_index: 5
        }
      );
      break;

    case 15: // 和倍问题
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲乙两数和是60，甲是乙的3倍，甲乙分别是多少？",
          answer: "甲45，乙15",
          options_json: JSON.stringify(['A. 甲45，乙15', 'B. 甲40，乙20', 'C. 甲48，乙12', 'D. 甲42，乙18']),
          explanation: "乙 = 60 ÷ (3 + 1) = 15，甲 = 15 × 3 = 45",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "果园里有苹果树和梨树共120棵，苹果树是梨树的4倍，各多少棵？",
          answer: "苹果树96棵，梨树24棵",
          options_json: JSON.stringify(['A. 苹果树96棵，梨树24棵', 'B. 苹果树80棵，梨树40棵', 'C. 苹果树90棵，梨树30棵', 'D. 苹果树100棵，梨树20棵']),
          explanation: "梨树 = 120 ÷ (4 + 1) = 24棵，苹果树 = 24 × 4 = 96棵",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "学校买来篮球和足球共45个，篮球是足球的2倍，各几个？",
          answer: "篮球30个，足球15个",
          options_json: JSON.stringify(['A. 篮球30个，足球15个', 'B. 篮球25个，足球20个', 'C. 篮球35个，足球10个', 'D. 篮球28个，足球17个']),
          explanation: "足球 = 45 ÷ (2 + 1) = 15个，篮球 = 15 × 2 = 30个",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3,
          difficulty_id: 1,
          question_body: "判断：和倍问题中，小数 = 和 ÷ (倍数 + 1)",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "和倍问题的标准公式",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲乙共有书100本，甲是乙的4倍少5本，甲乙各几本？",
          answer: "甲75本，乙25本",
          options_json: JSON.stringify(['A. 甲75本，乙25本', 'B. 甲80本，乙20本', 'C. 甲70本，乙30本', 'D. 甲65本，乙35本']),
          explanation: "乙 = (100 + 5) ÷ (4 + 1) = 25本，甲 = 25 × 4 - 5 = 75本",
          order_index: 5
        }
      );
      break;

    case 16: // 差倍问题
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲比乙多30，甲是乙的3倍，甲乙各是多少？",
          answer: "甲45，乙15",
          options_json: JSON.stringify(['A. 甲45，乙15', 'B. 甲40，乙10', 'C. 甲48，乙18', 'D. 甲42，乙12']),
          explanation: "乙 = 30 ÷ (3 - 1) = 15，甲 = 15 × 3 = 45",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "爸爸比儿子大24岁，爸爸年龄是儿子的3倍，父子各几岁？",
          answer: "爸爸36岁，儿子12岁",
          options_json: JSON.stringify(['A. 爸爸36岁，儿子12岁', 'B. 爸爸33岁，儿子9岁', 'C. 爸爸39岁，儿子15岁', 'D. 爸爸30岁，儿子6岁']),
          explanation: "儿子 = 24 ÷ (3 - 1) = 12岁，爸爸 = 12 × 3 = 36岁",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲仓存粮比乙仓多60吨，甲仓是乙仓的4倍，各存粮多少？",
          answer: "甲80吨，乙20吨",
          options_json: JSON.stringify(['A. 甲80吨，乙20吨', 'B. 甲75吨，乙15吨', 'C. 甲85吨，乙25吨', 'D. 甲70吨，乙10吨']),
          explanation: "乙 = 60 ÷ (4 - 1) = 20吨，甲 = 20 × 4 = 80吨",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3,
          difficulty_id: 1,
          question_body: "判断：差倍问题中，小数 = 差 ÷ (倍数 - 1)",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "差倍问题的标准公式",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: "甲比乙多18，甲是乙的2倍，甲乙各几？",
          answer: "甲36，乙18",
          options_json: JSON.stringify(['A. 甲36，乙18', 'B. 甲30，乙12', 'C. 甲34，乙16', 'D. 甲32，乙14']),
          explanation: "乙 = 18 ÷ (2 - 1) = 18，甲 = 18 × 2 = 36",
          order_index: 5
        }
      );
      break;

    default:
      // 默认题目 - 使用通用的数学知识点
      questions.push(
        {
          question_id: `${baseId}_1`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 1,
          question_body: `关于${knowledgeTexts[knowledge.id] || '数学'}的题目1：计算 25 × 4 = ?`,
          answer: "100",
          options_json: JSON.stringify(['A. 105', 'B. 101', 'C. 100', 'D. 99']),
          explanation: "基础计算题",
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 1,
          question_body: `关于${knowledgeTexts[knowledge.id] || '数学'}的题目2：计算 125 × 8 = ?`,
          answer: "1000",
          options_json: JSON.stringify(['A. 1000', 'B. 1001', 'C. 999', 'D. 1002']),
          explanation: "基础计算题",
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: `关于${knowledgeTexts[knowledge.id] || '数学'}的题目3：计算 25 × 12 = ?`,
          answer: "300",
          options_json: JSON.stringify(['A. 305', 'B. 300', 'C. 301', 'D. 299']),
          explanation: "运用乘法分配律进行巧算",
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 3,
          difficulty_id: 1,
          question_body: `判断：${knowledgeTexts[knowledge.id] || '数学'}知识在日常生活中很有用`,
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "数学知识在日常生活中有广泛应用",
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          task_id: taskId,
          knowledge_id: knowledge.id,
          question_type_id: 2,
          difficulty_id: 2,
          question_body: `关于${knowledgeTexts[knowledge.id] || '数学'}的题目4：计算 (40 + 4) × 25 = ?`,
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