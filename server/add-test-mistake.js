const mysql = require('mysql2/promise');

async function addTestMistake() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('正在创建测试错题记录...');
    
    // 插入测试错题记录
    await connection.execute(
      'INSERT INTO user_mistakes (userId, questionId, errorCount) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE errorCount = errorCount + 1',
      [1, 'test123', 1]
    );
    
    console.log('✅ 测试错题记录创建成功！');
    
  } catch (error) {
    console.error('❌ 执行SQL错误:', error);
  } finally {
    await connection.end();
  }
}

addTestMistake();
