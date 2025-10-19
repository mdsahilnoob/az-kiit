import Image from "next/image";
import Padder from "../global/Padder";

function AboutAlgozenith() {
  const text = `AlgoZenith is a premier competitive programming and coding education platform founded by Vivek Gupta (Ex-Google SWE & ICPC World Finalist).
With expert-led courses, curated problem sets, and guided mentorship, AlgoZenith empowers students to master algorithms and data structures, ace coding interviews, and excel in national and international coding contests.
By establishing college chapters like ours, AlgoZenith is building a nationwide network of coders, mentors, and leaders united by a love for programming excellence.`;

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
            About
          </div>
          <div className="bg-gradient-to-b from-[#d7eab6] to-[#2ba6a7] bg-clip-text text-transparent w-full text-center">
            Algozenith
          </div>
          <div className="absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
            <div>About</div>
            <div>Algozenith</div>
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
      <p className="w-[80%] md:w-[70%] lg:w-[50%] text-xs md:text-base text-justify pt-10 leading-relaxed">
        {/*{text}*/}
        <span className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
          AlgoZenith
        </span>
        is a premier competitive programming and coding education platform&nbsp;
        <span className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
          founded by Vivek Gupta
        </span>
        &nbsp;(Ex-Google SWE & ICPC World Finalist) . With expert-led courses,
        curated problem sets, and guided mentorship, AlgoZenith empowers
        students to master algorithms and data structures, ace coding
        interviews, and excel in national and international coding contests.
        <br />
        <br />
        By establishing college chapters like ours, AlgoZenith is building a
        nationwide network of coders, mentors, and leaders united by a love for
        programming excellence.
      </p>
    </div>
  );
}

export default AboutAlgozenith;
