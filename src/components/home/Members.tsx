"use client";

import { log } from "console";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { useEffect, useState } from "react";

const Members = () => {
  const [leads, setLeads] = useState([
    {
      image:
        "https://drive.google.com/file/d/1M0fthMJmgbUzDil5WpOgcJUJx85QGtRz/view?usp=sharing",
      name: "Kingsuk Nandi",
      position: "Tech Lead",
    },
    {
      image:
        "https://drive.google.com/file/d/1M0fthMJmgbUzDil5WpOgcJUJx85QGtRz/view?usp=sharing",
      name: "Kingsuk Nandi",
      position: "Tech Lead",
    },
    {
      image:
        "https://drive.google.com/file/d/1M0fthMJmgbUzDil5WpOgcJUJx85QGtRz/view?usp=sharing",
      name: "Kingsuk Nandi",
      position: "Tech Lead",
    },
    {
      image:
        "https://drive.google.com/file/d/1M0fthMJmgbUzDil5WpOgcJUJx85QGtRz/view?usp=sharing",
      name: "Kingsuk Nandi",
      position: "Tech Lead",
    },
  ]);

  let count = 0;

  useEffect(() => {
    async function converter() {
      const updatedPromises = leads.map(async (lead) => {
        const imageUrl = await convertDriveLink(lead.image);

        return { ...lead, image: imageUrl };
      });

      const updated = await Promise.all(updatedPromises);
      setLeads(updated);
    }

    converter();
  }, []);

  const convertDriveLink = async (url: string) => {
    url = url.replace(`file/d/`, `uc?export=view&id=`);
    url = url.replace(`/view?usp=sharing`, "");

    count++;

    console.log(count);

    return url;
  };

  return (
    <div className="min-h-lvh flex gap-20 flex-col items-center justify-center font-pixel">
      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl md:text-4xl bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent">
          Our Mentor
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src={leads[0].image}
            width={230}
            height={230}
            alt={leads[0].name}
            className="rounded-full"
          />
          <h3>{"Dr. Anil Kumar Swain"}</h3>
          <h4 className="text-xs">{"Faculty Coordinator"}</h4>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl md:text-4xl bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent">
          Our Leads
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {leads.map((lead, index) => {
            const imageUrl = lead.image;

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  src={imageUrl}
                  width={200}
                  height={200}
                  alt={lead.name}
                  className="rounded-full"
                />
                <h3>{lead.name}</h3>
                <h4 className="text-sm">{lead.position}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Members;
