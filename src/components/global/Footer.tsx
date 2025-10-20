import Image from "next/image";

const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="shadow-2xl border border-gray-400/10 bg-gray-400/10 rounded-4xl backdrop-filter backdrop-blur-xs bg-opacity-20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* logo */}
            <Image
              src="/icons/logo.png"
              alt="AlgoZenith"
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <div className="font-pixel text-lg bg-gradient-to-b from-[#d4adcd] to-[#c1127e] bg-clip-text text-transparent">
                AlgoZenith - KIIT Chapter
              </div>
              <div className="text-xs text-gray-300">
                Built for coders, by coders
              </div>
            </div>
          </div>

          {/*<nav className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:scale-105 transition-transform text-gray-100/90"
              >
                {item.name}
              </a>
            ))}
          </nav>*/}

          <div className="text-center md:text-right">
            <div className="text-sm text-gray-300">
              {/*Contact:{" "}
              <a href="mailto:algozenith@kiit.ac.in" className="underline">
                algozenith@kiit.ac.in
              </a>*/}
            </div>
            <div className="text-xs text-gray-400 mt-2">
              © {new Date().getFullYear()} AlgoZenith KIIT Chapter. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
