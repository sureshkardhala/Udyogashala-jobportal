import React from "react";
import JobForm from "./JobForm";
import { useParams } from "react-router-dom";
import BlogForm from "./BlogForm";

const Upload = () => {
  const params = useParams();
  const postType = params.name;
  return (
    <div className="w-full h-fit py-2 md:py-10 px-2  min-h-screen">
      <div className="w-full md:w-5/6 h-fit m-auto px-4 md:px-10 py-4 border-[1px] border-gray-100 shadow-xl bg-white shadow-gray-300">
        <h1 className="text-lg my-4 font-semibold capitalize">{"Upload " + postType + " Details"}</h1>
        {postType === "job" && <JobForm  opType={"upload"} />}
        {postType === "blog" && (
          <BlogForm opType={"upload"} />
        )}
      </div>
    </div>
  );
};
export default Upload;
