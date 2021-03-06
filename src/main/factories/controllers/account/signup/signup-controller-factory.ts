import { Controller } from '@/presentation/protocols'
import { SignUpController } from '@/presentation/controllers/account/signup/signup-controller'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '@/main/factories/usecases/account/db-authentication-factory'
import { makeDbAddAccount } from '@/main/factories/usecases/account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-facotry'

export const makeSignUpController = (): Controller => {
  const signUpController = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(signUpController)
}
