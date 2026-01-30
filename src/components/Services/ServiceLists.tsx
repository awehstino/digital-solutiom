"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Define service data structure
interface Service {
  id: number;
  title: string;
  icon: string;
  link: string;
}

const ServiceLists: React.FC = () => {
  // Sample service data - replace with your actual data source
  const servicesData: Service[] = [
    {
      id: 1,
      title: "AI CALL RECEPTIONIST",
      icon: "/images/services/service-icon-1.svg",
      link: "/services/details",
    },
    {
      id: 2,
      title: "WEBSITE DESIGN & MANAGEMENT",
      icon: "/images/services/service-icon-2.svg",
      link: "/services/details",
    },
    {
      id: 3,
      title: "BUSINESS AUTOMATION",
      icon: "/images/services/service-icon-3.svg",
      link: "/services/details",
    },
   
    {
      id: 6,
      title: "DIGITAL STRATEGY & CONSULTING",
      icon: "/images/services/service-icon-6.svg",
      link: "/services/details",
    },
    {
      id: 7,
      title: "TECH & DIGITAL CAREER TRAINING",
      icon: "/images/services/service-icon-7.svg",
      link: "/services/details",
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
  const currentServices = servicesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

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
          <div className="col-xl-8 col-md-10 text-center">
            <span className="section-subtitle style-two d-inline-block text_primary fw-bold fs-14 ls-15 mb-12">
              SERVICES
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5">
              Collaborative Robots (Cobots) for Safe Human-Machine Interaction
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {currentServices.map((service) => (
            <div key={service.id} className="col-xxl-3 col-lg-4 col-md-6">
              <div className="service-card style-four position-relative z-1 overflow-hidden text-center round-10 mb-45 transition">
               
                <h3 className="fs-20 fw-semibold">
                  <Link
                    href={service.link}
                    className="text-black link-hover-white transition"
                  >
                    {service.title}
                  </Link>
                </h3>

                <Image
                  src={service.icon}
                  alt={service.title}
                  width={138}
                  height={118}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="service-icon transition d-block mx-auto"
                />

                <Link
                  href={service.link}
                  className="link style-two fw-semibold"
                >
                  Read More<i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there are more than 8 items (more than one page) */}
        {servicesData.length > itemsPerPage && (
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
                width={17}
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

export default ServiceLists;
