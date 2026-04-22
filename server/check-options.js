const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

async function checkFormat() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    const [questions] = await connection.execute(
      `SELECT question_id, answer, options_json, LENGTH(options_json) as len FROM questions WHERE knowledge_id >= 7 AND question_type_id = 2 LIMIT 5`
    );

    console.log('=== 检查 options_json 字段格式 ===');
    for (const q of questions) {
      console.log(`\n题目ID: ${q.question_id}`);
      console.log(`答案: ${q.answer}`);
      console.log(`options_json类型: ${typeof q.options_json}`);
      console.log(`options_json长度: ${q.len}`);
      console.log(`options_json内容: ${q.options_json}`);
      console.log(`options_json前50字符: ${String(q.options_json).substring(0, 50)}`);
    }

  } catch (error) {
    console.error('查询出错:', error);
  } finally {
    await connection.end();
  }
}

checkFormat();