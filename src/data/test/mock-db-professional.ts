import { AddProfessionalRepository } from '@/data/protocols/db/professional/add-professional-repository'
import { ProfessionalModel } from '@/domain/models/professional'
import { mockProfessional } from '@/domain/test/mock-professional'
import { AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export const mockAddProfessionalRepository = (): AddProfessionalRepository => {
  class AddProfessionalRepositoryStub implements AddProfessionalRepository {
    async add (professionalData: AddProfessionalParams): Promise<ProfessionalModel> {
      return Promise.resolve(mockProfessional())
    }
  }

  return new AddProfessionalRepositoryStub()
}
