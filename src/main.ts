import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { boostrapDocsGenerator } from './open-api/bootstrap';
import { createApiDocument } from './open-api/create-api-document';

async function bootstrap() {
  if (process.argv.includes('--generate-schema')) {
    console.log('Generating OpenAPI schema');
    return await boostrapDocsGenerator();
  }

  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('api', app, createApiDocument(app));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
