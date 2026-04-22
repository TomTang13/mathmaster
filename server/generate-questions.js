const mysql = require('mysql2/promise');

async function generateQuestions() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster',
  });

  console.log('Connected to MySQL server');

  try {
    // 获取W1D1的核心奥义
    const [keyKnowledge] = await connection.query(
      'SELECT * FROM key_knowledge WHERE week_id = ? AND target_day = ?',
      [1, 1]
    );
    
    console.log('Found', keyKnowledge.length, 'key knowledge items for W1D1');
    console.table(keyKnowledge);
    
    if (keyKnowledge.length < 2) {
      console.log('Not enough key knowledge items found for W1D1');
      return;
    }
    
    // 获取题目类型
    const [questionTypes] = await connection.query('SELECT * FROM question_types');
    console.log('Question types:', questionTypes);
    
    // 获取题目难度
    const [difficulties] = await connection.query('SELECT * FROM question_difficulties');
    console.log('Difficulties:', difficulties);
    
    // 为每条核心奥义生成5道题
    for (const knowledge of keyKnowledge) {
      console.log(`\nGenerating questions for: ${knowledge.knowledge_text}`);
      
      // 生成5道题，包含填充题、选择题和是非题
      const questionTypesToUse = ['填充题', '单选题', '是非题', '应用题', '综合题'];
      
      for (let i = 0; i < 5; i++) {
        const typeName = questionTypesToUse[i];
        const type = questionTypes.find(t => t.type_name === typeName);
        
        if (!type) {
          console.log(`Type ${typeName} not found`);
          continue;
        }
        
        // 难度从1到5
        const difficulty = i + 1;
        const difficultyObj = difficulties.find(d => d.difficulty_level === difficulty);
        
        if (!difficultyObj) {
          console.log(`Difficulty ${difficulty} not found`);
          continue;
        }
        
        // 生成题目
        let questionText, answer, options;
        
        switch (typeName) {
          case '填充题':
            questionText = `"${knowledge.knowledge_text}"的核心概念是__________。`;
            answer = '正确答案';
            options = null;
            break;
          case '单选题':
            questionText = `关于"${knowledge.knowledge_text}"，下列说法正确的是？`;
            answer = 'A';
            options = JSON.stringify(['A. 正确选项', 'B. 错误选项1', 'C. 错误选项2', 'D. 错误选项3']);
            break;
          case '是非题':
            questionText = `"${knowledge.knowledge_text}"的说法是否正确？`;
            answer = '正确';
            options = JSON.stringify(['正确', '错误']);
            break;
          case '应用题':
            questionText = `使用"${knowledge.knowledge_text}"解决以下问题：请计算...`;
            answer = 'B';
            options = JSON.stringify(['A. 错误答案1', 'B. 正确答案', 'C. 错误答案2', 'D. 错误答案3']);
            break;
          case '综合题':
            questionText = `综合应用"${knowledge.knowledge_text}"解决复杂问题：...`;
            answer = 'A';
            options = JSON.stringify(['A. 正确选项', 'B. 错误选项1', 'C. 错误选项2', 'D. 错误选项3']);
            break;
        }
        
        // 生成问题ID
        const questionId = `q_${knowledge.id}_${i+1}`;
        
        // 检查题目是否已存在
        const [existingQuestions] = await connection.query(
          'SELECT * FROM questions WHERE question_id = ?',
          [questionId]
        );
        
        if (existingQuestions.length > 0) {
          console.log(`Question ${questionId} already exists, skipping`);
          continue;
        }
        
        // 插入题目
        await connection.query(
          `INSERT INTO questions (question_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, order_index)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [questionId, type.id, difficultyObj.id, knowledge.id, questionText, answer, options, i+1]
        );
        
        console.log(`Generated question ${i+1}: ${questionText}`);
      }
    }
    
    console.log('\nQuestions generated successfully!');
    
  } catch (error) {
    console.error('Error generating questions:', error);
  } finally {
    await connection.end();
  }
}

generateQuestions();
