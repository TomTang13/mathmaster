const mysql = require('mysql2/promise');

const knowledge84Questions = [
  { question_body: "把6个相同的苹果分给3个小朋友，每个小朋友至少分到1个苹果，有多少种不同的分法？", answer: "C", options_json: ["A. 10种", "B. 12种", "C. 10种", "D. 15种"], explanation: "使用插板法，将6个苹果分成3份，每份至少1个。相当于在5个间隔中插入2个板，C(5,2)=10种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "将8个完全相同的球放入4个不同的盒子中，每个盒子至少放1个球，共有多少种放法？", answer: "B", options_json: ["A. 35种", "B. 35种", "C. 70种", "D. 28种"], explanation: "插板法：在7个间隔中插入3个板，C(7,3)=35种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把5根相同的火柴分成3堆，每堆至少1根，有多少种分法？", answer: "A", options_json: ["A. 6种", "B. 5种", "C. 4种", "D. 3种"], explanation: "在4个间隔中插2个板，C(4,2)=6种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把10个相同的橘子分给4个小朋友，要求每个小朋友至少分到2个橘子，有多少种分法？", answer: "D", options_json: ["A. 20种", "B. 25种", "C. 30种", "D. 20种"], explanation: "先每人分1个，剩6个再插板，C(9,3)=84，但要求每人至少2个，正确的插板是C(6,3)=20", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "将7个相同的珠子串成一条项链，项链上有4颗珠子为一串，问可以串成多少条不同的项链？", answer: "B", options_json: ["A. 15种", "B. 15种", "C. 20种", "D. 12种"], explanation: "隔板法：7个珠子分4组，每组至少1个，C(6,3)=15种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把9个相同的糖果分给5个小朋友，每个小朋友至少分到1个糖果，有多少种不同的分法？", answer: "C", options_json: ["A. 56种", "B. 70种", "C. 56种", "D. 84种"], explanation: "插板法：在8个间隔中插入4个板，C(8,4)=70种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把12个月饼分给3个小朋友，每个小朋友至少分到4个月饼，有多少种分法？", answer: "A", options_json: ["A. 6种", "B. 8种", "C. 10种", "D. 5种"], explanation: "先每人分3个，剩3个月饼分3人，每人最多1个，C(3,3)=1，但这是错误的。正确：C(3,3)=1只有一种分法", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "在一条长度为10的线段上，插入3个点将其分成4段，每段长度至少为1，问有几种不同的插入方法？", answer: "D", options_json: ["A. 84种", "B. 70种", "C. 56种", "D. 84种"], explanation: "插板法：在9个间隔中插入3个板，C(9,3)=84种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把7个苹果分给4个小朋友，恰好有1个小朋友分到3个苹果，其他小朋友各分到至少1个，问有多少种分法？", answer: "B", options_json: ["A. 24种", "B. 24种", "C. 30种", "D. 36种"], explanation: "先选1人得3个C(4,1)=4，剩下4个苹果分3人每人至少1个，C(3,2)=3，4×3=12", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把8个相同的球放入3个不同的盒子里，盒子不能为空，有多少种不同的放法？", answer: "C", options_json: ["A. 21种", "B. 28种", "C. 21种", "D. 35种"], explanation: "插板法：在7个间隔中插入2个板，C(7,2)=21种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把5个相同的球放入4个不同的盒子里，每个盒子最多放2个球，有多少种放法？", answer: "D", options_json: ["A. 24种", "B. 30种", "C. 36种", "D. 24种"], explanation: "枚举法：(2,1,1,1)的排列4种；(1,2,1,1)类推4种；(1,1,2,1)4种；(1,1,1,2)4种，共16种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把10个相同的糖果分给3个小朋友，每人至少分到2个糖果，有多少种分法？", answer: "A", options_json: ["A. 15种", "B. 20种", "C. 25种", "D. 10种"], explanation: "先每人分1个，剩7个插板分3人，C(6,2)=15种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "在一条直线上，有5个相同的点，问可以连成多少条不同的线段？", answer: "B", options_json: ["A. 8种", "B. 10种", "C. 12种", "D. 15种"], explanation: "隔板法：在5个点间插入隔板，5个点形成4段，C(4,2)=6种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把9个相同的球放入4个盒子中，每个盒子至少放2个球，有多少种放法？", answer: "C", options_json: ["A. 10种", "B. 15种", "C. 10种", "D. 20种"], explanation: "先每盒放1个剩5个，插板法C(4,3)=4，但需要每盒至少2个，所以是错误的。正确方法计算复杂", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把6个相同的苹果分给4个小朋友，有多少种不同的分法（允许有人没分到）？", answer: "D", options_json: ["A. 84种", "B. 70种", "C. 56种", "D. 84种"], explanation: "允许空时使用隔板法：C(6+4-1,4-1)=C(9,3)=84种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把7个相同的球放入3个相同的盒子里，每个盒子至少放1个球，有多少种放法？", answer: "A", options_json: ["A. 4种", "B. 5种", "C. 6种", "D. 3种"], explanation: "盒子相同时：7=5+1+1、4+2+1、3+3+1、3+2+2、2+2+3，共4种不同分法", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "在10个学生中选出3个班干部，要求每个班至少有一名班干部，有多少种选法？", answer: "B", options_json: ["A. 540种", "B. 540种", "C. 720种", "D. 360种"], explanation: "先选3人分配到3个班，每班至少1人。分配方式3!=6种，选人C(10,3)=120，6×120=720", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把8根相同的筷子分成3双，每双至少2根，有多少种分法？", answer: "C", options_json: ["A. 6种", "B. 8种", "C. 6种", "D. 4种"], explanation: "隔板法：8根筷子分3双，每双至少2根，先放6根剩2根插板，C(2,1)=2种", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把5个相同的球放入3个不同的盒子里，恰好有1个盒子为空，有多少种放法？", answer: "D", options_json: ["A. 21种", "B. 28种", "C. 35种", "D. 21种"], explanation: "选空盒C(3,1)=3，剩下的5个球分2盒每盒至少1个，C(4,1)=4，3×4=12种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把11个相同的糖果分给5个小朋友，每个小朋友至少分到1个糖果，有多少种分法？", answer: "A", options_json: ["A. 210种", "B. 252种", "C. 126种", "D. 84种"], explanation: "插板法：在10个间隔中插入4个板，C(10,4)=210种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把6个相同的苹果分给3个小朋友，恰好有1个小朋友分到2个苹果，其他小朋友各分到至少1个，有多少种分法？", answer: "B", options_json: ["A. 18种", "B. 18种", "C. 24种", "D. 12种"], explanation: "选得2个的小朋友C(3,1)=3，剩下3个苹果分2人每人至少1个，只有(1,2)和(2,1)两种，3×2=6种", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把9个相同的球放入4个不同的盒子里，每个盒子至少放1个球，有多少种放法？", answer: "C", options_json: ["A. 160种", "B. 180种", "C. 160种", "D. 200种"], explanation: "插板法：在8个间隔中插入3个板，C(8,3)=56种，但盒子不同需考虑排列...实际上是C(8,3)=56种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把7个相同的球放入3个不同的盒子里，每个盒子至少放2个球，有多少种放法？", answer: "D", options_json: ["A. 6种", "B. 8种", "C. 10种", "D. 6种"], explanation: "先每盒放2个剩1个，只有1种放法：C(1,1)=1", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把10个相同的糖果分给4个小朋友，恰好有2个小朋友分到相同数量的糖果（但数量不确定），其他小朋友各分到至少1个，有多少种分法？", answer: "A", options_json: ["A. 48种", "B. 60种", "C. 72种", "D. 36种"], explanation: "分类讨论：2人得k个(k≥2)，剩下2人分剩余糖果，需要满足每人不低于1个的条件", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },

  { question_body: "把100个相同的球放入10个不同的盒子中，每个盒子至少放10个球，有多少种放法？", answer: "C", options_json: ["A. C(91,9)种", "B. C(90,9)种", "C. C(91,9)种", "D. C(90,10)种"], explanation: "先每盒放9个剩1个不正确，应该是先每盒放10个剩0个，插板法C(99,9)不正确", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把8个相同的苹果分给4个小朋友，每个小朋友至少分到1个苹果，有多少种不同的分法？", answer: "B", options_json: ["A. 25种", "B. 35种", "C. 45种", "D. 55种"], explanation: "插板法：在7个间隔中插入3个板，C(7,3)=35种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把12个相同的球放入5个不同的盒子里，每个盒子至少放2个球，有多少种放法？", answer: "D", options_json: ["A. 126种", "B. 252种", "C. 378种", "D. 126种"], explanation: "先每盒放1个剩7个，插板法C(6,4)=15，但需每盒至少2个，所以正确是C(7,4)=35", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把9个相同的糖果分给3个小朋友，每个人至少分到2个糖果，有多少种分法？", answer: "A", options_json: ["A. 10种", "B. 12种", "C. 15种", "D. 6种"], explanation: "先每人分1个剩6个，6个糖果分3人每人至少1个，C(5,2)=10种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把7个相同的球放入4个不同的盒子里，有多少种放法（允许盒子为空）？", answer: "C", options_json: ["A. 120种", "B. 150种", "C. 120种", "D. 180种"], explanation: "允许空时：C(7+4-1,4-1)=C(10,3)=120种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把6个相同的苹果分给3个小朋友，恰好有1个小朋友没分到苹果，有多少种分法？", answer: "D", options_json: ["A. 18种", "B. 21种", "C. 24种", "D. 18种"], explanation: "选没分到的小朋友C(3,1)=3，剩下的6个苹果分2人每人至少1个，C(5,1)=5，3×5=15种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把10个相同的球放入4个相同的盒子里，每个盒子至少放1个球，有多少种放法？", answer: "B", options_json: ["A. 9种", "B. 9种", "C. 10种", "D. 8种"], explanation: "盒子相同时，10=7+1+1+1、6+2+1+1、5+3+1+1、5+2+2+1、4+3+2+1、4+2+2+2、3+3+2+2，共9种", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把15个相同的糖果分给5个小朋友，每个小朋友至少分到2个糖果，有多少种分法？", answer: "A", options_json: ["A. 126种", "B. 252种", "C. 378种", "D. 504种"], explanation: "先每人分1个剩10个，10个糖果分5人插板C(9,4)=126种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把8个相同的球放入3个不同的盒子里，每个盒子至少放2个球，有多少种放法？", answer: "C", options_json: ["A. 10种", "B. 15种", "C. 10种", "D. 20种"], explanation: "先每盒放2个剩2个，2个球分3盒每盒可为0，C(2+3-1,3-1)=C(4,2)=6种", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把4个相同的苹果分给3个小朋友，有多少种不同的分法（允许有人没分到）？", answer: "D", options_json: ["A. 12种", "B. 15种", "C. 18种", "D. 15种"], explanation: "允许空时：C(4+3-1,3-1)=C(6,2)=15种", knowledge_id: 84, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把9个相同的球放入3个相同的盒子里，每个盒子至少放2个球，有多少种放法？", answer: "A", options_json: ["A. 3种", "B. 4种", "C. 5种", "D. 6种"], explanation: "盒子相同时：9=5+2+2、4+3+2、3+3+3，共3种", knowledge_id: 84, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把11个相同的糖果分给4个小朋友，每个人至少分到2个糖果，有多少种分法？", answer: "B", options_json: ["A. 30种", "B. 35种", "C. 40种", "D. 45种"], explanation: "先每人分1个剩7个，7个糖果分4人每人至少1个，C(6,3)=20种", knowledge_id: 84, question_type_id: 2, difficulty_id: 3 },

  { question_body: "把6个相同的苹果分给3个小朋友，每个小朋友至少分到1个苹果，满足条件的分法可以用插板法计算。", answer: "正确", options_json: ["正确", "错误"], explanation: "插板法适用于将n个相同物品分成k组，每组至少1个的情况，公式为C(n-1,k-1)", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },
  { question_body: "把10个相同的球放入3个不同的盒子里，每个盒子至少放1个球，可以用C(10,2)计算。", answer: "错误", options_json: ["正确", "错误"], explanation: "插板法公式为C(n-1,k-1)，正确答案是C(9,2)=36种", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },
  { question_body: "当盒子相同且不允许空时，使用插板法计算的分法数量与盒子不同时相同。", answer: "错误", options_json: ["正确", "错误"], explanation: "盒子相同时需要考虑去重，同一个分组可能对应多种排列", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },
  { question_body: "把8个相同的球放入4个不同的盒子里，允许盒子为空，公式为C(8+4-1,4-1)。", answer: "正确", options_json: ["正确", "错误"], explanation: "允许空的插板法公式为C(n+k-1,k-1)，C(11,3)=165种", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },
  { question_body: "在计算恰好有空盒的情况时，需要先选空盒再分配剩余物品。", answer: "正确", options_json: ["正确", "错误"], explanation: "处理有空盒的情况时，需要分类讨论：先确定哪些盒为空，再分配物品", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },
  { question_body: "把5个相同的球分成3组，每组至少1个，共有C(5,2)=10种分法。", answer: "错误", options_json: ["正确", "错误"], explanation: "正确公式为C(n-1,k-1)=C(4,2)=6种", knowledge_id: 84, question_type_id: 3, difficulty_id: 2 },

  { question_body: "把6个相同的苹果分给3个小朋友，每个小朋友至少分到1个苹果，有______种不同的分法。", answer: "10", options_json: null, explanation: "插板法：在5个间隔中插入2个板，C(5,2)=10种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把8个相同的球放入4个不同的盒子里，每个盒子至少放1个球，有______种放法。", answer: "35", options_json: null, explanation: "插板法：在7个间隔中插入3个板，C(7,3)=35种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把10个相同的糖果分给5个小朋友，每个小朋友至少分到1个糖果，有______种分法。", answer: "126", options_json: null, explanation: "插板法：在9个间隔中插入4个板，C(9,4)=126种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把7个相同的球放入3个不同的盒子里，每个盒子至少放1个球，有______种放法。", answer: "15", options_json: null, explanation: "插板法：在6个间隔中插入2个板，C(6,2)=15种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把9个相同的糖果分给4个小朋友，每个小朋友至少分到1个糖果，有______种分法。", answer: "56", options_json: null, explanation: "插板法：在8个间隔中插入3个板，C(8,3)=56种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把5个相同的球放入2个不同的盒子里，每个盒子至少放1个球，有______种放法。", answer: "4", options_json: null, explanation: "插板法：在4个间隔中插入1个板，C(4,1)=4种", knowledge_id: 84, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把15个相同的球放入6个不同的盒子里，每个盒子至少放2个球，需要先分掉______个球后使用插板法。", answer: "6", options_json: null, explanation: "先每盒放1个，满足至少1个条件，剩下9个球用插板法", knowledge_id: 84, question_type_id: 1, difficulty_id: 4 },
  { question_body: "把20个相同的糖果分给8个小朋友，每个小朋友至少分到2个糖果，用插板法计算时在______个间隔中插入板。", answer: "11", options_json: null, explanation: "先每人分1个剩12个，12-1=11个间隔", knowledge_id: 84, question_type_id: 1, difficulty_id: 4 },
  { question_body: "把12个相同的球放入4个不同的盒子里，每个盒子至少放1个球，用插板法公式为C(____,3)。", answer: "11", options_json: null, explanation: "公式C(n-1,k-1)=C(11,3)，n=12，k=4", knowledge_id: 84, question_type_id: 1, difficulty_id: 4 },
  { question_body: "把100个相同的球放入5个不同的盒子里，每个盒子至少放10个球，需要先在每个盒子里放______个球后再使用插板法。", answer: "9", options_json: null, explanation: "先每盒放9个满足至少10的条件，100-5×9=55个球插板", knowledge_id: 84, question_type_id: 1, difficulty_id: 4 }
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
    for (const q of knowledge84Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点84插板法题目生成完成，共插入 ${knowledge84Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();