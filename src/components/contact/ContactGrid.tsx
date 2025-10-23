"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContactGrid = () => {
  const insta = "https://www.instagram.com/algozenith_kiit";
  const linkedin = "https://www.linkedin.com/company/algozenith-kiit-chapter";
  const form = "https://forms.gle/NFuYHqtqznBbu1mW9";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-pixel px-4 sm:px-6 lg:px-8">
      {/*<Padder />*/}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl relative w-full mb-8 sm:mb-12 lg:mb-16">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="hidden sm:block -z-10 absolute left-0 top-1/2 -scale-y-100 w-[20%]"
        />
        <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center leading-tight">
          How Can We Help?
        </div>
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 text-black -z-10 blur-xs text-center w-full leading-tight">
          How Can We Help?
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="hidden sm:block -z-10 absolute right-0 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>

      {/* Responsive Grid */}
      <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {/* Instagram */}
        <Link
          href={insta}
          target="_blank"
          className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Icon 
              icon="skill-icons:instagram" 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors">Instagram</span>
          </div>
        </Link>

        {/* LinkedIn */}
        <Link
          href={linkedin}
          target="_blank"
          className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Icon 
              icon="skill-icons:linkedin" 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
          </div>
        </Link>

        {/* Form */}
        <div className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex flex-col items-center justify-center col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
          <p className="text-sm sm:text-base lg:text-lg font-medium text-center mb-6 sm:mb-8 leading-relaxed">
            Have a query? No worries, submit your query here:
          </p>
          <Link
            href={form}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center underline decoration-[#c1127e] hover:scale-105 active:scale-95 transition-all bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent text-base sm:text-lg lg:text-xl py-3 px-6 rounded-lg border border-[#c1127e]/30 hover:border-[#c1127e]/60 min-h-[44px] flex items-center justify-center"
          >
            Open Query Form →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
