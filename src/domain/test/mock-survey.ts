import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '../usecases/survey/add-survey'

export const mockSurveyModel = (): SurveyModel => {
  return {
    id: 'any_survey_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    },{
      image: 'any_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }
}

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_anwer'
  }],
  date: new Date()
})

export const mockSurveysModel = (): SurveyModel[] => {
  return [{
    id: 'any_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  }]
}
