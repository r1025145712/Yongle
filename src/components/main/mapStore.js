
import {fanhuiAsyncAction} from "../../action/category/actionCreator"
import {LoadAsyncAction} from "../../action/category/actionCreator"

export const mapStateToProps =(state)=>({
    classify:state.classificationApi.classify

})


export const mapDispathToProps =(dispatch)=>({

    handleAsyncfanhui(){
        dispatch(fanhuiAsyncAction())
    },
    Load(){
        dispatch(LoadAsyncAction())
    }
})










