import {valAsyncAction,cityAsyncAction,typeAsyncAction,dayAsyncAction,valAsyncAction1} from "actions/search/actionsCreator"

export const mapStateToProps = (state)=>({
   content:state.search.content,
   val:state.search.val,
   inputVal:state.search.inputVal,
   city:state.search.city,
   type:state.search.type,
   day:state.search.day,
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(val){
       dispatch(valAsyncAction(val))
    },
    handleAsyncGet1(val){
       dispatch(valAsyncAction1(val))
    },
    handleAsyncCity(city){
        dispatch(valAsyncAction(city))
    },
    handleCity(city1){
        dispatch(cityAsyncAction(city1))
    },
    handleType(type){
        dispatch(typeAsyncAction(type))
    },
    handleDay(day){
        dispatch(dayAsyncAction(day))
    }
})
