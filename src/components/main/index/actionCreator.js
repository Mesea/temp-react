import request from "@/core/http/http"

export const GET_INDEX_CITY = "index/get_index_city";

const action = (val, type) => {
    return {
        type,  //GET_INDEX_CITY = "index/get_index_city";
        val   //res
    }
}
export const loadCityDataAsync = (dispatch) => {

    //获取城市列表
    return () => {
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.1&referer=1"
        }).then((res) => {
            dispatch(action(res,GET_INDEX_CITY));
        })
    }
}

// export const loadIndexDataAsync = (dispatch,currentCity) => {
//     // 获取首页数据
//     // console.log()
//     return () => {
//         // console.log(currentCity)
//         request({
//             method: "get",
//             url: "/home/index/getClassifyHome",
//             params:{
//                 city_id: currentCity.city_id,
//                 abbreviation: currentCity.abbreviation||"",
//                 version:"6.0.1",
//                 referer:"1"
//             }
//         }).then((res) => {
//             res.currentCity=currentCity;
//             dispatch(action(res,GET_INDEX_DATA));
//         })
//     }
// }


