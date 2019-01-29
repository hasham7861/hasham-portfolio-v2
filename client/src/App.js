import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  constructor(){
    super();
    this.state = {
      portfolio:['close','peek','expand']
    };
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <Contact />
        <Portfolio />
      </div>
    );
  }
}

export default App;
