import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import img from "../assets/Free Vector _ Messages concept illustration.jpeg"
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
    <div className="w-full h-full flex flex-col lg:flex-row bg-white">
      <div id="left" className="lg:w-1/2 h-full flex flex-col lg:pl-10 pl-5 pt-10">
        <div id="heading" className="w-full h-1/5">
          <span className="uppercase prompt-semibold text-3xl">Contact me</span>
        </div>
        <div id="center" className='w-5/6 h-3/6 lg:w-3/6'>
          <img src={img} className='object-fill h-full w-full' alt="" />
        </div>
        <div id="bottom" className='w-full h-1/5'>
      <div id="icons" className="w-1/2 h-full flex justify-start items-center pl-4 gap-4 lg:pl-10 lg:gap-10">
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
                <a href="mailto:kaushikharshit5@gmail.com">
                  <IoMdMail style={iconStyle}/>
                </a>
              </div>
      </div>
      </div>
      
      <div id="right"></div>
    </div>
  );
};