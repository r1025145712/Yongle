import http from "utils/request";

export const classify=()=>http.get({
    // method:"get",
    url:"/ajax/server/category/default.json"
})