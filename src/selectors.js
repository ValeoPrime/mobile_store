export const getPhoneById = (state, id) => {
  return state.phones.allPhones[id]
}

export const getPhones = (state) => {
  const phones = state.phonesPages.telId.map((item) => {
    return getPhoneById(state, item)
  })
  return phones
}

export const getRenderedPhonesLength = (state) => {
  return state.phonesPages.telId.length
}

export const getTotalBasketCount = (state) => {
  return state.basket.length
}

export const getTotalBasketPrice = (state) => {
  let totalPrice = 0
  const total = state.basket.map((item) => state.phones.allPhones[item].price)
  total.forEach((item) => (totalPrice = totalPrice + item))
  return totalPrice
}
