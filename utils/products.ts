import { Product } from '@/types'

export function getMinPrice(product: Product): number {
  const minPrice = product.productPrices.reduce(
    (min: number, productPrice: any) => {
      if (productPrice.price < min) return productPrice.price
      return min
    },
    product.productPrices[0].price
  )

  return minPrice
}

export function getRangePrice(product: Product, units: number): number {
  let rangePrice: number = 0

  product.productPrices.forEach((productPrice: any) => {
    if (!productPrice.maxUnits) rangePrice = productPrice.price

    if (units >= productPrice.minUnits && units <= productPrice.maxUnits)
      rangePrice = productPrice.price
  })

  return rangePrice
}
