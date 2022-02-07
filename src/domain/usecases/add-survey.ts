export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
  date: Date
}

interface SurveyAnswer {
  image?: string
  answer: string
}
export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
