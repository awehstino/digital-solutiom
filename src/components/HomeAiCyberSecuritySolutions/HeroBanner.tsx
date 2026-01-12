"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  // State to track mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const heroAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroAreaRef.current) return;

      const heroArea = heroAreaRef.current;
      const rect = heroArea.getBoundingClientRect();

      // Calculate mouse position relative to the hero area
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate percentage position within the hero area (0 to 1)
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;

      // Calculate movement (negative for parallax effect)
      // Adjust the multiplier (20) to control the movement intensity
      const moveX = (xPercent - 0.5) * -20;
      const moveY = (yPercent - 0.5) * -20;

      setPosition({ x: moveX, y: moveY });
    };

    const heroArea = heroAreaRef.current;
    if (heroArea) {
      heroArea.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroArea) {
        heroArea.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div
        className="hero-area style-two bg-f position-relative overflow-hidden round-10 z-1"
        ref={heroAreaRef}
      >
        <Image
          src="/images/hero/section-shape-1.png"
          alt="Shape"
          width={1893}
          height={956}
          className="section-shape position-absolute bottom-0 start-0 w-100 z-n1"
        />
        <span className="blur-text style-one position-absolute z-0">
          CYBERSECURITY
        </span>
        <span className="blur-text style-two position-absolute z-2">
          SOLUTION
        </span>

        <div className="container-fluid position-relative px-xl-5">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="hero-content">
                <h6
                  className="section-subtitle style-two bg_secondary fs-13 fw-semibold ls-1 text-black d-inline-block bg_primary round-oval mb-10"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <Image
                    src="/images/icons/lock.svg"
                    alt="Icon"
                    width={12}
                    height={15}
                  />
                  SMARTER SECURITY, POWERED BY AI!
                </h6>
                <h1
                  className="font-secondary fw-medium text-black"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  AI-Powered{" "}
                  <span className="text_primary fw-bold">Cybersecurity</span>{" "}
                  For A Safer Digital World
                </h1>
                <p
                  className="mb-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Protect your business with real-time threat detection,
                  predictive analytics, and autonomous defense systems
                </p>
              </div>
            </div>
          </div>

          <div
            className="hero-img-wrap moveContent"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src="/images/hero/hero-img-2.png"
              alt="hero"
              width={1309}
              height={956}
              className="hero-img d-block position-relative z-1"
            />
            <span className="blur-text">AI</span>

            <div className="circle-text-wrap rounded-circle">
              <span
                className="position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle transition"
                style={{ backgroundColor: "#d4ff12" }}
              >
                <Image
                  src="/images/icons/up-right-arrow.svg"
                  alt="Icon"
                  width={19}
                  height={19}
                  className="transition"
                />
              </span>
              <Image
                src="/images/hero/circle-text.svg"
                alt="circle"
                width={227}
                height={231}
                className="circle-text d-block mx-auto rotate"
              />
              <Link
                href="/contact"
                className="position-absolute top-0 start-0 w-100 h-100 z-1"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
