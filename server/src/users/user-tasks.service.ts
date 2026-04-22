import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { UserTask, UserTaskType } from './user-task.entity';
import { Task } from '../tasks/task.entity';
import { User } from './user.entity';

@Injectable()
export class UserTasksService {
  constructor(
    @InjectRepository(UserTask) 
    private userTasksRepository: Repository<UserTask>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  // 创建用户任务
  async createUserTask(
    userId: number, 
    taskType: UserTaskType, 
    weekId: number, 
    dayNumber: number, 
    taskId?: string,
    isCompleted: boolean = false
  ): Promise<UserTask> {
    try {
      console.log('Creating user task:', { userId, taskType, weekId, dayNumber, taskId, isCompleted });
      const userTask = this.userTasksRepository.create({
        userId,
        taskId,
        taskType,
        weekId,
        dayNumber,
        isCompleted,
        completedAt: isCompleted ? new Date() : null,
      });

      console.log('User task created:', userTask);
      const savedTask = await this.userTasksRepository.save(userTask);
      console.log('User task saved:', savedTask);
      return savedTask;
    } catch (error) {
      console.error('Error creating user task:', error);
      throw error;
    }
  }

  // 完成用户任务
  async completeUserTask(id: number): Promise<{ task: UserTask; upgraded: boolean; newLevel?: number }> {
    const userTask = await this.userTasksRepository.findOne({ where: { id } });
    if (!userTask) {
      throw new NotFoundException('用户任务不存在');
    }

    userTask.isCompleted = true;
    userTask.completedAt = new Date();

    const savedTask = await this.userTasksRepository.save(userTask);

    // 检查是否需要升级
    const upgradeResult = await this.checkAndUpgradeUserLevel(userTask.userId, userTask.weekId);

    return { task: savedTask, upgraded: upgradeResult.upgraded, newLevel: upgradeResult.newLevel };
  }

  // 检查并升级用户等级和周数
  private async checkAndUpgradeUserLevel(userId: number, weekId: number): Promise<{ upgraded: boolean; newLevel?: number }> {
    // 获取该周所有的practice、comprehensive、review任务
    const weekTasks = await this.taskRepository.find({
      where: { weekId },
    });

    // 过滤出practice、comprehensive、review类型的任务
    const targetTaskTypes = ['practice', 'comprehensive', 'review'];
    const targetTasks = weekTasks.filter(t => targetTaskTypes.includes(t.taskType));

    if (targetTasks.length === 0) {
      return;
    }

    // 获取用户在该周已完成的任务
    const completedUserTasks = await this.userTasksRepository.find({
      where: { userId, weekId, isCompleted: true },
    });

    // 获取用户已完成的任务ID集合
    const completedTaskIds = new Set(completedUserTasks.map(t => t.taskId));

    // 检查是否所有目标任务都已完成
    const allCompleted = targetTasks.every(t => completedTaskIds.has(t.taskId));

    if (allCompleted) {
      // 更新用户等级和周数
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (user) {
        user.currentLevel = user.currentLevel + 1;
        await this.userRepository.save(user);
        console.log(`User ${userId} upgraded to level ${user.currentLevel}`);
        return { upgraded: true, newLevel: user.currentLevel };
      }
    }
    return { upgraded: false };
  }

  // 获取用户的任务
  async getUserTasks(userId: number, taskType?: UserTaskType): Promise<UserTask[]> {
    const query = this.userTasksRepository.createQueryBuilder('task')
      .where('task.userId = :userId', { userId });

    if (taskType) {
      query.andWhere('task.taskType = :taskType', { taskType });
    }

    return query.orderBy('task.createdAt', 'DESC').getMany();
  }

  // 获取用户特定日期的任务
  async getUserTasksByDate(userId: number, weekId: number, dayNumber: number): Promise<UserTask[]> {
    return this.userTasksRepository.find({
      where: { userId, weekId, dayNumber },
      order: { createdAt: 'DESC' },
    });
  }

  // 批量获取用户指定周的任务
  async getUserTasksByWeek(userId: number, weekId: number): Promise<UserTask[]> {
    return this.userTasksRepository.find({
      where: { userId, weekId },
      order: { dayNumber: 'ASC', createdAt: 'DESC' },
    });
  }

  // 批量获取用户已完成的任务（按user_id和week_id）
  async getCompletedUserTasksByWeek(userId: number, weekId: number): Promise<UserTask[]> {
    return this.userTasksRepository.find({
      where: { userId, weekId, isCompleted: true },
      order: { dayNumber: 'ASC', completedAt: 'DESC' },
    });
  }

  // 检查用户是否已完成特定任务
  async isTaskCompleted(userId: number, taskType: UserTaskType, weekId: number, dayNumber: number): Promise<boolean> {
    const task = await this.userTasksRepository.findOne({
      where: { userId, taskType, weekId, dayNumber, isCompleted: true },
    });

    return !!task;
  }
}
