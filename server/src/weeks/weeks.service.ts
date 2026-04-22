import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Week } from './week.entity';
import { CreateWeekDto, UpdateWeekDto } from './dto/week.dto';

@Injectable()
export class WeeksService {
  constructor(
    @InjectRepository(Week)
    private readonly weekRepository: Repository<Week>,
  ) {}

  async findAll(): Promise<Week[]> {
    return this.weekRepository.find({
      order: { weekId: 'ASC' },
    });
  }

  async findOne(weekId: number): Promise<Week> {
    const week = await this.weekRepository.findOne({
      where: { weekId },
      relations: ['keyKnowledge', 'tasks'],
    });
    if (!week) {
      throw new NotFoundException(`Week with ID ${weekId} not found`);
    }
    return week;
  }

  async create(createWeekDto: CreateWeekDto): Promise<Week> {
    const week = this.weekRepository.create(createWeekDto);
    return this.weekRepository.save(week);
  }

  async update(weekId: number, updateWeekDto: UpdateWeekDto): Promise<Week> {
    const week = await this.findOne(weekId);
    Object.assign(week, updateWeekDto);
    return this.weekRepository.save(week);
  }

  async remove(weekId: number): Promise<void> {
    const week = await this.findOne(weekId);
    await this.weekRepository.remove(week);
  }
}
