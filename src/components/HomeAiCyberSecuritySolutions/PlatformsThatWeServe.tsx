"use client";

import React, { useState } from "react";
import Image from "next/image";

const PlatformsThatWeServe: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("1");

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  // Dynamic data for accordion items
  const accordionData = [
    {
      id: "1",
      icon: "/images/icons/bank.svg",
      title: "Banks & Financial",
      content: [
        "We deliver tailored solutions for banks and financial institutions, including secure transaction systems, risk management, compliance automation, and digital banking platforms.",
      ],
    },
    {
      id: "2",
      icon: "/images/icons/cloud.svg",
      title: "Hybrid & Multi-cloud Systems",
      content: [
        "We help organizations design, deploy, and manage hybrid and multi-cloud infrastructures across AWS, Azure, and Google Cloud.",
        "Our approach ensures scalability, cost optimization, disaster recovery, and smooth workload migration between cloud providers.",
      ],
    },
    {
      id: "3",
      icon: "/images/icons/monitor.svg",
      title: "DevOps & CI/CD Pipelines",
      content: [
        "We implement DevOps practices and CI/CD pipelines to accelerate software delivery, reduce errors, and enable continuous integration and deployment.",
        "Our solutions include automated testing, monitoring, containerization (Docker, Kubernetes), and infrastructure as code.",
      ],
    },
    {
      id: "4",
      icon: "/images/icons/desktop.svg",
      title: "Endpoints & Mobile Devices",
      content: [
        "We provide endpoint and mobile device management solutions to secure laptops, desktops, smartphones, and tablets within your organization.",
        "Our services include device monitoring, patch management, mobile application security, and compliance enforcement to protect against threats.",
      ],
    },
  ];

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-xxl-5">
            <div className="platform-img round-10 pe-xxl-2 mb-md-30">
              <Image
                src="/images/about/platform-1.jpg"
                alt="platform"
                width={700}
                height={817}
                className="round-10"
              />
            </div>
          </div>

          <div className="col-lg-6 ps-xxl-3">
            <div className="platform-content">
              <span className="section-subtitle style-two fs-13 fw-medium ls-1 d-inline-block bg_secondary text-title round-oval mb-15">
                <Image
                  src="/images/icons/lock.svg"
                  alt="Icon"
                  width={12}
                  height={15}
                />
                PLATFORMS THAT WE SERVE
              </span>
              <h2 className="section-title style-one text-title fw-medium mb-10">
                Comprehensive Protection For Cloud, Hybrid, And On-premise
                Systems
              </h2>
              <p className="mb-25">
                Whether you&apos;re operating in the cloud, on-premise, or in
                hybrid environments, our AI-driven cybersecurity solution
                ensures consistent, real-time protectio
              </p>

              <div className="accordion style-one" id="accordionExample_one">
                {accordionData.map((item) => (
                  <div
                    key={item.id}
                    className={`accordion-item ${activeAccordion === item.id ? "" : "collapsed"
                      }`}
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={activeAccordion === item.id}
                    aria-controls={item.id}
                    role="button"
                  >
                    <div className="accordion-header">
                      <div className="accordion-button">
                        <span className="accord-arrow">
                          <i
                            className={`ri-arrow-down-s-fill plus ${activeAccordion === item.id ? "d-none" : "d-block"
                              }`}
                          ></i>
                          <i
                            className={`ri-arrow-up-s-fill minus ${activeAccordion === item.id ? "d-block" : "d-none"
                              }`}
                          ></i>
                        </span>
                        <span className="accord-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg-white">
                          {" "}
                          <Image
                            src={item.icon}
                            alt="Icon"
                            width={17}
                            height={17}
                          />
                        </span>
                        {item.title}
                      </div>
                    </div>

                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${activeAccordion === item.id ? "show" : ""
                        }`}
                    >
                      <div className="accordion-body text-para fs-xx-14">
                        {item.content.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformsThatWeServe;
