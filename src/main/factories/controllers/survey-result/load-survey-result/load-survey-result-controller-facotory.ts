import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-facotry'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/db-load-survey-by-id-factory'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result/load-survey-result/load-survey-result-controller'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey-result/db-load-survey-result-factory'

export const makeLoadSurveyResultController = (): Controller => {
  const surveyController = new LoadSurveyResultController(makeDbLoadSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(surveyController)
}
