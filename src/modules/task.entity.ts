import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./enum"

@Entity("task")
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title : String;

    @Column()
    description : String;

    @Column({
        type: 'enum',
        enum: State,
      })
      state : State;
    
}