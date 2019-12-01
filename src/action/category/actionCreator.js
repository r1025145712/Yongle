import {weekAsyncType} from "./actionsTypes"
import {createAction} from "redux-actions"
import {classify} from "api/classify"

export const weekAsyncAction = ()=>{

    let weekAction = createAction(weekAsyncType,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await classify();
        dispatch(weekAction(data))
        // console.log(data)
    }
}









