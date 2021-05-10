import { Router } from 'express'

import authMiddleware from './accounts/auth/middlewares/authController'

import { UsersController } from './accounts/controllers/UsersController'
import { ProductionsController } from './workers/controllers/ProductionsController'
import { WorkersController } from './workers/controllers/WorkersController'
import { AuthController } from './accounts/auth/controllers/AuthController'

const routes = Router()

const usersController = new UsersController()
const authController = new AuthController()
const workersController = new WorkersController()
const productionsController = new ProductionsController()

routes.post('/auth', authController.authenticate)

routes.get('/user/index', authMiddleware, usersController.index)

routes.post('/user', usersController.create)
routes.get('/user', usersController.showUsers)

routes.post('/worker', workersController.create)
routes.get('/worker', workersController.showWorkers)

routes.post('/worker/production', productionsController.create)
routes.get('/worker/production/:id', productionsController.showByWorker)

export { routes }
