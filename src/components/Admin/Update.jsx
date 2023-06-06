import React from "react";
import JobForm from "./JobForm";
import { useParams } from "react-router-dom";
import BlogForm from "./BlogForm";

const Update = () => {
  const params = useParams();
  const postType = params.name;
  const id = params.id;
  
  return (
    <div className="w-full h-fit py-10 px-2  min-h-screen">
      <div className="w-full md:w-5/6 h-fit m-auto px-4 md:px-10 py-4 border-[1px] border-gray-100 shadow-xl bg-white shadow-gray-300">
        <h1 className="text-lg my-4 font-semibold capitalize">
          {"Upload " + postType + " Details"}
        </h1>
        {postType === "job" && <JobForm id={id} opType={"update"} />}
        {postType === "blog" && (
          <BlogForm  id={id} opType={"update"} />
        )}
      </div>
    </div>
  );
};
export default Update;
