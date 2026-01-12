import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AnimatedText from "@/components/AboutUs/AnimatedText";
import OurMission from "@/components/AboutUs/OurMission";
import Testimonials from "@/components/AboutUs/Testimonials";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import Brands from "@/components/Common/Brands";
import DataSecurity from "@/components/Common/DataSecurity";
import PageBanner from "@/components/Common/PageBanner";
import TeamMember from "@/components/Common/TeamMember";

export default function AboutUs() {
  return (
    <>
      <PageBanner pageTitle="About Us" />

      <AboutUsContent />

      <OurMission />

      <AnimatedText />

      <WhyChooseUs />

      <Testimonials />

      <DataSecurity />

      <Brands />

      <div className="separator" />

      <TeamMember />
    </>
  );
}
