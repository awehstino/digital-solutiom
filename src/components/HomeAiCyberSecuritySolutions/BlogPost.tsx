import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPost: React.FC = () => {
  // Dynamic data for blog posts
  const blogPosts = [
    {
      id: 1,
      imageSrc: "/images/blog/blog-4.jpg",
      author: "Admin",
      authorLink: "/blogs/author",
      date: "12 Aug, 2025",
      title: "How AI Is Revolutionizing Build Cybersecurity Defense Systems",
      link: "/blogs/details/",
    },
    {
      id: 2,
      imageSrc: "/images/blog/blog-5.jpg",
      author: "Admin",
      authorLink: "/blogs/author",
      date: "16 Aug, 2025",
      title:
        "Top 10 Cyber Security Threats Every Business Should Watch In 2025",
      link: "/blogs/details/",
    },
    {
      id: 3,
      imageSrc: "/images/blog/blog-6.jpg",
      author: "Admin",
      authorLink: "/blogs/author",
      date: "22 Aug, 2025",
      title: "Cloud Security Best Practices for Multi-Platform Environments",
      link: "/blogs/details/",
    },
    {
      id: 4,
      imageSrc: "/images/blog/blog-7.jpg",
      author: "Admin",
      authorLink: "/blogs/author",
      date: "25 Aug, 2025",
      title: "The Benefits Of Zero Trust Architecture For Modern Enterprises",
      link: "/blogs/details/",
    },
  ];

  return (
    <>
      <div className="container style-one pt-130 pb-100">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-md-6 text-center px-xxl-0">
            <span
              className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src="/images/icons/lock.svg"
                alt="Icon"
                width={12}
                height={18}
              />
              BLOG & NEWS
            </span>
            <h2
              className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Expert Tips And Trends In Cloud Security
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={post.id * 100}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="blog-card style-two img-hover-wrap round-10 mb-30">
                <div className="blog-img position-relative img-hover overflow-hidden round-10">
                  <Link href={post.link} className="d-block">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      width={570}
                      height={450}
                      className="transition round-10"
                    />
                  </Link>
                </div>
                <div className="blog-info">
                  <ul className="blog-metainfo list-unstyled">
                    <li>
                      By <Link href={post.authorLink}>{post.author}</Link>
                    </li>
                    <li>{post.date}</li>
                  </ul>
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

export default BlogPost;
