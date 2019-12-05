import {combineReducers,createStore,applyMiddleware} from "redux"

import reduxThunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension"


import sosuo from "./reducers/sosuo"
import searchApi from "./reducers/searchApi"

const reducers = combineReducers({

    sosuo,
    searchApi
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store









