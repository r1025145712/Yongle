import {subjectAsyncAction} from 'actions/opera/actionsCreator'

export const mapStateToProps = (state)=>({
    subject:state.opera.subject
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(){
      
        dispatch(subjectAsyncAction())
    }
})