//封装事件订阅模块
//跨组件通信

const EventList={}

/*
EventList.test=[];
// 在数组里面push 函数
EventList.test.push(function(res){console.log(res)});
//调用函数
EventList.test[0]("OK");
*/


const on=function(eventName,callBack){
    // 参数为: 字符串,函数体
    
    if(!EventList[eventName]){
        EventList[eventName]=[];
    }
    // EventList.test.push(fn());
    EventList[eventName].push(callBack);
    // {test: [fn()]}
}
// console.log(EventList)
//已经注册事件
/*
on("test",(res)=>{
    console.log(res);
})

on("test",(res)=>{
    console.log(res);
})

on("msea",(res)=>{
    console.log(res);
})
*/
// console.log(EventList)//{test: Array(1)}
// EventList.test[0]("OK");
const emit=function(eventName,params){
    if(!EventList[eventName])return;
    // EventList.test 它的类型是 Array
    EventList[eventName].map((cb)=>{
        cb(params);
    })
}

/*
emit("test","OK")
emit("msea","OK")
*/
export default {
    $on:on,
    $emit:emit
}


