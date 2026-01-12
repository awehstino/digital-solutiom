import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  // Dynamic data for features
  const featuresData = [
    {
      id: 1,
      icon: "/images/features/automation.svg",
      title: "AI-Powered Automation",
      description: "Automate complex workflows with machine learning algorithms optimize performance and decision"
    },
    {
      id: 2,
      icon: "/images/features/system-integration.svg",
      title: "Seamless System Integration",
      description: "Our solutions integrate effortlessly with existing hardware, software, and infrastructure—minimizing"
    },
    {
      id: 3,
      icon: "/images/features/analytics.svg",
      title: "Real-Time Monitoring & Analytics",
      description: "Track performance, detect anomalies, and predict failures through intuitive dashboards and smart data"
    },
    {
      id: 4,
      icon: "/images/features/modular-design.svg",
      title: "Scalable & Modular Design",
      description: "Whether for a single machine or a full-scale operation, our modular systems scale with your business growth."
    }
  ];

  return (
    <>
      <div className="container style-one">
        <div className="row">
          <div className="col-xxl-6 col-lg-7 mb-md-30">
            <div className="row">
              {featuresData.map((feature) => (
                <div key={feature.id} className="col-md-6">
                  <div className="feature-card style-three mb-45">
                    <Image
                      src={feature.icon}
                      alt="Icon"
                      width={34}
                      height={34}
                      className="feature-icon"
                    />
                    <h3 className="fs-20 fw-semibold text-title">
                      {feature.title}
                    </h3>
                    <p className="mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xxl-5 offset-xxl-1 col-lg-5 ps-xxl-4 pe-xxl-0">
            <span className="section-subtitle style-three fs-14 fw-bold ls-15 d-inline-block text_primary mb-15">
              FEATURES
            </span>
            <h2 className="section-title style-one fw-medium text-title mb-20">
              User-Friendly Interfaces For Maximum Control And Flexibility
            </h2>
            <Image
              src="/images/features/feature-6.png"
              alt="feature"
              width={384}
              height={419}
              className="feature-img d-block ms-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;