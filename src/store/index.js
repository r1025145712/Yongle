import {combineReducers,createStore,applyMiddleware} from 'redux'

import reduxThunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import home from './reducers/home'
import city from "./reducers/city"
import opera from './reducers/opera'
import search from './reducers/search'
import user from "./reducers/user"
const reducers =combineReducers({
    home,
    opera,
    city,
    search,
    user
})

const store =createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store