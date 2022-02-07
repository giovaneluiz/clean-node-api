import { SurveyAnswer, SurveyModel } from '@/domain/models/survey'

export type AddSurveyModel = {
  question: string
  answers: SurveyAnswer[]
  date: Date
}

export interface LoadSurveys {
  load: () => Promise<SurveyModel[]>
}
