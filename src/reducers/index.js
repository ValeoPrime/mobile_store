import { combineReducers } from "redux"
import {connectRouter} from 'connected-react-router'
import phones from './phones'
import phonesPages from './phonesPage'
import phonePage from './phonePage'
import basket from './basket'



export default history => {
    return combineReducers({
        phones,
        phonesPages,
        phonePage,
        basket,
        router: connectRouter(history)
        
    })
}