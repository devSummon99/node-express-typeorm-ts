import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { State } from "./enum"

@Entity("task")
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title : String;

    @Column('text')
    description : String;

    @Column({
        type: 'enum',
        enum: State,
      })
      state : State;
    
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @DeleteDateColumn()
    deletedAt : Date;
}