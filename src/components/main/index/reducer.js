import {fromJS} from "immutable"
import {GET_INDEX_CITY} from "./actionCreator"

const defaultStore=fromJS({
    cityList:[],
    indexTopData:{},
    currentCity: {
        city_id: 0,
        abbreviation: "",
        name: "全国"
    },
    num:0
})
export default (state=defaultStore,action)=>{
    // // console.log(action);
    // switch(action.type){

    // }
    if(action.type==="NUM_ADD"){
        // console.log(state.toJS())
        return state.update("num",val=>++val);
    }else if(action.type===GET_INDEX_CITY){
        let res=action.val.data.data;
        let rel=[];
        for(let n in res){
            rel.push(res[n]);
        }
        return state.update("cityList",val=>val=fromJS(rel));  //Map=Map
    }
    return state;
}