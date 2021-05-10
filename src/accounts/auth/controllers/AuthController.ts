import { Request, Response } from "express";
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../../entities/User'


class AuthController {

  async authenticate (req: Request, res: Response) {
    const { name, password } = req.body
    const repository = getRepository(User)

    const user = await repository.findOne({ where: { name }})

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign( { id: user.id }, 'reinaldoeguinho', { expiresIn: '1d'})

    return res.json({
      user,
      token
    })

  }
}

export { AuthController }
