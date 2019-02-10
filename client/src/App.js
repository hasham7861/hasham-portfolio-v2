import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import ContactButton from './components/ContactButton/ContactButton';
import Portfolio from './components/Portfolio/Portfolio';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  constructor() {
    super();
    this.state = {
      portfolio: ['close', 'peek', 'expand']
    };
  }

  viewContactPage = () => {
    console.log('This was clicked');
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={props => <div>
              <Heading/>
              <Link to='/contact'><ContactButton/></Link>
              <Portfolio/>
            </div>}/>
            <Route path='/contact' component={ContactScreen}/>
            {/* <Route path='/portfolio' component={PortfolioScreen}/> */}
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
