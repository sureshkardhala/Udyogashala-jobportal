import React from "react";
import { BsPersonFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-96 h-fit m-auto mt-20 border-[1px] border-gray-200 py-4 shadow-xl shadow-gray-300">
      <div className="flex flex-wrap justify-center py-2">
        <div className="w-16 h-16 rounded-full border-[1px] border-gray-300 flex justify-center py-4 text-gray-600 cursor-pointer">
          <BsPersonFill size={30} />
        </div>
      </div>
      <div className="mt-8  px-4 ">
        <form className="flex flex-col space-y-5 px-2 text-sm ">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-8 border-b-2 focus:border-orange-200 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-8 border-b-2 focus:border-red-200 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border-b-2 focus:border-green-200 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <button className="w-full h-8 bg-blue-500 text-white rounded-md">
            Signup
          </button>
        </form>
        {/* <div className="text-sm text-center mt-4 cursor-pointer">
         <Link to={"../login"} > Already a memeber ? Signin</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
