import React from 'react';
import './App.css';
import Header from './Header.js'
import SideBar from './SideBar';
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/*header*/}
      {/*app body*/}
      <div className = "app__body">
        <SideBar/>
        {/*sidebar*/}
        {/*feed*/}
        {/*widget*/}
      </div>
      
    </div>
  );
}

export default App;
