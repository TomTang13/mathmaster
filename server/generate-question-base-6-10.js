const mysql = require('mysql2/promise');

// ========== 知识点 6: 定义新运算（自定义运算符号）==========
const knowledge6Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '规定 a△b = a + b × 2，那么 3△4 = ?', answer: 'B', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 14'], explanation: '3△4 = 3 + 4×2 = 3 + 8 = 11', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊙b = a × b + a，那么 5⊙3 = ?', answer: 'C', options_json: ['A. 15', 'B. 18', 'C. 20', 'D. 25'], explanation: '5⊙3 = 5×3 + 5 = 15 + 5 = 20', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a※b = (a + b) ÷ 2，那么 8※4 = ?', answer: 'A', options_json: ['A. 6', 'B. 7', 'C. 5', 'D. 8'], explanation: '8※4 = (8 + 4) ÷ 2 = 12 ÷ 2 = 6', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a★b = a × a - b，那么 5★3 = ?', answer: 'B', options_json: ['A. 20', 'B. 22', 'C. 25', 'D. 18'], explanation: '5★3 = 5×5 - 3 = 25 - 3 = 22', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊕b = a + b + 1，那么 6⊕7 = ?', answer: 'C', options_json: ['A. 12', 'B. 13', 'C. 14', 'D. 15'], explanation: '6⊕7 = 6 + 7 + 1 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a⊗b = a × 2 + b × 3，那么 4⊗2 = ?', answer: 'B', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '4⊗2 = 4×2 + 2×3 = 8 + 6 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a▽b = a × b - a，那么 7▽5 = ?', answer: 'A', options_json: ['A. 28', 'B. 30', 'C. 35', 'D. 25'], explanation: '7▽5 = 7×5 - 7 = 35 - 7 = 28', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a◆b = (a - b) × 2，那么 9◆4 = ?', answer: 'C', options_json: ['A. 8', 'B. 12', 'C. 10', 'D. 14'], explanation: '9◆4 = (9 - 4) × 2 = 5 × 2 = 10', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a◇b = a + a × b，那么 3◇4 = ?', answer: 'B', options_json: ['A. 12', 'B. 15', 'C. 18', 'D. 21'], explanation: '3◇4 = 3 + 3×4 = 3 + 12 = 15', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♠b = a × b ÷ 2，那么 6♠4 = ?', answer: 'B', options_json: ['A. 10', 'B. 12', 'C. 14', 'D. 16'], explanation: '6♠4 = 6×4÷2 = 24÷2 = 12', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♥b = a + b × b，那么 2♥3 = ?', answer: 'A', options_json: ['A. 11', 'B. 12', 'C. 13', 'D. 15'], explanation: '2♥3 = 2 + 3×3 = 2 + 9 = 11', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  { question_body: '规定 a♦b = (a + b) × (a - b)，那么 5♦3 = ?', answer: 'C', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '5♦3 = (5+3)×(5-3) = 8×2 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '规定 a△b = a × b + a + b，那么 4△5 = ?', answer: 'B', options_json: ['A. 27', 'B. 29', 'C. 30', 'D. 32'], explanation: '4△5 = 4×5 + 4 + 5 = 20 + 9 = 29', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊙b = a × a + b × b，那么 3⊙4 = ?', answer: 'C', options_json: ['A. 20', 'B. 24', 'C. 25', 'D. 30'], explanation: '3⊙4 = 3×3 + 4×4 = 9 + 16 = 25', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a※b = (a + b) ÷ (a - b)，那么 7※3 = ?', answer: 'A', options_json: ['A. 2.5', 'B. 3', 'C. 2', 'D. 3.5'], explanation: '7※3 = (7+3)÷(7-3) = 10÷4 = 2.5', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a★b = a × b - a - b，那么 6★5 = ?', answer: 'C', options_json: ['A. 18', 'B. 20', 'C. 19', 'D. 22'], explanation: '6★5 = 6×5 - 6 - 5 = 30 - 11 = 19', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊕b = a × 2 + b ÷ 2，那么 5⊕8 = ?', answer: 'B', options_json: ['A. 12', 'B. 14', 'C. 16', 'D. 18'], explanation: '5⊕8 = 5×2 + 8÷2 = 10 + 4 = 14', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  { question_body: '规定 a⊗b = (a + b) × 2 - a，那么 4⊗6 = ?', answer: 'A', options_json: ['A. 16', 'B. 18', 'C. 20', 'D. 22'], explanation: '4⊗6 = (4+6)×2 - 4 = 20 - 4 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '规定 a△b = a × b + a + b，已知 3△x = 23，求 x = ?', answer: 'B', options_json: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], explanation: '3△x = 3x + 3 + x = 4x + 3 = 23，4x = 20，x = 5', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊙b = a × a - b × b，那么 5⊙3 = ?', answer: 'B', options_json: ['A. 14', 'B. 16', 'C. 18', 'D. 20'], explanation: '5⊙3 = 5×5 - 3×3 = 25 - 9 = 16', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a※b = a × b + a ÷ b，那么 6※2 = ?', answer: 'A', options_json: ['A. 15', 'B. 14', 'C. 16', 'D. 18'], explanation: '6※2 = 6×2 + 6÷2 = 12 + 3 = 15', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a★b = (a + b) × (a - b) + b，那么 7★4 = ?', answer: 'D', options_json: ['A. 30', 'B. 35', 'C. 38', 'D. 37'], explanation: '7★4 = (7+4)×(7-4) + 4 = 11×3 + 4 = 37', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊕b = a × b - (a + b)，已知 4⊕x = 14，求 x = ?', answer: 'B', options_json: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explanation: '4⊕x = 4x - (4+x) = 3x - 4 = 14，3x = 18，x = 6', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  { question_body: '规定 a⊗b = a × a + a × b + b × b，那么 2⊗3 = ?', answer: 'C', options_json: ['A. 18', 'B. 20', 'C. 19', 'D. 21'], explanation: '2⊗3 = 2×2 + 2×3 + 3×3 = 4 + 6 + 9 = 19', knowledge_id: 6, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：定义新运算时，必须按照题目给定的规则进行计算', answer: '正确', options_json: ['正确', '错误'], explanation: '定义新运算的核心就是严格按照题目定义的规则计算', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a△b = a + b，那么 3△5 = 8', answer: '正确', options_json: ['正确', '错误'], explanation: '3△5 = 3 + 5 = 8，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：定义新运算中，a△b 一定等于 b△a', answer: '错误', options_json: ['正确', '错误'], explanation: '定义新运算不一定满足交换律，要看具体定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a⊙b = a × b，那么 4⊙5 = 20', answer: '正确', options_json: ['正确', '错误'], explanation: '4⊙5 = 4×5 = 20，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：定义新运算的结果一定是整数', answer: '错误', options_json: ['正确', '错误'], explanation: '定义新运算的结果可以是分数或小数', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：如果 a※b = a - b，那么 5※3 = 2', answer: '正确', options_json: ['正确', '错误'], explanation: '5※3 = 5 - 3 = 2，符合定义', knowledge_id: 6, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '规定 a△b = a + b × 2，那么 4△3 = ____', answer: '10', options_json: null, explanation: '4△3 = 4 + 3×2 = 4 + 6 = 10', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊙b = a × b + a，那么 3⊙4 = ____', answer: '15', options_json: null, explanation: '3⊙4 = 3×4 + 3 = 12 + 3 = 15', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a※b = (a + b) ÷ 2，那么 6※8 = ____', answer: '7', options_json: null, explanation: '6※8 = (6+8)÷2 = 14÷2 = 7', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a★b = a × a - b，那么 4★3 = ____', answer: '13', options_json: null, explanation: '4★3 = 4×4 - 3 = 16 - 3 = 13', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊕b = a + b + 1，那么 5⊕6 = ____', answer: '12', options_json: null, explanation: '5⊕6 = 5 + 6 + 1 = 12', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  { question_body: '规定 a⊗b = a × 2 + b × 3，那么 3⊗2 = ____', answer: '12', options_json: null, explanation: '3⊗2 = 3×2 + 2×3 = 6 + 6 = 12', knowledge_id: 6, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '规定 a△b = a × b + a + b，已知 2△x = 17，求 x = ____', answer: '5', options_json: null, explanation: '2△x = 2x + 2 + x = 3x + 2 = 17，3x = 15，x = 5', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a⊙b = a × a + b × b，那么 2⊙5 = ____', answer: '29', options_json: null, explanation: '2⊙5 = 2×2 + 5×5 = 4 + 25 = 29', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a※b = (a + b) ÷ (a - b)，那么 9※3 = ____', answer: '2', options_json: null, explanation: '9※3 = (9+3)÷(9-3) = 12÷6 = 2', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 },
  { question_body: '规定 a★b = a × b - a - b，已知 5★x = 19，求 x = ____', answer: '6', options_json: null, explanation: '5★x = 5x - 5 - x = 4x - 5 = 19，4x = 24，x = 6', knowledge_id: 6, question_type_id: 1, difficulty_id: 4 }
];

// ========== 知识点 7: 和差倍问题（和倍、差倍、和差）==========
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

// ========== 知识点 8: 年龄问题（年龄差不变）==========
const knowledge8Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '今年小明8岁，爸爸32岁。爸爸比小明大几岁？', answer: 'C', options_json: ['A. 22岁', 'B. 23岁', 'C. 24岁', 'D. 25岁'], explanation: '年龄差=32-8=24岁，永远不变。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年妈妈36岁，儿子9岁。5年后妈妈多少岁？', answer: 'B', options_json: ['A. 40岁', 'B. 41岁', 'C. 42岁', 'D. 43岁'], explanation: '5年后妈妈=36+5=41岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爷爷65岁，孙子5岁。几年前爷爷60岁？', answer: 'A', options_json: ['A. 5年', 'B. 6年', 'C. 4年', 'D. 3年'], explanation: '65-60=5年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年姐姐12岁，妹妹6岁。姐姐比妹妹大几岁？', answer: 'C', options_json: ['A. 4岁', 'B. 5岁', 'C. 6岁', 'D. 7岁'], explanation: '年龄差=12-6=6岁，永远不变。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年父亲40岁，儿子10岁。10年后父亲多少岁？', answer: 'C', options_json: ['A. 48岁', 'B. 49岁', 'C. 50岁', 'D. 52岁'], explanation: '10年后父亲=40+10=50岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年哥哥15岁，弟弟9岁。3年前弟弟多少岁？', answer: 'B', options_json: ['A. 5岁', 'B. 6岁', 'C. 7岁', 'D. 8岁'], explanation: '3年前弟弟=9-3=6岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小明和爸爸的年龄和是44岁。3年后年龄和是多少岁？', answer: 'C', options_json: ['A. 47岁', 'B. 48岁', 'C. 50岁', 'D. 53岁'], explanation: '3年后两人都长3岁，年龄和增加6岁，44+6=50岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小红10岁，妈妈34岁。妈妈比小红大几岁？', answer: 'B', options_json: ['A. 22岁', 'B. 24岁', 'C. 26岁', 'D. 28岁'], explanation: '年龄差=34-10=24岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爷爷70岁，爸爸40岁。爷爷比爸爸大几岁？', answer: 'C', options_json: ['A. 28岁', 'B. 29岁', 'C. 30岁', 'D. 32岁'], explanation: '年龄差=70-40=30岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年小明12岁，5年前小明几岁？', answer: 'A', options_json: ['A. 7岁', 'B. 8岁', 'C. 6岁', 'D. 9岁'], explanation: '5年前=12-5=7岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年妈妈30岁，儿子6岁。几年后妈妈36岁？', answer: 'B', options_json: ['A. 4年', 'B. 6年', 'C. 5年', 'D. 7年'], explanation: '36-30=6年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今年爸爸35岁，儿子7岁。爸爸是儿子的几倍？', answer: 'C', options_json: ['A. 4倍', 'B. 6倍', 'C. 5倍', 'D. 7倍'], explanation: '35÷7=5倍。', knowledge_id: 8, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '今年小明8岁，爸爸32岁。几年后爸爸年龄是小明的3倍？', answer: 'B', options_json: ['A. 2年', 'B. 4年', 'C. 6年', 'D. 8年'], explanation: '年龄差24岁不变。爸爸是小明3倍时，差2份，24÷2=12岁（小明），12-8=4年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年爷爷65岁，孙子5岁。几年后爷爷年龄是孙子的5倍？', answer: 'C', options_json: ['A. 5年', 'B. 8年', 'C. 10年', 'D. 12年'], explanation: '年龄差60岁不变。爷爷是孙子5倍时，差4份，60÷4=15岁（孙子），15-5=10年后。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年姐姐12岁，妹妹6岁。当两人年龄和为40岁时，姐姐多少岁？', answer: 'C', options_json: ['A. 20岁', 'B. 22岁', 'C. 23岁', 'D. 25岁'], explanation: '年龄差6岁不变。和40差6，姐姐=(40+6)÷2=23岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年哥哥15岁，弟弟9岁。哥哥年龄是弟弟2倍时，哥哥几岁？', answer: 'C', options_json: ['A. 10岁', 'B. 11岁', 'C. 12岁', 'D. 18岁'], explanation: '差6岁，哥哥是弟弟2倍时差1份=6岁，弟弟6岁，哥哥12岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年小明和爸爸的年龄和是44岁，3年前年龄和是多少岁？', answer: 'B', options_json: ['A. 36岁', 'B. 38岁', 'C. 40岁', 'D. 42岁'], explanation: '3年前两人都少3岁，年龄和减少6岁，44-6=38岁。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今年妈妈38岁，儿子8岁。几年前妈妈年龄是儿子的6倍？', answer: 'B', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(38-x)=6(8-x) → 38-x=48-6x → 5x=10 → x=2。2年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '今年父亲38岁，儿子8岁。几年前父亲年龄是儿子的7倍？', answer: 'C', options_json: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explanation: '(38-x)=7(8-x) → 38-x=56-7x → 6x=18 → x=3。3年前。', knowledge_id: 8, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今年小明和爷爷年龄和是70岁，爷爷比小明大50岁。小明今年几岁？', answer: 'A', options_json: ['A. 10岁', 'B. 12岁', 'C. 15岁', 'D. 20岁'], explanation: '小明=(70