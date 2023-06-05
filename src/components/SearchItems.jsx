import React, { useState } from "react";
import Posts from "./Posts";
import { FiSearch } from "react-icons/fi";

const SearchItems = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noResultFound, setNoResultFound] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearchText(text);
    handleFilterSearch(text);
  };

  const handleFilterSearch = (value) => {
    const val = value.toLowerCase();
    if (val.length > 2) {
      if (val.includes("job")) {
        handleSearchBySingleList(jobsList, val);
      } else if (val.includes("blog")) {
        handleSearchBySingleList(blogsList, val);
      } else {
        handleSearchByTwoList(jobsList, blogsList, val);
      }
    }
  };

  const handleSearchBySingleList = (list, val) => {
    const dummySerachList = list.filter((item) => {
      const searchKeywords = item.postKeywords.toLowerCase();
      return searchKeywords.includes(val);
    });
    setSearchList(dummySerachList);
    if (!dummySerachList.length < 1) {
      setNoResultFound(true);
    } else {
      setNoResultFound(false);
    }
  };
  const handleSearchByTwoList = (list1, list2, val) => {
    const dummySerachList1 = list1.filter((item) => {
      const searchKeywords = item.postKeywords.toLowerCase();
      return searchKeywords.includes(val);
    });
    const dummySerachList2 = list2.filter((item) => {
      const searchKeywords = item.postKeywords.toLowerCase();
      return searchKeywords.includes(val);
    });
    const dummySerachList = [...dummySerachList1, ...dummySerachList2];
    setSearchList(dummySerachList);
    if (dummySerachList.length < 1) {
      setNoResultFound(true);
    } else {
      setNoResultFound(false);
    }
  };

  const jobsList = [
    {
      id: 1,
      jobTitle: "Infosys Hiring 2022 Graduates",
      jobType: "FullTime",
      jobExperience: "0-1Years",
      jobLocation: "Bangalore",
      jobShortInfo: "infosys hiring 2021 people for software engineer role",
      jobDescription: "ghvvcydsjbvsgbviurwvbieuguygyig",
      jobUrl: "infosys-hiring-2022",
      postKeywords: "2021, 2022, 2023 , BTech , CSE, Mechanical, ",
      postType: "job",
    },
    {
      id: 2,
      jobTitle: "TCS Hiring 2022 Graduates",
      jobType: "PartTime",
      jobExperience: "0-1Years",
      jobLocation: "Bangalore",
      jobShortInfo: "infosys hiring 2021 people for software engineer role",
      jobDescription: "gjhhhhhhhhhhhhhhhhhhhhhhhhhfggfbtrubjkhvgbfsigwuiv",
      jobUrl: "infosys-hiring-2022",
      postKeywords: "2021, 2022, 2023 , BTech , CSE, Mechanical, cSEjob",
      postType: "job",
    },
    {
      id: 3,
      jobTitle: "Accenture Hiring 2022 Graduates",
      jobType: "FullTime",
      jobExperience: "0-1Years",
      jobLocation: "Bangalore",
      jobShortInfo: "infosys hiring 2021 people for software engineer role",
      jobDescription: "ghvvcydsjbvsgbviurwvbieuguygyig",
      jobUrl: "infosys-hiring-2022",
      postKeywords: "2021, 2022, 2023 , BTech , CSE, Mechanical, ",
      postType: "job",
    },
  ];

  const blogsList = [
    {
      id: 1,
      blogTitle: "What is React js",
      blogShortInfo: "react us jaava script frame work",
      blogDescription: "reactj",
      postType: "blog,",
      postKeywords: "reactjs, javascript, ",
    },
    {
      id: 2,
      blogTitle: "What is Node js",
      blogShortInfo: "react us jaava script frame work",
      blogDescription: "reactj",
      postType: "blog,",
      postKeywords: "reactjs, javascript, nodejs ",
    },
  ];

  return (
    <div className="w-full h-fit min-h-screen mt-2">
      <div className="w-full  md:w-1/2 m-auto mt-8 text-center py-4 ">
        <div className="w-full px-2">
          <div className="w-full h-fit p-1  flex flex-row border-[1px] border-gray-300 rounded-lg duration-300 hover:border-violet-400 hover:border-[2px] ">
            <input
              placeholder="Search here....."
              className="w-11/12 md:w-full h- p-1 focus-within:outline-none"
              onChange={handleChange}
            />
            <FiSearch
              size={23}
              className="m-1 cursor-pointer text-violet-600"
              onClick={() => handleFilterSearch(searchText)}
            />
          </div>
        </div>
      </div>
      {!noResultFound && (
        <div className="w-full md:w-5/6 h-fit m-auto mt-10 md:mt-20 flex flex-wrap px-4 md:px-10 justify-between text-gray-700">
          <Posts type={"job"} />
        </div>
      )}
      {noResultFound && (
        <div className="w-fit md:w-1/2 m-auto mt-10 h-fit p-6 text-center text-xl text-violet-700 shadow-lg shadow-gray-200">
          <p>No Search Result Found</p>
        </div>
      )}
    </div>
  );
};

export default SearchItems;
