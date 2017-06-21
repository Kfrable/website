import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Naver from './components/Nav'
/*import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'*/

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';




class App extends Component {
  render() {
    return (
      <div>
      <Naver/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact href='/#Contact'/>
      </div>
    );
  }
}

export default App;
