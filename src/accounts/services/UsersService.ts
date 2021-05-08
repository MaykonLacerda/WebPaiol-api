import { Repository, getCustomRepository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUserCreate {
  name: string
  phone: string
  email: string
  password: string
  description: string
}

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create({ name, phone, email, password, description }: IUserCreate) {

    const user = this.usersRepository.create({
      name,
      phone,
      email,
      password,
      description
    })

    await this.usersRepository.save(user)

    return user
  }

  async listUsers() {
    const list = await this.usersRepository.find()

    return list
  }
}

export { UsersService }
