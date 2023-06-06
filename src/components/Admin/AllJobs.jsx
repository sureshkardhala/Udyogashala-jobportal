import React from 'react';
import Post from './Post';

const AllJobs = () => {
  return (
    <div className="w-full md:w-[45%] h-fit flex flex-wrap space-y-4 p-2">
          <p className="w-full my-4 text-lg font-semibold text-center">
            {" "}
            All Jobs
          </p>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>

        </div>
  )
}

export default AllJobs