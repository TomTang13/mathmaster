
const mysql = require('mysql2/promise');

async function verifyGeneratedData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server\n');

  try {
    // 查询新生成的任务
    const taskIds = ['practice-1-2-1', 'practice-1-2-2', 'practice-1-3-1', 'practice-1-3-2'];
    
    console.log('========== 验证生成的任务 ==========');
    const [tasks] = await connection.query(
      'SELECT * FROM tasks WHERE task_id IN (?, ?, ?, ?)',
      taskIds
    );
    console.table(tasks);

    console.log('\n========== 验证生成的习题统计 ==========');
    for (const taskId of taskIds) {
      const [questions] = await connection.query(
        'SELECT q.*, t.type_name, d.difficulty_level FROM questions q JOIN question_types t ON q.question_type_id = t.id JOIN question_difficulties d ON q.difficulty_id = d.id WHERE q.task_id = ?',
        [taskId]
      );
      
      console.log(`\n任务 ${taskId} 的习题：`);
      console.table(questions.map(q => ({
        '题目ID': q.question_id,
        '题目类型': q.type_name,
        '难度': q.difficulty_level,
        '题目': q.question_body.substring(0, 40) + '...'
      })));

      // 统计题目类型
      const typeCount = {};
      questions.forEach(q => {
        typeCount[q.type_name] = (typeCount[q.type_name] || 0) + 1;
      });
      console.log('题目类型分布:', typeCount);
    }

  } catch (error) {
    console.error('Error verifying data:', error);
  } finally {
    await connection.end();
  }
}

verifyGeneratedData();
