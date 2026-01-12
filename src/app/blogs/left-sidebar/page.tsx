 
import WithLeftSidebar from "@/components/Blogs/WithLeftSidebar";
import PageBanner from "@/components/Common/PageBanner"; 

export default function BlogsLeftSidebar() {
  return (
    <>
      <PageBanner pageTitle="Blogs" />

      <WithLeftSidebar />
    </>
  );
}
