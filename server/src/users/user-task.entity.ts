import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

export type UserTaskType = 'practice' | 'comprehensive' | 'review' | 'mistake';

@Entity('user_tasks')
export class UserTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'task_id', nullable: true })
  taskId: string;

  @Column({ name: 'task_type', type: 'varchar', length: 50 })
  taskType: UserTaskType;

  @Column({ name: 'week_id' })
  weekId: number;

  @Column({ name: 'day_number' })
  dayNumber: number;

  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;

  @Column({ name: 'completed_at', nullable: true })
  completedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}