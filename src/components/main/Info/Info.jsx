import React,{Fragment,Component} from "react";
import {connect} from "react-redux"
 class Info extends Component{
     
    render(){
        console.log(this.props)
        return (
            <Fragment>
                <h1>我是信息页</h1>
                <div>
                    {this.props.name}
                    {this.props.num}
                    
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps=(store)=>({
    name:"MSea",
    num:store.infoReducer.count
})
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleAdd(){
        
    }
})
export default connect(mapStateToProps,mapDispathToProps)(Info);