import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import { Worker } from './Worker';

@Entity('productions')
class Production {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'worker_id' })
  @ManyToOne(() => Worker)
  worker: Worker;

  @Column()
  worker_id: string;

  @Column()
  amount: string;

  @Column()
  task: string;

  @CreateDateColumn()
  day: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Production };
