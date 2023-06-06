import React from 'react'
import Post from './Post';

const AllBlogs = () => {
  return (
    <div className="w-full md:w-[45%] h-fit flex flex-wrap space-y-4  p-2">
          <p className="w-full my-4 text-lg font-semibold text-center">
            All Blogs
          </p>
          <Post/>
          <Post/>
          <Post/>
          <Post/>

        </div>
  )
}

export default AllBlogs