import { Store } from './Store'

export type User = {
  id: number
  email: string
  firstName: string
  lastName: string
  picture: string | null
  origin: 'auth0'
  role: 'admin' | 'provider' | 'user'
  store?: Store
}
