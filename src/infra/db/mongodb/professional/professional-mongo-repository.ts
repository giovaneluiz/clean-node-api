import { AddProfessionalRepository } from '@/data/protocols/db/professional/add-professional-repository'
import { ProfessionalModel } from '@/domain/models/professional'
import { AddProfessionalParams } from '@/domain/usecases/professional/add-professional'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

export class ProfessionalMongoRepository implements AddProfessionalRepository {
  async add (professionalData: AddProfessionalParams): Promise<ProfessionalModel> {
    const professionalCollection = await MongoHelper.getCollection('surveys')
    const professional = await professionalCollection.insertOne(professionalData)
    return professional && MongoHelper.map(professional)
  }
}
