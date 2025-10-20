"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";

const Navbar = () => {
  const [navitems, setNavitems] = useState([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    //{ name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    //{ name: "Gallery", href: "/gallery" },
  ]);

  // state to track whether navbar has folded due to scroll
  const [collapsed, setCollapsed] = useState(false);
  // when collapsed, menuOpen toggles the expanded menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY);

      // fold navbar after user scrolls down 80px (tweak value as needed)
      setCollapsed(window.scrollY > 60);
      // close menu when user scrolls
      if (window.scrollY > 60) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // outer wrapper stays fixed; use transition on padding/height
    <div>
      <motion.div
        className={`fixed top-0 left-0 font-pixel z-20`}
        initial={{ width: collapsed ? "fit-content" : "100%" }}
        animate={{ width: collapsed ? "fit-content" : "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div className="p-10 hidden lg:block">
          <nav className="shadow-2xl border border-gray-400/10 flex items-center justify-between w-full px-10 py-4 bg-gray-400/10 rounded-full backdrop-filter backdrop-blur-xs bg-opacity-20">
            <Link href={"/"} className="flex gap-5 items-center relative">
              <Image
                src={"/icons/logo.png"}
                height={50}
                width={50}
                alt=""
                className="drop-shadow-2xl "
              />
              {collapsed ? "" : <span className="">ALGOZENITH</span>}
            </Link>
            <AnimatePresence>
              {collapsed ? (
                <motion.span
                  key={"collapsed"}
                  initial={{ width: "" }}
                  className="text-2xl cursor-pointer pl-10 py-2 pr-0 hover:scale-110 transition-all duration-300"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {">"}
                </motion.span>
              ) : (
                <motion.div key={"expanded"} className="flex gap-14">
                  {navitems.length > 0 &&
                    navitems.map((item, index) => {
                      return (
                        <Link key={index} href={item.href}>
                          {item.name}
                        </Link>
                      );
                    })}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      </motion.div>

      <div className="lg:hidden fixed top-0 left-0 font-pixel z-20 w-full">
        <motion.div className="lg:hidden p-5">
          <nav className="shadow-2xl border border-gray-400/10 flex items-center justify-between w-full px-5 py-4 bg-gray-400/10 rounded-full backdrop-filter backdrop-blur-xs bg-opacity-20">
            <Link href={"/"} className="flex gap-5 items-center">
              <Image
                src={"/icons/logo.png"}
                height={40}
                width={40}
                alt=""
                className="drop-shadow-2xl"
              />

              <span>ALGOZENITH</span>
            </Link>

            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="rotate-90 text-2xl p-2 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              {menuOpen ? "<" : ">"}
            </button>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="shadow-2xl border border-gray-400/10 mt-3 bg-gray-400/10 backdrop-blur-sm rounded-4xl p-3"
              >
                <div className="flex flex-col gap-2">
                  {navitems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 rounded-md text-sm hover:bg-white/10 transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
