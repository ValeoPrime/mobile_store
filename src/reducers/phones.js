import {
  FETCH_PHONE_START,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_ERROR,
  LOAD_MORE_PHONE_SUCCESS,
} from '../actionTypes.js'

const initialState = {}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONE_START:
      return state
    case FETCH_PHONE_SUCCESS:
      return {...state, allPhones: payload}
    case FETCH_PHONE_ERROR:
      return state
    case LOAD_MORE_PHONE_SUCCESS:
      return {...state, allPhones: payload}
    default:
      return state
  }
}
