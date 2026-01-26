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

import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://digitalsolutionplanet.com"),
  title: "Digital Solution ",
  description: "Digital Solution is a cutting-edge technology ",
  keywords: ["AI", "Startup", "Technology", "React"],
  authors: [
    { name: "Digital Solution", url: "https://digitalsolutionplanet.com/" },
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Digital Solution - ",
    description:
      "Digital Solution is a pioneering AI agency delivering intelligent automation",
    url: "https://digitalsolutionplanet.com/",
    siteName: "Digital Solution",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
