import React from "react";
import JobAlign from "./JobAlign";
import JobApply from "./JobApply";
import PostDescription from "./PostDescription";

const Job = () => {
  return (
    <div className="w-full h-fit p-4 ">
      <div className="w-full h-fit m-auto mt-5 md:mt-20 px-2 md:px-4 py-2 border-gray-700 flex flex-wrap space-x-0 md:space-x-6">
        <div className="w-full md:w-[90%] h-fit md:h-12  flex flex-wrap md:flex-row m-auto text-gray-500  font-medium space-x-5">
          <JobAlign />
        </div>
        <div className="w-full md:w-2/3 h-fit">
          <PostDescription />
        </div>
        <JobApply />
      </div>
    </div>
  );
};

export default Job;
