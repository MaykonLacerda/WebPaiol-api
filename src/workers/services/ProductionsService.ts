import { getCustomRepository, Repository } from "typeorm"
import { Production } from "../entities/Production"
import { ProductionsRepository } from "../repositories/ProductionsRepository"
import { Task } from "../task/Task"

interface IProductionCreate {
  amount: string
  task: number
  worker_id: string
  value: string
}

class ProductionsService {
  private productionsRepository: Repository<Production>

  constructor () {
    this.productionsRepository = getCustomRepository(ProductionsRepository)
  }

  async create({ amount, task, worker_id, value }: IProductionCreate) {

    const taskType = new Task()

    const production = this.productionsRepository.create({
      amount,
      value,
      task: taskType.type(task),
      worker_id
    })

    await this.productionsRepository.save(production)

    return production
  }

  async listByWorker(worker_id: string) {
    const list = await this.productionsRepository.find({
      where: { worker_id },
      relations: ["worker"]
    })

    return list
  }

}

export { ProductionsService }
