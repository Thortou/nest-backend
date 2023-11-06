import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { provinceController } from "./controllers";
import { provinceModels } from "./data-typeorm/models";
import { DatabaseConnection } from "src/configurations/typeorm.config";
import { provinceCommandHandlers } from "./commands/handlers";
import { provinceDataServices } from "./data-typeorm/services";
import { provinceQueries } from "./queries";



@Module({
  imports: [
    TypeOrmModule.forFeature(provinceModels, DatabaseConnection.Main),
  ],
  controllers: [...provinceController],
  providers: [
    ...provinceQueries,
    ...provinceCommandHandlers,
    ...provinceDataServices,
  ],
  exports: [...provinceDataServices],
})
export class ProvinceModule {}
