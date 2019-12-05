import {handleActions} from 'redux-actions'

import {vocalAsyncType,venueAsyncType} from "actions/home/actionsTypes"
const defaultState ={
    city:[],
    vocal:[],
    venue:[],
}

export default handleActions({
    [vocalAsyncType]:(state,action)=>{
      let vocalState =JSON.parse(JSON.stringify(state));
      vocalState.vocal=action.payload.data.data.pagerMemoryList;
      vocalState.city=action.payload.data.data.fcitys;
        return vocalState
    },
    [venueAsyncType]:(state,action)=>{
      
        let venueState =JSON.parse(JSON.stringify(state));
        venueState.venue=action.payload.data.data.venuePage.list;
          return venueState
      }
},defaultState)