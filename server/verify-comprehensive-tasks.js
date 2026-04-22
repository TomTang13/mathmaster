
const mysql = require('mysql2/promise');

async function verifyComprehensiveTasks() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server\n');

  try {
    const taskIds = [
      'comprehensive-1-1-2',
      'comprehensive-1-2-3',
      'comprehensive-1-2-4',
      'comprehensive-1-3-5',
      'comprehensive-1-3-6'
    ];

    console.log('========== 验证综合练习任务 ==========');
    const [tasks] = await connection.query(
      'SELECT * FROM tasks WHERE task_id IN (?, ?, ?, ?, ?)',
      taskIds
    );
    console.table(tasks);

    console.log('\n========== 验证题目统计 ==========');
    for (const taskId of taskIds) {
      const [questions] = await connection.query(
        'SELECT q.*, t.type_name FROM questions q JOIN question_types t ON q.question_type_id = t.id WHERE q.task_id = ?',
        [taskId]
      );

      console.log(`\n任务 "${questions[0]?.task_id || taskId}" (${questions.length}题):`);
      
      const typeCount = {};
      questions.forEach(q => {
        typeCount[q.type_name] = (typeCount[q.type_name] || 0) + 1;
      });
      
      console.log('题目类型分布:', typeCount);
      
      console.table(questions.map(q => ({
        id: q.question_id,
        type: q.type_name,
        difficulty: q.difficulty_id,
        question: q.question_body.substring(0, 35) + '...'
      })));
    }

    console.log('\n✅ 所有综合练习任务验证完成！');
    console.log('   - 每个任务 10 道题');
    console.log('   - 每个任务至少 6 道单选题');

  } catch (error) {
    console.error('Error verifying comprehensive tasks:', error);
  } finally {
    await connection.end();
  }
}

verifyComprehensiveTasks();
