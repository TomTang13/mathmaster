const mysql = require('mysql2/promise');

async function checkKnowledge() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('========== key_knowledge id 6-10 ==========');
    const [knowledge] = await connection.execute(
      'SELECT * FROM key_knowledge WHERE id BETWEEN 6 AND 10 ORDER BY id'
    );
    console.table(knowledge);

    console.log('\n========== question_base 已有数据 ==========');
    const [qbCount] = await connection.execute(
      'SELECT knowledge_id, COUNT(*) as count FROM question_base WHERE knowledge_id BETWEEN 6 AND 10 GROUP BY knowledge_id'
    );
    console.table(qbCount);

  } catch (error) {
    console.error('查询错误:', error);
  } finally {
    await connection.end();
  }
}

checkKnowledge();
