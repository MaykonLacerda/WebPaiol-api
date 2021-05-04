import { EntityRepository, Repository } from "typeorm"
import { Worker } from "../entities/Worker"

@EntityRepository(Worker)
class WorkersRepository extends Repository<Worker> {}

export {WorkersRepository}