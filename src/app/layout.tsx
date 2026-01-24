import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals CSS
import "../../styles/header.css";
import "../../styles/footer.css";
import "../../styles/style.css";
import "../../styles/responsive.css"; 
import "../../styles/dark-theme.css"; 

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import AosAnimation from "@/components/Layout/AosAnimation";
import GoTop from "@/components/Layout/GoTop";
import ThemeSwitcherMode from "@/components/Layout/ThemeSwitcherMode";
import CustomCursor from "@/components/Layout/CustomCursor";
import Footer from "@/components/Layout/Footer";
import NavbarConditional from "@/components/Layout/NavbarConditional"; 

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Solution - AI Startup Next.js Template",
  description: "Digital Solution is a cutting-edge technology and AI startup template built with Next.js.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}`}>
        <NavbarConditional /> {/* Replaced Navbar/NavbarTwo with conditional component */}

        {children}

         <Footer />

        <AosAnimation />

        <ThemeSwitcherMode />

        <CustomCursor /> 

        <GoTop />
      </body>
    </html>
  );
}
