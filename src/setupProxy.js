const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.228.cn/",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}