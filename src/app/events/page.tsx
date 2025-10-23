import UpcomingEvents from "@/components/events/UpcomingEvents";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 pt-[100px] sm:pt-[120px] lg:pt-[130px] px-4 sm:px-6 lg:px-8">
      <UpcomingEvents />
    </div>
  );
}
