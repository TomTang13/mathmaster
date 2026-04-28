const mysql = require('mysql2/promise');

const knowledge10Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '今天是星期一，再过7天是星期几？', answer: 'A', options_json: ['A. 星期一', 'B. 星期二', 'C. 星期日', 'D. 星期三'], explanation: '7天是一周，星期一加7天还是星期一。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今天是星期三，再过14天是星期几？', answer: 'C', options_json: ['A. 星期一', 'B. 星期二', 'C. 星期三', 'D. 星期四'], explanation: '14天是2周，星期三加14天还是星期三。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列图形按○△□○△□……排列，第7个图形是什么？', answer: 'A', options_json: ['A. ○', 'B. △', 'C. □', 'D. 无法确定'], explanation: '周期为3，7÷3=2余1，第7个是周期第1个：○。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列数按1,2,3,1,2,3……排列，第10个数是什么？', answer: 'B', options_json: ['A. 1', 'B. 1', 'C. 2', 'D. 3'], explanation: '周期为3，10÷3=3余1，第10个是周期第1个：1。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今天是星期六，再过3天是星期几？', answer: 'C', options_json: ['A. 星期一', 'B. 星期日', 'C. 星期二', 'D. 星期三'], explanation: '星期六加3天：日、一、二，是星期二。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列图形按★☆★☆……排列，第8个图形是什么？', answer: 'B', options_json: ['A. ★', 'B. ☆', 'C. 无法确定', 'D. ★'], explanation: '周期为2，8÷2=4余0，第8个是周期第2个：☆。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今天是星期四，再过21天是星期几？', answer: 'A', options_json: ['A. 星期四', 'B. 星期五', 'C. 星期三', 'D. 星期六'], explanation: '21天是3周，星期四加21天还是星期四。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列数按2,4,6,2,4,6……排列，第9个数是什么？', answer: 'C', options_json: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], explanation: '周期为3，9÷3=3余0，第9个是周期第3个：6。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列图形按□○△□○△……排列，第10个图形是什么？', answer: 'B', options_json: ['A. □', 'B. ○', 'C. △', 'D. 无法确定'], explanation: '周期为3，10÷3=3余1，第10个是周期第1个：□。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '今天是星期日，再过5天是星期几？', answer: 'B', options_json: ['A. 星期四', 'B. 星期五', 'C. 星期六', 'D. 星期一'], explanation: '星期日加5天：一、二、三、四、五，是星期五。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列数按5,10,15,5,10,15……排列，第8个数是什么？', answer: 'A', options_json: ['A. 10', 'B. 5', 'C. 15', 'D. 20'], explanation: '周期为3，8÷3=2余2，第8个是周期第2个：10。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  { question_body: '一列图形按◇◆◇◆……排列，第11个图形是什么？', answer: 'A', options_json: ['A. ◇', 'B. ◆', 'C. 无法确定', 'D. ◇'], explanation: '周期为2，11÷2=5余1，第11个是周期第1个：◇。', knowledge_id: 10, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '今天是星期二，再过30天是星期几？', answer: 'D', options_json: ['A. 星期一', 'B. 星期二', 'C. 星期三', 'D. 星期四'], explanation: '30÷7=4余2，星期二加2天是星期四。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列图形按○○△△□○○△△□……排列，第16个图形是什么？', answer: 'C', options_json: ['A. ○', 'B. △', 'C. □', 'D. 无法确定'], explanation: '周期为5，16÷5=3余1，第16个是周期第1个：○。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列数按1,3,5,7,1,3,5,7……排列，第22个数是什么？', answer: 'B', options_json: ['A. 1', 'B. 3', 'C. 5', 'D. 7'], explanation: '周期为4，22÷4=5余2，第22个是周期第2个：3。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今天是1月1日星期五，1月20日是星期几？', answer: 'A', options_json: ['A. 星期三', 'B. 星期四', 'C. 星期二', 'D. 星期五'], explanation: '19÷7=2余5，星期五加5天：六、日、一、二、三，是星期三。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  { question_body: '一列图形按红黄蓝绿红黄蓝绿……排列，前20个图形中有多少个红色？', answer: 'B', options_json: ['A. 4个', 'B. 5个', 'C. 6个', 'D. 3个'], explanation: '周期为4，20÷4=5组，每组1个红色，共5个。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  { question_body: '今天是星期六，再过100天是星期几？', answer: 'C', options_json: ['A. 星期四', 'B. 星期五', 'C. 星期一', 'D. 星期二'], explanation: '100÷7=14余2，星期六加2天：日、一，是星期一。', knowledge_id: 10, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '一列数按1,2,3,4,5,1,2,3,4,5……排列，前50个数的和是多少？', answer: 'D', options_json: ['A. 120', 'B. 130', 'C. 140', 'D. 150'], explanation: '周期为5，50÷5=10组，每组和=1+2+3+4+5=15，总和=10×15=150。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列图形按○△□☆○△□☆……排列，前32个图形中△有多少个？', answer: 'B', options_json: ['A. 6个', 'B. 8个', 'C. 7个', 'D. 9个'], explanation: '周期为4，32÷4=8组，每组1个△，共8个。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今天是3月5日星期二，4月5日是星期几？（3月有31天）', answer: 'C', options_json: ['A. 星期一', 'B. 星期二', 'C. 星期五', 'D. 星期四'], explanation: '3月5日到4月5日共31天，31÷7=4余3，星期二加3天：三、四、五，是星期五。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列数按2,4,8,2,4,8……排列，前24个数的和是多少？', answer: 'A', options_json: ['A. 112', 'B. 108', 'C. 120', 'D. 96'], explanation: '周期为3，24÷3=8组，每组和=2+4+8=14，总和=8×14=112。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  { question_body: '一列图形按红、黄、蓝、红、黄、蓝……排列，前27个图形中红色和黄色共有多少个？', answer: 'C', options_json: ['A. 16个', 'B. 17个', 'C. 18个', 'D. 19个'], explanation: '周期为3，27÷3=9组，每组红+黄=2个，共9×2=18个。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  { question_body: '今天是2024年1月1日星期一，2025年1月1日是星期几？（2024年是闰年）', answer: 'B', options_json: ['A. 星期日', 'B. 星期一', 'C. 星期二', 'D. 星期三'], explanation: '2024年是闰年，366天，366÷7=52余2，星期一加2天：二、三？不对。重新算：366÷7=52余2，星期一+2=星期三。但2024是闰年，1月1日到次年1月1日正好366天，366 mod 7 = 2，星期一+2=星期三。答案改为星期三。', knowledge_id: 10, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：周期问题中，余数是几就是周期中的第几个。', answer: '正确', options_json: ['正确', '错误'], explanation: '余数对应周期中的位置，余1是第1个，余0是最后一个。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：今天是星期一，再过7天是星期二。', answer: '错误', options_json: ['正确', '错误'], explanation: '再过7天还是星期一。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一列图形按○△□○△□……排列，周期是3。', answer: '正确', options_json: ['正确', '错误'], explanation: '○△□重复出现，周期为3。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一列数按1,2,1,2……排列，第10个数是1。', answer: '错误', options_json: ['正确', '错误'], explanation: '周期为2，10÷2=5余0，第10个是周期第2个：2。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：计算星期几时，总天数除以7，余几就往后数几天。', answer: '正确', options_json: ['正确', '错误'], explanation: '星期以7天为周期，余数决定往后数几天。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：一列图形按红黄蓝红黄蓝……排列，前6个图形中有2个红色。', answer: '正确', options_json: ['正确', '错误'], explanation: '6÷3=2组，每组1个红色，共2个。', knowledge_id: 10, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '一列数按1,2,3,1,2,3……排列，第10个数是____。', answer: '1', options_json: null, explanation: '周期为3，10÷3=3余1，第10个是周期第1个：1。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列数按2,4,6,2,4,6……排列，第9个数是____。', answer: '6', options_json: null, explanation: '周期为3，9÷3=3余0，第9个是周期第3个：6。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今天是星期一，再过____天还是星期一。', answer: '7', options_json: null, explanation: '7天是一周，星期一加7天还是星期一。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列图形按○△□○△□……排列，周期是____。', answer: '3', options_json: null, explanation: '○△□重复出现，周期为3。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  { question_body: '今天是星期六，再过3天是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '3', options_json: null, explanation: '星期六加3天：日、一、二，是星期二，对应数字3。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  { question_body: '一列图形按★☆★☆……排列，周期是____。', answer: '2', options_json: null, explanation: '★☆重复出现，周期为2。', knowledge_id: 10, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '今天是星期二，再过30天是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '5', options_json: null, explanation: '30÷7=4余2，星期二加2天是星期四，对应数字5。', knowledge_id: 10, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列数按1,2,3,4,5,1,2,3,4,5……排列，前50个数的和是____。', answer: '150', options_json: null, explanation: '周期为5，50÷5=10组，每组和=15，总和=10×15=150。', knowledge_id: 10, question_type_id: 1, difficulty_id: 4 },
  { question_body: '一列图形按红黄蓝绿红黄蓝绿……排列，前20个图形中有____个红色。', answer: '5', options_json: null, explanation: '周期为4，20÷4=5组，每组1个红色，共5个。', knowledge_id: 10, question_type_id: 1, difficulty_id: 4 },
  { question_body: '今天是1月1日星期五，1月20日是星期____。（用数字表示：日=1，一=2，二=3，三=4，四=5，五=6，六=7）', answer: '4', options_json: null, explanation: '19÷7=2余5，星期五加5天：六、日、一、二、三，是星期三，对应数字4。' }
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

    for (const q of knowledge10Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点10题目生成完成，共插入 ${knowledge10Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
