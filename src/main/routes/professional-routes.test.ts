import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import request from 'supertest'
import { Collection } from 'mongodb'
import app from '@/main/config/app'
import { mockAddProfessionalParams } from '@/domain/test/mock-professional'

let professionalCollection: Collection

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    professionalCollection = await MongoHelper.getCollection('surveys')
    await professionalCollection.deleteMany({})
  })

  describe('POST /survey', () => {
    test('Should Return 200 on add professional on success', async () => {
      await request(app)
        .post('/api/professional')
        .send(mockAddProfessionalParams())
        .expect(200)
    })
  })
})
