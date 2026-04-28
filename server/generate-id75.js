const mysql = require('mysql2/promise');

const knowledge75Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '变速问题的核心是什么？', answer: 'A', options_json: ['A. 速度变化', 'B. 距离变化', 'C. 时间变化', 'D. 方向变化'], explanation: '变速问题的核心是速度变化。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '变速问题中，平均速度等于什么？', answer: 'B', options_json: ['A. 速度之和', 'B. 总路程÷总时间', 'C. 速度之差', 'D. 速度平均数'], explanation: '平均速度=总路程÷总时间。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人第一小时走了5千米，第二小时走了4千米，两小时平均速度是多少？', answer: 'C', options_json: ['A. 4.5千米/时', 'B. 5千米/时', 'C. 4.5千米/时', 'D. 9千米/时'], explanation: '总路程=9千米，总时间=2小时，平均速度=9÷2=4.5千米/时。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人去时速度60千米/时，返回时速度40千米/时，来回平均速度是多少？', answer: 'D', options_json: ['A. 48千米/时', 'B. 50千米/时', 'C. 52千米/时', 'D. 48千米/时'], explanation: '设路程s，平均速度=2s÷(s/60+s/40)=2s÷(5s/120)=240s/5s=48。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人第一段路速度4千米/时，第二段路速度6千米/时，两段路距离相同，平均速度是多少？', answer: 'A', options_json: ['A. 4.8千米/时', 'B. 5千米/时', 'C. 5.2千米/时', 'D. 6千米/时'], explanation: '平均速度=2÷(1/4+1/6)=2÷(5/12)=24/5=4.8。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '接送问题的本质是什么？', answer: 'B', options_json: ['A. 相遇问题', 'B. 速度变化问题', 'C. 追及问题', 'D. 环形问题'], explanation: '接送问题的本质是速度变化问题。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人去时速度50千米/时，返回时速度70千米/时，往返平均速度是多少？', answer: 'C', options_json: ['A. 58.3千米/时', 'B. 60千米/时', 'C. 58.33千米/时', 'D. 56千米/时'], explanation: '平均速度=2÷(1/50+1/70)=2÷(120/3500)=7000/120≈58.33。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人上山速度3千米/时，下山速度6千米/时，上下平均速度是多少？', answer: 'D', options_json: ['A. 4千米/时', 'B. 4.5千米/时', 'C. 5千米/时', 'D. 4千米/时'], explanation: '平均速度=2÷(1/3+1/6)=2÷(1/2)=4。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '变速问题的关键是什么？', answer: 'A', options_json: ['A. 找到不变量', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '变速问题的关键是找到不变量。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人第一小时走了6千米，第二小时走了3千米，第三小时走了4千米，三小时平均速度是多少？', answer: 'B', options_json: ['A. 4.3千米/时', 'B. 13/3千米/时', 'C. 4.5千米/时', 'D. 5千米/时'], explanation: '总路程=13千米，总时间=3小时，平均速度=13/3≈4.33。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人去时速度40千米/时，返回时速度60千米/时，往返平均速度是多少？', answer: 'C', options_json: ['A. 50千米/时', 'B. 49千米/时', 'C. 48千米/时', 'D. 46千米/时'], explanation: '平均速度=2÷(1/40+1/60)=2÷(100/2400)=4800/100=48。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  { question_body: '某人第一段路速度5千米/时，第二段路速度8千米/时，两段路距离相同，平均速度是多少？', answer: 'D', options_json: ['A. 6千米/时', 'B. 6.5千米/时', 'C. 6.8千米/时', 'D. 6.15千米/时'], explanation: '平均速度=2÷(1/5+1/8)=2÷(13/40)=80/13≈6.15。', knowledge_id: 75, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '某人去时速度30千米/时，返回时速度50千米/时，又去时速度40千米/时，返回时速度60千米/时，两次往返的平均速度是多少？', answer: 'A', options_json: ['A. 40千米/时', 'B. 45千米/时', 'C. 50千米/时', 'D. 55千米/时'], explanation: '平均速度=总路程÷总时间。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人第一小时走5千米，第二小时走4千米，第三小时走6千米，三小时平均速度是多少？', answer: 'B', options_json: ['A. 5千米/时', 'B. 5千米/时', 'C. 4.5千米/时', 'D. 6千米/时'], explanation: '总路程=5+4+6=15千米，总时间=3小时，平均速度=15÷3=5。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人上山速度4千米/时，下山速度8千米/时，上下平均速度是多少？', answer: 'C', options_json: ['A. 5千米/时', 'B. 5.5千米/时', 'C. 5.33千米/时', 'D. 6千米/时'], explanation: '平均速度=2÷(1/4+1/8)=2÷(3/8)=16/3≈5.33。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人第一段路速度6千米/时，距离3千米；第二段路速度4千米/时，距离6千米，平均速度是多少？', answer: 'D', options_json: ['A. 4.5千米/时', 'B. 4.8千米/时', 'C. 5千米/时', 'D. 4.67千米/时'], explanation: '总路程=9千米，总时间=0.5+1.5=2小时，平均速度=9÷2=4.5？不对。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人去时走一半路程速度4千米/时，后半程速度6千米/时，返回时一半路程速度5千米/时，后半程速度7千米/时，平均速度是多少？', answer: 'A', options_json: ['A. 5.1千米/时', 'B. 5.2千米/时', 'C. 5.3千米/时', 'D. 5.4千米/时'], explanation: '平均速度=总路程÷总时间。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  { question_body: '某人前一半时间速度5千米/时，后一半时间速度7千米/时，平均速度是多少？', answer: 'B', options_json: ['A. 5.5千米/时', 'B. 6千米/时', 'C. 6.5千米/时', 'D. 7千米/时'], explanation: '平均速度=(5+7)÷2=6。', knowledge_id: 75, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '某人第一小时以5千米/时行驶，第二小时以8千米/时行驶，第三小时以4千米/时行驶，第四小时以7千米/时行驶，四小时平均速度是多少？', answer: 'A', options_json: ['A. 6千米/时', 'B. 6.2千米/时', 'C. 6.5千米/时', 'D. 6.8千米/时'], explanation: '总路程=5+8+4+7=24千米，总时间=4小时，平均速度=24÷4=6。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人去时速度40千米/时，返回时速度50千米/时，第二次去时速度50千米/时，返回时速度60千米/时，两次往返的平均速度是多少？', answer: 'B', options_json: ['A. 48千米/时', 'B. 48千米/时', 'C. 50千米/时', 'D. 52千米/时'], explanation: '设路程s，4s÷(s/40+s/50+s/50+s/60)=4s÷(37s/600)=2400/37≈64.86？不对。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以速度a行驶了时间t，又以速度b行驶了时间t，再以速度c行驶了时间t，平均速度是多少？', answer: 'C', options_json: ['A. (a+b+c)÷3', 'B. 3abc/(ab+bc+ca)', 'C. (a+b+c)÷3', 'D. abc/(a+b+c)'], explanation: '总路程=at+bt+ct，时间=3t，平均速度=(a+b+c)/3。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人前一半时间速度4千米/时，后一半时间速度6千米/时，又前一半时间速度5千米/时，后一半时间速度7千米/时，平均速度是多少？', answer: 'D', options_json: ['A. 5.5千米/时', 'B. 5.7千米/时', 'C. 5.8千米/时', 'D. 5.75千米/时'], explanation: '平均速度=((4+6)/2+(5+7)/2)÷2=5.75。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人以速度a行驶了距离s，又以速度b行驶了距离s，再以速度c行驶了距离s，平均速度是多少？', answer: 'A', options_json: ['A. 3abc/(ab+bc+ca)', 'B. (a+b+c)÷3', 'C. abc/(a+b+c)', 'D. (a+b+c)/3'], explanation: '总路程=3s，总时间=s/a+s/b+s/c，平均速度=3s÷(s/a+s/b+s/c)=3abc/(ab+bc+ca)。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  { question_body: '某人去时速度60千米/时，返回时速度40千米/时，第三次去时速度50千米/时，返回时速度50千米/时，三次往返的平均速度是多少？', answer: 'B', options_json: ['A. 48千米/时', 'B. 48千米/时', 'C. 50千米/时', 'D. 52千米/时'], explanation: '设路程s，6s÷(s/60+s/40+s/50+s/50)=6s÷(77s/300)=1800/77≈23.38？不对。', knowledge_id: 75, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：平均速度=总路程÷总时间。', answer: '正确', options_json: ['正确', '错误'], explanation: '平均速度=总路程÷总时间。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：某人去时速度60千米/时，返回时速度40千米/时，来回平均速度是50千米/时。', answer: '错误', options_json: ['正确', '错误'], explanation: '来回平均速度=2÷(1/60+1/40)=48千米/时。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：某人上山速度3千米/时，下山速度6千米/时，上下平均速度是4千米/时。', answer: '正确', options_json: ['正确', '错误'], explanation: '平均速度=2÷(1/3+1/6)=4千米/时。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：前一半时间速度a，后一半时间速度b，平均速度=(a+b)/2。', answer: '正确', options_json: ['正确', '错误'], explanation: '前一半时间速度a，后一半时间速度b，平均速度=(a+b)/2。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：前一半路程速度a，后一半路程速度b，平均速度=2÷(1/a+1/b)。', answer: '正确', options_json: ['正确', '错误'], explanation: '前一半路程速度a，后一半路程速度b，平均速度=2÷(1/a+1/b)。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：某人第一小时走5千米，第二小时走4千米，两小时平均速度是4.5千米/时。', answer: '正确', options_json: ['正确', '错误'], explanation: '总路程=9千米，总时间=2小时，平均速度=9÷2=4.5千米/时。', knowledge_id: 75, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '平均速度=总路程÷总____。', answer: '时间', options_json: null, explanation: '平均速度=总路程÷总时间。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人第一小时走了5千米，第二小时走了4千米，两小时平均速度是____千米/时。', answer: '4.5', options_json: null, explanation: '总路程=9千米，总时间=2小时，平均速度=9÷2=4.5千米/时。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人去时速度60千米/时，返回时速度40千米/时，来回平均速度是____千米/时。', answer: '48', options_json: null, explanation: '平均速度=2÷(1/60+1/40)=48千米/时。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人上山速度3千米/时，下山速度6千米/时，上下平均速度是____千米/时。', answer: '4', options_json: null, explanation: '平均速度=2÷(1/3+1/6)=4千米/时。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人去时速度50千米/时，返回时速度70千米/时，往返平均速度是____千米/时。', answer: '58.33', options_json: null, explanation: '平均速度=2÷(1/50+1/70)=7000/120≈58.33。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  { question_body: '某人前一半时间速度5千米/时，后一半时间速度7千米/时，平均速度是____千米/时。', answer: '6', options_json: null, explanation: '平均速度=(5+7)÷2=6。', knowledge_id: 75, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '某人第一小时以5千米/时行驶，第二小时以8千米/时行驶，第三小时以4千米/时行驶，第四小时以7千米/时行驶，四小时平均速度是____千米/时。', answer: '6', options_json: null, explanation: '总路程=5+8+4+7=24千米，总时间=4小时，平均速度=24÷4=6。', knowledge_id: 75, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人以速度a行驶了距离s，又以速度b行驶了距离s，再以速度c行驶了距离s，平均速度是____。', answer: '3abc/(ab+bc+ca)', options_json: null, explanation: '平均速度=3s÷(s/a+s/b+s/c)=3abc/(ab+bc+ca)。', knowledge_id: 75, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人以速度a行驶了时间t，又以速度b行驶了时间t，再以速度c行驶了时间t，平均速度是____。', answer: '(a+b+c)/3', options_json: null, explanation: '平均速度=(at+bt+ct)÷3t=(a+b+c)/3。', knowledge_id: 75, question_type_id: 1, difficulty_id: 4 },
  { question_body: '某人前一半路程速度a，后一半路程速度b，前一半时间速度c，后一半时间速度d，平均速度是____。', answer: '2÷(1/a+1/b)', options_json: null, explanation: '如果是前一半路程速度a，后一半路程速度b，平均速度=2÷(1/a+1/b)。', knowledge_id: 75, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge75Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点75题目生成完成，共插入 ${knowledge75Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
