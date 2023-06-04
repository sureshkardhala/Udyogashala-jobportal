import React from 'react'
import { Link } from 'react-router-dom';
import {FaSuitcase} from "react-icons/fa";
import {HiOutlineClock} from "react-icons/hi";
import {ImLocation2} from "react-icons/im";
import JobAlign from './JobAlign';

const Post = () => {
    const title = "ji";
    const path = "../career/"+ title;
  return (
    <><div className="w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300">
    <div className="w-full h-fit md:h-8">
      <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
        <Link to={path}> Assistant Manager- Accounting & Finance</Link>
      </p>
    </div>
    <div className="w-full h-fit md:h-40 overflow-hidden">
    <p className="text-gray-500 cursor-pointer mt-2">
      Accounting Assistant responsibilities include managing gst and tds
      reports, entering financial transactions into Zoho books and
      reconciling banks. Ultimately, you will help our accounting
      department run smoothly, ensuring transparency and efficiency in all
      transactions.
    </p>
    </div>
    <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium space-x-5">
      <JobAlign />
      <p className="md:block hidden" ><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
      <p className="mt-4 text-xl md:hidden"><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
    </div>
   
  </div>
  <div className="w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300">
    <div className="w-full h-fit md:h-8">
      <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
        <Link to={path}> Assistant Manager- Accounting & Finance</Link>
      </p>
    </div>
    <div className="w-full h-fit md:h-40 overflow-hidden">
    <p className="text-gray-500 cursor-pointer mt-2">
      Accounting Assistant responsibilities include managing gst and tds
      reports, entering financial transactions into Zoho books and
      reconciling banks. Ultimately, you will help our accounting
      department run smoothly, ensuring transparency and efficiency in all
      transactions.
    </p>
    </div>
    <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium space-x-5">
      <p className="flex flex-row cursor-pointer"><FaSuitcase size={20} /><span className="mx-1 ">Fresher</span></p>
      <p className="flex flex-row cursor-pointer"><ImLocation2 size={20} /><span className="mx-1 ">India</span></p>
      <p className="flex flex-row cursor-pointer"><HiOutlineClock size={20} /><span className="mx-1 ">Full Time</span></p>
      <p className="md:block hidden" ><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
      <p className="mt-4 text-xl md:hidden"><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
    </div>
   
  </div>
  <div className="w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300">
    <div className="w-full h-fit md:h-8">
      <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
        <Link to={path}> Assistant Manager- Accounting & Finance</Link>
      </p>
    </div>
    <div className="w-full h-fit md:h-40 overflow-hidden">
    <p className="text-gray-500 cursor-pointer mt-2">
      Accounting Assistant responsibilities include managing gst and tds
      reports, entering financial transactions into Zoho books and
      reconciling banks. Ultimately, you will help our accounting
      department run smoothly, ensuring transparency and efficiency in all
      transactions.
    </p>
    </div>
    <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium space-x-5">
      <p className="flex flex-row cursor-pointer"><FaSuitcase size={20} /><span className="mx-1 ">Fresher</span></p>
      <p className="flex flex-row cursor-pointer"><ImLocation2 size={20} /><span className="mx-1 ">India</span></p>
      <p className="flex flex-row cursor-pointer"><HiOutlineClock size={20} /><span className="mx-1 ">Full Time</span></p>
      <p className="md:block hidden" ><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
      <p className="mt-4 text-xl md:hidden"><Link to={path} className="text-violet-700 font-semibold ">Apply now</Link></p>
    </div>
   
  </div>
  </>
  )
}

export default Post