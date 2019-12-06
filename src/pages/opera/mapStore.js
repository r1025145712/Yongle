import {operaAsyncAction} from 'actions/opera/actionsCreator'

export const mapStateToProps = (state)=>({
    opera:state.opera.operalist
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(){
      
        dispatch(operaAsyncAction())
    }
})