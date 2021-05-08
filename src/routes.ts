import { Router } from 'express'
import { UsersController } from './accounts/controllers/UsersController'
import { ProductionsController } from './workers/controllers/ProductionsController'
import { WorkersController } from './workers/controllers/WorkersController'

const routes = Router()

const usersController = new UsersController()
const workersController = new WorkersController()
const productionsController = new ProductionsController()

routes.post('/user', usersController.create)
routes.get('/user', usersController.showUsers)

routes.post('/worker', workersController.create)
routes.get('/worker', workersController.showWorkers)

routes.post('/worker/production', productionsController.create)
routes.get('/worker/production/:id', productionsController.showByWorker)

export { routes }
