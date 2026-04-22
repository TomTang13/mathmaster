import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsNumber()
  @IsOptional()
  currentLevel?: number;

  @IsString()
  @IsOptional()
  t?: string;
}

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  currentLevel?: number;

  @IsString()
  @IsOptional()
  t?: string;

  @IsNumber()
  @IsOptional()
  totalScore?: number;

  @IsNumber()
  @IsOptional()
  completedTasks?: number;
}
