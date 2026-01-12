 
import PageBanner from "@/components/Common/PageBanner";
import WishlistTable from "@/components/Wishlist/WishlistTable";

export default function Wishlist() {
  return (
    <>
      <PageBanner pageTitle="Wishlist" />

      <WishlistTable />
    </>
  );
}
