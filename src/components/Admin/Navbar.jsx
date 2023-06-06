import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {FiSearch} from "react-icons/fi";
import {GrAnnounce} from "react-icons/gr";
import { Link, } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = e =>{
        setNav(!nav);
    }
    
    const links = [
        {
            id:1,
            name: <><FiSearch size={22} className="hover:text-violet-500 duration-300 hidden md:block" /></>,
            path: 'search'
        },
        {
            id:2,
            name: 'Login',
            path: 'login'
        },
        {
            id:3,
            name:'Register',
            path: 'register'
        },
        {
            id:4,
            name:'Upload Job',
            path: 'upload/job'
        },
        {
            id:5,
            name: 'Upload Blog',
            path: 'upload/blog'
        },
        {
            id:6,
            name: 'Logout',
            path: 'logout'
        },
        
    ];
  return (
    <div className="w-full h-fit">
    <div className="w-full h-20 px-4 md:px-16 py-4 shadow-lg shadow-gray-200 mb-4">
        <div className="w-full h-12 flex flex-wrap justify-between py-2">
            <div>
                <Link to="../home" className="text-2xl font-semibold">
                    <p className="flex flex-row">
                    Udyogashala <GrAnnounce />
                    </p>
                </Link>
            </div>
            <div className='md:hidden'>
                <Link to={"search"} >
                <FiSearch size={28} className='' />
                </Link>
            </div>
           
            <div className="hidden md:block">
                <nav className="inline-flex">
                {links.map(({ id, name, path }) => (
                <li 
                key={id} 
                className=" list-none mx-3 px-4 cursor-pointer capitalize font-medium text-gray-600 hover:text-gray-800 hover:scale-105 duration-200"
                >
                    <Link to={path} >
                        {name}
                    </Link>
                    
                </li>
                ))}   
                
                </nav>
            </div>
            
            <div className=" block md:hidden">
                {!nav && 
                <FaBars size={28} onClick={handleNav} />}
                {nav 
                &&<FaTimes size={28} onClick={handleNav} />}
            </div>
        </div>
    </div>
     {nav && (<div className="w-full md:hidden min-h-screen h-fit bg-gradient-to-b from-black to-gray-700 absolute left-0 top-20">
     <nav className="w-1/2 m-auto mt-20 space-y-20 text-center">
                {links.map(({ id, name, path }) => (
                <li 
                key={id} 
                className=" list-none text-gray-300"
                onClick={handleNav}
                >
                    <Link to={path}>
                        {name}
                    </Link>
                </li>
                ))}   
                
                </nav>
     </div>)}
     </div>
  )
}

export default Navbar;