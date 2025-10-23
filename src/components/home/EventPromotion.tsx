"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventPromotion() {
  const router = useRouter();

  const handleEventClick = () => {
    router.push('/events');
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 my-8">
        <div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#c1127e] via-[#d4adcd] to-[#619fb8] p-1 cursor-pointer group transform transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
          onClick={handleEventClick}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
            <div className="relative bg-black rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden">

              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f2ff8c]/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#619fb8]/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#c1127e]/20 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
         
              <div className="relative w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="/event_posters/headstart.jpg"
                  alt="Headstart Event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-pixel text-lg md:text-xl text-[#f2ff8c] mb-2 animate-bounce">
                  🚀 UPCOMING EVENT 🚀
                </h3>
                <p className="font-pridi text-white text-sm md:text-base mb-3">
                  Don&apos;t miss our exciting <span className="text-[#d4adcd] font-bold">HEADSTART</span> event!
                  Join us for an amazing experience || 25th Oct
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-montserrat text-[#619fb8] text-sm font-bold">Click to explore →</span>
                  <div className="w-2 h-2 bg-[#f2ff8c] rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-r from-[#f2ff8c] to-[#d4adcd] text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg transform transition-all duration-200 hover:scale-110 font-pixel text-sm">
                  VIEW DETAILS
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
}