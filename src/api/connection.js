import { BASE_URL_DEV, BASE_URL_PROD } from './URLs'
import ApolloClient from 'apollo-boost'

const BASE_URL = process.env.environment === 'PRODUCTION' ? BASE_URL_PROD : BASE_URL_DEV

const client = new ApolloClient({
  uri: BASE_URL
})

export default client
