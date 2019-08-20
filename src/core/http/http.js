import axios from "axios"

const baseURL=window.location.host.indexOf(".com")!=-1?"":"/apis";



// https://cnodejs.org
var instance = axios.create({

    baseURL,
    //设置超时时间
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout:200000,
    // 跨域  
    withCredentials: true,
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理

        return data;
    }],
    responseType: 'json'
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
     //config.headers.token=JSON.parse(localStorage.getItem("userInfo")).token;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default instance
