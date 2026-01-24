"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  const heroAreaRef = useRef<HTMLDivElement>(null);
  const statBoxRefs = useRef<Array<HTMLDivElement | null>>(Array(4).fill(null));

  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const storedVisitors = localStorage.getItem("visitor_count");
    const initialCount = storedVisitors ? parseInt(storedVisitors) : 0;
    const newCount = initialCount + 1;
    localStorage.setItem("visitor_count", newCount.toString());
    setVisitors(newCount);
  }, []);

  useEffect(() => {
    const heroArea = heroAreaRef.current;
    if (!heroArea) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroArea.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5, 0.5]
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const factor = 40;
      const offsetX = x * factor;
      const offsetY = y * factor;

      statBoxRefs.current.forEach((box) => {
        if (box) {
          box.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    };

    const handleMouseLeave = () => {
      statBoxRefs.current.forEach((box) => {
        if (box) {
          box.style.transform = "translate(0, 0)";
        }
      });
    };

    heroArea.addEventListener("mousemove", handleMouseMove);
    heroArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroArea.removeEventListener("mousemove", handleMouseMove);
      heroArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={heroAreaRef}
        className="hero-area style-one position-relative overflow-hidden z-1"
      >
        <span className="br-one position-absolute top-0 start-0 w-100 h-100"></span>

        <Image
          src="/images/hero/hero-bg-shape.png"
          alt="Shape"
          width={1454}
          height={998}
          className="hero-section-shape position-absolute z-0"
        />
        <Image
          src="/images/hero/hero-shape-1.png"
          alt="Shape"
          width={207}
          height={191}
          className="hero-shape-one position-absolute start-0 z-0"
        />
        <Image
          src="/images/hero/hero-shape-2.png"
          alt="Shape"
          width={268}
          height={197}
          className="hero-shape-two position-absolute end-0 z-0"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="hero-content text-center position-relative z-1">
                <span
                  className="section-subtitle d-inline-block fs-16 fw-semibold text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Unleash Smarter Workflows with digital solution
                </span>

                <h1
                  className="text-white font-secondary fw-normal"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Empower Your Business With Scalable{" "}
                  <span className="d-block fw-bold text_secondary">
                    {" "}
                    Digital Solutions
                  </span>
                </h1>

                <div
                  className="btn-wrap"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {/* <Link
                    href="/contact"
                    className="btn style-nine fw-semibold position-relative round-oval"
                  >
                    Start Free Trial
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
                    href="/checkout"
                    className="btn style-ten fw-semibold position-relative round-oval"
                  >
                    How It Works
                    <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                      <Image
                        src="/images/icons/right-arrow-white.svg"
                        alt="Icon"
                        width={18}
                        height={16}
                      />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Box 1 */}
        <div
          ref={(el) => {
            statBoxRefs.current[0] = el;
          }}
          className="stat-box style-one d-flex flex-wrap align-items-center round-12 moveContent"
        >
          <Image
            src="/images/hero/slack.png"
            alt="Icon"
            width={39}
            height={39}
          />
          <div>
            <p className="fs-15 fw-medium text-offwhite mb-0">
              Total Projects
            </p>
            <span className="fs-20 fw-bold text-white">50+</span>
          </div>
        </div>

        {/* Start Box 2 */}
        <div
          ref={(el) => {
            statBoxRefs.current[1] = el;
          }}
          className="stat-box style-two moveContent"
        >
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-10">
            <span className="fs-13 fw-bold text-white">Revenue Growth</span>
            <span>Daily</span>
          </div>
          <Image
            src="/images/hero/chart.png"
            alt="chart"
            width={158}
            height={67}
          />
        </div>

        {/* Start Box 3 */}
        <div
          ref={(el) => {
            statBoxRefs.current[2] = el;
          }}
          className="stat-box style-three moveContent"
        >
          <span className="fs-13 fw-semibold text-white d-block mb-2">
            Data Analytics
          </span>
          <Image
            src="/images/hero/graph.png"
            alt="chart"
            width={244}
            height={124}
          />
        </div>

        {/* Start Box 4 */}
        <div
          ref={(el) => {
            statBoxRefs.current[3] = el;
          }}
          className="stat-box style-four moveContent"
        >
          <div className="stat-box-one">
            <span className="fs-13 fw-semibold text-white mb-1">
              Sales Stats
            </span>
            <Image
              src="/images/hero/pie-chart.png"
              alt="Chart"
              width={144}
              height={82}
            />
          </div>
          <div className="stat-box-two d-flex flex-column align-items-center justify-content-center text-center">
            <span className="fs-13 lh-1 mb-1 fw-semibold text-white mb-0">
              Total Visitors
            </span>
            <h6 className="fw-bold text_secondary mb-0">{visitors}+</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
