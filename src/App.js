import React, { useState } from 'react';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Topbar from "./components/topbar/topbar";
import Works from './components/works/works';
import './app.scss'


function App() {
  const [menuActive , menuState] = useState(false);
  return (
    <div className="app">
    <Topbar menuActive={menuActive} menuState = {menuState}/>
  
    <div className="section">
      <Intro/>
      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
