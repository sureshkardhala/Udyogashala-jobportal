import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";

const data = {
  jobApplicationUrl: "eeeeeeeeeeeeee",
  jobDetails: "<p>e</p>",
  jobExperience: "eeeeeeeeeeeee",
  jobLocation: "eeeeeeeeeeeee",
  jobShortInfo: "eeeeeeeeeeeeee",
  jobTitle: "eeeeeeeeeeeeeeee",
  jobType: "Part Time",
  jobUrl: "eeeeeeeeeeeeeeee",
  keywords: "eeeeeeeeeeeeeee",
};

const JobForm = ({ id, opType }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [jobApplicationUrl, setJobApplicationUrl] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobShortInfo, setJobShortInfo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [keywords, setKeywords] = useState("");

  if (opType === "update") {
    setJobTitle(data.jobTitle);
    setJobShortInfo(data.jobShortInfo);
    setKeywords(data.keywords);
    setJobDetails(data.jobDetails);
    setJobApplicationUrl(data.jobApplicationUrl);
    setJobExperience(data.jobExperience);
    setJobLocation(data.jobLocation);
    setJobType(data.jobType);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: jobTitle,
      jobApplicationUrl: jobApplicationUrl,
      jobDetails: jobDetails,
      jobExperience: jobExperience,
      jobLocation: jobLocation,
      jobShortInfo: jobShortInfo,
      jobType: jobType,
      keywords: keywords,
    },
  });
  const config = {
    placeholder: "Start typing......",
  };

  const onSubmit = (data) => {
    const jobTitle = data?.jobTitle;
    let jobUrl = jobTitle
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
      .replace(/  +/g, " ")
      .replace(/ /g, "-");

    if (jobUrl.endsWith("-")) {
      jobUrl = jobUrl.substr(0, jobUrl.length - 1);
    }

    data = { ...data, jobDetails: content, jobUrl: jobUrl };
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mt-10">
        <label>Job Title </label>
        <br />
        <input
          {...register("jobTitle", { required: true })}
          type="text"
          placeholder="Enter Job Title"
          className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-300"
          aria-invalid={errors.jobTitle ? "true" : "false"}
          autoComplete="off"
        />
        {errors.jobTitle?.type === "required" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>
      <div className="mt-10">
        <label>Apply Link </label>
        <br />
        <input
          {...register("jobApplicationUrl", { required: true })}
          type="text"
          placeholder="Enter Job application url"
          className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-300"
          aria-invalid={errors.jobApplicationUrl ? "true" : "false"}
          autoComplete="off"
        />
        {errors.jobApplicationUrl?.type === "required" && (
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
          placeholder="Enter short info about job"
          autoComplete="off"
          aria-invalid={errors.jobShortInfo ? "true" : "false"}
          {...register("jobShortInfo", { required: true })}
          cols="30"
          rows="10"
        ></textarea>

        {errors.jobShortInfo?.type === "required" && (
          <p role="alert" className="text-red-500">
            *required
          </p>
        )}
      </div>
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full md:w-80 mt-10">
          <label>Job Type </label>
          <br />
          <select
            {...register("jobType", { required: true })}
            className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-200"
          >
            <option className="fulltime">Full Time</option>
            <option className="parttime">Part Time</option>
            <option className="internship">Internship</option>
          </select>

          {errors.qualificationDegree?.type === "required" && (
            <p role="alert" className="text-red-500">
              *required
            </p>
          )}
        </div>
        <div className="w-full md:w-80 mt-10">
          <label>Job Location </label>
          <br />
          <input
            {...register("jobLocation", { required: true })}
            type="text"
            placeholder="Enter Job Location"
            className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-blue-200"
            aria-invalid={errors.jobLocation ? "true" : "false"}
            autoComplete="off"
          />
          {errors.jobLocation?.type === "required" && (
            <p role="alert" className="text-red-500">
              *required
            </p>
          )}
        </div>
        <div className="w-full md:w-80 mt-10">
          <label> Experience</label>
          <br />
          <input
            {...register("jobExperience", { required: true })}
            type="text"
            placeholder="Enter Job Experience"
            className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-pink-300"
            aria-invalid={errors.jobExperience ? "true" : "false"}
            autoComplete="off"
          />
          {errors.jobExperience?.type === "required" && (
            <p role="alert" className="text-red-500">
              *required
            </p>
          )}
        </div>
      </div>
      <div className="mt-10">
        <label>Keywords </label>
        <br />
        <textarea
          className="w-full h-fit mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-300"
          placeholder="Enter Keywords"
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
            className="w-28 h-10 text-white bg-green-500 rounded-md"
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

export default JobForm;
