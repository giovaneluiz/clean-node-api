import { makeAddProfessionalController } from '@/main/factories/controllers/professional/add-professional-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/professional', adaptRoute(makeAddProfessionalController()))
}
