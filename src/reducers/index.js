import { combineReducers } from "redux"
import {connectRouter} from 'connected-react-router'
import phones from './phones'


export default history => {
    return combineReducers({
        phones,
        router: connectRouter(history)
    })
}