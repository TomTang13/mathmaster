import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { UserMistake } from './user-mistake.entity';
import { QuestionsService } from '../questions/questions.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserMistakesService {
  constructor(
    @InjectRepository(UserMistake)
    private userMistakesRepository: Repository<UserMistake>,
    private questionsService: QuestionsService,
  ) {}

  // 添加错题（如果已存在则增加错误次数）
  async addMistake(userId: number, questionId: string): Promise<UserMistake> {
    // 查找是否已存在该错题
    const existingMistake = await this.userMistakesRepository.findOne({
      where: { userId, questionId },
    });

    if (existingMistake) {
      // 已存在，增加错误次数
      existingMistake.errorCount += 1;
      return this.userMistakesRepository.save(existingMistake);
    } else {
      // 计算4次回顾练习的时间
      const now = new Date();
      const review1Time = new Date(now); // 当天
      const review2Time = new Date(now);
      review2Time.setDate(now.getDate() + 1); // 隔1天
      const review3Time = new Date(now);
      review3Time.setDate(now.getDate() + 3); // 隔3天
      const review4Time = new Date(now);
      review4Time.setDate(now.getDate() + 7); // 隔7天

      // 不存在，创建新错题记录
      const newMistake = this.userMistakesRepository.create({
        userId,
        questionId,
        errorCount: 1,
        hidden: false,
        review1Time,
        review1Completed: false,
        review2Time,
        review2Completed: false,
        review3Time,
        review3Completed: false,
        review4Time,
        review4Completed: false,
      });
      return this.userMistakesRepository.save(newMistake);
    }
  }

  // 获取用户的所有错题
  async getUserMistakes(userId: number, showHidden: boolean = false): Promise<any[]> {
    const mistakes = await this.userMistakesRepository.find({
      where: { 
        userId, 
        hidden: showHidden 
      },
      order: { errorCount: 'DESC', createdAt: 'DESC' },
    });

    // 为每个错题获取对应的题目内容
    const mistakesWithQuestion = await Promise.all(
      mistakes.map(async (mistake) => {
        const question = await this.questionsService.findOne(mistake.questionId);
        return {
          ...mistake,
          questionBody: question.questionBody,
          questionType: question.questionTypeId,
          difficulty: question.difficultyId
        };
      })
    );

    return mistakesWithQuestion;
  }

  // 获取用户的错题数量
  async getUserMistakesCount(userId: number): Promise<number> {
    return this.userMistakesRepository.count({
      where: { userId },
    });
  }

  // 删除错题
  async removeMistake(userId: number, questionId: string): Promise<void> {
    const result = await this.userMistakesRepository.delete({
      userId,
      questionId,
    });

    if (result.affected === 0) {
      throw new NotFoundException('错题记录不存在');
    }
  }

  // 清除用户的所有错题
  async clearUserMistakes(userId: number): Promise<void> {
    await this.userMistakesRepository.delete({
      userId,
    });
  }

  // 切换错题的隐藏状态
  async toggleHidden(userId: number, questionId: string): Promise<UserMistake> {
    const mistake = await this.userMistakesRepository.findOne({
      where: { userId, questionId },
    });

    if (!mistake) {
      throw new NotFoundException('错题记录不存在');
    }

    mistake.hidden = !mistake.hidden;
    return this.userMistakesRepository.save(mistake);
  }

  // 获取需要回顾的错题
  async getReviewMistakes(userId: number): Promise<any[]> {
    const now = new Date();
    
    const mistakes = await this.userMistakesRepository.find({
      where: [
        {
          userId,
          hidden: false,
          review1Time: LessThanOrEqual(now),
          review1Completed: false
        },
        {
          userId,
          hidden: false,
          review2Time: LessThanOrEqual(now),
          review2Completed: false
        },
        {
          userId,
          hidden: false,
          review3Time: LessThanOrEqual(now),
          review3Completed: false
        },
        {
          userId,
          hidden: false,
          review4Time: LessThanOrEqual(now),
          review4Completed: false
        }
      ],
      order: {
        review1Time: 'ASC'
      }
    });

    // 为每个错题获取对应的题目内容
    const mistakesWithQuestion = await Promise.all(
      mistakes.map(async (mistake) => {
        const question = await this.questionsService.findOne(mistake.questionId);
        return {
          ...mistake,
          questionBody: question.questionBody,
          questionType: question.questionTypeId,
          difficulty: question.difficultyId
        };
      })
    );

    return mistakesWithQuestion;
  }

  // 标记错题的 review 状态为完成
  async markReviewComplete(userId: number, questionId: string): Promise<UserMistake> {
    const mistake = await this.userMistakesRepository.findOne({
      where: { userId, questionId },
    });

    if (!mistake) {
      throw new NotFoundException('错题记录不存在');
    }

    const now = new Date();
    
    // 标记所有已到时间的 review 为完成
    if (mistake.review1Time <= now) {
      mistake.review1Completed = true;
    }
    if (mistake.review2Time <= now) {
      mistake.review2Completed = true;
    }
    if (mistake.review3Time <= now) {
      mistake.review3Completed = true;
    }
    if (mistake.review4Time <= now) {
      mistake.review4Completed = true;
    }

    return this.userMistakesRepository.save(mistake);
  }

  // 上传费曼输出音频
  async uploadFeynmanAudio(userId: number, questionId: string, file: Express.Multer.File): Promise<{ success: boolean; message: string; audioPath?: string }> {
    // 查找错题记录
    const mistake = await this.userMistakesRepository.findOne({
      where: { userId, questionId },
    });

    if (!mistake) {
      throw new NotFoundException('错题记录不存在');
    }

    // 配置音频存储根路径
    const audioRootPath = process.env.AUDIO_STORAGE_PATH || path.join(__dirname, '..', '..', 'audio');
    
    // 创建音频存储目录
    const audioDir = path.join(audioRootPath, userId.toString());
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // 生成唯一的文件名
    const timestamp = Date.now();
    const fileName = `${questionId}_${timestamp}.wav`;
    const fullPath = path.join(audioDir, fileName);
    
    // 相对路径（用于数据库存储）
    const relativePath = `/audio/${userId}/${fileName}`;

    // 写入文件
    fs.writeFileSync(fullPath, file.buffer);

    // 更新错题记录，保存音频路径
    mistake.audioPath = relativePath;
    await this.userMistakesRepository.save(mistake);

    return { 
      success: true, 
      message: '音频上传成功',
      audioPath: relativePath
    };
  }

  // 获取单个错题记录
  async getMistake(userId: number, questionId: string): Promise<UserMistake> {
    const mistake = await this.userMistakesRepository.findOne({
      where: { userId, questionId },
    });

    if (!mistake) {
      throw new NotFoundException('错题记录不存在');
    }

    return mistake;
  }
}
