
import { SaveSurveyResult, SaveSurveyResultRepository, SaveSurveyResultParams, SurveyResultModel } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultrepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    const surveyResult = await this.saveSurveyResultrepository.save(data)
    return surveyResult
  }
}
