import phones from './mockPhones'

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
