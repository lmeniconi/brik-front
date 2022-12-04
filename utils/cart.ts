export function saveInLocalStorage(cart: any) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
