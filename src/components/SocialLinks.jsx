import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 mt-6 ">
      <a
        href="https://www.linkedin.com/in/brandondellcioppia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-gray-800"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/BrandonDell"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-gray-800"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.instagram.com/bdellcioppia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-gray-800"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
