import { httpCountryService } from './http-service'

export class CountryService {
  async getAllCountries () {
    return await httpCountryService.get('/all')
  }

  async getCountryByName (name) {
    return await httpCountryService.get(`/name/${name}`)
  }

  async getCountriesByRegion (region) {
    return await httpCountryService.get(`/region/${region}`)
  }
}
