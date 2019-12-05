// import {weekAsyncType} from "./actionsTypes",,
import {searchAsyncType} from "./actionsTypes"
import {fanhuiAsyncType,addAsyncType} from "./actionsTypes"

import {LoadAsyncType} from "./actionsTypes"
import {Refresh} from "api/classify"

import {createAction} from "redux-actions"
import {classify,searchApi} from "api/classify"


export const searchAsyncAction = ()=>{
    let searchAction = createAction(searchAsyncType,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await classify();
        dispatch(searchAction(data))
        // console.log(dispatch(weekAction(data)))
    }
}

export const fanhuiAsyncAction = ()=>{
    let fanhuiAction = createAction(fanhuiAsyncType,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await searchApi("default");
        dispatch(fanhuiAction(data))
        // console.log(data)
    }
}

export const addAsyncAction=(val)=>{
    let addAction = createAction(addAsyncType,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await searchApi(val);
        dispatch(addAction(data))
        // console.log(data)
    }
}

export const LoadAsyncAction=()=>{
    let LoadAction = createAction(LoadAsyncType,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await Refresh();
        dispatch(LoadAction(data))
        // console.log(data)
    }
}


