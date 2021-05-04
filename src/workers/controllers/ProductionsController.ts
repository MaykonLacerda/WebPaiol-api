import { Request, Response } from 'express'
import { ProductionsService } from '../services/ProductionsService'

class ProductionsController {
  async create( req: Request, res: Response) {
    const { amount, task, worker_id } = req.body
    const productionsService = new ProductionsService()

    const production = await productionsService.create({
      amount,
      task,
      worker_id
    })

    return res.json(production)

  }
}

export { ProductionsController }
