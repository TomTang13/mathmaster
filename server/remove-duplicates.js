const mysql = require('mysql2/promise');

async function removeDuplicates() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 查找重复项
    const [duplicates] = await connection.query(`
      SELECT 
        week_id, 
        knowledge_text, 
        difficulty, 
        target_day,
        COUNT(*) as count
      FROM 
        key_knowledge
      GROUP BY 
        week_id, 
        knowledge_text, 
        difficulty, 
        target_day
      HAVING 
        COUNT(*) > 1
    `);
    
    console.log('Found', duplicates.length, 'duplicate groups');
    console.table(duplicates);
    
    // 删除重复项，保留每条记录的第一个实例
    await connection.query(`
      DELETE k1 FROM key_knowledge k1
      JOIN (
        SELECT 
          week_id, 
          knowledge_text, 
          difficulty, 
          target_day,
          MIN(id) as min_id
        FROM 
          key_knowledge
        GROUP BY 
          week_id, 
          knowledge_text, 
          difficulty, 
          target_day
        HAVING 
          COUNT(*) > 1
      ) k2 ON 
        k1.week_id = k2.week_id AND
        k1.knowledge_text = k2.knowledge_text AND
        k1.difficulty = k2.difficulty AND
        k1.target_day = k2.target_day AND
        k1.id > k2.min_id
    `);
    
    console.log('Duplicates removed successfully');
    
    // 验证清理结果
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
    
    console.log('\nUpdated Key Knowledge Statistics:');
    console.table(stats);
    
  } catch (error) {
    console.error('Error removing duplicates:', error);
  } finally {
    await connection.end();
  }
}

removeDuplicates();
