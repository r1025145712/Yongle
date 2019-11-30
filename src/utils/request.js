import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";


const get = (options)=>{

    let url = options.url;
    let data = options.data;
    var str = "";

    if(data){

        for(var key in data){
            str += "&"+key+"="+data[key];
        }
    }

    url = url+"?"+str.slice(1);

    var result = fetchPro(url,{
        headers:{
            "content-type":"appliaction/json",
            ...options.headers
        }
    }).then(res => res.json());

    return result;
}


const post = (options)=>{



    var result = fetchPro(options.url,{
        method:"post",
        body:qs.string(options.data),
        headers:{
            "content-type":"appliaction/x-www-from-urlencoded",
            ...options.headers
        }
    }).then(res => res.json());

    return result;
}


export default {
    get,
    post
}

































































// import axios from "axios";

// //创建一个新的axios
// const server = axios.create({
//     //baseURL: "http://www.baidu.com",
//     withCredentials:true,
//     timeout:5000,
// })

// //请求的拦截
// server.interceptors.request.use((config)=>{
//    if(config.method=== "get"){
//        config.params = {...config.data};
//    }

  
   
// //    config.headers["content-type"]="applicetion/json";
//    //拦截token
//    config.headers.AuthToken = "this.$cookies.get('token')";

//    return config;
// },(err)=>{
//     return  Promise.reject(err);
// })



// //响应的拦击
// server.interceptors.response.use((res)=>{
//     if(res.status === 200){
//         return res.data;
//     }
// },(err)=>{
//     return  Promise.reject(err);
// })



// export default server;