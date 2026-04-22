import { IsString, IsEnum, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateWeekDto {
  @IsNumber()
  weekId: number;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  milestone?: string;

  @IsEnum(['green', 'yellow', 'red'])
  @IsOptional()
  status?: 'green' | 'yellow' | 'red';

  @IsBoolean()
  @IsOptional()
  isLocked?: boolean;
}

export class UpdateWeekDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  milestone?: string;

  @IsEnum(['green', 'yellow', 'red'])
  @IsOptional()
  status?: 'green' | 'yellow' | 'red';

  @IsBoolean()
  @IsOptional()
  isLocked?: boolean;
}
