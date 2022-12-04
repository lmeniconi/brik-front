import { find } from 'lodash'
import { saveInLocalStorage } from '@/utils/cart'

export const state = () => ({
  cart: [],
})

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
    saveInLocalStorage(cart)
  },

  addProduct(state, product, quantity = 1) {
    const findedProduct = find(state.cart, { id: product.id })

    if (findedProduct) findedProduct.quantity += quantity
    else state.cart.push(product)

    saveInLocalStorage(state.cart)
  },
  removeProduct(state, product) {
    const findedProduct = find(state.cart, { id: product.id })

    if (findedProduct && findedProduct.quantity > 1) findedProduct.quantity--
    else state.cart = state.cart.filter((item) => item.id !== product.id)

    saveInLocalStorage(state.cart)
  },
  clearStore(state, storeSlug) {
    const cart = state.cart.filter((item) => item.store.slug !== storeSlug)
    setCart(cart)
  },
}

export const actions = {
  loadCartFromLocalStorage({ commit }) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) commit('setCart', cart)
  },
}
