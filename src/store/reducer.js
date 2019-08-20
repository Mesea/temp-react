// import {combineReducers} from "redux"  //导致向外暴露数据最外层是 object
import {combineReducers} from 'redux-immutable'      //将最外层转成Map对象
import indexReducer from "@/components/main/index/reducer"
import juReducer from "@/components/main/ju/reducer"

export default combineReducers({
    indexReducer,
    juReducer
})
