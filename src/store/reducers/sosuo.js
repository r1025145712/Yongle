import {handleActions} from "redux-actions";
import {searchAsyncType} from "../../action/category/actionsTypes"

const defaultState = {
    city:[],
    leibie:[],

}


export default handleActions({
    [searchAsyncType]:(state,actions)=>{
        let sosuoState = JSON.parse(JSON.stringify(state));
        sosuoState.city.data = actions.payload.data.data.fcitys;
        sosuoState.leibie.data = actions.payload.data.data.typeas;
        // console.log(sosuoState)
        return sosuoState
    }
},defaultState)







