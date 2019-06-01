import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContactScreen.scss';
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import {
  saveEmail,
  saveSubject,
  saveMessage,
  clearEmailForm,
} from '../../store/actions/actions';
import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';
import GithubIcon from '../../images/SocialMediaIcons/GithubIcon.svg';
import LinkedinIcon from '../../images/SocialMediaIcons/LinkedinIcon.svg';

class ContactScreen extends Component {
  sendMessage = event => {
    event.preventDefault(); // prevent the page from refreshing everytime
    const { email, subject, message } = this.props.emailMessage;
    const validEmailAddr = new RegExp(
      '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$'
    );

    // const endPoint = 'https://api.hashamalam.dev/email/send';
    const endPoint = 'http://localhost:5000/email/send';

    if (email !== '' && subject !== '' && message !== '') {
      if (validEmailAddr.test(email)) {
        axios.post(endPoint, { email, subject, message })
          .then(res => {
            alert(res.data.message);
            this.props.clearEmailForm();
          })
          .catch(err => { // incase of endpoint erro
            alert(err);
          });
      } else {
        alert('Enter in a valid email');
      }
    } else {
      alert('Email form is not completed');
    }
  };

  render() {
    return (
      <>
        {isMobile ? <PagesNavbar /> : ''}
        <div className="ContactScreen">
          <h3>Email</h3>
          <form onSubmit={this.sendMessage.bind(this)}>
            <input
              onChange={this.props.emailOnChange}
              type="text"
              name="email"
              placeholder="Enter in your Email.."
              value={this.props.emailMessage.email}
            />
            <input
              onChange={this.props.subjectOnChange}
              type="text"
              name="subject"
              placeholder="Enter in the Subject.."
              value={this.props.emailMessage.subject}
            />
            <textarea
              onChange={this.props.messageOnChange}
              name="message"
              placeholder="Enter in your Message.. "
              value={this.props.emailMessage.message}
            />
            <button type="submit">Send Message</button>
          </form>
          <h3>Follow me Here</h3>
          <div className="contactBar">
            <a
              href="https://github.com/hasham7861"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasham7861/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

// The state that we need to retrieve from the store
const mapStateToProps = state => ({
  emailMessage: state.emailMessage,
});

// The type of actions we want to dispatch in this container
const mapDispatchToProps = dispatch => ({
  emailOnChange: event => dispatch(saveEmail(event.target.value)),
  subjectOnChange: event => dispatch(saveSubject(event.target.value)),
  messageOnChange: event => dispatch(saveMessage(event.target.value)),
  clearEmailForm: () => dispatch(clearEmailForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen);
