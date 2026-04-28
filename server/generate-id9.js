const mysql = require('mysql2/promise');

const knowledge9Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '在一条长20米的小路一边种树，每隔4米种一棵，两端都种。一共种多少棵？', answer: 'B', options_json: ['A. 4棵', 'B. 6棵', 'C. 5棵', 'D. 7棵'], explanation: '两端都种：棵数=间隔数+1=20÷4+1=5+1=6棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长15米的小路一边种树，每隔3米种一棵，两端都不种。一共种多少棵？', answer: 'A', options_json: ['A. 4棵', 'B. 5棵', 'C. 6棵', 'D. 3棵'], explanation: '两端都不种：棵数=间隔数-1=15÷3-1=5-1=4棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长18米的小路一边种树，每隔2米种一棵，只种一端。一共种多少棵？', answer: 'C', options_json: ['A. 8棵', 'B. 10棵', 'C. 9棵', 'D. 11棵'], explanation: '只种一端：棵数=间隔数=18÷2=9棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆形花坛周长30米，每隔5米种一棵花。一共种多少棵？', answer: 'B', options_json: ['A. 5棵', 'B. 6棵', 'C. 7棵', 'D. 8棵'], explanation: '环形：棵数=间隔数=30÷5=6棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长24米的小路一边种树，每隔4米种一棵，两端都种。间隔数是多少？', answer: 'C', options_json: ['A. 5个', 'B. 7个', 'C. 6个', 'D. 8个'], explanation: '间隔数=24÷4=6个。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长12米的小路一边种树，每隔3米种一棵，两端都种。一共种多少棵？', answer: 'B', options_json: ['A. 3棵', 'B. 5棵', 'C. 4棵', 'D. 6棵'], explanation: '两端都种：棵数=12÷3+1=4+1=5棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长10米的小路一边种树，每隔2米种一棵，两端都不种。一共种多少棵？', answer: 'A', options_json: ['A. 4棵', 'B. 5棵', 'C. 6棵', 'D. 3棵'], explanation: '两端都不种：棵数=10÷2-1=5-1=4棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆形水池周长40米，每隔4米种一棵树。一共种多少棵？', answer: 'C', options_json: ['A. 8棵', 'B. 11棵', 'C. 10棵', 'D. 12棵'], explanation: '环形：棵数=40÷4=10棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长16米的小路一边种树，每隔4米种一棵，只种一端。一共种多少棵？', answer: 'B', options_json: ['A. 3棵', 'B. 4棵', 'C. 5棵', 'D. 6棵'], explanation: '只种一端：棵数=16÷4=4棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长30米的小路一边种树，每隔5米种一棵，两端都种。一共种多少棵？', answer: 'C', options_json: ['A. 5棵', 'B. 6棵', 'C. 7棵', 'D. 8棵'], explanation: '两端都种：棵数=30÷5+1=6+1=7棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '在一条长8米的小路一边种树，每隔2米种一棵，两端都不种。一共种多少棵？', answer: 'A', options_json: ['A. 3棵', 'B. 4棵', 'C. 5棵', 'D. 2棵'], explanation: '两端都不种：棵数=8÷2-1=4-1=3棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  { question_body: '圆形操场周长60米，每隔6米插一面彩旗。一共插多少面？', answer: 'B', options_json: ['A. 9面', 'B. 10面', 'C. 11面', 'D. 12面'], explanation: '环形：面数=60÷6=10面。', knowledge_id: 9, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '在一条长100米的小路一边种树，每隔5米种一棵，两端都种。一共种多少棵？', answer: 'C', options_json: ['A. 19棵', 'B. 20棵', 'C. 21棵', 'D. 22棵'], explanation: '两端都种：棵数=100÷5+1=20+1=21棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在一条长90米的小路一边种树，每隔6米种一棵，两端都不种。一共种多少棵？', answer: 'B', options_json: ['A. 13棵', 'B. 14棵', 'C. 15棵', 'D. 16棵'], explanation: '两端都不种：棵数=90÷6-1=15-1=14棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  { question_body: '从第1棵树走到第6棵树，每两棵树之间相距5米。一共走了多少米？', answer: 'C', options_json: ['A. 25米', 'B. 30米', 'C. 25米', 'D. 35米'], explanation: '间隔数=6-1=5个，距离=5×5=25米。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  { question_body: '圆形花坛周长48米，每隔3米放一盆花。一共放多少盆？', answer: 'D', options_json: ['A. 14盆', 'B. 15盆', 'C. 17盆', 'D. 16盆'], explanation: '环形：盆数=48÷3=16盆。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  { question_body: '在一条长120米的小路一边种树，每隔8米种一棵，两端都种。一共种多少棵？', answer: 'B', options_json: ['A. 14棵', 'B. 16棵', 'C. 15棵', 'D. 17棵'], explanation: '两端都种：棵数=120÷8+1=15+1=16棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一根木头长18米，锯成3米长的小段。需要锯几次？', answer: 'A', options_json: ['A. 5次', 'B. 6次', 'C. 4次', 'D. 7次'], explanation: '段数=18÷3=6段，锯的次数=6-1=5次。', knowledge_id: 9, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '在一条长200米的小路两边种树，每隔5米种一棵，两端都种。一共种多少棵？', answer: 'D', options_json: ['A. 40棵', 'B. 41棵', 'C. 80棵', 'D. 82棵'], explanation: '一边棵数=200÷5+1=41棵，两边=41×2=82棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  { question_body: '圆形广场周长300米，每隔6米种一棵树，每隔10米装一盏路灯。共有多少处树和路灯重合？', answer: 'B', options_json: ['A. 8处', 'B. 10处', 'C. 12处', 'D. 15处'], explanation: '重合处是6和10的公倍数位置，最小公倍数=30，重合数=300÷30=10处。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在一条长96米的小路一边种树，原来每隔4米种一棵，现改为每隔6米种一棵。不需要移动的树有多少棵？（两端都种）', answer: 'C', options_json: ['A. 7棵', 'B. 8棵', 'C. 9棵', 'D. 10棵'], explanation: '4和6的最小公倍数=12，不需要移动的树=96÷12+1=8+1=9棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  { question_body: '从一楼走到五楼，每层之间有20级台阶。一共要走多少级台阶？', answer: 'B', options_json: ['A. 80级', 'B. 80级', 'C. 100级', 'D. 60级'], explanation: '间隔数=5-1=4个，台阶数=4×20=80级。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  { question_body: '在一条长150米的小路一边种柳树，每隔6米种一棵，两端都种；每两棵柳树之间种一棵桃树。桃树有多少棵？', answer: 'A', options_json: ['A. 25棵', 'B. 26棵', 'C. 24棵', 'D. 27棵'], explanation: '柳树棵数=150÷6+1=26棵，间隔数=25个，桃树=25棵。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一根木头锯成5段需要12分钟。锯成10段需要多少分钟？', answer: 'C', options_json: ['A. 24分钟', 'B. 25分钟', 'C. 27分钟', 'D. 30分钟'], explanation: '锯5段需锯4次，每次12÷4=3分钟。锯10段需锯9次，9×3=27分钟。', knowledge_id: 9, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：两端都种树时，棵数 = 间隔数 + 1', answer: '正确', options_json: ['正确', '错误'], explanation: '两端都种：棵数=间隔数+1。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：环形种树时，棵数 = 间隔数', answer: '正确', options_json: ['正确', '错误'], explanation: '环形：棵数=间隔数。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两端都不种树时，棵数 = 间隔数 + 1', answer: '错误', options_json: ['正确', '错误'], explanation: '两端都不种：棵数=间隔数-1。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：从第1棵树走到第5棵树，走了5个间隔。', answer: '错误', options_json: ['正确', '错误'], explanation: '从第1棵到第5棵，间隔数=5-1=4个。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：锯木头时，锯的次数 = 段数 - 1', answer: '正确', options_json: ['正确', '错误'], explanation: '锯的次数比段数少1。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：爬楼梯时，走的层数 = 到达楼层 - 起始楼层', answer: '正确', options_json: ['正确', '错误'], explanation: '从1楼到5楼，走了5-1=4层。', knowledge_id: 9, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '在一条长20米的小路一边种树，每隔4米种一棵，两端都种。一共种____棵。', answer: '6', options_json: null, explanation: '两端都种：棵数=20÷4+1=5+1=6棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在一条长15米的小路一边种树，每隔3米种一棵，两端都不种。一共种____棵。', answer: '4', options_json: null, explanation: '两端都不种：棵数=15÷3-1=5-1=4棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆形花坛周长30米，每隔5米种一棵花。一共种____棵。', answer: '6', options_json: null, explanation: '环形：棵数=30÷5=6棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在一条长18米的小路一边种树，每隔2米种一棵，只种一端。一共种____棵。', answer: '9', options_json: null, explanation: '只种一端：棵数=18÷2=9棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  { question_body: '在一条长24米的小路一边种树，每隔4米种一棵，两端都种。间隔数是____个。', answer: '6', options_json: null, explanation: '间隔数=24÷4=6个。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  { question_body: '圆形水池周长40米，每隔4米种一棵树。一共种____棵。', answer: '10', options_json: null, explanation: '环形：棵数=40÷4=10棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '在一条长200米的小路两边种树，每隔5米种一棵，两端都种。一共种____棵。', answer: '82', options_json: null, explanation: '一边棵数=200÷5+1=41棵，两边=41×2=82棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一根木头锯成5段需要12分钟。锯成10段需要____分钟。', answer: '27', options_json: null, explanation: '锯5段需锯4次，每次3分钟。锯10段需锯9次，9×3=27分钟。', knowledge_id: 9, question_type_id: 1, difficulty_id: 4 },
  { question_body: '在一条长96米的小路一边种树，原来每隔4米种一棵，现改为每隔6米种一棵。不需要移动的树有____棵。（两端都种）', answer: '9', options_json: null, explanation: '4和6的最小公倍数=12，不需要移动的树=96÷12+1=9棵。', knowledge_id: 9, question_type_id: 1, difficulty_id: 4 },
  { question_body: '从一楼走到五楼，每层之间有20级台阶。一共要走____级台阶。', answer: '80', options_json: null, explanation: '间隔数=5-1=4个，台阶数=4×20=80级。', knowledge_id: 9, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge9Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点9题目生成完成，共插入 ${knowledge9Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
