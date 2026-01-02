// @flow strict
"use client";
import { useEffect, useRef, useState } from 'react';
import CertificationCard from './certification-card';

function Blog({ certifications }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !certifications || certifications.length === 0) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // If we've scrolled past the original content, reset to start
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, certifications]);

  return (
    <div id='certifications' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-orange-200 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2a1f1a] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-full h-[2px] bg-[#2a1f1a]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
          style={{
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {certifications && certifications.length > 0 ? (
            <>
              {certifications.map((certification, index) => (
                <div
                  key={certification.id || index}
                  className="flex-shrink-0 w-[350px] lg:w-[400px]"
                >
                  <CertificationCard certification={certification} />
                </div>
              ))}
              {/* Duplicate cards for seamless loop */}
              {certifications.map((certification, index) => (
                <div
                  key={`duplicate-${certification.id || index}`}
                  className="flex-shrink-0 w-[350px] lg:w-[400px]"
                >
                  <CertificationCard certification={certification} />
                </div>
              ))}
            </>
          ) : (
            <div className="w-full text-center text-[#d3d8e8] py-8">
              <p>No certifications to display. Add your certifications in utils/data/certifications.js</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Blog;