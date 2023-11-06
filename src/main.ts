import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IEnv } from './configurations/env.interface';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<IEnv>);
  app.setGlobalPrefix('api');
  await app.listen(config.get('PORT'));
}
bootstrap();
