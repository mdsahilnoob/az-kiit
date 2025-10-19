"use client"

import { image } from "motion/react-client";
import { useState } from "react";

const Domains = () => {
  const [domains, setDomains] = useState([
    {
      name: "Competitive Programming",
      image: "",
      description: "",
      link: "",
    },
    {
      name: "Graphic Design",
      image: "",
      description: "",
      link: "",
    },
    {
      name: "Marketing",
      image: "",
      description: "",
      link: "",
    },
  ]);

    return (
      <div className="min-h-screen font-pixel flex flex-col items-center justify-center">
        <div className="text-2xl md:text-4xl bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent">
          Our Domains
        </div>
        <div>
          {
            domains.length > 0 && domains.map((domain, index) => {
              return <div key={index}>
                {domain.name}
              </div>
            })
          }
        </div>
      </div>
    );
}

export default Domains;