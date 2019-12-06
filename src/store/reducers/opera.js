import {handleActions} from 'redux-actions'

import {operaAsyncType,subjectType} from "actions/opera/actionsTypes"
const defaultState ={
    operalist:[],
    subject:[]
}

export default handleActions({
 
    [operaAsyncType]:(state,action)=>{
      let operaState =JSON.parse(JSON.stringify(state));
      operaState.operalist=action.payload.data.data.sxList;
        return operaState
    },
    [subjectType]:(state,action)=>{
        let subjectState =JSON.parse(JSON.stringify(state));
        subjectState.subject=action.payload.data.data.subjectPage.list;
          return subjectState
      },
      
},defaultState)