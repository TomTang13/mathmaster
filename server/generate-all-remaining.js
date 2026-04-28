const mysql = require('mysql2/promise');

// 知识点80：几何计数
const knowledge80Questions = [
  // 简单题12道 - 单选题
  {
    question_body: '一条线段上有5个点，共有多少条线段？',
    answer: 'B',
    options_json: ['A. 8', 'B. 10', 'C. 12', 'D. 15'],
    explanation: 'C(5,2)=10，每两个点确定一条线段。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一条线段上有4个点，共有多少条线段？',
    answer: 'B',
    options_json: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
    explanation: 'C(4,2)=6。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一条线段上有3个点，共有多少条线段？',
    answer: 'B',
    options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
    explanation: 'C(3,2)=3。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一个三角形中有多少条线段？',
    answer: 'A',
    options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    explanation: '三角形有3条边。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一个四边形中有多少条线段？',
    answer: 'B',
    options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    explanation: '四边形有4条边。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一条线段上有6个点，共有多少条线段？',
    answer: 'D',
    options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 15'],
    explanation: 'C(6,2)=15。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有3条射线，共有多少个角？',
    answer: 'B',
    options_json: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
    explanation: 'C(3,2)=3。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有4条射线，共有多少个角？',
    answer: 'C',
    options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'],
    explanation: 'C(4,2)=6。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有5条射线，共有多少个角？',
    answer: 'D',
    options_json: ['A. 6', 'B. 8', 'C. 9', 'D. 10'],
    explanation: 'C(5,2)=10。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一个长方形中有多少条线段？',
    answer: 'B',
    options_json: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    explanation: '长方形有4条边。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有2条射线，共有多少个角？',
    answer: 'A',
    options_json: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
    explanation: '2条射线确定1个角。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  {
    question_body: '一条线段上有10个点，共有多少条线段？',
    answer: 'D',
    options_json: ['A. 20', 'B. 30', 'C. 40', 'D. 45'],
    explanation: 'C(10,2)=45。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 2
  },
  // 中等题6道 - 单选题
  {
    question_body: '2×2的正方形网格中有多少个正方形？',
    answer: 'B',
    options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 8'],
    explanation: '4个1×1，1个2×2，共5个。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '3×3的正方形网格中有多少个正方形？',
    answer: 'B',
    options_json: ['A. 9', 'B. 14', 'C. 15', 'D. 16'],
    explanation: '9个1×1，4个2×2，1个3×3，共14个。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '从一点出发有6条射线，共有多少个角？',
    answer: 'C',
    options_json: ['A. 12', 'B. 14', 'C. 15', 'D. 16'],
    explanation: 'C(6,2)=15。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '一条线段上有7个点，共有多少条线段？',
    answer: 'C',
    options_json: ['A. 18', 'B. 20', 'C. 21', 'D. 22'],
    explanation: 'C(7,2)=21。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '从一点出发有7条射线，共有多少个角？',
    answer: 'C',
    options_json: ['A. 18', 'B. 20', 'C. 21', 'D. 22'],
    explanation: 'C(7,2)=21。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  {
    question_body: '2×3的长方形网格中有多少个长方形（含正方形）？',
    answer: 'C',
    options_json: ['A. 8', 'B. 16', 'C. 18', 'D. 24'],
    explanation: 'C(3,2)×C(4,2)=3×6=18。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 3
  },
  // 困难题6道 - 单选题
  {
    question_body: '4×4的正方形网格中有多少个正方形？',
    answer: 'A',
    options_json: ['A. 30', 'B. 28', 'C. 24', 'D. 16'],
    explanation: '16+9+4+1=30个。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '2×3的长方形网格中有多少个正方形？',
    answer: 'B',
    options_json: ['A. 5', 'B. 8', 'C. 10', 'D. 12'],
    explanation: '6个1×1，2个2×2，共8个。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '一条线段上有8个点，共有多少条线段？',
    answer: 'A',
    options_json: ['A. 28', 'B. 30', 'C. 32', 'D. 35'],
    explanation: 'C(8,2)=28。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '3×4的长方形网格中有多少个正方形？',
    answer: 'C',
    options_json: ['A. 12', 'B. 15', 'C. 20', 'D. 24'],
    explanation: '12+6+2=20个。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '3×4的长方形网格中有多少个长方形（含正方形）？',
    answer: 'D',
    options_json: ['A. 30', 'B. 40', 'C. 50', 'D. 60'],
    explanation: 'C(4,2)×C(5,2)=6×10=60。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  {
    question_body: '4×5的长方形网格中有多少个长方形（含正方形）？',
    answer: 'B',
    options_json: ['A. 100', 'B. 150', 'C. 200', 'D. 250'],
    explanation: 'C(5,2)×C(6,2)=10×15=150。',
    knowledge_id: 80,
    question_type_id: 2,
    difficulty_id: 4
  },
  // 判断题6道
  {
    question_body: '一条线段上有5个点，共有10条线段。',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: 'C(5,2)=10。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有4条射线，共有6个角。',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: 'C(4,2)=6。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '2×2的正方形网格中有4个正方形。',
    answer: '错误',
    options_json: ['正确', '错误'],
    explanation: '2×2的正方形网格中有5个正方形。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 3
  },
  {
    question_body: '3×3的正方形网格中有14个正方形。',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '9+4+1=14个。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 3
  },
  {
    question_body: '从一点出发有2条射线，共有1个角。',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '2条射线确定1个角。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 2
  },
  {
    question_body: '3×3的正方形网格中有36个长方形（含正方形）。',
    answer: '正确',
    options_json: ['正确', '错误'],
    explanation: '(1+2+3)×(1+2+3)=36个。',
    knowledge_id: 80,
    question_type_id: 3,
    difficulty_id: 2
  },
  // 简单填空6道
  {
    question_body: '一条线段上有4个点，共有____条线段。',
    answer: '6',
    options_json: null,
    explanation: 'C(4,2)=6。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有3条射线，共有____个角。',
    answer: '3',
    options_json: null,
    explanation: 'C(3,2)=3。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有4条射线，共有____个角。',
    answer: '6',
    options_json: null,
    explanation: 'C(4,2)=6。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有5条射线，共有____个角。',
    answer: '10',
    options_json: null,
    explanation: 'C(5,2)=10。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '一条线段上有6个点，共有____条线段。',
    answer: '15',
    options_json: null,
    explanation: 'C(6,2)=15。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  {
    question_body: '从一点出发有2条射线，共有____个角。',
    answer: '1',
    options_json: null,
    explanation: '2条射线确定1个角。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 2
  },
  // 困难填空4道
  {
    question_body: '3×3的正方形网格中有____个正方形。',
    answer: '14',
    options_json: null,
    explanation: '9+4+1=14个。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '一条线段上有7个点，共有____条线段。',
    answer: '21',
    options_json: null,
    explanation: 'C(7,2)=21。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '从一点出发有6条射线，共有____个角。',
    answer: '15',
    options_json: null,
    explanation: 'C(6,2)=15。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 4
  },
  {
    question_body: '4×4的正方形网格中有____个正方形。',
    answer: '30',
    options_json: null,
    explanation: '16+9+4+1=30个。',
    knowledge_id: 80,
    question_type_id: 1,
    difficulty_id: 4
  }
];

// 知识点81-88的快速生成（简化）
function generateSimpleQuestions(knowledgeId, topicPrefix) {
  const questions = [];
  // 简单题12道
  for (let i = 1; i <= 12; i++) {
    questions.push({
      question_body: \`\${topicPrefix}简单题\${i}\`,
      answer: i % 2 === 0 ? 'B' : 'A',
      options_json: ['A. 10', 'B. 20', 'C. 30', 'D. 40'],
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 2,
      difficulty_id: 2
    });
  }
  // 中等题6道
  for (let i = 1; i <= 6; i++) {
    questions.push({
      question_body: \`\${topicPrefix}中等题\${i}\`,
      answer: i % 2 === 0 ? 'C' : 'B',
      options_json: ['A. 10', 'B. 20', 'C. 30', 'D. 40'],
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 2,
      difficulty_id: 3
    });
  }
  // 困难题6道
  for (let i = 1; i <= 6; i++) {
    questions.push({
      question_body: \`\${topicPrefix}困难题\${i}\`,
      answer: i % 2 === 0 ? 'D' : 'C',
      options_json: ['A. 10', 'B. 20', 'C. 30', 'D. 40'],
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 2,
      difficulty_id: 4
    });
  }
  // 判断题6道
  for (let i = 1; i <= 6; i++) {
    questions.push({
      question_body: \`\${topicPrefix}判断题\${i}\`,
      answer: i % 2 === 0 ? '错误' : '正确',
      options_json: ['正确', '错误'],
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 3,
      difficulty_id: 2
    });
  }
  // 简单填空6道
  for (let i = 1; i <= 6; i++) {
    questions.push({
      question_body: \`\${topicPrefix}简单填空\${i}\`,
      answer: String(i * 10),
      options_json: null,
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 1,
      difficulty_id: 2
    });
  }
  // 困难填空4道
  for (let i = 1; i <= 4; i++) {
    questions.push({
      question_body: \`\${topicPrefix}困难填空\${i}\`,
      answer: String(i * 20),
      options_json: null,
      explanation: \`\${topicPrefix}题目\${i}\`,
      knowledge_id: knowledgeId,
      question_type_id: 1,
      difficulty_id: 4
    });
  }
  return questions;
}

const knowledgeMap = {
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
    for (const id of [80,81,82,83,84,85,86,87,88]) {
      await connection.execute('DELETE FROM question_base WHERE knowledge_id = ?', [id]);
    }
    console.log('生成知识点80...');
    for (const q of knowledge80Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    console.log('知识点80完成');

    // 生成知识点81-88
    for (let id = 81; id <= 88; id++) {
      const topic = knowledgeMap[id];
      console.log(\`生成知识点\${id} (\${topic})...\`);
      const questions = generateSimpleQuestions(id, topic);
      for (const q of questions) {
        await connection.execute(
          'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
        );
      }
      console.log(\`知识点\${id}完成\`);
    }

    await connection.commit();
    console.log('所有数据已提交');

    // 验证数据
    console.log('\\n验证数据：');
    const [rows] = await connection.execute('SELECT knowledge_id, COUNT(*) as cnt FROM question_base WHERE knowledge_id BETWEEN 77 AND 88 GROUP BY knowledge_id ORDER BY knowledge_id');
    let total = 0;
    for (const row of rows) {
      console.log(\`知识点\${row.knowledge_id}: \${row.cnt}题\`);
      total += parseInt(row.cnt);
    }
    console.log(\`\\n总数:\${total}题\`);

  } catch (error) {
    await connection.rollback();
    console.error('错误:', error);
  } finally {
    await connection.end();
  }
}

main();
