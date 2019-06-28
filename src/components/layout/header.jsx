import React from 'react';
import Routes from "@/router"
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
                    <li key={index}>{
                        item.name
                    }</li>
                ))
            }
      </header>
      <Routes/>
    </div>
  );
}

export default App;
