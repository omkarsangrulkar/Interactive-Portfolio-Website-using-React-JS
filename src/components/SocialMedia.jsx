import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      {/* 👇️ open link in new tab */}
      <a href="http://www.linkedin.com/in/omkar-sangrulkar-11a7981b3" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100010582629617" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/s_omkar_14?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
