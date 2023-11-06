import { IPaginated, IPagination } from "src/interface/paginate.interface";
import { CategoryEntity } from "../entities/category.entity";

export interface IReadCategoryRepository {
    getAll(
        input: IPagination<CategoryEntity>,
    ): Promise<IPaginated<CategoryEntity>>;

    getOne(id: number) : Promise<CategoryEntity>;
    
}

export interface IWriteCategoryRepository{
    create(input: CategoryEntity): Promise<CategoryEntity>;

    update(id: number, input: CategoryEntity): Promise<CategoryEntity>;

    delete(id: number): Promise<CategoryEntity>;

    validate(rules: {
        id?: number;
        name: string;
        prov_name_eng: string;
    }): Promise<void>;
}