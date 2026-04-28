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
    // 查询key_knowledge表中id 31-40的数据
    const [knowledgeData] = await connection.execute(
      'SELECT id, knowledge_text, filename, week_id, module FROM key_knowledge WHERE id BETWEEN 31 AND 40'
    );

    console.log('知识点31-40数据:');
    knowledgeData.forEach(item => {
      console.log(`id: ${item.id}, knowledge_text: ${item.knowledge_text}, filename: ${item.filename}, week_id: ${item.week_id}, module: ${item.module}`);
    });

    // 检查question_base表中是否已有这些知识点的题目
    const [existingData] = await connection.execute(
      'SELECT knowledge_id, COUNT(*) as count FROM question_base WHERE knowledge_id BETWEEN 31 AND 40 GROUP BY knowledge_id'
    );

    console.log('\n已存在的题目数量:');
    existingData.forEach(item => {
      console.log(`knowledge_id: ${item.knowledge_id}, 题目数: ${item.count}`);
    });

  } catch (error) {
    console.error('查询失败:', error);
  } finally {
    await connection.end();
  }
}

checkKnowledge();
