import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the blog post data structure
const blogPosts = [
  {
    id: 1,
    imageUrl: "/images/blog/blog-1.jpg",
    category: "Startup",
    author: "Admin",
    date: "12 Aug, 2025",
    title: "How AI Automation Is Reshaping The Future Of Business Operations",
    postUrl: "/blogs/details",
    categoryUrl: "/blogs/category",
    authorUrl: "/blogs/author",
  },
  {
    id: 2,
    imageUrl: "/images/blog/blog-2.jpg",
    category: "Technology",
    author: "Admin",
    date: "16 Aug, 2025",
    title: "Top 7 Ways SaaS Companies Benefit From Predictive Analytics",
    postUrl: "/blogs/details",
    categoryUrl: "/blogs/category",
    authorUrl: "/blogs/author",
  },
  {
    id: 3,
    imageUrl: "/images/blog/blog-3.jpg",
    category: "Agency",
    author: "Admin",
    date: "22 Aug, 2025",
    title: "Scaling Smarter: How Startups Use AI To Accelerate Business Growth",
    postUrl: "/blogs/details",
    categoryUrl: "/blogs/category",
    authorUrl: "/blogs/author",
  },
];

const OurBlog: React.FC = () => {
  return (
    <>
      <div className="container style-one pt-130 pb-100">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-md-6 text-center px-xxl-0">
            <span
              className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-15"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Our Blog
            </span>
            <h2
              className="section-title style-one fw-medium text-center text-title mb-40"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Explore Our Blog And Stay Updated
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={post.id * 100}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="blog-card style-one img-hover-wrap round-10 mb-30">
                <div className="blog-img position-relative img-hover overflow-hidden round-10">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={570}
                    height={400}
                    className="transition round-10"
                  />
                </div>

                <div className="blog-info">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <Link
                      className="blog-category fs-15 fw-medium d-inline-block round-oval"
                      href={post.categoryUrl}
                    >
                      {post.category}
                    </Link>
                    <ul className="blog-metainfo list-unstyled">
                      <li>
                        By <Link href={post.authorUrl}>{post.author}</Link>
                      </li>
                      <li>{post.date}</li>
                    </ul>
                  </div>

                  <h3 className="fs-20 fw-semibold">
                    <Link
                      href={post.postUrl}
                      className="text-black link-hover-primary transition"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <Link
                    href={post.postUrl}
                    className="link style-two fw-semibold"
                  >
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

export default OurBlog;
