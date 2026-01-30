"use client";

import React, { useState } from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dynamic data for tabs
  const processSteps = [
    {
      id: 0,
      title: "Discover & Analyze",
      step: "01",
      heading: "Discover & Analyze",
      description:
        "We begin by understanding your business goals, challenges, and processes. Our team analyzes where AI automation and digital solutions can create the most impact.",
      chartValue: "24K+",
      chartText: "Start A Chat <br /> With Digital Solution",
      chartImage: "/images/about/chart-1.png",
      processImage: "/images/about/process-1.png",
    },
    {
      id: 1,
      title: "Design & Develop",
      step: "02",
      heading: "Design & Develop",
      description:
        "We design customized AI systems, websites, or automation workflows tailored to your needs. Every solution is built for performance, scalability, and efficiency.",
      chartValue: "14K+",
      chartText: "Start A Chat <br /> With Digital Solution",
      chartImage: "/images/about/chart-1.png",
      processImage: "/images/about/process-2.png",
    },
    {
      id: 2,
      title: "Deploy & Integrate",
      step: "03",
      heading: "Deploy & Integrate",
      description:
        "We seamlessly implement the solution into your existing systems, ensuring smooth integration with minimal disruption.",
      chartValue: "18K+",
      chartText: "Start A Chat <br /> With Digital Solution",
      chartImage: "/images/about/chart-1.png",
      processImage: "/images/about/process-3.png",
    },
    {
      id: 3,
      title: "Optimize & Support",
      step: "04",
      heading: "Optimize & Support",
      description:
        "Technology evolves — and so do we. We provide continuous monitoring, optimization, and support to keep your systems running at peak performance.",
      chartValue: "30K+",
      chartText: "Start A Chat <br /> With Digital Solution",
      chartImage: "/images/about/chart-1.png",
      processImage: "/images/about/process-4.png",
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="hw-area style-one position-relative z-1 ptb-130">
        <div className="container style-one">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center px-xxl-5">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-18"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                How It Works
              </span>
              <h2
                className="section-title style-one fw-medium text-center text-title mb-40 px-xxl-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                LEAD THE FUTURE, LEAVE THE REST BEHIND.
              </h2>
            </div>
          </div>

          <ul
            className="nav nav-tabs list-unstyled process-tablist d-flex align-items-center justify-content-between w-100 mb-50"
            role="tablist"
          >
            {processSteps.map((step) => (
              <li key={step.id} className="nav-item border-0">
                <button
                  onClick={() => handleTabClick(step.id)}
                  className={`nav-link fs-xxl-18 ${activeTab === step.id ? "active" : ""
                    }`}
                  type="button"
                >
                  {step.step}. {step.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content process-tab-content">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`tab-pane fade ${activeTab === step.id ? "show active" : ""
                  }`}
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 pe-xxl-2">
                    <div className="chart-box style-one position-relative overflow-hidden d-flex flex-wrap align-items-center justify-content-between round-10 mb-md-30">
                      <div>
                        <h6 className="fs-24 font-secondary fw-bold text-black mb-1">
                          {step.chartValue}
                        </h6>
                        <span
                          className="fs-15"
                          dangerouslySetInnerHTML={{ __html: step.chartText }}
                        />
                      </div>
                      <Image
                        src={step.chartImage}
                        alt="chart"
                        width={125}
                        height={79}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 ps-xxl-3">
                    <div className="process-card style-one">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="process-title d-flex flex-column justify-content-between">
                            <span className="process-counter font-secondary">
                              {step.step}
                            </span>
                            <div>
                              <h3 className="font-secondary fw-medium">
                                {step.heading}
                              </h3>
                              <p className="mb-0">{step.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 ps-xxl-0">
                          <div className="process-img d-flex flex-column align-items-center justify-content-center round-10">
                            <Image
                              src={step.processImage}
                              alt="process"
                              width={380}
                              height={340}
                              className="round-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
