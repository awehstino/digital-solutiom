import BlogDetailsContent from "@/components/Blogs/BlogDetailsContent";
import PageBanner from "@/components/Common/PageBanner";

export default function BlogsLeftSidebar() {
  return (
    <>
      <PageBanner pageTitle="Blog Details" />

      <BlogDetailsContent />
    </>
  );
}
