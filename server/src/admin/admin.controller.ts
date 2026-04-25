import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KeyKnowledge } from '../key-knowledge/key-knowledge.entity';
import { Task } from '../tasks/task.entity';
import { Question } from '../questions/question.entity';

@Controller('admin')
export class AdminController {
  constructor(
    @InjectRepository(KeyKnowledge)
    private keyKnowledgeRepository: Repository<KeyKnowledge>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  @Post('generate-data')
  async generateData(@Body() body: {
    knowledgeIds: string[];
    taskType: 'comprehensive' | 'practice' | 'review';
  }) {
    const { knowledgeIds, taskType } = body;
    let tasksCreated = 0;
    let questionsCreated = 0;

    try {
      for (const knowledgeId of knowledgeIds) {
        // 查找对应的 key_knowledge
        const knowledge = await this.keyKnowledgeRepository.findOne({
          where: { id: parseInt(knowledgeId) },
        });

        if (!knowledge) {
          throw new HttpException(
            `Key knowledge with id ${knowledgeId} not found`,
            HttpStatus.NOT_FOUND,
          );
        }

        // 生成任务ID
        const taskId = `${taskType}-w${knowledge.weekId}d${knowledge.targetDay}-k${knowledge.id}`;

        // 生成任务
        const taskTitle = `【${this.getTaskTypeText(taskType)}】${knowledge.knowledgeText.substring(0, 20)}...`;
        const taskContent = `基于知识点：${knowledge.knowledgeText}\n\n请完成以下${this.getTaskTypeText(taskType)}题目，巩固对该知识点的理解。`;

        // 检查任务是否已存在
        const existingTask = await this.taskRepository.findOne({
          where: { taskId: taskId },
        });

        if (!existingTask) {
          const newTask = this.taskRepository.create({
            taskId: taskId,
            weekId: knowledge.weekId,
            dayNumber: knowledge.targetDay,
            taskType: taskType as any,
            title: taskTitle,
            content: taskContent,
          });
          await this.taskRepository.save(newTask);
          tasksCreated++;
        }

        // 生成题目
        const questions = this.generateQuestionsForKnowledge(knowledge, taskId, taskType);
        for (const question of questions) {
          const existingQuestion = await this.questionRepository.findOne({
            where: { questionId: question.questionId },
          });
          if (!existingQuestion) {
            const newQuestion = this.questionRepository.create(question);
            await this.questionRepository.save(newQuestion);
            questionsCreated++;
          }
        }
      }

      return {
        success: true,
        tasksCreated,
        questionsCreated,
        message: `成功生成 ${tasksCreated} 个任务和 ${questionsCreated} 个题目`,
      };
    } catch (error) {
      throw new HttpException(
        `生成数据失败: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('query-data')
  async queryData(@Body() body: {
    knowledgeIds: string[];
    taskType: 'comprehensive' | 'practice' | 'review';
  }) {
    const { knowledgeIds, taskType } = body;
    const tasks: any[] = [];
    const questions: any[] = [];

    try {
      for (const knowledgeId of knowledgeIds) {
        // 查找对应的 key_knowledge
        const knowledge = await this.keyKnowledgeRepository.findOne({
          where: { id: parseInt(knowledgeId) },
        });

        if (knowledge) {
          // 生成任务ID
          const taskId = `${taskType}-w${knowledge.weekId}d${knowledge.targetDay}-k${knowledge.id}`;

          // 查询任务
          const task = await this.taskRepository.findOne({
            where: { taskId: taskId },
          });

          if (task) {
            tasks.push(task);

            // 查询该任务的所有题目
            const taskQuestions = await this.questionRepository.find({
              where: { taskId: taskId },
            });

            questions.push(...taskQuestions);
          }
        }
      }

      return {
        success: true,
        tasks,
        questions,
        message: `找到 ${tasks.length} 个任务和 ${questions.length} 个题目`,
      };
    } catch (error) {
      throw new HttpException(
        `查询数据失败: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('generate-comprehensive')
  async generateComprehensive(@Body() body: {
    knowledgeIds: string[];
  }) {
    const { knowledgeIds } = body;
    let tasksCreated = 0;
    let questionsCreated = 0;

    try {
      for (const knowledgeId of knowledgeIds) {
        // 查找对应的 key_knowledge
        const knowledge = await this.keyKnowledgeRepository.findOne({
          where: { id: parseInt(knowledgeId) },
        });

        if (!knowledge) {
          throw new HttpException(
            `Key knowledge with id ${knowledgeId} not found`,
            HttpStatus.NOT_FOUND,
          );
        }

        // 生成任务ID
        const taskId = `comprehensive-w${knowledge.weekId}d${knowledge.targetDay}-k${knowledge.id}`;

        // 生成任务
        const taskTitle = `【综合练习】${knowledge.knowledgeText}`;
        const taskContent = `基于知识点：${knowledge.knowledgeText}\n\n请完成以下综合练习题目，巩固对该知识点的理解。`;

        // 检查任务是否已存在
        const existingTask = await this.taskRepository.findOne({
          where: { taskId: taskId },
        });

        if (!existingTask) {
          const newTask = this.taskRepository.create({
            taskId: taskId,
            weekId: knowledge.weekId,
            dayNumber: knowledge.targetDay,
            taskType: 'comprehensive' as any,
            title: taskTitle,
            content: taskContent,
            duration: "15", // 15分钟
          });
          await this.taskRepository.save(newTask);
          tasksCreated++;
        }

        // 生成题目
        const questions = this.generateQuestionsForKnowledge(knowledge, taskId, 'comprehensive');
        for (const question of questions) {
          const existingQuestion = await this.questionRepository.findOne({
            where: { questionId: question.questionId },
          });
          if (!existingQuestion) {
            const newQuestion = this.questionRepository.create(question);
            await this.questionRepository.save(newQuestion);
            questionsCreated++;
          }
        }
      }

      return {
        success: true,
        tasksCreated,
        questionsCreated,
        message: `成功生成 ${tasksCreated} 个任务和 ${questionsCreated} 个题目`,
      };
    } catch (error) {
      throw new HttpException(
        `生成数据失败: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private getTaskTypeText(taskType: string): string {
    const typeMap: Record<string, string> = {
      comprehensive: '综合',
      practice: '练习',
      review: '复习',
    };
    return typeMap[taskType] || taskType;
  }

  private generateQuestionsForKnowledge(knowledge: KeyKnowledge, taskId: string, taskType: string) {
    const questions: Partial<Question>[] = [];
    const baseId = `${taskId.replace(`${taskType}-`, `${taskType.charAt(0)}q_`)}`;
    
    // 生成10道题，至少6题为单选题
    let questionCount = 0;
    let multipleChoiceCount = 0;
    
    // 生成单选题
    while (multipleChoiceCount < 6 && questionCount < 10) {
      const question = this.generateMultipleChoiceQuestion(knowledge, taskId, baseId, questionCount + 1);
      if (question) {
        questions.push(question);
        questionCount++;
        multipleChoiceCount++;
      }
    }
    
    // 生成其他类型题目（判断题或填空题）
    while (questionCount < 10) {
      const question = this.generateOtherQuestion(knowledge, taskId, baseId, questionCount + 1);
      if (question) {
        questions.push(question);
        questionCount++;
      }
    }
    
    return questions;
  }

  private generateMultipleChoiceQuestion(knowledge: KeyKnowledge, taskId: string, baseId: string, index: number) {
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
        
      case 10: // 进阶计算技巧
        switch (index % 5) {
          case 1:
            questionBody = "计算：101 × 37 = ?";
            correctAnswer = "B";
            optionsJson = ['A. 3700', 'B. 3737', 'C. 3800', 'D. 3837'];
            explanation = "利用分配律：(100 + 1) × 37 = 3700 + 37 = 3737";
            break;
          case 2:
            questionBody = "计算：99 × 45 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 4455', 'B. 4500', 'C. 4545', 'D. 4600'];
            explanation = "利用分配律：(100 - 1) × 45 = 4500 - 45 = 4455";
            break;
          case 3:
            questionBody = "计算：25 × 44 = ?";
            correctAnswer = "B";
            optionsJson = ['A. 1000', 'B. 1100', 'C. 1200', 'D. 1300'];
            explanation = "利用分配律：25 × (40 + 4) = 1000 + 100 = 1100";
            break;
          case 4:
            questionBody = "计算：125 × 88 = ?";
            correctAnswer = "B";
            optionsJson = ['A. 10000', 'B. 11000', 'C. 12000', 'D. 13000'];
            explanation = "利用分配律：125 × (80 + 8) = 10000 + 1000 = 11000";
            break;
          case 0:
            questionBody = "计算：102 × 56 = ?";
            correctAnswer = "D";
            optionsJson = ['A. 5600', 'B. 5612', 'C. 5712', 'D. 5712'];
            explanation = "利用分配律：(100 + 2) × 56 = 5600 + 112 = 5712";
            break;
        }
        break;
        
      case 11: // 除法商不变
        switch (index % 5) {
          case 1:
            questionBody = "如果 48 ÷ 12 = 4，那么 480 ÷ 120 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 4', 'B. 40', 'C. 400', 'D. 0.4'];
            explanation = "除法商不变规律：被除数和除数同时扩大10倍，商不变";
            break;
          case 2:
            questionBody = "如果 120 ÷ 30 = 4，那么 12 ÷ 3 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 4', 'B. 40', 'C. 0.4', 'D. 400'];
            explanation = "除法商不变规律：被除数和除数同时缩小10倍，商不变";
            break;
          case 3:
            questionBody = "如果 96 ÷ 16 = 6，那么 48 ÷ 8 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 6', 'B. 3', 'C. 12', 'D. 24'];
            explanation = "除法商不变规律：被除数和除数同时缩小2倍，商不变";
            break;
          case 4:
            questionBody = "计算：4800 ÷ 1200 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 4', 'B. 40', 'C. 400', 'D. 0.4'];
            explanation = "除法商不变规律：被除数和除数同时缩小100倍，变为48 ÷ 12 = 4";
            break;
          case 0:
            questionBody = "如果 60 ÷ 15 = 4，那么 600 ÷ 150 = ?";
            correctAnswer = "A";
            optionsJson = ['A. 4', 'B. 40', 'C. 400', 'D. 0.4'];
            explanation = "除法商不变规律：被除数和除数同时扩大10倍，商不变";
            break;
        }
        break;
        
      case 12: // 质量单位换算
        switch (index % 5) {
          case 1:
            questionBody = "1吨 = ? 千克";
            correctAnswer = "B";
            optionsJson = ['A. 100', 'B. 1000', 'C. 10000', 'D. 10'];
            explanation = "1吨 = 1000千克";
            break;
          case 2:
            questionBody = "1千克 = ? 克";
            correctAnswer = "B";
            optionsJson = ['A. 100', 'B. 1000', 'C. 10000', 'D. 10'];
            explanation = "1千克 = 1000克";
            break;
          case 3:
            questionBody = "2吨 = ? 千克";
            correctAnswer = "B";
            optionsJson = ['A. 200', 'B. 2000', 'C. 20000', 'D. 20'];
            explanation = "2吨 = 2 × 1000 = 2000千克";
            break;
          case 4:
            questionBody = "5000克 = ? 千克";
            correctAnswer = "A";
            optionsJson = ['A. 5', 'B. 50', 'C. 500', 'D. 0.5'];
            explanation = "5000克 = 5000 ÷ 1000 = 5千克";
            break;
          case 0:
            questionBody = "3千克 = ? 克";
            correctAnswer = "C";
            optionsJson = ['A. 300', 'B. 30', 'C. 3000', 'D. 30000'];
            explanation = "3千克 = 3 × 1000 = 3000克";
            break;
        }
        break;
        
      case 13: // 归一归总问题
        switch (index % 5) {
          case 1:
            questionBody = "一辆汽车3小时行驶150千米，照这样计算，6小时行驶多少千米？";
            correctAnswer = "C";
            optionsJson = ['A. 200', 'B. 250', 'C. 300', 'D. 350'];
            explanation = "先求出每小时行驶的距离：150 ÷ 3 = 50千米，再计算6小时行驶的距离：50 × 6 = 300千米";
            break;
          case 2:
            questionBody = "5个工人4小时可以生产200个零件，照这样计算，10个工人8小时可以生产多少个零件？";
            correctAnswer = "C";
            optionsJson = ['A. 400', 'B. 600', 'C. 800', 'D. 1000'];
            explanation = "先求出1个工人1小时生产的零件数：200 ÷ 5 ÷ 4 = 10个，再计算10个工人8小时生产的零件数：10 × 10 × 8 = 800个";
            break;
          case 3:
            questionBody = "买3支铅笔需要6元，买9支铅笔需要多少钱？";
            correctAnswer = "B";
            optionsJson = ['A. 12', 'B. 18', 'C. 24', 'D. 30'];
            explanation = "先求出1支铅笔的价格：6 ÷ 3 = 2元，再计算9支铅笔的价格：2 × 9 = 18元";
            break;
          case 4:
            questionBody = "一项工程，8人12天可以完成，如果增加4人，多少天可以完成？";
            correctAnswer = "B";
            optionsJson = ['A. 6', 'B. 8', 'C. 10', 'D. 12'];
            explanation = "先求出总工作量：8 × 12 = 96，再计算增加4人后的天数：96 ÷ (8 + 4) = 8天";
            break;
          case 0:
            questionBody = "一辆汽车5小时行驶250千米，照这样计算，行驶400千米需要多少小时？";
            correctAnswer = "C";
            optionsJson = ['A. 6', 'B. 7', 'C. 8', 'D. 9'];
            explanation = "先求出每小时行驶的距离：250 ÷ 5 = 50千米，再计算行驶400千米需要的时间：400 ÷ 50 = 8小时";
            break;
        }
        break;
        
      case 14: // 和倍问题
        switch (index % 5) {
          case 1:
            questionBody = "甲数和乙数的和是48，甲数是乙数的3倍，甲数是多少？";
            correctAnswer = "C";
            optionsJson = ['A. 12', 'B. 24', 'C. 36', 'D. 48'];
            explanation = "设乙数为x，甲数为3x，x + 3x = 48，4x = 48，x = 12，所以甲数是3x = 36";
            break;
          case 2:
            questionBody = "学校有足球和篮球共60个，足球的个数是篮球的2倍，篮球有多少个？";
            correctAnswer = "B";
            optionsJson = ['A. 15', 'B. 20', 'C. 25', 'D. 30'];
            explanation = "设篮球有x个，足球有2x个，x + 2x = 60，3x = 60，x = 20";
            break;
          case 3:
            questionBody = "果园里有苹果树和梨树共120棵，苹果树的棵数是梨树的3倍，苹果树有多少棵？";
            correctAnswer = "C";
            optionsJson = ['A. 30', 'B. 60', 'C. 90', 'D. 120'];
            explanation = "设梨树有x棵，苹果树有3x棵，x + 3x = 120，4x = 120，x = 30，所以苹果树有3x = 90棵";
            break;
          case 4:
            questionBody = "甲、乙两数的和是72，甲是乙的5倍，乙是多少？";
            correctAnswer = "B";
            optionsJson = ['A. 10', 'B. 12', 'C. 14', 'D. 16'];
            explanation = "设乙为x，甲为5x，x + 5x = 72，6x = 72，x = 12";
            break;
          case 0:
            questionBody = "A和B共有180元，A的钱是B的2倍，A有多少钱？";
            correctAnswer = "C";
            optionsJson = ['A. 60', 'B. 90', 'C. 120', 'D. 150'];
            explanation = "设B有x元，A有2x元，x + 2x = 180，3x = 180，x = 60，所以A有2x = 120元";
            break;
        }
        break;
        
      case 15: // 差倍问题
        switch (index % 5) {
          case 1:
            questionBody = "甲数比乙数多30，甲数是乙数的4倍，乙数是多少？";
            correctAnswer = "B";
            optionsJson = ['A. 5', 'B. 10', 'C. 15', 'D. 20'];
            explanation = "设乙数为x，甲数为4x，4x - x = 30，3x = 30，x = 10";
            break;
          case 2:
            questionBody = "学校买的足球比篮球多24个，足球的个数是篮球的3倍，足球有多少个？";
            correctAnswer = "C";
            optionsJson = ['A. 12', 'B. 24', 'C. 36', 'D. 48'];
            explanation = "设篮球有x个，足球有3x个，3x - x = 24，2x = 24，x = 12，所以足球有3x = 36个";
            break;
          case 3:
            questionBody = "甲数比乙数多45，甲数是乙数的6倍，甲数是多少？";
            correctAnswer = "C";
            optionsJson = ['A. 9', 'B. 45', 'C. 54', 'D. 63'];
            explanation = "设乙数为x，甲数为6x，6x - x = 45，5x = 45，x = 9，所以甲数是6x = 54";
            break;
          case 4:
            questionBody = "果园里的苹果树比梨树多60棵，苹果树的棵数是梨树的4倍，梨树有多少棵？";
            correctAnswer = "B";
            optionsJson = ['A. 15', 'B. 20', 'C. 25', 'D. 30'];
            explanation = "设梨树有x棵，苹果树有4x棵，4x - x = 60，3x = 60，x = 20";
            break;
          case 0:
            questionBody = "A比B多72元，A的钱是B的7倍，B有多少钱？";
            correctAnswer = "A";
            optionsJson = ['A. 12', 'B. 18', 'C. 24', 'D. 30'];
            explanation = "设B有x元，A有7x元，7x - x = 72，6x = 72，x = 12";
            break;
        }
        break;
        
      case 16: // 和差问题
        switch (index % 5) {
          case 1:
            questionBody = "甲数和乙数的和是48，差是12，甲数是多少？";
            correctAnswer = "C";
            optionsJson = ['A. 18', 'B. 24', 'C. 30', 'D. 36'];
            explanation = "(和 + 差) ÷ 2 = 大数，(48 + 12) ÷ 2 = 30";
            break;
          case 2:
            questionBody = "甲数和乙数的和是72，差是16，乙数是多少？";
            correctAnswer = "A";
            optionsJson = ['A. 28', 'B. 36', 'C. 44', 'D. 56'];
            explanation = "(和 - 差) ÷ 2 = 小数，(72 - 16) ÷ 2 = 28";
            break;
          case 3:
            questionBody = "两数之和是90，两数之差是10，较大的数是多少？";
            correctAnswer = "C";
            optionsJson = ['A. 40', 'B. 45', 'C. 50', 'D. 55'];
            explanation = "(和 + 差) ÷ 2 = 大数，(90 + 10) ÷ 2 = 50";
            break;
          case 4:
            questionBody = "两数之和是120，两数之差是20，较小的数是多少？";
            correctAnswer = "B";
            optionsJson = ['A. 40', 'B. 50', 'C. 60', 'D. 70'];
            explanation = "(和 - 差) ÷ 2 = 小数，(120 - 20) ÷ 2 = 50";
            break;
          case 0:
            questionBody = "A和B共有200元，A比B多40元，A有多少钱？";
            correctAnswer = "D";
            optionsJson = ['A. 80', 'B. 100', 'C. 120', 'D. 120'];
            explanation = "(和 + 差) ÷ 2 = 大数，(200 + 40) ÷ 2 = 120";
            break;
        }
        break;
        
      case 17: // 年龄问题
        switch (index % 5) {
          case 1:
            questionBody = "今年小明8岁，爸爸32岁，几年后爸爸的年龄是小明的3倍？";
            correctAnswer = "B";
            optionsJson = ['A. 2', 'B. 4', 'C. 6', 'D. 8'];
            explanation = "设x年后爸爸的年龄是小明的3倍，32 + x = 3(8 + x)，32 + x = 24 + 3x，8 = 2x，x = 4";
            break;
          case 2:
            questionBody = "今年妈妈36岁，儿子12岁，几年前妈妈的年龄是儿子的4倍？";
            correctAnswer = "B";
            optionsJson = ['A. 2', 'B. 4', 'C. 6', 'D. 8'];
            explanation = "设x年前妈妈的年龄是儿子的4倍，36 - x = 4(12 - x)，36 - x = 48 - 4x，3x = 12，x = 4";
            break;
          case 3:
            questionBody = "今年哥哥15岁，弟弟10岁，当哥哥20岁时，弟弟多少岁？";
            correctAnswer = "D";
            optionsJson = ['A. 12', 'B. 13', 'C. 14', 'D. 15'];
            explanation = "哥哥和弟弟的年龄差是15 - 10 = 5岁，当哥哥20岁时，弟弟是20 - 5 = 15岁";
            break;
          case 4:
            questionBody = "今年爷爷70岁，孙子10岁，几年后爷爷的年龄是孙子的5倍？";
            correctAnswer = "B";
            optionsJson = ['A. 3', 'B. 5', 'C. 7', 'D. 9'];
            explanation = "设x年后爷爷的年龄是孙子的5倍，70 + x = 5(10 + x)，70 + x = 50 + 5x，20 = 4x，x = 5";
            break;
          case 0:
            questionBody = "今年爸爸40岁，儿子10岁，几年前爸爸的年龄是儿子的6倍？";
            correctAnswer = "A";
            optionsJson = ['A. 4', 'B. 5', 'C. 6', 'D. 7'];
            explanation = "设x年前爸爸的年龄是儿子的6倍，40 - x = 6(10 - x)，40 - x = 60 - 6x，5x = 20，x = 4";
            break;
        }
        break;
        
      case 18: // 植树问题（两端、一端、环形）
        switch (index % 5) {
          case 1:
            questionBody = "在一条长200米的公路两旁植树，每隔5米种一棵，两端都种，一共需要多少棵树苗？";
            correctAnswer = "D";
            optionsJson = ['A. 40', 'B. 41', 'C. 80', 'D. 82'];
            explanation = "间隔数 = 200 ÷ 5 = 40，两端都种，棵数 = 间隔数 + 1 = 41，两旁都种，所以是41 × 2 = 82棵";
            break;
          case 2:
            questionBody = "在一个周长为300米的圆形花坛周围植树，每隔6米种一棵，一共需要多少棵树苗？";
            correctAnswer = "B";
            optionsJson = ['A. 49', 'B. 50', 'C. 51', 'D. 52'];
            explanation = "环形植树，棵数 = 间隔数 = 300 ÷ 6 = 50棵";
            break;
          case 3:
            questionBody = "在一条长150米的走廊一侧安装路灯，每隔10米安装一盏，一端安装，一端不安装，一共需要多少盏路灯？";
            correctAnswer = "B";
            optionsJson = ['A. 14', 'B. 15', 'C. 16', 'D. 17'];
            explanation = "一端安装，一端不安装，棵数 = 间隔数 = 150 ÷ 10 = 15盏";
            break;
          case 4:
            questionBody = "在一条长120米的公路两旁植树，每隔8米种一棵，两端都不种，一共需要多少棵树苗？";
            correctAnswer = "C";
            optionsJson = ['A. 14', 'B. 15', 'C. 28', 'D. 30'];
            explanation = "间隔数 = 120 ÷ 8 = 15，两端都不种，棵数 = 间隔数 - 1 = 14，两旁都种，所以是14 × 2 = 28棵";
            break;
          case 0:
            questionBody = "在一条长180米的公路一侧植树，每隔9米种一棵，两端都种，一共需要多少棵树苗？";
            correctAnswer = "C";
            optionsJson = ['A. 19', 'B. 20', 'C. 21', 'D. 22'];
            explanation = "间隔数 = 180 ÷ 9 = 20，两端都种，棵数 = 间隔数 + 1 = 21棵";
            break;
        }
        break;
        
      case 19: // 周期问题（日期、图形、数列）
        switch (index % 5) {
          case 1:
            questionBody = "2023年1月1日是星期日，2023年1月31日是星期几？";
            correctAnswer = "B";
            optionsJson = ['A. 星期一', 'B. 星期二', 'C. 星期三', 'D. 星期四'];
            explanation = "从1月1日到1月31日共有30天，30 ÷ 7 = 4周余2天，星期日加2天是星期二";
            break;
          case 2:
            questionBody = "有一列数：1, 3, 5, 7, 9, 1, 3, 5, 7, 9, ...，第20个数是多少？";
            correctAnswer = "D";
            optionsJson = ['A. 1', 'B. 3', 'C. 7', 'D. 9'];
            explanation = "周期是5，20 ÷ 5 = 4，正好是第4个周期的最后一个数，即9";
            break;
          case 3:
            questionBody = "有一个图形序列：△□○△□○△□○...，第18个图形是什么？";
            correctAnswer = "C";
            optionsJson = ['A. △', 'B. □', 'C. ○', 'D. 无法确定'];
            explanation = "周期是3，18 ÷ 3 = 6，正好是第6个周期的最后一个图形，即○";
            break;
          case 4:
            questionBody = "今天是星期三，再过20天是星期几？";
            correctAnswer = "B";
            optionsJson = ['A. 星期一', 'B. 星期二', 'C. 星期三', 'D. 星期四'];
            explanation = "20 ÷ 7 = 2周余6天，星期三加6天是星期二";
            break;
          case 0:
            questionBody = "有一列数：2, 4, 6, 8, 2, 4, 6, 8, ...，第25个数是多少？";
            correctAnswer = "A";
            optionsJson = ['A. 2', 'B. 4', 'C. 6', 'D. 8'];
            explanation = "周期是4，25 ÷ 4 = 6余1，第1个数是2";
            break;
        }
        break;
        
      case 20: // 还原问题（倒推法）
        switch (index % 5) {
          case 1:
            questionBody = "一个数加上5，乘以5，减去5，除以5，结果还是5，这个数是多少？";
            correctAnswer = "A";
            optionsJson = ['A. 1', 'B. 5', 'C. 10', 'D. 15'];
            explanation = "倒推法：(5 × 5 + 5) ÷ 5 - 5 = (25 + 5) ÷ 5 - 5 = 30 ÷ 5 - 5 = 6 - 5 = 1";
            break;
          case 2:
            questionBody = "一堆苹果，第一次吃了一半，第二次吃了剩下的一半，第三次又吃了剩下的一半，最后还剩3个，这堆苹果原来有多少个？";
            correctAnswer = "C";
            optionsJson = ['A. 12', 'B. 18', 'C. 24', 'D. 30'];
            explanation = "倒推法：3 × 2 × 2 × 2 = 24个";
            break;
          case 3:
            questionBody = "一个数减去8，乘以4，加上8，除以4，结果是10，这个数是多少？";
            correctAnswer = "D";
            optionsJson = ['A. 10', 'B. 12', 'C. 14', 'D. 16'];
            explanation = "倒推法：(10 × 4 - 8) ÷ 4 + 8 = (40 - 8) ÷ 4 + 8 = 32 ÷ 4 + 8 = 8 + 8 = 16";
            break;
          case 4:
            questionBody = "小明有一些零花钱，买文具用了一半，买零食又用了剩下的一半，最后还剩10元，小明原来有多少零花钱？";
            correctAnswer = "C";
            optionsJson = ['A. 20', 'B. 30', 'C. 40', 'D. 50'];
            explanation = "倒推法：10 × 2 × 2 = 40元";
            break;
          case 0:
            questionBody = "一个数加上10，乘以10，减去10，除以10，结果是10，这个数是多少？";
            correctAnswer = "A";
            optionsJson = ['A. 1', 'B. 10', 'C. 11', 'D. 100'];
            explanation = "倒推法：(10 × 10 + 10) ÷ 10 - 10 = (100 + 10) ÷ 10 - 10 = 110 ÷ 10 - 10 = 11 - 10 = 1";
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

  private generateOtherQuestion(knowledge: KeyKnowledge, taskId: string, baseId: string, index: number) {
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
        case 10: // 进阶计算技巧
          questionBody = "判断：分配律只适用于加法";
          correctAnswer = "错误";
          explanation = "分配律适用于乘法对加法的分配，也适用于乘法对减法的分配";
          break;
        case 11: // 除法商不变
          questionBody = "判断：除法商不变规律只适用于整数除法";
          correctAnswer = "错误";
          explanation = "除法商不变规律适用于所有除法运算";
          break;
        case 12: // 质量单位换算
          questionBody = "判断：1吨比1千克重";
          correctAnswer = "正确";
          explanation = "1吨 = 1000千克，所以1吨比1千克重";
          break;
        case 13: // 归一归总问题
          questionBody = "判断：归一问题是先求出单一量，再求总量";
          correctAnswer = "正确";
          explanation = "归一问题的解题步骤是先求出单一量，再根据单一量求出总量";
          break;
        case 14: // 和倍问题
          questionBody = "判断：和倍问题是已知两个数的和与它们的倍数关系，求这两个数";
          correctAnswer = "正确";
          explanation = "和倍问题的定义就是已知两个数的和与它们的倍数关系，求这两个数";
          break;
        case 15: // 差倍问题
          questionBody = "判断：差倍问题是已知两个数的差与它们的倍数关系，求这两个数";
          correctAnswer = "正确";
          explanation = "差倍问题的定义就是已知两个数的差与它们的倍数关系，求这两个数";
          break;
        case 16: // 和差问题
          questionBody = "判断：和差问题是已知两个数的和与差，求这两个数";
          correctAnswer = "正确";
          explanation = "和差问题的定义就是已知两个数的和与差，求这两个数";
          break;
        case 17: // 年龄问题
          questionBody = "判断：年龄问题中，两人的年龄差是不变的";
          correctAnswer = "正确";
          explanation = "年龄问题的一个重要特点是两人的年龄差始终不变";
          break;
        case 18: // 植树问题
          questionBody = "判断：两端都不植树时，棵数 = 间隔数 - 1";
          correctAnswer = "正确";
          explanation = "两端都不植树的公式是：棵数 = 间隔数 - 1";
          break;
        case 19: // 周期问题
          questionBody = "判断：周期问题的关键是找到周期长度";
          correctAnswer = "正确";
          explanation = "解决周期问题的关键是找到周期的长度，然后用总数除以周期长度，根据余数确定位置";
          break;
        case 20: // 还原问题
          questionBody = "判断：还原问题通常使用倒推法解决";
          correctAnswer = "正确";
          explanation = "还原问题的特点是已知最后的结果，需要求最初的状态，通常使用倒推法从后往前计算";
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
        case 10: // 进阶计算技巧
          questionBody = "计算：25 × 40 = ?";
          correctAnswer = "1000";
          explanation = "25 × 40 = 1000";
          break;
        case 11: // 除法商不变
          questionBody = "如果 80 ÷ 20 = 4，那么 800 ÷ 200 = ?";
          correctAnswer = "4";
          explanation = "除法商不变规律：被除数和除数同时扩大10倍，商不变";
          break;
        case 12: // 质量单位换算
          questionBody = "3吨 = ? 千克";
          correctAnswer = "3000";
          explanation = "3吨 = 3 × 1000 = 3000千克";
          break;
        case 13: // 归一归总问题
          questionBody = "一辆汽车4小时行驶200千米，照这样计算，每小时行驶多少千米？";
          correctAnswer = "50";
          explanation = "200 ÷ 4 = 50千米/小时";
          break;
        case 14: // 和倍问题
          questionBody = "甲数和乙数的和是60，甲数是乙数的2倍，乙数是多少？";
          correctAnswer = "20";
          explanation = "设乙数为x，甲数为2x，x + 2x = 60，3x = 60，x = 20";
          break;
        case 15: // 差倍问题
          questionBody = "甲数比乙数多20，甲数是乙数的3倍，乙数是多少？";
          correctAnswer = "10";
          explanation = "设乙数为x，甲数为3x，3x - x = 20，2x = 20，x = 10";
          break;
        case 16: // 和差问题
          questionBody = "两数之和是80，两数之差是16，较大的数是多少？";
          correctAnswer = "48";
          explanation = "(和 + 差) ÷ 2 = 大数，(80 + 16) ÷ 2 = 48";
          break;
        case 17: // 年龄问题
          questionBody = "今年爸爸36岁，儿子6岁，爸爸的年龄是儿子的几倍？";
          correctAnswer = "6";
          explanation = "36 ÷ 6 = 6倍";
          break;
        case 18: // 植树问题
          questionBody = "在一条长100米的公路一侧植树，每隔5米种一棵，两端都种，一共需要多少棵树苗？";
          correctAnswer = "21";
          explanation = "间隔数 = 100 ÷ 5 = 20，两端都种，棵数 = 间隔数 + 1 = 21棵";
          break;
        case 19: // 周期问题
          questionBody = "有一列数：1, 2, 3, 1, 2, 3, ...，第10个数是多少？";
          correctAnswer = "1";
          explanation = "周期是3，10 ÷ 3 = 3余1，第1个数是1";
          break;
        case 20: // 还原问题
          questionBody = "一个数加上3，乘以3，减去3，除以3，结果还是3，这个数是多少？";
          correctAnswer = "1";
          explanation = "倒推法：(3 × 3 + 3) ÷ 3 - 3 = (9 + 3) ÷ 3 - 3 = 12 ÷ 3 - 3 = 4 - 3 = 1";
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
}