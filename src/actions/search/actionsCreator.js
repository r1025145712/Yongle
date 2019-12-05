import {valAsyncType,cityvalType,valType,dayType,shuju} from "./actionsTypes"

import {createAction} from "redux-actions"

import {searchApi} from "api/vocal"
export const valAsyncAction =(val)=>{
    let valAction =createAction(valAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  searchApi(val)
        dispatch(valAction(data))
    }
}
export const valAsyncAction1 =(val)=>{
    let valAction =createAction(shuju,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  searchApi(val)
        dispatch(valAction(data))
    }
}

export const cityAsyncAction = (value)=>({
    type:cityvalType,
    value:value
})
export const typeAsyncAction = (value)=>({
    type:valType,
    value:value
})

export const dayAsyncAction = (value)=>({
    type:dayType,
    value:value
})