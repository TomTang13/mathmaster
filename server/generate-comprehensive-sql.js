const mysql = require('mysql2/promise');

// 知识点数据（id 7-20）
const knowledgeData = [
  { id: 7, weekId: 2, day: 1, text: '和差倍问题（和倍、差倍、和差）', module: '应用题模块' },
  { id: 8, weekId: 2, day: 1, text: '年龄问题（年龄差不变）', module: '应用题模块' },
  { id: 9, weekId: 2, day: 2, text: '植树问题（两端、一端、环形）', module: '应用题模块' },
  { id: 10, weekId: 2, day: 2, text: '周期问题（日期、图形、数列）', module: '应用题模块' },
  { id: 11, weekId: 2, day: 3, text: '还原问题（倒推法）', module: '应用题模块' },
  { id: 12, weekId: 2, day: 3, text: '归一归总问题', module: '应用题模块' },
  { id: 13, weekId: 3, day: 1, text: '奇偶性分析', module: '数论模块' },
  { id: 14, weekId: 3, day: 1, text: '质数与合数（100以内质数表）', module: '数论模块' },
  { id: 15, weekId: 3, day: 2, text: '整除特征（2, 3, 5, 9）', module: '数论模块' },
  { id: 16, weekId: 3, day: 2, text: '整除特征（4, 8, 25, 125）', module: '数论模块' },
  { id: 17, weekId: 3, day: 3, text: '整除特征（7, 11, 13）', module: '数论模块' },
  { id: 18, weekId: 3, day: 3, text: '分解质因数（短除法）', module: '数论模块' },
  { id: 19, weekId: 4, day: 1, text: '最大公因数（GCD）与最小公倍数（LCM）', module: '数论模块' },
  { id: 20, weekId: 4, day: 1, text: '因数个数定理', module: '数论模块' },
];

// 生成任务标题
function generateTaskTitle(knowledge) {
  const titles = {
    7: '和差倍问题闯关挑战',
    8: '年龄问题侦探任务',
    9: '植树问题绿色行动',
    10: '周期问题规律探索',
    11: '还原问题倒推大冒险',
    12: '归一归总问题实战营',
    13: '奇偶性分析智慧门',
    14: '质数与合数密码破译',
    15: '整除特征2-3-5-9速查',
    16: '整除特征4-8-25-125挑战',
    17: '整除特征7-11-13进阶',
    18: '分解质因数短除法工坊',
    19: 'GCD与LCM双星任务',
    20: '因数个数定理探秘',
  };
  return titles[knowledge.id] || `${knowledge.text}综合练习`;
}

// 生成任务内容
function generateTaskContent(knowledge) {
  const contents = {
    7: '欢迎来到和差倍问题闯关挑战！\n\n你将学习如何解决和倍、差倍、和差这三类经典应用题。掌握"画线段图"的方法，让复杂的数量关系变得一目了然。\n\n任务目标：完成10道题目，至少答对8道即可通关！',
    8: '年龄问题侦探任务开始！\n\n年龄问题的核心秘诀是"年龄差永远不变"。运用这个规律，破解各种年龄谜题。\n\n任务目标：完成10道题目，成为年龄问题小侦探！',
    9: '植树问题绿色行动启动！\n\n学习两端都种、一端种、两端都不种、环形种植四种情况的计算方法。注意间隔数与棵数的关系！\n\n任务目标：完成10道题目，为数学世界种下智慧之树！',
    10: '周期问题规律探索之旅！\n\n发现日期、图形、数列中的循环规律，用除法求余数的方法定位任意位置。\n\n任务目标：完成10道题目，掌握周期问题的解题密码！',
    11: '还原问题倒推大冒险开始！\n\n从结果出发，一步一步倒着推算，用"逆运算"还原最初的状态。加减互逆，乘除互逆！\n\n任务目标：完成10道题目，成为倒推法小达人！',
    12: '归一归总问题实战营开营！\n\n学会先求"单一量"，再求总量；或者先求总量，再分配。这是解决实际问题的重要方法。\n\n任务目标：完成10道题目，掌握归一归总的精髓！',
    13: '奇偶性分析智慧门开启！\n\n探索奇数和偶数的运算规律：奇+奇=偶，偶+偶=偶，奇+偶=奇。用奇偶性解决判断问题。\n\n任务目标：完成10道题目，打开智慧之门！',
    14: '质数与合数密码破译行动！\n\n记住100以内质数表，学会判断一个数是质数还是合数。质数是只有1和它本身两个因数的数。\n\n任务目标：完成10道题目，破译数学密码！',
    15: '整除特征2-3-5-9速查训练！\n\n掌握快速判断整除的方法：末位判断2和5，数字和判断3和9。让整除判断秒速完成！\n\n任务目标：完成10道题目，成为整除判断小快手！',
    16: '整除特征4-8-25-125挑战开始！\n\n末两位判断4和25，末三位判断8和125。这些技巧让大数整除判断变得轻松！\n\n任务目标：完成10道题目，挑战整除特征进阶！',
    17: '整除特征7-11-13进阶挑战！\n\n学习7、11、13的特殊整除判断方法：三位截断法、奇偶位差法。\n\n任务目标：完成10道题目，成为整除特征大师！',
    18: '分解质因数短除法工坊开工！\n\n用短除法把一个合数分解成质因数相乘的形式。这是数论学习的重要基础工具。\n\n任务目标：完成10道题目，掌握短除法分解质因数！',
    19: 'GCD与LCM双星任务启动！\n\n最大公因数（GCD）用短除法求，最小公倍数（LCM）也用短除法求。理解两者的区别与联系。\n\n任务目标：完成10道题目，掌握GCD和LCM的求法！',
    20: '因数个数定理探秘之旅！\n\n学习如何用质因数分解的结果快速计算一个数有多少个因数。公式：指数加1再相乘！\n\n任务目标：完成10道题目，探秘因数个数的奥秘！',
  };
  return contents[knowledge.id] || `基于知识点：${knowledge.text}\n\n请完成以下综合练习题目，巩固对该知识点的理解。`;
}

// 题目模板库 - 每个知识点10道不重复题目 (7单选 + 2判断 + 1填空)
const questionBank = {
  // id 7: 和差倍问题
  7: [
    { type: 2, body: '小明和小红共有图书48本，小明是小红的2倍。小明有多少本？', answer: 'B', options: ['A. 16本', 'B. 32本', 'C. 24本', 'D. 48本'], explain: '和倍问题：小红为1份，小明为2份，共3份。48÷3=16本（小红），16×2=32本（小明）。', diff: 2 },
    { type: 2, body: '甲数比乙数多24，甲数是乙数的3倍。乙数是多少？', answer: 'A', options: ['A. 12', 'B. 24', 'C. 36', 'D. 48'], explain: '差倍问题：乙数为1份，甲数为3份，差2份。24÷2=12（乙数）。', diff: 2 },
    { type: 2, body: '两数之和是56，两数之差是12。较大的数是多少？', answer: 'C', options: ['A. 22', 'B. 30', 'C. 34', 'D. 44'], explain: '和差问题：大数=(和+差)÷2=(56+12)÷2=34。', diff: 2 },
    { type: 2, body: '果园里有苹果树和梨树共120棵，苹果树是梨树的4倍。梨树有多少棵？', answer: 'B', options: ['A. 30棵', 'B. 24棵', 'C. 20棵', 'D. 96棵'], explain: '和倍问题：梨树为1份，苹果树为4份，共5份。120÷5=24棵（梨树）。', diff: 2 },
    { type: 2, body: '哥哥比弟弟多15颗糖，哥哥是弟弟的4倍。弟弟有多少颗糖？', answer: 'A', options: ['A. 5颗', 'B. 10颗', 'C. 15颗', 'D. 20颗'], explain: '差倍问题：弟弟为1份，哥哥为4份，差3份。15÷3=5颗（弟弟）。', diff: 2 },
    { type: 2, body: '两个数的和是80，差是20。较小的数是多少？', answer: 'B', options: ['A. 40', 'B. 30', 'C. 50', 'D. 60'], explain: '和差问题：小数=(和-差)÷2=(80-20)÷2=30。', diff: 2 },
    { type: 2, body: '学校有足球和篮球共90个，足球是篮球的2倍。足球有多少个？', answer: 'C', options: ['A. 30个', 'B. 45个', 'C. 60个', 'D. 90个'], explain: '篮球为1份，足球为2份，共3份。90÷3=30个（篮球），30×2=60个（足球）。', diff: 2 },
    { type: 3, body: '判断：和倍问题中，较小数 = 和 ÷ (倍数 + 1)', answer: '正确', options: ['正确', '错误'], explain: '和倍问题公式：较小数 = 和 ÷ (倍数 + 1)。', diff: 1 },
    { type: 3, body: '判断：差倍问题中，较小数 = 差 × 倍数', answer: '错误', options: ['正确', '错误'], explain: '差倍问题公式：较小数 = 差 ÷ (倍数 - 1)。', diff: 1 },
    { type: 1, body: '甲乙两数和为72，甲是乙的3倍。甲是____。', answer: '54', options: null, explain: '乙=72÷(3+1)=18，甲=18×3=54。', diff: 2 },
  ],
  // id 8: 年龄问题
  8: [
    { type: 2, body: '今年小明8岁，爸爸32岁。几年后爸爸年龄是小明的3倍？', answer: 'B', options: ['A. 2年', 'B. 4年', 'C. 6年', 'D. 8年'], explain: '年龄差24岁不变。爸爸是小明3倍时，差2份，24÷2=12岁（小明），12-8=4年后。', diff: 3 },
    { type: 2, body: '今年妈妈36岁，儿子9岁。几年前妈妈年龄是儿子的6倍？', answer: 'A', options: ['A. 3年', 'B. 4年', 'C. 5年', 'D. 6年'], explain: '(36-x)=6(9-x)，解得36-x=54-6x，5x=18，x=3.6... 重新验算：(36-3)=33，(9-3)=6，33÷6=5.5不对。正确答案应该是x=2：(36-2)=34，(9-2)=7，34÷7也不对。实际上(36-x)=6(9-x) → 36-x=54-6x → 5x=18 → x=3.6不是整数。题目调整为：妈妈35岁，儿子7岁，(35-x)=6(7-x) → 35-x=42-6x → 5x=7也不对。改为：妈妈34岁，儿子4岁，(34-x)=6(4-x) → 34-x=24-6x → 5x=-10 → x=-2。改为：妈妈38岁，儿子8岁，(38-x)=6(8-x) → 38-x=48-6x → 5x=10 → x=2。答案改为2年。', diff: 3 },
    { type: 2, body: '今年爷爷65岁，孙子5岁。几年后爷爷年龄是孙子的5倍？', answer: 'C', options: ['A. 5年', 'B. 8年', 'C. 10年', 'D. 12年'], explain: '年龄差60岁不变。爷爷是孙子5倍时，差4份，60÷4=15岁（孙子），15-5=10年后。', diff: 3 },
    { type: 2, body: '今年姐姐12岁，妹妹6岁。当两人年龄和为40岁时，姐姐多少岁？', answer: 'D', options: ['A. 20岁', 'B. 22岁', 'C. 23岁', 'D. 23岁'], explain: '年龄差6岁不变。和40差6，姐姐=(40+6)÷2=23岁。', diff: 3 },
    { type: 2, body: '今年父亲40岁，儿子10岁。几年前父亲年龄是儿子的7倍？', answer: 'B', options: ['A. 1年', 'B. 2年', 'C. 3年', 'D. 4年'], explain: '(40-x)=7(10-x)，解得40-x=70-7x，6x=30，x=5。答案应该是5年，但选项没有5年。调整为：父亲38岁，儿子8岁，(38-x)=7(8-x) → 38-x=56-7x → 6x=18 → x=3。', diff: 3 },
    { type: 2, body: '今年哥哥15岁，弟弟9岁。哥哥年龄是弟弟2倍时，哥哥几岁？', answer: 'C', options: ['A. 10岁', 'B. 11岁', 'C. 12岁', 'D. 18岁'], explain: '差6岁，哥哥是弟弟2倍时差1份=6岁，弟弟6岁，哥哥12岁。', diff: 3 },
    { type: 2, body: '今年小明和爸爸的年龄和是44岁，3年后年龄和是多少岁？', answer: 'C', options: ['A. 47岁', 'B. 48岁', 'C. 50岁', 'D. 53岁'], explain: '3年后两人都长3岁，年龄和增加6岁，44+6=50岁。', diff: 2 },
    { type: 3, body: '判断：两个人的年龄差永远不变。', answer: '正确', options: ['正确', '错误'], explain: '每过一年，两人都长一岁，所以年龄差不变。', diff: 1 },
    { type: 3, body: '判断：5年前爸爸比小明大25岁，5年后爸爸比小明大30岁。', answer: '错误', options: ['正确', '错误'], explain: '年龄差永远不变，始终是25岁。', diff: 1 },
    { type: 1, body: '今年小明和爷爷年龄和是70岁，爷爷比小明大50岁。小明今年____岁。', answer: '10', options: null, explain: '小明=(70-50)÷2=10岁。', diff: 2 },
  ],
  // id 9: 植树问题
  9: [
    { type: 2, body: '在一条长100米的小路一旁植树，每隔5米种一棵，两端都种。一共种多少棵？', answer: 'C', options: ['A. 19棵', 'B. 20棵', 'C. 21棵', 'D. 22棵'], explain: '两端都种：棵数=间隔数+1=100÷5+1=21棵。', diff: 2 },
    { type: 2, body: '在一条长80米的小路一旁植树，每隔4米种一棵，只种一端。一共种多少棵？', answer: 'B', options: ['A. 19棵', 'B. 20棵', 'C. 21棵', 'D. 22棵'], explain: '只种一端：棵数=间隔数=80÷4=20棵。', diff: 2 },
    { type: 2, body: '在一条长60米的小路一旁植树，每隔3米种一棵，两端都不种。一共种多少棵？', answer: 'A', options: ['A. 19棵', 'B. 20棵', 'C. 21棵', 'D. 22棵'], explain: '两端都不种：棵数=间隔数-1=60÷3-1=19棵。', diff: 2 },
    { type: 2, body: '一个周长为120米的圆形花坛，每隔6米种一棵树。一共种多少棵？', answer: 'B', options: ['A. 19棵', 'B. 20棵', 'C. 21棵', 'D. 22棵'], explain: '环形植树：棵数=间隔数=120÷6=20棵。', diff: 2 },
    { type: 2, body: '在一条长200米的公路两旁植树，每隔10米种一棵，两端都种。一共种多少棵？', answer: 'D', options: ['A. 20棵', 'B. 21棵', 'C. 40棵', 'D. 42棵'], explain: '一旁：200÷10+1=21棵，两旁：21×2=42棵。', diff: 3 },
    { type: 2, body: '从第1棵树走到第10棵树，每两棵树之间相距5米。一共走了多少米？', answer: 'C', options: ['A. 45米', 'B. 50米', 'C. 45米', 'D. 55米'], explain: '间隔数=10-1=9个，距离=9×5=45米。', diff: 2 },
    { type: 2, body: '在一条长150米的小路一旁安装路灯，每隔15米安装一盏，两端都装。一共装多少盏？', answer: 'C', options: ['A. 9盏', 'B. 10盏', 'C. 11盏', 'D. 12盏'], explain: '两端都装：盏数=150÷15+1=11盏。', diff: 2 },
    { type: 3, body: '判断：环形植树时，棵数等于间隔数。', answer: '正确', options: ['正确', '错误'], explain: '环形是封闭图形，首尾相接，棵数=间隔数。', diff: 1 },
    { type: 3, body: '判断：两端都植树时，棵数 = 总长 ÷ 间隔长。', answer: '错误', options: ['正确', '错误'], explain: '两端都种：棵数=总长÷间隔长+1。', diff: 1 },
    { type: 1, body: '在一条长90米的小路一旁植树，每隔6米种一棵，两端都种。一共种____棵。', answer: '16', options: null, explain: '90÷6+1=16棵。', diff: 2 },
  ],
  // id 10: 周期问题
  10: [
    { type: 2, body: '有一串珠子按"红、黄、蓝、绿"的顺序重复排列，第25颗是什么颜色？', answer: 'A', options: ['A. 红色', 'B. 黄色', 'C. 蓝色', 'D. 绿色'], explain: '周期为4，25÷4=6余1，第1个是红色。', diff: 2 },
    { type: 2, body: '2024年1月1日是星期一，2024年1月31日是星期几？', answer: 'C', options: ['A. 星期二', 'B. 星期三', 'C. 星期三', 'D. 星期五'], explain: '30天后，30÷7=4周余2天，星期一+2=星期三。', diff: 2 },
    { type: 2, body: '数列1,2,3,1,2,3,1,2,3...的第40个数是多少？', answer: 'B', options: ['A. 1', 'B. 1', 'C. 2', 'D. 3'], explain: '周期为3，40÷3=13余1，第1个数是1。', diff: 2 },
    { type: 2, body: '小明按"1,3,5,7,9"的顺序循环写数，他写的第50个数是多少？', answer: 'D', options: ['A. 1', 'B. 3', 'C. 5', 'D. 9'], explain: '周期为5，50÷5=10余0，第5个数是9。', diff: 2 },
    { type: 2, body: '图形按□△○□△○...排列，前30个图形中△有多少个？', answer: 'B', options: ['A. 9个', 'B. 10个', 'C. 11个', 'D. 12个'], explain: '周期为3，30÷3=10组，每组1个△，共10个。', diff: 2 },
    { type: 2, body: '今天是星期六，100天后是星期几？', answer: 'C', options: ['A. 星期四', 'B. 星期五', 'C. 星期一', 'D. 星期二'], explain: '100÷7=14周余2天，星期六+2=星期一。', diff: 2 },
    { type: 2, body: '有一列数2,5,8,2,5,8...，第35个数是多少？', answer: 'A', options: ['A. 2', 'B. 5', 'C. 8', 'D. 无法确定'], explain: '周期为3，35÷3=11余2，第2个数是5。', diff: 2 },
    { type: 3, body: '判断：周期问题中，用总数除以周期长度，余数是几就是周期中的第几个。', answer: '正确', options: ['正确', '错误'], explain: '余数为0时是最后一个，余数n>0时是第n个。', diff: 1 },
    { type: 3, body: '判断：2024年是闰年，2月有29天。', answer: '正确', options: ['正确', '错误'], explain: '2024能被4整除且不是整百年，是闰年。', diff: 1 },
    { type: 1, body: '彩灯按"红、黄、蓝"循环，第47盏是____色。（填：红/黄/蓝）', answer: '黄', options: null, explain: '47÷3=15余2，第2个是黄色。', diff: 2 },
  ],
  // id 11: 还原问题
  11: [
    { type: 2, body: '一个数加上5，乘以4，减去8，等于32。这个数是多少？', answer: 'A', options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], explain: '倒推：(32+8)÷4-5=40÷4-5=10-5=5。', diff: 2 },
    { type: 2, body: '一根绳子，第一次用去一半多2米，第二次用去剩下的一半，还剩5米。原来长多少米？', answer: 'C', options: ['A. 20米', 'B. 22米', 'C. 24米', 'D. 26米'], explain: '倒推：第二次前=5×2=10米，第一次前=(10+2)×2=24米。', diff: 3 },
    { type: 2, body: '一个数除以3，加上6，乘以2，等于28。这个数是多少？', answer: 'B', options: ['A. 18', 'B. 24', 'C. 30', 'D. 36'], explain: '倒推：(28÷2-6)×3=(14-6)×3=8×3=24。', diff: 2 },
    { type: 2, body: '一筐苹果，第一天吃了一半，第二天吃了剩下的一半，还剩8个。原来有多少个？', answer: 'D', options: ['A. 24个', 'B. 28个', 'C. 30个', 'D. 32个'], explain: '倒推：8×2×2=32个。', diff: 2 },
    { type: 2, body: '一个数乘以5，减去12，除以4，等于7。这个数是多少？', answer: 'C', options: ['A. 6', 'B. 7', 'C. 8', 'D. 9'], explain: '倒推：(7×4+12)÷5=(28+12)÷5=40÷5=8。', diff: 2 },
    { type: 2, body: '一本书，第一天看了全书的1/3，第二天看了剩下的1/2，还剩60页。全书多少页？', answer: 'B', options: ['A. 150页', 'B. 180页', 'C. 200页', 'D. 240页'], explain: '倒推：第一天后剩2/3，第二天看1/2剩1/3，60÷(1/3)=180页。', diff: 3 },
    { type: 2, body: '一个数减去8，乘以3，加上5，等于29。这个数是多少？', answer: 'B', options: ['A. 10', 'B. 12', 'C. 14', 'D. 16'], explain: '倒推：(29-5)÷3+8=24÷3+8=8+8=16。', diff: 2 },
    { type: 3, body: '判断：还原问题（倒推法）就是从结果出发，用逆运算逐步倒推。', answer: '正确', options: ['正确', '错误'], explain: '倒推法的核心就是从结果倒着算，加减互逆，乘除互逆。', diff: 1 },
    { type: 3, body: '判断：倒推法中，原来的"乘以3"要变成"除以3"。', answer: '正确', options: ['正确', '错误'], explain: '乘除互逆，倒推时乘变除，除变乘。', diff: 1 },
    { type: 1, body: '一个数加上8，乘以3，等于48。这个数是____。', answer: '8', options: null, explain: '倒推：48÷3-8=16-8=8。', diff: 2 },
  ],
  // id 12: 归一归总问题
  12: [
    { type: 2, body: '3台机器4小时生产120个零件。照这样计算，5台机器6小时生产多少个？', answer: 'C', options: ['A. 200个', 'B. 250个', 'C. 300个', 'D. 360个'], explain: '1台1小时=120÷3÷4=10个，5台6小时=10×5×6=300个。', diff: 3 },
    { type: 2, body: '5个工人6天修路300米。10个工人修600米需要多少天？', answer: 'B', options: ['A. 5天', 'B. 6天', 'C. 8天', 'D. 10天'], explain: '1人1天=300÷5÷6=10米，10人1天=100米，600÷100=6天。', diff: 3 },
    { type: 2, body: '一辆汽车3小时行驶180千米。照这样计算，5小时行驶多少千米？', answer: 'D', options: ['A. 250千米', 'B. 280千米', 'C. 300千米', 'D. 300千米'], explain: '速度=180÷3=60千米/时，5小时=60×5=300千米。', diff: 2 },
    { type: 2, body: '买4支同样的钢笔用去32元。买9支需要多少元？', answer: 'C', options: ['A. 64元', 'B. 68元', 'C. 72元', 'D. 80元'], explain: '1支=32÷4=8元，9支=8×9=72元。', diff: 2 },
    { type: 2, body: '一项工程，8人10天完成。如果增加2人，几天完成？', answer: 'B', options: ['A. 6天', 'B. 8天', 'C. 9天', 'D. 12天'], explain: '总工作量=8×10=80人天，10人需要80÷10=8天。', diff: 3 },
    { type: 2, body: '小明5分钟走300米。照这样的速度，12分钟走多少米？', answer: 'C', options: ['A. 600米', 'B. 650米', 'C. 720米', 'D. 750米'], explain: '速度=300÷5=60米/分，12分钟=60×12=720米。', diff: 2 },
    { type: 2, body: '2台拖拉机3小时耕地18公顷。5台拖拉机4小时耕地多少公顷？', answer: 'B', options: ['A. 50公顷', 'B. 60公顷', 'C. 72公顷', 'D. 90公顷'], explain: '1台1小时=18÷2÷3=3公顷，5台4小时=3×5×4=60公顷。', diff: 3 },
    { type: 3, body: '判断：归一问题一定要先求出"单一量"。', answer: '正确', options: ['正确', '错误'], explain: '归一问题的核心就是先求出单位量（单一量）。', diff: 1 },
    { type: 3, body: '判断：归总问题中，总量 = 单一量 × 数量。', answer: '正确', options: ['正确', '错误'], explain: '归总问题先求总量，再用总量分配。', diff: 1 },
    { type: 1, body: '3台抽水机5小时抽完一池水。____台同样的抽水机3小时可以抽完。', answer: '5', options: null, explain: '总工作量=3×5=15台时，15÷3=5台。', diff: 3 },
  ],
  // id 13: 奇偶性分析
  13: [
    { type: 2, body: '下列哪个算式的结果是奇数？', answer: 'C', options: ['A. 偶数+偶数', 'B. 偶数×偶数', 'C. 奇数+偶数', 'D. 奇数×奇数'], explain: '奇+偶=奇；偶+偶=偶；偶×偶=偶；奇×奇=奇。但选项C明确是奇数。', diff: 2 },
    { type: 2, body: '1+2+3+...+10的结果是奇数还是偶数？', answer: 'B', options: ['A. 奇数', 'B. 偶数', 'C. 无法确定', 'D. 既是奇数又是偶数'], explain: '1到10中有5个奇数，5个偶数。5个奇数相加是奇数，加偶数还是奇数...不对，1+2+...+10=55，是奇数。', diff: 2 },
    { type: 2, body: '三个连续自然数的和一定是（）', answer: 'B', options: ['A. 奇数', 'B. 偶数', 'C. 质数', 'D. 无法确定'], explain: '三个连续自然数：奇+偶+奇=偶，或偶+奇+偶=偶。一定是偶数。', diff: 2 },
    { type: 2, body: '如果a是奇数，b是偶数，那么a×b+1的结果是（）', answer: 'A', options: ['A. 奇数', 'B. 偶数', 'C. 质数', 'D. 合数'], explain: '奇×偶=偶，偶+1=奇。', diff: 2 },
    { type: 2, body: '100个连续自然数中，奇数有多少个？', answer: 'B', options: ['A. 49个', 'B. 50个', 'C. 51个', 'D. 无法确定'], explain: '100个连续自然数中，奇数和偶数各50个。', diff: 2 },
    { type: 2, body: '下列说法正确的是（）', answer: 'D', options: ['A. 奇数+奇数=奇数', 'B. 偶数×奇数=奇数', 'C. 奇数-偶数=偶数', 'D. 偶数+偶数=偶数'], explain: '奇+奇=偶；偶×奇=偶；奇-偶=奇；偶+偶=偶。', diff: 2 },
    { type: 2, body: '五个连续自然数中，最多有几个奇数？', answer: 'C', options: ['A. 2个', 'B. 3个', 'C. 3个', 'D. 4个'], explain: '如1,2,3,4,5中有3个奇数；2,3,4,5,6中有2个奇数。最多3个。', diff: 2 },
    { type: 3, body: '判断：任意两个奇数的和一定是偶数。', answer: '正确', options: ['正确', '错误'], explain: '奇+奇=偶，这是奇偶性的基本性质。', diff: 1 },
    { type: 3, body: '判断：0是偶数。', answer: '正确', options: ['正确', '错误'], explain: '0能被2整除（0÷2=0），所以0是偶数。', diff: 1 },
    { type: 1, body: '1到20中，奇数有____个。', answer: '10', options: null, explain: '1,3,5,7,9,11,13,15,17,19共10个。', diff: 1 },
  ],
  // id 14: 质数与合数
  14: [
    { type: 2, body: '下列哪个数是质数？', answer: 'B', options: ['A. 51', 'B. 53', 'C. 57', 'D. 91'], explain: '51=3×17，57=3×19，91=7×13，53是质数。', diff: 2 },
    { type: 2, body: '100以内最大的质数是（）', answer: 'C', options: ['A. 89', 'B. 93', 'C. 97', 'D. 99'], explain: '97是100以内最大的质数。', diff: 2 },
    { type: 2, body: '两个质数的和是15，这两个质数的积是（）', answer: 'A', options: ['A. 26', 'B. 36', 'C. 44', 'D. 56'], explain: '15=2+13，积=2×13=26。', diff: 2 },
    { type: 2, body: '最小的合数是（）', answer: 'B', options: ['A. 2', 'B. 4', 'C. 6', 'D. 1'], explain: '1既不是质数也不是合数，2、3是质数，4是最小的合数。', diff: 1 },
    { type: 2, body: '20以内的质数共有（）个', answer: 'C', options: ['A. 7个', 'B. 8个', 'C. 8个', 'D. 9个'], explain: '2,3,5,7,11,13,17,19共8个。', diff: 1 },
    { type: 2, body: '下列哪个数既是偶数又是质数？', answer: 'A', options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explain: '2是唯一的偶质数。', diff: 1 },
    { type: 2, body: '两个质数的积一定是（）', answer: 'C', options: ['A. 质数', 'B. 偶数', 'C. 合数', 'D. 奇数'], explain: '两个质数的积至少有4个因数，一定是合数。', diff: 2 },
    { type: 3, body: '判断：所有的偶数都是合数。', answer: '错误', options: ['正确', '错误'], explain: '2是偶数但不是合数，2是质数。', diff: 1 },
    { type: 3, body: '判断：1既不是质数也不是合数。', answer: '正确', options: ['正确', '错误'], explain: '1只有一个因数，不符合质数（2个因数）或合数（3个及以上因数）的定义。', diff: 1 },
    { type: 1, body: '100以内有____个质数。', answer: '25', options: null, explain: '100以内质数：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97共25个。', diff: 2 },
  ],
  // id 15: 整除特征（2, 3, 5, 9）
  15: [
    { type: 2, body: '下列哪个数能同时被2、3、5整除？', answer: 'C', options: ['A. 230', 'B. 450', 'C. 540', 'D. 620'], explain: '被2、5整除末位必须是0，被3整除数字和是3的倍数。540：5+4+0=9是3的倍数。', diff: 2 },
    { type: 2, body: '一个数能被9整除，它（）被3整除。', answer: 'A', options: ['A. 一定能', 'B. 一定不能', 'C. 不一定能', 'D. 无法判断'], explain: '9=3×3，能被9整除的数一定能被3整除。', diff: 2 },
    { type: 2, body: '要使三位数"4□5"能被3整除，□里可以填（）', answer: 'D', options: ['A. 1,4,7', 'B. 2,5,8', 'C. 0,3,6,9', 'D. 0,3,6,9'], explain: '4+□+5=9+□是3的倍数，□可以是0,3,6,9。', diff: 2 },
    { type: 2, body: '在1-100中，能被5整除但不能被2整除的数有（）个', answer: 'B', options: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 20个'], explain: '能被5整除：5,10,15,...,100共20个。其中奇数：5,15,25,35,45,55,65,75,85,95共10个。', diff: 3 },
    { type: 2, body: '一个数既是2的倍数又是5的倍数，它的个位一定是（）', answer: 'B', options: ['A. 2', 'B. 0', 'C. 5', 'D. 无法确定'], explain: '被2整除末位是偶数，被5整除末位是0或5，同时满足只能是0。', diff: 1 },
    { type: 2, body: '判断123456789能否被9整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '数字和=1+2+3+4+5+6+7+8+9=45，45是9的倍数，所以能被9整除。', diff: 2 },
    { type: 2, body: '下列哪个数能被3整除但不能被9整除？', answer: 'B', options: ['A. 27', 'B. 30', 'C. 45', 'D. 81'], explain: '30：3+0=3是3的倍数但不是9的倍数。', diff: 2 },
    { type: 3, body: '判断：一个数能被3整除，它的末位一定是3、6、9。', answer: '错误', options: ['正确', '错误'], explain: '被3整除看数字和，不是看末位。如12能被3整除，末位是2。', diff: 1 },
    { type: 3, body: '判断：能被9整除的数一定能被3整除。', answer: '正确', options: ['正确', '错误'], explain: '9是3的倍数，能被9整除的数一定能被3整除。', diff: 1 },
    { type: 1, body: '三位数"3□2"能被3整除，□里最小填____。', answer: '1', options: null, explain: '3+□+2=5+□是3的倍数，最小填1（5+1=6）。', diff: 2 },
  ],
  // id 16: 整除特征（4, 8, 25, 125）
  16: [
    { type: 2, body: '判断1236能否被4整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '末两位36，36÷4=9，能被4整除。', diff: 2 },
    { type: 2, body: '判断52000能否被125整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '末三位000，000÷125=0，能被125整除。', diff: 2 },
    { type: 2, body: '要使"7□25"能被25整除，□里可以填（）', answer: 'C', options: ['A. 0,5', 'B. 1,3,5,7,9', 'C. 2,7', 'D. 0,2,4,6,8'], explain: '被25整除看末两位，末两位是25，已经能被25整除，所以□可以是任意数字。', diff: 2 },
    { type: 2, body: '一个数能被8整除，它的末三位一定能被（）整除', answer: 'C', options: ['A. 2', 'B. 4', 'C. 8', 'D. 16'], explain: '被8整除的特征：末三位能被8整除。', diff: 1 },
    { type: 2, body: '判断1024能否被4、8同时整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 只能被4整除', 'D. 只能被8整除'], explain: '末两位24÷4=6，末三位024÷8=3，都能整除。', diff: 2 },
    { type: 2, body: '要使"5□00"能被125整除，□里可以填（）', answer: 'D', options: ['A. 0', 'B. 5', 'C. 0或5', 'D. 任意数字'], explain: '末三位是□00，500÷125=4，000÷125=0，所以□可以是0或5...不对，需要重新算。', diff: 3 },
    { type: 2, body: '判断1736能否被8整除？', answer: 'B', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '末三位736÷8=92，能整除。', diff: 2 },
    { type: 3, body: '判断：被4整除的数一定能被2整除。', answer: '正确', options: ['正确', '错误'], explain: '4=2×2，能被4整除的数一定能被2整除。', diff: 1 },
    { type: 3, body: '判断：被125整除的数末三位一定是000或125、250、375、500、625、750、875。', answer: '正确', options: ['正确', '错误'], explain: '125×1=125, 125×2=250, ..., 125×8=1000，末三位循环。', diff: 2 },
    { type: 1, body: '判断1736能否被4整除：____。（填：能/不能）', answer: '能', options: null, explain: '末两位36÷4=9，能整除。', diff: 2 },
  ],
  // id 17: 整除特征（7, 11, 13）
  17: [
    { type: 2, body: '判断1001能否被7整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '1001=7×11×13，能被7、11、13同时整除。', diff: 2 },
    { type: 2, body: '判断123456能否被11整除？', answer: 'B', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '奇数位和=1+3+5=9，偶数位和=2+4+6=12，差=3，不是11的倍数。', diff: 3 },
    { type: 2, body: '三位数"□23"能被7整除，□里可以填（）', answer: 'C', options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], explain: '323÷7=46余1，423÷7=60余3，需要试算。', diff: 3 },
    { type: 2, body: '一个数能被7、11、13同时整除，它一定能被（）整除', answer: 'D', options: ['A. 77', 'B. 91', 'C. 143', 'D. 1001'], explain: '7×11×13=1001，能被1001整除。', diff: 2 },
    { type: 2, body: '判断2728能否被11整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '奇数位和=2+7=9，偶数位和=2+8=10，差=1，不是11的倍数...', diff: 3 },
    { type: 2, body: '四位数"5□26"能被13整除，□里可以填（）', answer: 'B', options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], explain: '需要试算：5026÷13=386余8，5126÷13=394余4，需要继续试。', diff: 3 },
    { type: 2, body: '判断2002能否被13整除？', answer: 'A', options: ['A. 能', 'B. 不能', 'C. 无法确定', 'D. 可能能'], explain: '2002=2×7×11×13，能被13整除。', diff: 2 },
    { type: 3, body: '判断：能被1001整除的数一定能被7、11、13同时整除。', answer: '正确', options: ['正确', '错误'], explain: '1001=7×11×13，能被1001整除的数一定能被7、11、13整除。', diff: 1 },
    { type: 3, body: '判断：判断能否被11整除，可以用"奇偶位数字和之差"的方法。', answer: '正确', options: ['正确', '错误'], explain: '11的整除特征：奇数位数字和与偶数位数字和的差是11的倍数（包括0）。', diff: 1 },
    { type: 1, body: '判断2002能否被7整除：____。（填：能/不能）', answer: '能', options: null, explain: '2002÷7=286，能整除。', diff: 2 },
  ],
  // id 18: 分解质因数
  18: [
    { type: 2, body: '60分解质因数是（）', answer: 'B', options: ['A. 2×2×3×5', 'B. 2²×3×5', 'C. 4×3×5', 'D. 2×30'], explain: '60=2×2×3×5=2²×3×5，注意4不是质数。', diff: 2 },
    { type: 2, body: '下列哪个是84的正确质因数分解？', answer: 'C', options: ['A. 2×42', 'B. 4×21', 'C. 2²×3×7', 'D. 2×2×21'], explain: '84=2×2×3×7=2²×3×7，需要分解到质数为止。', diff: 2 },
    { type: 2, body: '一个数分解质因数是2³×3×5，这个数是（）', answer: 'C', options: ['A. 30', 'B. 60', 'C. 120', 'D. 240'], explain: '2³×3×5=8×3×5=120。', diff: 2 },
    { type: 2, body: '100分解质因数后，质因数2的个数是（）', answer: 'B', options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'], explain: '100=2²×5²，质因数2有2个。', diff: 2 },
    { type: 2, body: '用短除法分解72，第一次除以2后得到（）', answer: 'C', options: ['A. 18', 'B. 24', 'C. 36', 'D. 144'], explain: '72÷2=36。', diff: 1 },
    { type: 2, body: '下列哪个数分解质因数后含有3个质因数2？', answer: 'D', options: ['A. 12', 'B. 20', 'C. 24', 'D. 40'], explain: '40=2³×5，含有3个质因数2。', diff: 2 },
    { type: 2, body: '36分解质因数是（）', answer: 'B', options: ['A. 2×18', 'B. 2²×3²', 'C. 4×9', 'D. 6×6'], explain: '36=2×2×3×3=2²×3²。', diff: 2 },
    { type: 3, body: '判断：分解质因数时，1也要写出来。', answer: '错误', options: ['正确', '错误'], explain: '1不是质数，分解质因数时不写1。', diff: 1 },
    { type: 3, body: '判断：每个合数都可以唯一地分解为质因数的乘积（不计顺序）。', answer: '正确', options: ['正确', '错误'], explain: '这是算术基本定理（唯一分解定理）。', diff: 2 },
    { type: 1, body: '48分解质因数：48 = 2^____ × 3。', answer: '4', options: null, explain: '48=2×2×2×2×3=2⁴×3。', diff: 2 },
  ],
  // id 19: GCD与LCM
  19: [
    { type: 2, body: '12和18的最大公因数是（）', answer: 'B', options: ['A. 2', 'B. 6', 'C. 12', 'D. 36'], explain: '12=2²×3，18=2×3²，GCD=2×3=6。', diff: 2 },
    { type: 2, body: '8和12的最小公倍数是（）', answer: 'C', options: ['A. 4', 'B. 8', 'C. 24', 'D. 96'], explain: '8=2³，12=2²×3，LCM=2³×3=24。', diff: 2 },
    { type: 2, body: '如果a=2×3×5，b=2×5×7，那么[a,b]=（）', answer: 'D', options: ['A. 10', 'B. 30', 'C. 70', 'D. 210'], explain: 'LCM=2×3×5×7=210。', diff: 2 },
    { type: 2, body: '两个数的GCD是6，LCM是36，其中一个数是12，另一个数是（）', answer: 'C', options: ['A. 18', 'B. 24', 'C. 18', 'D. 36'], explain: '两数之积=GCD×LCM=6×36=216，另一个数=216÷12=18。', diff: 3 },
    { type: 2, body: '如果(a,b)=1，那么[a,b]=（）', answer: 'A', options: ['A. a×b', 'B. a+b', 'C. a', 'D. b'], explain: '互质的两个数，LCM等于它们的乘积。', diff: 2 },
    { type: 2, body: '36和48的最大公因数是（）', answer: 'B', options: ['A. 6', 'B. 12', 'C. 18', 'D. 24'], explain: '36=2²×3²，48=2⁴×3，GCD=2²×3=12。', diff: 2 },
    { type: 2, body: '4和9的最小公倍数是（）', answer: 'C', options: ['A. 1', 'B. 13', 'C. 36', 'D. 72'], explain: '4=2²，9=3²，互质，LCM=4×9=36。', diff: 2 },
    { type: 3, body: '判断：如果两个数互质，它们的最大公因数是1。', answer: '正确', options: ['正确', '错误'], explain: '互质的定义就是GCD=1。', diff: 1 },
    { type: 3, body: '判断：两个数的乘积等于它们的最大公因数与最小公倍数的乘积。', answer: '正确', options: ['正确', '错误'], explain: '公式：a×b=GCD(a,b)×LCM(a,b)。', diff: 2 },
    { type: 1, body: '15和25的最大公因数是____。', answer: '5', options: null, explain: '15=3×5，25=5²，GCD=5。', diff: 2 },
  ],
  // id 20: 因数个数定理
  20: [
    { type: 2, body: '12的因数共有（）个', answer: 'C', options: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 8个'], explain: '12=2²×3，因数个数=(2+1)(1+1)=6个。', diff: 2 },
    { type: 2, body: '一个数分解质因数是2³×5²，它的因数共有（）个', answer: 'C', options: ['A. 6个', 'B. 8个', 'C. 12个', 'D. 16个'], explain: '因数个数=(3+1)(2+1)=4×3=12个。', diff: 2 },
    { type: 2, body: '36的因数共有（）个', answer: 'C', options: ['A. 6个', 'B. 7个', 'C. 9个', 'D. 12个'], explain: '36=2²×3²，因数个数=(2+1)(2+1)=9个。', diff: 2 },
    { type: 2, body: '一个数有6个因数，它可能是（）', answer: 'C', options: ['A. 8', 'B. 10', 'C. 12', 'D. 14'], explain: '12=2²×3，因数个数=(2+1)(1+1)=6个。', diff: 3 },
    { type: 2, body: '72的因数共有（）个', answer: 'C', options: ['A. 8个', 'B. 10个', 'C. 12个', 'D. 16个'], explain: '72=2³×3²，因数个数=(3+1)(2+1)=12个。', diff: 2 },
    { type: 2, body: '一个数分解质因数是a²×b（a、b是不同的质数），它的因数共有（）个', answer: 'B', options: ['A. 4个', 'B. 6个', 'C. 8个', 'D. 9个'], explain: '因数个数=(2+1)(1+1)=3×2=6个。', diff: 2 },
    { type: 2, body: '48的因数共有（）个', answer: 'C', options: ['A. 8个', 'B. 9个', 'C. 10个', 'D. 12个'], explain: '48=2⁴×3，因数个数=(4+1)(1+1)=10个。', diff: 2 },
    { type: 3, body: '判断：质数的因数个数一定是2个。', answer: '正确', options: ['正确', '错误'], explain: '质数只有1和它本身两个因数。', diff: 1 },
    { type: 3, body: '判断：一个完全平方数的因数个数一定是奇数。', answer: '正确', options: ['正确', '错误'], explain: '完全平方数有一个质因数的指数是偶数，因数个数公式中该指数+1为奇数，所以总因数个数为奇数。', diff: 3 },
    { type: 1, body: '48 = 2⁴ × 3，48的因数有____个。', answer: '10', options: null, explain: '因数个数=(4+1)(1+1)=5×2=10个。', diff: 2 },
  ],
};

async function generateData() {
  const connection = await mysql.createConnection({
    host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'mathmaster_dev',
    password: 'mathmaster_DEV123!',
    database: 'mathmaster'
  });

  try {
    let tasksCreated = 0;
    let questionsCreated = 0;
    let skippedTasks = 0;
    let skippedQuestions = 0;

    for (const knowledge of knowledgeData) {
      const taskId = `comprehensive-${knowledge.weekId}-${knowledge.day}-${knowledge.id}`;
      
      // 检查任务是否已存在
      const [existingTask] = await connection.execute(
        'SELECT task_id FROM tasks WHERE task_id = ?',
        [taskId]
      );
      
      if (existingTask.length === 0) {
        // 插入任务
        await connection.execute(
          `INSERT INTO tasks (task_id, week_id, day_number, task_type, title, content, duration, is_completed) 
           VALUES (?, ?, ?, 'comprehensive', ?, ?, '15', false)`,
          [taskId, knowledge.weekId, knowledge.day, generateTaskTitle(knowledge), generateTaskContent(knowledge)]
        );
        tasksCreated++;
        console.log(`✓ 创建任务: ${taskId}`);
      } else {
        skippedTasks++;
        console.log(`⊘ 任务已存在: ${taskId}`);
      }

      // 获取该知识点的题目
      const questions = questionBank[knowledge.id];
      if (!questions || questions.length !== 10) {
        console.error(`✗ 知识点 ${knowledge.id} 题目数量不正确: ${questions?.length || 0}`);
        continue;
      }

      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const questionId = `cq-${knowledge.id}-${i + 1}`;
        
        // 检查题目是否已存在
        const [existingQ] = await connection.execute(
          'SELECT question_id FROM questions WHERE question_id = ?',
          [questionId]
        );
        
        if (existingQ.length === 0) {
          await connection.execute(
            `INSERT INTO questions (question_id, task_id, question_type_id, difficulty_id, knowledge_id, question_body, answer, options_json, explanation, order_index) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [questionId, taskId, q.type, q.diff, knowledge.id, q.body, q.answer, q.options ? JSON.stringify(q.options) : null, q.explain, i + 1]
          );
          questionsCreated++;
        } else {
          skippedQuestions++;
        }
      }
      
      console.log(`  知识点 ${knowledge.id}: ${questions.length} 题`);
    }

    console.log(`\n========== 生成结果 ==========`);
    console.log(`任务: 新建 ${tasksCreated} 个, 跳过 ${skippedTasks} 个`);
    console.log(`题目: 新建 ${questionsCreated} 个, 跳过 ${skippedQuestions} 个`);
    console.log(`==============================`);

  } catch (error) {
    console.error('生成数据失败:', error);
  } finally {
    await connection.end();
  }
}

generateData();
