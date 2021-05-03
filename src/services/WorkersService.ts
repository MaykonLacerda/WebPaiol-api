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
    private taskTipes = ["Cortador", "Rasgador", "Prensador", "Tirador", "Aparador", "Empacotador", "Gerente"]

    constructor() {
        this.workersRepository = getCustomRepository(WorkersRepository)
    }

    async create({name, phone, office}: IWorkerCreate) {
        const officeType = (officeType: string) => {
            return officeType = this.taskTipes[office]
        }

        const worker = this.workersRepository.create({
            name, 
            phone, 
            office: officeType(office)
        })

        await this.workersRepository.save(worker)

        return worker
    }
}

export { WorkersService }