import { ProductEntity } from "./product.entity";

export class ReceivedEntity {
    id: number;
    description: string;
    product?: ProductEntity;
    qty: number;
    price: number;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}