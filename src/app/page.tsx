import AboutUs from "@/components/HomeAISaaSPlatform/AboutUs";
import Benefits from "@/components/HomeAISaaSPlatform/Benefits";
import Cta from "@/components/HomeAISaaSPlatform/Cta";
import FlexiblePricing from "@/components/HomeAISaaSPlatform/FlexiblePricing";
import Funfact from "@/components/HomeAISaaSPlatform/Funfact";
import HeroBanner from "@/components/HomeAISaaSPlatform/HeroBanner";
import HowItWorks from "@/components/HomeAISaaSPlatform/HowItWorks";
import Integrations from "@/components/HomeAISaaSPlatform/Integrations";
import OurBlog from "@/components/HomeAISaaSPlatform/OurBlog";
import OurFeatures from "@/components/HomeAISaaSPlatform/OurFeatures";
import Testimonials from "@/components/HomeAISaaSPlatform/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <Funfact />

      <OurFeatures />

      <AboutUs />

      <HowItWorks />

      <Integrations />

      <Testimonials />

      <Benefits />

      <FlexiblePricing />

      <Cta />

      <OurBlog />
    </>
  );
}
