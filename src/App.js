import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import HomeScreen from './containers/HomeScreen/HomeScreen';
import InvalidRoute from './components/InvalidRoute/InvalidRoute';
import ProjectScreen from './containers/ProjectScreen/ProjectScreen';
import SideNavbar from './components/SideNavbar/SideNavbar';
import PortfolioScreen from './containers/PortfolioScreen/PortfolioScreen';
import BlogsScreen from './containers/BlogScreen/Blogs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='DesktopScreen'>
            <div className="SideBar">
              <SideNavbar />
            </div>
            <Switch className='Content'>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/blogs" exact component={BlogsScreen}/>
              <Route path="/portfolio" exact component={PortfolioScreen} />
              <Route path="/project/:name/" exact component={ProjectScreen} />
              <Route component={InvalidRoute} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
