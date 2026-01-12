import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the feature item type
type FeatureItem = {
  id: number;
  icon: string;
  text: string;
};

// Define the component data structure
type WhyChooseUsData = {
  subtitle: {
    icon: string;
    text: string;
  };
  title: string;
  description: string;
  features: FeatureItem[];
  button: {
    text: string;
    link: string;
    icon: string;
  };
  backgroundImage: string;
  sectionShapes: {
    shape1: {
      src: string;
    };
    shape2: {
      src: string;
    };
  };
};

// Component data
const whyChooseUsData: WhyChooseUsData = {
  subtitle: {
    icon: "/images/icons/lock.svg",
    text: "WHY CHOOSE AIVOX",
  },
  title: "Trusted By Enterprises For Scalable, Automated Cyber Defense",
  description:
    "We believe cybersecurity should be smart, seamless, and scalable Our AI-powered platform continuously analyzes data",
  features: [
    {
      id: 1,
      icon: "/images/icons/shield-pink.svg",
      text: "Scalable Across Environments",
    },
    {
      id: 2,
      icon: "/images/icons/compliance-pink.svg",
      text: "Built-In Compliance Support",
    },
    {
      id: 3,
      icon: "/images/icons/folder-pink.svg",
      text: "Centralized Security Dashboard",
    },
    {
      id: 4,
      icon: "/images/icons/encrypted.svg",
      text: "Behavior-Based Monitoring",
    },
    {
      id: 5,
      icon: "/images/icons/lock-pink.svg",
      text: "Minimal Resource Footprint",
    },
    {
      id: 6,
      icon: "/images/icons/sensor-pink.svg",
      text: "Autonomous Incident Response",
    },
  ],
  button: {
    text: "Explore Our Security Advantage",
    link: "/login",
    icon: "/images/icons/right-arrow-black.svg",
  },
  backgroundImage: "/images/about/wh-img-2.jpg",

  sectionShapes: {
    shape1: {
      src: "/images/box-shape-2.png",
    },
    shape2: {
      src: "/images/box-shape-3.png",
    },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="wh-area style-two bg_primary position-relative z-1 overflow-hidden round-20">
        <Image
          src={whyChooseUsData.sectionShapes.shape1.src}
          alt="Shape"
          width={268}
          height={473}
          className="section-shape-one position-absolute bottom-0 start-0 z-n1"
        />
        <Image
          src={whyChooseUsData.sectionShapes.shape2.src}
          alt="Shape"
          width={365}
          height={403}
          className="section-shape-two position-absolute top-0 z-n1"
        />

        <div className="container-fluid style-one">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="wh-content mb-md-30">
                <span className="section-subtitle style-two bg_secondary fs-13 fw-medium ls-1 text-black d-inline-block bg_primary round-oval mb-12">
                  <Image
                    src={whyChooseUsData.subtitle.icon}
                    alt="Icon"
                    width={12}
                    height={15}
                  />
                  {whyChooseUsData.subtitle.text}
                </span>
                <h2 className="section-title style-one font-secondary fw-medium text-white mb-15">
                  {whyChooseUsData.title}
                </h2>
                <p className="text-offwhite mb-30">
                  {whyChooseUsData.description}
                </p>
                <ul className="feature-list d-flex flex-wrap list-unstyled mb-10 w-xxl-75">
                  {whyChooseUsData.features.map((feature) => (
                    <li
                      key={feature.id}
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
                  href={whyChooseUsData.button.link}
                  className="btn style-one text-white fw-semibold position-relative round-oval"
                >
                  {whyChooseUsData.button.text}
                  <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                    <Image
                      src={whyChooseUsData.button.icon}
                      alt="Icon"
                      width={18}
                      height={16}
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 ps-xxl-5">
              <div
                className="wh-bg bg-f round-10"
                style={{
                  backgroundImage: `url(${whyChooseUsData.backgroundImage})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
