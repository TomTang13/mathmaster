const mysql = require('mysql2/promise');

async function cleanupAndRegenerate() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('========== 清理旧数据 ==========');
    
    // 删除id 7-20的comprehensive题目
    const [deleteQ] = await connection.execute(
      `DELETE FROM questions WHERE question_id LIKE 'cq-7-%' OR question_id LIKE 'cq-8-%' 
       OR question_id LIKE 'cq-9-%' OR question_id LIKE 'cq-10-%' OR question_id LIKE 'cq-11-%'
       OR question_id LIKE 'cq-12-%' OR question_id LIKE 'cq-13-%' OR question_id LIKE 'cq-14-%'
       OR question_id LIKE 'cq-15-%' OR question_id LIKE 'cq-16-%' OR question_id LIKE 'cq-17-%'
       OR question_id LIKE 'cq-18-%' OR question_id LIKE 'cq-19-%' OR question_id LIKE 'cq-20-%'`
    );
    console.log(`✓ 删除题目: ${deleteQ.affectedRows} 条`);

    // 删除id 7-20的comprehensive任务
    const [deleteT] = await connection.execute(
      `DELETE FROM tasks WHERE task_type = 'comprehensive' 
       AND task_id REGEXP '^comprehensive-[0-9]+-[0-9]+-([7-9]|1[0-9]|20)$'`
    );
    console.log(`✓ 删除任务: ${deleteT.affectedRows} 条`);

    console.log('\n========== 清理完成，请重新运行生成脚本 ==========');

  } catch (error) {
    console.error('清理失败:', error);
  } finally {
    await connection.end();
  }
}

cleanupAndRegenerate();
