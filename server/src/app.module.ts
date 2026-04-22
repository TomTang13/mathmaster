import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeeksModule } from './weeks/weeks.module';
import { KeyKnowledgeModule } from './key-knowledge/key-knowledge.module';
import { TasksModule } from './tasks/tasks.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'rm-bp1jgb7afx82z711bjo.mysql.rds.aliyuncs.com',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'mathmaster_dev',
      password: process.env.DB_PASSWORD || 'mathmaster_DEV123!',
      database: process.env.DB_NAME || 'mathmaster',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    WeeksModule,
    KeyKnowledgeModule,
    TasksModule,
    QuestionsModule,
    UsersModule,
    AdminModule,
  ],
})
export class AppModule {}
