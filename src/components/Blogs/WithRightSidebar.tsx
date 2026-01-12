"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const WithRightSidebar: React.FC = () => {
  // Dynamic blog data
  const blogsData = [
    {
      id: 1,
      imageUrl: "/images/blog/blog-10.jpg",
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
      date: "15 Aug, 2025",
      title: "Machine Learning Applications In Modern Healthcare",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 3,
      imageUrl: "/images/blog/blog-11.jpg",
      category: "AI Solution",
      author: "Admin",
      date: "18 Aug, 2025",
      title: "The Evolution Of Natural Language Processing",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 4,
      imageUrl: "/images/blog/blog-12.jpg",
      category: "Robotics",
      author: "Admin",
      date: "22 Aug, 2025",
      title: "Computer Vision Transforming Retail Experiences",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 5,
      imageUrl: "/images/blog/blog-13.jpg",
      category: "Technology",
      author: "Admin",
      date: "25 Aug, 2025",
      title: "Ethical Considerations In AI Development",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 6,
      imageUrl: "/images/blog/blog-14.jpg",
      category: "Startup",
      author: "Admin",
      date: "28 Aug, 2025",
      title: "Building Scalable AI Infrastructure For Enterprises",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 7,
      imageUrl: "/images/blog/blog-2.jpg",
      category: "Technology",
      author: "Admin",
      date: "15 Aug, 2025",
      title: "Machine Learning Applications In Modern Healthcare",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 8,
      imageUrl: "/images/blog/blog-11.jpg",
      category: "AI Solution",
      author: "Admin",
      date: "18 Aug, 2025",
      title: "The Evolution Of Natural Language Processing",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
    {
      id: 9,
      imageUrl: "/images/blog/blog-12.jpg",
      category: "Robotics",
      author: "Admin",
      date: "22 Aug, 2025",
      title: "Computer Vision Transforming Retail Experiences",
      postUrl: "/blogs/details",
      categoryUrl: "/blogs/category",
      authorUrl: "/blogs/author",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6; // Number of items per page

  // Ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const totalPages: number = Math.ceil(blogsData.length / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = blogsData.slice(indexOfFirstItem, indexOfLastItem);

  // Determine if pagination should be shown
  const showPagination = blogsData.length > itemsPerPage;

  // Scroll to top when page changes
  useEffect(() => {
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div ref={containerRef} className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-8">
            <div className="row justify-content-center">
              {currentItems.map((blog) => (
                <div key={blog.id} className="col-xl-6 col-md-6">
                  <div className="blog-card style-one img-hover-wrap round-10 mb-30">
                    <div className="blog-img position-relative img-hover overflow-hidden round-10">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={570}
                        height={400}
                        className="transition round-10"
                      />
                    </div>
                    <div className="blog-info">
                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <Link
                          className="blog-category fs-15 fw-medium d-inline-block round-oval"
                          href={blog.categoryUrl}
                        >
                          {blog.category}
                        </Link>
                        <ul className="blog-metainfo list-unstyled">
                          <li>
                            By <Link href={blog.authorUrl}>{blog.author}</Link>
                          </li>
                          <li>{blog.date}</li>
                        </ul>
                      </div>
                      <h3 className="fs-20 fw-semibold">
                        <Link
                          href={blog.postUrl}
                          className="text-black link-hover-primary transition"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <Link
                        href={blog.postUrl}
                        className="link style-two fw-semibold"
                      >
                        Read More<i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination - only show if there are more items than itemsPerPage */}
            {showPagination && (
              <div className="pagination-area d-flex align-items-center justify-content-center mt-xl-4">
                <button
                  type="button"
                  className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <Image
                    src="/images/icons/left-arrow-blue.svg"
                    alt="Icon"
                    width={17}
                    height={16}
                  />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      className={`page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle ${
                        currentPage === pageNumber ? "current" : ""
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                      aria-current={
                        currentPage === pageNumber ? "page" : undefined
                      }
                    >
                      {pageNumber.toString().padStart(2, "0")}
                    </button>
                  )
                )}

                <button
                  type="button"
                  className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <Image
                    src="/images/icons/right-arrow-blue-2.svg"
                    alt="Icon"
                    width={17}
                    height={16}
                  />
                </button>
              </div>
            )}
          </div>

          <div className="col-xl-4 ps-xxl-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRightSidebar;
