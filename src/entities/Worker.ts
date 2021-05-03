import {
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn
} from "typeorm";

import { v4 as uuidv4 } from "uuid"

@Entity("workers")
class Worker {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    office: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Worker } 