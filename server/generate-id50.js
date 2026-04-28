const mysql = require('mysql2/promise');

const knowledge50Questions = [
  // ===== 单选题 24题 =====
  // 简单题 12题 (difficulty_id=2)
  { question_body: '立体等积变形的核心原理是？', answer: 'A', options_json: ['A. 体积不变原理', 'B. 形状不变原理', 'C. 重量不变原理', 'D. 面积不变原理'], explanation: '立体等积变形的核心原理是体积不变原理。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一块铁块熔铸成一个铁球，体积如何变化？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '将铁块熔铸成铁球，体积不变（形状改变但质量不变）。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '立体等积变形中，常用的计算公式是？', answer: 'C', options_json: ['A. V1=V2+S', 'B. V1=V2-S', 'C. V1=V2', 'D. V1>V2'], explanation: '立体等积变形中，变形前后的体积相等，即V1=V2。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '熔铸问题的特点是？', answer: 'A', options_json: ['A. 形状改变，体积不变', 'B. 形状不变，体积改变', 'C. 形状和体积都改变', 'D. 形状和体积都不变'], explanation: '熔铸问题的特点是形状改变，但体积不变。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '倒水问题的特点是？', answer: 'A', options_json: ['A. 容器改变，体积不变', 'B. 容器不变，体积改变', 'C. 容器和体积都改变', 'D. 容器和体积都不变'], explanation: '倒水问题的特点是容器改变，但水的体积不变。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个正方体铁块熔铸成一个长方体铁块，体积如何变化？', answer: 'B', options_json: ['A. 变大', 'B. 不变', 'C. 变小', 'D. 无法确定'], explanation: '正方体熔铸成长方体，体积不变。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '立体等积变形不包括以下哪种情况？', answer: 'D', options_json: ['A. 熔铸', 'B. 倒水', 'C. 拼接', 'D. 染色'], explanation: '立体等积变形包括熔铸、倒水、拼接等，不包括染色。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个圆柱形容器的水倒入一个长方体容器中，水的体积如何变化？', answer: 'A', options_json: ['A. 不变', 'B. 变大', 'C. 变小', 'D. 无法确定'], explanation: '将水从圆柱形容器倒入长方体容器，水的体积不变。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '等积变形的"等积"是什么意思？', answer: 'B', options_json: ['A. 面积相等', 'B. 体积相等', 'C. 形状相等', 'D. 周长相等'], explanation: '"等积"是指体积相等。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一块蜡块熔铸成一个圆柱体，体积如何变化？', answer: 'A', options_json: ['A. 不变', 'B. 变大', 'C. 变小', 'D. 无法确定'], explanation: '蜡块熔铸成圆柱体，体积不变。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '将一个正方体铜块熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的多少？', answer: 'B', options_json: ['A. 1/2', 'B. 1/8', 'C. 1/4', 'D. 1/6'], explanation: '熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的1/8。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  { question_body: '立体等积变形的应用包括？', answer: 'A', options_json: ['A. 计算熔铸后的尺寸', 'B. 计算染色问题', 'C. 计算三视图', 'D. 计算格点面积'], explanation: '立体等积变形的应用包括计算熔铸后的尺寸等。', knowledge_id: 50, question_type_id: 2, difficulty_id: 2 },
  // 中等题 6题 (difficulty_id=3)
  { question_body: '将一块棱长为6厘米的正方体铁块熔铸成一个长8厘米、宽6厘米的长方体铁块，长方体铁块的高是多少厘米？', answer: 'C', options_json: ['A. 6', 'B. 8', 'C. 6', 'D. 12'], explanation: '正方体体积=6³=216立方厘米，长方体底面积=8×6=48平方厘米，高=216÷48=4.5厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一块体积为216立方厘米的正方体铁块熔铸成一个圆柱体，圆柱体的底面积为27平方厘米，圆柱体的高是多少厘米？', answer: 'B', options_json: ['A. 4', 'B. 8', 'C. 6', 'D. 12'], explanation: '圆柱体体积=底面积×高，216=27×h，h=216÷27=8厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个圆柱形容器（底面半径5厘米、高12厘米）的水倒入一个长方体容器（长10厘米、宽8厘米）中，水的高度是多少厘米？', answer: 'A', options_json: ['A. 约11.8', 'B. 12', 'C. 10', 'D. 15'], explanation: '圆柱形容积=π×5²×12=300π立方厘米，长方体底面积=10×8=80平方厘米，水高度=300π÷80≈11.8厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一块体积为1000立方厘米的铁块熔铸成一个棱长为10厘米的正方体铁块，铸铁块的体积是多少？', answer: 'C', options_json: ['A. 900', 'B. 1000', 'C. 1000', 'D. 1100'], explanation: '熔铸前后的体积相等，所以铸铁块的体积是1000立方厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个底面半径为3厘米、高为10厘米的圆柱体铁块熔铸成一个正方体铁块，正方体铁块的棱长是多少厘米？', answer: 'B', options_json: ['A. 3', 'B. 约6.7', 'C. 5', 'D. 4'], explanation: '圆柱体体积=π×3²×10=90π立方厘米，正方体体积=棱长³=90π，棱长=∛(90π)≈6.7厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  { question_body: '将一个长10厘米、宽8厘米、高5厘米的长方体铁块熔铸成一个圆柱体铁块，圆柱体的体积是多少立方厘米？', answer: 'A', options_json: ['A. 400', 'B. 200', 'C. 300', 'D. 500'], explanation: '长方体体积=10×8×5=400立方厘米，熔铸成圆柱体后体积不变，还是400立方厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 3 },
  // 困难题 6题 (difficulty_id=4)
  { question_body: '将一个底面半径为4厘米、高为9厘米的圆柱体铁块熔铸成三个相同的小圆柱体，每个小圆柱体的体积是多少立方厘米？', answer: 'B', options_json: ['A. 36π', 'B. 48π', 'C. 24π', 'D. 72π'], explanation: '圆柱体体积=π×4²×9=144π立方厘米，三个相同小圆柱体，每个体积=144π÷3=48π立方厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个内壁底面为边长10厘米的正方体容器装满水，然后将水全部倒入一个底面半径为5厘米的圆柱体容器中，圆柱体容器的水高是多少厘米？', answer: 'C', options_json: ['A. 10', 'B. 8', 'C. 12.7', 'D. 15'], explanation: '正方体容器容积=10³=1000立方厘米，圆柱体底面积=π×5²=25π平方厘米，水高度=1000÷(25π)≈12.7厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个体积为432立方厘米的正方体铁块熔铸成两个相同的长方体铁块，每个长方体的体积是多少立方厘米？', answer: 'A', options_json: ['A. 216', 'B. 432', 'C. 144', 'D. 108'], explanation: '熔铸成两个相同的长方体，每个长方体的体积=432÷2=216立方厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个棱长为6厘米的正方体铁块熔铸成三个相同的圆柱体铁块，每个圆柱体的体积是多少立方厘米？（结果保留π）', answer: 'B', options_json: ['A. 12π', 'B. 72π', 'C. 36π', 'D. 24π'], explanation: '正方体体积=6³=216立方厘米，三个相同圆柱体，每个体积=216÷3=72立方厘米，即72π/π=72π立方厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个长方体形状的水池（长8米、宽5米、深2米）装满水，然后将水全部倒入一个圆柱形水缸（底面直径4米）中，水缸的水高是多少米？', answer: 'A', options_json: ['A. 约6.4', 'B. 8', 'C. 5', 'D. 4'], explanation: '水池容积=8×5×2=80立方米，圆柱形水缸底面积=π×2²=4π平方米，水高=80÷(4π)≈6.4米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  { question_body: '将一个体积为1800立方厘米的圆柱体铁块熔铸成一个正方体铁块，正方体铁块的棱长是多少厘米？（结果保留整数）', answer: 'C', options_json: ['A. 10', 'B. 11', 'C. 12', 'D. 13'], explanation: '正方体体积=棱长³=1800，棱长=∛1800≈12厘米。', knowledge_id: 50, question_type_id: 2, difficulty_id: 4 },
  // ===== 判断题 6题 =====
  { question_body: '判断：立体等积变形的核心原理是体积不变原理。', answer: '正确', options_json: ['正确', '错误'], explanation: '立体等积变形的核心原理是体积不变原理。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：将一块铁块熔铸成一个铁球，体积变大。', answer: '错误', options_json: ['正确', '错误'], explanation: '将铁块熔铸成铁球，体积不变（形状改变但质量不变）。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：熔铸问题的特点是形状改变，体积不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '熔铸问题的特点是形状改变，但体积不变。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：倒水问题的特点是容器改变，体积不变。', answer: '正确', options_json: ['正确', '错误'], explanation: '倒水问题的特点是容器改变，但水的体积不变。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：等积变形的"等积"是指体积相等。', answer: '正确', options_json: ['正确', '错误'], explanation: '"等积"是指体积相等。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  { question_body: '判断：将一个正方体铁块熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的1/2。', answer: '错误', options_json: ['正确', '错误'], explanation: '熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的1/8。', knowledge_id: 50, question_type_id: 3, difficulty_id: 2 },
  // ===== 填空题 10题 =====
  // 简单填空 6题
  { question_body: '立体等积变形的核心原理是____不变原理。', answer: '体积', options_json: null, explanation: '立体等积变形的核心原理是体积不变原理。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  { question_body: '熔铸问题的特点是形状改变，____不变。', answer: '体积', options_json: null, explanation: '熔铸问题的特点是形状改变，但体积不变。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  { question_body: '倒水问题的特点是容器改变，____不变。', answer: '体积', options_json: null, explanation: '倒水问题的特点是容器改变，但水的体积不变。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  { question_body: '等积变形的"等积"是指____相等。', answer: '体积', options_json: null, explanation: '"等积"是指体积相等。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  { question_body: '将一个正方体铁块熔铸成一个长方体铁块，体积____。', answer: '不变', options_json: null, explanation: '正方体熔铸成长方体，体积不变。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  { question_body: '将一个正方体铁块熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的____。', answer: '1/8', options_json: null, explanation: '熔铸成8个相同的小正方体，每个小正方体的体积是原正方体的1/8。', knowledge_id: 50, question_type_id: 1, difficulty_id: 2 },
  // 困难填空 4题
  { question_body: '将一块棱长为6厘米的正方体铁块熔铸成一个长8厘米、宽6厘米的长方体铁块，长方体铁块的高是____厘米。', answer: '4.5', options_json: null, explanation: '正方体体积=6³=216立方厘米，长方体底面积=8×6=48平方厘米，高=216÷48=4.5厘米。', knowledge_id: 50, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将一块体积为216立方厘米的正方体铁块熔铸成一个圆柱体，圆柱体的底面积为27平方厘米，圆柱体的高是____厘米。', answer: '8', options_json: null, explanation: '圆柱体体积=底面积×高，216=27×h，h=216÷27=8厘米。', knowledge_id: 50, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将一个底面半径为4厘米、高为9厘米的圆柱体铁块熔铸成三个相同的小圆柱体，每个小圆柱体的体积是____立方厘米。', answer: '48π', options_json: null, explanation: '圆柱体体积=π×4²×9=144π立方厘米，三个相同小圆柱体，每个体积=144π÷3=48π立方厘米。', knowledge_id: 50, question_type_id: 1, difficulty_id: 4 },
  { question_body: '将一个体积为432立方厘米的正方体铁块熔铸成两个相同的长方体铁块，每个长方体的体积是____立方厘米。', answer: '216', options_json: null, explanation: '熔铸成两个相同的长方体，每个长方体的体积=432÷2=216立方厘米。', knowledge_id: 50, question_type_id: 1, difficulty_id: 4 }
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

    for (const q of knowledge50Questions) {
      await connection.execute(
        'INSERT INTO question_base (question_body, answer, options_json, explanation, knowledge_id, question_type_id, difficulty_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.question_body, q.answer, q.options_json ? JSON.stringify(q.options_json) : null, q.explanation, q.knowledge_id, q.question_type_id, q.difficulty_id]
      );
    }

    await connection.commit();
    console.log(`知识点50题目生成完成，共插入 ${knowledge50Questions.length} 题`);
  } catch (error) {
    await connection.rollback();
    console.error('插入失败:', error);
  } finally {
    await connection.end();
  }
}

generateQuestionBase();
