"use client";

import React, { useState } from "react";

const AnswerAllTheQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "How Much Does Ai Automation Services Cost?",
      content: (
        <>
          <p>
            Once you have a list of the core things your team does, create a
            list of supporting activities for that core activity.
          </p>
          <p>
            By leveraging AI automation for these activities should allow you to
            do more.
          </p>
        </>
      ),
    },
    {
      title: "How Long Does It Take To Build An AI Solution?",
      content: (
        <p>
          We recommend servicing your HVAC system at least once a year — ideally
          in the spring for air conditioning and in the fall for heating.
          Regular maintenance helps improve efficiency, reduce energy bills, and
          extend the life of your system.
        </p>
      ),
    },
    {
      title: "Is My Data Secured During Development?",
      content: (
        <p>
          We recommend servicing your HVAC system at least once a year — ideally
          in the spring for air conditioning and in the fall for heating.
          Regular maintenance helps improve efficiency, reduce energy bills, and
          extend the life of your system.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="single-para">
        <h4 className="font-secondary fw-medium">
          We&apos;re Here To Answer All Your Questions!
        </h4>
        <p>
          Artificial Intelligence refers to the development of computer systems
          that possess the ability to perform activities typically requiring
          human intelligence abilities!
        </p>
      </div>

      <div className="accordion style-two">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${
              activeIndex !== index ? "collapsed" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-button" style={{ cursor: "pointer" }}>
                <span className="accord-arrow">
                  <i className="ri-arrow-down-s-fill plus"></i>
                  <i className="ri-arrow-up-s-fill minus"></i>
                </span>
                {item.title}
              </div>
            </div>
            <div
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="accordion-body text-para fs-xx-14">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnswerAllTheQuestions;
