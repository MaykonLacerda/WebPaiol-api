import { Request, Response } from 'express'
import { ProductionsService } from '../services/ProductionsService'

class ProductionsController {
  async create( req: Request, res: Response) {
    const { amount, task, worker_id, value } = req.body
    const productionsService = new ProductionsService()

    const production = await productionsService.create({
      amount,
      value,
      task,
      worker_id
    })

    return res.json(production)

  }

  async showByWorker( req: Request, res: Response) {
    const { id } = req.params

    const productionsService = new ProductionsService()

    const list = await productionsService.listByWorker(id)

    return res.json(list)
  }
}

export { ProductionsController }
