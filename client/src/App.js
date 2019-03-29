import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import ContactScreen from './containers/ContactScreen/ContactScreen';
import Home from './Home';
import './components/Heading/Heading.css';

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/contact' component={ContactScreen}/>
          </Switch>
        </Router>

      </div>
    );
  }
}


export default App;