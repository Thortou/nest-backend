import { NotFoundException } from "@nestjs/common";
import { DataSource, EntityTarget } from "typeorm";

export class IsExistModel<Model> {
    constructor(
        private dataSource: DataSource,
        private repository: EntityTarget<Model>,
        private model: string,
        private id: number,
    ){}

    async validate(): Promise<void> {
        const result = await this.dataSource
          .getRepository(this.repository)
          .createQueryBuilder(this.model)
          .where(`${this.model}.id = :id`, {
            id: this.id,
          })
          .getOne();
    
        if (!result) {
          throw new NotFoundException();
        }
      }
}