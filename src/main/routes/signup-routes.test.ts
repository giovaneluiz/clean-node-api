import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
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
