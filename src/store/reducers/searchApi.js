import {handleActions} from "redux-actions";
import {fanhuiAsyncType} from "../../action/category/actionsTypes"
import {LoadAsyncType} from "../../action/category/actionsTypes"

const defaultState = {
    classify:[],
    // load:[],
    // 
}


export default handleActions({
    [fanhuiAsyncType]:(state,actions)=>{
        let fanhuiState = JSON.parse(JSON.stringify(state));
        fanhuiState.classify = actions.payload.data.data.pagerMemoryList
        console.log(fanhuiState.classify)
        return fanhuiState
    },
    [LoadAsyncType]:(state,actions)=>{
        let LoadState = JSON.parse(JSON.stringify(state));
        LoadState.classify = [...actions.payload.data.data.pagerMemoryList,...LoadState.classify]
        // console.log(LoadState.load)
        // console.log(LoadState.load)
        return LoadState
    }
},defaultState)













