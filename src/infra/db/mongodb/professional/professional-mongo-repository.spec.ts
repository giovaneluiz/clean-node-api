import { mockAddProfessionalParams } from '@/domain/test/mock-professional'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { ProfessionalMongoRepository } from '@/infra/db/mongodb/professional/professional-mongo-repository'
import { Collection } from 'mongodb'
import { env } from 'process'

let professionalCollection: Collection

describe('ProfessionalMongoRepository', () => {
  describe('Account Mongo Repository', () => {
    beforeAll(async () => {
      await MongoHelper.connect(env.mongoUrl)
    })

    afterAll(async () => {
      await MongoHelper.disconnect()
    })

    beforeEach(async () => {
      professionalCollection = await MongoHelper.getCollection('accounts')
      await professionalCollection.deleteMany({})
    })

    const makeSut = (): ProfessionalMongoRepository => {
      return new ProfessionalMongoRepository()
    }

    test('Should add an a professional on success', async () => {
      const sut = makeSut()
      const professional = await sut.add(mockAddProfessionalParams())
      expect(professional).toBeTruthy()
    })
  })
})
