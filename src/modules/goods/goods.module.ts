import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { goodsModels } from "./data-typeorm/models";
import { DatabaseConnection } from "src/configurations/typeorm.config";
import { goodsControllers } from "./controllers";
import { goodsQueries } from "./domain/queries";
import { goodsDataServices } from "./data-typeorm/services";

@Module({
    imports: [
      TypeOrmModule.forFeature(goodsModels, DatabaseConnection.Main),
    ],
    controllers: goodsControllers,
    providers: [
      ...goodsQueries,
    //   ...addressOfUserCommandHandlers,
      ...goodsDataServices,
    ],
    exports: [...goodsDataServices],
  })
  export class GoodsModule {}