import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {

  async index (req: Request, res: Response) {
    return res.send({ userID: req.userId })
  }

  async create (req: Request, res: Response) {
    const { name, phone, email, password, description } = req.body
    const usersService = new UsersService()

    const user = await usersService.create({
      name,
      phone,
      email,
      password,
      description
    })

    return res.json(user)

  }

  async showUsers(req: Request, res: Response) {

    const usersService = new UsersService()

    const list = await usersService.listUsers()

    return res.json(list)
  }
}

export { UsersController }
