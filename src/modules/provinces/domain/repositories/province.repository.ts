import { IPaginated, IPagination } from "src/interface/paginate.interface";
import { ProvinceEntity } from "../entities/province.entity";

export interface IReadProvinceRepository {
    getAll(
        input: IPagination<ProvinceEntity>,
    ): Promise<IPaginated<ProvinceEntity>>;

    getOne(id: number) : Promise<ProvinceEntity>;
    
}

export interface IWriteProvinceRepository{
    create(input: ProvinceEntity): Promise<ProvinceEntity>;

    update(id: number, input: ProvinceEntity): Promise<ProvinceEntity>;

    delete(id: number): Promise<ProvinceEntity>;

    validate(rules: {
        id?: number;
        name: string;
        prov_name_eng: string;
    }): Promise<void>;
}