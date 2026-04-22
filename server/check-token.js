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
    console.log('=== 查询用户 token 18602100824 ===');
    const [users] = await connection.execute(
      `SELECT id, phone, token, name FROM users WHERE token = '18602100824'`
    );

    console.log(`找到 ${users.length} 个用户`);
    if (users.length > 0) {
      console.table(users);
    } else {
      console.log('没有找到token为18602100824的用户');
    }

    // 也检查一下phone
    console.log('\n=== 查询手机号 18602100824 ===');
    const [usersByPhone] = await connection.execute(
      `SELECT id, phone, token, name FROM users WHERE phone = '18602100824'`
    );

    console.log(`找到 ${usersByPhone.length} 个用户`);
    if (usersByPhone.length > 0) {
      console.table(usersByPhone);
    }

  } catch (error) {
    console.error('查询出错:', error);
  } finally {
    await connection.end();
  }
}

checkUser();