import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMistakesService } from './user-mistakes.service';
import { UserMistakesController } from './user-mistakes.controller';
import { UserAnswersService } from './user-answers.service';
import { UserAnswersController } from './user-answers.controller';
import { UserTasksService } from './user-tasks.service';
import { UserTasksController } from './user-tasks.controller';
import { User } from './user.entity';
import { UserLoginRecord } from './user-login-record.entity';
import { UserMistake } from './user-mistake.entity';
import { UserAnswer } from './user-answer.entity';
import { UserTask } from './user-task.entity';
import { Task } from '../tasks/task.entity';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserLoginRecord, UserMistake, UserAnswer, UserTask, Task]), QuestionsModule],
  controllers: [UsersController, UserMistakesController, UserAnswersController, UserTasksController],
  providers: [UsersService, UserMistakesService, UserAnswersService, UserTasksService],
  exports: [UsersService, UserMistakesService, UserAnswersService, UserTasksService],
})
export class UsersModule {}
