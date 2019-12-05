import http from "../utils/request";

export const registerApi = (username,password)=>http.post({
    url:"/node/users/register",
    data:{
        username,
        password 
    }
})
export const loginApi = (username,password)=>http.post({
    url:"/node/users/login",
    data:{
        username,
        password 
    }
})