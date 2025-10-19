import { ul } from "motion/react-client";
import Image from "next/image";

const ForYou = () => {
  const items = [
    {
      title: "Exclusive Coding Contests & Challenges",
      desc: "Weekly/biweekly competitions on the AZ platform.",
    },
    {
      title: "Workshops & Mentorship",
      desc: "Learn advanced topics like Graphs, DP, and System Design from experienced mentors.",
    },
    {
      title: "Career Readiness",
      desc: "Mock interviews, resume reviews, and placement-focused guidance.",
    },
    {
      title: "Networking Opportunities",
      desc: "Collaborate with peers and connect with top coders and industry professionals.",
    },
    {
      title: "Recognition & Growth",
      desc: "Improve your CP ratings, win contests, and gain visibility in the national coding circuit.",
    },
  ];

  return (
    <div className="min-h-screen font-pixel flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl relative w-full">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute -left-10 top-1/2 -scale-y-100 w-[20%]"
        />
        <div>
          <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
            What&apos;s in it
          </div>
          <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
            For You ?
          </div>
          <div className="absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
            <div>What&apos;s in it</div>
            <div>For You ?</div>
          </div>
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute -right-10 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>
      <div className="w-[80%] md:w-[70%] lg:w-[50%] text-xs md:text-base text-justify pt-10 leading-relaxed">
        {/*{text}*/}
        Joining the&nbsp;
        <span className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
          AlgoZenith KIIT Chapter
        </span>
        &nbsp;opens doors to:
        <br />
        <br />
        <ul className="flex flex-col gap-3 leading-tight">
          {items.length > 0 &&
            items.map((item, index) => {
              return (
                <li key={index} className="list-outside list-decimal">
                  <div className="flex flex-col gap-1">
                    <div className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
                      {item.title} -
                    </div>
                    <div>{item.desc}</div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ForYou;
