"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  // State to track mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    // Calculate movement values (opposite direction of mouse)
    const moveX = (x - rect.width / 2) / 20;
    const moveY = (y - rect.height / 2) / 20;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Reset position when mouse leaves
  };

  return (
    <>
      <div
        className="hero-area style-three bg-f position-relative"
        style={{
          top: "-15px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-fluid position-relative z-1 px-lg-5">
          <div className="row align-items-xxl-start align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h6
                  className="section-subtitle d-inline-block fs-13 fw-semibold ls-1 bg_secondary text-black round-oval"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  EMPOWERING INDUSTRIES WITH SMART ROBOTICS
                </h6>

                <h1
                  className="font-secondary fw-normal text-black"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Businesses With Precision{" "}
                  <span className="fw-bold">Robotics And AI</span> Integration
                </h1>

                <div
                  className="btn-wrap"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <Link
                    href="/contact"
                    className="btn style-three fw-semibold position-relative round-oval"
                  >
                    Get A Free Consultation
                    <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                      <Image
                        src="/images/icons/right-arrow-white.svg"
                        alt="Icon"
                        width={18}
                        height={16}
                      />
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="btn style-four fw-semibold position-relative round-oval"
                  >
                    Explore Our Solutions
                    <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                      <Image
                        src="/images/icons/right-arrow-black.svg"
                        alt="Icon"
                        width={18}
                        height={16}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-img-wrap position-relative z-1"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src="/images/hero/half-circle.png"
                  alt="Shape"
                  width={77}
                  height={72}
                  className="half-circle position-absolute rotate"
                />
                <Image
                  src="/images/hero/hero-img-3.png"
                  alt="hero"
                  width={728}
                  height={680}
                  className="d-block me-auto moveContent"
                />
              </div>
            </div>
          </div>

          <ul className="social-profile list-unstyled mb-0">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="d-flex flex-column align-items-center justify-content-center rounded-circle"
              >
                FACEBOOK
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="d-flex flex-column align-items-center justify-content-center rounded-circle"
              >
                TWITTER
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="d-flex flex-column align-items-center justify-content-center rounded-circle"
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
