import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  // Dynamic data for categories
  const categories = [
    { name: "News", link: "/blogs/category" },
    { name: "Robotics", link: "/blogs/category" },
    { name: "Machine Learning", link: "/blogs/category" },
    { name: "Agriculture", link: "/blogs/category" },
    { name: "Real Time Prediction", link: "/blogs/category" },
    { name: "Module Evolution", link: "/blogs/category" },
  ];

  // Dynamic data for recent posts
  const recentPosts = [
    {
      id: 1,
      image: "/images/blog/post-thumb-1.jpg",
      date: "19 Aug, 2025",
      title: "How Predictive AI Is Transforming Decision-Making In Business",
      link: "/blogs/details",
    },
    {
      id: 2,
      image: "/images/blog/post-thumb-2.jpg",
      date: "16 Aug, 2025",
      title: "Building Trust In AI: Transparency, Accuracy & Accountability",
      link: "/blogs/details",
    },
    {
      id: 3,
      image: "/images/blog/post-thumb-3.jpg",
      date: "22 Aug, 2025",
      title: "From Data To Action: The Power Of Machine Learning",
      link: "/blogs/details",
    },
  ];

  // Dynamic data for tags
  const tags = [
    { name: "AI News", link: "/blogs/tags" },
    { name: "Analysis", link: "/blogs/tags" },
    { name: "ChatGPT", link: "/blogs/tags" },
    { name: "Neural", link: "/blogs/tags" },
    { name: "AI Model", link: "/blogs/tags" },
    { name: "Marketing", link: "/blogs/tags" },
  ];

  return (
    <>
      <aside className="sidebar mt-lg-50">
        <form className="search-widget position-relative mb-30">
          <input
            type="search"
            placeholder="Search"
            className="fw-medium w-100 ht-56 bg_primary border-0 round-5 text-white outline-0"
          />
          <button className="position-absolute bg-transparent position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center border-0">
            <Image
              src="/images/icons/search-white.svg"
              alt="Icon"
              width={19}
              height={19}
            />
          </button>
        </form>

        {/* Categories */}
        <div className="sidebar-widget category-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Categories
          </h3>
          <ul className="list-unstyled mb-0">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={category.link} className="position-relative">
                  {category.name}{" "}
                  <Image
                    src="/images/icons/right-arrow-blue.svg"
                    alt="Icon"
                    width={16}
                    height={12}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="sidebar-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Recent Posts
          </h3>
          <div className="rp-post-wrap">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="rp-post-card d-flex flex-wrap align-items-center"
              >
                <div className="rp-post-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={90}
                    height={90}
                  />
                </div>
                <div className="rp-post-info">
                  <span className="fs-15 fw-medium text_primary hover-text-title d-block mb-1">
                    {post.date}
                  </span>
                  <h5 className="fs-15 fw-semibold mb-0 pe-xxl-4">
                    <Link
                      href={post.link}
                      className="text-black link-hover-primary transition"
                    >
                      {post.title}
                    </Link>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="sidebar-widget tags-widget round-5">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-22">
            Tags
          </h3>
          <ul className="list-unstyled mb-0">
            {tags.map((tag, index) => (
              <li key={index}>
                <Link href={tag.link}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
