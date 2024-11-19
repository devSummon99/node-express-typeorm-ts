import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { State } from "./enum"
import { User } from "./";

@Entity("task")
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column('text')
  description: String;

  @Column({
    type: 'enum',
    enum: State,
  })
  state: State;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}