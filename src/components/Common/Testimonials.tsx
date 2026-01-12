"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials: React.FC = () => {
  // Dynamic data for testimonials
  const testimonialsData = [
    {
      id: 1,
      quote:
        "Aivox's Robotics Integrated Flawlessly Into Our System, Boosting Output And Reducing Manual Labor Without Disrupting Our Existing Workflows.",
      clientName: "Michael Reyes",
      clientTitle: "CISO, DataTrust Corp",
      clientImage: "/images/clients/client-1.jpg",
    },
    {
      id: 2,
      quote:
        "Aivox's AI precision and speed we've used several cybersecurity platforms, but none match. Their automated response prevented a major data breach, and the compliance tools made our audits effortless.",
      clientName: "Tony Conor",
      clientTitle: "Entreprenuer",
      clientImage: "/images/clients/client-2.jpg",
    },
    {
      id: 3,
      quote:
        "Awesome AI service from Aivox platforms, but none match Aivox's AI precision and speed. Their automated response prevented a major data breach, and the compliance tools made our audits effortless.",
      clientName: "Andrew Higins",
      clientTitle: "Founder & CEO, BIMST",
      clientImage: "/images/clients/client-3.jpg",
    },
  ];

  return (
    <>
      <div className="testimonial-area style-three bg_primary position-relative overflow-hidden z-1 pt-130 pb-100">
        <Image
          src="/images/box-shape-4.png"
          alt="Shape"
          width={340}
          height={536}
          className="section-shape position-absolute top-0 end-0 z-n1"
        />
        <Image
          src="/images/box-shape-5.png"
          alt="Shape"
          width={270}
          height={516}
          className="section-shape position-absolute bottom-0 start-0 z-n1"
        />

        <div className="circle-text-wrapper position-relative">
          <div className="move-text-wrapper">
            <div className="move-text style-one overflow-hidden z-1">
              <ul className="list-unstyled mb-0">
                <li className="position-relative font-secondary">
                  OPEN NOW WHAT OUR CLIENTS SAY ABOUT US
                </li>
                <li className="position-relative font-secondary">
                  TRUSTED BY BUSINESSES AROUND THE WORLD
                </li>
                <li className="position-relative font-secondary">
                  OPEN NOW WHAT OUR CLIENTS SAY ABOUT US
                </li>
                <li className="position-relative font-secondary">
                  TRUSTED BY BUSINESSES AROUND THE WORLD
                </li>
              </ul>
            </div>
          </div>

          <div className="container style-one">
            <div className="circle-text-wrap position-relative d-flex flex-column justify-content-center align-items-center rounded-circle">
              <Image
                src="/images/trusted-clients.svg"
                alt="clients"
                width={290}
                height={290}
                className="circle-text d-lock mx-auto rotate"
              />
              <Image
                src="/images/icons/quote-2.svg"
                alt="Icon"
                width={73}
                height={67}
                className="position-absolute"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonial-slider-three"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card style-three">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-md-10">
                      <p className="font-secondary fw-medium text-white text-center">
                        <q>{testimonial.quote}</q>
                      </p>
                      <div className="client-info-wrap d-flex flex-wrap align-items-center justify-content-center">
                        <div className="client-img rounded-circle">
                          <Image
                            src={testimonial.clientImage}
                            alt={testimonial.clientName}
                            width={50}
                            height={50}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="fs-20 fw-medium text-white mb-0">
                            {testimonial.clientName}
                          </h5>
                          <span>{testimonial.clientTitle}</span>
                        </div>
                      </div>
                    </div>
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
