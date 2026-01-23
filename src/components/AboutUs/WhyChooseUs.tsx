import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs: React.FC = () => {
  // Dynamic data object
  const whyChooseData = {
    subtitle: "WHY CHOOSE erprises For Scalable, Automated Cyber Defense",
    description:
      "We believe cybersecurity should be smart, seamless, and scalable Our AI-powered platform continuously analyzes data",
    features: [
      {
        icon: "/images/icons/shield-pink.svg",
        text: "Scalable Across Environments",
      },
      {
        icon: "/images/icons/compliance-pink.svg",
        text: "Built-In Compliance Support",
      },
      {
        icon: "/images/icons/folder-pink.svg",
        text: "Centralized Security Dashboard",
      },
      {
        icon: "/images/icons/encrypted.svg",
        text: "Behavior-Based Monitoring",
      },
      {
        icon: "/images/icons/lock-pink.svg",
        text: "Minimal Resource Footprint",
      },
      {
        icon: "/images/icons/sensor-pink.svg",
        text: "Autonomous Incident Response",
      },
    ],
    button: {
      text: "Explore Our Security Advantage",
      icon: "/images/icons/right-arrow-black.svg",
      link: "/login",
    },
    shapes: {
      left: {
        src: "/images/box-shape-2.png",
        width: 228,
        height: 473,
      },
      right: {
        src: "/images/box-shape-3.png",
        width: 365,
        height: 403,
      },
    },
  };

  return (
    <>
      <div className="wh-area style-four bg_primary position-relative z-1 round-20 pb-100">
        <Image
          src={whyChooseData.shapes.left.src}
          alt="Shape"
          width={whyChooseData.shapes.left.width}
          height={whyChooseData.shapes.left.height}
          className="section-shape-one position-absolute bottom-0 start-0 z-n1"
        />
        <Image
          src={whyChooseData.shapes.right.src}
          alt="Shape"
          width={whyChooseData.shapes.right.width}
          height={whyChooseData.shapes.right.height}
          className="section-shape-two position-absolute top-0 end-0 z-n1"
        />

        <div className="container-fluid style-two">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 pe-xxl-5 ps-xxl-3">
              <div className="wh-bg bg-f bg-2 round-10"></div>
            </div>
            <div className="col-xl-5 col-lg-6 ps-xxl-5">
              <div className="wh-content mb-md-30">
                <span className="section-subtitle d-inline-block text_secondary fw-bold fs-14 ls-15 mb-12">
                  {whyChooseData.subtitle}
                </span>
                <h2 className="section-title style-one font-secondary fw-medium text-white mb-15">
                  {whyChooseData.title}
                </h2>
                <p className="text-offwhite mb-30">
                  {whyChooseData.description}
                </p>

                <ul className="feature-list d-flex flex-wrap list-unstyled mb-10 w-xxl-75">
                  {whyChooseData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="position-relative fw-semibold text-white"
                    >
                      <span className="d-flex flex-column align-items-center justify-content-center rounded-circle">
                        <Image
                          src={feature.icon}
                          alt="Icon"
                          width={14}
                          height={18}
                        />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={whyChooseData.button.link}
                  className="btn style-one text-white fw-semibold position-relative round-oval"
                >
                  {whyChooseData.button.text}
                  <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src={whyChooseData.button.icon}
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
