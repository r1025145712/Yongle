import {handleActions} from 'redux-actions'

import {valAsyncType,cityvalType,valType,dayType,shuju} from "actions/search/actionsTypes"
const defaultState ={
    content:JSON.parse(sessionStorage.getItem('content'))||[],
    val:JSON.parse(sessionStorage.getItem('val'))||[],
    inputVal:JSON.parse(sessionStorage.getItem('inputVal'))||[],
    city:'',
    type:'',
    day:''
}

export default handleActions({
    
    [valAsyncType]:(state,action)=>{
      let contentState =JSON.parse(JSON.stringify(state));
      contentState.inputVal=action.payload.data.data.keyword;
      sessionStorage.setItem('inputVal',JSON.stringify(contentState.inputVal));
      contentState.content=action.payload.data.data;
      sessionStorage.setItem('content',JSON.stringify(contentState.content));
        return contentState
    },
    [shuju]:(state,action)=>{
        let contentState =JSON.parse(JSON.stringify(state));
        contentState.content=action.payload.data.data;
        sessionStorage.setItem('content',JSON.stringify(contentState.content));
        contentState.val=action.payload.data.data.pagerMemory.fistPage;
        sessionStorage.setItem('val',JSON.stringify(contentState.val));
          return contentState
      },
    [cityvalType]:(state,action)=>{
        let cityState =JSON.parse(JSON.stringify(state));
        cityState.city=action.value
          return cityState
      },   
      [valType]:(state,action)=>{
        let valState =JSON.parse(JSON.stringify(state));
        valState.type=action.value
          return valState
      },
      [dayType]:(state,action)=>{
        let dayState =JSON.parse(JSON.stringify(state));
        dayState.day=action.value
        return dayState
      }             
},defaultState)