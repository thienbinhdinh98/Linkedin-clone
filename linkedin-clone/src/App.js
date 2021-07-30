import React from 'react';
import './App.css';
import Header from './Header.js'
import SideBar from './SideBar.js';
import Feed from './Feed.js'
function App() {
  return (
    <div className="app">
      <Header></Header>
      
      <div className = "app__body">
        <SideBar/>
        <Feed/>
        
        {/*widget*/}
      </div>
      
    </div>
  );
}

export default App;
