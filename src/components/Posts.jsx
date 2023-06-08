import React from "react";
import { Link } from "react-router-dom";
import JobAlign from "./JobAlign";

const Posts = ({ type }) => {
  const title = "ji";
  const path = "../" + type + "/" + title;
  const isJob = type === "blog" ? false : true;
  const btn = type === "blog" ? "Read more" : "Apply now";
  return (
    <>
      <div className={"w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300"}>
        <div className="w-full h-fit md:h-8">
          <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
            <Link to={path}> Assistant Manager- Accounting & Finance</Link>
          </p>
        </div>
        <div className="w-full h-fit overflow-hidden md:h-40" >
          <p className="text-gray-500 cursor-pointer mt-2">
            Accounting Assistant responsibilities include managing gst and tds
            reports, entering financial transactions into Zoho books and
            reconciling banks. Ultimately, you will help our accounting
            department run smoothly, ensuring transparency and efficiency in all
            transactions.
          </p>
        </div>
        <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium md:space-x-5">
          {isJob && <JobAlign />}
          <p className="md:block hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
          <p className="mt-4 text-xl md:hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300">
        <div className="w-full h-fit md:h-8">
          <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
            <Link to={path}> Assistant Manager- Accounting & Finance</Link>
          </p>
        </div>
        <div className="w-full h-fit overflow-hidden md:h-40">
          <p className="text-gray-500 cursor-pointer mt-2">
            Accounting Assistant responsibilities include managing gst and tds
            reports, entering financial transactions into Zoho books and
            reconciling banks. Ultimately, you will help our accounting
            department run smoothly, ensuring transparency and efficiency in all
            transactions.
          </p>
        </div>
        <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium space-x-5">
          {isJob && <JobAlign />}
          <p className="md:block hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
          <p className="mt-4 text-xl md:hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%] h-fit md:h-64 border-[1px] border-gray-300 p-2 mt-8 hover:mt-2 duration-300">
        <div className="w-full h-fit md:h-8">
          <p className="w-full text-xl font-medium hover:text-violet-600 duration-300 cursor-pointer truncate">
            <Link to={path}> Assistant Manager- Accounting & Finance</Link>
          </p>
        </div>
        <div className="w-full h-fit overflow-hidden md:h-40 ">
          <p className="text-gray-500 cursor-pointer mt-2">
            Accounting Assistant responsibilities include managing gst and tds
            reports, entering financial transactions into Zoho books and
            reconciling banks. Ultimately, you will help our accounting
            department run smoothly, ensuring transparency and efficiency in all
            transactions.
          </p>
        </div>
        <div className="w-full h-fit md:h-12  flex flex-wrap md:flex-row p-2  font-medium space-x-5">
          {isJob && <JobAlign />}
          <p className="md:block hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
          <p className="mt-4 text-xl md:hidden">
            <Link to={path} className="text-violet-700 font-semibold ">
              {btn}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Posts;
