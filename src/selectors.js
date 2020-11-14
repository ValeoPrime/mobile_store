export const getPhoneById = (state, id) => {
  return state.phones.allPhones[id]
}

export const getActiveCategoryId = (ownProps) => {
  return ownProps?.match?.params?.id
}

export const getPhones = (state, ownProps) => {
  const activeCategory = getActiveCategoryId(ownProps)

  let phones = state.phonesPages.telId.map((item) => {
    return getPhoneById(state, item)
  })
  phones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(state.phonesPages.search.toLowerCase())
  ) // Фильтрация для поиска

  phones = activeCategory
    ? phones.filter((phone) => phone.categoryId === activeCategory)
    : phones //Фильтрация по категориям

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

export const getBasketPhonesWithCount = (state) => {
  const unikId = []
  state.basket.forEach((id) =>
    unikId.indexOf(id) >= 0 ? null : unikId.push(id)
  )

  let phones = unikId.map((phoneId) => {
    return getPhoneById(state, phoneId)
  })

  phones.forEach((phone) => {
    phone.count = state.basket.filter((id) => id === phone.id).length
  })
  return phones
}

export const getCategories = (state) => Object.values(state.categories)
