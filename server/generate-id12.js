const mysql = require('mysql2/promise');

const knowledge12Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '3台拖拉机4小时耕地48亩。1台拖拉机1小时耕地多少亩？', answer: 'B', options_json: ['A. 3亩', 'B. 4亩', 'C. 5亩', 'D. 6亩'], explanation: '归一：48÷3÷4=4亩。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '5个工人6天修路120米。1个工人1天修路多少米？', answer: 'C', options_json: ['A. 3米', 'B. 3.5米', 'C. 4米', 'D. 5米'], explanation: '归一：120÷5÷6=4米。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '2台机器3小时生产零件180个。1台机器1小时生产多少个？', answer: 'B', options_json: ['A. 25个', 'B. 30个', 'C. 35个', 'D. 40个'], explanation: '归一：180÷2÷3=30个。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '4辆卡车5次运货80吨。1辆卡车1次运货多少吨？', answer: 'A', options_json: ['A. 4吨', 'B. 5吨', 'C. 6吨', 'D. 8吨'], explanation: '归一：80÷4÷5=4吨。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1台机器1小时生产零件25个。3台机器4小时生产多少个？', answer: 'D', options_json: ['A. 200个', 'B. 250个', 'C. 275个', 'D. 300个'], explanation: '归总：25×3×4=300个。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1个工人1天修路6米。5个工人7天修路多少米？', answer: 'C', options_json: ['A. 180米', 'B. 200米', 'C. 210米', 'D. 240米'], explanation: '归总：6×5×7=210米。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1辆汽车1小时行驶60千米。4辆汽车2小时行驶多少千米？', answer: 'B', options_json: ['A. 400千米', 'B. 480千米', 'C. 500千米', 'D. 520千米'], explanation: '归总：60×4×2=480千米。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '3台拖拉机4小时耕地60亩。照这样计算，5台拖拉机6小时耕地多少亩？', answer: 'C', options_json: ['A. 120亩', 'B. 140亩', 'C. 150亩', 'D. 180亩'], explanation: '先归一：60÷3÷4=5亩/台/小时，再归总：5×5×6=150亩。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '2台机器3小时生产零件240个。照这样计算，4台机器5小时生产多少个？', answer: 'D', options_json: ['A. 600个', 'B. 700个', 'C. 750个', 'D. 800个'], explanation: '先归一：240÷2÷3=40个/台/小时，再归总：40×4×5=800个。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '5个工人6天修路300米。10个工人3天修路多少米？', answer: 'B', options_json: ['A. 250米', 'B. 300米', 'C. 350米', 'D. 400米'], explanation: '先归一：300÷5÷6=10米/人/天，再归总：10×10×3=300米。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '1台抽水机1小时抽水30吨。2台抽水机5小时抽水多少吨？', answer: 'C', options_json: ['A. 250吨', 'B. 280吨', 'C. 300吨', 'D. 350吨'], explanation: '归总：30×2×5=300吨。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  { question_body: '4辆卡车3次运货72吨。6辆卡车2次运货多少吨？', answer: 'A', options_json: ['A. 72吨', 'B. 80吨', 'C. 90吨', 'D. 96吨'], explanation: '先归一：72÷4÷3=6吨/辆/次，再归总：6×6×2=72吨。', knowledge_id: 12, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '3台拖拉机4小时耕地60亩。照这样计算，耕150亩需要5台拖拉机多少小时？', answer: 'B', options_json: ['A. 5小时', 'B. 6小时', 'C. 7小时', 'D. 8小时'], explanation: '先归一：60÷3÷4=5亩/台/小时，再计算：150÷5÷5=6小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  { question_body: '5个工人8天修路400米。修600米需要10个工人多少天？', answer: 'A', options_json: ['A. 6天', 'B. 7天', 'C. 8天', 'D. 9天'], explanation: '先归一：400÷5÷8=10米/人/天，再计算：600÷10÷10=6天。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  { question_body: '2台机器3小时生产零件180个。生产720个零件需要4台机器多少小时？', answer: 'C', options_json: ['A. 4小时', 'B. 5小时', 'C. 6小时', 'D. 8小时'], explanation: '先归一：180÷2÷3=30个/台/小时，再计算：720÷30÷4=6小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  { question_body: '4辆卡车5次运货100吨。运150吨需要3辆卡车运几次？', answer: 'D', options_json: ['A. 8次', 'B. 9次', 'C. 12次', 'D. 10次'], explanation: '先归一：100÷4÷5=5吨/辆/次，再计算：150÷3÷5=10次。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  { question_body: '1台机器1小时生产零件40个。生产800个零件需要2台机器工作多少小时？', answer: 'B', options_json: ['A. 8小时', 'B. 10小时', 'C. 12小时', 'D. 15小时'], explanation: '2台机器1小时生产80个，800÷80=10小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  { question_body: '3个工人4天生产零件360个。生产600个零件需要4个工人工作多少天？', answer: 'C', options_json: ['A. 4天', 'B. 4.5天', 'C. 5天', 'D. 6天'], explanation: '先归一：360÷3÷4=30个/人/天，再计算：600÷4÷30=5天。', knowledge_id: 12, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '5台拖拉机6小时耕地300亩。照这样计算，8台拖拉机耕480亩需要多少小时？', answer: 'B', options_json: ['A. 5小时', 'B. 6小时', 'C. 7小时', 'D. 8小时'], explanation: '先归一：300÷5÷6=10亩/台/小时，再计算：480÷8÷10=6小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  { question_body: '4个工人5天修路200米。修360米，如果增加2个工人，需要多少天？', answer: 'A', options_json: ['A. 6天', 'B. 7天', 'C. 8天', 'D. 9天'], explanation: '先归一：200÷4÷5=10米/人/天，再计算：360÷(4+2)÷10=6天。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  { question_body: '3台机器4小时生产零件360个。生产900个零件，如果增加2台机器，需要多少小时？', answer: 'D', options_json: ['A. 3小时', 'B. 4小时', 'C. 5小时', 'D. 6小时'], explanation: '先归一：360÷3÷4=30个/台/小时，再计算：900÷(3+2)÷30=6小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  { question_body: '2辆卡车3次运货48吨。运160吨，如果增加2辆卡车，需要运几次？', answer: 'C', options_json: ['A. 4次', 'B. 5次', 'C. 6次', 'D. 8次'], explanation: '先归一：48÷2÷3=8吨/辆/次，再计算：160÷(2+2)÷8=5次。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  { question_body: '5个工人6天修路300米。如果要修400米，且工期缩短为4天，需要增加几个工人？', answer: 'C', options_json: ['A. 3个', 'B. 4个', 'C. 5个', 'D. 6个'], explanation: '先归一：300÷5÷6=10米/人/天，需要工人=400÷4÷10=10人，增加10-5=5人。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  { question_body: '6台抽水机8小时抽水480吨。抽600吨，如果减少2台抽水机，需要多少小时？', answer: 'C', options_json: ['A. 8小时', 'B. 12小时', 'C. 15小时', 'D. 16小时'], explanation: '先归一：480÷6÷8=10吨/台/小时，再计算：600÷(6-2)÷10=15小时。', knowledge_id: 12, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：归一问题中，先求出单一量是关键。', answer: '正确', options_json: ['正确', '错误'], explanation: '归一问题的核心就是先求出单位量。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：归总问题中，总量是不变的。', answer: '正确', options_json: ['正确', '错误'], explanation: '归总问题的特点是总量保持不变。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：3台机器2小时生产60个零件，1台机器1小时生产30个零件。', answer: '错误', options_json: ['正确', '错误'], explanation: '1台1小时=60÷3÷2=10个，不是30个。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：归一问题中，单一量=总量÷份数。', answer: '正确', options_json: ['正确', '错误'], explanation: '单一量=总量÷份数，这是归一的基本公式。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：4个工人5天修路100米，8个工人5天修路200米。', answer: '正确', options_json: ['正确', '错误'], explanation: '人数翻倍，天数不变，工作量也翻倍。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：归一和归总问题是互逆的。', answer: '正确', options_json: ['正确', '错误'], explanation: '归一求单一量，归总求总量，互为逆运算。', knowledge_id: 12, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '3台拖拉机4小时耕地48亩。1台拖拉机1小时耕地____亩。', answer: '4', options_json: null, explanation: '归一：48÷3÷4=4亩。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  { question_body: '5个工人6天修路120米。1个工人1天修路____米。', answer: '4', options_json: null, explanation: '归一：120÷5÷6=4米。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1台机器1小时生产零件25个。3台机器4小时生产____个。', answer: '300', options_json: null, explanation: '归总：25×3×4=300个。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1个工人1天修路6米。5个工人7天修路____米。', answer: '210', options_json: null, explanation: '归总：6×5×7=210米。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  { question_body: '4辆卡车3次运货72吨。1辆卡车1次运货____吨。', answer: '6', options_json: null, explanation: '归一：72÷4÷3=6吨。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  { question_body: '1辆汽车1小时行驶60千米。4辆汽车2小时行驶____千米。', answer: '480', options_json: null, explanation: '归总：60×4×2=480千米。', knowledge_id: 12, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '3台拖拉机4小时耕地60亩。耕150亩需要5台拖拉机____小时。', answer: '6', options_json: null, explanation: '先归一：60÷3÷4=5亩/台/小时，再计算：150÷5÷5=6小时。', knowledge_id: 12, question_type_id: 1, difficulty_id: 4 },
  { question_body: '5个工人8天修路400米。修600米需要10个工人____天。', answer: '6', options_json: null, explanation: '先归一：400÷5÷8=10米/人/天，再计算：600÷10÷10=6天。', knowledge_id: 12, question_type_id: 1, difficulty_id: 4 },
  { question_body: '4个工人5天修路200米。修360米，如果增加2个工人，需要____天。', answer: '6', options_json: null, explanation: '先归一：200÷4÷5=10米/人/天，再计算：360÷6÷10=6天。', knowledge_id: 12, question_type_id: 1, difficulty_id: 4 },
  { question_body: '6台抽水机8小时抽水480吨。抽600吨，如果减少2台抽水机，需要____小时。', answer: '15', options_json: null, explanation: '先归一：480÷6÷8=10吨/台/小时，再计算：600÷4÷10=15小时。', knowledge_id: 12, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge12Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点12题目生成完成，共插入 ${knowledge12Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
