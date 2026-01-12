"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

// Define the testimonial data structure
type Testimonial = {
  id: number;
  quote: string;
  clientName: string;
  clientTitle: string;
  clientImage: string;
};

// Testimonials data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "We've used several cybersecurity platforms, but none match Aivox's AI precision and speed. Their automated response prevented a major data breach, and the compliance tools made our audits effortless.",
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

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonial-area style-two position-relative z-1 overflow-hidden ptb-130">
        <div className="container style-one">
          <div className="row">
            <div className="col-lg-4">
              <div className="circle-text-wrap position-relative d-flex flex-column justify-content-center align-items-center rounded-circle me-auto">
                <Image
                  src="/images/trusted-client-white.png"
                  alt="clients"
                  width={291}
                  height={291}
                  className="circle-text d-lock mx-auto rotate"
                />
                <Image
                  src="/images/icons/quote-pink.svg"
                  alt="Icon"
                  width={73}
                  height={68}
                  className="position-absolute"
                />
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 ps-xxl-5 pe-xxl-0">
              <Swiper
                autoHeight={true}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="testimonial-slider-two ps-xxl-4"
              >
                {testimonialsData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-card style-two">
                      <p className="font-secondary fw-medium text-title">
                        <q>{testimonial.quote}</q>
                      </p>
                      <div className="client-info-wrap d-flex flex-wrap align-items-center">
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
                          <h5 className="fs-20 fw-medium text-black mb-0">
                            {testimonial.clientName}
                          </h5>
                          <span>{testimonial.clientTitle}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
