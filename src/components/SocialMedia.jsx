import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <Link to="/www.facebook.com/tazzercleaners" target="_blank">
        <BsTwitter />
      </Link>
    </div> */}
    <p className="my-socials">socials</p>
    <div>
      <a href="//https://www.linkedin.com/in/codewithego/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="//https://twitter.com/codewithego" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="//https://www.instagram.com/codewithego/" target="_blank" rel="noreferrer">
        {/* <FaFacebookF /> */}
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="//https://www.instagram.com/codewithego/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    {/* <div>
      <a href="//https://www.linkedin.com/in/codewithego/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div> */}
  </div>
);

export default SocialMedia;
