import AboutUs from "@/components/AIRoboticsAutomation/AboutUs";
import BlogPosts from "@/components/AIRoboticsAutomation/BlogPosts";
import CallToAction from "@/components/AIRoboticsAutomation/CallToAction";
import Features from "@/components/AIRoboticsAutomation/Features";
import FunFacts from "@/components/AIRoboticsAutomation/FunFacts";
import HeroBanner from "@/components/AIRoboticsAutomation/HeroBanner";
import HowItWorks from "@/components/AIRoboticsAutomation/HowItWorks";
import Projects from "@/components/AIRoboticsAutomation/Projects";
import Services from "@/components/AIRoboticsAutomation/Services";
import WhyChooseUs from "@/components/AIRoboticsAutomation/WhyChooseUs";
import Brands from "@/components/Common/Brands";
import TeamMember from "@/components/Common/TeamMember";
import Testimonials from "@/components/Common/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <FunFacts />

      <Services />

      <AboutUs />

      <HowItWorks />

      <WhyChooseUs />

      <Brands />

      <div className="separator" />

      <TeamMember />

      <Testimonials />

      <Projects />

      <Features />

      <CallToAction />

      <BlogPosts />
    </>
  );
}
