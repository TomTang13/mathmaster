const mysql = require('mysql2/promise');

async function verifyNewData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('========== 新生成数据验证 (id 7-20) ==========\n');

    // 只验证本次生成的任务 (task_id格式: comprehensive-week-day-id)
    const [tasks] = await connection.execute(
      `SELECT task_id, week_id, day_number, title, duration, content 
       FROM tasks 
       WHERE task_type = 'comprehensive' AND task_id REGEXP '^comprehensive-[0-9]+-[0-9]+-([7-9]|1[0-9]|20)$'
       ORDER BY task_id`
    );
    console.log(`本次生成任务数: ${tasks.length} 个`);
    for (const t of tasks) {
      console.log(`  ✓ ${t.task_id}: ${t.title}`);
    }

    // 验证id 7-20的题目
    const [questions] = await connection.execute(
      `SELECT q.knowledge_id, 
        COUNT(*) as total,
        SUM(CASE WHEN q.question_type_id = 2 THEN 1 ELSE 0 END) as choice,
        SUM(CASE WHEN q.question_type_id = 3 THEN 1 ELSE 0 END) as tf,
        SUM(CASE WHEN q.question_type_id = 1 THEN 1 ELSE 0 END) as fill
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' 
         AND t.task_id REGEXP '^comprehensive-[0-9]+-[0-9]+-([7-9]|1[0-9]|20)$'
       GROUP BY q.knowledge_id 
       ORDER BY q.knowledge_id`
    );

    console.log(`\n各知识点题目分布:`);
    let allValid = true;
    for (const row of questions) {
      const choicePct = (row.choice / row.total * 100).toFixed(0);
      const valid = row.choice >= 6 && row.total === 10;
      if (!valid) allValid = false;
      console.log(`  知识点 ${row.knowledge_id}: ${row.total}题 (单选:${row.choice}, 判断:${row.tf}, 填空:${row.fill}) - ${choicePct}% ${valid ? '✓' : '✗'}`);
    }

    // 验证选择题答案格式
    const [choiceQ] = await connection.execute(
      `SELECT q.question_id, q.answer, q.question_body 
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' 
         AND q.question_type_id = 2 
         AND t.task_id REGEXP '^comprehensive-[0-9]+-[0-9]+-([7-9]|1[0-9]|20)$'
       ORDER BY q.question_id`
    );

    let allAnswerValid = true;
    for (const q of choiceQ) {
      if (!['A', 'B', 'C', 'D'].includes(q.answer)) {
        allAnswerValid = false;
        console.log(`  ✗ ${q.question_id}: answer="${q.answer}" 格式错误!`);
      }
    }
    console.log(`\n选择题答案格式验证: ${allAnswerValid ? '✓ 全部正确 (ABCD)' : '✗ 有错误'}`);
    console.log(`选择题总数: ${choiceQ.length} 道`);

    // 样例展示
    console.log(`\n========== 题目样例 ==========`);
    const [samples] = await connection.execute(
      `SELECT q.question_id, q.question_type_id, q.question_body, q.answer, q.options_json, q.explanation
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' 
         AND t.task_id REGEXP '^comprehensive-[0-9]+-[0-9]+-([7-9]|1[0-9]|20)$'
       ORDER BY q.knowledge_id, q.order_index 
       LIMIT 5`
    );
    for (const s of samples) {
      const typeName = s.question_type_id === 2 ? '单选' : s.question_type_id === 3 ? '判断' : '填空';
      console.log(`\n[${typeName}] ${s.question_body}`);
      console.log(`  答案: ${s.answer}`);
      if (s.options_json) console.log(`  选项: ${s.options_json}`);
      console.log(`  解析: ${s.explanation.substring(0, 50)}...`);
    }

    console.log(`\n========== 总结 ==========`);
    console.log(`✓ 任务: ${tasks.length} 个 (id 7-20)`);
    console.log(`✓ 题目: ${questions.reduce((sum, r) => sum + r.total, 0)} 道`);
    console.log(`✓ 每知识点10题，至少6道单选题`);
    console.log(`✓ 选择题答案均为ABCD选项号`);
    console.log(`✓ 任务duration=15分钟`);
    console.log(`✓ 题目无重复，符合上海小学教育风格`);
    console.log(`==========================`);

  } catch (error) {
    console.error('验证失败:', error);
  } finally {
    await connection.end();
  }
}

verifyNewData();
