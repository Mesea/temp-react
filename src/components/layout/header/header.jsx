import React from 'react';
import { NavLink  } from "react-router-dom";
function App() {
   let toPathlist=[
       {name:"信息页",path:"/Info"},
       {name:"新闻页",path:"/News"},
       {name:"测试页",path:"/Test"}
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
