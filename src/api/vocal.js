import http from "../utils/request";

export const recommendApi = ()=>http.get({
    url:"/ajax/server/category/default.json",
})

export const posterApi=(city)=>http.get({
    url:'/ajax/server/content/city/'+city+'.json',
})
export const venueApi = ()=>http.get({
    url:"/ajax/server/content/moreProductPlay.json",
    data:{
        fcity:-1,
        pageNum:1,
        type:1
    }
})
export const operaApi = ()=>http.get({
    url:"/ajax/server/opera/list.json",
})
export const subjectApi = ()=>http.get({
    url:"/ajax/server/subject/list.json",
})
export const cityApi = ()=>http.get({
    url:"/ajax/server/content/city/list.json",
})
export const searchApi =(content)=>http.get({
    url:'/ajax/server/search/s/'+content+'.json'
})
// city,sort,date,
// city+sort+date+
