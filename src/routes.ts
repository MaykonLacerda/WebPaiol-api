import { Router } from 'express'
import { WorkersController } from './workers/controllers/WorkersController'

const routes = Router()

const workersController = new WorkersController()

routes.post('/worker', workersController.create)

export { routes }