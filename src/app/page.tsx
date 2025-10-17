import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="min-h-dvh flex flex-col gap-10 items-center justify-center">
        <h3 className="font-pridi text-5xl text-[#f2ff8c]">
          Code, Compete, Conquer
        </h3>
        <h1 className="font-pixel text-8xl relative w-full text-center ">
          <Image
            src={"/arts/connector-line.png"}
            height={50}
            width={300}
            alt=""
            className="absolute -left-10 top-1/2 -scale-y-100"
          />
          <span className="bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent text-center w-full">
            ALGOZENITH
          </span>
          {/* shadow */}
          <span className=" absolute top-2 left-2 text-black -z-10 blur-xs text-center w-full">
            ALGOZENITH
          </span>
          <Image
            src={"/arts/connector-line.png"}
            height={50}
            width={300}
            alt=""
            className="absolute -right-10 top-1/2 -scale-y-100 -scale-x-100"
          />
        </h1>
        <h3 className="font-montserrat text-4xl italic">
          Built for coders, by coders
        </h3>
        <h2 className="pt-5 font-pixel w-full text-right px-20 text-4xl flex gap-5 justify-end items-end relative">
          <Image
            src={"/arts/connector-line.png"}
            height={50}
            width={300}
            alt=""
            className="relative -top-5"
          />
          <span className="text-[#619fb8] relative text-nowrap">
            KIIT CHAPTER
            <span className="absolute top-[2px] left-[2px] text-black -z-10 blur-xs text-nowrap">
              KIIT CHAPTER
            </span>
          </span>
          {/* shadow */}
        </h2>
      </article>
    </>
  );
}
