import { adaptMiddleware } from '../adapters/express/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-facotory'

export const auth = adaptMiddleware(makeAuthMiddleware())
