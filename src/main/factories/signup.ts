import { Controller } from '../../presentation/protocols'
import { DbAddAccount } from '../../data/usecases/account/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptografy/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { makeSignUpValidation } from './signup-validation'
import { LogControllerDecorator } from '../decoratos/log'

export const makeSignUpController = (): Controller => {
  const bcryptAdapter = new BcryptAdapter(12)
  const addAccountRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, addAccountRepository)
  const signUpController = new SignUpController(dbAddAccount, makeSignUpValidation())
  const logErrorRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logErrorRepository)
}
