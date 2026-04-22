const mysql = require('mysql2/promise');

async function queryKeyKnowledge() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    // 查询 key_knowledge 表中 id 为 7,8,9,10,11,12 的数据
    console.log('=== 查询 key_knowledge 表 ===');
    const [knowledgeRows] = await connection.execute(
      'SELECT * FROM key_knowledge WHERE id IN (7, 8, 9, 10, 11, 12)'
    );
    console.table(knowledgeRows);

    // 查询 question_types 表
    console.log('\n=== 查询 question_types 表 ===');
    const [typesRows] = await connection.execute('SELECT * FROM question_types');
    console.table(typesRows);

    // 查询 questions 表前 50 条
    console.log('\n=== 查询 questions 表前 50 条 ===');
    const [questionsRows] = await connection.execute('SELECT * FROM questions LIMIT 50');
    console.table(questionsRows);

  } catch (error) {
    console.error('查询错误:', error);
  } finally {
    await connection.end();
  }
}

queryKeyKnowledge();