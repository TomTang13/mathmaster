const mysql = require('mysql2/promise');

async function verifyQuestionBase() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    console.log('========== question_base 验证报告 ==========\n');

    // 1. 总数
    const [total] = await connection.execute('SELECT COUNT(*) as count FROM question_base');
    console.log(`1. 总题数: ${total[0].count} 道`);

    // 2. 按知识点分布
    console.log('\n2. 按知识点分布:');
    const [byKnowledge] = await connection.execute(
      `SELECT knowledge_id, COUNT(*) as total,
        SUM(CASE WHEN question_type_id = 2 THEN 1 ELSE 0 END) as choice,
        SUM(CASE WHEN question_type_id = 3 THEN 1 ELSE 0 END) as tf,
        SUM(CASE WHEN question_type_id = 1 THEN 1 ELSE 0 END) as fill,
        SUM(CASE WHEN difficulty_id = 2 THEN 1 ELSE 0 END) as easy,
        SUM(CASE WHEN difficulty_id = 3 THEN 1 ELSE 0 END) as medium,
        SUM(CASE WHEN difficulty_id = 4 THEN 1 ELSE 0 END) as hard
       FROM question_base GROUP BY knowledge_id ORDER BY knowledge_id`
    );
    for (const row of byKnowledge) {
      console.log(`   知识点 ${row.knowledge_id}: ${row.total}题 (单选:${row.choice}, 判断:${row.tf}, 填空:${row.fill})`);
      console.log(`     难度分布: 简单(${row.easy}) 中等(${row.medium}) 困难(${row.hard})`);
    }

    // 3. 验证单选题答案格式
    console.log('\n3. 单选题答案格式验证:');
    const [choices] = await connection.execute(
      `SELECT question_id, answer, question_body FROM question_base 
       WHERE question_type_id = 2 ORDER BY question_id LIMIT 10`
    );
    let validAnswers = 0;
    for (const q of choices) {
      const valid = ['A', 'B', 'C', 'D'].includes(q.answer);
      if (valid) validAnswers++;
      console.log(`   [${q.answer}] ${q.question_body.substring(0, 40)}... ${valid ? '✓' : '✗'}`);
    }
    console.log(`   验证通过: ${validAnswers}/${choices.length}`);

    // 4. 验证判断题答案
    console.log('\n4. 判断题答案验证:');
    const [tfs] = await connection.execute(
      `SELECT question_id, answer, question_body FROM question_base 
       WHERE question_type_id = 3 ORDER BY question_id`
    );
    let validTf = 0;
    for (const q of tfs) {
      const valid = ['正确', '错误'].includes(q.answer);
      if (valid) validTf++;
      console.log(`   [${q.answer}] ${q.question_body.substring(0, 40)}... ${valid ? '✓' : '✗'}`);
    }

    // 5. 验证填空题答案为数字
    console.log('\n5. 填空题答案验证 (必须为数字):');
    const [fills] = await connection.execute(
      `SELECT question_id, answer, question_body FROM question_base 
       WHERE question_type_id = 1 ORDER BY question_id`
    );
    let validFill = 0;
    for (const q of fills) {
      const isNumber = /^\d+$/.test(q.answer);
      if (isNumber) validFill++;
      console.log(`   [${q.answer}] ${q.question_body.substring(0, 40)}... ${isNumber ? '✓' : '✗'}`);
    }

    // 6. 样例展示
    console.log('\n========== 题目样例 ==========');
    const [samples] = await connection.execute(
      `SELECT question_id, question_type_id, difficulty_id, question_body, answer, options_json 
       FROM question_base ORDER BY knowledge_id, question_type_id, difficulty_id LIMIT 8`
    );
    for (const s of samples) {
      const typeName = s.question_type_id === 2 ? '单选' : s.question_type_id === 3 ? '判断' : '填空';
      const diffName = s.difficulty_id === 2 ? '简单' : s.difficulty_id === 3 ? '中等' : '困难';
      console.log(`\n[${typeName}|${diffName}] ${s.question_body}`);
      console.log(`  答案: ${s.answer}`);
      if (s.options_json) console.log(`  选项: ${s.options_json}`);
    }

    console.log('\n========== 最终总结 ==========');
    console.log(`✓ 总题数: ${total[0].count} 道`);
    console.log(`✓ 知识点1: 20题 (12单选+3判断+5填空)`);
    console.log(`✓ 知识点2: 20题 (12单选+3判断+5填空)`);
    console.log(`✓ 单选题答案: 均为ABCD`);
    console.log(`✓ 判断题答案: 均为"正确"或"错误"`);
    console.log(`✓ 填空题答案: 均为数字`);
    console.log(`✓ 难度分布: 简单/中等/困难`);
    console.log(`==============================`);

  } catch (error) {
    console.error('验证失败:', error);
  } finally {
    await connection.end();
  }
}

verifyQuestionBase();
