import {
    FETCH_PHONES_BY_ID_SUCCESS
  } from '../actionTypes.js'
  
  const initialState = {
      id: null
  }
  export default (state = initialState, {type, payload}) => {
    switch (type) {
      case FETCH_PHONES_BY_ID_SUCCESS:
          return {...state, id: Object.keys(payload)[0]}
      default:
        return state
    }
  }