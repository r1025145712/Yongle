import {vocalAsyncType,venueAsyncType} from "./actionsTypes"

import {createAction} from "redux-actions"

import {recommendApi,venueApi} from "api/vocal"
export const vocalAsyncAction =()=>{
    let vocalAction =createAction(vocalAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await  recommendApi()
        dispatch(vocalAction(data))
    }
}
export const venueAsyncAction =()=>{
    let venueAction =createAction(venueAsyncType,(data)=>({data:data}))
    console.log(venueAction)
    return async (dispatch)=>{
        let data =await  venueApi()
        dispatch(venueAction(data))
    }
}