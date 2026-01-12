 
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import PageBanner from "@/components/Common/PageBanner"; 

export default function Checkout() {
  return (
    <>
      <PageBanner pageTitle="Checkout" />

      <CheckoutForm />
    </>
  );
}
