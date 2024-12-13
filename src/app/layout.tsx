"use client";
import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../app/styles/style.css";
import "../app/styles/responsive.css";

import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import Whatsapp from "@/components/Layouts/Whatsapp";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Head from "next/head";

// For all body text font

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// For all heading font
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// export const metadata = {
//   title: "HKI Media",
//   description: "HKI Media",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      offset: 0, // Jab section viewport ke bilkul top pe aaye, tab animation start ho
      duration: 1000, // Animation ki duration
      once: true, // Animation sirf ek baar chalegi
      easing: "ease-in-out",
    });
  }, []);
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={"HKI Media"} />
        <title>{"HKI Media"}</title>
      </Head>
      <body className={`${open_sans.variable} ${oswald.variable}`}>
        <Navbar />

        {children}

        <Footer />

        <GoTop />
        <Whatsapp />
      </body>
    </html>
  );
}
