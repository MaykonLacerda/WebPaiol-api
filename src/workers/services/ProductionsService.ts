import { getCustomRepository, Repository } from "typeorm"
import { Production } from "../entities/Production"
import { ProductionsRepository } from "../repositories/ProductionsRepository"


interface IProductionCreate {
  amount: string
  task: string
  worker_id: string
}

class ProductionsService {
  private productionsRepository: Repository<Production>
  private taskTipes = ["Cortador", "Rasgador", "Prensador", "Tirador", "Aparador", "Empacotador", "Gerente"]

  constructor () {
    this.productionsRepository = getCustomRepository(ProductionsRepository)
  }

  async create({ amount, task, worker_id }: IProductionCreate) {

    const taskType = (taskType: string) => {
      return taskType = this.taskTipes[task]
    }

    const production = this.productionsRepository.create({
      amount,
      task: taskType(task),
      worker_id
    })

    await this.productionsRepository.save(production)

    return production
  }
}

export { ProductionsService }
