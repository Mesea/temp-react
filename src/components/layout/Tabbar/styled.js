import styled from "styled-components"
import global from "@/core/global"
// console.log(global.r)
let r=global.r;



const TabbarWrap = styled.div`
    position: fixed;
    /* height: 100%; */
    width: 100%;
    /* top: 0; */
    bottom:0;
    .am-tab-bar-bar{
        height:100px;
    }
`
export { TabbarWrap } 