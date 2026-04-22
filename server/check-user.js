const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

async function checkUser() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    console.log('=== 查看 users 表结构 ===');
    const [columns] = await connection.execute('DESCRIBE users');
    console.table(columns);

    console.log('\n=== 查询所有用户 ===');
    const [users] = await connection.execute('SELECT * FROM users LIMIT 5');
    console.table(users);

    console.log('\n=== 查询 token 18602100824 ===');
    const [usersByToken] = await connection.execute(
      `SELECT * FROM users WHERE token = '18602100824'`
    );
    console.log(`找到 ${usersByToken.length} 个用户`);
    if (usersByToken.length > 0) {
      console.table(usersByToken);
    }

  } catch (error) {
    console.error('查询出错:', error);
  } finally {
    await connection.end();
  }
}

checkUser();