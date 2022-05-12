import { AddProfessional } from '@/domain/usecases/professional/add-professional'
import { serverError } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddProfessionalController implements Controller {
  constructor (private readonly addProfessional: AddProfessional) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.addProfessional.add(httpRequest.body)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
