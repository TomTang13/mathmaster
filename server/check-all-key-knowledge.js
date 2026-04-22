
const mysql = require('mysql2/promise');

async function checkAllKeyKnowledge() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server\n');

  try {
    const [keyKnowledge] = await connection.query(
      'SELECT * FROM key_knowledge WHERE id IN (1, 2, 3, 4, 5, 6)'
    );
    
    console.log('所有 key_knowledge 数据：');
    console.table(keyKnowledge);

  } catch (error) {
    console.error('Error checking key knowledge:', error);
  } finally {
    await connection.end();
  }
}

checkAllKeyKnowledge();
