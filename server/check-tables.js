const mysql = require('mysql2/promise');

async function checkTables() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 检查数据库中的表
    const [tables] = await connection.query(
      "SHOW TABLES LIKE '%week%'"
    );
    
    console.log('Tables containing "week":');
    tables.forEach((table, index) => {
      console.log(`${index + 1}. ${Object.values(table)[0]}`);
    });
    
    // 检查weeks表结构
    if (tables.some(table => Object.values(table)[0] === 'weeks')) {
      console.log('\nweeks table structure:');
      const [weeksColumns] = await connection.query('DESCRIBE weeks');
      console.table(weeksColumns);
    }
    
    // 检查week_plans表结构
    if (tables.some(table => Object.values(table)[0] === 'week_plans')) {
      console.log('\nweek_plans table structure:');
      const [weekPlansColumns] = await connection.query('DESCRIBE week_plans');
      console.table(weekPlansColumns);
    }
    
  } catch (error) {
    console.error('Error checking tables:', error);
  } finally {
    await connection.end();
  }
}

checkTables();
