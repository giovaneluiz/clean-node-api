import { ProfessionalModel } from '@/domain/models/professional'
import { mockProfessional } from '@/domain/test/mock-professional'
import { AddProfessional, AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export const mockAddProfessional = (): AddProfessional => {
  class AddProfessionalStub implements AddProfessional {
    async add (data: AddProfessionalParams): Promise<ProfessionalModel> {
      return Promise.resolve(mockProfessional())
    }
  }
  return new AddProfessionalStub()
}
