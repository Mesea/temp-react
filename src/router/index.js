import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";

import Info from "@/components/main/Info/Info"
import News from "@/components/main/News/News"
import Test from "@/components/main/Test/Test"

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