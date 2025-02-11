import { IsOptional, IsString } from 'class-validator';

export class HelloDto {
  @IsString()
  @IsOptional()
  name?: string;
}
