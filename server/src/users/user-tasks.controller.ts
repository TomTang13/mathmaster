import { Controller, Post, Get, Patch, Query, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UserTasksService } from './user-tasks.service';

@Controller('user-tasks')
export class UserTasksController {
  constructor(private readonly userTasksService: UserTasksService) {}

  // 创建用户任务
  @Post()
  async createUserTask(@Body() body: {
    userId: number;
    taskType: string;
    weekId: number;
    dayNumber: number;
    taskId?: string;
    isCompleted?: boolean;
  }) {
    try {
      console.log('Received createUserTask request:', body);
      const result = await this.userTasksService.createUserTask(
        body.userId,
        body.taskType as any,
        body.weekId,
        body.dayNumber,
        body.taskId,
        body.isCompleted || false
      );
      console.log('createUserTask result:', result);
      return result;
    } catch (error) {
      console.error('Error in createUserTask controller:', error);
      throw error;
    }
  }

  // 完成用户任务
  @Patch(':id/complete')
  async completeUserTask(@Param('id', ParseIntPipe) id: number) {
    return this.userTasksService.completeUserTask(id);
  }

  // 获取用户的任务
  @Get()
  async getUserTasks(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('taskType') taskType?: string
  ) {
    return this.userTasksService.getUserTasks(userId, taskType as any);
  }

  // 获取用户特定日期的任务
  @Get('date')
  async getUserTasksByDate(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('weekId', ParseIntPipe) weekId: number,
    @Query('dayNumber', ParseIntPipe) dayNumber: number
  ) {
    return this.userTasksService.getUserTasksByDate(userId, weekId, dayNumber);
  }

  // 批量获取用户指定周的任务
  @Get('week')
  async getUserTasksByWeek(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('weekId', ParseIntPipe) weekId: number
  ) {
    return this.userTasksService.getUserTasksByWeek(userId, weekId);
  }

  // 批量获取用户已完成的任务（按user_id和week_id）
  @Get('completed/week')
  async getCompletedUserTasksByWeek(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('weekId', ParseIntPipe) weekId: number
  ) {
    return this.userTasksService.getCompletedUserTasksByWeek(userId, weekId);
  }

  // 检查用户是否已完成特定任务
  @Get('completed')
  async isTaskCompleted(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('taskType') taskType: string,
    @Query('weekId', ParseIntPipe) weekId: number,
    @Query('dayNumber', ParseIntPipe) dayNumber: number
  ) {
    return this.userTasksService.isTaskCompleted(userId, taskType as any, weekId, dayNumber);
  }
}
