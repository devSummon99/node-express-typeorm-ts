import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username : String;

    @Column()
    email : String;

    @Column()
    password : String;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deletedAt : Date;
}