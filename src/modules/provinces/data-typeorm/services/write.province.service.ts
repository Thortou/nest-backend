import { InjectDataSource } from "@nestjs/typeorm";
import { IWriteProvinceRepository } from "../../domain/repositories/province.repository";
import { ProvinceMapper } from "../../mappers/entities/province.mapper";
import { DataSource } from "typeorm";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { ProvinceModel } from "../models/province.model";
import { IsExistModel } from "src/validation/is-exist-model.validation";
import { Provider } from "@nestjs/common";
import { WRITE_PROVINCE_KEY } from "./inject.keys";
import { DatabaseConnection } from "src/configurations/typeorm.config";

export class WriteProvinceTypeOrmRepository implements IWriteProvinceRepository {
    private _mapper: ProvinceMapper = new ProvinceMapper();
    constructor(
        @InjectDataSource(DatabaseConnection.Main) //new

        private _dataSource: DataSource
    ) { }
    async create(input: ProvinceEntity): Promise<ProvinceEntity> {
        const model = this._mapper.toModel(input)
        const response = await this._dataSource.getRepository(ProvinceModel).save(model)
        return this._mapper.toEntity(response)
    }

    async update( id: number, input: ProvinceEntity): Promise<ProvinceEntity> {
        const model = this._mapper.toModel({ ...input, id })
        const response = await this._dataSource.getRepository(ProvinceModel).save(model)
        return this._mapper.toEntity(response)
    }
    async delete(id: number): Promise<ProvinceEntity> {
        const response = await this._dataSource.getRepository(ProvinceModel).softRemove({ id });
        return this._mapper.toEntity(response)
    }
    
    async validate({ id, }: {
        id?: number;
        name?: string;
        prov_name_eng?: string;
    }): Promise<void> {
        if (id)
            await new IsExistModel(
                this._dataSource, ProvinceModel, 'provinces', id
            ).validate();
    }
}

export const writeProvinceTypeOrmRepositoryProvider: Provider = {
    provide: WRITE_PROVINCE_KEY,
    useClass: WriteProvinceTypeOrmRepository
}