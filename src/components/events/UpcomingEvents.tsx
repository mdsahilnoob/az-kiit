import Image from "next/image";
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
    <div className="min-h-screen flex flex-col justify-center items-center font-pixel px-4 sm:px-6 lg:px-8">
      {/*<Padder />*/}
      <div className="h-8 sm:h-12 md:h-16"></div>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl relative w-full mb-8 sm:mb-12">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="hidden sm:block -z-20 absolute left-0 top-1/2 -scale-y-100 w-[20%]"
        />
        <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center leading-tight">
          Upcoming Events
        </div>
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 text-black -z-10 blur-xs text-center w-full leading-tight">
          Upcoming Events
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="hidden sm:block -z-20 absolute right-0 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>

      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8 shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20">
        <Link
          href={event.link}
          target="_blank"
          className="flex justify-center items-center flex-shrink-0"
        >
          <Image
            src={"/event_posters/headstart.jpg"}
            width={300}
            height={400}
            alt="HeadStart"
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] h-auto rounded-2xl sm:rounded-3xl hover:brightness-125 transition-all active:scale-[1.01] hover:scale-[1.01] shadow-lg"
          />
        </Link>

        <div className="w-full lg:w-[400px] flex flex-col gap-8 sm:gap-12 lg:gap-20 justify-between lg:pb-10 pb-6">
          <div>
            <h2 className="pb-4 sm:pb-6 text-lg sm:text-xl lg:text-2xl bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent text-center leading-tight">
              {event.name}
            </h2>
            <p className="pb-6 sm:pb-8 lg:pb-10 text-xs sm:text-sm text-center leading-relaxed">{event.description}</p>
            <div className="text-xs sm:text-sm overflow-x-auto">
              <div className="flex min-w-[280px]">
                <h2 className="w-full border-r text-center pb-2 bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white px-1">
                  Date
                </h2>
                <h2 className="w-full border-r text-center bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white px-1">
                  Venue
                </h2>
                <h2 className="w-full text-center bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent border-white px-1">
                  Time
                </h2>
              </div>
              <div className="flex min-w-[280px]">
                <h2 className="w-full border-r text-center pt-2 px-1 break-words">{event.date}</h2>
                <h2 className="w-full border-r text-center pt-2 px-1 break-words">{event.venue}</h2>
                <h2 className="w-full text-center pt-2 px-1 break-words">{event.time}</h2>
              </div>
            </div>
          </div>

          <Link
            href={event.link}
            target="_blank"
            className="text-center bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent underline decoration-[#c1127e] hover:scale-105 transition-all text-lg sm:text-xl lg:text-2xl py-2 px-4 rounded-lg border border-[#c1127e]/30 hover:border-[#c1127e]/60 min-h-[44px] flex items-center justify-center"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
