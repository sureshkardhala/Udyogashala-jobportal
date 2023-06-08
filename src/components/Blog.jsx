import React from "react";
import PostDescription from "./PostDescription";

const Blog = () => {
  return (
    <div className="w-full h-fit p-2 md:p-4 ">
      <div className="w-full h-fit m-auto mt-5 md:mt-20 px-2 md:px-20 py-2 md:border-gray-700 flex flex-wrap space-x-0 md:space-x-6">
        <div className="w-full md:w-[90%] m-auto h-fit">
          <PostDescription />
        </div>
      </div>
    </div>
  );
};

export default Blog;
