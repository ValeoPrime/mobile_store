export const getPhoneById = (state, id) => {
    console.log('Упал стейт',state);
    console.log('Упал айди',id);
    return state.phones.allPhones[id]
}



export const getPhones = (state) => {
    
    const phones = state.phonesPages.telId.map(item => {
       return getPhoneById(state, item)
    })
    return phones
    
}

export const getRenderedPhonesLength = state => {
    return state.phonesPages.telId.length
}