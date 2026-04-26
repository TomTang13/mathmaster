const mysql = require('mysql2/promise');

async function addAudioField() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('正在添加audio_path字段...');
    
    // 尝试添加audio_path字段（如果已存在会报错但可以继续）
    try {
      await connection.execute(
        'ALTER TABLE user_mistakes ADD COLUMN audio_path TEXT DEFAULT NULL'
      );
      console.log('字段添加成功');
    } catch (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
        console.log('字段已存在，跳过添加');
      } else {
        throw err;
      }
    }
    
    // 添加注释
    await connection.execute(
      "ALTER TABLE user_mistakes MODIFY COLUMN audio_path TEXT COMMENT '费曼输出音频文件路径' DEFAULT NULL"
    );
    
    console.log('✅ audio_path字段添加成功！');
    
  } catch (error) {
    console.error('❌ 执行SQL错误:', error);
  } finally {
    await connection.end();
  }
}

addAudioField();
