import CartTable from "@/components/Cart/CartTable";
import PageBanner from "@/components/Common/PageBanner";

export default function Cart() {
  return (
    <>
      <PageBanner pageTitle="Cart" />

      <CartTable />
    </>
  );
}
