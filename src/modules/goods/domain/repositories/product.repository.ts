import { IPaginated, IPagination } from "src/interface/paginate.interface";
import { ProductEntity } from "../entities/product.entity";

export interface IReadProductRepository {
    getAll(
        input: IPagination<ProductEntity>,
    ): Promise<IPaginated<ProductEntity>>;

    getOne(id: number) : Promise<ProductEntity>;
    
}

export interface IWriteProductRepository{
    create(input: ProductEntity): Promise<ProductEntity>;

    update(id: number, input: ProductEntity): Promise<ProductEntity>;

    delete(id: number): Promise<ProductEntity>;

    validate(rules: {
        id?: number;
        name: string;
        prov_name_eng: string;
    }): Promise<void>;
}