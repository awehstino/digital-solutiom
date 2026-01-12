"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Services: React.FC = () => {
  // Dynamic data for services
  const servicesData = [
    {
      id: 1,
      title: "AI-Powered Predictive Maintenance",
      icon: "/images/services/service-box-1.png",
      link: "/services/details",
    },
    {
      id: 2,
      title: "Industrial Robotics Automation",
      icon: "/images/services/service-box-2.png",
      link: "/services/details",
    },
    {
      id: 3,
      title: "Smart Warehouse & Logistics Systems",
      icon: "/images/services/service-box-3.png",
      link: "/services/details",
    },
    {
      id: 4,
      title: "Quality Inspection Systems",
      icon: "/images/services/service-box-4.png",
      link: "/services/details",
    },
    {
      id: 5,
      title: "AI-Powered Predictive Maintenance",
      icon: "/images/services/service-box-1.png",
      link: "/services/details",
    },
  ];

  // Function to get background color based on service id
  const getBgColor = (id: number) => {
    switch (id) {
      case 1:
        return "#F5F6ED";
      case 2:
        return "rgba(99,102,241,0.1)";
      case 3:
        return "#FFEFFE";
      case 4:
        return "#FDF8E9";
      case 5:
        return "#F5F6ED";
      case 6:
        return "#F5F6ED";
      case 7:
        return "rgba(99,102,241,0.1)";
      case 8:
        return "#FFEFFE";
      case 9:
        return "#FDF8E9";
      case 10:
        return "#F5F6ED";
      default:
        return "#F5F6ED"; // Default color
    }
  };

  return (
    <>
      <div className="container pt-130">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <span className="d-block fs-14 fw-bold ls-15 text_primary mb-12">
              SERVICES
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-40">
              Collaborative Robots (Cobots) For Safe Human-Machine Interaction
            </h2>
          </div>
        </div>
      </div>

      <div className="service-slider-wrap position-relative pb-130">
        <div className="container style-one">
          <Swiper
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 2500,
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
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="service-slider-one"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div
                  className="service-card style-three d-flex flex-column align-items-center justify-content-between text-center position-relative z-1 round-5"
                  style={{ backgroundColor: getBgColor(service.id) }}
                >
                  <Image
                    src="/images/services/service-card-shape-1.png"
                    alt="Shape"
                    width={36}
                    height={38}
                    className="service-shape-one position-absolute top-0 end-0 trasnition"
                  />
                  <Image
                    src="/images/services/service-card-shape-2.png"
                    alt="Shape"
                    width={51}
                    height={54}
                    className="service-shape-two position-absolute bottom-0 start-0 trasnition"
                  />
                  <h3 className="fs-20 fw-semibold">
                    <Link
                      href={service.link}
                      className="text-title link-hover-primary trasnition"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <div className="service-icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={122}
                      height={122}
                      className="service-img d-block mx-auto"
                    />
                  </div>
                  <Link
                    href={service.link}
                    className="link style-two fw-semibold"
                  >
                    Read More<i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
