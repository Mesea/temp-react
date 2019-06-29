import React from 'react';
import axios from "axios";
import Route from "@/router"
import Header from "@/components/layout/header"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
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
    // ?
 
  }
}

export default App;
