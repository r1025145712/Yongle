import {handleActions} from "redux-actions";
import {userLoginTypes,inputTypes} from "actions/user/usersTypes"
const defaultState = {
    userInfo:{},
    input:""
}


export default handleActions({
    [userLoginTypes]:(state,action)=>{
        let userState = Object.assign({},state);
        userState.userInfo = action.payload;
        return userState;
    },
    [inputTypes]:(state,action)=>{
        let inputState = Object.assign({},state);
        inputState.input = action.value;
        return inputState;
    }
},defaultState);