import { IsString } from 'class-validator';

export class HelloDto {
  @IsString()
  name: string;
}
