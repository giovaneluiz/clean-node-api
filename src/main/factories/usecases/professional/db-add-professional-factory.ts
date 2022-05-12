import { DbAddProfessional } from '@/data/usecases/professional/db-add-professional'
import { AddProfessional } from '@/domain/usecases/professional/add-professional'
import { ProfessionalMongoRepository } from '@/infra/db/mongodb/professional/professional-mongo-repository'

export const makeDbAddProfessional = (): AddProfessional => {
  const professionalMongoRepository = new ProfessionalMongoRepository()
  return new DbAddProfessional(professionalMongoRepository)
}
