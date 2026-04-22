import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { UserAnswer } from './user-answer.entity';
import { UserMistakesService } from './user-mistakes.service';
import { QuestionsService } from '../questions/questions.service';

@Injectable()
export class UserAnswersService {
  constructor(
    @InjectRepository(UserAnswer)
    private userAnswersRepository: Repository<UserAnswer>,
    private userMistakesService: UserMistakesService,
    private questionsService: QuestionsService,
  ) {}

  // 记录用户答题
  async recordAnswer(userId: number, questionId: string, userAnswer: string, isCorrect: boolean, taskId?: string): Promise<UserAnswer> {
    const answer = this.userAnswersRepository.create({
      userId,
      questionId,
      userAnswer,
      isCorrect,
      taskId,
    });

    const savedAnswer = await this.userAnswersRepository.save(answer);

    // 如果答错了，添加到错题本或增加错误次数
    if (!isCorrect) {
      await this.userMistakesService.addMistake(userId, questionId);
    }

    return savedAnswer;
  }

  // 获取用户的答题记录
  async getUserAnswers(userId: number, taskId?: string): Promise<UserAnswer[]> {
    if (taskId) {
      // 先获取该任务的所有题目
      const questions = await this.questionsService.findByTask(taskId);
      const questionIds = questions.map(q => q.questionId);
      
      // 查询用户对这些题目的答题记录
      return this.userAnswersRepository.find({
        where: {
          userId,
          questionId: In(questionIds)
        },
        order: { createdAt: 'DESC' }
      });
    }
    
    // 没有taskId时，直接查询用户的所有答题记录
    return this.userAnswersRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' }
    });
  }

  // 获取用户对特定题目的答题记录
  async getUserAnswerForQuestion(userId: number, questionId: string): Promise<UserAnswer | null> {
    return this.userAnswersRepository.findOne({
      where: { userId, questionId },
      order: { createdAt: 'DESC' },
    });
  }
}
