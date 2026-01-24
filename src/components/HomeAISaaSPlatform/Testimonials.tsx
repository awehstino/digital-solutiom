"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials: React.FC = () => {
  // Dynamic data for testimonials
  const testimonials = [
    {
      id: 1,
      title: "Digital Solution Automation Saved Us Hundreds Of Hours Every Month.",
      description:
        "E-commerce setup + AI content tools doubled sales first month, now 3x growth. They handle the tech, I focus on business. Worth every kobo!",
      clientName: "Michael James",
      clientPosition: "Entreprenuer",
      clientImage: "/images/clients/client-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Aivox's Platform Feels Like An Extension Of Our Team",
      description:
        "Aivox Ai Transformed Our Workflow—automation Has Never Been This Seamless And Intelligent.",
      clientName: "Andrew Freeman",
      clientPosition: "Product Manager",
      clientImage: "/images/clients/client-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "We Finally Have A Single Source Of Truth For Our Data.",
      description:
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
      description:
        "We Reduced Manual Reporting Time By 80% Using Aivox's Smart Workflow Engine. It's Seamless And Powerful!",
      clientName: "Andrew Austin",
      clientPosition: "CTO at BrightLeaf Digital",
      clientImage: "/images/clients/client-4.jpg",
      rating: 5,
    },
    {
      id: 5,
      title: "Transform Your Workflow With Ai—start Free Or Request",
      description:
        "Their Machine Learning Platform Improved Our Forecasting Accuracy Dramatically—now We Make",
      clientName: "Sophia Grant",
      clientPosition: "Co-Founder",
      clientImage: "/images/clients/client-5.jpg",
      rating: 4,
    },
    {
      id: 6,
      title: "Smart Automation That Saves Time Boosts Growth Aivox",
      description:
        "Their Deep Learning Model Accurately Predicts Customer Churn.users Monthly.",
      clientName: "Tom Richards",
      clientPosition: "Innovation Lead",
      clientImage: "/images/clients/client-6.jpg",
      rating: 4,
    },
  ];

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(
          <li key={i}>
            <i className="ri-star-fill"></i>
          </li>
        );
      } else {
        stars.push(
          <li key={i}>
            <i className="ri-star-line"></i>
          </li>
        );
      }
    }

    return stars;
  };

  return (
    <>
      <div className="testimonial-area style-one position-relative z-1 ptb-130">
        <div className="container position-relative z-1">
          <div className="row align-items-center mb-40">
            <div className="col-xxl-5 col-xl-6 mb-sm-20">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-18"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Testimonials
              </span>
              <h2
                className="section-title style-one fw-medium text-white mb-0"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                What Our Client Says About Aivox AI
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid style-one">
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoHeight={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3.1,
              },
              1600: {
                slidesPerView: 3.65,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-slider-one"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card style-one position-relative z-1 text-center round-10 transition">
                  <div className="br-one position-absolute top-0 start-0 w-100 h-100 z-n1"></div>
                  <div className="br-two position-absolute bottom-0 start-0 w-100 h-100 z-n1"></div>

                  <ul className="rating list-unstyled d-flex justify-content-center gap-1">
                    {renderRating(testimonial.rating)}
                  </ul>
                  <h6 className="fw-medium text-title">{testimonial.title}</h6>
                  <p className="fs-xxl-18 font-secondary text-white">
                    {testimonial.description}
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
                    <h5 className="position-relative fs-16 font-secondary fw-medium text-white">
                      {testimonial.clientName}
                    </h5>
                    <span className="d-block text-offwhite">
                      {testimonial.clientPosition}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
