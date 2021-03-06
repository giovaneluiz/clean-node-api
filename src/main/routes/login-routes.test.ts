import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'
import request from 'supertest'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Authentication Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should Return 200 on signup', async () => {
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

  describe('POST /login', () => {
    test('Should Return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Giovane',
        email: 'giovane@mail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'giovane@mail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should Return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'giovane@mail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
