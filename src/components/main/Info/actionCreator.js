import axios from "axios"
import { log } from "util";
import { set } from "immutable";

export const GET_LIST_DATA="info/get_list_data";


export const loadListData=(res)=>{
    return {
        type:GET_LIST_DATA,
        res
    }
}
export const loadListDataAsyanc=(dispatch)=>{

    return ()=>{
        axios({
            method: 'get',
            url: '/apis/home/getRecommendShow',
            data: {
              cityAdd:"",
              page:"2",
              version:"5.1.4",
              referer:"2"
            }
          }).then((res)=>{
            //  数据就变成了可以触发事件监听类型 
            dispatch(loadListData(res.data.data.recommend_show_list))
          })
    }
    // console.log("OK1111");
    // callback({type:"xxxxx"})
}