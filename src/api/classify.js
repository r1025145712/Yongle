import http from "utils/request";

// export const classify=(city_id,class_id,time_id)=>http.get({
//     // method:"get",
//     url:"/ajax/server/category/default.json",
// })

// city_id,class_id,time_id
export const classify=()=>http.get({  
    url:"/ajax/server/category/default.json",
})



export const searchApi=(fanhui)=>http.get({
    url:"/ajax/server/category/"+fanhui+".json",
})

export const Refresh=()=>http.get({
    url:"/ajax/server/category/default.json",
})
