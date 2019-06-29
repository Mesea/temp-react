import React,{Fragment,Component} from "react";
import {connect} from "react-redux"
import {loadListDataAsyanc} from "./actionCreator"
 class Info extends Component{
    render(){
        console.log(this.props)
        return (
            <Fragment>
                <h1>我是信息页</h1>
                <div>
                    <ul>
                        {
                            this.props.listData.map((item,index)=>(
                                <li key={index}>{item.get("show_name")}</li>
                            ))
                        }
                    </ul>
                    <button onClick={this.props.handleTest.bind(this)}>send</button>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        // this.props.handleTest();
    }
}
const mapStateToProps=(store)=>{
    console.log(store)
    return {
        listData:store.getIn(["infoReducer","listData"])
    }
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleTest(){
        // 第一次调用可以执行一个函数
        //我们的条件是dispatch可以执行函数
        // dispatch(loadListDataAsyanc())
        // dispatch(结果有两种情况(fn,obj))
        // dispatch(loadListDataAsyanc() 返回的结果是 fn);
        // dispatch(()=>{
        //     console.log("OK")
        // })
        dispatch(loadListDataAsyanc(dispatch))

    }
})
export default connect(mapStateToProps,mapDispathToProps)(Info);
// 解决dispatch可以传入一个函数