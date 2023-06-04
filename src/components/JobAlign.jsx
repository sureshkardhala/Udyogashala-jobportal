import React from 'react';
import {FaSuitcase} from "react-icons/fa";
import {HiOutlineClock} from "react-icons/hi";
import {ImLocation2} from "react-icons/im";

const JobAlign = () => {
  return (
     <>
    <p className="flex flex-row cursor-pointer">
      <FaSuitcase size={20} />
      <span className="mx-1 ">Fresher</span>
    </p>
    <p className="flex flex-row cursor-pointer">
      <ImLocation2 size={20} />
      <span className="mx-1 ">India</span>
    </p>
    <p className="flex flex-row cursor-pointer">
      <HiOutlineClock size={20} />
      <span className="mx-1 ">Full Time</span>
    </p>
    
  </>
  )
}

export default JobAlign