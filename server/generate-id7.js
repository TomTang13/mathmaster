const mysql = require('mysql2/promise');

const knowledge7Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '小明和小红共有图书48本，小明是小红的2倍。小明有多少本？', answer: 'B', options_json: ['A. 16本', 'B. 32本', 'C. 24本', 'D. 48本'], explanation: '和倍问题：小红为1份，小明为2份，共3份。48÷3=16本（小红），16×2=32本（小明）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲数比乙数多24，甲数是乙数的3倍。乙数是多少？', answer: 'A', options_json: ['A. 12', 'B. 24', 'C. 36', 'D. 48'], explanation: '差倍问题：乙数为1份，甲数为3份，差2份。24÷2=12（乙数）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两数之和是56，两数之差是12。较大的数是多少？', answer: 'C', options_json: ['A. 22', 'B. 30', 'C. 34', 'D. 44'], explanation: '和差问题：大数=(和+差)÷2=(56+12)÷2=34。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '果园里有苹果树和梨树共120棵，苹果树是梨树的4倍。梨树有多少棵？', answer: 'B', options_json: ['A. 30棵', 'B. 24棵', 'C. 20棵', 'D. 96棵'], explanation: '和倍问题：梨树为1份，苹果树为4份，共5份。120÷5=24棵（梨树）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '哥哥比弟弟多15颗糖，哥哥是弟弟的4倍。弟弟有多少颗糖？', answer: 'A', options_json: ['A. 5颗', 'B. 10颗', 'C. 15颗', 'D. 20颗'], explanation: '差倍问题：弟弟为1份，哥哥为4份，差3份。15÷3=5颗（弟弟）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两个数的和是80，差是20。较小的数是多少？', answer: 'B', options_json: ['A. 40', 'B. 30', 'C. 50', 'D. 60'], explanation: '和差问题：小数=(和-差)÷2=(80-20)÷2=30。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '学校有足球和篮球共90个，足球是篮球的2倍。足球有多少个？', answer: 'C', options_json: ['A. 30个', 'B. 45个', 'C. 60个', 'D. 90个'], explanation: '篮球为1份，足球为2份，共3份。90÷3=30个（篮球），30×2=60个（足球）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '甲、乙两数之和是72，甲是乙的3倍。甲是多少？', answer: 'D', options_json: ['A. 18', 'B. 36', 'C. 48', 'D. 54'], explanation: '乙=72÷(3+1)=18，甲=18×3=54。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '大数比小数多18，大数是小数的4倍。小数是多少？', answer: 'A', options_json: ['A. 6', 'B. 8', 'C. 9', 'D. 12'], explanation: '小数=18÷(4-1)=6。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '两数之和是90，两数之差是10。较大的数是多少？', answer: 'C', options_json: ['A. 40', 'B. 45', 'C. 50', 'D. 55'], explanation: '大数=(90+10)÷2=50。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '小明和小华共有邮票60张，小明是小华的2倍。小华有多少张？', answer: 'B', options_json: ['A. 15张', 'B. 20张', 'C. 25张', 'D. 30张'], explanation: '小华为1份，小明为2份，共3份。60÷3=20张（小华）。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  { question_body: '姐姐比妹妹多12岁，姐姐是妹妹的3倍。妹妹多少岁？', answer: 'A', options_json: ['A. 6岁', 'B. 8岁', 'C. 9岁', 'D. 12岁'], explanation: '妹妹=12÷(3-1)=6岁。', knowledge_id: 7, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '三个数的和是120，甲是乙的2倍，丙是乙的3倍。乙是多少？', answer: 'B', options_json: ['A. 15', 'B. 20', 'C. 25', 'D. 30'], explanation: '乙为1份，甲为2份，丙为3份，共6份。120÷6=20。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  { question_body: '两数之和是100，大数是小数的4倍少5。大数是多少？', answer: 'C', options_json: ['A. 75', 'B. 78', 'C. 79', 'D. 80'], explanation: '小数=(100+5)÷(4+1)=21，大数=100-21=79。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲、乙、丙三人共有钱180元，甲是乙的2倍，乙是丙的3倍。丙有多少元？', answer: 'A', options_json: ['A. 18元', 'B. 20元', 'C. 22元', 'D. 24元'], explanation: '丙为1份，乙为3份，甲为6份，共10份。180÷10=18元。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  { question_body: '两数之差是30，大数是小数的3倍多2。小数是多少？', answer: 'B', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '小数=(30-2)÷(3-1)=14。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  { question_body: '长方形的长和宽之和是36厘米，长是宽的3倍。宽是多少厘米？', answer: 'C', options_json: ['A. 8厘米', 'B. 10厘米', 'C. 9厘米', 'D. 12厘米'], explanation: '宽为1份，长为3份，共4份。36÷4=9厘米。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  { question_body: '甲乙两数之和是150，甲是乙的4倍。甲乙两数之差是多少？', answer: 'D', options_json: ['A. 80', 'B. 85', 'C. 88', 'D. 90'], explanation: '乙=150÷(4+1)=30，甲=30×4=120，差=120-30=90。', knowledge_id: 7, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '甲乙丙三数之和是200，甲是乙的2倍，乙是丙的3倍。甲是多少？', answer: 'B', options_json: ['A. 100', 'B. 120', 'C. 110', 'D. 130'], explanation: '丙为1份，乙为3份，甲为6份，共10份。200÷10=20（丙），甲=20×6=120。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两数之和是120，大数是小数的3倍多8。两数之差是多少？', answer: 'D', options_json: ['A. 55', 'B. 58', 'C. 60', 'D. 64'], explanation: '小数=(120-8)÷(3+1)=28，大数=28×3+8=92，差=92-28=64。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  { question_body: '四个数的和是100，甲是乙的2倍，丙是乙的3倍，丁是乙的4倍。乙是多少？', answer: 'A', options_json: ['A. 10', 'B. 12', 'C. 15', 'D. 20'], explanation: '乙为1份，甲为2份，丙为3份，丁为4份，共10份。100÷10=10。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  { question_body: '甲乙两数之差是48，甲是乙的5倍。甲乙两数之和是多少？', answer: 'D', options_json: ['A. 60', 'B. 65', 'C. 70', 'D. 72'], explanation: '乙=48÷(5-1)=12，甲=12×5=60，和=60+12=72。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  { question_body: '三个连续自然数的和是60，最大的数是多少？', answer: 'B', options_json: ['A. 19', 'B. 21', 'C. 22', 'D. 23'], explanation: '中间数=60÷3=20，最大数=20+1=21。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  { question_body: '两数之和是80，大数是小数的3倍。如果小数增加10，大数不变，大数是小数的几倍？', answer: 'C', options_json: ['A. 2倍', 'B. 2.5倍', 'C. 2倍', 'D. 3倍'], explanation: '小数=80÷(3+1)=20，大数=60。小数增加10后为30，60÷30=2倍。', knowledge_id: 7, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：和倍问题中，较小数 = 和 ÷ (倍数 + 1)', answer: '正确', options_json: ['正确', '错误'], explanation: '和倍问题公式：较小数 = 和 ÷ (倍数 + 1)。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：差倍问题中，较小数 = 差 × 倍数', answer: '错误', options_json: ['正确', '错误'], explanation: '差倍问题公式：较小数 = 差 ÷ (倍数 - 1)。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：和差问题中，大数 = (和 + 差) ÷ 2', answer: '正确', options_json: ['正确', '错误'], explanation: '和差问题公式：大数 = (和 + 差) ÷ 2。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：两数之和是50，差是10，那么较大数是30', answer: '正确', options_json: ['正确', '错误'], explanation: '大数=(50+10)÷2=30。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：甲是乙的3倍，甲乙之和是40，那么乙是10', answer: '正确', options_json: ['正确', '错误'], explanation: '乙=40÷(3+1)=10。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：和倍问题中，较大数 = 较小数 × 倍数', answer: '正确', options_json: ['正确', '错误'], explanation: '和倍问题中，较大数确实是较小数的倍数。', knowledge_id: 7, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '甲乙两数和为72，甲是乙的3倍。甲是____。', answer: '54', options_json: null, explanation: '乙=72÷(3+1)=18，甲=18×3=54。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  { question_body: '大数比小数多18，大数是小数的4倍。小数是____。', answer: '6', options_json: null, explanation: '小数=18÷(4-1)=6。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  { question_body: '两数之和是56，两数之差是12。较小的数是____。', answer: '22', options_json: null, explanation: '小数=(56-12)÷2=22。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  { question_body: '小明和小红共有图书48本，小明是小红的2倍。小红有____本。', answer: '16', options_json: null, explanation: '小红=48÷(2+1)=16本。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  { question_body: '哥哥比弟弟多15颗糖，哥哥是弟弟的4倍。弟弟有____颗糖。', answer: '5', options_json: null, explanation: '弟弟=15÷(4-1)=5颗。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  { question_body: '两数之和是90，两数之差是10。较大的数是____。', answer: '50', options_json: null, explanation: '大数=(90+10)÷2=50。', knowledge_id: 7, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '甲乙丙三数之和是200，甲是乙的2倍，乙是丙的3倍。甲是____。', answer: '120', options_json: null, explanation: '丙=200÷(1+3+6)=20，甲=20×6=120。', knowledge_id: 7, question_type_id: 1, difficulty_id: 4 },
  { question_body: '两数之和是120，大数是小数的3倍多8。大数是____。', answer: '92', options_json: null, explanation: '小数=(120-8)÷4=28，大数=28×3+8=92。', knowledge_id: 7, question_type_id: 1, difficulty_id: 4 },
  { question_body: '甲乙两数之差是48，甲是乙的5倍。甲乙两数之和是____。', answer: '72', options_json: null, explanation: '乙=48÷4=12，甲=60，和=72。', knowledge_id: 7, question_type_id: 1, difficulty_id: 4 },
  { question_body: '三个连续自然数的和是60，最大的数是____。', answer: '21', options_json: null, explanation: '中间数=60÷3=20，最大数=21。', knowledge_id: 7, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge7Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点7题目生成完成，共插入 ${knowledge7Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
