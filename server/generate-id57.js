const mysql = require('mysql2/promise');

const knowledge57Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '浓度问题的基本公式是什么？', answer: 'A', options_json: ['A. 浓度=溶质质量÷溶液质量×100%', 'B. 浓度=溶剂质量÷溶液质量×100%', 'C. 浓度=溶质质量÷溶剂质量×100%', 'D. 浓度=溶液质量÷溶质质量×100%'], explanation: '浓度的基本公式是浓度=溶质质量÷溶液质量×100%。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '溶液质量等于什么？', answer: 'B', options_json: ['A. 溶质质量-溶剂质量', 'B. 溶质质量+溶剂质量', 'C. 溶质质量×溶剂质量', 'D. 溶质质量÷溶剂质量'], explanation: '溶液质量=溶质质量+溶剂质量。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '100克盐水中含盐10克，浓度是多少？', answer: 'C', options_json: ['A. 5%', 'B. 8%', 'C. 10%', 'D. 12%'], explanation: '浓度=10÷100×100%=10%。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '200克浓度为15%的糖水，含糖多少克？', answer: 'D', options_json: ['A. 20', 'B. 25', 'C. 28', 'D. 30'], explanation: '溶质质量=200×15%=30克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '要配制浓度为20%的盐水500克，需要盐多少克？', answer: 'A', options_json: ['A. 100', 'B. 125', 'C. 150', 'D. 200'], explanation: '盐的质量=500×20%=100克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度为10%的盐水200克，含水多少克？', answer: 'B', options_json: ['A. 160', 'B. 180', 'C. 190', 'D. 200'], explanation: '水的质量=200×(1-10%)=180克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度问题中，溶质指的是什么？', answer: 'C', options_json: ['A. 溶剂', 'B. 溶液', 'C. 被溶解的物质', 'D. 溶解其他物质的物质'], explanation: '溶质是被溶解的物质，如盐水中的盐。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度问题中，溶剂指的是什么？', answer: 'D', options_json: ['A. 溶质', 'B. 溶液', 'C. 被溶解的物质', 'D. 溶解其他物质的物质'], explanation: '溶剂是溶解其他物质的物质，如盐水中的水。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度为25%的糖水400克，含糖多少克？', answer: 'A', options_json: ['A. 100', 'B. 150', 'C. 200', 'D. 250'], explanation: '糖的质量=400×25%=100克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度为8%的盐水300克，含盐多少克？', answer: 'B', options_json: ['A. 20', 'B. 24', 'C. 28', 'D. 30'], explanation: '盐的质量=300×8%=24克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度问题的解决关键是什么？', answer: 'C', options_json: ['A. 直接计算', 'B. 猜测答案', 'C. 找到溶质、溶剂、溶液的关系', 'D. 不需要计算'], explanation: '浓度问题的解决关键是找到溶质、溶剂、溶液的关系。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  { question_body: '浓度为12%的盐水500克，含水多少克？', answer: 'D', options_json: ['A. 420', 'B. 440', 'C. 460', 'D. 440'], explanation: '水的质量=500×(1-12%)=440克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '将100克浓度为20%的盐水稀释成浓度为10%的盐水，需要加多少克水？', answer: 'B', options_json: ['A. 50', 'B. 100', 'C. 150', 'D. 200'], explanation: '盐的质量=100×20%=20克，稀释后溶液质量=20÷10%=200克，需要加水=200-100=100克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将200克浓度为15%的糖水浓缩成浓度为20%的糖水，需要蒸发多少克水？', answer: 'C', options_json: ['A. 25', 'B. 40', 'C. 50', 'D. 60'], explanation: '糖的质量=200×15%=30克，浓缩后溶液质量=30÷20%=150克，需要蒸发水=200-150=50克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将100克浓度为10%的盐水和200克浓度为20%的盐水混合，混合后的浓度是多少？', answer: 'A', options_json: ['A. 16.67%', 'B. 15%', 'C. 17.5%', 'D. 18%'], explanation: '盐的总质量=100×10%+200×20%=10+40=50克，溶液总质量=300克，浓度=50÷300×100%≈16.67%。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  { question_body: '要配制浓度为12%的盐水300克，需要浓度为15%的盐水多少克？', answer: 'B', options_json: ['A. 200', 'B. 240', 'C. 260', 'D. 280'], explanation: '盐的质量=300×12%=36克，需要15%的盐水=36÷15%=240克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  { question_body: '向100克浓度为10%的盐水中加入10克盐，新的浓度是多少？', answer: 'C', options_json: ['A. 15%', 'B. 18%', 'C. 18.18%', 'D. 20%'], explanation: '盐的总质量=100×10%+10=20克，溶液总质量=110克，浓度=20÷110×100%≈18.18%。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  { question_body: '向200克浓度为15%的糖水中加入50克水，新的浓度是多少？', answer: 'D', options_json: ['A. 10%', 'B. 11%', 'C. 12%', 'D. 12%'], explanation: '糖的质量=200×15%=30克，溶液总质量=250克，浓度=30÷250×100%=12%。', knowledge_id: 57, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '将浓度为20%的盐水和浓度为5%的盐水混合，配制成浓度为15%的盐水600克，需要20%的盐水多少克？', answer: 'A', options_json: ['A. 400', 'B. 300', 'C. 200', 'D. 100'], explanation: '设需要20%的盐水x克，5%的盐水(600-x)克，20%x + 5%(600-x)=15%×600，0.2x + 30 - 0.05x=90，0.15x=60，x=400。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  { question_body: '有浓度为10%的盐水200克，要使其浓度变为15%，需要蒸发多少克水？', answer: 'B', options_json: ['A. 30', 'B. 33.33', 'C. 35', 'D. 40'], explanation: '盐的质量=200×10%=20克，蒸发后溶液质量=20÷15%≈133.33克，需要蒸发水=200-133.33≈66.67克。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  { question_body: '向浓度为12%的盐水中加入一些浓度为20%的盐水，混合后浓度为15%，两种盐水的质量比是多少？', answer: 'C', options_json: ['A. 1:1', 'B. 2:1', 'C. 5:3', 'D. 3:5'], explanation: '设12%的盐水质量为x，20%的盐水质量为y，(0.12x+0.2y)/(x+y)=0.15，0.12x+0.2y=0.15x+0.15y，0.05y=0.03x，x:y=5:3。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  { question_body: '要配制浓度为10%的糖水500克，需要浓度为15%的糖水和浓度为5%的糖水各多少克？', answer: 'D', options_json: ['A. 250克和250克', 'B. 300克和200克', 'C. 200克和300克', 'D. 250克和250克'], explanation: '设15%的糖水x克，5%的糖水(500-x)克，15%x + 5%(500-x)=10%×500，0.15x + 25 - 0.05x=50，0.1x=25，x=250。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  { question_body: '有浓度为8%的盐水300克，加入多少克浓度为20%的盐水，才能使混合后的浓度为12%？', answer: 'A', options_json: ['A. 200', 'B. 250', 'C. 300', 'D. 350'], explanation: '设加入x克20%的盐水，(300×8% + 20%x)/(300+x)=12%，24 + 0.2x=36 + 0.12x，0.08x=12，x=150。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将100克浓度为20%的盐水和x克浓度为10%的盐水混合，混合后的浓度为15%，x是多少？', answer: 'B', options_json: ['A. 50', 'B. 100', 'C. 150', 'D. 200'], explanation: '(100×20% + 10%x)/(100+x)=15%，20 + 0.1x=15 + 0.15x，5=0.05x，x=100。', knowledge_id: 57, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：浓度=溶质质量÷溶液质量×100%。', answer: '正确', options_json: ['正确', '错误'], explanation: '浓度的基本公式是浓度=溶质质量÷溶液质量×100%。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：溶液质量=溶质质量+溶剂质量。', answer: '正确', options_json: ['正确', '错误'], explanation: '溶液质量=溶质质量+溶剂质量。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：溶质是被溶解的物质。', answer: '正确', options_json: ['正确', '错误'], explanation: '溶质是被溶解的物质，如盐水中的盐。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：溶剂是溶解其他物质的物质。', answer: '正确', options_json: ['正确', '错误'], explanation: '溶剂是溶解其他物质的物质，如盐水中的水。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：稀释溶液时，溶质质量不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '稀释溶液时，只是加入溶剂，溶质质量不变。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：浓缩溶液时，溶质质量不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '浓缩溶液时，只是蒸发溶剂，溶质质量不变。', knowledge_id: 57, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '浓度的基本公式是浓度=____质量÷溶液质量×100%。', answer: '溶质', options_json: null, explanation: '浓度的基本公式是浓度=溶质质量÷溶液质量×100%。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  { question_body: '溶液质量=溶质质量+____质量。', answer: '溶剂', options_json: null, explanation: '溶液质量=溶质质量+溶剂质量。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  { question_body: '100克盐水中含盐10克，浓度是____%。', answer: '10', options_json: null, explanation: '浓度=10÷100×100%=10%。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  { question_body: '200克浓度为15%的糖水，含糖____克。', answer: '30', options_json: null, explanation: '糖的质量=200×15%=30克。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  { question_body: '要配制浓度为20%的盐水500克，需要盐____克。', answer: '100', options_json: null, explanation: '盐的质量=500×20%=100克。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  { question_body: '浓度为10%的盐水200克，含水____克。', answer: '180', options_json: null, explanation: '水的质量=200×(1-10%)=180克。', knowledge_id: 57, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '将100克浓度为20%的盐水稀释成浓度为10%的盐水，需要加____克水。', answer: '100', options_json: null, explanation: '盐的质量=100×20%=20克，稀释后溶液质量=20÷10%=200克，需要加水=200-100=100克。', knowledge_id: 57, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将200克浓度为15%的糖水浓缩成浓度为20%的糖水，需要蒸发____克水。', answer: '50', options_json: null, explanation: '糖的质量=200×15%=30克，浓缩后溶液质量=30÷20%=150克，需要蒸发水=200-150=50克。', knowledge_id: 57, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将100克浓度为10%的盐水和200克浓度为20%的盐水混合，混合后的浓度是____%。', answer: '16.67', options_json: null, explanation: '盐的总质量=100×10%+200×20%=50克，溶液总质量=300克，浓度=50÷300×100%≈16.67%。', knowledge_id: 57, question_type_id: 1, difficulty_id: 4 },
  { question_body: '向100克浓度为10%的盐水中加入10克盐，新的浓度是____%。', answer: '18.18', options_json: null, explanation: '盐的总质量=100×10%+10=20克，溶液总质量=110克，浓度=20÷110×100%≈18.18%。', knowledge_id: 57, question_type_id: 1, difficulty_id: 4 }
];

async function generateQuestionBase() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    await connection.beginTransaction();

    for (const q of knowledge57Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点57题目生成完成，共插入 ${knowledge57Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
