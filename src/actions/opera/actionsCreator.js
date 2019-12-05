import {operaAsyncType,subjectType} from "./actionsTypes"

import {createAction} from "redux-actions"

import {operaApi,subjectApi} from "api/vocal"
export const operaAsyncAction =()=>{
    let operaAction =createAction(operaAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  operaApi()
        dispatch(operaAction(data))
    }
}
export const subjectAsyncAction =()=>{
    let subjectAction =createAction(subjectType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  subjectApi()
        dispatch(subjectAction(data))
    }
}