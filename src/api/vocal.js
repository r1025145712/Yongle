import http from "../utils/request";

export const recommendApi = ()=>http({
    method:"get",
    url:"/server/category/default.json",
})
export const venueApi = ()=>http({
    method:"get",
    url:"/server/content/moreProductPlay.json",
    data:{
        fcity:-1,
        pageNum:1,
        type:1
    }
})
