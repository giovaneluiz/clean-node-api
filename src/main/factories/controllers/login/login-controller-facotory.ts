import { makeLoginValidation } from './login-validation-factory'
import { LoginController } from '../../../../presentation/controllers/account/login/login-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeDbAuthentication } from '../../usecases/db-authentication-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-facotry'

export const makeLoginController = (): Controller => {
  const loginController = new LoginController(makeLoginValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(loginController)
}
