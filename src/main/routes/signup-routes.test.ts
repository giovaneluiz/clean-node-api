import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'
import request from 'supertest'

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should Return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Giovane',
        email: 'giovane@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
