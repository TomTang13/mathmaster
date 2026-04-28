const mysql = require('mysql2/promise');

async function verify() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    // 总数量
    const [totalRows] = await connection.execute(
      'SELECT COUNT(*) as total FROM question_base WHERE knowledge_id IN (6,7,8,9,10)'
    );
    console.log('=== 验证结果 ===');
    console.log(`总题目数: ${totalRows[0].total} (期望: 200)`);

    // 按知识点统计
    const [knowledgeStats] = await connection.execute(
      'SELECT knowledge_id, COUNT(*) as count FROM question_base WHERE knowledge_id IN (6,7,8,9,10) GROUP BY knowledge_id ORDER BY knowledge_id'
    );
    console.log('\n按知识点统计:');
    for (const row of knowledgeStats) {
      console.log(`  knowledge_id=${row.knowledge_id}: ${row.count}题`);
    }

    // 按题型统计
    const [typeStats] = await connection.execute(
      'SELECT knowledge_id, question_type_id, COUNT(*) as count FROM question_base WHERE knowledge_id IN (6,7,8,9,10) GROUP BY knowledge_id, question_type_id ORDER BY knowledge_id, question_type_id'
    );
    console.log('\n按题型统计(1=填空,2=单选,3=判断):');
    for (const row of typeStats) {
      console.log(`  knowledge_id=${row.knowledge_id}, type=${row.question_type_id}: ${row.count}题`);
    }

    // 按难度统计
    const [diffStats] = await connection.execute(
      'SELECT knowledge_id, difficulty_id, COUNT(*) as count FROM question_base WHERE knowledge_id IN (6,7,8,9,10) GROUP BY knowledge_id, difficulty_id ORDER BY knowledge_id, difficulty_id'
    );
    console.log('\n按难度统计:');
    for (const row of diffStats) {
      console.log(`  knowledge_id=${row.knowledge_id}, difficulty=${row.difficulty_id}: ${row.count}题`);
    }

    // 验证填空题答案是否为数字
    const [fillBlankCheck] = await connection.execute(
      `SELECT question_id, question_body, answer 
       FROM question_base 
       WHERE knowledge_id IN (6,7,8,9,10) AND question_type_id = 1 
       AND answer REGEXP '[^0-9]'`
    );
    console.log('\n填空题非数字答案数量:', fillBlankCheck.length);
    if (fillBlankCheck.length > 0) {
      console.log('警告: 以下填空题答案不是纯数字:');
      for (const row of fillBlankCheck) {
        console.log(`  ID=${row.question_id}, answer="${row.answer}", body="${row.question_body.substring(0, 30)}..."`);
      }
    }

    // 验证单选题答案是否为A/B/C/D
    const [choiceCheck] = await connection.execute(
      `SELECT question_id, question_body, answer 
       FROM question_base 
       WHERE knowledge_id IN (6,7,8,9,10) AND question_type_id = 2 
       AND answer NOT IN ('A','B','C','D')`
    );
    console.log('\n单选题非法答案数量:', choiceCheck.length);

    // 验证判断题答案
    const [tfCheck] = await connection.execute(
      `SELECT question_id, question_body, answer 
       FROM question_base 
       WHERE knowledge_id IN (6,7,8,9,10) AND question_type_id = 3 
       AND answer NOT IN ('正确','错误')`
    );
    console.log('判断题非法答案数量:', tfCheck.length);

    console.log('\n=== 验证完成 ===');
  } catch (error) {
    console.error('验证失败:', error);
  } finally {
    await connection.end();
  }
}

verify();
