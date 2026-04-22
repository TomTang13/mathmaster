import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  questionId: string;

  @IsString()
  taskId: string;

  @IsNumber()
  @IsOptional()
  questionTypeId?: number;

  @IsNumber()
  @IsOptional()
  difficultyId?: number;

  @IsNumber()
  @IsOptional()
  knowledgeId?: number;

  @IsString()
  questionBody: string;

  @IsString()
  answer: string;

  @IsArray()
  @IsOptional()
  optionsJson?: string[];

  @IsString()
  @IsOptional()
  explanation?: string;

  @IsNumber()
  @IsOptional()
  orderIndex?: number;
}

export class UpdateQuestionDto {
  @IsNumber()
  @IsOptional()
  questionTypeId?: number;

  @IsNumber()
  @IsOptional()
  difficultyId?: number;

  @IsNumber()
  @IsOptional()
  knowledgeId?: number;

  @IsString()
  @IsOptional()
  questionBody?: string;

  @IsString()
  @IsOptional()
  answer?: string;

  @IsArray()
  @IsOptional()
  optionsJson?: string[];

  @IsString()
  @IsOptional()
  explanation?: string;

  @IsNumber()
  @IsOptional()
  orderIndex?: number;
}
