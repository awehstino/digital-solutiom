 
import BlogsGrid from "@/components/Blogs/BlogsGrid";
import PageBanner from "@/components/Common/PageBanner"; 

export default function Blogs() {
  return (
    <>
      <PageBanner pageTitle="Blogs" />

      <BlogsGrid />
    </>
  );
}
