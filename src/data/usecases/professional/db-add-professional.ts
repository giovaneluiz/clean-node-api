import { AddProfessionalRepository } from '@/data/protocols/db/professional/add-professional-repository'
import { ProfessionalModel } from '@/domain/models/professional'
import { AddProfessional, AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export class DbAddProfessional implements AddProfessional {
  constructor (private readonly addProfessionalRepository: AddProfessionalRepository) {}

  async add (professional: AddProfessionalParams): Promise<ProfessionalModel> {
    await this.addProfessionalRepository.add(professional)
    return null
  }
}
