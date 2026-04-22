import { Controller, Post, Get, Query, Body, ParseIntPipe } from '@nestjs/common';
import { UserAnswersService } from './user-answers.service';

@Controller('user-answers')
export class UserAnswersController {
  constructor(private readonly userAnswersService: UserAnswersService) {}

  // 记录用户答题
  @Post()
  async recordAnswer(@Body() body: {
    userId: number;
    questionId: string;
    userAnswer: string;
    isCorrect: boolean;
    taskId?: string;
  }) {
    return this.userAnswersService.recordAnswer(
      body.userId,
      body.questionId,
      body.userAnswer,
      body.isCorrect,
      body.taskId
    );
  }

  // 获取用户的答题记录
  @Get()
  async getUserAnswers(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('taskId') taskId?: string
  ) {
    return this.userAnswersService.getUserAnswers(userId, taskId);
  }

  // 获取用户对特定题目的答题记录
  @Get('question')
  async getUserAnswerForQuestion(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('questionId') questionId: string
  ) {
    return this.userAnswersService.getUserAnswerForQuestion(userId, questionId);
  }
}
