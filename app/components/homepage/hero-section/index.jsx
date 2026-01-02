// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { getImagePath } from "@/utils/getImagePath";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src={getImagePath("/hero.svg")}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-orange-400">{personalData.shortName}</span>
            {` , I'm a Professional `}
            <span className=" text-[#f97316]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-orange-400 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-orange-400 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-orange-400 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            {/* <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-orange-400 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-orange-400 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link> */}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-orange-500 from-amber-500 p-[1px] rounded-full transition-all duration-300 hover:from-orange-500 hover:to-amber-500">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0f0a0f] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative group">
          {/* Main Card Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] border border-[#2a3a5a]/30 shadow-2xl">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8">
              {/* Profile Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                    <div className="w-full h-full rounded-full bg-[#0a0e27] flex items-center justify-center">
                      <span className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                        {personalData.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{personalData.name}</h3>
                <p className="text-sm lg:text-base text-orange-400 font-medium">{personalData.designation}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-[#1a2a4a]/30 border border-[#2a3a5a]/30 backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">15+</div>
                  <div className="text-xs text-[#8fa3c7] mt-1">Skills</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#1a2a4a]/30 border border-[#2a3a5a]/30 backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">3+</div>
                  <div className="text-xs text-[#8fa3c7] mt-1">Certs</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#1a2a4a]/30 border border-[#2a3a5a]/30 backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">∞</div>
                  <div className="text-xs text-[#8fa3c7] mt-1">Learning</div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mb-6">
                <p className="text-sm text-[#8fa3c7] mb-3 font-medium">Core Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'Codeigniter', 'Laravel', 'React', 'NextJS', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind', 'Bootstrap', 'MaterialUI', 'Figma', 'Firebase', 'MySQL', 'PostgreSQL'].map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 text-xs lg:text-sm rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 font-medium backdrop-blur-sm hover:from-orange-500/30 hover:to-amber-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Traits Section */}
              <div className="space-y-3 pt-4 border-t border-[#2a3a5a]/30">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-[#b8c5d9]">Hard Worker & Problem Solver</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-sm text-[#b8c5d9]">Quick Learner & Adaptable</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <span className="text-sm text-[#b8c5d9]">Always Ready for New Challenges</span>
                </div>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;