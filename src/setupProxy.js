const proxy = require("http-proxy-middleware");

//这个里面是nodejs范畴
//输出在命令行里面
module.exports = function (app) {
    // console.log(app) 
    // var userInfo=[];
    app.get("/test", (req, res) => {
        res.send("OK !!!!!")
    })
    // https://api.juooo.com
    app.use(proxy("/apis",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/apis":""
        }
    }))
}

// var express= require("express");
// var app= express();

