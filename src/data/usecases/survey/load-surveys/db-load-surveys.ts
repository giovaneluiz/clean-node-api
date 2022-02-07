import { SurveyModel } from '../../../../domain/models/survey'
import { LoadSurveys, LoadSurveysRepository } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    await this.loadSurveysRepository.loadSurveysAll()
    return []
  }
}
