import React from 'react';

import Routes from "@/router"
import Header from "@/components/layout/header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes/>
    </div>
  );
}

export default App;
