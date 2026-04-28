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
    console.log('========== key_knowledge id 3,4,5 ==========');
    const [knowledge] = await connection.execute(
      'SELECT * FROM key_knowledge WHERE id IN (3, 4, 5) ORDER BY id'
    );
    console.table(knowledge);

    console.log('\n========== question_base 已有数据 ==========');
    const [qbCount] = await connection.execute(
      'SELECT knowledge_id, COUNT(*) as count FROM question_base WHERE knowledge_id IN (3,4,5) GROUP BY knowledge_id'
    );
    console.table(qbCount);

  } catch (error) {
    console.error('查询错误:', error);
  } finally {
    await connection.end();
  }
}

checkKnowledge();
