import {FETCH_PHONE_SUCCESS, LOAD_MORE_PHONE_SUCCESS} from '../actionTypes'

const initialState = {
  telId: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONE_SUCCESS:
      return {...state, telId: [...Object.keys(payload)]}
    case LOAD_MORE_PHONE_SUCCESS:
      return {...state, telId: state.telId.concat([...Object.keys(payload)])}
    default:
      return state
  }
}
