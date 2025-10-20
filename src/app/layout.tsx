import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "AlgoZenith - KIIT Chapter",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`antialiased bg-[#001d2f] text-white overflow-x-hidden`}>
        <div className="bg-[url(/backgrounds/circuit.png)] bg-repeat h-full w-full fixed -z-10 top-0 left-0"></div>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
