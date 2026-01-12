import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs: React.FC = () => {
  // Dynamic data for features
  const featuresData = [
    {
      id: 1,
      text: "Trusted By Global Industry Leaders",
    },
    {
      id: 2,
      text: "Cutting-Edge Robotics & AI Expertise",
    },
    {
      id: 3,
      text: "Scalable, Customizable Automation Solutions",
    },
    {
      id: 4,
      text: "24/7 Technical Support & Monitoring",
    },
    {
      id: 5,
      text: "Proven ROI and Performance Boost",
    },
    {
      id: 6,
      text: "Cloud & Edge Compatible",
    },
  ];

  return (
    <>
      <div className="wh-area style-three bg-f position-relative ptb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 pe-xxl-0">
              <div className="wh-img-wrap round-10 mb-md-30">
                <Image
                  src="/images/about/wh-img-3.jpg"
                  alt="why-choose-us"
                  width={570}
                  height={696}
                  className="round-10 w-00"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 ps-xxl-4">
              <div className="wh-content">
                <span className="d-block fs-14 fw-bold ls-15 text_primary mb-12">
                  WHY CHOOSE US
                </span>
                <h2 className="section-title style-one fw-medium text-title mb-10">
                  Proven Track Record Of Innovation, Efficiency, And Client
                  Satisfaction
                </h2>
                <p className="mb-30">
                  AI, we don&apos;t just deliver automation—we deliver
                  transformation. Our team combines deep expertise in robotics,
                  artificial intelligence,
                </p>

                <div className="row gx-xl-3 mb-35">
                  {featuresData.map((feature) => (
                    <div key={feature.id} className="col-md-6">
                      <div className="feature-item d-flex flex-wrap align-items-center bg-white round-10 mb-30">
                        <i className="ri-arrow-right-circle-line"></i>
                        <span className="fw-medium">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/login"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
