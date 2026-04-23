import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { KeyKnowledge } from './key-knowledge.entity';
import { CreateKeyKnowledgeDto, UpdateKeyKnowledgeDto } from './dto/key-knowledge.dto';

@Injectable()
export class KeyKnowledgeService {
  constructor(
    @InjectRepository(KeyKnowledge)
    private readonly keyKnowledgeRepository: Repository<KeyKnowledge>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<KeyKnowledge[]> {
    return this.keyKnowledgeRepository.find({
      relations: ['week'],
      order: { weekId: 'ASC', id: 'ASC' },
    });
  }

  async findByWeek(weekId: number): Promise<KeyKnowledge[]> {
    return this.keyKnowledgeRepository.find({
      where: { weekId },
      order: { id: 'ASC' },
    });
  }

  async findByWeekAndDay(weekId: number, day: number): Promise<KeyKnowledge[]> {
    return this.keyKnowledgeRepository.find({
      where: { weekId, targetDay: day },
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number): Promise<KeyKnowledge> {
    const knowledge = await this.keyKnowledgeRepository.findOne({
      where: { id },
      relations: ['week'],
    });
    if (!knowledge) {
      throw new NotFoundException(`KeyKnowledge with ID ${id} not found`);
    }
    return knowledge;
  }

  async create(createDto: CreateKeyKnowledgeDto): Promise<KeyKnowledge> {
    const knowledge = this.keyKnowledgeRepository.create(createDto);
    return this.keyKnowledgeRepository.save(knowledge);
  }

  async update(id: number, updateDto: UpdateKeyKnowledgeDto): Promise<KeyKnowledge> {
    const knowledge = await this.findOne(id);
    Object.assign(knowledge, updateDto);
    return this.keyKnowledgeRepository.save(knowledge);
  }

  async remove(id: number): Promise<void> {
    const knowledge = await this.findOne(id);
    await this.keyKnowledgeRepository.remove(knowledge);
  }

  async getUserModuleStats(userId: number): Promise<any[]> {
    const query = `
      SELECT 
        kk.module as module,
        kk.id as knowledgeId,
        kk.knowledge_text as knowledgeText,
        kk.week_id as weekId,
        CAST(COUNT(CASE WHEN ua.is_correct = 1 THEN 1 END) AS UNSIGNED) as correctCount,
        CAST(COUNT(ua.id) AS UNSIGNED) as totalCount
      FROM key_knowledge kk
      LEFT JOIN questions q ON q.knowledge_id = kk.id
      LEFT JOIN user_answers ua ON ua.question_id = q.question_id AND ua.userId = ?
      WHERE q.knowledge_id IS NOT NULL
      GROUP BY kk.module, kk.id, kk.knowledge_text, kk.week_id
      HAVING COUNT(ua.id) > 0
      ORDER BY kk.module, kk.week_id, kk.id
    `;
    
    const results = await this.dataSource.query(query, [userId]);
    
    // 按module分组
    const moduleMap = new Map<string, any>();
    for (const row of results) {
      const { module, knowledgeId, knowledgeText, weekId, correctCount, totalCount } = row;
      const correctNum = Number(correctCount) || 0;
      const totalNum = Number(totalCount) || 0;
      const accuracy = totalNum > 0 ? Math.round((correctNum / totalNum) * 100) : 0;
      
      if (!moduleMap.has(module)) {
        moduleMap.set(module, {
          module,
          knowledge: [],
          averageAccuracy: 0,
          totalQuestions: 0,
          correctQuestions: 0
        });
      }
      
      const moduleData = moduleMap.get(module);
      moduleData.knowledge.push({
        knowledgeId,
        knowledgeText,
        weekId,
        accuracy,
        totalCount: totalNum,
        correctCount: correctNum
      });
      moduleData.totalQuestions += totalNum;
      moduleData.correctQuestions += correctNum;
    }
    
    // 计算每个module的平均正确率
    const moduleStats = Array.from(moduleMap.values()).map(m => ({
      ...m,
      averageAccuracy: m.totalQuestions > 0 ? Math.round((m.correctQuestions / m.totalQuestions) * 100) : 0
    }));
    
    return moduleStats;
  }
}
