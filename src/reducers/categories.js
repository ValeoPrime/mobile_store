import {FETCH_CATEGORY_SUCCESS} from '../actionTypes.js'

const initialState = []
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORY_SUCCESS:
      return (state = {...payload})

    default:
      return state
  }
}
