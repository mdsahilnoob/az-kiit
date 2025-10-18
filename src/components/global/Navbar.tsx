"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
    <motion.div
      className={`fixed top-0 left-0 font-pixel z-20`}
      initial={{ width: collapsed ? "fit-content" : "100%" }}
      animate={{ width: collapsed ? "fit-content" : "100%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div className="p-10 hidden lg:block">
        <nav className="flex items-center justify-between w-full px-10 py-4 bg-gray-400/10 rounded-full backdrop-filter backdrop-blur-xs bg-opacity-20">
          <div className="flex gap-5 items-center">
            <Image
              src={"/icons/logo.png"}
              height={50}
              width={50}
              alt=""
              className="drop-shadow-2xl "
            />
            <span>ALGOZENITH</span>
          </div>
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

      <motion.div className="lg:hidden p-10">
        <nav className="flex items-center justify-between  bg-gray-400/10 rounded-full backdrop-filter backdrop-blur-xs bg-opacity-20">
          <div className="flex gap-5 items-center">
            <Image
              src={"/icons/logo.png"}
              height={50}
              width={50}
              alt=""
              className="drop-shadow-2xl "
            />
            <span>ALGOZENITH</span>
          </div>
          {/*<AnimatePresence>
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
          </AnimatePresence>*/}
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
