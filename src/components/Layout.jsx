import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Footerbar from "./Footerbar";


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <SocialLinks />
    <Footerbar />
    </>
  );
};

export default Layout;
