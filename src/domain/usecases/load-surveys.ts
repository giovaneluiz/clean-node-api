import { SurveyAnswer, SurveyModel } from '../models/survey'

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
  date: Date
}

export interface LoadSurveys {
  load: () => Promise<SurveyModel[]>
}
