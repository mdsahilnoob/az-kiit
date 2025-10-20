"use client";

import Image from "next/image";
import Padder from "../global/Padder";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContactGrid = () => {
  const insta = "";
  const linkedin = "";
  const form = "";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-pixel">
      <Padder />
      <h1 className="text-2xl lg:text-5xl relative w-full">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute left-0 top-1/2 -scale-y-100 w-[20%]"
        />
        <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
          How Can We Help ?
        </div>
        <div className="absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
          How Can We Help ?
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute right-0 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>

      {/* Responsive Grid */}
      <div className="grid w-fit grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 md:px-4 md:w-[90%] lg:w-[60%] h-auto p-4 pt-14">
        {/* Instagram */}
        <Link
          href={insta}
          target="_blank"
          className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex items-center justify-center p-4"
        >
          <Icon icon="skill-icons:instagram" width="120" height="120" />
        </Link>

        {/* LinkedIn */}
        <Link
          href={linkedin}
          target="_blank"
          className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex items-center justify-center p-4"
        >
          <Icon icon="skill-icons:linkedin" width="120" height="120" />
        </Link>

        {/* Form */}
        <div className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 flex flex-col items-center justify-center col-span-2 lg:col-span-2 lg:row-span-2 p-8">
          <p className="text-lg font-medium p-6 pb-0 text-center">
            Have a query? No worries, submit your query here:
          </p>
          <Link
            href={form}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-6 hover:scale-105 transition-all bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent text-lg"
          >
            Open Query Form -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
