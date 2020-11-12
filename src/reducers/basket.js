import {ADD_PHONE_TO_BASKET} from '../actionTypes.js'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
       
      return state = [...state, payload]
    default:
      return state
  }
}
