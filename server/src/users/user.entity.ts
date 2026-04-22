import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserLoginRecord } from './user-login-record.entity';
import { UserMistake } from './user-mistake.entity';
import { UserAnswer } from './user-answer.entity';
import { UserTask } from './user-task.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ name: 'current_level', default: 1 })
  currentLevel: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  t: string;

  @Column({ name: 'total_score', default: 0 })
  totalScore: number;

  @Column({ name: 'completed_tasks', default: 0 })
  completedTasks: number;

  @OneToMany(() => UserLoginRecord, loginRecord => loginRecord.user)
  loginRecords: UserLoginRecord[];

  @OneToMany(() => UserMistake, mistake => mistake.user)
  mistakes: UserMistake[];

  @OneToMany(() => UserAnswer, answer => answer.user)
  answers: UserAnswer[];

  @OneToMany(() => UserTask, task => task.user)
  tasks: UserTask[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
