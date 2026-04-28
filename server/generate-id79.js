const mysql = require('mysql2/promise');

const knowledge79Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: "抽屉原理中，把n+1个物体放入n个抽屉中，至少有一个抽屉里有几个物体？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "抽屉原理：把n+1个物体放入n个抽屉中，至少有一个抽屉里有2个物体。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "有5个苹果放入4个盘子，至少有一个盘子里有几个苹果？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "抽屉原理：5个苹果放入4个盘子，至少有一个盘子里有2个苹果。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "13个人中，至少有几个人的生肖是相同的？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "12个生肖，13个人，至少有2个人生肖相同。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "在任意13个人中，至少有几个人的生日在同一个月份？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "12个月，13个人，至少有2个人生日在同一个月份。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "抽屉原理中，把kn+1个物体放入n个抽屉中，至少有一个抽屉里有几个物体？", answer: "C", options_json: ["A. k", "B. k-1", "C. k+1", "D. k+2"], explanation: "抽屉原理：把kn+1个物体放入n个抽屉中，至少有一个抽屉里有k+1个物体。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "把10个苹果放入3个盘子，至少有一个盘子里至少有几个苹果？", answer: "C", options_json: ["A. 2", "B. 3", "C. 4", "D. 5"], explanation: "10÷3=3余1，所以至少有一个盘子里有4个苹果。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "抽屉原理的创始人是谁？", answer: "D", options_json: ["A. 牛顿", "B. 高斯", "C. 欧拉", "D. 狄利克雷"], explanation: "抽屉原理由德国数学家狄利克雷提出，也叫鸽巢原理。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "抽屉原理也叫什么？", answer: "A", options_json: ["A. 鸽巢原理", "B. 乘法原理", "C. 加法原理", "D. 排列原理"], explanation: "抽屉原理也叫鸽巢原理。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "3个鸽笼里有4只鸽子，至少有一个鸽笼里有几只鸽子？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "抽屉原理，至少有2只鸽子在同一个鸽笼。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "有50个学生，至少有几个学生在同一个星期过生日？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "一年约52个星期，50个学生，至少有2个人在同一个星期过生日。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "抽屉原理中，至少有一个抽屉里的物体数是多少？", answer: "A", options_json: ["A. 向上取整的平均值", "B. 向下取整的平均值", "C. 平均值", "D. 最大值"], explanation: "至少有一个抽屉里的物体数是向上取整的平均值。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },
  { question_body: "有10个相同的球放入4个盒子，至少有一个盒子里有几个球？", answer: "C", options_json: ["A. 2", "B. 3", "C. 3", "D. 4"], explanation: "10÷4=2.5，向上取整为3，至少有一个盒子里有3个球。", knowledge_id: 79, question_type_id: 2, difficulty_id: 2 },

  // 中等题 6题 (difficulty_id=3)
  { question_body: "在任意10个人中，至少有几个人的生日在同一个月份？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "12个月，10个人，至少有2个人生日在同一个月份。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有25个人，至少有几个人的生日在同一个星期？", answer: "C", options_json: ["A. 1", "B. 2", "C. 2", "D. 3"], explanation: "一年约52个星期，25个人，至少有2个人在同一个星期过生日。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },
  { question_body: "把20个苹果放入6个盘子，至少有一个盘子里至少有几个苹果？", answer: "C", options_json: ["A. 2", "B. 3", "C. 4", "D. 5"], explanation: "20÷6=3余2，所以至少有一个盘子里有4个苹果。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },
  { question_body: "抽屉原理中，把100个物体放入10个抽屉，至少有一个抽屉里有几个物体？", answer: "C", options_json: ["A. 8", "B. 9", "C. 10", "D. 11"], explanation: "100÷10=10，至少有一个抽屉里有10个物体。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },
  { question_body: "有红、黄、蓝三种颜色的球各10个，至少取几个球可以保证有两个颜色相同？", answer: "B", options_json: ["A. 3", "B. 4", "C. 5", "D. 6"], explanation: "最坏情况：取3个不同颜色，再取1个必与其中一个相同，共4个。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },
  { question_body: "抽屉原理中，最坏情况分析的目的是什么？", answer: "A", options_json: ["A. 保证问题有解", "B. 计算最大值", "C. 计算最小值", "D. 求平均数"], explanation: "最坏情况分析可以保证问题有解。", knowledge_id: 79, question_type_id: 2, difficulty_id: 3 },

  // 困难题 6题 (difficulty_id=4)
  { question_body: "有红、黄、蓝三种颜色的球各10个，至少取几个球可以保证有三个颜色相同？", answer: "C", options_json: ["A. 5", "B. 6", "C. 7", "D. 8"], explanation: "最坏情况：每种颜色取2个，共6个，再取1个必与其中一种相同，共7个。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },
  { question_body: "抽屉原理中，把kn+m个物体放入n个抽屉，至少有一个抽屉里有几个物体？", answer: "C", options_json: ["A. k", "B. k+m", "C. k+1", "D. k-1"], explanation: "kn+m个物体放入n个抽屉，至少有一个抽屉里有k+1个物体（0<m≤n）。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },
  { question_body: "有红、黄、蓝、绿四种颜色的球各10个，至少取几个球可以保证有两个颜色相同？", answer: "B", options_json: ["A. 4", "B. 5", "C. 6", "D. 7"], explanation: "最坏情况：取4个不同颜色，再取1个必与其中一个相同，共5个。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },
  { question_body: "抽屉原理中，把366个人放入365个抽屉，至少有一个抽屉里有几个人？", answer: "B", options_json: ["A. 1", "B. 2", "C. 3", "D. 4"], explanation: "366个人，365个抽屉，至少有2个人在同一个抽屉。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },
  { question_body: "有红、黄、蓝三种颜色的球各10个，至少取几个球可以保证有四种颜色相同？", answer: "D", options_json: ["A. 7", "B. 8", "C. 9", "D. 10"], explanation: "最坏情况：每种颜色取3个，共9个，再取1个必与其中一种相同，共10个。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },
  { question_body: "抽屉原理中，最坏情况分析需要考虑什么？", answer: "A", options_json: ["A. 所有可能的情况中最不利的一种", "B. 所有可能的情况中最有利的一种", "C. 所有可能的情况", "D. 部分可能的情况"], explanation: "最坏情况分析需要考虑所有可能的情况中最不利的一种。", knowledge_id: 79, question_type_id: 2, difficulty_id: 4 },

  // ===== 判断题 6题 =====
  { question_body: "抽屉原理中，把n+1个物体放入n个抽屉中，至少有一个抽屉里有2个物体。", answer: "正确", options_json: ["正确", "错误"], explanation: "抽屉原理的基本内容。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },
  { question_body: "抽屉原理也叫鸽巢原理。", answer: "正确", options_json: ["正确", "错误"], explanation: "抽屉原理也叫鸽巢原理。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },
  { question_body: "抽屉原理中，至少有一个抽屉里的物体数是向下取整的平均值。", answer: "错误", options_json: ["正确", "错误"], explanation: "至少有一个抽屉里的物体数是向上取整的平均值。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },
  { question_body: "抽屉原理由德国数学家狄利克雷提出。", answer: "正确", options_json: ["正确", "错误"], explanation: "抽屉原理由德国数学家狄利克雷提出，也叫鸽巢原理。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },
  { question_body: "抽屉原理中，最坏情况分析可以保证问题有解。", answer: "正确", options_json: ["正确", "错误"], explanation: "最坏情况分析可以保证问题有解。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },
  { question_body: "13个人中，至少有2个人的生肖相同。", answer: "正确", options_json: ["正确", "错误"], explanation: "12个生肖，13个人，至少有2个人生肖相同。", knowledge_id: 79, question_type_id: 3, difficulty_id: 2 },

  // ===== 填空题 10题 =====
  // 简单填空 6题 (difficulty_id=2)
  { question_body: "抽屉原理中，把n+1个物体放入n个抽屉中，至少有一个抽屉里有____个物体。", answer: "2", options_json: null, explanation: "抽屉原理的基本内容。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },
  { question_body: "有5个苹果放入4个盘子，至少有一个盘子里有____个苹果。", answer: "2", options_json: null, explanation: "抽屉原理：5个苹果放入4个盘子，至少有一个盘子里有2个苹果。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },
  { question_body: "13个人中，至少有____个人的生肖是相同的。", answer: "2", options_json: null, explanation: "12个生肖，13个人，至少有2个人生肖相同。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },
  { question_body: "抽屉原理中，把kn+1个物体放入n个抽屉中，至少有一个抽屉里有____个物体。", answer: "1", options_json: null, explanation: "抽屉原理：把kn+1个物体放入n个抽屉中，至少有一个抽屉里有k+1个物体。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },
  { question_body: "抽屉原理也叫____原理。", answer: "0", options_json: null, explanation: "抽屉原理也叫鸽巢原理。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },
  { question_body: "3个鸽笼里有4只鸽子，至少有____只鸽子在同一个鸽笼。", answer: "2", options_json: null, explanation: "抽屉原理，至少有2只鸽子在同一个鸽笼。", knowledge_id: 79, question_type_id: 1, difficulty_id: 2 },

  // 困难填空 4题 (difficulty_id=4)
  { question_body: "把10个苹果放入3个盘子，至少有一个盘子里至少有____个苹果。", answer: "4", options_json: null, explanation: "10÷3=3余1，所以至少有一个盘子里有4个苹果。", knowledge_id: 79, question_type_id: 1, difficulty_id: 4 },
  { question_body: "有红、黄、蓝三种颜色的球各10个，至少取____个球可以保证有两个颜色相同。", answer: "4", options_json: null, explanation: "最坏情况：取3个不同颜色，再取1个必与其中一个相同，共4个。", knowledge_id: 79, question_type_id: 1, difficulty_id: 4 },
  { question_body: "把20个苹果放入6个盘子，至少有一个盘子里至少有____个苹果。", answer: "4", options_json: null, explanation: "20÷6=3余2，所以至少有一个盘子里有4个苹果。", knowledge_id: 79, question_type_id: 1, difficulty_id: 4 },
  { question_body: "有红、黄、蓝三种颜色的球各10个，至少取____个球可以保证有三个颜色相同。", answer: "7", options_json: null, explanation: "最坏情况：每种颜色取2个，共6个，再取1个必与其中一种相同，共7个。", knowledge_id: 79, question_type_id: 1, difficulty_id: 4 }
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
    await connection.execute('DELETE FROM question_base WHERE knowledge_id = ?', [79]);
    await connection.beginTransaction();
    for (const q of knowledge79Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }
    await connection.commit();
    console.log('知识点79题目生成完成，共插入', knowledge79Questions.length, '题');
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
