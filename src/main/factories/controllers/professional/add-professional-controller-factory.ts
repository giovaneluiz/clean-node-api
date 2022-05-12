import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-facotry'
import { makeDbAddProfessional } from '@/main/factories/usecases/professional/db-add-professional-factory'
import { AddProfessionalController } from '@/presentation/controllers/professional/add-professional/add-professional-controller'
import { Controller } from '@/presentation/protocols'

export const makeAddProfessionalController = (): Controller => {
  const addProfessionalController = new AddProfessionalController(makeDbAddProfessional())
  return makeLogControllerDecorator(addProfessionalController)
}
