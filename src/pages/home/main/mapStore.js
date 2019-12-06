import {vocalAsyncAction,venueAsyncAction} from 'actions/home/actionsCreator'

export const mapStateToProps = (state)=>({
    vocal:state.home.vocal,
    venue:state.home.venue,
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncGet(){
        dispatch(vocalAsyncAction())
    },
    handleAsyncGetvenue(){
        dispatch(venueAsyncAction())
    }
})