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
    
    switch (knowledge.id) {
      case 7: // 速度与准确率
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "计算：25 × 4 = ?",
            answer: "100",
            optionsJson: ['A. 105', 'B. 101', 'C. 100', 'D. 99'],
            explanation: "25 × 4 = 100，这是常用的巧算组合",
            questionTypeId: 2, // 单选题
            difficultyId: 1,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "计算：125 × 8 = ?",
            answer: "1000",
            optionsJson: ['A. 1000', 'B. 1001', 'C. 999', 'D. 1002'],
            explanation: "125 × 8 = 1000，这是重要的巧算组合",
            questionTypeId: 2,
            difficultyId: 1,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "计算：25 × 12 = ?",
            answer: "300",
            optionsJson: ['A. 305', 'B. 300', 'C. 301', 'D. 299'],
            explanation: "25 × 12 = 25 × 4 × 3 = 100 × 3 = 300",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "判断：在5分钟内完成20道复杂乘法口算是可以做到的",
            answer: "正确",
            optionsJson: ['正确', '错误'],
            explanation: "通过训练，是可以达到这个速度和准确率的",
            questionTypeId: 3, // 是非题
            difficultyId: 2,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "计算：(40 + 4) × 25 = ?",
            answer: "1100",
            optionsJson: ['A. 1099', 'B. 1105', 'C. 1101', 'D. 1100'],
            explanation: "乘法分配律：40 × 25 + 4 × 25 = 1000 + 100 = 1100",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 5,
          }
        );
        break;
        
      case 8: // 估算能力
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "估算：21 × 19 ≈ ?",
            answer: "400",
            optionsJson: ['A. 300', 'B. 400', 'C. 500', 'D. 600'],
            explanation: "21 ≈ 20，19 ≈ 20，20 × 20 = 400",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "估算：38 × 51 ≈ ?",
            answer: "2000",
            optionsJson: ['A. 1500', 'B. 1800', 'C. 2000', 'D. 2500'],
            explanation: "38 ≈ 40，51 ≈ 50，40 × 50 = 2000",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "判断：估算时应该使用四舍五入法",
            answer: "正确",
            optionsJson: ['正确', '错误'],
            explanation: "四舍五入是常用的估算方法",
            questionTypeId: 3,
            difficultyId: 1,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "估算：123 × 78 ≈ ?",
            answer: "9600",
            optionsJson: ['A. 8000', 'B. 9000', 'C. 9600', 'D. 10000'],
            explanation: "123 ≈ 120，78 ≈ 80，120 × 80 = 9600",
            questionTypeId: 2,
            difficultyId: 3,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "估算：256 × 32 ≈ ?",
            answer: "8000",
            optionsJson: ['A. 7000', 'B. 8000', 'C. 9000', 'D. 10000'],
            explanation: "256 ≈ 250，32 ≈ 32，250 × 32 = 8000",
            questionTypeId: 2,
            difficultyId: 3,
            orderIndex: 5,
          }
        );
        break;
        
      case 9: // 积的变化规律
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "一个因数不变，另一个因数扩大10倍，积会怎样变化？",
            answer: "扩大10倍",
            optionsJson: ['A. 不变', 'B. 扩大10倍', 'C. 缩小10倍', 'D. 扩大100倍'],
            explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "一个因数不变，另一个因数缩小5倍，积会怎样变化？",
            answer: "缩小5倍",
            optionsJson: ['A. 不变', 'B. 扩大5倍', 'C. 缩小5倍', 'D. 缩小25倍'],
            explanation: "积的变化规律：一个因数不变，另一个因数扩大/缩小多少倍，积也扩大/缩小相同的倍数",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "如果 3 × 4 = 12，那么 3 × 40 = ?",
            answer: "120",
            optionsJson: ['A. 12', 'B. 120', 'C. 1200', 'D. 12000'],
            explanation: "一个因数3不变，另一个因数4扩大10倍变为40，积也扩大10倍变为120",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "判断：积的变化规律只适用于乘法",
            answer: "正确",
            optionsJson: ['正确', '错误'],
            explanation: "积的变化规律是乘法的基本规律",
            questionTypeId: 3,
            difficultyId: 1,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "如果 5 × 8 = 40，那么 5 × 2 = ?",
            answer: "10",
            optionsJson: ['A. 10', 'B. 20', 'C. 30', 'D. 40'],
            explanation: "一个因数5不变，另一个因数8缩小4倍变为2，积也缩小4倍变为10",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 5,
          }
        );
        break;
        
      case 10: // 进阶计算技巧
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "计算：101 × 37 = ?",
            answer: "3737",
            optionsJson: ['A. 3700', 'B. 3737', 'C. 3800', 'D. 3837'],
            explanation: "利用分配律：(100 + 1) × 37 = 3700 + 37 = 3737",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "计算：99 × 45 = ?",
            answer: "4455",
            optionsJson: ['A. 4455', 'B. 4500', 'C. 4545', 'D. 4600'],
            explanation: "利用分配律：(100 - 1) × 45 = 4500 - 45 = 4455",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "计算：25 × 44 = ?",
            answer: "1100",
            optionsJson: ['A. 1000', 'B. 1100', 'C. 1200', 'D. 1300'],
            explanation: "利用分配律：25 × (40 + 4) = 1000 + 100 = 1100",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "判断：分配律只适用于加法",
            answer: "错误",
            optionsJson: ['正确', '错误'],
            explanation: "分配律适用于乘法对加法的分配，也适用于乘法对减法的分配",
            questionTypeId: 3,
            difficultyId: 1,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "计算：125 × 88 = ?",
            answer: "11000",
            optionsJson: ['A. 10000', 'B. 11000', 'C. 12000', 'D. 13000'],
            explanation: "利用分配律：125 × (80 + 8) = 10000 + 1000 = 11000",
            questionTypeId: 2,
            difficultyId: 3,
            orderIndex: 5,
          }
        );
        break;
        
      case 11: // 除法商不变
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "如果 48 ÷ 12 = 4，那么 480 ÷ 120 = ?",
            answer: "4",
            optionsJson: ['A. 4', 'B. 40', 'C. 400', 'D. 0.4'],
            explanation: "除法商不变规律：被除数和除数同时扩大10倍，商不变",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "如果 120 ÷ 30 = 4，那么 12 ÷ 3 = ?",
            answer: "4",
            optionsJson: ['A. 4', 'B. 40', 'C. 0.4', 'D. 400'],
            explanation: "除法商不变规律：被除数和除数同时缩小10倍，商不变",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "判断：除法商不变规律只适用于整数除法",
            answer: "错误",
            optionsJson: ['正确', '错误'],
            explanation: "除法商不变规律适用于所有除法运算",
            questionTypeId: 3,
            difficultyId: 1,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "如果 96 ÷ 16 = 6，那么 48 ÷ 8 = ?",
            answer: "6",
            optionsJson: ['A. 6', 'B. 3', 'C. 12', 'D. 24'],
            explanation: "除法商不变规律：被除数和除数同时缩小2倍，商不变",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "计算：4800 ÷ 1200 = ?",
            answer: "4",
            optionsJson: ['A. 4', 'B. 40', 'C. 400', 'D. 0.4'],
            explanation: "除法商不变规律：被除数和除数同时缩小100倍，变为48 ÷ 12 = 4",
            questionTypeId: 2,
            difficultyId: 2,
            orderIndex: 5,
          }
        );
        break;
        
      case 12: // 质量单位换算
        questions.push(
          {
            questionId: `${baseId}_1`,
            taskId: taskId,
            questionBody: "1吨 = ? 千克",
            answer: "1000",
            optionsJson: ['A. 100', 'B. 1000', 'C. 10000', 'D. 10'],
            explanation: "1吨 = 1000千克",
            questionTypeId: 2,
            difficultyId: 1,
            orderIndex: 1,
          },
          {
            questionId: `${baseId}_2`,
            taskId: taskId,
            questionBody: "1千克 = ? 克",
            answer: "1000",
            optionsJson: ['A. 100', 'B. 1000', 'C. 10000', 'D. 10'],
            explanation: "1千克 = 1000克",
            questionTypeId: 2,
            difficultyId: 1,
            orderIndex: 2,
          },
          {
            questionId: `${baseId}_3`,
            taskId: taskId,
            questionBody: "2吨 = ? 千克",
            answer: "2000",
            optionsJson: ['A. 200', 'B. 2000', 'C. 20000', 'D. 20'],
            explanation: "2吨 = 2 × 1000 = 2000千克",
            questionTypeId: 2,
            difficultyId: 1,
            orderIndex: 3,
          },
          {
            questionId: `${baseId}_4`,
            taskId: taskId,
            questionBody: "判断：1吨比1千克重",
            answer: "正确",
            optionsJson: ['正确', '错误'],
            explanation: "1吨 = 1000千克，所以1吨比1千克重",
            questionTypeId: 3,
            difficultyId: 1,
            orderIndex: 4,
          },
          {
            questionId: `${baseId}_5`,
            taskId: taskId,
            questionBody: "5000克 = ? 千克",
            answer: "5",
            optionsJson: ['A. 5', 'B. 50', 'C. 500', 'D. 0.5'],
            explanation: "5000克 = 5000 ÷ 1000 = 5千克",
            questionTypeId: 2,
            difficultyId: 1,
            orderIndex: 5,
          }
        );
        break;
    }
    
    return questions;
  }
}