import { AddProfessionalRepository } from '@/data/protocols/db/professional/add-professional-repository'
import { mockAddProfessionalRepository } from '@/data/test'
import { DbAddProfessional } from '@/data/usecases/professional/db-add-professional'
import { mockAddProfessionalParams } from '@/domain/test/mock-professional'

type SutTypes = {
  sut: DbAddProfessional
  addProfessionalRepositoryStub: AddProfessionalRepository
}

const makeSut = (): SutTypes => {
  const addProfessionalRepositoryStub = mockAddProfessionalRepository()
  const sut = new DbAddProfessional(addProfessionalRepositoryStub)

  return {
    sut,
    addProfessionalRepositoryStub
  }
}

describe('DbAddProfessional', () => {
  test('Should call AddProfessionalRepository with correct values', async () => {
    const { sut, addProfessionalRepositoryStub } = makeSut()
    const professionalSpy = jest.spyOn(addProfessionalRepositoryStub, 'add')
    await sut.add(mockAddProfessionalParams())
    expect(professionalSpy).toHaveBeenCalledWith({
      name: 'any_name',
      birthDate: 'any_birth_date',
      indentifier: 12345678900,
      phone: 99999999999,
      email: 'any_email@mail.com',
      percent: 0.6
    })
  })
})
