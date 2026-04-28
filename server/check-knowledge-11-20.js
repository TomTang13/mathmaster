const mysql = require('mysql2/promise');

async function check() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    const [rows] = await connection.execute(
      'SELECT id, filename, week_id, module FROM key_knowledge WHERE id BETWEEN 11 AND 20 ORDER BY id'
    );
    console.log('=== key_knowledge id 11-20 ===');
    for (const row of rows) {
      console.log(`id=${row.id}, filename="${row.filename}", week=${row.week_id}, module=${row.module}`);
    }

    // 检查是否已有数据
    const [existing] = await connection.execute(
      'SELECT knowledge_id, COUNT(*) as count FROM question_base WHERE knowledge_id BETWEEN 11 AND 20 GROUP BY knowledge_id ORDER BY knowledge_id'
    );
    console.log('\n=== question_base 现有数据 ===');
    if (existing.length === 0) {
      console.log('id 11-20 暂无数据');
    } else {
      for (const row of existing) {
        console.log(`knowledge_id=${row.knowledge_id}: ${row.count}题`);
      }
    }
  } catch (error) {
    console.error('查询失败:', error);
  } finally {
    await connection.end();
  }
}

check();
