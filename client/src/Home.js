import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import Heading from './components/Heading/Heading';
import ContactButton from './components/ContactButton/ContactButton';
import Portfolio from './containers/Portfolio/Portfolio';


class  Home extends Component {

    
    headingRef = React.createRef();
    contactButtonRef = React.createRef();

    render(){
      return (
        <div>
            <div style={this.props.headerStyle} ref={this.headingRef}><Heading classNames={this.props.headerClassNames}/></div>
            <div ref={this.contactButtonRef}>
              <Link className={this.props.contactButtonStyleClasses} to="/contact">
                <ContactButton/>
              </Link>
            </div>
            <Portfolio headingRef={this.headingRef} contactButtonRef={this.contactButtonRef}/>
        </div>
      )
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
  )(Home);
  

  