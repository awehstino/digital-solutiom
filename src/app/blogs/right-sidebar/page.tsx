import WithRightSidebar from "@/components/Blogs/WithRightSidebar";
import PageBanner from "@/components/Common/PageBanner";

export default function BlogsLeftSidebar() {
  return (
    <>
      <PageBanner pageTitle="Blogs" />

      <WithRightSidebar />
    </>
  );
}
