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
      "E-commerce setup + AI content tools doubled sales first month, now 3x growth. They handle the tech, I focus on business. Worth every kobo!",
    clientName: "Michael James",
    clientTitle: "Entreprenuer",
    clientImage: "/images/clients/client-1.jpg",
  },
  {
    id: 2,
    quote:
      "Zero skills online → learned website flips, AI content hacks, and client closing from Digital Solution Planet. Landed my first ₦450k gig in 6 weeks. These guys don’t teach theory — they drop real bags. Thank you boss!",
    clientName: "Chioma Nwosu",
    clientTitle: "Freelancer",
    clientImage: "/images/clients/client-2.jpg",
  },
  {
    id: 3,
    quote:
      "Before Digital Solution, my shop relied on walk-ins and WhatsApp flyers — Contacted The Team. Now revenue is up over 150% in three months. Best investment I ever made — no cap, these guys deliver.",
    clientName: "Tunde Adebayo",
    clientTitle: "Founder & CEO",
    clientImage: "/images/clients/client-3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonial-area style-four position-relative z-1 ptb-130">
        <div className="container style-one">
          <div className="row">
            <div className="col-lg-4">
              <div className="circle-text-wrap position-relative d-flex flex-column justify-content-center align-items-center rounded-circle me-auto">
                <Image
                  src="/images/trusted-client-white.png"
                  alt="trusted-client"
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
