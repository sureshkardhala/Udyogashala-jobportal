import React from "react";
import { FaLinkedin, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md"; 



const SocialLinks = () => {
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
    <div className="hidden lg:flex flex-col top-[35%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, download}) => (
          <li
            key={id}
            className=
              "flex items-center w-52 h-14 px-4 mr-[-160px] hover:ml-[-100px] hover:rounded-md duration-300 bg-gray-500"
            
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
  );
};

export default SocialLinks;
