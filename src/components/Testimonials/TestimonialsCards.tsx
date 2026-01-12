"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Define testimonial data structure
interface Testimonial {
  id: number;
  title: string;
  content: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
  rating: number; // 1-5 stars
}

const TestimonialsCards: React.FC = () => {
  // Sample testimonial data - replace with your actual data source
  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      title: "Aivox's Automation Saved Us Hundreds Of Hours Every Month.",
      content:
        "We Reduced Manual Reporting Time By 80% Using Aivox's Smart Workflow Engine. It's Seamless And Powerful!",
      clientName: "Sarah Mitchel",
      clientPosition: "Operations Director at Novatech",
      clientImage: "/images/clients/client-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Aivox's Platform Feels Like An Extension Of Our Team",
      content:
        "Aivox Ai Transformed Our Workflow—automation Has Never Been This Seamless And Intelligent.",
      clientName: "Andrew Freeman",
      clientPosition: "Product Manager",
      clientImage: "/images/clients/client-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "We Finally Have A Single Source Of Truth For Our Data.",
      content:
        "The Ai Suggestions Helped Us Make Smarter, Faster Business Decisions Across All Departments.",
      clientName: "Tomasz Zielinski",
      clientPosition: "Head of BI at NextPhase",
      clientImage: "/images/clients/client-3.jpg",
      rating: 5,
    },
    {
      id: 4,
      title:
        "Fast Integration And Even Faster Aivox Exceeded Expectations.",
      content:
        "We Reduced Manual Reporting Time By 80% Using Aivox's Smart Workflow Engine. It's Seamless And Powerful!",
      clientName: "Andrew Austin",
      clientPosition: "CTO at BrightLeaf Digital",
      clientImage: "/images/clients/client-4.jpg",
      rating: 5,
    },
    {
      id: 5,
      title: "Transform Your Workflow With Ai—start Free Or Request",
      content:
        "Their Machine Learning Platform Improved Our Forecasting Accuracy Dramatically—now We Make",
      clientName: "Sophia Grant",
      clientPosition: "Co-Founder",
      clientImage: "/images/clients/client-5.jpg",
      rating: 5,
    },
    {
      id: 6,
      title: "Smart Automation That Saves Time Boosts Growth Aivox",
      content:
        "Their Deep Learning Model Accurately Predicts Customer Churn.users Monthly.",
      clientName: "Tom Richards",
      clientPosition: "Innovation Lead",
      clientImage: "/images/clients/client-6.jpg",
      rating: 5,
    },
    {
      id: 7,
      title: "Aivox's Platform Feels Like An Extension Of Our Team",
      content:
        "Aivox Ai Transformed Our Workflow—automation Has Never Been This Seamless And Intelligent.",
      clientName: "Andrew Freeman",
      clientPosition: "Product Manager",
      clientImage: "/images/clients/client-2.jpg",
      rating: 5,
    },
    {
      id: 8,
      title: "We Finally Have A Single Source Of Truth For Our Data.",
      content:
        "The Ai Suggestions Helped Us Make Smarter, Faster Business Decisions Across All Departments.",
      clientName: "Tomasz Zielinski",
      clientPosition: "Head of BI at NextPhase",
      clientImage: "/images/clients/client-3.jpg",
      rating: 5,
    },
    {
      id: 9,
      title:
        "Fast Integration And Even Faster Aivox Exceeded Expectations.",
      content:
        "We Reduced Manual Reporting Time By 80% Using Aivox's Smart Workflow Engine. It's Seamless And Powerful!",
      clientName: "Andrew Austin",
      clientPosition: "CTO at BrightLeaf Digital",
      clientImage: "/images/clients/client-4.jpg",
      rating: 5,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Reference to the container for scrolling
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonialsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  // Handle page change with scroll to top
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the component
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to render star ratings
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`ri-star${i < rating ? "-fill" : "-line"}`}></i>
    ));
  };

  return (
    <>
      <div ref={containerRef} className="container style-one ptb-130">
        <div className="row justify-content-center">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-xl-4 col-md-6">
              <div className="testimonial-card style-four position-relative z-1 text-center round-10 transition mb-35">
                <div className="br-one position-absolute top-0 start-0 w-100 h-100 z-n1"></div>
                <div className="br-two position-absolute bottom-0 start-0 w-100 h-100 z-n1"></div>
                <div
                  className="rating justify-content-center"
                  style={{ marginBottom: "15px" }}
                >
                  {renderRating(testimonial.rating)}
                </div>
                <h6 className="fw-medium text-title">{testimonial.title}</h6>
                <p className="fs-xxl-18 font-secondary text-para">
                  {testimonial.content}
                </p>
                <div className="client-img rounded-circle">
                  <Image
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    width={80}
                    height={80}
                    className="rounded-circle"
                  />
                </div>
                <div className="client-info">
                  <h5 className="position-relative fs-16 font-secondary fw-medium text-title">
                    {testimonial.clientName}
                  </h5>
                  <span className="d-block text-para">
                    {testimonial.clientPosition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there are more than 3 items (more than one page) */}
        {testimonialsData.length > itemsPerPage && (
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
                width={16}
                height={17}
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
                width={16}
                height={17}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialsCards;
