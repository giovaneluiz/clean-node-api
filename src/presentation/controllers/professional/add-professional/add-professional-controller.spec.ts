import { throwError } from '@/domain/test'
import { mockProfessional } from '@/domain/test/mock-professional'
import { AddProfessional } from '@/domain/usecases/professional/add-professional'
import { AddProfessionalController } from '@/presentation/controllers/professional/add-professional/add-professional-controller'
import { httpSuccess, serverError } from '@/presentation/helpers/http/http-helper'
import { HttpRequest } from '@/presentation/protocols'
import { mockAddProfessional } from '@/presentation/test'

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    birthDate: 'any_birth_date',
    indentifier: 12345678900,
    phone: 99999999999,
    email: 'any_email@mail.com',
    percent: 0.6
  }
})

type SutTypes = {
  sut: AddProfessionalController
  addProfessionalStub: AddProfessional

}

const makeSut = (): SutTypes => {
  const addProfessionalStub = mockAddProfessional()
  const sut = new AddProfessionalController(addProfessionalStub)

  return {
    sut,
    addProfessionalStub
  }
}

describe('AddProfessional Controller', () => {
  test('Should call AddProfessional with correct values', async () => {
    const { sut, addProfessionalStub } = makeSut()
    const addProfessionalSpy = jest.spyOn(addProfessionalStub, 'add')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addProfessionalSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 500 if AddProfessional throws', async () => {
    const { sut, addProfessionalStub } = makeSut()
    jest.spyOn(addProfessionalStub, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(httpSuccess(mockProfessional()))
  })
})
