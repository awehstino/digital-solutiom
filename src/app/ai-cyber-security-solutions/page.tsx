import Brands from "@/components/Common/Brands";
import AboutUs from "@/components/HomeAiCyberSecuritySolutions/AboutUs";
import BlogPost from "@/components/HomeAiCyberSecuritySolutions/BlogPost";
import Cta from "@/components/HomeAiCyberSecuritySolutions/Cta";
import DataSecurity from "@/components/Common/DataSecurity";
import Features from "@/components/HomeAiCyberSecuritySolutions/Features";
import HeroBanner from "@/components/HomeAiCyberSecuritySolutions/HeroBanner";
import PlatformsThatWeServe from "@/components/HomeAiCyberSecuritySolutions/PlatformsThatWeServe";
import PricingPlans from "@/components/HomeAiCyberSecuritySolutions/PricingPlans";
import Services from "@/components/HomeAiCyberSecuritySolutions/Services";
import WhyChooseUs from "@/components/HomeAiCyberSecuritySolutions/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <AboutUs />

      <Services />

      <DataSecurity />

      <Brands />

      <WhyChooseUs />

      <Features />

      <PricingPlans />

      <PlatformsThatWeServe />

      <Cta />

      <BlogPost />
    </>
  );
}
