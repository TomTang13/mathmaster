import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto, UpdateQuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find({
      relations: ['task'],
      order: { questionId: 'ASC' },
    });
  }

  async findByTask(taskId: string): Promise<Question[]> {
    return this.questionRepository.find({
      where: { taskId },
      order: { questionId: 'ASC' },
    });
  }

  async findByKnowledge(knowledgeId: string): Promise<Question[]> {
    return this.questionRepository.find({
      where: { knowledgeId: parseInt(knowledgeId) },
      order: { orderIndex: 'ASC' },
      relations: [], // 不加载任何关系，避免外键错误
      select: ['questionId', 'questionBody', 'answer', 'optionsJson', 'explanation', 'questionTypeId', 'difficultyId']
    });
  }

  async findOne(questionId: string): Promise<any> {
    const question = await this.questionRepository.findOne({
      where: { questionId },
      relations: [], // 不加载任何关系，避免外键错误
      select: ['questionId', 'questionBody', 'answer', 'optionsJson', 'explanation', 'questionTypeId', 'difficultyId']
    });
    if (!question) {
      // 题目不存在，返回默认数据
      return {
        questionId,
        questionBody: `题目 ${questionId}`,
        answer: '',
        optionsJson: [],
        explanation: '暂无解析',
        questionTypeId: 4, // 默认为单选题
        difficultyId: 1
      };
    }
    return question;
  }

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(question);
  }

  async update(questionId: string, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
    const question = await this.findOne(questionId);
    Object.assign(question, updateQuestionDto);
    return this.questionRepository.save(question);
  }

  async remove(questionId: string): Promise<void> {
    const question = await this.findOne(questionId);
    await this.questionRepository.remove(question);
  }
}
