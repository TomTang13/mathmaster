import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { KeyKnowledge } from '../key-knowledge/key-knowledge.entity';
import { Task } from '../tasks/task.entity';

@Entity('weeks')
export class Week {
  @PrimaryColumn({ name: 'week_id' })
  weekId: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  milestone: string;

  @Column({ type: 'enum', enum: ['green', 'yellow', 'red'], default: 'red' })
  status: 'green' | 'yellow' | 'red';

  @Column({ name: 'is_locked', default: true })
  isLocked: boolean;

  @OneToMany(() => KeyKnowledge, (knowledge) => knowledge.week)
  keyKnowledge: KeyKnowledge[];

  @OneToMany(() => Task, (task) => task.week)
  tasks: Task[];
}
