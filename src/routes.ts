import { Router } from 'express'
import { ProductionsController } from './workers/controllers/ProductionsController'
import { WorkersController } from './workers/controllers/WorkersController'

const routes = Router()

const workersController = new WorkersController()
const productionsController = new ProductionsController()

routes.post('/worker', workersController.create)

routes.post('/worker/production', productionsController.create)
routes.get('/worker/production/:id', productionsController.showByWorker)

export { routes }
