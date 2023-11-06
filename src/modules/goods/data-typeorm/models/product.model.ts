import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { CategoryModel } from "./category.model";
import { ReceivedModel } from "./received.model";
import { OrderModel } from "./order.model";

@Entity({name:'products'})
export class ProductModel {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;
    @Column()
    category_id: number;
    @Column({type:'varchar', length:25, unique: true})
    product_code: string;
    @Column({type:'varchar', length: 100, unique: true})
    name: string;
    @Column({type:'int'})
    qty: number;
    @Column('decimal', { precision: 10, scale: 2 })
    price: number

    //ManyToOne to category
    @ManyToOne(() => CategoryModel, (category) => category.products, {onDelete:'CASCADE'})
    @JoinColumn({name:'category_id'})
    category: Relation<CategoryModel>;
    
    //OneToMany to received
    @OneToMany(() => ReceivedModel, (received) => received.product, {cascade: true})
    received: Relation<ReceivedModel[]>;
    //OneToMany to Orders
    @OneToMany(() => OrderModel, (order) => order.product, {cascade: true})
    orders: Relation<OrderModel>;

    @CreateDateColumn()
    create_at!: Date;
    @UpdateDateColumn()
    update_at!: Date;
    @DeleteDateColumn()
    delete_at?: Date;
}