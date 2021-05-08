import { getCustomRepository, Repository } from "typeorm"
import { Worker } from "../entities/Worker"
import { WorkersRepository } from "../repositories/WorkersRepository"
import { Task } from "../task/Task"

interface IWorkerCreate {
    name: string
    phone: string
    office: number
}

class WorkersService {
    private workersRepository: Repository<Worker>

    constructor() {
        this.workersRepository = getCustomRepository(WorkersRepository)
    }

    async create({name, phone, office}: IWorkerCreate) {

      const taskType = new Task()

      const worker = this.workersRepository.create({
          name,
          phone,
          office: taskType.type(office)
      })

      await this.workersRepository.save(worker)

      return worker
    }

    async listWorkers() {
      const list = await this.workersRepository.find()

      return list
    }
}

export { WorkersService }
