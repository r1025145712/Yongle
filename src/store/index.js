import {combineReducers,createStore,applyMiddleware} from "redux"

import reduxThunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension"

import category from "./reducers/category";


const reducers = combineReducers({
    category
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store









