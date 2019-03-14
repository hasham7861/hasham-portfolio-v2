import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Heading from './components/Heading/Heading';
import ContactButton from './components/ContactButton/ContactButton';
import Portfolio from './containers/Portfolio/Portfolio';
import ContactScreen from './containers/ContactScreen/ContactScreen';
// import { changeHeadingSize }from "./store/actions/actions"


class App extends Component {

  headingRef = React.createRef();
  contactButtonRef = React.createRef();

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={props =>
              <div>
                <div style={this.props.headerStyle}>
                  <div ref={this.headingRef}><Heading/></div>
                  <div ref={this.contactButtonRef}>
                    <Link className="Contact" to="/contact">
                      <ContactButton/>
                    </Link>
                  </div>
                </div>

                <Portfolio headingRef={this.headingRef} contactButtonRef={this.contactButtonRef}/>
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

const mapStateToProps = state => {
  return{
    headerStyle: state.headerStateChange.headerStyle
  }
}


export default connect(
  mapStateToProps
)(App);
