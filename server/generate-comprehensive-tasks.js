
const mysql = require('mysql2/promise');

// 知识点映射
const knowledgeMap = {
  1: { id: 1, text: '加减法凑整（高斯求和、等差数列）', day: 1 },
  2: { id: 2, text: '乘法巧算（分配律、结合律、25×4等）', day: 1 },
  3: { id: 3, text: '带符号搬家法则', day: 2 },
  4: { id: 4, text: '去括号法则', day: 2 },
  5: { id: 5, text: '多位数计算（如 999…9 × 某个数）', day: 3 },
  6: { id: 6, text: '定义新运算（自定义运算符号）', day: 3 }
};

// PDF组合规则
function getPdfIds(n) {
  if (n === 2) return [1];
  if (n >= 3) return [n - 2, n - 1];
  return [];
}

// 生成综合任务
function getTaskData(n) {
  const pdfIds = getPdfIds(n);
  const knowledgeTexts = pdfIds.map(id => knowledgeMap[id].text);
  
  let title, content;
  
  switch(n) {
    case 2:
      title = '计算小达人闯关挑战';
      content = '综合运用加减法凑整、乘法巧算技巧，开启你的计算挑战之旅！';
      break;
    case 3:
      title = '混合运算大冒险';
      content = '结合加减法凑整、乘法巧算、带符号搬家法则，挑战复杂混合运算！';
      break;
    case 4:
      title = '计算魔法师进阶';
      content = '掌握带符号搬家和去括号法则，成为计算小魔法师！';
      break;
    case 5:
      title = '多位数挑战记';
      content = '综合运用去括号法则和多位数计算技巧，攻克计算难题！';
      break;
    case 6:
      title = '数学星球探险';
      content = '结合多位数计算和定义新运算，探索奇妙的数学星球！';
      break;
  }
  
  return {
    taskId: `comprehensive-1-${knowledgeMap[n].day}-${n}`,
    weekId: 1,
    dayNumber: knowledgeMap[n].day,
    title,
    content,
    knowledgeIds: pdfIds,
    relatedKnowledgeId: n
  };
}

// 生成题目
function generateQuestions(taskId, n) {
  const questions = [];
  
  switch(n) {
    case 2: // 综合知识点 1
      questions.push(
        { qId: `cq_2_1`, type: 2, diff: 1, 
          body: '计算：1+2+3+4+5+6+7+8+9+10 = ?',
          answer: 'A', options: ['A. 55', 'B. 50', 'C. 45', 'D. 60'],
          explain: '高斯求和：(1+10)×10÷2 = 55', order: 1 },
        { qId: `cq_2_2`, type: 2, diff: 1,
          body: '计算：25×4 = ?',
          answer: 'C', options: ['A. 90', 'B. 96', 'C. 100', 'D. 104'],
          explain: '25×4 = 100，这是常用的巧算组合', order: 2 },
        { qId: `cq_2_3`, type: 2, diff: 2,
          body: '计算：125×8 = ?',
          answer: 'B', options: ['A. 900', 'B. 1000', 'C. 1100', 'D. 1200'],
          explain: '125×8 = 1000，这是重要的巧算组合', order: 3 },
        { qId: `cq_2_4`, type: 2, diff: 2,
          body: '计算：25×12 = ?',
          answer: 'A', options: ['A. 300', 'B. 280', 'C. 320', 'D. 250'],
          explain: '25×12 = 25×4×3 = 100×3 = 300', order: 4 },
        { qId: `cq_2_5`, type: 2, diff: 2,
          body: '计算：(40+4)×25 = ?',
          answer: 'C', options: ['A. 900', 'B. 1000', 'C. 1100', 'D. 1200'],
          explain: '乘法分配律：40×25 + 4×25 = 1000 + 100 = 1100', order: 5 },
        { qId: `cq_2_6`, type: 2, diff: 3,
          body: '计算：98+99+100+101+102 = ?',
          answer: 'B', options: ['A. 490', 'B. 500', 'C. 510', 'D. 520'],
          explain: '等差数列求和：100×5 = 500', order: 6 },
        { qId: `cq_2_7`, type: 3, diff: 2,
          body: '判断：12×25 = 3×(4×25) = 300',
          answer: '正确', options: ['正确', '错误'],
          explain: '乘法结合律的正确运用', order: 7 },
        { qId: `cq_2_8`, type: 3, diff: 2,
          body: '判断：(a+b)×c = a×c + b×c 这是乘法分配律',
          answer: '正确', options: ['正确', '错误'],
          explain: '这是乘法分配律的标准形式', order: 8 },
        { qId: `cq_2_9`, type: 1, diff: 3,
          body: '计算：99×101 = ______',
          answer: '9999', options: null,
          explain: '(100-1)×(100+1) = 10000 - 1 = 9999', order: 9 },
        { qId: `cq_2_10`, type: 1, diff: 3,
          body: '计算：1+3+5+7+9+11+13+15 = ______',
          answer: '64', options: null,
          explain: '等差数列：(1+15)×8÷2 = 64', order: 10 }
      );
      break;
      
    case 3: // 综合知识点 1,2
      questions.push(
        { qId: `cq_3_1`, type: 2, diff: 1,
          body: '计算：45+23+55+77 = ?',
          answer: 'A', options: ['A. 200', 'B. 190', 'C. 210', 'D. 180'],
          explain: '凑整：(45+55)+(23+77) = 100+100 = 200', order: 1 },
        { qId: `cq_3_2`, type: 2, diff: 2,
          body: '计算：125×32×25 = ?',
          answer: 'B', options: ['A. 90000', 'B. 100000', 'C. 110000', 'D. 120000'],
          explain: '125×8×4×25 = 1000×100 = 100000', order: 2 },
        { qId: `cq_3_3`, type: 2, diff: 2,
          body: '计算：125-87+75-13 = ?',
          answer: 'C', options: ['A. 90', 'B. 95', 'C. 100', 'D. 105'],
          explain: '带符号搬家：(125+75)-(87+13) = 200-100 = 100', order: 3 },
        { qId: `cq_3_4`, type: 2, diff: 2,
          body: '计算：36×25 = ?',
          answer: 'A', options: ['A. 900', 'B. 800', 'C. 1000', 'D. 850'],
          explain: '36×25 = 9×(4×25) = 9×100 = 900', order: 4 },
        { qId: `cq_3_5`, type: 2, diff: 2,
          body: '计算：23×11 = ?',
          answer: 'B', options: ['A. 243', 'B. 253', 'C. 263', 'D. 273'],
          explain: '23×11 = 2 (2+3) 3 = 253', order: 5 },
        { qId: `cq_3_6`, type: 2, diff: 3,
          body: '计算：99×45 = ?',
          answer: 'C', options: ['A. 4445', 'B. 4450', 'C. 4455', 'D. 4460'],
          explain: '(100-1)×45 = 4500 - 45 = 4455', order: 6 },
        { qId: `cq_3_7`, type: 3, diff: 2,
          body: '判断：a-b+c = a+c-b 这是带符号搬家',
          answer: '正确', options: ['正确', '错误'],
          explain: '带符号搬家的正确运用', order: 7 },
        { qId: `cq_3_8`, type: 3, diff: 2,
          body: '判断：25×44 = 25×4×11 = 1100',
          answer: '正确', options: ['正确', '错误'],
          explain: '乘法结合律的巧算', order: 8 },
        { qId: `cq_3_9`, type: 1, diff: 3,
          body: '计算：100-99+98-97+...+4-3+2-1 = ______',
          answer: '50', options: null,
          explain: '每两个一组：(100-99)+(98-97)+...+(2-1) = 1×50 = 50', order: 9 },
        { qId: `cq_3_10`, type: 1, diff: 3,
          body: '计算：25×16×125 = ______',
          answer: '50000', options: null,
          explain: '25×2×8×125 = 50×1000 = 50000', order: 10 }
      );
      break;
      
    case 4: // 综合知识点 2,3
      questions.push(
        { qId: `cq_4_1`, type: 2, diff: 1,
          body: '去括号：125-(25+30) = ?',
          answer: 'A', options: ['A. 70', 'B. 80', 'C. 90', 'D. 100'],
          explain: '125-25-30 = 100-30 = 70', order: 1 },
        { qId: `cq_4_2`, type: 2, diff: 2,
          body: '计算：234-66-34 = ?',
          answer: 'B', options: ['A. 124', 'B. 134', 'C. 144', 'D. 154'],
          explain: '234-(66+34) = 234-100 = 134', order: 2 },
        { qId: `cq_4_3`, type: 2, diff: 2,
          body: '计算：56×125 = ?',
          answer: 'C', options: ['A. 6000', 'B. 6500', 'C. 7000', 'D. 7500'],
          explain: '7×8×125 = 7×1000 = 7000', order: 3 },
        { qId: `cq_4_4`, type: 2, diff: 2,
          body: '计算：345-(145-67) = ?',
          answer: 'A', options: ['A. 267', 'B. 257', 'C. 247', 'D. 237'],
          explain: '345-145+67 = 200+67 = 267', order: 4 },
        { qId: `cq_4_5`, type: 2, diff: 2,
          body: '计算：123+45-23+55 = ?',
          answer: 'B', options: ['A. 190', 'B. 200', 'C. 210', 'D. 220'],
          explain: '(123-23)+(45+55) = 100+100 = 200', order: 5 },
        { qId: `cq_4_6`, type: 2, diff: 3,
          body: '计算：999×999+1999 = ?',
          answer: 'C', options: ['A. 999000', 'B. 999999', 'C. 1000000', 'D. 1000001'],
          explain: '999×999+999+1000 = 999×1000+1000 = 1000×1000 = 1000000', order: 6 },
        { qId: `cq_4_7`, type: 3, diff: 2,
          body: '判断：a-(b-c) = a-b-c',
          answer: '错误', options: ['正确', '错误'],
          explain: '括号前是减号，去括号后要变号：a-b+c', order: 7 },
        { qId: `cq_4_8`, type: 3, diff: 2,
          body: '判断：35×22 = 35×2×11 = 770',
          answer: '正确', options: ['正确', '错误'],
          explain: '乘法巧算的正确运用', order: 8 },
        { qId: `cq_4_9`, type: 1, diff: 3,
          body: '计算：1000-99-98-97-96-95 = ______',
          answer: '515', options: null,
          explain: '1000-(99+98+97+96+95) = 1000-485 = 515', order: 9 },
        { qId: `cq_4_10`, type: 1, diff: 3,
          body: '计算：25×(40+4) = ______',
          answer: '1100', options: null,
          explain: '25×40 + 25×4 = 1000 + 100 = 1100', order: 10 }
      );
      break;
      
    case 5: // 综合知识点 3,4
      questions.push(
        { qId: `cq_5_1`, type: 2, diff: 1,
          body: '计算：99×23 = ?',
          answer: 'A', options: ['A. 2277', 'B. 2287', 'C. 2297', 'D. 2307'],
          explain: '(100-1)×23 = 2300 - 23 = 2277', order: 1 },
        { qId: `cq_5_2`, type: 2, diff: 2,
          body: '计算：999×7 = ?',
          answer: 'B', options: ['A. 6990', 'B. 6993', 'C. 6996', 'D. 6999'],
          explain: '(1000-1)×7 = 7000 - 7 = 6993', order: 2 },
        { qId: `cq_5_3`, type: 2, diff: 2,
          body: '计算：567-123+33-77 = ?',
          answer: 'C', options: ['A. 390', 'B. 395', 'C. 400', 'D. 405'],
          explain: '(567+33)-(123+77) = 600-200 = 400', order: 3 },
        { qId: `cq_5_4`, type: 2, diff: 2,
          body: '计算：99+999+9999+3 = ?',
          answer: 'A', options: ['A. 11100', 'B. 11101', 'C. 11102', 'D. 11103'],
          explain: '(99+1)+(999+1)+(9999+1) = 100+1000+10000 = 11100', order: 4 },
        { qId: `cq_5_5`, type: 2, diff: 2,
          body: '计算：888-(188-125) = ?',
          answer: 'B', options: ['A. 815', 'B. 825', 'C. 835', 'D. 845'],
          explain: '888-188+125 = 700+125 = 825', order: 5 },
        { qId: `cq_5_6`, type: 2, diff: 3,
          body: '计算：9999×2222+3333×3334 = ?',
          answer: 'C', options: ['A. 33330000', 'B. 33330001', 'C. 33330002', 'D. 33330003'],
          explain: '3333×3×2222+3333×3334 = 3333×(6666+3334) = 3333×10000 = 33330000', order: 6 },
        { qId: `cq_5_7`, type: 3, diff: 2,
          body: '判断：999×a = (1000-1)×a = 1000a - a',
          answer: '正确', options: ['正确', '错误'],
          explain: '多位数计算的巧妙方法', order: 7 },
        { qId: `cq_5_8`, type: 3, diff: 2,
          body: '判断：a+b-c = a-c+b 是带符号搬家',
          answer: '正确', options: ['正确', '错误'],
          explain: '带符号搬家的正确运用', order: 8 },
        { qId: `cq_5_9`, type: 1, diff: 3,
          body: '计算：99999×99999 = ______',
          answer: '9999800001', options: null,
          explain: '(100000-1)×(100000-1) = 10000000000 - 200000 + 1 = 9999800001', order: 9 },
        { qId: `cq_5_10`, type: 1, diff: 3,
          body: '计算：19+299+3999+4 = ______',
          answer: '4321', options: null,
          explain: '(19+1)+(299+1)+(3999+1)+1 = 20+300+4000+1 = 4321', order: 10 }
      );
      break;
      
    case 6: // 综合知识点 4,5
      questions.push(
        { qId: `cq_6_1`, type: 2, diff: 1,
          body: '定义 a★b = a×2 + b，那么 3★4 = ?',
          answer: 'A', options: ['A. 10', 'B. 11', 'C. 12', 'D. 13'],
          explain: '3×2 + 4 = 6 + 4 = 10', order: 1 },
        { qId: `cq_6_2`, type: 2, diff: 2,
          body: '计算：99×46 = ?',
          answer: 'B', options: ['A. 4544', 'B. 4554', 'C. 4564', 'D. 4574'],
          explain: '(100-1)×46 = 4600 - 46 = 4554', order: 2 },
        { qId: `cq_6_3`, type: 2, diff: 2,
          body: '定义 a△b = (a + b) × 3，那么 5△7 = ?',
          answer: 'C', options: ['A. 33', 'B. 34', 'C. 36', 'D. 38'],
          explain: '(5+7)×3 = 12×3 = 36', order: 3 },
        { qId: `cq_6_4`, type: 2, diff: 2,
          body: '计算：765-(265+178) = ?',
          answer: 'A', options: ['A. 322', 'B. 332', 'C. 342', 'D. 352'],
          explain: '765-265-178 = 500-178 = 322', order: 4 },
        { qId: `cq_6_5`, type: 2, diff: 2,
          body: '定义 a◇b 为 a 到 b 的和，那么 2◇5 = ?',
          answer: 'B', options: ['A. 13', 'B. 14', 'C. 15', 'D. 16'],
          explain: '2+3+4+5 = 14', order: 5 },
        { qId: `cq_6_6`, type: 2, diff: 3,
          body: '定义 a※b = a×b - a + b，那么 4※5 = ?',
          answer: 'C', options: ['A. 19', 'B. 20', 'C. 21', 'D. 22'],
          explain: '4×5 - 4 + 5 = 20 - 4 + 5 = 21', order: 6 },
        { qId: `cq_6_7`, type: 3, diff: 2,
          body: '判断：如果 a★b = a+b×2，那么 2★3 = 8',
          answer: '正确', options: ['正确', '错误'],
          explain: '2 + 3×2 = 2 + 6 = 8', order: 7 },
        { qId: `cq_6_8`, type: 3, diff: 2,
          body: '判断：999×123 = 123000 - 123 = 122877',
          answer: '正确', options: ['正确', '错误'],
          explain: '(1000-1)×123 = 123000 - 123', order: 8 },
        { qId: `cq_6_9`, type: 1, diff: 3,
          body: '定义 a⊕b = (a+1)×(b-1)，那么 5⊕6 = ______',
          answer: '30', options: null,
          explain: '(5+1)×(6-1) = 6×5 = 30', order: 9 },
        { qId: `cq_6_10`, type: 1, diff: 3,
          body: '计算：9999×9999 + 19999 = ______',
          answer: '100000000', options: null,
          explain: '9999×9999 + 9999 + 10000 = 9999×10000 + 10000 = 10000×10000 = 100000000', order: 10 }
      );
      break;
  }
  
  return questions;
}

async function generateComprehensiveTasks() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server\n');

  try {
    // 为 n=2 到 6 生成综合练习任务
    for (let n = 2; n <= 6; n++) {
      console.log(`========== 为知识点 ${n} 生成综合练习 ==========`);
      
      const taskData = getTaskData(n);
      
      // 检查任务是否已存在
      const [existingTask] = await connection.query(
        'SELECT * FROM tasks WHERE task_id = ?',
        [taskData.taskId]
      );
      
      if (existingTask.length > 0) {
        console.log(`任务 ${taskData.taskId} 已存在，跳过创建`);
      } else {
        // 插入任务
        await connection.query(
          'INSERT INTO tasks (task_id, week_id, day_number, task_type, title, duration, content, is_completed) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [taskData.taskId, taskData.weekId, taskData.dayNumber, 'comprehensive', taskData.title, '15分钟', taskData.content, false]
        );
        console.log(`✓ 任务 "${taskData.title}" 创建成功`);
      }

      // 生成题目
      const questions = generateQuestions(taskData.taskId, n);
      
      for (const q of questions) {
        const [existingQ] = await connection.query(
          'SELECT * FROM questions WHERE question_id = ?',
          [q.qId]
        );
        
        if (existingQ.length > 0) {
          console.log(`  题目 ${q.qId} 已存在，跳过`);
          continue;
        }
        
        await connection.query(
          'INSERT INTO questions (question_id, task_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, explanation, order_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [q.qId, taskData.taskId, q.type, q.diff, n, q.body, q.answer, q.options ? JSON.stringify(q.options) : null, q.explain, q.order]
        );
        console.log(`  ✓ 题目 ${q.order} 生成成功`);
      }
      
      console.log('');
    }

    console.log('========== 所有综合练习任务生成完成！ ==========');

  } catch (error) {
    console.error('Error generating comprehensive tasks:', error);
  } finally {
    await connection.end();
  }
}

generateComprehensiveTasks();
