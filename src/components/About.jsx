import React from "react";
import SimpleAccordion from "./Mui/SimpleAccordion";
import Services from "./Services";
import SocialMedia from "./SocialMedia";

const About = () => {
  const aboutInfo = [
    {
      id: 1,
      title: "Who We Are",
      info: "Udyogashala is a committed group of experts dedicated to empowering job seekers and building a resource hub for career growth. With our recruitment and technology knowledge, we aim to provide a user-friendly experience for job seekers and employers, simplifying the process of finding off-campus job opportunities through job listing aggregation.",
      infoArr: false,
    },
    {
      id:2,
      title: "Why Choose Us",
      infoArr:true,
      info:'',
      infoArray:[
        {
          id:1,
          name:"Extensive Job Opportunities",
          smallInfo:"Udyogashala collects diverse off-campus job openings from multiple sources, providing job seekers with abundant options across industries for their placement needs."
        },
        {
          id:2,
          name:"Technology-Focused Content",
          smallInfo:"We offer diverse tech content, from trends to skill development. Stay informed, enhance your skills, and benefit from industry insights. Perfect for beginners and experienced professionals."
        },
        {
          id:3,
          name:"Interview Preparation and DSA Guidance",
          smallInfo:"Our platform offers interview prep materials, including tips, questions, and mock interviews, along with DSA guidance to enhance technical knowledge and excel in coding assessments."
        },
        {
          id:4,
          name:"User-Friendly Interface",
          smallInfo:"Udyogashala offers a user-friendly interface for effortless browsing. Personalized job recommendations optimize efficiency, streamlining the job search experience."
        }
      ]
    }
  ];
  return (
    <div className="w-full h-fit min-h-screen p-2">
      <div className="w-full md:w-2/3 h-fit m-auto mt-10 ">
        <p className="text-3xl font-semibold text-center border-b-[2px] w-fit m-auto p-2 border-violet-500">
          About
        </p>
        <div className="mt-10 px-2">
          Welcome to <span className="font-bold text-lg">Udyogashala</span>, he
          top off-campus job portal connecting job seekers with career
          opportunities. We bridge the talent-employer gap, ensuring fair
          chances for individuals to showcase skills and land dream jobs. Find
          job listings, tech content, interview resources, and DSA guidance on
          our platform. Your gateway to success!
        </div>
        <div className="mt-10">
          <SimpleAccordion aboutInfo={aboutInfo} />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default About;
