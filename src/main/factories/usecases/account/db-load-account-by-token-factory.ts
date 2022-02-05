import { DbLoadAccountByToken } from '../../../../data/usecases/account/load-account-by-token/db-load-account-by-token'
import { LoadAccountByToken } from '../../../../domain/usecases/load-account-by-token'
import { JwtAdapter } from '../../../../infra/criptografy/jwt-adapter/jwt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import env from '../../../config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const accountMongoRepository = new AccountMongoRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
