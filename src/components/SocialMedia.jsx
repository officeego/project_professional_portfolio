import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <Link to="/www.facebook.com/tazzercleaners" target="_blank">
        <BsTwitter />
      </Link>
    </div> */}
    <div>
      <a href="/https://instagram.com" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
