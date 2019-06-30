import React from 'react';

import Route from "@/router"
import Header from "@/components/layout/header/header"
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
