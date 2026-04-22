const { createConnection } = require('typeorm');
const Task = require('./dist/tasks/task.entity').Task;
const Question = require('./dist/questions/question.entity').Question;
const KeyKnowledge = require('./dist/key-knowledge/key-knowledge.entity').KeyKnowledge;

async function resetTasks() {
  try {
    // 创建数据库连接
    const connection = await createConnection({
      type: 'mysql',
      host: 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: 3306,
      username: 'mathmaster_dev',
      password: 'mathmaster_DEV123!',
      database: 'mathmaster',
      entities: [
        './dist/**/*.entity.js'
      ],
      synchronize: false,
    });

    console.log('数据库连接成功');

    // 删除task表中的所有数据
    const taskRepository = connection.getRepository(Task);
    await taskRepository.clear();
    console.log('已删除所有task数据');

    // 获取key_knowledge表中的数据（W1D1的核心奥义）
    const keyKnowledgeRepository = connection.getRepository(KeyKnowledge);
    const keyKnowledgeList = await keyKnowledgeRepository.find({
      where: {
        weekId: 1,
        targetDay: 1
      }
    });

    console.log('获取到核心奥义数据:', keyKnowledgeList.length, '条');

    // 生成练习题任务
    for (const knowledge of keyKnowledgeList) {
      const taskId = `practice-${knowledge.weekId}-${knowledge.targetDay}-${knowledge.id}`;
      const task = taskRepository.create({
        taskId,
        weekId: knowledge.weekId,
        dayNumber: knowledge.targetDay,
        taskType: 'practice',
        title: `${knowledge.knowledgeText} - 练习题`,
        duration: '10分钟',
        content: `包含5道关于"${knowledge.knowledgeText}"的练习题`,
        isCompleted: false
      });
      await taskRepository.save(task);
      console.log(`生成练习题任务: ${task.title}`);
    }

    // 生成综合回顾任务
    const reviewTaskId = `review-${1}-${1}`;
    const reviewTask = taskRepository.create({
      taskId: reviewTaskId,
      weekId: 1,
      dayNumber: 1,
      taskType: 'review',
      title: '综合回顾题',
      duration: '20分钟',
      content: '包含10道综合回顾题',
      isCompleted: false
    });
    await taskRepository.save(reviewTask);
    console.log('生成综合回顾任务');

    // 生成错题回顾任务
    const mistakeTaskId = `mistake-${1}-${1}`;
    const mistakeTask = taskRepository.create({
      taskId: mistakeTaskId,
      weekId: 1,
      dayNumber: 1,
      taskType: 'review',
      title: '错题回顾',
      duration: '15分钟',
      content: '包含最多10道错题',
      isCompleted: false
    });
    await taskRepository.save(mistakeTask);
    console.log('生成错题回顾任务');

    console.log('任务重置完成');
    await connection.close();
  } catch (error) {
    console.error('重置任务失败:', error);
  }
}

// 运行脚本
resetTasks();
