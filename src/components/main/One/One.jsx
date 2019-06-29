import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
 class One extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"我是One组件"
        }
    }
    render(){
        return (
            <Fragment>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleToPath.bind(this)}>OneToPath</button>
            </Fragment>
        )
    }
    handleToPath(){
        // console.log("OK");
        // console.log(this.props);
        this.props.history.push("/info")
    }
}
export default withRouter(One)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象