import React from "react";

const HowItWorks: React.FC = () => {
  // Dynamic data for process steps
  const processSteps = [
    {
      id: 1,
      letter: "D",
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We begin with in-depth discussions understand business operational needs.",
    },
    {
      id: 2,
      letter: "S",
      number: "02",
      title: "Support & Scaling",
      description:
        "We begin with in-depth discussions understand business operational needs.",
    },
    {
      id: 3,
      letter: "T",
      number: "03",
      title: "Testing & Optimization",
      description:
        "We begin with in-depth discussions understand business operational needs.",
    },
    {
      id: 4,
      letter: "I",
      number: "04",
      title: "Integration & Development",
      description:
        "We begin with in-depth discussions understand business operational needs.",
    },
  ];

  return (
    <>
      <div className="container style-one pt-130 pb-100">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-md-10 text-center">
            <span className="d-block fs-14 fw-bold ls-15 text_primary mb-12">
              HOW IT WORKS
            </span>
            <h2 className="section-title style-one fw-medium text-center text-title mb-30">
              Custom AI Robotics Solutions Are Unique Workflow
            </h2>
          </div>
        </div>
        <div className="row justify-content-center process-card-wrap">
          {processSteps.map((step) => (
            <div key={step.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="process-card style-two mb-30">
                <div className="process-counter-wrap d-flex flex-wrap align-items-center justify-content-between">
                  <span className="process-counter-name">{step.letter}</span>
                  <span className="process-counter bg_primary d-flex flex-column align-items-center justify-content-center rounded-circle">
                    {step.number}
                  </span>
                </div>
                <h3 className="fs-20 fw-semibold mb-15">{step.title}</h3>
                <p className="pe-xxl-5 mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
