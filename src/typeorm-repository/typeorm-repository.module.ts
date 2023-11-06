import { Global, Module } from "@nestjs/common";
import { typeOrmOption } from "src/configurations/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm"

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmOption()),
  ],
})
export class TypeOrmRepositoryModule{}