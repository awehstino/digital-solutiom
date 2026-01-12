"use client";

import React, { useState } from "react";

const FaqContent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dynamic FAQ data
  const faqData = [
    {
      id: 1,
      question: "What types of AI software can you develop?",
      answer:
        "We build a wide range of AI software including machine learning models, NLP tools, recommendation engines, chatbots, computer vision systems, and full-stack AI varies based on complexity. A typical custom AI solution",
    },
    {
      id: 2,
      question: "How long does it take to build an AI solution?",
      answer:
        "The timeline varies based on complexity. A typical custom AI solution takes 3-9 months, depending on data requirements, model complexity, and integration needs. We provide detailed timelines during planning.",
    },
    {
      id: 3,
      question: "Can you integrate AI into our existing systems?",
      answer:
        "Absolutely. We specialize in integrating AI solutions with existing systems through APIs, microservices, and custom connectors. Our team ensures seamless compatibility with your current infrastructure.",
    },
    {
      id: 4,
      question: "Do I need large datasets for AI development?",
      answer:
        "Not necessarily. While more data generally improves model performance, we work with clients to optimize datasets through augmentation, transfer learning, and synthetic data generation techniques.",
    },
    {
      id: 5,
      question: "Is my data secure during development?",
      answer:
        "Yes, we implement enterprise-grade security measures including encryption, access controls, and secure development environments. We comply with GDPR, CCPA, and other data protection regulations.",
    },
    {
      id: 6,
      question: "What industries do you serve?",
      answer:
        "We serve diverse industries including healthcare, finance, retail, manufacturing, logistics, and entertainment. Our team has domain expertise to create industry-specific AI solutions.",
    },
    {
      id: 7,
      question: "What is the cost of AI software development?",
      answer:
        "Costs vary based on project scope and complexity. We offer flexible engagement models including fixed-price, time & materials, and dedicated teams. Contact us for a customized quote.",
    },
  ];

  return (
    <>
      <div className="container style-one ptb-130">
        <div className="row">
          <div className="col-xl-5 col-lg-6 mb-md-30">
            <div
              className="faq-bg bg-f d-flex flex-column justify-content-end round-10"
              style={{ backgroundImage: "url(/images/about/faq-bg.jpg)" }}
            >
              <h6 className="text-white">
                Answers to Frequently Asked Questions About Building Custom AI
                Solutions
              </h6>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="faq-box style-one round-10">
              <div className="accordion style-three">
                {faqData.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`accordion-item ${
                      activeIndex !== index ? "collapsed" : ""
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="accordion-button">
                        <span className="accord-arrow">
                          <i
                            className={`ri-arrow-down-s-fill plus ${
                              activeIndex === index ? "d-none" : ""
                            }`}
                          ></i>
                          <i
                            className={`ri-arrow-up-s-fill minus ${
                              activeIndex === index ? "" : "d-none"
                            }`}
                          ></i>
                        </span>
                        <span className="text_primary fw-semibold me-2">
                          {String(index + 1).padStart(2, "0")} .
                        </span>{" "}
                        {faq.question}
                      </div>
                    </div>
                    
                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p className="text-para fs-xx-14">{faq.answer}</p>
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

export default FaqContent;
