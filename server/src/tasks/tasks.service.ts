import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { UserMistakesService } from '../users/user-mistakes.service';
import { QuestionsService } from '../questions/questions.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly userMistakesService: UserMistakesService,
    private readonly questionsService: QuestionsService,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find({
      relations: ['week', 'questions'],
      order: { weekId: 'ASC', dayNumber: 'ASC' },
    });
  }

  async findByWeek(weekId: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: { weekId },
      relations: ['questions'],
      order: { dayNumber: 'ASC' },
    });
  }

  async findByWeekAndDay(weekId: number, dayNumber: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: { weekId, dayNumber },
      relations: ['questions'],
      order: { taskId: 'ASC' },
    });
  }

  async findOne(taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { taskId },
      relations: ['week', 'questions'],
    });
    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
    return task;
  }

  async findByIds(taskIds: string[]): Promise<Task[]> {
    return this.taskRepository.find({
      where: { taskId: In(taskIds) },
      relations: ['week', 'questions'],
    });
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(taskId);
    Object.assign(task, updateTaskDto);
    return this.taskRepository.save(task);
  }

  async remove(taskId: string): Promise<void> {
    const task = await this.findOne(taskId);
    await this.taskRepository.remove(task);
  }

  async getComprehensiveReview(week: number, day: number): Promise<any> {
    // 这里应该从数据库获取综合回顾任务
    // 暂时返回默认数据
    return {
      isCompleted: false,
      questions: Array(10).fill(0).map((_, i) => ({
        id: `review-${week}-${day}-${i+1}`,
        type: 'multiple-choice',
        question: `综合回顾题 ${i+1}：请选择正确答案`,
        answer: 'A',
        options: ['A. 选项1', 'B. 选项2', 'C. 选项3', 'D. 选项4'],
        explanation: '这是综合回顾题的解析。'
      }))
    };
  }

  async getMistakeReview(userId: number, week: number, day: number): Promise<any> {
    try {
      // 从数据库获取用户的错题
      const mistakes = await this.userMistakesService.getUserMistakes(userId, false);
      
      // 最多取5道题，按创建时间从旧到新排序
      const selectedMistakes = mistakes
        .filter(mistake => mistake.createdAt) // 确保有createdAt属性
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        .slice(0, 5);
      
      // 获取每个错题的详细信息
      const questions = await Promise.all(
        selectedMistakes.map(async (mistake) => {
          try {
            const question = await this.questionsService.findOne(mistake.questionId);
            return {
              id: question.questionId,
              type: this.getQuestionType(question.questionTypeId),
              question: question.questionBody,
              answer: question.answer,
              options: question.optionsJson ? JSON.parse(question.optionsJson) : [],
              explanation: question.explanation || '暂无解析',
              errorCount: mistake.errorCount
            };
          } catch (error) {
            console.error('Error fetching question:', error);
            // 题目获取失败，返回默认数据
            return {
              id: mistake.questionId,
              type: '单选题',
              question: `题目 ${mistake.questionId}`,
              answer: '',
              options: [],
              explanation: '暂无解析',
              errorCount: mistake.errorCount
            };
          }
        })
      );
      
      return {
        isCompleted: false,
        questions,
        totalMistakes: mistakes.length
      };
    } catch (error) {
      console.error('Error in getMistakeReview:', error);
      // 出现错误时返回默认数据
      return {
        isCompleted: false,
        questions: [],
        totalMistakes: 0
      };
    }
  }
  
  // 根据题目类型ID获取题目类型
  private getQuestionType(questionTypeId: number): string {
    switch (questionTypeId) {
      case 1:
        return '填充题';
      case 2:
        return '单选题';
      case 3:
        return '解答题';
      default:
        return '单选题';
    }
  }
}
