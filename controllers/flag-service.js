import { httpFlagService } from './http-service'

export class FlagService {
  async getFlagByCode (code) {
    return await httpFlagService.get(`/${code}/flat/64.png`)
  }
}
