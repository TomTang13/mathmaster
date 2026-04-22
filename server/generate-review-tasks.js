
const mysql = require('mysql2/promise');

async function generateReviewTasks() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server\n');

  try {
    // 创建 Day 4 的复习任务
    console.log('========== 生成第4天复习任务 ==========');
    const task4Id = 'review-1-4-1';
    const [existingTask4] = await connection.query(
      'SELECT * FROM tasks WHERE task_id = ?',
      [task4Id]
    );

    if (existingTask4.length > 0) {
      console.log('任务已存在，跳过创建');
    } else {
      await connection.query(
        `INSERT INTO tasks (task_id, week_id, day_number, task_type, title, duration, content, is_completed)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [task4Id, 1, 4, 'review', '计算模块周中复习', '15分钟', '复习本周前3天学习的计算技巧！', false]
      );
      console.log('✓ 复习任务创建成功');
    }

    // Day 4 复习题目 - 综合知识点 1-4
    const questions4 = [
      {
        qId: 'r4_1', type: 2, diff: 1,
        body: '计算：1+2+3+...+20 = ?',
        answer: 'A', options: ['A. 210', 'B. 200', 'C. 220', 'D. 190'],
        explain: '高斯求和：(1+20)×20÷2 = 210', order: 1
      },
      {
        qId: 'r4_2', type: 2, diff: 2,
        body: '计算：25×32 = ?',
        answer: 'B', options: ['A. 750', 'B. 800', 'C. 850', 'D. 900'],
        explain: '25×32 = 25×4×8 = 100×8 = 800', order: 2
      },
      {
        qId: 'r4_3', type: 2, diff: 2,
        body: '计算：156-45-55 = ?',
        answer: 'C', options: ['A. 46', 'B. 56', 'C. 56', 'D. 66'],
        explain: '156-(45+55) = 156-100 = 56', order: 3
      },
      {
        qId: 'r4_4', type: 2, diff: 2,
        body: '计算：99×56 = ?',
        answer: 'A', options: ['A. 5544', 'B. 5554', 'C. 5564', 'D. 5574'],
        explain: '(100-1)×56 = 5600-56 = 5544', order: 4
      },
      {
        qId: 'r4_5', type: 2, diff: 2,
        body: '计算：234+56-34+44 = ?',
        answer: 'B', options: ['A. 290', 'B. 300', 'C. 310', 'D. 320'],
        explain: '(234-34)+(56+44) = 200+100 = 300', order: 5
      },
      {
        qId: 'r4_6', type: 2, diff: 3,
        body: '计算：125×56 = ?',
        answer: 'C', options: ['A. 6500', 'B. 6800', 'C. 7000', 'D. 7200'],
        explain: '125×8×7 = 1000×7 = 7000', order: 6
      },
      {
        qId: 'r4_7', type: 3, diff: 2,
        body: '判断：a-(b+c) = a-b+c',
        answer: '错误', options: ['正确', '错误'],
        explain: '括号前是减号，去括号后要变号：a-b-c', order: 7
      },
      {
        qId: 'r4_8', type: 3, diff: 2,
        body: '判断：25×44 = 25×40+25×4',
        answer: '正确', options: ['正确', '错误'],
        explain: '乘法分配律的正确运用', order: 8
      },
      {
        qId: 'r4_9', type: 1, diff: 3,
        body: '计算：999×999+999 = ______',
        answer: '999000', options: null,
        explain: '999×(999+1) = 999×1000 = 999000', order: 9
      },
      {
        qId: 'r4_10', type: 1, diff: 3,
        body: '计算：100-98+96-94+...+4-2 = ______',
        answer: '50', options: null,
        explain: '每两个一组，共25组，每组=2，25×2=50', order: 10
      }
    ];

    for (const q of questions4) {
      const [existingQ] = await connection.query(
        'SELECT * FROM questions WHERE question_id = ?',
        [q.qId]
      );
      if (existingQ.length > 0) {
        console.log(`  题目 ${q.qId} 已存在，跳过`);
        continue;
      }
      await connection.query(
        `INSERT INTO questions (question_id, task_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, explanation, order_index)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [q.qId, task4Id, q.type, q.diff, 4, q.body, q.answer, q.options ? JSON.stringify(q.options) : null, q.explain, q.order]
      );
      console.log(`  ✓ 题目 ${q.order} 生成成功`);
    }

    // 创建 Day 5 的复习任务
    console.log('\n========== 生成第5天复习任务 ==========');
    const task5Id = 'review-1-5-1';
    const [existingTask5] = await connection.query(
      'SELECT * FROM tasks WHERE task_id = ?',
      [task5Id]
    );

    if (existingTask5.length > 0) {
      console.log('任务已存在，跳过创建');
    } else {
      await connection.query(
        `INSERT INTO tasks (task_id, week_id, day_number, task_type, title, duration, content, is_completed)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [task5Id, 1, 5, 'review', '计算模块周终大复习', '20分钟', '全面复习本周所有计算技巧！', false]
      );
      console.log('✓ 复习任务创建成功');
    }

    // Day 5 复习题目 - 综合所有知识点 1-6
    const questions5 = [
      {
        qId: 'r5_1', type: 2, diff: 1,
        body: '计算：25×4+125×8 = ?',
        answer: 'A', options: ['A. 1100', 'B. 1000', 'C. 1200', 'D. 900'],
        explain: '100+1000=1100', order: 1
      },
      {
        qId: 'r5_2', type: 2, diff: 2,
        body: '定义 a★b = a+2×b，那么 4★5 = ?',
        answer: 'B', options: ['A. 13', 'B. 14', 'C. 15', 'D. 16'],
        explain: '4+2×5=14', order: 2
      },
      {
        qId: 'r5_3', type: 2, diff: 2,
        body: '计算：789-123-45-32 = ?',
        answer: 'C', options: ['A. 579', 'B. 589', 'C. 589', 'D. 599'],
        explain: '789-(123+45+32)=789-200=589', order: 3
      },
      {
        qId: 'r5_4', type: 2, diff: 2,
        body: '计算：9999×23 = ?',
        answer: 'A', options: ['A. 229977', 'B. 229987', 'C. 229997', 'D. 230007'],
        explain: '(10000-1)×23=230000-23=229977', order: 4
      },
      {
        qId: 'r5_5', type: 2, diff: 2,
        body: '计算：1+3+5+7+9+11+13 = ?',
        answer: 'B', options: ['A. 48', 'B. 49', 'C. 50', 'D. 51'],
        explain: '7个数的平方，7×7=49', order: 5
      },
      {
        qId: 'r5_6', type: 2, diff: 3,
        body: '计算：25×125×32 = ?',
        answer: 'C', options: ['A. 900000', 'B. 950000', 'C. 1000000', 'D. 1050000'],
        explain: '25×4×125×8=100×1000=100000', order: 6
      },
      {
        qId: 'r5_7', type: 3, diff: 2,
        body: '判断：定义 a◇b = a×b - a，那么 5◇4 = 16',
        answer: '正确', options: ['正确', '错误'],
        explain: '5×4-5=20-5=15？不，等一下，正确计算应该是 5×4-5=15', order: 7
      },
      {
        qId: 'r5_8', type: 3, diff: 2,
        body: '判断：a+b-c-d = (a+b)-(c+d)',
        answer: '正确', options: ['正确', '错误'],
        explain: '减法的性质，连续减等于减它们的和', order: 8
      },
      {
        qId: 'r5_9', type: 1, diff: 3,
        body: '计算：999×999+999×2+1 = ______',
        answer: '1000000', options: null,
        explain: '(999+1)² = 1000² = 1000000', order: 9
      },
      {
        qId: 'r5_10', type: 1, diff: 3,
        body: '定义 a※b = (a+b)×(a-b)，那么 8※5 = ______',
        answer: '39', options: null,
        explain: '(8+5)×(8-5)=13×3=39', order: 10
      }
    ];

    // 修正第7题
    questions5[6].answer = '错误';
    questions5[6].explain = '5×4-5=20-5=15，不是16';

    for (const q of questions5) {
      const [existingQ] = await connection.query(
        'SELECT * FROM questions WHERE question_id = ?',
        [q.qId]
      );
      if (existingQ.length > 0) {
        console.log(`  题目 ${q.qId} 已存在，跳过`);
        continue;
      }
      await connection.query(
        `INSERT INTO questions (question_id, task_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, explanation, order_index)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [q.qId, task5Id, q.type, q.diff, 6, q.body, q.answer, q.options ? JSON.stringify(q.options) : null, q.explain, q.order]
      );
      console.log(`  ✓ 题目 ${q.order} 生成成功`);
    }

    console.log('\n========== 所有复习任务生成完成！ ==========');

  } catch (error) {
    console.error('Error generating review tasks:', error);
  } finally {
    await connection.end();
  }
}

generateReviewTasks();
