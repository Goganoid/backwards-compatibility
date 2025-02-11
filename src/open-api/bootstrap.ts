import { NestFactory } from '@nestjs/core';
import * as fs from 'fs/promises';
import { AppModule } from 'src/app.module';
import { createApiDocument } from './create-api-document';

export async function boostrapDocsGenerator() {
  const app = await NestFactory.create(AppModule, {
    preview: true, // to avoid initalizing services
  });

  const document = createApiDocument(app);

  await fs.writeFile('swagger.json', JSON.stringify(document));

  await app.close();
}
