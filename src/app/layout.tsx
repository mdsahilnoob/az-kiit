import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Analytics } from "@vercel/analytics/next";

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`antialiased bg-[#001d2f] text-white overflow-x-hidden`}>
        <Analytics />
        <div className="bg-[url(/backgrounds/circuit.png)] bg-repeat h-full w-full fixed -z-10 top-0 left-0"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
