import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}