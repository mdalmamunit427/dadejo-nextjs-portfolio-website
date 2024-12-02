import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
const experiences = [
    {
      date: "SEP, 2023 - CURRENT",
      title: "Product Designer",
      company: "Oendo Studio",
      description:
        `Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction.`,
    },
    {
      date: "JAN, 2022 - SEP, 2023",
      title: "UX Designer",
      company: "Genesis",
      description:
        `Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction.`,
    },
    {
      date: "FEB, 2020 - JAN, 2022",
      title: "Lead Designer",
      company: "Pitchblack",
      description:
        `Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction.`,
    },
  ];

const WorkExperience = () => {
    return (
        <div className="py-28 max-w-screen-xl mx-auto framer-animation" id="work-experience">
      {/* Section Heading */}
      <div className="space-y-6">
        <span className="flex flex-wrap gap-3 items-center mb-16">
          <p className="text-white font-bold text-xl">02</p>
          <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Work Experience</h2>
        </span>

        {/* Work Experience Items */}
        {experiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </div>
    );
};

export default WorkExperience;
