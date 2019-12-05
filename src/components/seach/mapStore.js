
import {searchAsyncAction,addAsyncAction} from "../../action/category/actionCreator"




export const mapStateToProps =(state)=>({
    city:state.sosuo.city,
    leibie:state.sosuo.leibie
})


export const mapDispathToProps =(dispatch)=>({
    handleAsyncweek(){
        dispatch(searchAsyncAction())
    },
    add(val){
        dispatch(addAsyncAction(val))
    }
    
})



// export default connect(mapStateToProps,mapDispathToProps)








