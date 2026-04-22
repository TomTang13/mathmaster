const mysql = require('mysql2/promise');

// 数据库连接配置
const dbConfig = {
  host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  user: 'mathmaster_dev',
  password: 'mathmaster_DEV123!',
  database: 'mathmaster'
};

async function addDatetimeFields() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 获取所有表名
    const [tables] = await connection.execute(
      "SHOW TABLES"
    );
    
    const tableNames = tables.map(row => Object.values(row)[0]);
    console.log('数据库中的表:', tableNames);
    
    // 为每个表添加字段
    for (const tableName of tableNames) {
      console.log(`\n=== 处理表: ${tableName} ===`);
      
      // 检查表结构
      const [columns] = await connection.execute(
        `DESCRIBE ${tableName}`
      );
      
      const columnNames = columns.map(col => col.Field);
      
      // 检查是否已存在 create_datetime 字段
      if (!columnNames.includes('create_datetime')) {
        await connection.execute(
          `ALTER TABLE ${tableName} ADD COLUMN create_datetime DATETIME DEFAULT CURRENT_TIMESTAMP`
        );
        console.log(`添加 create_datetime 字段`);
      } else {
        console.log(`create_datetime 字段已存在`);
      }
      
      // 检查是否已存在 update_datetime 字段
      if (!columnNames.includes('update_datetime')) {
        await connection.execute(
          `ALTER TABLE ${tableName} ADD COLUMN update_datetime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
        );
        console.log(`添加 update_datetime 字段`);
      } else {
        console.log(`update_datetime 字段已存在`);
      }
    }
    
    console.log('\n=== 所有表处理完成 ===');

  } catch (error) {
    console.error('添加字段时出错:', error);
  } finally {
    await connection.end();
  }
}

addDatetimeFields();