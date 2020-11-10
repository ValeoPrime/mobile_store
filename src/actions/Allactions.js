import {
  FETCH_PHONE_START,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_ERROR,
} from '../actionTypes'
import {fetchPhonesApi} from '../api/apiMetods'

export const fetchPhones = () => async (dispatch) => {
    console.log('вызван');
  dispatch({type: FETCH_PHONE_START})

  try {
    const allPhones = await fetchPhonesApi()
    dispatch({type: FETCH_PHONE_SUCCESS, payload: allPhones})
    
  } catch (e) {
    console.log(e)
    dispatch({type: FETCH_PHONE_ERROR, payload: e, error: true})
  }
}
