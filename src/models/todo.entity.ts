import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo_list')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  Name: string;
  @Column({ default: '' })
  task: string;
  @Column({ default: '' })
  taskStartTime: string;
  @Column({ default: '' })
  taskFinishTime: string;
}
