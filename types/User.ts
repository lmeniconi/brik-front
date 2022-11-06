export type User = {
  id: number
  email: string
  picture: string | null
  provider: 'auth0'
  role: 'admin' | 'user'
}
