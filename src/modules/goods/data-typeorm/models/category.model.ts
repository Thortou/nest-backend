import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { ProductModel } from "./product.model";

@Entity({name:'category'})
export class CategoryModel {
    @PrimaryGeneratedColumn({unsigned: true})
    id : number;
    @Column({type:'varchar', length: 25, nullable: true, unique: true})
    category_code: string;
    @Column({type:'varchar', length: 50, unique: true})
    name: string;

    @OneToMany(() => ProductModel, (product) => product.category, {cascade: true})
    products: Relation<ProductModel[]>;
    
    @CreateDateColumn()
    create_at!: Date;
    @UpdateDateColumn()
    update_at!: Date;
    @DeleteDateColumn()
    delete_at?: Date;

}