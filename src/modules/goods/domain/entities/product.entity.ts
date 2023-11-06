import { CategoryEntity } from "./category.entity";

export class ProductEntity {
    id: number;
    product_code: string;
    name: string;
    qty: number;
    price: number;
    category?: CategoryEntity;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}