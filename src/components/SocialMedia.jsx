import React from "react";
import { FaLinkedin, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md"; 



const SocialMedia = () => {
  const links = [
    {
      id: 1,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
         <FaLinkedin size={25} /> <p>LinkedIn </p>
        </div>
      ),
      href: "https://www.linkedin.com/in/suresh-kardhala",
      style: "rounded-br-md",
    },
    {
      id: 2,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
         <FaWhatsapp size={25} /> <p>Whatsapp </p>
        </div>
      ),
      href: "https://github.com/sureshkardhala",
      style: "rounded-br-md",
    },
    {
      id: 3,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
        <FaTelegramPlane size={25} /> <p>Telegram </p>
       </div>
      ),
      href: "",
    },
    {
      id: 4,
      child: (
        <div className="flex flex-row justify-center space-x-3"> 
        <FaInstagram size={25} /> <p>Instagram </p>
       </div>
      ),
      href: ""
    },
    {
        id: 5,
        child: (
          <div className="flex flex-row justify-center space-x-3"> 
          <MdOutlineEmail size={25} /> <p>Email </p>
         </div>
        ),
        href: "mailto:sureshkardhala2k22@gmail.com"
      },
  ];
  return (
    <div className="w-full px-3 py-4 md:py-10  h-fit m-auto mt-10 space-y-4 md:mt-40 bg-gradient-to-r from-violet-100 via-red-50 to-sky-100">
        <p className="w-fit m-auto text-2xl text-gray-800 cursor-pointer text-center font-semibold border-b-[2px] border-violet-500 py-1">
            Our Social Media
          </p>
    <div className="w-full md:w-1/2  m-auto mt-8 flex flex-col ">
      <ul>
        {links.map(({ id, child, href, download}) => (
          <li
            key={id}
            className=
              "flex items-center w-full h-14 px-4 mt-4 rounded-lg hover:scale-105 duration-300 bg-gray-500"
            
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
              {download}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SocialMedia;
