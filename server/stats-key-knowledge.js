const mysql = require('mysql2/promise');

async function getKeyKnowledgeStats() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 按周统计 key_knowledge 数据
    const [stats] = await connection.query(`
      SELECT 
        wp.week,
        wp.title,
        COUNT(kk.id) as knowledge_count
      FROM 
        week_plans wp
      LEFT JOIN 
        key_knowledge kk ON wp.id = kk.week_id
      GROUP BY 
        wp.week, wp.title
      ORDER BY 
        wp.week
    `);
    
    console.log('Key Knowledge Statistics by Week:');
    console.table(stats);
    
    // 查看具体数据示例
    console.log('\nSample Key Knowledge Data:');
    const [sampleData] = await connection.query(`
      SELECT 
        wp.week,
        kk.knowledge_text,
        kk.difficulty,
        kk.target_day
      FROM 
        key_knowledge kk
      JOIN 
        week_plans wp ON kk.week_id = wp.id
      ORDER BY 
        wp.week,
        kk.target_day
      LIMIT 10
    `);
    
    console.table(sampleData);
    
  } catch (error) {
    console.error('Error getting key knowledge stats:', error);
  } finally {
    await connection.end();
  }
}

getKeyKnowledgeStats();
