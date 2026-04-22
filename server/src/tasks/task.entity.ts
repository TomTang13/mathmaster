import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Week } from '../weeks/week.entity';
import { Question } from '../questions/question.entity';

export type TaskType = 'practice' | 'comprehensive' | 'mistake';

@Entity('tasks')
export class Task {
  @PrimaryColumn({ name: 'task_id' })
  taskId: string;

  @Column({ name: 'week_id' })
  weekId: number;

  @Column({ name: 'day_number' })
  dayNumber: number;

  @Column({ name: 'task_type', type: 'enum', enum: ['practice', 'comprehensive', 'mistake'] })
  taskType: TaskType;

  @Column()
  title: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  duration: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;

  @ManyToOne(() => Week, (week) => week.tasks)
  @JoinColumn({ name: 'week_id' })
  week: Week;

  @OneToMany(() => Question, (question) => question.task, { nullable: true })
  questions: Question[];
}
