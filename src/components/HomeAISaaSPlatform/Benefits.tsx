import React from "react";
import Image from "next/image";
import Link from "next/link";

const Benefits: React.FC = () => {
  // Dynamic data for features
  const features = [
    {
      id: 1,
      title: "Save Time With Smart Automation",
      description:
        "Minate repetitive tasks and streamline workflows to boost team productivity.",
    },
    {
      id: 2,
      title: "Make Data-Driven Decisions Faster",
      description:
        "Leverage real-time insights and predictive analytics to stay ahead of the curve.",
    },
    {
      id: 3,
      title: "Integrate Seamlessly With Your Tools",
      description:
        "Connect effortlessly to your existing software stack using secure APIs and connectors.",
    },
  ];

  return (
    <>
      <div className="benefit-area style-one position-relative ptb-130 z-1">
        <div className="container style-one position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-xxl-4">
              <div className="benefit-img-wrap round-10 mb-md-30">
                <Image
                  src="/images/about/benefit-1.png"
                  alt="benefit"
                  width={410}
                  height={484}
                  className="d-block mx-auto round-10"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-xxl-5 pe-xxl-0">
              <div className="benefit-content ps-xxl-3">
                <span
                  className="section-subtitle style-one fw-semibold d-inline-block bg_primary text-white round-oval mb-18"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Your Benefits
                </span>
                <h2 className="section-title style-one fw-medium text-title">
                  Discover The Core Benefits That Make Aivox AI A Smarter
                  Business Choice
                </h2>
                <p className="mb-30">
                  Aivox AI delivers real, measurable impact for businesses of
                  all sizes. By combining intelligent automation, real-time
                  analytics, & seamless integration.
                </p>

                <div className="feature-list-wrap list-unstyled pe-xxl-5 me-xxl-5">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="feature-list position-relative"
                    >
                      <span className="d-flex flex-column align-items-center justify-content-center rounded-circle position-absolute start-0">
                        <i className="ri-check-fill"></i>
                      </span>
                      <h5 className="fs-18 fw-semibold text-title">
                        {feature.title}
                      </h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/login"
                  className="btn style-one fw-semibold position-relative round-oval"
                >
                  Start Free Trial{" "}
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
        </div>
      </div>
    </>
  );
};

export default Benefits;
