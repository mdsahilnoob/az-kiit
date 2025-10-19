import Image from "next/image";
import Padder from "../global/Padder";

const AboutUs = () => {
  const text = `AlgoZenith KIIT Chapter is a student-driven community dedicated to nurturing a strong culture of competitive programming, algorithmic thinking, and technical excellence at KIIT.
We aim to create a collaborative environment where passionate coders can learn, compete, and grow through structured mentorship, curated contests, and hands-on workshops.
Our mission is simple — to help every student unlock their potential, build problem-solving confidence, and be placement-ready for top tech opportunities.`;

  return (
    <div className="min-h-screen font-pixel flex flex-col items-center justify-center">
      <Padder />
      <h1 className="text-2xl sm:text-4xl lg:text-6xl relative w-full">
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute left-0 top-1/2 -scale-y-100 w-[20%]"
        />
        <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
          About Us
        </div>
        <div className="absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
          About Us
        </div>
        <Image
          src={"/arts/connector-line.png"}
          height={50}
          width={300}
          alt=""
          className="-z-10 absolute right-0 top-1/2 -scale-y-100 -scale-x-100 w-[20%]"
        />
      </h1>
      <p className="w-[80%] md:w-[70%] lg:w-[50%] text-xs md:text-base text-justify pt-10 leading-relaxed">
        {/*{text}
         */}
        <span className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
          AlgoZenith KIIT Chapter
        </span>{" "}
        is a student-driven community dedicated to nurturing a strong culture of
        competitive programming, algorithmic thinking, and technical excellence
        at KIIT.
        <br />
        <br />
        We aim to create a collaborative environment where passionate coders can
        learn, compete, and grow through structured mentorship, curated
        contests, and hands-on workshops. Our mission is simple — to help every
        student unlock their potential, build problem-solving confidence, and be
        placement-ready for top tech opportunities.
      </p>
    </div>
  );
};

export default AboutUs;
