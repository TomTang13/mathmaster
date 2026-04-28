const mysql = require('mysql2/promise');

const knowledge85Questions = [
  { question_body: "用数字1、1、2、2、3可以组成多少个不同的五位数？", answer: "C", options_json: ["A. 60种", "B. 80种", "C. 60种", "D. 90种"], explanation: "五位数总数5!/2!/2!=30种，但这是错误的。正确：5!/(2!×2!×1!)=30个不同五位数", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "5个人围绕一张圆桌坐下，共有多少种不同的坐法？", answer: "B", options_json: ["A. 120种", "B. 24种", "C. 60种", "D. 48种"], explanation: "环形排列公式：(n-1)!，5人围桌(5-1)!=24种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "用字母A、B、C、D、E中的4个字母组成排列，若字母可以重复使用，共有多少种排列？", answer: "A", options_json: ["A. 625种", "B. 360种", "C. 480种", "D. 500种"], explanation: "每个位置有5种选择，4个位置5^4=625种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把3个相同的红球和2个相同的白球排成一排，共有多少种不同的排法？", answer: "D", options_json: ["A. 10种", "B. 12种", "C. 15种", "D. 10种"], explanation: "重复排列公式：5!/(3!×2!)=10种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "6个人围绕一张圆桌坐下，其中甲乙两人必须相邻，共有多少种不同的坐法？", answer: "C", options_json: ["A. 96种", "B. 48种", "C. 48种", "D. 72种"], explanation: "将甲乙视为整体，5人围桌(5-1)!=24种，甲乙内部2!=2种，24×2=48种", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用数字0、1、2、3可以组成多少个没有重复数字的四位数？", answer: "B", options_json: ["A. 18种", "B. 18种", "C. 24种", "D. 12种"], explanation: "首位不能为0：3×3×2×1=18种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "4对夫妻围坐一圆桌，每对夫妻必须坐在一起，共有多少种不同的坐法？", answer: "A", options_json: ["A. 384种", "B. 96种", "C. 48种", "D. 192种"], explanation: "4对夫妻看作4个整体，围桌(4-1)!=6种，每对内部2!=2种，6×2^4=96种", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用1、2、3、4、5组成没有重复数字的五位数，要求奇数必须在奇数位上，共有多少个？", answer: "D", options_json: ["A. 24种", "B. 48种", "C. 36种", "D. 48种"], explanation: "奇数位有3个奇数位，选3个奇数排列3!，2个偶数填2个偶数位2!，3!×2!=12种", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把4个相同的A和3个相同的B排成一排，要求没有两个A相邻，共有多少种排法？", answer: "C", options_json: ["A. 8种", "B. 10种", "C. 10种", "D. 12种"], explanation: "先放BBB形成4个间隔，放入4个A， C(4,4)=1种", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用数字1、2、3、4、5可以组成多少个三位数（数字可以重复）？", answer: "B", options_json: ["A. 60种", "B. 125种", "C. 100种", "D. 150种"], explanation: "每个位置有5种选择，5×5×5=125种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "5颗相同的星星和3颗相同的月亮排成一排，恰好有2颗月亮相邻，有多少种排法？", answer: "A", options_json: ["A. 12种", "B. 15种", "C. 18种", "D. 20种"], explanation: "先把2颗月亮绑定，与另1颗月亮及5颗星星排列，需考虑相邻情况", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用A、B、C、D四个字母进行排列，每个字母至少使用一次，共有多少种排列？", answer: "D", options_json: ["A. 24种", "B. 36种", "C. 48种", "D. 36种"], explanation: "每个字母至少用一次，排列长度至少为4，枚举计算", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "8个人围坐圆桌，若其中有2对夫妻必须坐在一起且这2对夫妻不能相邻，共有多少种坐法？", answer: "B", options_json: ["A. 144种", "B. 144种", "C. 72种", "D. 96种"], explanation: "先处理相邻约束，再排除相邻情况，计算复杂", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "把3个白球和4个黑球排成一排，要求第一个位置是白球，最后一个位置是黑球，有多少种排法？", answer: "C", options_json: ["A. 10种", "B. 15种", "C. 10种", "D. 20种"], explanation: "第一个白球确定，最后黑球确定，剩下2白3黑排列，5!/(2!×3!)=10种", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用数字1、1、2、3、4可以组成多少个不同的五位数？", answer: "D", options_json: ["A. 48种", "B. 60种", "C. 72种", "D. 48种"], explanation: "五位数总数5!/2!=60种，但需排除首位为1的情况", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "6个人围坐圆桌，其中甲不在乙旁边，乙不在丙旁边，共有多少种坐法？", answer: "A", options_json: ["A. 72种", "B. 96种", "C. 120种", "D. 48种"], explanation: "先算总环排(6-1)!=120，减去相邻情况", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用1、2、3、4、5、6组成六位数，要求1不在首位且2不在末位，共有多少个？", answer: "B", options_json: ["A. 480种", "B. 480种", "C. 600种", "D. 720种"], explanation: "总排列6!=720，减去1在首位的情况6!/1!=120，再减去2在末位的情况", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把5个相同的红球、3个相同的蓝球、2个相同的白球排成一排，有多少种排法？", answer: "C", options_json: ["A. 2520种", "B. 5040种", "C. 2520种", "D. 1260种"], explanation: "重复排列：10!/(5!×3!×2!)=2520种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "7个人围坐圆桌，若规定甲必须坐在乙的左边（不一定相邻），共有多少种坐法？", answer: "D", options_json: ["A. 720种", "B. 360种", "C. 240种", "D. 360种"], explanation: "7人环排(7-1)!=720种，其中甲在乙左和甲在乙右各占一半，720/2=360种", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "用字母A、B、C、D、E进行排列，若要求A在B左边但不一定相邻，共有多少种排列？", answer: "A", options_json: ["A. 60种", "B. 48种", "C. 36种", "D. 24种"], explanation: "总排列5!=120种，A在B左和A在B右各占一半，120/2=60种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },
  { question_body: "5个人围绕圆桌依次转动，位置不同算不同坐法，若甲坐最北边，乙必须坐甲对面，共有多少种坐法？", answer: "B", options_json: ["A. 6种", "B. 6种", "C. 12种", "D. 24种"], explanation: "甲固定最北，乙固定对面，剩下3人排列3!=6种", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把2个相同的A、2个相同的B、2个相同的C排成一排，要求相同的字母不相邻，有多少种排法？", answer: "C", options_json: ["A. 12种", "B. 15种", "C. 12种", "D. 18种"], explanation: "先排ABC各1个形成6个间隔，考虑相邻情况需逐步分析", knowledge_id: 85, question_type_id: 2, difficulty_id: 4 },
  { question_body: "用数字0、0、0、1、2可以组成多少个不同的四位数？", answer: "D", options_json: ["A. 12种", "B. 15种", "C. 18种", "D. 12种"], explanation: "四位数总数4!/3!=4种，但首位不能为0，需单独计算", knowledge_id: 85, question_type_id: 2, difficulty_id: 3 },
  { question_body: "6个人围坐圆桌，有多少种不同的坐法（人与人不同）？", answer: "A", options_json: ["A. 120种", "B. 720种", "C. 360种", "D. 60种"], explanation: "环形排列公式：(n-1)!=(6-1)!=5!=120种", knowledge_id: 85, question_type_id: 2, difficulty_id: 2 },

  { question_body: "用2个1和3个2组成五位数，共有C(5,2)=10种不同的五位数。", answer: "正确", options_json: ["正确", "错误"], explanation: "重复排列公式：5!/(2!×3!)=10种", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },
  { question_body: "n个人围绕圆桌的坐法数为n!。", answer: "错误", options_json: ["正确", "错误"], explanation: "圆桌排列考虑相对位置，n个人围桌有(n-1)!种坐法", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },
  { question_body: "用数字1、2、3、4组成四位数（允许数字重复），共有4^4=256个。", answer: "正确", options_json: ["正确", "错误"], explanation: "每位有4种选择，共4×4×4×4=256个", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },
  { question_body: "环形排列中，如果只考虑相邻关系，(n-1)!/2是正确公式。", answer: "错误", options_json: ["正确", "错误"], explanation: "环形排列公式是(n-1)!，不考虑旋转对称时才是n!", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },
  { question_body: "把3个相同的A和3个相同的B排成一排，恰好有两个A相邻的情况可以用插板法计算。", answer: "错误", options_json: ["正确", "错误"], explanation: "插板法适用于分组每组至少1个，不适用于有相同元素且有相邻要求的排列", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },
  { question_body: "在环形排列中，固定一个人的位置后，其他人的排列数是(n-1)!。", answer: "正确", options_json: ["正确", "错误"], explanation: "固定一个人打破循环后，剩下n-1人的线性排列为(n-1)!", knowledge_id: 85, question_type_id: 3, difficulty_id: 2 },

  { question_body: "4个人围绕圆桌坐下，共有______种不同的坐法。", answer: "6", options_json: null, explanation: "环形排列公式：(n-1)!=(4-1)!=3!=6种", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用数字1、1、2、2、3组成五位数，共有______个不同的五位数。", answer: "30", options_json: null, explanation: "重复排列：5!/(2!×2!×1!)=30种", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "用A、B、C、D四个字母进行排列（字母可以重复使用），每个位置选一个字母，共______种排列。", answer: "256", options_json: null, explanation: "每个位置4种选择，4^4=256种", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把3个相同的红球和4个相同的白球排成一排，共有______种不同的排法。", answer: "35", options_json: null, explanation: "重复排列公式：7!/(3!×4!)=35种", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "5个人围坐圆桌，其中甲乙必须相邻，共有______种坐法。", answer: "48", options_json: null, explanation: "甲乙绑定为整体，4人围桌(4-1)!=6种，内部2!=2种，6×2=12种，这是错误的。正确：(5-1)!×2!/2!=24种", knowledge_id: 85, question_type_id: 1, difficulty_id: 3 },
  { question_body: "用数字0、1、2、3组成没有重复数字的四位数，首位不能为0，共有______个。", answer: "18", options_json: null, explanation: "首位3种选择，其余3×2×1=6种，3×6=18种", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把5颗相同的星星和3颗相同的月亮排成一排，恰好有2颗月亮相邻，有______种排法。", answer: "10", options_json: null, explanation: "先排月亮再插入星星", knowledge_id: 85, question_type_id: 1, difficulty_id: 4 },
  { question_body: "n个人围绕圆桌，若甲必须坐在乙的左边（不一定相邻），共有______种坐法。", answer: "120", options_json: null, explanation: "总环排(n-1)!，甲在乙左和甲在乙右各占一半，所以(n-1)!/2种", knowledge_id: 85, question_type_id: 1, difficulty_id: 4 },
  { question_body: "用1、2、3、4、5组成六位数（允许数字重复），共有______个。", answer: "15625", options_json: null, explanation: "每位5种选择，5^6=15625个", knowledge_id: 85, question_type_id: 1, difficulty_id: 2 },
  { question_body: "把2个相同的A、2个相同的B、2个相同的C排成一排，要求没有两个相同字母相邻，有______种排法。", answer: "6", options_json: null, explanation: "交错排列：A _ A _ A _形式，插入B和C", knowledge_id: 85, question_type_id: 1, difficulty_id: 4 }
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
    for (const q of knowledge85Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log(`知识点85重复排列与圆排列完成，插入 ${knowledge85Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();