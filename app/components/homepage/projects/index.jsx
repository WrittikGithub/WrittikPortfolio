import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import development from '../../../assets/lottie/development.json';
import AnimationLottie from "../../helper/animation-lottie";

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-orange-200 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2a1f1a] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            Popular Projects
          </span>
          <span className="w-full h-[2px] bg-[#2a1f1a]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Sticky Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {projectsData.slice(0, 6).map((project, index) => (
                <div
                  id={`sticky-card-${index + 1}`}
                  key={index}
                  className="sticky-card w-full sticky"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Animation */}
          <div className="flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={development} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;