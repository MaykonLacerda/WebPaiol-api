import { Column, Entity, PrimaryColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm"
import bcrypt from "bcryptjs"

import { v4 as uuidv4 } from "uuid"

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  is_owner: boolean = false

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  constructor() {
    if(!this.id) {
      this.id = uuidv4()
    }
  }
}

export { User }
