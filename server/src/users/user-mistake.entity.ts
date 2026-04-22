import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_mistakes')
export class UserMistake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  questionId: string;

  @Column({ default: 1 })
  errorCount: number;

  @Column({ name: 'hidden', default: false })
  hidden: boolean;

  @Column({ name: 'review1_time', nullable: true })
  review1Time: Date;

  @Column({ name: 'review1_completed', default: false })
  review1Completed: boolean;

  @Column({ name: 'review2_time', nullable: true })
  review2Time: Date;

  @Column({ name: 'review2_completed', default: false })
  review2Completed: boolean;

  @Column({ name: 'review3_time', nullable: true })
  review3Time: Date;

  @Column({ name: 'review3_completed', default: false })
  review3Completed: boolean;

  @Column({ name: 'review4_time', nullable: true })
  review4Time: Date;

  @Column({ name: 'review4_completed', default: false })
  review4Completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.mistakes)
  @JoinColumn({ name: 'userId' })
  user: User;
}
