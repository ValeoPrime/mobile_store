import {ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET} from '../actionTypes.js'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return (state = [...state, payload])
    case REMOVE_PHONE_FROM_BASKET:
      return state.filter(item => item !== payload)
    case CLEAN_BASKET:
      return initialState
    default:
      return state
  }
}
