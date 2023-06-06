import React from "react";
import AllJobs from "./AllJobs";
import AllBlogs from "./AllBlogs";


const AdminHome = () => {
  return (
    <div className="w-full  h-fit px-2 py-4 ">
      <div className="w-full md:w-[90%] m-auto h-fit  min-h-screen  flex flex-wrap justify-between md:mt-20 px-2">
        <AllJobs />
        <AllBlogs />
      </div>
    </div>
  );
};

export default AdminHome;
