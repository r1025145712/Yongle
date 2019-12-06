import {cityAsyncAction,posterAsyncAction} from 'actions/city/actionsCreator'

export const mapStateToProps = (state)=>({
   city:state.city.city,
   poster:state.city.poster
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(){
        dispatch(cityAsyncAction())
    },
    handleAsyncGetCity(item){
        dispatch(posterAsyncAction(item))
    }
})