import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateKeyKnowledgeDto {
  @IsNumber()
  weekId: number;

  @IsString()
  knowledgeText: string;

  @IsNumber()
  @IsOptional()
  difficulty?: number;

  @IsNumber()
  @IsOptional()
  targetDay?: number;

  @IsString()
  @IsOptional()
  module?: string;
}

export class UpdateKeyKnowledgeDto {
  @IsString()
  @IsOptional()
  knowledgeText?: string;

  @IsNumber()
  @IsOptional()
  difficulty?: number;

  @IsNumber()
  @IsOptional()
  targetDay?: number;

  @IsString()
  @IsOptional()
  module?: string;
}
