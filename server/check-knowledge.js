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
    console.log('========== key_knowledge id 1,2 ==========');
    const [knowledge] = await connection.execute(
      'SELECT * FROM key_knowledge WHERE id IN (1, 2) ORDER BY id'
    );
    console.table(knowledge);

    console.log('\n========== questions 参考题目 (前20题) ==========');
    const [questions] = await connection.execute(
      'SELECT question_id, question_type_id, difficulty_id, question_body, answer, options_json FROM questions LIMIT 20'
    );
    for (const q of questions) {
      console.log(`\n[${q.question_id}] type=${q.question_type_id}, diff=${q.difficulty_id}`);
      console.log(`  题目: ${q.question_body}`);
      console.log(`  答案: ${q.answer}`);
      if (q.options_json) console.log(`  选项: ${q.options_json}`);
    }

    console.log('\n========== question_base 表结构 ==========');
    const [columns] = await connection.execute(
      "SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'question_base' AND TABLE_SCHEMA = 'mathmaster'"
    );
    console.table(columns);

    console.log('\n========== question_base 现有数据 ==========');
    const [qbCount] = await connection.execute('SELECT COUNT(*) as count FROM question_base');
    console.log(`现有题目数: ${qbCount[0].count}`);

    if (qbCount[0].count > 0) {
      const [qbSample] = await connection.execute('SELECT * FROM question_base LIMIT 3');
      console.table(qbSample);
    }

  } catch (error) {
    console.error('查询错误:', error);
  } finally {
    await connection.end();
  }
}

checkKnowledge();
