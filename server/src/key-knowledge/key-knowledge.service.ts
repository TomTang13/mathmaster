import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KeyKnowledge } from './key-knowledge.entity';
import { CreateKeyKnowledgeDto, UpdateKeyKnowledgeDto } from './dto/key-knowledge.dto';

@Injectable()
export class KeyKnowledgeService {
  constructor(
    @InjectRepository(KeyKnowledge)
    private readonly keyKnowledgeRepository: Repository<KeyKnowledge>,
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
}
