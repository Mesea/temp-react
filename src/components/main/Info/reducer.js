import {fromJS} from "immutable"
import {GET_LIST_DATA} from "./actionCreator"
const defaultStore=fromJS({
    listData:[]
})

export default (state=defaultStore,action)=>{
    switch (action.type){
        case  GET_LIST_DATA:
            return state.update("listData",x=>{
                return x.concat(fromJS(action.res));
            });
    }
    return state;
}