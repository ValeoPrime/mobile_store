import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhonesApi = async () => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}

export const loadMorePhonesApi = async ({offset}) => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}

export const fetchPhoneByIdApi = async (id) => {
  return new Promise((resolve) => {
    const phone = phones.find((phone) => phone.id === id)
    resolve(phone)
  })
}

export const fetchCategoriesApi = async () => {
  return new Promise((resolve) => {
    resolve(categories)
  })
}
