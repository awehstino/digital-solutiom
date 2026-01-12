import React from "react";
import Image from "next/image";

// Define the feature card type
type FeatureCard = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

// Define the Features data structure
type FeaturesData = {
  subtitle: {
    icon: string;
    text: string;
  };
  title: string;
  features: FeatureCard[];
  lineShape: {
    src: string;
  };
};

// Features data
const featuresData: FeaturesData = {
  subtitle: {
    icon: "/images/icons/lock.svg",
    text: "AIVOX AI CYBERSECURITY FEATURES",
  },
  title: "Zero Trust Access Control For Safer User Authentication & Access",
  features: [
    {
      id: 1,
      icon: "/images/icons/ransomeware.svg",
      title: "Real-Time Threat Detection",
      description:
        "Real-time scanning and pattern recognition to evolving in threats before.",
    },
    {
      id: 2,
      icon: "/images/icons/security.svg",
      title: "Predictive Risk Analytics",
      description:
        "Automatically contain and neralize cyberattacks minimal human intervention.",
    },
    {
      id: 3,
      icon: "/images/icons/unlocking.svg",
      title: "Autonomous Incident Response",
      description:
        "Comprehensive protection for AWS Azure Google Cloud & hybrid environments.",
    },
    {
      id: 4,
      icon: "/images/icons/phishing.svg",
      title: "Security Analytics Dashboard",
      description:
        "Centralized visibility into threats performance & metrics in real time.",
    },
  ],
  lineShape: {
    src: "/images/line-shape.png",
  },
};

const Features: React.FC = () => {
  return (
    <>
      <div className="container style-one pt-130 pb-100">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 text-center px-xxl-5">
            <span className="section-subtitle style-two bg_secondary fs-13 fw-medium ls-1 text-black d-inline-block bg_primary round-oval mb-15">
              <Image
                src={featuresData.subtitle.icon}
                alt="Icon"
                width={12}
                height={15}
              />
              {featuresData.subtitle.text}
            </span>
            <h2 className="section-title style-one font-secondary fw-medium text-center mb-40">
              {featuresData.title}
            </h2>
          </div>
        </div>

        <div className="row justify-content-center position-relative z-1">
          <Image
            src={featuresData.lineShape.src}
            alt="Shape"
            width={1296}
            height={88}
            className="feature-card-shape position-absolute top-0 start-0 d-xl-block d-none z-n1"
          />

          {featuresData.features.map((feature, index) => (
            <div
              key={feature.id}
              className={`col-xxl-3 col-xl-3 col-md-6 ${index === 0
                  ? "pe-xxl-5"
                  : index === 1
                    ? "ps-xxl-5 pe-xxl-4"
                    : index === 2
                      ? "ps-xxl-5 pe-xxl-4"
                      : "ps-xxl-5 pe-xxl-4"
                }`}
            >
              <div className="feature-card style-two mb-30">
                <div className="feature-icon d-flex flex-column align-items-center justify-content-center position-relative z-1 round-10">
                  <Image
                    src={feature.icon}
                    alt="Icon"
                    width={37}
                    height={37}
                    className="transition"
                  />
                </div>
                <h3 className="fs-20 fw-semibold pe-xxl-5">{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
