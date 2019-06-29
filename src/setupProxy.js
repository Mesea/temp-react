const proxy = require('http-proxy-middleware');

// 所有http请求都会从这个中间件过
module.exports =function (app){
    app.use(proxy('/apis',{
        // 需要代理的主机
        target: 'https://m.juooo.com',
        // 是否跨域
        changeOrigin: true,
        //代理完成将url复写
        pathRewrite:{
            "^/apis":""
        }
    }))
}

// https://m.juooo.com