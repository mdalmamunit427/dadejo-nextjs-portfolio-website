
const WorkExperienceItem = ({ date, title, company, description }) => (
    <div className="space-y-6">
      {/* Date Range */}
      <p className="text-md sm:text-lg text-gray-400">{date}</p>
  
      {/* Job Title and Company */}
      <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#ABABB5] font-semibold">
        {title}, <span className="text-[#ABABB5]">{company}</span>
      </h3>
  
      {/* Job Description */}
      <div className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
        {/* Left content */}
        <div>
          <p className="text-[#ABABB5] font-semibold pb-6 sm:max-w-2xl">{description}</p>
        </div>
  
        {/* Right content */}
        <div className="ml-0 sm:ml-4 hidden group-hover:flex">
          <button className="bg-black text-white rounded-[50px] px-6 py-3 sm:py-4 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Visit Link
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-white mt-14"></div>
    </div>
  );

export default WorkExperienceItem