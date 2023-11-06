import { ProductEntity } from "./product.entity";

export class OrderEntity {
    id: number;
    description: string;
    product?: ProductEntity;
    price: number;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}