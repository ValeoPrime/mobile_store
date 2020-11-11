export const getPhoneById = (state, id) => state.phones.allPhones[id]


export const getPhones = (state) => {
    
    const phones = state.phonesPages.telId.map(item => {
       return getPhoneById(state, item)
    })
    return phones
    
}

export const getRenderedPhonesLength = state => {
    return state.phonesPages.telId.length
}