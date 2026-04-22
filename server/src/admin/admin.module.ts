import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { KeyKnowledge } from '../key-knowledge/key-knowledge.entity';
import { Task } from '../tasks/task.entity';
import { Question } from '../questions/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyKnowledge, Task, Question])],
  controllers: [AdminController],
  providers: [],
  exports: [],
})
export class AdminModule {}