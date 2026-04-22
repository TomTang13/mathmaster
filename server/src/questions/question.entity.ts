import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity('questions')
export class Question {
  @PrimaryColumn({ name: 'question_id' })
  questionId: string;

  @Column({ name: 'task_id' })
  taskId: string;

  @Column({ name: 'question_type_id', nullable: true })
  questionTypeId: number;

  @Column({ name: 'difficulty_id', nullable: true })
  difficultyId: number;

  @Column({ name: 'knowledge_id', nullable: true })
  knowledgeId: number;

  @Column({ name: 'question_body', type: 'text' })
  questionBody: string;

  @Column({ type: 'text' })
  answer: string;

  @Column({ name: 'options_json', type: 'json', nullable: true })
  optionsJson: string[];

  @Column({ type: 'text', nullable: true })
  explanation: string;

  @Column({ name: 'order_index', nullable: true })
  orderIndex: number;

  @ManyToOne(() => Task, (task) => task.questions, { nullable: true })
  @JoinColumn({ name: 'task_id', referencedColumnName: 'taskId' })
  task: Task;
}
