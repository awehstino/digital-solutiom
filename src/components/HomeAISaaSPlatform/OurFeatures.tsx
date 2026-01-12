import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurFeatures: React.FC = () => {
  // Dynamic features data
  const features = [
    {
      id: 1,
      image: "/images/features/feature-1.png",
      title: "AI-Powered Workflow Automation",
      description:
        "Automate time-consuming tasks and streamline complex processes with intelligent.",
      link: "/about-us",
    },
    {
      id: 2,
      image: "/images/features/feature-2.png",
      title: "Real-Time Predictive Analytics",
      description:
        "Visualize trends, detect anomalies & make data-backed decisions using advanced machine",
      link: "/about-us",
    },
    {
      id: 3,
      image: "/images/features/feature-3.png",
      title: "Scalable & Secure Cloud Infrastructure",
      description:
        "Deploy with confidence on a platform built for high availability, encrypted data within time",
      link: "/about-us",
    },
    {
      id: 4,
      image: "/images/features/feature-4.png",
      title: "Seamless Data Integration Process",
      description:
        "Visualize and organize complex datasets making data connections clearer for faster, informed",
      link: "/about-us",
    },
  ];

  return (
    <>
      <div className="feature-area style-one position-relative z-1 pt-130 pb-100">
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-6 text-center">
              <span
                className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-15"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Our Features
              </span>
              <h2
                className="section-title style-one fw-medium text-title mb-40"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Our AI-Powered Workflow Engine For Maximum Efficiency & Speed
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid px-xxl-5 position-relative z-1">
          <div className="row justify-content-center gx-xl-3">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="col-xxl-3 col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="feature-card style-one bg-white round-10 mb-30">
                  <div className="feature-img d-flex flex-column align-items-center justify-content-center round-10">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={280}
                      height={228}
                      className="d-block mx-auto"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="feature-info">
                    <h3 className="font-secondary fw-medium text-title">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                    <Link
                      href={feature.link}
                      className="link style-two fw-semibold"
                    >
                      Explore Features<i className="ri-arrow-right-line"></i>
                    </Link>
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

export default OurFeatures;
