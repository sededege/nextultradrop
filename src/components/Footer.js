import React from "react";
import {
  AiFillLinkedin,
  AiOutlineGlobal,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-full flex justify-between h-[10vh] items-center px-10 md:px-20 ">
    <p className="text-white font-bold">Test by Sebagtech</p>
    <div className="flex gap-4 ">
          <a href="https://www.linkedin.com/in/sebagtech/">
            {" "}
            <AiFillLinkedin className="text-[2rem] text-white" />
          </a>
          <a href="http://sebag.tech">
            {" "}
            <AiOutlineGlobal className="text-[2rem] text-white" />
          </a>
          <a href="https://wa.me/+59898412760">
            {" "}
            <AiOutlineWhatsApp className="text-[2rem] text-white" />
          </a>
          <a href="mailto:sebagonzalez_97@hotmail.com">
            {" "}
            <AiOutlineMail className="text-[2rem] text-white" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
