import React from 'react';
import './Heading.scss';
import GithubIcon from '../../images/SocialMediaIcons/GithubIcon.svg';
import LinkedinIcon from '../../images/SocialMediaIcons/LinkedinIcon.svg';
import YoutubeIcon from '../../images/SocialMediaIcons/YoutubeIcon.svg';
import TwitterIcon from '../../images/SocialMediaIcons/TwitterIcon.svg'
const Heading = props => (
  <div ref={props.reference} className="heading">
    <h1>Hasham Alam</h1>
    <h3>Software Engineer</h3>
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
      <a
        href="https://www.youtube.com/c/bleakCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={YoutubeIcon} alt="Youtube Icon" />
      </a>
      <a
        href="https://twitter.com/bleakcode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterIcon} alt="Twitter Icon" />
      </a>

    </div>
  </div>
);

export default Heading;
