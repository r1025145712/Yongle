import {handleActions} from 'redux-actions'

import {cityAsyncType,posterAsyncType} from "actions/city/actionsTypes"
const defaultState ={
    city:[],
    poster:[]
}

export default handleActions({
    [cityAsyncType]:(state,action)=>{
      let cityState =JSON.parse(JSON.stringify(state));
      cityState.city=action.payload.data.data;
        return cityState
    },
    [posterAsyncType]:(state,action)=>{
        let posterState =JSON.parse(JSON.stringify(state));
        posterState.poster=action.payload.data.data.slideList;
          return posterState
      },

},defaultState)