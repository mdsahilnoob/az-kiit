import Domains from "@/components/home/Domains";
import Hero from "@/components/home/Hero";
import Members from "@/components/home/Members";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-[50px]">
      <Hero />
      <Members />
      {/*<Domains />*/}
    </div>
  );
}
