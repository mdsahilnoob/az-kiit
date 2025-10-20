"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Members = () => {
  const fic = {
    image: "/profile_pics/anil_kumar_swain.jpg",
    name: "Dr. Anil Kumar Swain",
    position: "Faculty Coordinator",
    link: "https://cse.kiit.ac.in/profiles/anil-kumar-swain/",
  };
  const [leads, setLeads] = useState([
    {
      image: "/profile_pics/aryan_bhargava.jpg",
      name: "Aryan Bhargava",
      position: "Society Lead",
      link: "https://www.linkedin.com/in/aryan-bhargava",
    },
    {
      image: "/profile_pics/aranya_dutta.png",
      name: "Aranya Dutta",
      position: "Tech Lead",
      link: "https://www.linkedin.com/in/thisisaro/",
    },
    {
      image: "/profile_pics/arya_singh_parihar.JPG",
      name: "Arya Singh Parihar",
      position: "Event Lead",
      link: "https://www.linkedin.com/in/arya-singh-parihar-a766a427b/",
    },
    {
      image: "/profile_pics/samridhi_sinha.jpg",
      name: "Samridhi Sinha",
      position: "Design Lead",
      link: "https://www.linkedin.com/in/samridhi-sinha-20b170318/",
    },
  ]);

  //let count = 0;

  //useEffect(() => {
  //  async function converter() {
  //    const updatedPromises = leads.map(async (lead) => {
  //      const imageUrl = await convertDriveLink(lead.image);

  //      return { ...lead, image: imageUrl };
  //    });

  //    const updated = await Promise.all(updatedPromises);
  //    setLeads(updated);
  //  }

  //  converter();
  //}, []);

  //const convertDriveLink = async (url: string) => {
  //  url = url.replace(`file/d/`, `uc?export=view&id=`);
  //  url = url.replace(`/view?usp=sharing`, "");

  //  count++;

  //  console.log(count);

  //  return url;
  //};

  return (
    <div className="min-h-lvh flex gap-20 flex-col items-center justify-center font-pixel">
      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl md:text-4xl bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent">
          Our Mentor
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link href={fic.link} target="_blank">
          <Image
            src={fic.image}
            width={230}
            height={230}
            alt={fic.name}
            className="rounded-full hover:brightness-110 hover:scale-[1.01] transition-all"
            unoptimized
          /></Link>
          <h3>{fic.name}</h3>
          <h4 className="text-xs">{fic.position}</h4>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl md:text-4xl bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent">
          Our Leads
        </div>
        <div className="flex md:flex-row flex-col gap-10 flex-wrap justify-center">
          {leads.map((lead, index) => {
            const imageUrl = lead.image;

            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 rounded-full `}
              >
                <Link href={lead.link} target="_blank">
                  <Image
                    src={imageUrl}
                    width={200}
                    height={200}
                    alt={lead.name}
                    className="rounded-full w-[175px] md:w-[200px] hover:brightness-125 hover:scale-[1.01] transition-all"
                    unoptimized
                  />
                </Link>
                <h3 className="text-sm md:text-base">{lead.name}</h3>
                <h4 className="text-xs md:text-sm">{lead.position}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Members;
