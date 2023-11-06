
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { models } from 'src/typeorm-repository/model';
import { IEnv } from './env.interface';

export enum DatabaseConnection {
  Main = 'main-connection',
}

export const typeOrmOption = (): TypeOrmModuleAsyncOptions => ({
  name: DatabaseConnection.Main,
  useFactory: (config: ConfigService<IEnv>) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    database: config.get('DB_NAME'),
    port: config.get('DB_PORT', 5432),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    entities: models,
    synchronize:
      config.get('DB_SYNCHRONIZE', true) === 'true' ? true : false,
    logging: config.get('DB_LOGGING', true) === 'true' ? true : false,
  }),
  inject: [ConfigService],
});
