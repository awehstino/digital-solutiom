"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Define job data structure
interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  image: string;
  link: string;
}

const CareersLists: React.FC = () => {
  // Sample job data - replace with your actual data source
  const jobsData: Job[] = [
    {
      id: 1,
      title: "Machine Learning Engineer",
      location: "San Francisco, USA",
      type: "Full-Time",
      salary: "30K",
      image: "/images/job/job-1.jpg",
      link: "/careers/details",
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Toronto, Canada",
      type: "Full-Time",
      salary: "35K",
      image: "/images/job/job-2.jpg",
      link: "/careers/details",
    },
    {
      id: 3,
      title: "AI Research Intern",
      location: "Berlin, Germany",
      type: "Full-Time",
      salary: "50K",
      image: "/images/job/job-3.jpg",
      link: "/careers/details",
    },
    {
      id: 4,
      title: "Manager (AI Solutions)",
      location: "Zone, Singapore",
      type: "Full-Time",
      salary: "40k",
      image: "/images/job/job-4.jpg",
      link: "/careers/details",
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Amsterdam, Netherlands",
      type: "Full-Time",
      salary: "55K",
      image: "/images/job/job-5.jpg",
      link: "/careers/details",
    },
    {
      id: 6,
      title: "AI Solutions Architect",
      location: "Sydney, Australia",
      type: "Full-Time",
      salary: "60K",
      image: "/images/job/job-6.jpg",
      link: "/careers/details",
    },
    {
      id: 7,
      title: "NLP Engineer",
      location: "Stockholm, Sweden",
      type: "Full-Time",
      salary: "65K",
      image: "/images/job/job-7.jpg",
      link: "/careers/details",
    },
    {
      id: 8,
      title: "Computer Vision Engineer",
      location: "South Africa",
      type: "Full-Time",
      salary: "70K",
      image: "/images/job/job-8.jpg",
      link: "/careers/details",
    },
    {
      id: 9,
      title: "AI Research Intern",
      location: "Berlin, Germany",
      type: "Full-Time",
      salary: "50K",
      image: "/images/job/job-3.jpg",
      link: "/careers/details",
    },
    {
      id: 10,
      title: "Manager (AI Solutions)",
      location: "Zone, Singapore",
      type: "Full-Time",
      salary: "40k",
      image: "/images/job/job-4.jpg",
      link: "/careers/details",
    },
    {
      id: 11,
      title: "Data Scientist",
      location: "Amsterdam, Netherlands",
      type: "Full-Time",
      salary: "55K",
      image: "/images/job/job-5.jpg",
      link: "/careers/details",
    },
    {
      id: 12,
      title: "AI Solutions Architect",
      location: "Sydney, Australia",
      type: "Full-Time",
      salary: "60K",
      image: "/images/job/job-6.jpg",
      link: "/careers/details",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Reference to the container for scrolling
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(jobsData.length / itemsPerPage);

  // Handle page change with scroll to top
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the component
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={containerRef} className="container style-one ptb-130">
        <div className="row justify-content-center">
          {currentJobs.map((job) => (
            <div key={job.id} className="col-xxl-3 col-xl-4 col-md-6">
              <div className="job-card style-one img-hover-zoom round-10 mb-30">
                <div className="job-img position-relative overflow-hidden img-zoom round-10">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={570}
                    height={438}
                    className="position-absolute top-0 start-0 w-100 h-100 round-10 transition"
                  />
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={570}
                    height={438}
                    className="round-10 transition"
                  />
                  <div className="job-salary fs-15 text-title bg_secondary position-absolute">
                    Salary: <span className="fw-bold">{job.salary}</span>
                  </div>
                </div>
                <div className="job-info">
                  <h3 className="fs-19 fw-semibold">
                    <Link
                      href={job.link}
                      className="text-title link-hover-primary transition"
                    >
                      {job.title}
                    </Link>
                  </h3>
                  <ul className="list-unstyled mb-15">
                    <li>
                      <span className="fw-medium text-black me-1">
                        Location:
                      </span>
                      {job.location}
                    </li>
                    <li>
                      <span className="fw-medium text-black me-1">Type:</span>{" "}
                      {job.type}
                    </li>
                  </ul>
                  <Link href={job.link} className="link style-two fw-semibold">
                    Apply Now<i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there are more than 4 items (more than one page) */}
        {jobsData.length > itemsPerPage && (
          <div className="pagination-area d-flex align-items-center justify-content-center mt-xl-4">
            <button
              type="button"
              className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <Image
                src="/images/icons/left-arrow-blue.svg"
                alt="Icon"
                width={18}
                height={16}
              />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  className={`page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle ${
                    currentPage === number ? "current" : ""
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number.toString().padStart(2, "0")}
                </button>
              )
            )}
            
            <button
              type="button"
              className="page-numbers d-flex flex-column align-items-center justify-content-center rounded-circle"
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              <Image
                src="/images/icons/right-arrow-blue-2.svg"
                alt="Icon"
                width={18}
                height={16}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CareersLists;
