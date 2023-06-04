import React from 'react'
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full h-fit bg-gradient-to-r from-violet-100 via-red-50 to-sky-100 py-10 mt-10 md:mt-40">
    <p className="w-fit m-auto text-2xl text-gray-800 cursor-pointer text-center font-semibold border-b-[2px] border-sky-500 py-1">
      Our Services
    </p>
    <div className="w-full h-fit flex flex-wrap mt-24 ">
      <div className="w-[80%] md:w-2/3 m-auto flex flex-wrap border-[1px] rounded-lg bg-gray-50">
        <div className="w-full md:w-60 h-44  p-2">
          <img
            src="/images/jobsearch.jpg"
            className="w-full h-full object-fill rounded-2xl"
            alt="banner not found"
          />
        </div>
        <div className="py-4">
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Latest Job Opportunities</span>
        </p>
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Easy find & apply</span>
        </p>
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Easy Notifications</span>
        </p>
        <div className="mt-2 ">
        <Link to={"../jobs"}>
          <button className="w-fit h-fit py-3 rounded-md  px-4 text-gray-200 bg-gray-600 cursor-pointer hover:text-white duration-300">
            {" "}
            Latest Jobs
          </button>
        </Link>
      </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-wrap mt-24  ">
      <div className="w-2/3 m-auto flex flex-wrap border-[1px] rounded-lg bg-white">
        <div className="w-full md:w-60 h-48  p-2">
          <img
            src="/images/blogintro.jpg"
            className="w-full h-full object-fill rounded-2xl "
            alt="banner not found"
          />
        </div>
        <div className="py-4">
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Technology related topics</span>
        </p>
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Great community support</span>
        </p>
        <p className="flex flex-row space-x-1 mt-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Best Interview preparation content</span>
        </p>
        <div className="mt-1 ">
        <Link to={"../jobs"}>
          <button className="w-fit h-fit py-3 rounded-md  px-4 text-gray-200 bg-gray-600 cursor-pointer hover:text-white duration-300">
            {" "}
            Tech Blogs
          </button>
        </Link>
      </div>
        </div>
      </div>
     </div>
    </div>
  </div>
  )
}

export default Services