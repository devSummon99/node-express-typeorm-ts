import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./";
import { Role } from "./enum";


@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: String;

    @Column()
    email: String;

    @Column()
    password: String;

    @Column({
        type: 'enum',
        enum: Role,
        default: "user"
    })
    role : Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}