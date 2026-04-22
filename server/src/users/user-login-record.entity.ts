import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_login_records')
@Unique(['userId', 'loginDate'])
export class UserLoginRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.loginRecords, { onDelete: 'CASCADE' })
  user: User;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ type: 'date', name: 'login_date' })
  loginDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
