import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { KeyKnowledgeService } from './key-knowledge.service';
import { CreateKeyKnowledgeDto, UpdateKeyKnowledgeDto } from './dto/key-knowledge.dto';

@Controller('key-knowledge')
export class KeyKnowledgeController {
  constructor(private readonly keyKnowledgeService: KeyKnowledgeService) {}

  @Get()
  findAll() {
    return this.keyKnowledgeService.findAll();
  }

  @Get('week/:weekId')
  findByWeek(@Param('weekId', ParseIntPipe) weekId: number) {
    return this.keyKnowledgeService.findByWeek(weekId);
  }

  @Get('week/:weekId/day/:day')
  findByWeekAndDay(@Param('weekId', ParseIntPipe) weekId: number, @Param('day', ParseIntPipe) day: number) {
    return this.keyKnowledgeService.findByWeekAndDay(weekId, day);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.keyKnowledgeService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateKeyKnowledgeDto) {
    return this.keyKnowledgeService.create(createDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateKeyKnowledgeDto,
  ) {
    return this.keyKnowledgeService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.keyKnowledgeService.remove(id);
  }
}
