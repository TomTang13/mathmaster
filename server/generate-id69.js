const mysql = require('mysql2/promise');

const knowledge69Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '流水行船问题的基本公式中，顺水速度等于什么？', answer: 'A', options_json: ['A. 船速+水速', 'B. 船速-水速', 'C. 船速×水速', 'D. 船速÷水速'], explanation: '顺水速度=船速+水速。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '流水行船问题的基本公式中，逆水速度等于什么？', answer: 'B', options_json: ['A. 船速+水速', 'B. 船速-水速', 'C. 船速×水速', 'D. 船速÷水速'], explanation: '逆水速度=船速-水速。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是4千米/时，顺水速度是多少？', answer: 'C', options_json: ['A. 16千米/时', 'B. 20千米/时', 'C. 24千米/时', 'D. 80千米/时'], explanation: '顺水速度=20+4=24千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是4千米/时，逆水速度是多少？', answer: 'D', options_json: ['A. 16千米/时', 'B. 20千米/时', 'C. 24千米/时', 'D. 16千米/时'], explanation: '逆水速度=20-4=16千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '流水行船问题的关键是什么？', answer: 'A', options_json: ['A. 找到船速和水速的关系', 'B. 直接计算', 'C. 猜测答案', 'D. 不需要计算'], explanation: '流水行船问题的关键是找到船速和水速的关系。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '船在静水中的速度是15千米/时，水流速度是3千米/时，从甲港到乙港顺水需要3小时，两港距离是多少千米？', answer: 'B', options_json: ['A. 45千米', 'B. 54千米', 'C. 48千米', 'D. 60千米'], explanation: '顺水速度=15+3=18千米/时，距离=18×3=54千米。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '顺水速度和逆水速度的关系是什么？', answer: 'C', options_json: ['A. 相等', 'B. 顺水速度=逆水速度×2', 'C. 顺水速度-逆水速度=2×水速', 'D. 无法确定'], explanation: '顺水速度-逆水速度=2×水速。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '船在静水中的速度是18千米/时，水流速度是2千米/时，逆水航行4小时，能走多少千米？', answer: 'D', options_json: ['A. 72千米', 'B. 80千米', 'C. 64千米', 'D. 64千米'], explanation: '逆水速度=18-2=16千米/时，距离=16×4=64千米。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果顺水速度是26千米/时，逆水速度是18千米/时，水流速度是多少？', answer: 'A', options_json: ['A. 4千米/时', 'B. 8千米/时', 'C. 2千米/时', 'D. 6千米/时'], explanation: '水速=(26-18)÷2=4千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '如果顺水速度是26千米/时，逆水速度是18千米/时，船在静水中的速度是多少？', answer: 'B', options_json: ['A. 20千米/时', 'B. 22千米/时', 'C. 24千米/时', 'D. 26千米/时'], explanation: '船速=(26+18)÷2=22千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一艘船的顺水速度是25千米/时，逆水速度是15千米/时，水流速度是多少？', answer: 'C', options_json: ['A. 3千米/时', 'B. 4千米/时', 'C. 5千米/时', 'D. 6千米/时'], explanation: '水速=(25-15)÷2=5千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一艘船的顺水速度是25千米/时，逆水速度是15千米/时，船在静水中的速度是多少？', answer: 'D', options_json: ['A. 18千米/时', 'B. 19千米/时', 'C. 20千米/时', 'D. 20千米/时'], explanation: '船速=(25+15)÷2=20千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '船在静水中的速度是20千米/时，水流速度是5千米/时，从甲港到乙港的距离是75千米，顺水需要多少小时？', answer: 'A', options_json: ['A. 3小时', 'B. 3.75小时', 'C. 4小时', 'D. 5小时'], explanation: '顺水速度=20+5=25千米/时，时间=75÷25=3小时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  { question_body: '船在静水中的速度是18千米/时，水流速度是3千米/时，从甲港到乙港逆水需要6小时，两港距离是多少千米？', answer: 'B', options_json: ['A. 90千米', 'B. 90千米', 'C. 108千米', 'D. 126千米'], explanation: '逆水速度=18-3=15千米/时，距离=15×6=90千米。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  { question_body: '船在静水中的速度是16千米/时，水流速度是4千米/时，往返甲、乙两港，顺水航行3小时，逆水需要多少小时？', answer: 'C', options_json: ['A. 3小时', 'B. 4小时', 'C. 4小时', 'D. 5小时'], explanation: '顺水速度=20千米/时，距离=60千米，逆水速度=12千米/时，时间=60÷12=5小时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一艘船顺水航行48千米需要4小时，逆水返回需要6小时，水流速度是多少？', answer: 'D', options_json: ['A. 2千米/时', 'B. 3千米/时', 'C. 4千米/时', 'D. 2千米/时'], explanation: '顺水速度=12千米/时，逆水速度=8千米/时，水速=(12-8)÷2=2千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一艘船顺水航行72千米需要6小时，逆水返回需要8小时，船在静水中的速度是多少？', answer: 'A', options_json: ['A. 10.5千米/时', 'B. 11千米/时', 'C. 12千米/时', 'D. 13千米/时'], explanation: '顺水速度=12千米/时，逆水速度=9千米/时，船速=(12+9)÷2=10.5千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  { question_body: '船在静水中的速度是15千米/时，水流速度是5千米/时，船从甲港到乙港再返回甲港，共需要8小时，两港距离是多少？', answer: 'B', options_json: ['A. 45千米', 'B. 50千米', 'C. 55千米', 'D. 60千米'], explanation: '顺水速度=20千米/时，逆水速度=10千米/时，设距离s，s/20+s/10=8，s=53.33千米。', knowledge_id: 69, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一艘船顺水航行90千米需要5小时，逆水返回需要7.5小时，船在静水中的速度和水流速度各是多少？', answer: 'A', options_json: ['A. 船速15千米/时，水速3千米/时', 'B. 船速16千米/时，水速2千米/时', 'C. 船速14千米/时，水速4千米/时', 'D. 船速17千米/时，水速1千米/时'], explanation: '顺水速度=18千米/时，逆水速度=12千米/时，船速=(18+12)÷2=15千米/时，水速=(18-12)÷2=3千米/时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是4千米/时，船从甲港出发，逆水航行到乙港用了5小时，再顺水返回甲港，需要多少小时？', answer: 'B', options_json: ['A. 3小时', 'B. 3.75小时', 'C. 4小时', 'D. 3.33小时'], explanation: '逆水速度=16千米/时，距离=80千米，顺水速度=24千米/时，时间=80÷24≈3.33小时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一艘船顺水航行72千米和逆水航行48千米用的时间相同，船在静水中的速度是15千米/时，水流速度是多少？', answer: 'C', options_json: ['A. 3千米/时', 'B. 4千米/时', 'C. 5千米/时', 'D. 6千米/时'], explanation: '设水速为v，72÷(15+v)=48÷(15-v)，72(15-v)=48(15+v)，1080-72v=720+48v，360=120v，v=3。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  { question_body: '船在静水中的速度是18千米/时，水流速度是3千米/时，船从甲港到乙港再返回甲港，共航行了144千米，返回时用了多少小时？', answer: 'D', options_json: ['A. 4小时', 'B. 5小时', 'C. 6小时', 'D. 6小时'], explanation: '顺水速度=21千米/时，逆水速度=15千米/时，设顺水航行距离为s，则逆水航行距离=144-s，s/21=(144-s)/15，s=84千米，返回时间=(144-84)/15=60/15=4小时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一艘船顺水航行84千米需要4小时，逆水返回时发现比顺水多用了2小时，水流速度是多少？', answer: 'A', options_json: ['A. 3.5千米/时', 'B. 4千米/时', 'C. 4.5千米/时', 'D. 5千米/时'], explanation: '顺水速度=21千米/时，设水速为v，船速=21-v，逆水速度=21-2v，84/(21-2v)=4+2，84=6(21-2v)，84=126-12v，v=3.5。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是5千米/时，船从甲港到乙港再从乙港到丙港，丙港在乙港下游48千米处，甲到丙共航行了96千米，甲到乙用了多少小时？', answer: 'B', options_json: ['A. 3小时', 'B. 4小时', 'C. 5小时', 'D. 6小时'], explanation: '甲到丙距离=甲到乙+48=96，甲到乙=48千米。顺水速度=25千米/时，时间=48÷25=1.92小时。', knowledge_id: 69, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：顺水速度=船速+水速。', answer: '正确', options_json: ['正确', '错误'], explanation: '顺水速度=船速+水速。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：逆水速度=船速-水速。', answer: '正确', options_json: ['正确', '错误'], explanation: '逆水速度=船速-水速。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：顺水速度-逆水速度=2×水速。', answer: '正确', options_json: ['正确', '错误'], explanation: '顺水速度-逆水速度=2×水速。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：船在静水中的速度=(顺水速度+逆水速度)÷2。', answer: '正确', options_json: ['正确', '错误'], explanation: '船在静水中的速度=(顺水速度+逆水速度)÷2。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：水流速度=(顺水速度-逆水速度)÷2。', answer: '正确', options_json: ['正确', '错误'], explanation: '水流速度=(顺水速度-逆水速度)÷2。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：顺水速度一定大于逆水速度。', answer: '正确', options_json: ['正确', '错误'], explanation: '顺水速度=船速+水速，逆水速度=船速-水速，所以顺水速度一定大于逆水速度。', knowledge_id: 69, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '顺水速度=船速+____。', answer: '水速', options_json: null, explanation: '顺水速度=船速+水速。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  { question_body: '逆水速度=船速-____。', answer: '水速', options_json: null, explanation: '逆水速度=船速-水速。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是4千米/时，顺水速度是____千米/时。', answer: '24', options_json: null, explanation: '顺水速度=20+4=24千米/时。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  { question_body: '船在静水中的速度是20千米/时，水流速度是4千米/时，逆水速度是____千米/时。', answer: '16', options_json: null, explanation: '逆水速度=20-4=16千米/时。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果顺水速度是26千米/时，逆水速度是18千米/时，水流速度是____千米/时。', answer: '4', options_json: null, explanation: '水速=(26-18)÷2=4千米/时。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  { question_body: '如果顺水速度是26千米/时，逆水速度是18千米/时，船在静水中的速度是____千米/时。', answer: '22', options_json: null, explanation: '船速=(26+18)÷2=22千米/时。', knowledge_id: 69, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '船在静水中的速度是20千米/时，水流速度是5千米/时，从甲港到乙港逆水需要6小时，两港距离是____千米。', answer: '90', options_json: null, explanation: '逆水速度=20-5=15千米/时，距离=15×6=90千米。', knowledge_id: 69, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一艘船顺水航行48千米需要4小时，逆水返回需要6小时，水流速度是____千米/时。', answer: '2', options_json: null, explanation: '顺水速度=12千米/时，逆水速度=8千米/时，水速=(12-8)÷2=2千米/时。', knowledge_id: 69, question_type_id: 1, difficulty_id: 4 },
  { question_body: '船在静水中的速度是18千米/时，水流速度是3千米/时，船从甲港到乙港再返回甲港，共需要8小时，两港距离是____千米。', answer: '53.33', options_json: null, explanation: '顺水速度=21千米/时，逆水速度=15千米/时，设距离s，s/21+s/10=8，s=53.33千米。', knowledge_id: 69, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一艘船顺水航行84千米需要4小时，逆水返回时发现比顺水多用了2小时，水流速度是____千米/时。', answer: '3.5', options_json: null, explanation: '顺水速度=21千米/时，设水速为v，84/(21-2v)=6，84=126-12v，v=3.5。', knowledge_id: 69, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge69Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点69题目生成完成，共插入 ${knowledge69Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
