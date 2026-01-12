"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Define the brand data structure
type Brand = {
  id: number;
  src: string;
  alt: string;
};

// Brands data
const brandsData: Brand[] = [
  { id: 1, src: "/images/brand/brand-1.svg", alt: "Brand 1" },
  { id: 2, src: "/images/brand/brand-2.svg", alt: "Brand 2" },
  { id: 3, src: "/images/brand/brand-3.svg", alt: "Brand 3" },
  { id: 4, src: "/images/brand/brand-4.svg", alt: "Brand 4" },
  { id: 5, src: "/images/brand/brand-5.svg", alt: "Brand 5" },
  { id: 6, src: "/images/brand/brand-6.svg", alt: "Brand 6" },
  { id: 7, src: "/images/brand/brand-7.svg", alt: "Brand 7" },
  { id: 8, src: "/images/brand/brand-8.svg", alt: "Brand 8" },
  { id: 9, src: "/images/brand/brand-1.svg", alt: "Brand 1" },
  { id: 10, src: "/images/brand/brand-3.svg", alt: "Brand 3" },
  { id: 11, src: "/images/brand/brand-4.svg", alt: "Brand 4" },
  { id: 12, src: "/images/brand/brand-5.svg", alt: "Brand 5" },
];

const Brands: React.FC = () => {
  return (
    <>
      <div className="container style-two ptb-130">
        <Swiper
          loop={false}
          speed={15000}
          spaceBetween={40}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            576: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 4.5,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 8,
            },
          }}
          modules={[Autoplay]}
          className="brand-slider-one"
        >
          {brandsData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="brand-logo style-one">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={100}
                  height={50}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="d-block mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
