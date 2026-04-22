import { IsString, IsNumber, IsEnum, IsBoolean, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  taskId: string;

  @IsNumber()
  weekId: number;

  @IsNumber()
  dayNumber: number;

  @IsEnum(['practice', 'comprehensive', 'mistake'])
  taskType: 'practice' | 'comprehensive' | 'mistake';

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}

export class UpdateTaskDto {
  @IsNumber()
  @IsOptional()
  dayNumber?: number;

  @IsEnum(['practice', 'comprehensive', 'mistake'])
  @IsOptional()
  taskType?: 'practice' | 'comprehensive' | 'mistake';

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
