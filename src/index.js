import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers/index'
import Layout from './containers/layout/layout'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))

)

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
            <Layout/>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root')
)

