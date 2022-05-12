import { AddProfessional } from '@/domain/usecases/professional/add-professional'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddProfessionalController implements Controller {
  constructor (private readonly addProfessional: AddProfessional) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.addProfessional.add(httpRequest.body)
    return null
  }
}
