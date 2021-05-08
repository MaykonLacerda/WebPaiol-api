import { Request, Response } from 'express';
import { WorkersService } from '../services/WorkersService';
class WorkersController {
  async create(req: Request, res: Response) {
    const { name, phone, office } = req.body;
    const workersService = new WorkersService();

    const worker = await workersService.create({
      name,
      phone,
      office,
    });

    return res.json(worker);
  }

  async showWorkers(req: Request, res: Response) {

    const workersService = new WorkersService();

    const list = await workersService.listWorkers()

    return res.json(list)
  }
}

export { WorkersController };
