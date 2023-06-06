import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";

const data = {
    blogTitle: "dddddddddd gjvdcghgh  678365327###",
    blogShortInfo: "dvf",
    keywords: "dfdf",
    blogDetails: "<p>ddfv</p>",
    blogUrl: "dddddddddd-gjvdcghgh",
};


const BlogForm = ({id, opType}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [blogShortInfo, setBlogShortInfo] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDetails, setBlogDetails] = useState("");
  const [keywords, setKeywords] = useState("");

  if(opType === "update"){
    setBlogTitle(data.blogTitle);
    setBlogShortInfo(data.blogShortInfo);
    setKeywords(data.keywords);
    setBlogDetails(data.blogDetails);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
        blogTitle : blogTitle,
        blogShortInfo : blogShortInfo,
        blogDetails : blogDetails,
        keywords : keywords
    }
  });
  const config = {
    placeholder: "Start typing......",
  };
  

  const onSubmit = (data) => {
    const blogTitle = data?.blogTitle;
    let blogUrl = blogTitle.replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
      .replace(/  +/g, " ")
      .replace(/ /g, "-");
    
      if(blogUrl.endsWith("-")){
        blogUrl = blogUrl.substr(0,blogUrl.length-1);
      }

    data = { ...data, blogDetails: content, blogUrl: blogUrl};
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mt-10">
        <label>Blog Title </label>
        <br />
        <input
          {...register("blogTitle", { required: true })}
          type="text"
          placeholder="Enter Job Title"
          className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-300  focus-within:outline-green-300"
          aria-invalid={errors.blogTitle ? "true" : "false"}
          autoComplete="off"
        />
        {errors.blogTitle?.type === "required" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>
      <div className="mt-10">
        <label>Short Description </label>
        <br />
        <textarea
          className="w-full h-fit mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-300"
          placeholder="Enter short info about blog"
          autoComplete="off"
          aria-invalid={errors.blogShortInfo ? "true" : "false"}
          {...register("blogShortInfo", { required: true })}
          cols="30"
          rows="10"
        ></textarea>

        {errors.blogShortInfo?.type === "required" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>

      <div className="mt-10">
        <label>Keywords </label>
        <br />
        <textarea
          className="w-full h-fit mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-300"
          placeholder="Enter keywords"
          autoComplete="off"
          aria-invalid={errors.keywords ? "true" : "false"}
          {...register("keywords", { required: true })}
          cols="30"
          rows="10"
        ></textarea>

        {errors.keywords?.type === "required" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>

      <div className="w-full h-fit mt-10 ">
        <label>Description</label>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
          autoComplete="off"
          config={config}
          
        />
        {content === "" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>
      {content !== "" && (
        <div className="w-full flex flex-row space-x-20 mt-10">
          <button
            type="submit"
            className="w-28 h-10 text-white bg-green-500 rounded-md capitalize"
          >
            {opType}
          </button>
          <button
            type="reset"
            className="w-28 h-10 text-white bg-red-500 rounded-md"
          >
            Reset
          </button>
        </div>
      )}
    </form>
  );
};

export default BlogForm;
