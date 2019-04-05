import React, { Component } from 'react';
import { connect } from "react-redux";
import Heading from './components/Heading/Heading';
import Portfolio from './containers/Portfolio/Portfolio';
import HomeNavBar from './components/HomeNavBar/HomeNavBar';

class  Home extends Component {

    
    headingRef = React.createRef();
    contactButtonRef = React.createRef();

    render(){
      return (
        <div className="Home">
            <div style={this.props.headerStyle} ref={this.headingRef}><Heading classNames={this.props.headerClassNames}/></div>
            <div ref={this.contactButtonRef}>
              <HomeNavBar/>
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
    }
  }
  
  
  export default connect(
    mapStateToProps
  )(Home);
  

  