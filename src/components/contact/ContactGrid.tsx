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

      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[60%] h-[500px] p-4 pt-14">
        {/* Instagram - left top */}
        <Link
          href={insta}
          target="_blank"
          className="w-fit shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 col-start-1 col-span-1 row-start-1 row-span-1 flex items-center justify-center "
        >
          <Icon
            icon="skill-icons:instagram"
            width="200"
            height="200"
            className="p-4"
          />
        </Link>

        {/* LinkedIn - left bottom */}
        <Link
          href={linkedin}
          target="_blank"
          className="w-fit shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 col-start-1 col-span-1 row-start-2 row-span-1 flex items-center justify-center "
        >
          <Icon
            icon="skill-icons:linkedin"
            width="200"
            height="200"
            className="p-4"
          />
        </Link>

        {/* Form - right, spans 2 columns wide and 2 rows tall */}
        <div className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 col-start-2 col-span-2 row-start-1 row-span-2 flex flex-col items-center justify-center">
          <p className="text-lg font-medium p-10 pb-0 text-center">
            Have a query? No worries, submit your query here:
          </p>
          <Link
            href={form}
            target="_blank"
            rel="noopener noreferrer"
            className="p-10 hover:scale-105 transition-all bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent"
          >
            Open Query Form -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
