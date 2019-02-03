import React, { Component } from 'react';
import './ContactScreen.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../App';

class ContactScreen extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/contact" render={props =>
            <div className="ContactScreen">
              <Link to='/'><h5>◀ Go Back To Home</h5></Link>
              <h1>Contact Me</h1>
              <form>
                <input type="text" name="email" placeholder="Enter in your email.."/>
                <textarea name="message" placeholder="Enter in your message.. "></textarea>
                <button>Send Message</button>
              </form>
              <div class="contactBar">

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
