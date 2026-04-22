import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyKnowledge } from './key-knowledge.entity';
import { KeyKnowledgeService } from './key-knowledge.service';
import { KeyKnowledgeController } from './key-knowledge.controller';

@Module({
  imports: [TypeOrmModule.forFeature([KeyKnowledge])],
  controllers: [KeyKnowledgeController],
  providers: [KeyKnowledgeService],
  exports: [KeyKnowledgeService],
})
export class KeyKnowledgeModule {}
