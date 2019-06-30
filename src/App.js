import React from 'react';
import axios from "axios";
import Route from "@/router"
import Header from "@/components/layout/header"
class App extends React.Component{
  render(){
    return (
    <div>
        <Header/>
        <Route/>
    </div>
    )
  }
  componentDidMount(){
    
  }
}

export default App;
