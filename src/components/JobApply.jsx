import React from 'react'
import {GoClock} from "react-icons/go";


const JobApply = () => {
  return (
    <div className="w-full md:w-1/4 h-fit p-2 cursor-pointer pb-4 text-gray-800 shadow-gray-300 shadow-lg bg-gray-200 md:top-64 md:right-20 md:fixed">
            <p className="text-3xl font-semibold">Apply Today</p>
            <div className="mt-5 text-md ">
            <p className=" flex flex-row space-x-2 mt-2"><span className="text-sky-600"><GoClock size={22}/></span><span>Check job desciption before apply</span></p>
            <p className="flex flex-row space-x-2  mt-2"><span className="text-sky-600"><GoClock size={22}/></span><span>Don't pay money & we are not responsibile.</span></p>
            <p className=" flex flex-row space-x-2  mt-2"><span className="text-sky-600"><GoClock size={22}/></span><span>All the best. Hope you find best fit.</span></p>
            </div>
            <div className="mt-5">
            <button className="w-40 h-12 bg-gray-900 text-white hover:scale-x-105 duration-300">Apply now</button>
            </div>
    </div>
  )
}

export default JobApply