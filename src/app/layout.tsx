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

export const metadata: Metadata = {
  title: "HKI Media",
  description: "HKI Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
