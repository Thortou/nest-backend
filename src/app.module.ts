import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmRepositoryModule } from './typeorm-repository/typeorm-repository.module';
import { ProvinceModule } from './modules/provinces/province.module';
import { CqrsModule } from '@nestjs/cqrs';
import { GoodsModule } from './modules/goods/goods.module';

@Module({
  imports: [
    TypeOrmRepositoryModule,
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
    }),
    ProvinceModule,
    GoodsModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
