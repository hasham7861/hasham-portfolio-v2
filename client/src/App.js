import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Heading from './components/Heading/Heading';
import ContactButton from './components/ContactButton/ContactButton';
import Portfolio from './containers/Portfolio/Portfolio';
import ContactScreen from './containers/ContactScreen/ContactScreen';
import './components/Heading/Heading.css';
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
                  <div style={this.props.headerStyle} ref={this.headingRef}><Heading classNames={this.props.headerClassNames}/></div>
                  <div ref={this.contactButtonRef}>
                    <Link className={this.props.contactButtonStyleClasses} to="/contact">
                      <ContactButton/>
                    </Link>
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
    headerStyle: state.headerStateChange.headerStyle,
    headerClassNames: state.headerStateChange.classNames,
    contactButtonStyleClasses: state.portfolioMove.contactButtonStyleClasses
  }
}


export default connect(
  mapStateToProps
)(App);
