import React,{Fragment,Component} from "react";
import { HashRouter as Router, Route ,Redirect} from "react-router-dom";

import Info from "@/components/main/Info/Info"
import News from "@/components/main/News/News"
import Test from "@/components/main/Test/Test"

export default class extends Component{
    render(){
        return (
            <Fragment>
                <Router>
                    <Route path="/Info" component={Info} />
                    <Route path="/News"  component={News} />
                    <Route path="/Test"  component={Test} />
                    {/* <Route path="/Test/:name/:id" exact component={Test} /> */}
                    <Redirect path="/" to="/Info"/>
                </Router>
            </Fragment>
        )
    }
}