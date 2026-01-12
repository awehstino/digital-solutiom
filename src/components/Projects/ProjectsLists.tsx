"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsLists: React.FC = () => {
  // Dynamic project data
  const projectsData = [
    {
      id: 1,
      category: "AI Solution",
      image: "/images/projects/project-1.jpg",
      title: "Predictive Analytics For Healthcare",
      link: "/projects/details",
    },
    {
      id: 2,
      category: "Robotics",
      image: "/images/projects/project-2.jpg",
      title: "AI Chatbot For Customer Support",
      link: "/projects/details",
    },
    {
      id: 3,
      category: "Technology",
      image: "/images/projects/project-3.jpg",
      title: "Recommendation Engine For eCommerce",
      link: "/projects/details",
    },
    {
      id: 4,
      category: "AI Agency",
      image: "/images/projects/project-4.jpg",
      title: "Invoice Automation with NLP",
      link: "/projects/details",
    },
    {
      id: 5,
      category: "Robotics",
      image: "/images/projects/project-5.jpg",
      title: "Fraud Detection System with ML",
      link: "/projects/details",
    },
    {
      id: 6,
      category: "AI Solution",
      image: "/images/projects/project-6.jpg",
      title: "Lead Scoring System For B2B CRM",
      link: "/projects/details",
    },
    {
      id: 7,
      category: "Startup",
      image: "/images/projects/project-7.jpg",
      title: "Computer Vision For Quality Inspection",
      link: "/projects/details",
    },
    {
      id: 8,
      category: "Technology",
      image: "/images/projects/project-8.jpg",
      title: "Resume Screening Bot Or HR Automation",
      link: "/projects/details",
    },
    {
      id: 9,
      category: "Technology",
      image: "/images/projects/project-3.jpg",
      title: "Recommendation Engine For eCommerce",
      link: "/projects/details",
    },
    {
      id: 10,
      category: "AI Agency",
      image: "/images/projects/project-4.jpg",
      title: "Invoice Automation with NLP",
      link: "/project-details",
    },
    {
      id: 11,
      category: "Robotics",
      image: "/images/projects/project-5.jpg",
      title: "Fraud Detection System with ML",
      link: "/projects/details",
    },
    {
      id: 12,
      category: "AI Solution",
      image: "/images/projects/project-6.jpg",
      title: "Lead Scoring System For B2B CRM",
      link: "/projects/details",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8; // Number of items per page

  // Ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const totalPages: number = Math.ceil(projectsData.length / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = projectsData.slice(indexOfFirstItem, indexOfLastItem);

  // Determine if pagination should be shown
  const showPagination = projectsData.length > itemsPerPage;

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
      <div className="container style-one ptb-130" ref={containerRef}>
        <div className="row justify-content-center">
          {currentItems.map((project) => (
            <div key={project.id} className="col-xxl-3 col-xl-4 col-md-6">
              <div className="project-card style-two position-relative z-1 overflow-hidden img-hover-wrap round-10 mb-45">
                <span className="project-category fs-15 fw-medium bg_primary position-absolute round-oval">
                  {project.category}
                </span>
                <div className="img-hover">
                  <Image
                    src={project.image}
                    alt="project"
                    width={570}
                    height={766}
                    className="round-10 transition"
                  />
                </div>
                <div className="project-info z-1">
                  <h3 className="fs-20 fw-semibold mb-0">
                    <Link
                      href={project.link}
                      className="text-title link-hover-secondary transition"
                    >
                      {project.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - only show if there are more items than itemsPerPage */}
        {showPagination && (
          <div className="pagination-area d-flex align-items-center justify-content-center mt-xl-3">
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
                  className={`page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle ${currentPage === pageNumber ? "current" : ""
                    }`}
                  onClick={() => handlePageChange(pageNumber)}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
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
    </>
  );
};

export default ProjectsLists;
