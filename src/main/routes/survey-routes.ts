import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/surveys/add-survey/add-survey-controller-facotory'
import { makeLoadSurveysController } from '../factories/controllers/surveys/load-surveys/load-surveys-controller-facotory'
import { adminAuth, auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
