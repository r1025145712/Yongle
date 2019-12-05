import { userLoginTypes,inputTypes } from "./usersTypes";
import { loginApi } from "api/axios";
import { createAction } from "redux-actions"
import { Toast } from 'antd-mobile';
export const userLoginAsyncAction = (username, password) => {
    let userLoginAction = createAction(userLoginTypes, data => data);

    return async (dispatch) => {
        let data = await loginApi(username, password);

        if (data.data.code === 1) {
            Toast.success(data.data.info, 1)
            localStorage.setItem("name",
                data.data.data.name,
            )
            localStorage.setItem("urlPic",
                data.data.data.urlPic,
            )
            localStorage.setItem("id",
                data.data.data._id
            )
            dispatch(userLoginAction(data.data.data))

            //在异步中做了一个return返回
            return data.data.code;
        } else {
            Toast.fail(data.data.info)
        }
    }
}
export const InputAsyncAction = (value)=>({
    type:inputTypes,
    value:value
})