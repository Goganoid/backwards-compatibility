import { Body, Controller, Post } from '@nestjs/common';
import { HelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor() {}

  @Post('hello')
  getHello(@Body() dto: HelloDto): string {
    return `Hello ${dto.name ?? 'World'}`;
  }
}
