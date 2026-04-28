const { createConnection } = require('typeorm');
const KeyKnowledge = require('./server/src/key-knowledge/key-knowledge.entity').KeyKnowledge;
const Task = require('./server/src/tasks/task.entity').Task;
const Question = require('./server/src/questions/question.entity').Question;

// 数据库连接配置
const dbConfig = {
  type: 'mysql',
  host: process.env.DB_HOST || 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'mathmaster_dev',
  password: process.env.DB_PASSWORD || 'mathmaster_DEV123!',
  database: process.env.DB_NAME || 'mathmaster',
  entities: [__dirname + '/server/src/**/*.entity{.ts,.js}'],
  synchronize: false,
};

// 知识点数据（模拟）
const keyKnowledgeData = [
  {
    id: 7,
    weekId: 2,
    targetDay: 1,
    knowledgeText: '速度与准确率',
    filename: 'speed_accuracy.pdf'
  },
  {
    id: 8,
    weekId: 2,
    targetDay: 2,
    knowledgeText: '估算能力',
    filename: 'estimation.pdf'
  },
  {
    id: 9,
    weekId: 2,
    targetDay: 3,
    knowledgeText: '积的变化规律',
    filename: 'product_change.pdf'
  }
];

// 生成单选题
function generateMultipleChoiceQuestion(knowledge, taskId, baseId, index) {
  const options = ['A', 'B', 'C', 'D'];
  let questionBody = '';
  let correctAnswer = '';
  let optionsJson = [];
  let explanation = '';
  
  switch (knowledge.id) {
    case 7: // 速度与准确率
      switch (index % 5) {
        case 1:
          questionBody = "计算：25 × 4 = ?";
          correctAnswer = "C";
          optionsJson = ['A. 105', 'B. 101', 'C. 100', 'D. 99'];
          explanation = "25 × 4 = 100，这是常用的巧算组合";
          break;
        case 2:
          questionBody = "计算：125 × 8 = ?";
          correctAnswer = "A";
          optionsJson = ['A. 1000', 'B. 1001', 'C. 999', 'D. 1002'];
          explanation = "125 × 8 = 1000，这是重要的巧算组合";
          break;
        case 3:
          questionBody = "计算：25 × 12 = ?";
          correctAnswer = "B";
          optionsJson = ['A. 305', 'B. 300', 'C. 301', 'D. 299'];
          explanation = "25 × 12 = 25 × 4 × 3 = 100 × 3 = 300";
          break;
        case 4:
          questionBody = "计算：(40 + 4) × 25 = ?";
          correctAnswer = "D";
          optionsJson = ['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100'];
          explanation = "乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100";
          break;
        case 0:
          questionBody = "计算：15 × 20 = ?";
          correctAnswer = "A";
          optionsJson = ['A. 300', 'B. 310', 'C. 290', 'D. 305'];
          explanation = "15 × 20 = 300";
          break;
      }
      break;
      
    case 8: // 估算能力
      switch (index % 5) {
        case 1:
          questionBody = "估算：21 × 19 ≈ ?";
          correctAnswer = "B";
          optionsJson = ['A. 300', 'B. 400', 'C. 500', 'D. 600'];
          explanation = "21 ≈ 20，19 ≈ 20，20 × 20 = 400";
          break;
        case 2:
          questionBody = "估算：38 × 51 ≈ ?";
          correctAnswer = "C";
          optionsJson = ['A. 1500', 'B. 1800', 'C. 2000', 'D. 2500'];
          explanation = "38 ≈ 40，51 ≈ 50，40 × 50 = 2000";
          break;
        case 3:
          questionBody = "估算：123 × 78 ≈ ?";
          correctAnswer = "C";
          optionsJson = ['A. 8000', 'B. 9000', 'C. 9600', 'D. 10000'];
          explanation = "123 ≈ 120，78 ≈ 80，120 × 80 = 9600";
          break;
        case 4:
          questionBody = "估算：256 × 32 ≈ ?";
          correctAnswer = "B";
          optionsJson = ['A. 7000', 'B. 8000', 'C. 9000', 'D. 10000'];
          explanation = "256 ≈ 250，32 ≈ 32，250 × 32 = 8000";
          break;
        case 0:
          questionBody = "估算：49 × 82 ≈ ?";
          correctAnswer = "D";
          optionsJson = ['A. 3200', 'B. 3600', 'C. 4000', 'D. 4000'];
          explanation = "49 ≈ 50，82 ≈ 80，50 × 80 = 4000";
          break;
      }
      break;
      
    case 9: // 积的变化规律
      switch (index % 5) {
        case 1:
          questionBody = "一个因数不变，另一个因数扩大10倍，积会怎样变化？";
          correctAnswer = "B";
          optionsJson = ['A. 不变', 'B. 扩大10倍', 'C. 缩小10倍', 'D. 扩大100倍'];
          explanation = "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数";
          break;
        case 2:
          questionBody = "一个因数不变，另一个因数缩小5倍，积会怎样变化？";
          correctAnswer = "C";
          optionsJson = ['A. 不变', 'B. 扩大5倍', 'C. 缩小5倍', 'D. 缩小25倍'];
          explanation = "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数";
          break;
        case 3:
          questionBody = "如果 3 × 4 = 12，那么 3 × 40 = ?";
          correctAnswer = "B";
          optionsJson = ['A. 12', 'B. 120', 'C. 1200', 'D. 12000'];
          explanation = "一个因数3不变，另一个因数4扩大10倍变为40，积也扩大10倍变为120";
          break;
        case 4:
          questionBody = "如果 5 × 8 = 40，那么 5 × 2 = ?";
          correctAnswer = "A";
          optionsJson = ['A. 10', 'B. 20', 'C. 30', 'D. 40'];
          explanation = "一个因数5不变，另一个因数8缩小4倍变为2，积也缩小4倍变为10";
          break;
        case 0:
          questionBody = "如果 12 × 6 = 72，那么 12 × 60 = ?";
          correctAnswer = "C";
          optionsJson = ['A. 72', 'B. 7200', 'C. 720', 'D. 72000'];
          explanation = "一个因数12不变，另一个因数6扩大10倍变为60，积也扩大10倍变为720";
          break;
      }
      break;
    default:
      return null;
  }
  
  return {
    questionId: `${baseId}_${index}`,
    taskId: taskId,
    knowledgeId: knowledge.id,
    questionBody: questionBody,
    answer: correctAnswer,
    optionsJson: optionsJson,
    explanation: explanation,
    questionTypeId: 2, // 单选题
    difficultyId: 2,
    orderIndex: index,
  };
}

// 生成其他类型题目（判断题或填空题）
function generateOtherQuestion(knowledge, taskId, baseId, index) {
  // 随机生成判断题或填空题
  const isTrueFalse = Math.random() > 0.5;
  
  if (isTrueFalse) {
    // 生成判断题
    let questionBody = '';
    let correctAnswer = '';
    let explanation = '';
    
    switch (knowledge.id) {
      case 7: // 速度与准确率
        questionBody = "判断：在5分钟内完成20道复杂乘法口算是可以做到的";
        correctAnswer = "正确";
        explanation = "通过训练，是可以达到这个速度和准确率的";
        break;
      case 8: // 估算能力
        questionBody = "判断：估算时应该使用四舍五入法";
        correctAnswer = "正确";
        explanation = "四舍五入是常用的估算方法";
        break;
      case 9: // 积的变化规律
        questionBody = "判断：积的变化规律只适用于乘法";
        correctAnswer = "正确";
        explanation = "积的变化规律是乘法的基本规律";
        break;
      default:
        return null;
    }
    
    return {
      questionId: `${baseId}_${index}`,
      taskId: taskId,
      knowledgeId: knowledge.id,
      questionBody: questionBody,
      answer: correctAnswer,
      optionsJson: ['正确', '错误'],
      explanation: explanation,
      questionTypeId: 3, // 是非题
      difficultyId: 1,
      orderIndex: index,
    };
  } else {
    // 生成填空题（仅限数字答案）
    let questionBody = '';
    let correctAnswer = '';
    let explanation = '';
    
    switch (knowledge.id) {
      case 7: // 速度与准确率
        questionBody = "计算：25 × 8 = ?";
        correctAnswer = "200";
        explanation = "25 × 8 = 200";
        break;
      case 8: // 估算能力
        questionBody = "估算：51 × 19 ≈ ?";
        correctAnswer = "1000";
        explanation = "51 ≈ 50，19 ≈ 20，50 × 20 = 1000";
        break;
      case 9: // 积的变化规律
        questionBody = "如果 4 × 5 = 20，那么 4 × 50 = ?";
        correctAnswer = "200";
        explanation = "一个因数4不变，另一个因数5扩大10倍变为50，积也扩大10倍变为200";
        break;
      default:
        return null;
    }
    
    return {
      questionId: `${baseId}_${index}`,
      taskId: taskId,
      knowledgeId: knowledge.id,
      questionBody: questionBody,
      answer: correctAnswer,
      explanation: explanation,
      questionTypeId: 1, // 填空题
      difficultyId: 2,
      orderIndex: index,
    };
  }
}

// 生成题目
function generateQuestionsForKnowledge(knowledge, taskId, taskType) {
  const questions = [];
  const baseId = `${taskId.replace(`${taskType}-`, `${taskType.charAt(0)}q_`)}`;
  
  // 生成10道题，至少6题为单选题
  let questionCount = 0;
  let multipleChoiceCount = 0;
  
  // 生成单选题
  while (multipleChoiceCount < 6 && questionCount < 10) {
    const question = generateMultipleChoiceQuestion(knowledge, taskId, baseId, questionCount + 1);
    if (question) {
      questions.push(question);
      questionCount++;
      multipleChoiceCount++;
    }
  }
  
  // 生成其他类型题目（判断题或填空题）
  while (questionCount < 10) {
    const question = generateOtherQuestion(knowledge, taskId, baseId, questionCount + 1);
    if (question) {
      questions.push(question);
      questionCount++;
    }
  }
  
  return questions;
}

// 主函数
async function generateData() {
  let connection;
  try {
    // 连接数据库
    connection = await createConnection(dbConfig);
    console.log('数据库连接成功');
    
    const taskRepository = connection.getRepository(Task);
    const questionRepository = connection.getRepository(Question);
    
    let tasksCreated = 0;
    let questionsCreated = 0;
    
    for (const knowledge of keyKnowledgeData) {
      // 生成任务ID
      const taskId = `comprehensive-w${knowledge.weekId}d${knowledge.targetDay}-k${knowledge.id}`;
      
      // 生成任务
      const taskTitle = `【综合练习】${knowledge.knowledgeText}`;
      const taskContent = `基于知识点：${knowledge.knowledgeText}\n\n请完成以下综合练习题目，巩固对该知识点的理解。`;
      
      // 检查任务是否已存在
      const existingTask = await taskRepository.findOne({
        where: { taskId: taskId },
      });
      
      if (!existingTask) {
        const newTask = taskRepository.create({
          taskId: taskId,
          weekId: knowledge.weekId,
          dayNumber: knowledge.targetDay,
          taskType: 'comprehensive',
          title: taskTitle,
          content: taskContent,
          duration: 15, // 15分钟
        });
        await taskRepository.save(newTask);
        tasksCreated++;
        console.log(`创建任务：${taskTitle}`);
      }
      
      // 生成题目
      const questions = generateQuestionsForKnowledge(knowledge, taskId, 'comprehensive');
      for (const question of questions) {
        const existingQuestion = await questionRepository.findOne({
          where: { questionId: question.questionId },
        });
        if (!existingQuestion) {
          const newQuestion = questionRepository.create(question);
          await questionRepository.save(newQuestion);
          questionsCreated++;
        }
      }
    }
    
    console.log(`\n生成完成：`);
    console.log(`- 任务：${tasksCreated} 个`);
    console.log(`- 题目：${questionsCreated} 个`);
    
  } catch (error) {
    console.error('生成数据失败:', error);
  } finally {
    if (connection) {
      await connection.close();
      console.log('数据库连接已关闭');
    }
  }
}

// 运行生成数据
if (require.main === module) {
  generateData();
}

module.exports = { generateData };