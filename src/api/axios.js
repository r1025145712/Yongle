import http from "utils/axios";


export const userApi = (username,password)=>http({
    method:"post",
    url:"/local/users/register",
    data:{
        username: username,
        password: password,
    }
})
// 登录
export const loginApi = (username,password)=>http({
    method:"post",
    url:"/local/users/login",
    data:{
        username: username,
        password: password,
    }
})
// 修改图片
export const modifyApi = (formData)=>http({
    method:"post",
    url:"local/upload/urlImage",
    data:formData, 
    processData: false,
    cache: false,
    // contentType: "multipart/form-data",
    headers: { "content-type": "multipart/form-data" }
})
// 修改资料
export const modify1Api = (name,img,id)=>http({
    method:"post",
    url:"local/users/modify",
    data: {
        name2:name,
        img,
        id
    },
})
export const modifyPasswordApi = (password,confirm,username)=>http({
    method:"post",
    url:"local/users/password",
    data: {
        password,
        confirm,
        username,
    }
})