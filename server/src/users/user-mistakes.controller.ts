import { Controller, Get, Post, Delete, Put, Param, Body, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserMistakesService } from './user-mistakes.service';
import { UserMistake } from './user-mistake.entity';

@Controller('mistakes')
export class UserMistakesController {
  constructor(private userMistakesService: UserMistakesService) {}

  // 添加错题
  @Post(':userId/question/:questionId')
  async addMistake(
    @Param('userId') userId: number,
    @Param('questionId') questionId: string,
  ): Promise<UserMistake> {
    return this.userMistakesService.addMistake(userId, questionId);
  }

  // 获取用户的所有错题
  @Get(':userId')
  async getUserMistakes(
    @Param('userId') userId: number,
    @Query('showHidden') showHidden: boolean = false
  ): Promise<UserMistake[]> {
    return this.userMistakesService.getUserMistakes(userId, showHidden);
  }

  // 获取用户的错题数量
  @Get(':userId/count')
  async getUserMistakesCount(@Param('userId') userId: number): Promise<{ count: number }> {
    const count = await this.userMistakesService.getUserMistakesCount(userId);
    return { count };
  }

  // 删除错题
  @Delete(':userId/question/:questionId')
  async removeMistake(
    @Param('userId') userId: number,
    @Param('questionId') questionId: string,
  ): Promise<void> {
    return this.userMistakesService.removeMistake(userId, questionId);
  }

  // 清除用户的所有错题
  @Delete(':userId')
  async clearUserMistakes(@Param('userId') userId: number): Promise<void> {
    return this.userMistakesService.clearUserMistakes(userId);
  }

  // 切换错题的隐藏状态
  @Put(':userId/question/:questionId/hidden')
  async toggleHidden(
    @Param('userId') userId: number,
    @Param('questionId') questionId: string
  ): Promise<UserMistake> {
    return this.userMistakesService.toggleHidden(userId, questionId);
  }

  // 获取需要回顾的错题
  @Get(':userId/review')
  async getReviewMistakes(@Param('userId') userId: number): Promise<any[]> {
    return this.userMistakesService.getReviewMistakes(userId);
  }

  // 标记错题的 review 状态为完成
  @Put(':userId/question/:questionId/review/complete')
  async markReviewComplete(
    @Param('userId') userId: number,
    @Param('questionId') questionId: string
  ): Promise<UserMistake> {
    return this.userMistakesService.markReviewComplete(userId, questionId);
  }
}
