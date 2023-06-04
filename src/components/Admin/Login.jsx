import React from "react";
import { BsPersonFill } from "react-icons/bs";
import PopMsg from "../Mui/PopMsg";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-96  h-fit m-auto mt-20 border-[1px] border-gray-200 py-4 shadow-xl shadow-gray-300">
      <div className="flex flex-wrap justify-center py-2">
        <div className="w-16 h-16 rounded-full border-[1px] border-gray-300 flex justify-center py-4 text-gray-600 cursor-pointer">
          <BsPersonFill size={30} />
        </div>
      </div>
      <div className="mt-8  px-4 ">
        <form className="flex flex-col space-y-5 px-2 text-sm ">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-8 border-b-2 focus:border-red-300 duration-300 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border-b-2 focus:border-green-300 duration-300 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <PopMsg />
          <button className="w-full h-8 bg-blue-500 text-white rounded-md">
            Signin
          </button>
        </form>
        {/* <div className="hidden text-sm text-center mt-4 cursor-pointer">
          
            <Link to={"../register"} >Not a memeber ? Signup</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
