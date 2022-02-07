import { SurveyModel, LoadSurveysRepository } from './db-load-surveys-protocols'
import { DbLoadSurveys } from './db-load-surveys'

const makeFakeSurveys = (): SurveyModel[] => {
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

describe('DbLoadSurveys', () => {
  test('Should call LoadSurveysRepository', async () => {
    class LoadSurveysRepositoryStub implements LoadSurveysRepository {
      async loadSurveysAll (): Promise<SurveyModel[]> {
        return makeFakeSurveys()
      }
    }
    const loadSurveysRepositoryStub = new LoadSurveysRepositoryStub()
    const loadSurveysAllSpy = jest.spyOn(loadSurveysRepositoryStub, 'loadSurveysAll')
    const sut = new DbLoadSurveys(loadSurveysRepositoryStub)
    await sut.load()
    expect(loadSurveysAllSpy).toHaveBeenCalled()
  })
})
