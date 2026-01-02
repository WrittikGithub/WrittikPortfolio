// @flow strict

import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-orange-200 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2a1f1a] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-full h-[2px] bg-[#2a1f1a]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Animation */}
          <div className="flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Right Side - Sticky Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience, index) => (
                <div
                  id={`sticky-exp-${index + 1}`}
                  key={experience.id}
                  className="sticky-exp w-full sticky"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] border border-[#2a3a5a]/30 hover:border-[#4a6fa5]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 w-full">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-amber-500/5 group-hover:to-orange-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8">
                        {/* Duration Badge */}
                        <div className="flex justify-center mb-4">
                          <div className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                            <p className="text-xs sm:text-sm text-orange-400 font-semibold">
                              {experience.duration}
                            </p>
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 group-hover:scale-110 transition-all duration-300">
                            <BsPersonWorkspace className="text-orange-400" size={32} />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl mb-2 font-bold text-white group-hover:text-orange-400 transition-colors duration-300 uppercase">
                              {experience.title}
                            </h3>
                            <p className="text-base lg:text-lg text-orange-400/90 font-medium mb-4">
                              {experience.company}
                            </p>
                            <ul className="space-y-2 text-sm lg:text-base text-[#b8c5d9]">
                              {experience.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start gap-2">
                                  <span className="text-orange-400 mt-1.5 flex-shrink-0">▸</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;