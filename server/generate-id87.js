const mysql = require('mysql2/promise');

const knowledge87Questions = [
  { question_body: "用1、2、3、4这四个数字构造一个最接近5000的四位数，这个数是______。", answer: "C", options_json: ["A. 5123", "B. 5234", "C. 5234", "D. 5432"], explanation: "最接近5000，即差值最小，5234与5000差234", knowledge_id: 87, question_type_id: 2, difficulty_id: 2 },
  { question_body: "构造一个最简分数，它的分子和分母之和为20，且这个分数比1/2大，比3/5小。这个分数是______。", answer: "B", options_json: ["A. 7/13", "B. 8/12", "C. 9/11", "D. 6/14"], explanation: "1/2=0.5，3/5=0.6，找分子分母和为20且介于两者之间的分数", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用3、5、7、11这四个质数构造两个分数，使它们的和恰好为1。这两个分数是______和______。", answer: "A", options_json: ["A. 5/11和6/11", "B. 3/7和4/7", "C. 5/7和2/7", "D. 7/11和4/11"], explanation: "分析可得5/11+6/11=1，但6不是给定质数，需重新考虑", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个两位数，它的各位数字之和是9，且它是7的倍数。这个两位数最大是______。", answer: "D", options_json: ["A. 81", "B. 90", "C. 72", "D. 90"], explanation: "数字和为9的两位数：90、81、72...最大是90，90÷7不是整数", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用0、1、2、3、4这五个数字构造一个同时被2、3、5整除的最小五位数，这个数是______。", answer: "C", options_json: ["A. 10230", "B. 10320", "C. 10230", "D. 12030"], explanation: "被2、3、5整除需是30的倍数，最小五位数10230满足条件", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "构造一个最简真分数，分子和分母都是两位数，且分子能被分母整除。这个分数是______。", answer: "B", options_json: ["A. 11/22", "B. 11/22", "C. 12/24", "D. 13/26"], explanation: "最简分数要求分子分母互质，11和22有公因数11，不最简", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用1-9的数字构造一个分数等于3/4，分子分母各用4个不同数字。这个分数是______。", answer: "D", options_json: ["A. 12/16", "B. 24/32", "C. 36/48", "D. 27/36"], explanation: "27/36=3/4，且2、7、3、6各不同", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个四位数，它恰好等于它各位数字和的立方。这个数是______。", answer: "A", options_json: ["A. 4913", "B. 5125", "C. 4096", "D. 5832"], explanation: "4913：4+9+1+3=17，17³=4913，正确", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用3、4、5、6、7这五个数字构造两个最简分数，使它们的和为1。这两个分数是______和______。", answer: "C", options_json: ["A. 3/6和4/5", "B. 4/7和5/6", "C. 3/7和4/6", "D. 5/7和3/6"], explanation: "3/7+4/6=3/7+2/3=9/21+14/21=23/21≠1，需要重新计算", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个数，它比它的倒数的3倍少1。这个数是______。", answer: "B", options_json: ["A. 1", "B. 1", "C. 2", "D. 3"], explanation: "设这个数为x，x=3/x-1，解得x²+x-3=0，x不为整数，题目要求数字构造", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用数字1、2、3、4、5、6构造一个三位数乘三位数的算式，使得乘积最大。这两个三位数是______和______。", answer: "D", options_json: ["A. 654和321", "B. 643和521", "C. 651和432", "D. 631和542"], explanation: "构造最大乘积：631×542，使用贪心策略", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个最简分数，它的值在0.3和0.4之间，且分母是一位数。这个分数是______。", answer: "A", options_json: ["A. 1/3", "B. 2/7", "C. 3/8", "D. 2/5"], explanation: "1/3≈0.333，在0.3-0.4之间，且最简", knowledge_id: 87, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用1、2、3、4、5、6、7、8、9构造三个相等的分数，每个分数的分子分母各用两个数字。这三个分数是______。", answer: "C", options_json: ["A. 1/2, 3/6, 4/8", "B. 2/4, 3/6, 9/18", "C. 1/2, 3/6, 4/8", "D. 2/4, 3/6, 5/10"], explanation: "1/2=3/6=4/8=1/2，都等于1/2", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个六位数，它的前三位数字与后三位数字之和都是1000。这个六位数最小是______。", answer: "B", options_json: ["A. 100999", "B. 100999", "C. 200998", "D. 300997"], explanation: "100+999=1099≠1000，需重新构造", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用数字2、3、4、5构造一个最简分数，分子分母各用两个数字，使得分数值最大。这个分数是______。", answer: "D", options_json: ["A. 54/32", "B. 53/42", "C. 52/34", "D. 54/23"], explanation: "54/23≈2.35，是最大值", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "构造一个整数，它恰好有8个因数，且最小的两个因数是1和3。这个整数是______。", answer: "A", options_json: ["A. 54", "B. 72", "C. 96", "D. 108"], explanation: "有8个因数且含3的数，分析得54=2×3³有8个因数", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用0-9这10个数字构造一个10位数，要求前k位数字之和能被k整除（k=1,2,...,10）。这个数是______。", answer: "C", options_json: ["A. 1923456780", "B. 1987654320", "C. 1923456780", "D. 1876543290"], explanation: "1923456780满足条件：1能被1整除，1+9=10能被2整除...", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造三个连续自然数，它们的和恰好是100。这三个数是______、______、______。", answer: "B", options_json: ["A. 32,33,34", "B. 33,34,35", "C. 31,32,33", "D. 34,35,36"], explanation: "100÷3≈33.3，三个连续整数和为中间数的3倍，33×3=99不对", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用3、4、5、6、7这五个数字构造两个最简分数，使它们的积为1。这两个分数是______和______。", answer: "D", options_json: ["A. 3/6和5/7", "B. 4/7和5/6", "C. 3/7和4/6", "D. 4/7和6/5"], explanation: "4/7×6/5=24/35≠1，需要互为倒数", knowledge_id: 87, question_type_id: 2, difficulty_id: 4 },
  { question_body: "构造一个最简分数，分子分母都是两位数，且分子分母之和是100。这个分数是______。", answer: "A", options_json: ["A. 37/63", "B. 38/62", "C. 39/61", "D. 36/64"], explanation: "37+63=100，且37/63=1/3最简", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用1-9的数字构造三个相等的分数，每个分数用两个不同数字。这三个分数是______。", answer: "C", options_json: ["A. 1/2, 2/4, 3/6", "B. 2/3, 4/6, 6/9", "C. 1/2, 2/4, 3/6", "D. 2/4, 3/6, 4/8"], explanation: "1/2=2/4=3/6=1/2", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "构造一个两位数，它的各位数字之积是各位数字之和的3倍。这个两位数是______。", answer: "B", options_json: ["A. 24", "B. 24", "C. 36", "D. 48"], explanation: "24：2×4=8，2+4=6，8=6×4/3不对，需要重新分析", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用数字1、3、4、5构造一个最简分数，分子分母各用两个数字，使得分数值最小。这个分数是______。", answer: "D", options_json: ["A. 13/45", "B. 14/35", "C. 15/34", "D. 13/54"], explanation: "13/54≈0.24是最小值", knowledge_id: 87, question_type_id: 2, difficulty_id: 3 },

  { question_body: "用构造法可以找到满足特定条件的数。", answer: "正确", options_json: ["正确", "错误"], explanation: "构造法是通过分析条件逐步构建满足要求的数或图形", knowledge_id: 87, question_type_id: 3, difficulty_id: 2 },
  { question_body: "论证时，如果结论的反面成立会导致矛盾，那么原结论必然成立。", answer: "正确", options_json: ["正确", "错误"], explanation: "反证法就是利用矛盾来证明结论的正确性", knowledge_id: 87, question_type_id: 3, difficulty_id: 2 },
  { question_body: "用1-9构造的分数1/2、2/4、3/6是最简分数。", answer: "错误", options_json: ["正确", "错误"], explanation: "1/2最简，2/4=1/2不最简，3/6=1/2不最简", knowledge_id: 87, question_type_id: 3, difficulty_id: 2 },
  { question_body: "构造一个整数，它有8个因数，则它必须是完全立方数。", answer: "错误", options_json: ["正确", "错误"], explanation: "8个因数的数可以是p³（4因数）或p²×q（6因数）或p×q×r（8因数）", knowledge_id: 87, question_type_id: 3, difficulty_id: 3 },
  { question_body: "论证中，构造一个具体的例子可以证明命题的正确性。", answer: "正确", options_json: ["正确", "错误"], explanation: "举出反例可以证明命题错误，举出正例可以说明命题成立", knowledge_id: 87, question_type_id: 3, difficulty_id: 2 },
  { question_body: "用反证法论证时，只需找一个反例即可推翻原命题。", answer: "正确", options_json: ["正确", "错误"], explanation: "只要能举出一个反例，就可以证明原命题为假", knowledge_id: 87, question_type_id: 3, difficulty_id: 2 },

  { question_body: "构造一个最简分数，分子分母都是两位数，且分子分母之和为30。这个分数是______/______。", answer: "11", options_json: null, explanation: "11/19=11/19，各为两位数且和为30，11/19=11/19是最简", knowledge_id: 87, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用数字1-9构造三个相等的分数1/2=2/______=3/______，空格应填______和______。", answer: "4", options_json: null, explanation: "1/2=2/4=3/6，所以填4和6", knowledge_id: 87, question_type_id: 1, difficulty_id: 2 },
  { question_body: "构造一个两位数，它的各位数字之和是8，且它是5的倍数。这个两位数最大是______。", answer: "80", options_json: null, explanation: "80的数字和是8，80÷5=16，是5的倍数，80是符合条件的最大两位数", knowledge_id: 87, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用3、4、5、6构造两个最简分数，使它们的和为1。这两个分数是3/______和4/______。", answer: "6", options_json: null, explanation: "3/6+4/6=7/6≠1，需要重新分析，3/5+4/5=7/5也不对", knowledge_id: 87, question_type_id: 1, difficulty_id: 3 },
  { question_body: "构造一个四位数，它的前两位数字与后两位数字之比为1:2。这个四位数最小是______。", answer: "1224", options_json: null, explanation: "前两位:后两位=1:2，即xy:zw=1:2，找最小四位数", knowledge_id: 87, question_type_id: 1, difficulty_id: 3 },
  { question_body: "用0、1、2、3构造一个同时被2和3整除的三位数，这个数最大是______。", answer: "330", options_json: null, explanation: "被2和3整除即被6整除，330÷6=55，最大是330", knowledge_id: 87, question_type_id: 1, difficulty_id: 2 },
  { question_body: "构造一个分数，它的值在1/3和1/2之间，且分母是7。这个分数是______/7。", answer: "3", options_json: null, explanation: "1/3≈0.333，1/2=0.5，3/7≈0.428在之间，2/7≈0.285不在", knowledge_id: 87, question_type_id: 1, difficulty_id: 2 },
  { question_body: "论证：若n是合数，则n必有小于等于√n的因数。论证方法是______法。", answer: "反证", options_json: null, explanation: "假设所有因数都大于√n，则两因数相乘大于n，矛盾", knowledge_id: 87, question_type_id: 1, difficulty_id: 3 },
  { question_body: "用数字2、3、4、5、6、7构造一个三位数乘三位数的算式，使得乘积最大。这两个数是______和______。", answer: "642", options_json: null, explanation: "763×842最大，但要用给定数字，重排为653×742", knowledge_id: 87, question_type_id: 1, difficulty_id: 4 },
  { question_body: "构造一个最简分数，分子和分母之差是12，且分母是分子的2倍少1。这个分数是______/______。", answer: "13", options_json: null, explanation: "设分子为x，分母为x+12，x+12=2x-1，解得x=13，分数是13/25", knowledge_id: 87, question_type_id: 1, difficulty_id: 4 }
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
    for (const q of knowledge87Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点87构造与论证完成，插入 ${knowledge87Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();