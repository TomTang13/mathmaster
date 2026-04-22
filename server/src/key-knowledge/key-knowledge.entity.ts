import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Week } from '../weeks/week.entity';

@Entity('key_knowledge')
export class KeyKnowledge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'week_id' })
  weekId: number;

  @Column({ name: 'knowledge_text', type: 'text' })
  knowledgeText: string;

  @Column({ type: 'int', nullable: true })
  difficulty: number;

  @Column({ name: 'target_day', nullable: true })
  targetDay: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  module: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  filename: string;

  @ManyToOne(() => Week, (week) => week.keyKnowledge)
  @JoinColumn({ name: 'week_id' })
  week: Week;
}
