const mysql = require('mysql2/promise');

async function addKnowledgeIdField() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 为questions表添加knowledge_id字段
    await connection.query(`
      ALTER TABLE questions
      ADD COLUMN knowledge_id INT,
      ADD FOREIGN KEY (knowledge_id) REFERENCES key_knowledge(id) ON DELETE SET NULL
    `);
    
    console.log('Successfully added knowledge_id field to questions table with foreign key constraint');
    
    // 验证修改结果
    const [columns] = await connection.query('DESCRIBE questions');
    console.log('\nUpdated questions table structure:');
    console.table(columns);
    
  } catch (error) {
    console.error('Error adding knowledge_id field:', error);
  } finally {
    await connection.end();
  }
}

addKnowledgeIdField();
