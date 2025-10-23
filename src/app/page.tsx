import Hero from "@/components/home/Hero";
import Members from "@/components/home/Members";
import EventPromotion from "@/components/home/EventPromotion";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-[50px]">
      <Hero />
      <EventPromotion />
      <Members />
      {/*<Domains />*/}
    </div>
  );
}
