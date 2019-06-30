// import {combineReducers} from "redux"
import {combineReducers} from "redux-immutable"
import infoReducer from "@/components/main/info/reducer"
import newsReducer from "@/components/main/news/reducer"

export default combineReducers({
    infoReducer,
    newsReducer
})

// import {combineReducers} from "redux"  他只能返回一js对象类型
//redux给提供了     redux-immutable ,从根把数据类型转成 immutable类型