const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.228.cn/",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
    app.use("/node",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/node":""
        }
    }))
    app.use("/local",proxy({
        target:"http://localhost:3600",
        changeOrigin:true,
        pathRewrite:{
            "^/local":""
        }
    }))
}