
const mysql = require('mysql2/promise');

async function generatePracticeTasks() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 知识点数据
    const knowledgeItems = [
      {
        id: 3,
        weekId: 1,
        dayNumber: 2,
        knowledgeText: '带符号搬家法则',
        taskIndex: 1
      },
      {
        id: 4,
        weekId: 1,
        dayNumber: 2,
        knowledgeText: '去括号法则',
        taskIndex: 2
      },
      {
        id: 5,
        weekId: 1,
        dayNumber: 3,
        knowledgeText: '多位数计算（如 999…9 × 某个数）',
        taskIndex: 1
      },
      {
        id: 6,
        weekId: 1,
        dayNumber: 3,
        knowledgeText: '定义新运算（自定义运算符号）',
        taskIndex: 2
      }
    ];

    // 为每个知识点生成任务和习题
    for (const knowledge of knowledgeItems) {
      console.log(`\n================== 处理知识点 ${knowledge.id}: ${knowledge.knowledgeText} ==================`);
      
      // 1. 生成任务
      const taskId = `practice-${knowledge.weekId}-${knowledge.dayNumber}-${knowledge.taskIndex}`;
      const taskTitle = `${knowledge.knowledgeText} - 练习题`;
      const taskContent = `包含5道关于"${knowledge.knowledgeText}"的练习题`;
      
      // 检查任务是否已存在
      const [existingTask] = await connection.query(
        'SELECT * FROM tasks WHERE task_id = ?',
        [taskId]
      );
      
      if (existingTask.length > 0) {
        console.log(`任务 ${taskId} 已存在，跳过创建`);
      } else {
        // 插入任务
        await connection.query(
          `INSERT INTO tasks (task_id, week_id, day_number, task_type, title, duration, content, is_completed)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [taskId, knowledge.weekId, knowledge.dayNumber, 'practice', taskTitle, '10分钟', taskContent, false]
        );
        console.log(`✓ 任务 ${taskId} 创建成功`);
      }

      // 2. 生成5道习题
      const questions = generateQuestionsByKnowledge(knowledge, taskId);
      
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        
        // 检查题目是否已存在
        const [existingQuestion] = await connection.query(
          'SELECT * FROM questions WHERE question_id = ?',
          [q.questionId]
        );
        
        if (existingQuestion.length > 0) {
          console.log(`  题目 ${q.questionId} 已存在，跳过`);
          continue;
        }
        
        // 插入题目
        await connection.query(
          `INSERT INTO questions (question_id, task_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, explanation, order_index)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            q.questionId,
            q.taskId,
            q.questionTypeId,
            q.difficultyId,
            q.knowledgeId,
            q.questionBody,
            q.answer,
            JSON.stringify(q.optionsJson),
            q.explanation,
            q.orderIndex
          ]
        );
        console.log(`  ✓ 题目 ${i+1} 生成成功`);
      }
    }

    console.log('\n================== 所有任务和习题生成完成！ ==================');

  } catch (error) {
    console.error('Error generating practice tasks:', error);
  } finally {
    await connection.end();
  }
}

// 根据知识点生成5道习题
function generateQuestionsByKnowledge(knowledge, taskId) {
  const questions = [];
  
  switch (knowledge.id) {
    case 3: // 带符号搬家法则
      questions.push(
        // 题目1：单选题
        {
          questionId: `q_3_1`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 1,
          knowledgeId: 3,
          questionBody: '在加减混合运算中，关于"带符号搬家"，下列说法正确的是？',
          answer: 'A',
          optionsJson: [
            'A. 交换数的位置时，必须连同前面的符号一起搬',
            'B. 交换数的位置时，只需要搬数字，不需要管符号',
            'C. 只能交换相邻两个数的位置',
            'D. 带符号搬家只适用于加法'
          ],
          explanation: '带符号搬家法则：在同级运算中，交换数的位置时，必须连同它前面的符号一起移动。这样可以让计算更简便。',
          orderIndex: 1
        },
        // 题目2：单选题
        {
          questionId: `q_3_2`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 3,
          questionBody: '计算：123 - 45 + 77 - 55 = ?',
          answer: 'B',
          optionsJson: ['A. 90', 'B. 100', 'C. 110', 'D. 120'],
          explanation: '使用带符号搬家：123 + 77 - 45 - 55 = (123 + 77) - (45 + 55) = 200 - 100 = 100',
          orderIndex: 2
        },
        // 题目3：单选题
        {
          questionId: `q_3_3`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 3,
          questionBody: '计算：28 × 13 ÷ 7 = ?',
          answer: 'C',
          optionsJson: ['A. 42', 'B. 48', 'C. 52', 'D. 56'],
          explanation: '乘除混合运算也可以带符号搬家：28 ÷ 7 × 13 = 4 × 13 = 52',
          orderIndex: 3
        },
        // 题目4：是非题
        {
          questionId: `q_3_4`,
          taskId: taskId,
          questionTypeId: 3, // 是非题
          difficultyId: 1,
          knowledgeId: 3,
          questionBody: '判断：在只有加减法的算式中，任意交换两个数的位置，计算结果不变。',
          answer: '错误',
          optionsJson: ['正确', '错误'],
          explanation: '错误。交换位置时必须连同前面的符号一起搬家，否则结果会改变。',
          orderIndex: 4
        },
        // 题目5：填充题
        {
          questionId: `q_3_5`,
          taskId: taskId,
          questionTypeId: 1, // 填充题
          difficultyId: 3,
          knowledgeId: 3,
          questionBody: '计算：89 - 123 + 111 - 77 = ______',
          answer: '0',
          optionsJson: null,
          explanation: '带符号搬家：89 + 111 - 123 - 77 = (89 + 111) - (123 + 77) = 200 - 200 = 0',
          orderIndex: 5
        }
      );
      break;

    case 4: // 去括号法则
      questions.push(
        // 题目1：单选题
        {
          questionId: `q_4_1`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 1,
          knowledgeId: 4,
          questionBody: '去括号时，如果括号前面是"+"号，去括号后括号里的各项符号？',
          answer: 'A',
          optionsJson: [
            'A. 都不变',
            'B. 都改变',
            'C. 第一项不变，其他变',
            'D. 第一项变，其他不变'
          ],
          explanation: '去括号法则：括号前面是"+"号，去括号后里面各项符号都不变。',
          orderIndex: 1
        },
        // 题目2：单选题
        {
          questionId: `q_4_2`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 4,
          questionBody: '去括号时，如果括号前面是"-"号，去括号后括号里的各项符号？',
          answer: 'B',
          optionsJson: [
            'A. 都不变',
            'B. 都要变号（+变-，-变+）',
            'C. 只有第一项变',
            'D. 只有最后一项变'
          ],
          explanation: '去括号法则：括号前面是"-"号，去括号后里面各项符号都要变号，+变-，-变+。',
          orderIndex: 2
        },
        // 题目3：单选题
        {
          questionId: `q_4_3`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 4,
          questionBody: '计算：156 - (56 + 38) = ?',
          answer: 'C',
          optionsJson: ['A. 62', 'B. 58', 'C. 62', 'D. 138'],
          explanation: '去括号：156 - 56 - 38 = 100 - 38 = 62',
          orderIndex: 3
        },
        // 题目4：是非题
        {
          questionId: `q_4_4`,
          taskId: taskId,
          questionTypeId: 3, // 是非题
          difficultyId: 2,
          knowledgeId: 4,
          questionBody: '判断：234 - (134 - 50) = 234 - 134 - 50',
          answer: '错误',
          optionsJson: ['正确', '错误'],
          explanation: '错误。括号前是减号，去括号后里面的减号要变成加号：234 - 134 + 50 = 150',
          orderIndex: 4
        },
        // 题目5：填充题
        {
          questionId: `q_4_5`,
          taskId: taskId,
          questionTypeId: 1, // 填充题
          difficultyId: 3,
          knowledgeId: 4,
          questionBody: '计算：875 - (375 - 234) + 166 = ______',
          answer: '900',
          optionsJson: null,
          explanation: '去括号后组合凑整：875 - 375 + 234 + 166 = (875 - 375) + (234 + 166) = 500 + 400 = 900',
          orderIndex: 5
        }
      );
      break;

    case 5: // 多位数计算
      questions.push(
        // 题目1：单选题
        {
          questionId: `q_5_1`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 1,
          knowledgeId: 5,
          questionBody: '计算：999 × 5 = ?',
          answer: 'B',
          optionsJson: ['A. 4990', 'B. 4995', 'C. 5000', 'D. 4985'],
          explanation: '999×5 = (1000-1)×5 = 5000 - 5 = 4995',
          orderIndex: 1
        },
        // 题目2：单选题
        {
          questionId: `q_5_2`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 5,
          questionBody: '计算：9999 × 12 = ?',
          answer: 'A',
          optionsJson: ['A. 119988', 'B. 120000', 'C. 119978', 'D. 120012'],
          explanation: '9999×12 = (10000-1)×12 = 120000 - 12 = 119988',
          orderIndex: 2
        },
        // 题目3：单选题
        {
          questionId: `q_5_3`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 5,
          questionBody: '计算：999 + 99 + 9 + 3 = ?',
          answer: 'C',
          optionsJson: ['A. 1100', 'B. 1109', 'C. 1110', 'D. 1111'],
          explanation: '把3拆成1+1+1：(999+1)+(99+1)+(9+1) = 1000+100+10 = 1110',
          orderIndex: 3
        },
        // 题目4：是非题
        {
          questionId: `q_5_4`,
          taskId: taskId,
          questionTypeId: 3, // 是非题
          difficultyId: 2,
          knowledgeId: 5,
          questionBody: '判断：99×99 = 9801',
          answer: '正确',
          optionsJson: ['正确', '错误'],
          explanation: '99×99 = (100-1)×99 = 9900 - 99 = 9801',
          orderIndex: 4
        },
        // 题目5：填充题
        {
          questionId: `q_5_5`,
          taskId: taskId,
          questionTypeId: 1, // 填充题
          difficultyId: 3,
          knowledgeId: 5,
          questionBody: '计算：99999 × 99999 + 199999 = ______',
          answer: '10000000000',
          optionsJson: null,
          explanation: '99999×99999+199999 = 99999² + 2×99999 + 1 = (99999+1)² = 100000² = 10000000000',
          orderIndex: 5
        }
      );
      break;

    case 6: // 定义新运算
      questions.push(
        // 题目1：单选题
        {
          questionId: `q_6_1`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 1,
          knowledgeId: 6,
          questionBody: '如果定义 a★b = a + b×2，那么 3★4 = ?',
          answer: 'B',
          optionsJson: ['A. 14', 'B. 11', 'C. 12', 'D. 7'],
          explanation: '按照定义：3 + 4×2 = 3 + 8 = 11',
          orderIndex: 1
        },
        // 题目2：单选题
        {
          questionId: `q_6_2`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 6,
          questionBody: '如果定义 a△b = a×3 - b，那么 8△(5△2) = ?',
          answer: 'C',
          optionsJson: ['A. 10', 'B. 12', 'C. 13', 'D. 15'],
          explanation: '先算括号里：5△2 = 5×3-2 = 13，再算8△13 = 8×3-13 = 24-13 = 11',
          orderIndex: 2
        },
        // 题目3：单选题
        {
          questionId: `q_6_3`,
          taskId: taskId,
          questionTypeId: 2, // 单选题
          difficultyId: 2,
          knowledgeId: 6,
          questionBody: '如果定义 a⊕b 表示从a到b的所有整数的和，那么 3⊕6 = ?',
          answer: 'A',
          optionsJson: ['A. 18', 'B. 15', 'C. 21', 'D. 9'],
          explanation: '3+4+5+6 = 18',
          orderIndex: 3
        },
        // 题目4：是非题
        {
          questionId: `q_6_4`,
          taskId: taskId,
          questionTypeId: 3, // 是非题
          difficultyId: 2,
          knowledgeId: 6,
          questionBody: '如果定义 a○b = a×b + a + b，那么 2○3 = 11',
          answer: '正确',
          optionsJson: ['正确', '错误'],
          explanation: '2×3 + 2 + 3 = 6 + 2 + 3 = 11',
          orderIndex: 4
        },
        // 题目5：填充题
        {
          questionId: `q_6_5`,
          taskId: taskId,
          questionTypeId: 1, // 填充题
          difficultyId: 3,
          knowledgeId: 6,
          questionBody: '如果定义 a※b = (a + b) × (a - b)，那么 10※8 = ______',
          answer: '36',
          optionsJson: null,
          explanation: '(10+8)×(10-8) = 18×2 = 36',
          orderIndex: 5
        }
      );
      break;
  }

  return questions;
}

generatePracticeTasks();
