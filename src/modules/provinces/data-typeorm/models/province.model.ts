import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'provinces'})
export class ProvinceModel {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;
    @Column({type:'varchar', length:100})
    name: string;
    @Column({type: 'varchar', length: 100})
    prov_name_eng: string;
    @CreateDateColumn()
    createAt!: Date;
    @UpdateDateColumn()
    updateAt!: Date;
    @DeleteDateColumn()
    deleteAt?: Date;
}