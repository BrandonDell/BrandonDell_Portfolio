import React from 'react';

const ResumeButton = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://docs.google.com/document/d/1R0-twqGuj5mLjmZovwCQMQnquSnF2JkB/edit?usp=sharing&ouid=107495505004201504614&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2 px-2 py-1 text-sm font-medium text-blue-400 hover:text-gray-800"
      >
        View My Resume
      </a>
    </div>
  );
};

export default ResumeButton;
