import { ProfessionalModel } from '@/domain/models/professional'
import { AddProfessionalParams } from '@/domain/usecases/professional/add-professional'

export const mockProfessional = (): ProfessionalModel => ({
  id: 'any_id',
  name: 'any_name',
  birthDate: 'any_birth_date',
  indentifier: 12345678900,
  phone: 99999999999,
  email: 'any_email@mail.com',
  percent: 0.6
})

export const mockAddProfessionalParams = (): AddProfessionalParams => ({
  name: 'any_name',
  birthDate: 'any_birth_date',
  indentifier: 12345678900,
  phone: 99999999999,
  email: 'any_email@mail.com',
  percent: 0.6
})
