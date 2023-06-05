import React from "react";
import Posts from "./Posts";

const Techblogs = () => {
  return (
    <div className="w-full h-fit min-h-screen mt-2">
      <div className="w-full md:w-1/2 m-auto mt-6 text-center py-4 ">
        <p className="text-3xl font-semibold text-gray-900 cursor-pointer">
          Testimonials
        </p>
        <p className="mt-4 cursor-pointer">
          Here you will find all technology related & interview prepration
          blogs.
        </p>
      </div>
      <div className="w-full md:w-5/6 h-fit m-auto mt-10 md:mt-20 flex flex-wrap px-4 md:px-10 justify-between text-gray-700">
        <Posts type={"blog"} />
      </div>
    </div>
  );
};

export default Techblogs;
