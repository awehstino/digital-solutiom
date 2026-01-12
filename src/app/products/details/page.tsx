import PageBanner from "@/components/Common/PageBanner";  
import ProductDetailsContent from "@/components/Products/ProductDetailsContent";

export default function ProductDetails() {
  return (
    <>
      <PageBanner pageTitle="Product Details" />

      <ProductDetailsContent />
    </>
  );
}
