import {handleActions} from "redux-actions";
import {weekAsyncType} from "../../action/category/actionsTypes"

const defaultState = {
    classify:[]
}


export default handleActions({
    // "classify":(state,actions)=>{
    //     return
    // }
    [weekAsyncType]:(state,actions)=>{
        let weekState = JSON.parse(JSON.stringify(state));
        weekState.week_choice = actions.payload.data
        // console.log(weekState.week_choice)
        return weekState
    }
},defaultState)













