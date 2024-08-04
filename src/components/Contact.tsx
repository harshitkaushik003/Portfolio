import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const iconStyle = {
    width: '30px',
    height: '30px',
    '@media screen and (max-width: 768px)': {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-slate-100">
      <div id="left" className="lg:w-1/2 h-full flex flex-col lg:pl-10 pl-5 pt-10">
        <div id="heading" className="w-full h-1/5">
          <span className="uppercase prompt-semibold text-3xl">Contact me</span>
        </div>
        <div id="form" className="w-full h-4/5">
          <form
            action=""
            className="border-solid border-blue-400 border-4 rounded-3xl lg:h-5/6 lg:w-5/6 w-11/12 h-5/6 pt-10 flex flex-col justify-center items-center gap-10"
          >
            <input
              type="text"
              className="bg-gray-300 rounded-md w-11/12 h-10 pl-5"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="bg-gray-300 rounded-md w-11/12 h-10 pl-5"
              placeholder="Enter Email"
            />
            <textarea
              name=""
              id=""
              className="bg-gray-300 rounded-md w-11/12 h-20 pl-5"
              placeholder="Enter Message"
            ></textarea>
            <div id="bottom" className="flex w-full h-1/5">
              <div
                id="icons"
                className="w-1/2 h-full flex justify-start items-center pl-4 gap-4 lg:pl-10 lg:gap-10"
              >
                <a
                  href="https://www.instagram.com/kaushikharshit5/?igshid=ZDdkNTZiNTM%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram style={iconStyle} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshit-kaushik-077716236/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin style={iconStyle} />
                </a>
                <a
                  href="https://github.com/harshitkaushik003"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={iconStyle} />
                </a>
              </div>
              <div id="button" className="w-1/2 h-full flex items-center justify-center">
                <button className="bg-cyan-500 w-11/12 h-2/4 rounded-md cursor-pointer">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="right"></div>
    </div>
  );
};