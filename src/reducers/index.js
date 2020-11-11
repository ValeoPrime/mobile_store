import { combineReducers } from "redux"
import {connectRouter} from 'connected-react-router'
import phones from './phones'
import phonesPages from './phonesPage'



export default history => {
    return combineReducers({
        phones,
        phonesPages,
        router: connectRouter(history)
        
    })
}