import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { ProductModel } from "./product.model";

@Entity({name:'received'})
export class ReceivedModel {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;
    @Column()
    product_id: number;
    @Column({type:'text'})
    description: string;
    @Column({type:'int'})
    qty: number;
    @Column('decimal', { precision: 10, scale: 2 })
    price: number
    //ManyToOne to Product
    @ManyToOne(() => ProductModel, (product) => product.received, {onDelete:'CASCADE'})
    @JoinColumn({name: 'product_id'})
    product: Relation<ProductModel>;
    
    @CreateDateColumn()
    create_at!: Date;
    @UpdateDateColumn()
    update_at!: Date;
    @DeleteDateColumn()
    delete_at?: Date;
}