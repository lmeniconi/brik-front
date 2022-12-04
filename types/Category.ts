import { Product } from './Product'

export type Category = {
  id: number
  slug: string
  name: string
  products?: Product[]
}
