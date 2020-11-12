import {
  FETCH_PHONE_START,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_ERROR,
  LOAD_MORE_PHONE_START,
  LOAD_MORE_PHONE_SUCCESS,
  LOAD_MORE_PHONE_ERROR,
  FETCH_PHONES_BY_ID_START,
  FETCH_PHONES_BY_ID_SUCCESS,
  FETCH_PHONES_BY_ID_ERROR,
  ADD_PHONE_TO_BASKET

} from '../actionTypes'
import {fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi} from '../api/apiMetods'
import {getRenderedPhonesLength} from '../selectors'

export const fetchPhones = () => async (dispatch) => {
  dispatch({type: FETCH_PHONE_START})

  try {
    await fetchPhonesApi().then(data=> {
      const allPhonesObj = {}
      data.forEach((phone) => {allPhonesObj[phone.id] = phone})
      dispatch({type: FETCH_PHONE_SUCCESS, payload: allPhonesObj})
    })

  } catch (e) {
    console.log(e)
    dispatch({type: FETCH_PHONE_ERROR, payload: e, error: true})
  }
}

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState())
  dispatch({type: LOAD_MORE_PHONE_START})

  try {
    await loadMorePhonesApi({offset}).then(data=> {
      const allPhonesObj = {}
      data.forEach((phone) => {allPhonesObj[phone.id] = phone})
      dispatch({type: LOAD_MORE_PHONE_SUCCESS, payload: allPhonesObj})
    })

  } catch (e) {
    console.log(e)
    dispatch({type: LOAD_MORE_PHONE_ERROR, payload: e, error: true})
  }
}

export const fetchPhoneById = (phoneId) => async (dispatch) => {
  dispatch({type: FETCH_PHONES_BY_ID_START})

  try {
    await fetchPhoneByIdApi(phoneId).then(phone=> {
      const allPhonesObj = {}
      allPhonesObj[phone.id] = phone
      
      dispatch({type: FETCH_PHONES_BY_ID_SUCCESS, payload: allPhonesObj})
    })

  } catch (e) {
    console.log(e)
    dispatch({type: FETCH_PHONES_BY_ID_ERROR, payload: e, error: true})
  }
} 

export const addPhoneToBasket = (phoneId) => (dispatch) => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: phoneId
  })
}
