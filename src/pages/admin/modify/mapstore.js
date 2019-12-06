import {InputAsyncAction} from "actions/user/userAsyncAction"
export const mapStateToProps = (state)=>({
    input:state.user.input
})
export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(val){
        dispatch(InputAsyncAction(val))
     },
})
