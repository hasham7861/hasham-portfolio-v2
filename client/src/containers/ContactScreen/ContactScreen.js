import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveEmail, saveSubject, saveMessage, clearEmailForm } from "../../store/actions/actions";
import './ContactScreen.css';
import axios from 'axios';
import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';


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
      // TODO: Get rid of the extra router here and the ugly code
          <>
            <PagesNavbar/>
            <div className="ContactScreen">
              <h3>Email</h3>
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
              <h3>Follow me Here</h3>
              <div className="contactBar">
                <a href="https://github.com/hasham7861" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/hasham7861/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </div>
        </div>
        </>
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
