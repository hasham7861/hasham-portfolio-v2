import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveEmail, saveSubject, saveMessage, clearEmailForm } from "../../store/actions/actions";
import './ContactScreen.css'
import App from '../../App';
import axios from 'axios';


class ContactScreen extends Component {

  sendMessage = event => {
    event.preventDefault(); // prevent the page from refreshing everytime
    const {email, subject, message} = this.props.emailMessage;

    const endPoint = "/messaged";

    if(email!=="" && subject !=="" && message!==""){
      axios.post(endPoint,{ email, subject, message }).then(res => {
        console.log(res.data[0]['Message']);
      });
      alert("Email is sent");
      this.props.clearEmailForm();
    }
    else{
      alert("Email form is not completed");
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/contact" render={props =>
            <div className="ContactScreen">
              <Link to='/'><h5>◀ Go Back To Home</h5></Link>
              <h1>Contact Me</h1>

              <form onSubmit={this.sendMessage.bind(this)}>
                <input
                  onChange={this.props.emailOnChange}
                  type="text" name="email"
                  placeholder="Enter in your Email.."
                  value={this.props.emailMessage.email}
                />
                <input
                  onChange={this.props.subjectOnChange}
                  type="text" name="subject"
                  placeholder="Enter in the Subject.."
                  value={this.props.emailMessage.subject}
                />
                <textarea
                  onChange={this.props.messageOnChange}
                  name="message"
                  placeholder="Enter in your Message.. "
                  value={this.props.emailMessage.messageOnChange}
                  >
                </textarea>
                 <button type="submit">Send Message</button>
              </form>
              <div className="contactBar">

              </div>
            </div>}
          />
          <Route exact path='/' component={App}/>
        </div>
        </Router>
    )
  }
}

// The state that we need to retrieve from the store
const mapStateToProps = state => {
  return {
    emailMessage: state.emailMessage,
  };
}

// The type of actions we want to dispatch in this container
const mapDispatchToProps = dispatch => {
  return {
      emailOnChange: event => dispatch(saveEmail(event.target.value)),
      subjectOnChange: event => dispatch(saveSubject(event.target.value)),
      messageOnChange: event => dispatch(saveMessage(event.target.value)),
      clearEmailForm: () => dispatch(clearEmailForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen);
