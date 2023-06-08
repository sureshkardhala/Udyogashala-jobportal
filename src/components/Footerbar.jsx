import React from "react";
import { Link } from "react-router-dom";

const Footerbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "About",
      link: "about",
    },
    {
      id: 3,
      name: "Contact",
      link: "contact",
    },
    {
      id: 4,
      name: "Privacy",
      link: "privacy",
    },
    {
      id: 5,
      name: "Disclaimer",
      link: "disclaimer",
    },
   
  ];
  return (
    <div className="w-full border-t-[1px] border-gray-300 mt-4">
      <footer className="w-full bg-white  shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="w-fulltext-sm text-gray-500 text-center md:text-start dark:text-gray-400">
            © 2023{" "}
            <Link to="https://udyogashala.com/" className="hover:underline">
              Udyogashala™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {links.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="ml-4 hover:scale-x-105 duration-300 md:ml-6"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footerbar;
