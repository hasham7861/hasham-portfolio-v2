import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Heading from './components/Heading/Heading';
import ContactButton from './components/ContactButton/ContactButton';
import Portfolio from './containers/Portfolio/Portfolio';
import ContactScreen from './containers/ContactScreen/ContactScreen';


class App extends Component {

  constructor() {
    super();
    this.state = {
      // portfolio: ['close', 'peek', 'expand']
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={props =>
              <div>
                <Heading/>
                  <Link className="Contact" to="/contact">
                    <ContactButton/>
                  </Link>
                <Portfolio/>
              </div>
            }/>
            <Route path='/contact' component={ContactScreen}/>
            {/* <Route path='/portfolio' component={PortfolioScreen}/> */}
          </div>
        </Router>

      </div>
    );
  }
}
export default connect()(App);
