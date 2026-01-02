// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { getImagePath } from '@/utils/getImagePath';

function CertificationCard({ certification }) {

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] border border-[#2a3a5a]/30 hover:border-[#4a6fa5]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 h-full"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-amber-500/5 group-hover:to-orange-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-50"></div>
      
      <div className="relative z-10">
        {/* Image section with overlay */}
        <div className="relative h-48 lg:h-56 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent z-10"></div>
          <Image
            src={getImagePath(certification?.image || '/png/placeholder.png')}
            height={1080}
            width={1920}
            alt={certification?.title || 'Certification'}
            className='h-full w-full group-hover:scale-105 transition-all duration-700 object-cover'
          />
          {/* Badge overlay */}
          <div className="absolute top-3 right-3 z-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full p-2 shadow-lg">
            <FaAward className="text-white text-sm" />
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-5 lg:p-6 flex flex-col space-y-3">
          {/* Header with date and credential */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <FaCertificate className="text-orange-500" />
              <span>{certification.issueDate}</span>
            </div>
            {certification.credentialId && (
              <div className="px-2 py-1 bg-[#1a2a4a]/50 rounded-md border border-[#2a3a5a]/50">
                <p className="text-xs text-[#8fa3c7] font-mono">
                  {certification.credentialId}
                </p>
              </div>
            )}
          </div>
          
          {/* Title */}
          <h3 className='text-xl lg:text-2xl text-white font-bold leading-tight group-hover:text-orange-400 transition-colors duration-300'>
            {certification.title}
          </h3>
          
          {/* Issuer */}
          <p className='text-sm text-orange-400/80 font-medium flex items-center gap-2'>
            <span className="w-1 h-1 rounded-full bg-orange-400"></span>
            {certification.issuer}
          </p>
          
          {/* Description */}
          <p className='text-sm lg:text-base text-[#b8c5d9] leading-relaxed line-clamp-3'>
            {certification.description}
          </p>
          
          {/* CTA Button */}
          {certification.certificateUrl && (
            <div className="pt-2">
              <Link target='_blank' href={certification.certificateUrl}>
                <button className='group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02]'>
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

