import { getCustomRepository, Repository } from "typeorm"
import { Worker } from "../entities/Worker"
import { WorkersRepository } from "../repositories/WorkersRepository"

interface IWorkerCreate {
    name: string
    phone: string
    office: string
}

class WorkersService {
    private workersRepository: Repository<Worker>

    constructor() {
        this.workersRepository = getCustomRepository(WorkersRepository)
    }

    async create({name, phone, office}: IWorkerCreate) {
        const worker = this.workersRepository.create({
            name, 
            phone, 
            office
        })

        await this.workersRepository.save(worker)

        return worker
    }
}

export { WorkersService }