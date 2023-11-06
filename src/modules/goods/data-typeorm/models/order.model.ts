import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { ProductModel } from "./product.model";

@Entity({name:'orders'})
export class OrderModel {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;
    @Column({type: 'text' })
    description: string;
    @Column()
    product_id: number;
    @Column({type:'int'})
    qty: number;

    @ManyToOne(() => ProductModel, (product) => product.orders, {onDelete:'CASCADE'})
    @JoinColumn({name:'product_id'})
    product: Relation<ProductModel[]>

    @CreateDateColumn()
    create_at!: Date;
    @UpdateDateColumn()
    update_at!: Date;
    @DeleteDateColumn()
    delete_at?: Date;

}