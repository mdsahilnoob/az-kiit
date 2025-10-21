import AboutAlgozenith from "@/components/about/AboutAlgozenith";
import AboutUs from "@/components/about/AboutUs";
import ForYou from "@/components/about/ForYou";
import Padder from "@/components/global/Padder";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 pt-[130px]">
      {/*<Padder />*/}
      <AboutUs />
      <AboutAlgozenith />
      <ForYou />
    </div>
  );
}
