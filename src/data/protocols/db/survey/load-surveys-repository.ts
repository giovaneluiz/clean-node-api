import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveysRepository {
  loadSurveysAll: () => Promise<SurveyModel[]>
}
