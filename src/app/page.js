import Banner from "@/components/home-page/Banner";
import CaseStudy from "@/components/home-page/CaseStudy";
import Collaborate from "@/components/home-page/Collaborate";
import WorkExperience from "@/components/home-page/WorkExperience";

export default function Home() {
  return (
   <div  className='bg-[#060608] px-5'>
      <Banner/>
      <CaseStudy/>
      <WorkExperience/>
      <Collaborate/>
   </div>
  );
}
