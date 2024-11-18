import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./";


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

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}