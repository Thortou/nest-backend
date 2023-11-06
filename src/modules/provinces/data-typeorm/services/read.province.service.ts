import { Injectable, Provider } from "@nestjs/common";
import { IReadProvinceRepository } from "../../domain/repositories/province.repository";
import { ProvinceMapper } from "../../mappers/entities/province.mapper";
import { InjectDataSource } from "@nestjs/typeorm";
import { DatabaseConnection } from "src/configurations/typeorm.config";
import { DataSource } from "typeorm";
import { IPaginated, IPagination } from "src/interface/paginate.interface";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { ProvinceModel } from "../models/province.model";
import { READ_PROVINCE_KEY } from "./inject.keys";

@Injectable()
export class IReadProvinceTypeOrmRepository implements IReadProvinceRepository {
    private _mapper: ProvinceMapper = new ProvinceMapper();
    constructor(
        @InjectDataSource(DatabaseConnection.Main)
        private _dataSource: DataSource
    ) { }
    async getAll({ page, limit, offset,
        orderBy: { column, sortOrder },
        filter: { name, prov_name_laos, prov_name_eng } }: IPagination<ProvinceEntity>): Promise<IPaginated<ProvinceEntity>> {
            const result = this._dataSource.getRepository(ProvinceModel).createQueryBuilder('provinces');
            if(name) 
            result.andWhere('provinces.name LIKE :name', {name:`${name}`})

            if(prov_name_laos) 
            result.andWhere('provinces.prov_name_laos LIKE :prov_name_laos', {prov_name_laos:`${prov_name_laos}`})

            if(prov_name_eng) 
            result.andWhere('provinces.prov_name_eng LIKE :prov_name_eng', {prov_name_eng:`${prov_name_eng}`})
            
            if(limit) result.limit(limit)
            if(offset) result.offset(offset);
            if(page) result.offset((page -1)*limit)
            if(column && sortOrder) result.orderBy(`provinces.${column}`, sortOrder)

            const [resListData, totalCount] = await result.getManyAndCount();
            const lisData = resListData.map((data) => this._mapper.toEntity(data));

            return {data:lisData, total: totalCount, limit, offset, page};
    }

    async getOne(id: number): Promise<ProvinceEntity> {
        const res = await this._dataSource
        .getRepository(ProvinceModel)
        .createQueryBuilder('provinces')
        .where('provinces.id = :id', {id})
        .getOne()
        
        return res ? this._mapper.toEntity(res) : null
    }
}

export const readProvinceTypeOrmRepositoryProvider: Provider = {
    provide: READ_PROVINCE_KEY,
    useClass: IReadProvinceTypeOrmRepository
}