const mysql = require('mysql2/promise');

async function verifyData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('========== 数据验证报告 ==========\n');

    // 1. 验证任务数量
    const [taskCount] = await connection.execute(
      "SELECT COUNT(*) as count FROM tasks WHERE task_type = 'comprehensive' AND task_id LIKE 'comprehensive-%-%-%'"
    );
    console.log(`1. 综合练习任务总数: ${taskCount[0].count} 个 (期望: 14个)`);

    // 2. 验证题目总数
    const [qCount] = await connection.execute(
      `SELECT COUNT(*) as count FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' AND t.task_id LIKE 'comprehensive-%-%-%'`
    );
    console.log(`2. 综合练习题总数: ${qCount[0].count} 个 (期望: 140个)`);

    // 3. 每个知识点的题目分布
    console.log('\n3. 各知识点题目分布:');
    const [dist] = await connection.execute(
      `SELECT q.knowledge_id, COUNT(*) as count,
        SUM(CASE WHEN q.question_type_id = 2 THEN 1 ELSE 0 END) as choice_count,
        SUM(CASE WHEN q.question_type_id = 3 THEN 1 ELSE 0 END) as tf_count,
        SUM(CASE WHEN q.question_type_id = 1 THEN 1 ELSE 0 END) as fill_count
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' AND t.task_id LIKE 'comprehensive-%-%-%'
       GROUP BY q.knowledge_id 
       ORDER BY q.knowledge_id`
    );
    
    let allValid = true;
    for (const row of dist) {
      const choicePct = (row.choice_count / row.count * 100).toFixed(0);
      const valid = row.choice_count >= 6 && row.count === 10;
      if (!valid) allValid = false;
      console.log(`   知识点 ${row.knowledge_id}: ${row.count}题 (单选:${row.choice_count}, 判断:${row.tf_count}, 填空:${row.fill_count}) - 选择题${choicePct}% ${valid ? '✓' : '✗'}`);
    }

    // 4. 验证选择题答案格式
    console.log('\n4. 选择题答案格式验证:');
    const [choiceAnswers] = await connection.execute(
      `SELECT q.question_id, q.answer, q.question_body 
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' AND q.question_type_id = 2 AND t.task_id LIKE 'comprehensive-%-%-%'
       LIMIT 10`
    );
    let answerValid = true;
    for (const q of choiceAnswers) {
      const valid = ['A', 'B', 'C', 'D'].includes(q.answer);
      if (!valid) answerValid = false;
      console.log(`   ${q.question_id}: answer="${q.answer}" ${valid ? '✓' : '✗'} | ${q.question_body.substring(0, 30)}...`);
    }

    // 5. 验证任务字段
    console.log('\n5. 任务字段验证:');
    const [tasks] = await connection.execute(
      "SELECT task_id, week_id, day_number, task_type, duration FROM tasks WHERE task_type = 'comprehensive' AND task_id LIKE 'comprehensive-%-%-%' ORDER BY task_id LIMIT 5"
    );
    for (const t of tasks) {
      console.log(`   ${t.task_id}: week=${t.week_id}, day=${t.day_number}, type=${t.task_type}, duration=${t.duration} ✓`);
    }

    // 6. 验证knowledge_id关联
    console.log('\n6. Knowledge_id关联验证:');
    const [knowledgeCheck] = await connection.execute(
      `SELECT DISTINCT q.knowledge_id, kk.knowledge_text 
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       JOIN key_knowledge kk ON q.knowledge_id = kk.id
       WHERE t.task_type = 'comprehensive' AND t.task_id LIKE 'comprehensive-%-%-%'
       ORDER BY q.knowledge_id`
    );
    for (const k of knowledgeCheck) {
      console.log(`   knowledge_id=${k.knowledge_id}: ${k.knowledge_text.substring(0, 20)}... ✓`);
    }

    console.log('\n========== 验证结果 ==========');
    console.log(`任务数量: ${taskCount[0].count === 14 ? '✓ 通过' : '✗ 失败'}`);
    console.log(`题目数量: ${qCount[0].count === 140 ? '✓ 通过' : '✗ 失败'}`);
    console.log(`选择题比例(≥70%): ${allValid ? '✓ 通过' : '✗ 失败'}`);
    console.log(`选择题答案格式(ABCD): ${answerValid ? '✓ 通过' : '✗ 失败'}`);
    console.log('==============================');

  } catch (error) {
    console.error('验证失败:', error);
  } finally {
    await connection.end();
  }
}

verifyData();
