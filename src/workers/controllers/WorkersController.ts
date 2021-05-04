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
}

export { WorkersController };
