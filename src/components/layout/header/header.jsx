import React from 'react';
import { NavLink  } from "react-router-dom";
function App() {
   let toPathlist=[
       {name:"信息页",path:"/info"},
       {name:"新闻页",path:"/news"},
       {name:"测试页",path:"/test"}
   ] 
  return (
    <div className="App">
      <header  style={{height:"50px",background:"#fff"}}>
            {
                toPathlist.map((item,index)=>(
                  <NavLink key={index} to={item.path}>{item.name}</NavLink>
                ))
            }
      </header>
    </div>
  );
}

export default App;
