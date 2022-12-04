import { Category } from './Category'
import { Pagination } from './Pagination'
import { Store } from './Store'

export type ProductPrice = {
  price: number
  maxUnits: number | null
  minUnits: number
}

export type Product = {
  id: number
  slug: string
  image: string
  name: string
  published: boolean
  description: string
  characteristics?: string
  stock: number
  width: number
  depth: number
  height: number
  categoryId: number
  category?: Category
  storeId: number
  store?: Store
  categories: Category[]
  productPrices: ProductPrice[]
}

export type Products = {
  data: Product[]
  meta: Pagination
}
