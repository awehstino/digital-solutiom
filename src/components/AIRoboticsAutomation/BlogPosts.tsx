import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPosts: React.FC = () => {
  // Dynamic data for blog posts
  const blogPostsData = [
    {
      id: 1,
      image: "/images/blog/blog-8.jpg",
      category: "Robotics",
      author: "Admin",
      date: "12 Aug, 2025",
      title: "How AI Automation Is Reshaping The Future Of Business Operations",
      link: "/blogs/details",
    },
    {
      id: 2,
      image: "/images/blog/blog-9.jpg",
      category: "Technology",
      author: "Admin",
      date: "16 Aug, 2025",
      title:
        "Top 5 Benefits Of Integrating Robotics Into Your Manufacturing Line",
      link: "/blogs/details",
    },
  ];

  return (
    <>
      <div className="container pt-130 pb-100">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center px-xxl-5">
            <span className="section-subtitle style-three fs-14 fw-bold ls-15 d-inline-block text_primary mb-15">
              OUR BLOG
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5">
              Explore Our Blog And Stay Updated
            </h2>
          </div>
        </div>
        <div className="row justify-content-center gx-xxl-5">
          {blogPostsData.map((post) => (
            <div key={post.id} className="col-md-6">
              <div className="blog-card style-three d-flex flex-wrap position-relative img-hover-wrap">
                <div className="blog-img position-relative overflow-hidden img-hover round-10">
                  <Image
                    src={post.image}
                    alt="blog"
                    width={570}
                    height={667}
                    className="round-10 transition"
                  />
                </div>
                <div className="blog-info bg-white round-10">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <Link
                      className="blog-category fs-15 fw-medium d-inline-block round-oval"
                      href={post.link}
                    >
                      {post.category}
                    </Link>
                    <ul className="blog-metainfo list-unstyled">
                      <li>
                        By <Link href="/blogs/author">{post.author}</Link>
                      </li>
                      <li>{post.date}</li>
                    </ul>
                  </div>
                  <h3 className="fs-20 fw-semibold">
                    <Link
                      href={post.link}
                      className="text-black link-hover-primary transition"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <Link href={post.link} className="link style-two fw-semibold">
                    Read More<i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
