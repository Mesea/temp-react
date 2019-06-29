import {createStore,applyMiddleware} from "redux"
import store from "./reducer"
import thunk from "redux-thunk"
//  export default createStore(store);
 export default createStore(store,applyMiddleware(thunk));

// redux-thunk 他可以让dispatch,进行支持异步
// redux-thunk 让dispatch支持传入一个(函数)  