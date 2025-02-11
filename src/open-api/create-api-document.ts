import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const createApiDocument = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('Description')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  return document;
};
