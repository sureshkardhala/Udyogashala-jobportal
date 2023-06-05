import React from 'react'
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full  h-fit m-auto flex flex-wrap md:p-4 bg-gradient-to-r from-violet-50 via-red-50 to-sky-50  border-[1px]">
    <div className="w-full md:w-[40%] h-80 p-2">
      <img
        src="/images/banner.jpg"
        className="w-full h-full object-fill rounded-2xl "
        alt="banner not found"
      />
    </div>
    <div className="w-full md:w-[60%] py-4 px-4">
      <p className="text-xl font-semibold text-gray-800 cursor-pointer text-center md:text-start">
        Udyogshala -{" "}
        <span className="text-lg font-normal">Job portal</span>
      </p>
      <div className="space-y-4 mt-4">
        <p className="flex flex-row space-x-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Extensive Job Opportunities</span>
        </p>
        <p className="flex flex-row space-x-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Easy Job Search and Applications</span>
        </p>
        <p className="flex flex-row space-x-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Career Guidance and Resources</span>
        </p>
        <p className="flex flex-row space-x-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>Interactive Community</span>
        </p>
        <p className="flex flex-row space-x-1">
          <HiOutlineClock size={20} className="text-sky-500" />
          <span>
            Stay updated with the latest trends and developments
          </span>
        </p>
      </div>

      <div className=" mt-4 ">
        <Link to={"../about"}>
          <button className="w-fit h-fit py-3 rounded-md  px-4 text-gray-200 bg-gray-600 cursor-pointer hover:text-white duration-300">
            {" "}
            View more
          </button>
        </Link>
      </div>
    </div>
  </div>    )
}

export default Banner