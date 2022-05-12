import { AddProfessionalRepository } from '@/data/protocols/db/professional/add-professional-repository'
import { ProfessionalModel } from '@/domain/models/professional'
import { AddProfessional, AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export class DbAddProfessional implements AddProfessional {
  constructor (private readonly addProfessionalRepository: AddProfessionalRepository) {}

  async add (data: AddProfessionalParams): Promise<ProfessionalModel> {
    const newProfessional = await this.addProfessionalRepository.add(data)
    return newProfessional
  }
}
