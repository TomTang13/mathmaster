import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Week } from './week.entity';
import { WeeksService } from './weeks.service';
import { WeeksController } from './weeks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Week])],
  controllers: [WeeksController],
  providers: [WeeksService],
  exports: [WeeksService],
})
export class WeeksModule {}
