import { Product } from './Product'
import { User } from './User'

export type Store = {
  id: number
  slug: string
  name: string
  description: string | null
  phone: string
  address: string
  whatsappLink: string | null
  user: User
  products?: Product[]
}
