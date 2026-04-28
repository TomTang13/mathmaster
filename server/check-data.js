const mysql = require('mysql2/promise');

async function checkData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('=== 查询 key_knowledge 表 id 7-20 ===');
    const [knowledgeRows] = await connection.execute(
      'SELECT id, week_id, knowledge_text, target_day, filename, module FROM key_knowledge WHERE id BETWEEN 7 AND 20 ORDER BY id'
    );
    console.table(knowledgeRows);

    console.log('\n=== 查询已有的 comprehensive 任务 ===');
    const [taskRows] = await connection.execute(
      "SELECT task_id, week_id, day_number, title, duration FROM tasks WHERE task_type = 'comprehensive' ORDER BY task_id"
    );
    console.table(taskRows);

    console.log('\n=== 查询 question_types ===');
    const [typeRows] = await connection.execute('SELECT * FROM question_types');
    console.table(typeRows);

    console.log('\n=== 查询已有 comprehensive 题目的 knowledge_id 分布 ===');
    const [qDistRows] = await connection.execute(
      `SELECT q.knowledge_id, COUNT(*) as count 
       FROM questions q 
       JOIN tasks t ON q.task_id = t.task_id 
       WHERE t.task_type = 'comprehensive' 
       GROUP BY q.knowledge_id 
       ORDER BY q.knowledge_id`
    );
    console.table(qDistRows);

  } catch (error) {
    console.error('查询错误:', error);
  } finally {
    await connection.end();
  }
}

checkData();
