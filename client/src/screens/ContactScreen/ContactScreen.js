import React, { Component } from 'react';
import './ContactScreen.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../App';
// import axios from 'axios';

class ContactScreen extends Component {

  constructor() {
    super();
    this.state = {
      email:"hasham.alam@hotmail.com",
      message:"You are awesome"
    };
  }


  // sendMessage = () => {
  //
  //   const endpoint="/messaged";
  //   axios.post(endpoint)
  //   .then(response => console.log(response));
  //
  // }

  componentDidMount(){

  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/contact" render={props =>
            <div className="ContactScreen">
              <Link to='/'><h5>◀ Go Back To Home</h5></Link>
              <h1>Contact Me</h1>

              <form action="/messaged" method="post">
                <input type="text" name="email" placeholder="Enter in your email.."/>
                <textarea name="message" placeholder="Enter in your message.. "></textarea>
                <button >Send Message</button>
              </form>
              <div className="contactBar">

              </div>
            </div>}
          />
          <Route exact path='/' component={App}/>

        </div>
        </Router>
    );
  }
}

export default ContactScreen;
