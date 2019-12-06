import {cityAsyncType,posterAsyncType} from "./actionsTypes"

import {createAction} from "redux-actions"

import {cityApi,posterApi} from "api/vocal"
export const cityAsyncAction =()=>{
    let cityAction =createAction(cityAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  cityApi()
        dispatch(cityAction(data))
    }
}
export const posterAsyncAction =(item)=>{
    let posterAction =createAction(posterAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  posterApi(item)
        dispatch(posterAction(data))
    }
}