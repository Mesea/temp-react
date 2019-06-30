import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";

import Info from "@/components/main/info/info"
import News from "@/components/main/news/news"
import Test from "@/components/main/test/test"



export default class extends Component{
    render(){
        return (
            <Fragment>
                    <Switch>
                        <Route path="/info" component={Info} />
                        <Route path="/news"  component={News} />
                        <Route path="/test"  component={Test} />
                        {/* exact绝对匹配 */}
                        {/* <Route path="/Test/:name/:id" exact component={Test} /> */}
                        <Redirect path="/" to="/Info"/>
                    </Switch>
            </Fragment>
        )
    }
}