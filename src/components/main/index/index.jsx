import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { loadCityDataAsync } from "./actionCreator"

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            isCity: false
        }
    }
    render() {
        if (this.props.cityList.size !== 0) {
            return (
                <Fragment>
                    <h1>index</h1>
                    {
                        console.log(this.props.cityList.toJS())
                    }
                    <ul>
                       {
                         this.props.cityList.map((item,index)=>(
                             <li key={index}>
                                 {
                                    item.get("id")
                                 }
                             </li>
                         ))  
                       }
                    </ul>
                    
                </Fragment>
            )
        } else {
            return null;
        }

    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
    }

}
const mapStateToProps = (state) => {
    console.log(state.toJS());
    return {
        cityList: state.getIn(["indexReducer", "cityList"])
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        // 写入 固定写法 type 必填项,定义常量
        dispatch(loadCityDataAsync(dispatch))
    },
    handleTest() {
        // console.log("OK");
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);