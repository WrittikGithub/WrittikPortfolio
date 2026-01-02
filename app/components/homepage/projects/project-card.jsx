// @flow strict

import * as React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

function ProjectCard({ project }) {

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] border border-[#2a3a5a]/30 hover:border-[#4a6fa5]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 w-full">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-amber-500/5 group-hover:to-orange-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                <FaLaptopCode className="text-orange-400 text-lg" />
              </div>
              <div className="px-3 py-1 rounded-lg bg-[#1a2a4a]/50 border border-[#2a3a5a]/50">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {project.role}
                </span>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-orange-400 transition-colors duration-300 mb-2">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base text-[#b8c5d9] leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>

        {/* Tools Section */}
        <div className="mb-6">
          <p className="text-xs text-[#8fa3c7] mb-3 font-medium uppercase tracking-wider">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 font-medium backdrop-blur-sm hover:from-orange-500/30 hover:to-amber-500/30 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#2a3a5a]/30">
          {/* Mobile App Links (Android & iOS) */}
          {(project.android || project.ios) ? (
            <>
              {project.android && (
                <Link 
                  target='_blank' 
                  href={project.android}
                  className="flex-1 group/btn"
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-[1.02]'>
                    <SiGoogleplay size={14} />
                    <span>Android</span>
                  </button>
                </Link>
              )}
              {project.ios && (
                <Link 
                  target='_blank' 
                  href={project.ios}
                  className="flex-1 group/btn"
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-gray-500/30 transform hover:scale-[1.02]'>
                    <SiAppstore size={14} />
                    <span>iOS</span>
                  </button>
                </Link>
              )}
            </>
          ) : (
            <>
              {/* Web App Links */}
              {project.demo && (
                <Link 
                  target='_blank' 
                  href={project.demo}
                  className="flex-1 group/btn"
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02]'>
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              )}
              {project.code && (
                <Link 
                  target='_blank' 
                  href={project.code}
                  className="flex-1 group/btn"
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-[#1a2a4a]/50 hover:bg-[#1a2a4a]/70 border border-[#2a3a5a]/50 hover:border-orange-500/50 text-orange-400 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300'>
                    <FaCode size={12} />
                    <span>View Code</span>
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  );
};

export default ProjectCard;