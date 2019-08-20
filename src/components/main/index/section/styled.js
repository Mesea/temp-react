import styled from "styled-components"


export const CityWrap = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#777;
    z-index:1000;
    display:flex;
    .left{
        width:200px;
        overflow:scroll;
        background:red;
        .citys{
            height:20px;
            font-size: 20px;
        }
    }
    .right{
        flex:1;
        height:100%;
        background:green;
    }
`