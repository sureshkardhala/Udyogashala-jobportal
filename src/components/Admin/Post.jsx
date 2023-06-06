import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";


const Post = () => {
  return (
    <div className="w-full text-gray-600 cursor-pointer border-[1px] mt-3 p-3 shadow-md shadow-gray-300">
      <p className="font-semibold text-xl ">Infosys hiring 2022</p>
      <p className="h-20 overflow-hiddenmt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, neque
        maxime quibusdam qui consectetur ut quos odit nobis aperiam officia
        culpa quia animi nostrum modi fugit! Sequi minima soluta repellendus!
      </p>
      <div className="mt-5 md:mt-10 px-4  flex flex-row space-x-10 text-gray-700 ">
        <FaEye size={25} className="hover:text-violet-500 duration-300" />
        <FaEdit size={25} className="hover:text-sky-500 duration-300" />
        <FaTrashAlt size={25} className="hover:text-red-500 duration-300" />
      </div>
    </div>
  );
};

export default Post;
