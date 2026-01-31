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
import Script from "next/script";
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

  title: "Digital Solution Planet | AI Automation & Software Development Agency",

  description:
    "Digital Solution Planet is a leading AI and software development agency delivering intelligent automation, web & mobile apps, and scalable digital solutions for startups and businesses worldwide.",

  keywords: [
    "Digital Solution Planet",
    "AI automation agency",
    "artificial intelligence solutions",
    "software development company",
    "web application development",
    "mobile app development",
    "AI for startups",
    "business automation",
    "React development",
    "Next.js agency",
    "custom software solutions",
    "technology consulting",
    "digital solution",
    "tech company in abuja",
    "best it company in nigeria",
    "top it company in abuja",
    "best tech company in abuja",
    "best it company in Nigeria",
    "digital solutions",
    "digitalsolutionplanet",
    "learn ai in abuja",
  ],

  authors: [
    { name: "Digital Solution Planet", url: "https://digitalsolutionplanet.com/" },
  ],

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "Digital Solution Planet | AI Automation & Digital Innovation",
    description:
      "We help startups and businesses grow with AI-powered automation, modern software development, and smart digital solutions tailored for scale.",
    url: "https://digitalsolutionplanet.com/",
    siteName: "Digital Solution Planet",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Solution Planet Logo",
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

        <Script id="tawk-to-chat" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/697e02ccaf2e521c364a98ff/1jga3ls83';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
