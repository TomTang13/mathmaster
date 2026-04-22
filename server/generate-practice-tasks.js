const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

// 待处理的 key_knowledge 数据
const knowledgeData = [
  {
    id: 7,
    knowledge_text: "速度与准确率：在5分钟内完成20道复杂乘法口算不丢分。",
    difficulty: 3,
    target_day: 1,
    week_id: 1,
    filename: "1.1计算模块-加减法凑整与高斯求和.pdf"
  },
  {
    id: 8,
    knowledge_text: "估算能力：掌握四舍五入估算法，快速判定计算结果的合理范围。",
    difficulty: 2,
    target_day: 1,
    week_id: 1,
    filename: "1.1计算模块-加减法凑整与高斯求和.pdf"
  },
  {
    id: 9,
    knowledge_text: "理解积的变化规律：一个因数不变，另一个因数扩大/缩小，积也相应变化。",
    difficulty: 2,
    target_day: 2,
    week_id: 1,
    filename: "1.2 乘法分配律、结合律的巧算.pdf"
  },
  {
    id: 10,
    knowledge_text: "进阶计算技巧：利用分配律简化大数乘法（如 101×37）。",
    difficulty: 2,
    target_day: 2,
    week_id: 1,
    filename: "1.2 乘法分配律、结合律的巧算.pdf"
  },
  {
    id: 11,
    knowledge_text: "除法商不变：理解被除数与除数同时缩放时，商的稳定性（计算神技）。",
    difficulty: 2,
    target_day: 2,
    week_id: 1,
    filename: "1.2 乘法分配律、结合律的巧算.pdf"
  },
  {
    id: 12,
    knowledge_text: "质量单位换算：1吨 = 1000千克，1千克 = 1000克。",
    difficulty: 1,
    target_day: 3,
    week_id: 1,
    filename: "1.3带符号搬家、去括号法则.pdf"
  }
];

// 生成任务和题目
async function generateTasksAndQuestions() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    for (const knowledge of knowledgeData) {
      console.log(`=== 处理 key_knowledge id: ${knowledge.id} ===`);
      console.log(`知识点: ${knowledge.knowledge_text}`);
      console.log(`文件: ${knowledge.filename}`);
      
      // 生成任务ID
      const taskId = `practice-w${knowledge.week_id}d${knowledge.target_day}-k${knowledge.id}`;
      
      // 生成任务
      const taskTitle = `【练习】${knowledge.knowledge_text.substring(0, 20)}...`;
      const taskContent = `基于知识点：${knowledge.knowledge_text}\n\n请完成以下练习题目，巩固对该知识点的理解。`;
      
      // 插入任务
      await connection.execute(
        'INSERT IGNORE INTO tasks (task_id, week_id, day_number, task_type, title, content) VALUES (?, ?, ?, ?, ?, ?)',
        [taskId, knowledge.week_id, knowledge.target_day, 'practice', taskTitle, taskContent]
      );
      console.log(`生成任务: ${taskId}`);
      
      // 生成题目
      const questions = generateQuestionsForKnowledge(knowledge, taskId);
      
      for (const question of questions) {
        await connection.execute(
          `INSERT IGNORE INTO questions 
           (question_id, task_id, question_body, answer, options_json, explanation, question_type_id, difficulty_id, order_index) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            question.question_id,
            taskId,
            question.question_body,
            question.answer,
            question.options_json,
            question.explanation,
            question.question_type_id,
            question.difficulty_id,
            question.order_index
          ]
        );
        console.log(`生成题目: ${question.question_id}`);
      }
      
      console.log('\n');
    }
    
    console.log('=== 数据生成完成 ===');

  } catch (error) {
    console.error('生成数据时出错:', error);
  } finally {
    await connection.end();
  }
}

// 根据知识点生成题目
function generateQuestionsForKnowledge(knowledge, taskId) {
  const questions = [];
  const baseId = `${taskId.replace('practice-', 'pq_')}`;
  
  switch (knowledge.id) {
    case 7: // 速度与准确率
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "计算：25 × 4 = ?",
          answer: "100",
          options_json: JSON.stringify(['A. 105', 'B. 101', 'C. 100', 'D. 99']),
          explanation: "25 × 4 = 100，这是常用的巧算组合",
          question_type_id: 2, // 单选题
          difficulty_id: 1,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "计算：125 × 8 = ?",
          answer: "1000",
          options_json: JSON.stringify(['A. 1000', 'B. 1001', 'C. 999', 'D. 1002']),
          explanation: "125 × 8 = 1000，这是重要的巧算组合",
          question_type_id: 2,
          difficulty_id: 1,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "计算：25 × 12 = ?",
          answer: "300",
          options_json: JSON.stringify(['A. 305', 'B. 300', 'C. 301', 'D. 299']),
          explanation: "25 × 12 = 25 × 4 × 3 = 100 × 3 = 300",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "判断：在5分钟内完成20道复杂乘法口算是可以做到的",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "通过训练，是可以达到这个速度和准确率的",
          question_type_id: 3, // 是非题
          difficulty_id: 2,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "计算：(40 + 4) × 25 = ?",
          answer: "1100",
          options_json: JSON.stringify(['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100']),
          explanation: "乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 5
        }
      );
      break;
      
    case 8: // 估算能力
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "估算：21 × 19 ≈ ?",
          answer: "400",
          options_json: JSON.stringify(['A. 300', 'B. 400', 'C. 500', 'D. 600']),
          explanation: "21 ≈ 20，19 ≈ 20，20 × 20 = 400",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "估算：38 × 51 ≈ ?",
          answer: "2000",
          options_json: JSON.stringify(['A. 1500', 'B. 1800', 'C. 2000', 'D. 2500']),
          explanation: "38 ≈ 40，51 ≈ 50，40 × 50 = 2000",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "判断：估算时应该使用四舍五入法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "四舍五入是常用的估算方法",
          question_type_id: 3,
          difficulty_id: 1,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "估算：123 × 78 ≈ ?",
          answer: "9600",
          options_json: JSON.stringify(['A. 8000', 'B. 9000', 'C. 9600', 'D. 10000']),
          explanation: "123 ≈ 120，78 ≈ 80，120 × 80 = 9600",
          question_type_id: 2,
          difficulty_id: 3,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "估算：256 × 32 ≈ ?",
          answer: "8000",
          options_json: JSON.stringify(['A. 7000', 'B. 8000', 'C. 9000', 'D. 10000']),
          explanation: "256 ≈ 250，32 ≈ 32，250 × 32 = 8000",
          question_type_id: 2,
          difficulty_id: 3,
          order_index: 5
        }
      );
      break;
      
    case 9: // 积的变化规律
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "一个因数不变，另一个因数扩大10倍，积会怎样变化？",
          answer: "扩大10倍",
          options_json: JSON.stringify(['A. 不变', 'B. 扩大10倍', 'C. 缩小10倍', 'D. 扩大100倍']),
          explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "一个因数不变，另一个因数缩小5倍，积会怎样变化？",
          answer: "缩小5倍",
          options_json: JSON.stringify(['A. 不变', 'B. 扩大5倍', 'C. 缩小5倍', 'D. 缩小25倍']),
          explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "如果 3 × 4 = 12，那么 3 × 40 = ?",
          answer: "120",
          options_json: JSON.stringify(['A. 12', 'B. 120', 'C. 1200', 'D. 12000']),
          explanation: "一个因数3不变，另一个因数4扩大10倍变为40，积也扩大10倍变为120",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "判断：积的变化规律只适用于乘法",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "积的变化规律是乘法的基本规律",
          question_type_id: 3,
          difficulty_id: 1,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "如果 5 × 8 = 40，那么 5 × 2 = ?",
          answer: "10",
          options_json: JSON.stringify(['A. 10', 'B. 20', 'C. 30', 'D. 40']),
          explanation: "一个因数5不变，另一个因数8缩小4倍变为2，积也缩小4倍变为10",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 5
        }
      );
      break;
      
    case 10: // 进阶计算技巧
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "计算：101 × 37 = ?",
          answer: "3737",
          options_json: JSON.stringify(['A. 3700', 'B. 3737', 'C. 3800', 'D. 3837']),
          explanation: "利用分配律：(100 + 1) × 37 = 3700 + 37 = 3737",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "计算：99 × 45 = ?",
          answer: "4455",
          options_json: JSON.stringify(['A. 4455', 'B. 4500', 'C. 4545', 'D. 4600']),
          explanation: "利用分配律：(100 - 1) × 45 = 4500 - 45 = 4455",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "计算：25 × 44 = ?",
          answer: "1100",
          options_json: JSON.stringify(['A. 1000', 'B. 1100', 'C. 1200', 'D. 1300']),
          explanation: "利用分配律：25 × (40 + 4) = 1000 + 100 = 1100",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "判断：分配律只适用于加法",
          answer: "错误",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "分配律适用于乘法对加法的分配，也适用于乘法对减法的分配",
          question_type_id: 3,
          difficulty_id: 1,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "计算：125 × 88 = ?",
          answer: "11000",
          options_json: JSON.stringify(['A. 10000', 'B. 11000', 'C. 12000', 'D. 13000']),
          explanation: "利用分配律：125 × (80 + 8) = 10000 + 1000 = 11000",
          question_type_id: 2,
          difficulty_id: 3,
          order_index: 5
        }
      );
      break;
      
    case 11: // 除法商不变
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "如果 48 ÷ 12 = 4，那么 480 ÷ 120 = ?",
          answer: "4",
          options_json: JSON.stringify(['A. 4', 'B. 40', 'C. 400', 'D. 0.4']),
          explanation: "除法商不变规律：被除数和除数同时扩大10倍，商不变",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "如果 120 ÷ 30 = 4，那么 12 ÷ 3 = ?",
          answer: "4",
          options_json: JSON.stringify(['A. 4', 'B. 40', 'C. 0.4', 'D. 400']),
          explanation: "除法商不变规律：被除数和除数同时缩小10倍，商不变",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "判断：除法商不变规律只适用于整数除法",
          answer: "错误",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "除法商不变规律适用于所有除法运算",
          question_type_id: 3,
          difficulty_id: 1,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "如果 96 ÷ 16 = 6，那么 48 ÷ 8 = ?",
          answer: "6",
          options_json: JSON.stringify(['A. 6', 'B. 3', 'C. 12', 'D. 24']),
          explanation: "除法商不变规律：被除数和除数同时缩小2倍，商不变",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "计算：4800 ÷ 1200 = ?",
          answer: "4",
          options_json: JSON.stringify(['A. 4', 'B. 40', 'C. 400', 'D. 0.4']),
          explanation: "除法商不变规律：被除数和除数同时缩小100倍，变为48 ÷ 12 = 4",
          question_type_id: 2,
          difficulty_id: 2,
          order_index: 5
        }
      );
      break;
      
    case 12: // 质量单位换算
      questions.push(
        {
          question_id: `${baseId}_1`,
          question_body: "1吨 = ? 千克",
          answer: "1000",
          options_json: JSON.stringify(['A. 100', 'B. 1000', 'C. 10000', 'D. 10']),
          explanation: "1吨 = 1000千克",
          question_type_id: 2,
          difficulty_id: 1,
          order_index: 1
        },
        {
          question_id: `${baseId}_2`,
          question_body: "1千克 = ? 克",
          answer: "1000",
          options_json: JSON.stringify(['A. 100', 'B. 1000', 'C. 10000', 'D. 10']),
          explanation: "1千克 = 1000克",
          question_type_id: 2,
          difficulty_id: 1,
          order_index: 2
        },
        {
          question_id: `${baseId}_3`,
          question_body: "2吨 = ? 千克",
          answer: "2000",
          options_json: JSON.stringify(['A. 200', 'B. 2000', 'C. 20000', 'D. 20']),
          explanation: "2吨 = 2 × 1000 = 2000千克",
          question_type_id: 2,
          difficulty_id: 1,
          order_index: 3
        },
        {
          question_id: `${baseId}_4`,
          question_body: "判断：1吨比1千克重",
          answer: "正确",
          options_json: JSON.stringify(['正确', '错误']),
          explanation: "1吨 = 1000千克，所以1吨比1千克重",
          question_type_id: 3,
          difficulty_id: 1,
          order_index: 4
        },
        {
          question_id: `${baseId}_5`,
          question_body: "5000克 = ? 千克",
          answer: "5",
          options_json: JSON.stringify(['A. 5', 'B. 50', 'C. 500', 'D. 0.5']),
          explanation: "5000克 = 5000 ÷ 1000 = 5千克",
          question_type_id: 2,
          difficulty_id: 1,
          order_index: 5
        }
      );
      break;
  }
  
  return questions;
}

generateTasksAndQuestions();