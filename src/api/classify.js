import http from "utils/request";

export const classify=()=>http.get({
    url:"/server/category/default.json"
})