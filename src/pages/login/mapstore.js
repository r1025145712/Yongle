import {userLoginAsyncAction} from "actions/user/userAsyncAction"
export const mapStateToProps = (state)=>({

})
export const mapDispatchToProps = (dispatch)=>({
    async handleCb(username,password) {
  
            let data = await dispatch(userLoginAsyncAction(username,password));
           return data;
    }
})
