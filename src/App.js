import React from 'react';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Topbar from "./components/topbar/topbar";
import Works from './components/works/works';
import './app.scss'


function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="section">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
