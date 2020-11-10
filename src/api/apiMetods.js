import phones from './mockPhones'

export const fetchPhonesApi = async () => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}
