import PageBanner from "@/components/Common/PageBanner";
import ContactUsForm from "../../components/ContactUs/ContactUsForm";
import GoogleMap from "@/components/ContactUs/GoogleMap";

export default function ContactUs() {
  return (
    <>
      <PageBanner pageTitle="Contact Us" />

      <ContactUsForm />

      <GoogleMap />
    </>
  );
}
