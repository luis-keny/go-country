import axios from 'axios'

export const httpCountryService = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const httpFlagService = axios.create({
  baseURL: 'https://flagsapi.com'
})
