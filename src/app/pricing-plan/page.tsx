import Brands from "@/components/Common/Brands";
import PageBanner from "@/components/Common/PageBanner";
import PricingPlanTable from "@/components/PricingPlan/PricingPlanTable";

export default function Testimonials() {
  return (
    <>
      <PageBanner pageTitle="Pricing Plan" />

      <PricingPlanTable />

      <div className="separator" />

      <Brands />
    </>
  );
}
