import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto, UpdateQuestionDto } from './dto/question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get('task/:taskId')
  findByTask(@Param('taskId') taskId: string) {
    return this.questionsService.findByTask(taskId);
  }

  @Get(':questionId')
  findOne(@Param('questionId') questionId: string) {
    return this.questionsService.findOne(questionId);
  }

  @Get('knowledge/:knowledgeId')
  findByKnowledge(@Param('knowledgeId') knowledgeId: string) {
    return this.questionsService.findByKnowledge(knowledgeId);
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Put(':questionId')
  update(
    @Param('questionId') questionId: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(questionId, updateQuestionDto);
  }

  @Delete(':questionId')
  remove(@Param('questionId') questionId: string) {
    return this.questionsService.remove(questionId);
  }
}
