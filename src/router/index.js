import React,{Fragment} from 'react';
import {Route,Redirect } from 'react-router-dom';

import Index from "@/components/main/index"
import Ju from "@/components/main/ju"
import Piao from "@/components/main/piao"
import My from "@/components/main/my"


export default class  extends React.PureComponent{
    render(){
        return (
            <Fragment>
                <Route path="/index" component={Index}/>   
                <Route path="/ju" component={Ju}/>   
                <Route path="/piao" component={Piao}/>   
                <Route path="/my" component={My}/>   
                <Redirect path="/" to="/index"/>
            </Fragment>
        )    
    }
}
