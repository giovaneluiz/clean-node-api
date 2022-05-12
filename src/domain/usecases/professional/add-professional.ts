import { ProfessionalModel } from '@/domain/models/professional'

export type AddProfessionalParams = Omit<ProfessionalModel, 'id'>

export interface AddProfessional {
  add: (professional: AddProfessionalParams) => Promise<ProfessionalModel>
}
