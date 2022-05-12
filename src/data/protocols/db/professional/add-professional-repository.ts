import { ProfessionalModel } from '@/domain/models/professional'
import { AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export interface AddProfessionalRepository {
  add: (professionalData: AddProfessionalParams) => Promise<ProfessionalModel>
}
