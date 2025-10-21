import Image from "next/image";
import Padder from "../global/Padder";
import Link from "next/link";

const UpcomingEvents = () => {
  const event = {
    link: "https://forms.gle/NBhLhEmpPn4HCd7W8",
    name: "Competitive Programming Headstart",
    description: "Your roadmap from DSA to Competitive Programming",
    date: "25th October, 2025",
    venue: "Campus-25",
    time: "10am to 12pm",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-pixel">
      {/*<Padder />*/}
      <div className="h-18 md:h-4"></div>
      <h1 className="text-2xl lg:text-5xl relative w-full">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-20 absolute left-0 top-1/2 -scale-y-100 w-[20%]"
        />
        <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
          Upcoming Events
        </div>
        <div className="absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
          Upcoming Events
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-20 absolute right-0 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>

      <div className="m-8 md:p-8 py-2 flex md:flex-row flex-col gap-8 shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20">
        <Link
          href={event.link}
          target="_blank"
          className="flex justify-center items-center"
        >
          <Image
            src={"/event_posters/headstart.jpg"}
            width={300}
            height={300}
            alt="HeadStart"
            className="w-[380px] rounded-3xl hover:brightness-125 transition-all active:scale-[1.01] hover:scale-[1.01]"
          />
        </Link>

        <div className="w-[400px] flex flex-col gap-20 justify-between md:pb-10 pb-6">
          <div>
            <h2 className="pb-6 text-2xl bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent text-center">
              {event.name}
            </h2>
            <p className="pb-10 text-sm text-center">{event.description}</p>
            <div className="text-xs">
              <div className="flex ">
                <h2 className="w-full border-r text-center pb-2 bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white">
                  Date :
                </h2>
                <h2 className="w-full border-r text-center bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white">
                  Venue :
                </h2>
                <h2 className="w-full  text-center bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white">
                  Time :
                </h2>
              </div>
              <div className="flex">
                <h2 className="w-full border-r text-center">{event.date}</h2>
                <h2 className="w-full border-r text-center">{event.venue}</h2>
                <h2 className="w-full  text-center">{event.time}</h2>
              </div>
            </div>
          </div>

          <Link
            href={event.link}
            target="_blank"
            className="text-center bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent underline decoration-[#c1127e] hover:scale-105 transition-all text-2xl"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
