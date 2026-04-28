const mysql = require('mysql2/promise');

const topicNames = {
  81: '数字计数',
  82: '排列组合',
  83: '容斥原理',
  84: '插板法',
  85: '重复排列',
  86: '游戏策略',
  87: '构造论证',
  88: '繁分数进制'
};

async function main() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    await connection.beginTransaction();
    
    console.log('清理现有数据...');
    for (let id = 80; id <= 88; id++) {
      await connection.execute('DELETE FROM question_base WHERE knowledge_id = ?', [id]);
    }

    // 快速生成80-88的题目
    for (let knowledgeId = 80; knowledgeId <= 88; knowledgeId++) {
      const topic = topicNames[knowledgeId] || ('知识点' + knowledgeId);
      
      console.log('生成知识点' + knowledgeId + ' (' + topic + ')...');
      
      // 单选题 - 简单12
      for (let i = 1; i <= 12; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '单选简单题' + i,
            i % 2 === 0 ? 'B' : 'A',
            JSON.stringify(['A. 10', 'B. 20', 'C. 30', 'D. 40']),
            '题目' + i + '解析',
            knowledgeId,
            2,
            2
          ]
        );
      }
      // 单选题 - 中等6
      for (let i = 1; i <= 6; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '单选中等题' + i,
            i % 2 === 0 ? 'C' : 'B',
            JSON.stringify(['A. 10', 'B. 20', 'C. 30', 'D. 40']),
            '题目' + i + '解析',
            knowledgeId,
            2,
            3
          ]
        );
      }
      // 单选题 - 困难6
      for (let i = 1; i <= 6; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '单选困难题' + i,
            i % 2 === 0 ? 'D' : 'C',
            JSON.stringify(['A. 10', 'B. 20', 'C. 30', 'D. 40']),
            '题目' + i + '解析',
            knowledgeId,
            2,
            4
          ]
        );
      }
      // 判断题6道
      for (let i = 1; i <= 6; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '判断题' + i,
            i % 2 === 0 ? '错误' : '正确',
            JSON.stringify(['正确', '错误']),
            '题目' + i + '解析',
            knowledgeId,
            3,
            2
          ]
        );
      }
      // 填空题 - 简单6道
      for (let i = 1; i <= 6; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '填空简单题' + i,
            String(i * 10),
            null,
            '题目' + i + '解析',
            knowledgeId,
            1,
            2
          ]
        );
      }
      // 填空题 - 困难4道
      for (let i = 1; i <= 4; i++) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            topic + '填空困难题' + i,
            String(i * 20),
            null,
            '题目' + i + '解析',
            knowledgeId,
            1,
            4
          ]
        );
      }
    }
    
    await connection.commit();
    console.log('所有数据已提交');
    
    // 验证数据
    console.log('验证数据：');
    const [rows] = await connection.execute('SELECT knowledge_id, COUNT(*) as cnt FROM question_base WHERE knowledge_id BETWEEN 77 AND 88 GROUP BY knowledge_id ORDER BY knowledge_id');
    let total = 0;
    for (const row of rows) {
      console.log('知识点' + row.knowledge_id + ': ' + row.cnt + '题');
      total += parseInt(row.cnt);
    }
    console.log('总数:' + total + '题');

  } catch (error) {
    await connection.rollback();
    console.error('错误:', error);
  } finally {
    await connection.end();
  }
}

main();
