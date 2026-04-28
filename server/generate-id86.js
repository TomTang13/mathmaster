const mysql = require('mysql2/promise');

const knowledge86Questions = [
  { question_body: "甲、乙两人轮流报数，规定从1开始，每次报1-3个数，谁报到30谁获胜。甲先报，甲的必胜策略是？", answer: "B", options_json: ["A. 先报1个数", "B. 先报2个数", "C. 先报3个数", "D. 让乙先报"], explanation: "30÷(1+3)=7余2，所以甲先报2个数，之后每次报与乙加起来等于4的数", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有一堆45根的火柴，甲、乙两人轮流取，每次只能取1-5根，取到最后一根的人获胜。若甲先取，甲怎样才能获胜？", answer: "C", options_json: ["A. 先取5根", "B. 先取4根", "C. 先取1根", "D. 先取3根"], explanation: "45÷(1+5)=7余3，甲先取3根，之后与乙取的和为6", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "甲、乙两人玩游戏，有54张牌，两人轮流取牌，每次只能取1-4张，取到最后一张牌的人输。若甲先取，甲的必胜策略是？", answer: "D", options_json: ["A. 先取1张", "B. 先取2张", "C. 先取3张", "D. 先取2张"], explanation: "取到最后一张输，需要控制局面，54÷(1+4)=10余4", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "在一个3×3的棋盘上，甲、乙轮流放棋子（棋子不能重叠），谁先放不下棋子谁输。甲先放，甲的必胜策略是？", answer: "A", options_json: ["A. 先放中心", "B. 先放角上", "C. 先放边上", "D. 没有必胜策略"], explanation: "先放中心后，可以对称放置，保持策略性对称，乙放哪里甲就在对称位置放", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "甲、乙两人做游戏，轮流在圆桌上放硬币，硬币不能重叠，后放不下硬币的人输。甲先放，甲的必胜策略是？", answer: "B", options_json: ["A. 放在正中间", "B. 放在正中间", "C. 放在边缘", "D. 没有必胜策略"], explanation: "先放圆桌正中间，之后总能把硬币放在乙硬币的对称位置", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有100根火柴，两人轮流取，每次只能取1、2或4根，取到最后一根的人获胜。甲先取，甲的必胜策略是？", answer: "C", options_json: ["A. 先取1根", "B. 先取2根", "C. 先取1根", "D. 先取4根"], explanation: "需要分析(1,2,4)的获胜局面", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人玩游戏，从13根火柴中轮流取走1-3根，取到最后一根的人获胜。乙说他能必胜，乙的策略是？", answer: "A", options_json: ["A. 让甲先取", "B. 甲先取1根时取2根", "C. 甲先取2根时取1根", "D. 甲先取3根时取1根"], explanation: "13÷(1+3)=3余1，所以后取的人有必胜策略", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有一盒棋子54颗，甲、乙轮流取，每次最多取6颗，取到最后一颗的人输。甲先取，甲怎样才能获胜？", answer: "D", options_json: ["A. 先取6颗", "B. 先取5颗", "C. 先取4颗", "D. 先取6颗"], explanation: "最后1颗输，需要控制局面，(54-1)÷(1+6)=7余4", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人在纸上轮流写数字，规定不能写已经被写过的数字，写到50为止。谁写的数字之和为奇数谁赢，甲先写，甲的必胜策略是？", answer: "B", options_json: ["A. 写奇数", "B. 先写奇数", "C. 先写偶数", "D. 没有必胜策略"], explanation: "数字之和奇偶性与选择策略有关", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "在围棋棋盘（19×19）上，甲、乙轮流在交叉点上放棋子，后放不下棋子的人输。甲先放，甲的必胜策略是？", answer: "C", options_json: ["A. 先放角上", "B. 先放边上", "C. 先放中心", "D. 没有必胜策略"], explanation: "先放中心点，然后对称乙的位置放置", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "甲、乙两人轮流从1开始报数，每次可以报1个或2个连续整数，谁报到30谁输。甲先报，甲的必胜策略是？", answer: "A", options_json: ["A. 先报1", "B. 先报2", "C. 先报连续两个", "D. 没有必胜策略"], explanation: "报数游戏需分析输赢局面", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "有一堆石子数量为31，甲、乙轮流取，每次可以取走1个、3个或4个，取到最后1个的人输。甲先取，甲的必胜策略是？", answer: "D", options_json: ["A. 先取1个", "B. 先取3个", "C. 先取4个", "D. 先取3个"], explanation: "需要计算输赢局面分析", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人玩取火柴游戏，共21根，轮流取1-4根，取到最后一根者输。甲先取，甲应怎么取？", answer: "B", options_json: ["A. 先取1根", "B. 先取1根", "C. 先取2根", "D. 先取3根"], explanation: "取到最后1根输，先取1根后保持总和为5的倍数", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "甲、乙两人在5×5的棋盘上轮流画叉(X)，谁先画出3个连续成一排（横、竖或斜）谁赢。甲先画，甲的必胜策略是？", answer: "C", options_json: ["A. 画中心", "B. 画角", "C. 画中心或角", "D. 没有必胜策略"], explanation: "5×5棋盘画三子棋先手没有必胜但可保持不败", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有一堆火柴共28根，甲、乙轮流取，每次取1-6根，取到最后1根的人输。甲先取，甲应先取______根才能获胜。", answer: "D", options_json: ["A. 1根", "B. 2根", "C. 3根", "D. 1根"], explanation: "取到最后1根输，需要保持某种规律", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "甲、乙两人玩游戏，从75中轮流减去1-10中的任意数，谁得到0谁赢。甲先算，甲的必胜策略是？", answer: "A", options_json: ["A. 先减6", "B. 先减5", "C. 先减4", "D. 先减10"], explanation: "75÷(1+10)=6余9，先减9不对，分析余数", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人在1-9的卡片中轮流取牌（不放回），谁先得到3张和为15的牌谁赢。甲先取，甲的必胜策略是？", answer: "B", options_json: ["A. 先取5", "B. 先取5", "C. 先取6", "D. 先取4"], explanation: "类似井字棋，先手取5占据中心，后手难以形成必胜", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "有一堆火柴100根，甲、乙轮流取，每次取1根或整数的2次方根（1、4、9、16...），取到最后一根的人输。甲先取，甲的必胜策略是？", answer: "C", options_json: ["A. 先取1根", "B. 先取4根", "C. 先取4根", "D. 先取9根"], explanation: "分析完全平方数和其他数的胜负关系", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙玩 Nim 游戏，有三堆火柴分别是3、5、7根，两人轮流从一堆中取任意根，取到最后一根的人赢。甲先取，甲的必胜策略是？", answer: "D", options_json: ["A. 从3根堆取2根", "B. 从5根堆取3根", "C. 从7根堆取4根", "D. 让三堆变成2、5、7"], explanation: "Nim游戏中，异或和为0是必胜局面", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人轮流写下不超过10的正整数，写的数字不能是前面已写数字的因数，写到50为止。最后一个写数的人赢。甲先写，甲的必胜策略是？", answer: "A", options_json: ["A. 先写6", "B. 先写7", "C. 先写8", "D. 先写10"], explanation: "控制局面，使每次写的数成为关键", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "有50个石子，甲、乙轮流取，第一次可以取1-5个，之后每次可以取的数量不能超过上一次取的2倍。取到最后一颗的人赢。甲先取，甲应先取______颗。", answer: "B", options_json: ["A. 1颗", "B. 2颗", "C. 3颗", "D. 4颗"], explanation: "需要考虑限制条件下的必胜策略", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙两人在圆桌上放硬币（硬币大小相同），不能重叠，后放不下的人输。甲先放，甲的必胜策略是？", answer: "A", options_json: ["A. 先放中心", "B. 先放边缘", "C. 随便放", "D. 让乙先放"], explanation: "对称策略：先放中心，之后放在乙硬币关于圆心的对称位置", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有一盒棋子100颗，甲、乙轮流取，第一次取1-10颗，之后每次取的颗数不能少于上一次的一半且不能超过上一次的2倍。取到最后1颗的人输。甲先取，甲的必胜策略是？", answer: "C", options_json: ["A. 先取5颗", "B. 先取6颗", "C. 先取5颗", "D. 先取10颗"], explanation: "分析限制条件下输赢规律", knowledge_id: 86, question_type_id: 2, difficulty_id: 4 },
  { question_body: "甲、乙玩'抢30'游戏，从1开始轮流报数，每次可以报1-3个数，谁报到30谁赢。甲先报，甲的必胜策略是？", answer: "B", options_json: ["A. 先报1", "B. 先报2", "C. 先报3", "D. 没有必胜策略"], explanation: "30÷(1+3)=7余2，甲先报2，之后保持每轮和为4", knowledge_id: 86, question_type_id: 2, difficulty_id: 3 },

  { question_body: "在取火柴游戏中，若每轮两人取的总数保持不变（如每轮取1-3根），则后手有必胜策略。", answer: "正确", options_json: ["正确", "错误"], explanation: "当总数是每轮最大取数的整数倍时，后手可以控制每轮和为定值", knowledge_id: 86, question_type_id: 3, difficulty_id: 2 },
  { question_body: "在'抢30'游戏中，若规则是报到30输，则先手必胜的策略与报到30赢的策略相同。", answer: "错误", options_json: ["正确", "错误"], explanation: "报到输和报到赢的必胜策略不同，需要转换思路", knowledge_id: 86, question_type_id: 3, difficulty_id: 2 },
  { question_body: "在棋盘对称游戏中，先手占据中心点后采取对称策略，可以保证立于不败之地。", answer: "正确", options_json: ["正确", "错误"], explanation: "当游戏规则允许对称策略时，先手占据中心可保持不败", knowledge_id: 86, question_type_id: 3, difficulty_id: 2 },
  { question_body: "Nim游戏中，三堆石子若异或和为0，则是必胜局面。", answer: "正确", options_json: ["正确", "错误"], explanation: "Nim游戏中，异或和为0是必败局面（对先手而言），异或和不为0是必胜局面", knowledge_id: 86, question_type_id: 3, difficulty_id: 3 },
  { question_body: "甲、乙玩报数游戏，从1报到n，每次报1-k个数，若(n-1)能被(k+1)整除，则后手有必胜策略。", answer: "错误", options_json: ["正确", "错误"], explanation: "若(n)能被(k+1)整除，则后手有必胜策略；(n-1)能被整除时先手有必胜策略", knowledge_id: 86, question_type_id: 3, difficulty_id: 3 },
  { question_body: "在有对称性的游戏（如圆桌放硬币）中，先手采取中心对称策略可保不败。", answer: "正确", options_json: ["正确", "错误"], explanation: "先手占据中心后，对称策略确保后手总有位置可放", knowledge_id: 86, question_type_id: 3, difficulty_id: 2 },

  { question_body: "甲、乙玩'抢30'游戏，从1开始报数，每次报1-3个数，30÷(1+3)=7余______，所以先报2的人必胜。", answer: "2", options_json: null, explanation: "余数决定先手需要报的数", knowledge_id: 86, question_type_id: 1, difficulty_id: 2 },
  { question_body: "有一堆火柴共50根，甲、乙轮流取1-6根，取到最后一根的人输。甲先取，要确保获胜，甲先应取______根。", answer: "1", options_json: null, explanation: "50÷(1+6)=7余1，后手有必胜策略，所以先取1根", knowledge_id: 86, question_type_id: 1, difficulty_id: 3 },
  { question_body: "甲、乙在3×3棋盘上玩画圈游戏，甲先画，乙后画，画到不能再画为止，最后画的人赢。甲应画在______位置最好。", answer: "中心", options_json: null, explanation: "中心位置能形成最多的后续选择", knowledge_id: 86, question_type_id: 1, difficulty_id: 3 },
  { question_body: "在Nim游戏中有三堆石子3、5、7，3⊕5⊕7=______（⊕表示异或），不为0所以先手______（有/没有）必胜策略。", answer: "1", options_json: null, explanation: "3⊕5⊕7=1，不为0说明先手处于必胜局面", knowledge_id: 86, question_type_id: 1, difficulty_id: 3 },
  { question_body: "有一盒棋子80颗，甲、乙轮流取，每次取1-7颗，取到最后一颗的人赢。甲先取，甲应先取______颗才能获胜。", answer: "1", options_json: null, explanation: "80÷(1+7)=10余0，后手有必胜策略，先手无论如何取都会输", knowledge_id: 86, question_type_id: 1, difficulty_id: 4 },
  { question_body: "甲、乙玩'抢30'游戏（报到30输），甲先报。30是偶数，若每轮和保持为______，甲就必胜。", answer: "4", options_json: null, explanation: "每轮和为4，30不能被4整除，先手需要报2，之后保持和为4", knowledge_id: 86, question_type_id: 1, difficulty_id: 3 },
  { question_body: "有火柴23根，甲、乙轮流取1-4根，取到最后1根输。甲先取，甲第一次应该取______根。", answer: "2", options_json: null, explanation: "23÷(1+4)=4余3，甲先取3...不对，23÷5=4余3，先取3才能控制", knowledge_id: 86, question_type_id: 1, difficulty_id: 4 },
  { question_body: "在圆桌上放硬币游戏中，硬币半径为R，圆桌半径为2R，先放的人应放在______位置。", answer: "正中间", options_json: null, explanation: "先放中心，然后采取对称策略", knowledge_id: 86, question_type_id: 1, difficulty_id: 3 },
  { question_body: "甲、乙轮流从1开始报数，每次报1-2个数，报到100赢。甲想赢应先报______。", answer: "1", options_json: null, explanation: "100÷(1+2)=33余1，甲先报1，之后保持每轮和为3", knowledge_id: 86, question_type_id: 1, difficulty_id: 2 },
  { question_body: "有一堆火柴30根，甲、乙轮流取，每次取1、3或4根，取到最后一根的人输。甲先取，甲的必胜策略是先取______根。", answer: "1", options_json: null, explanation: "分析(1,3,4)游戏的输赢规律", knowledge_id: 86, question_type_id: 1, difficulty_id: 4 }
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
    for (const q of knowledge86Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点86游戏与策略完成，插入 ${knowledge86Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();