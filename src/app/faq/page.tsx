import Brands from "@/components/Common/Brands";
import Integrations from "@/components/Common/Integrations";
import PageBanner from "@/components/Common/PageBanner";
import FaqContent from "@/components/Faq/FaqContent";
import MovingText from "@/components/Faq/MovingText";

export default function Testimonials() {
  return (
    <>
      <PageBanner pageTitle="FAQ" />

      <FaqContent />

      <MovingText />

      <Integrations />

      <Brands />
    </>
  );
}
