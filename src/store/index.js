import {combineReducers,createStore,applyMiddleware} from "redux"

import reduxThunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension"


import classification from "./reducers/classification"
import classificationApi from "./reducers/classificationApi"

const reducers = combineReducers({

    classification,
    classificationApi
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store









