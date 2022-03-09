import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { DogsModule } from './dogs/dogs.module';

async function bootstrap() {
  const app = await NestFactory.create(DogsModule);

  // Validate all incoming requests
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
