"use client";

import React, { useState } from "react";
import Image from "next/image";

const OurMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dynamic data object
  const missionData = {
    tabs: [
      {
        title: "Mission",
        content: [
          "To empower businesses with innovative digital solutions that streamline operations, enhance customer experiences, and accelerate sustainable growth.",
          "We are committed to delivering exceptional value through expertly crafted websites, optimized online presence, intelligent AI tools, and ongoing support — enabling our clients to focus on what they do best while we handle the digital landscape with precision and expertise.",
        ],
        image: "/images/about/mission-thumb.png",
      },
      {
        title: "Vision",
        content: [
          "To become Africa's leading digital transformation partner by 2030, setting the global standard for how small and medium enterprises leverage technology for exponential success.",
          "We envision a future where every business — from local startups to established brands — operates with seamless digital efficiency, powered by intelligent systems that anticipate needs, generate opportunities, and create lasting competitive advantages. Our ambition extends beyond Earth-bound solutions to pioneering AI-driven ecosystems that redefine business potential in the digital age and beyond.",
        ],
      },
    ],
    backgroundImage: "/images/about/mission-bg.jpg",
    experienceBox: {
      number: "5000+",
      text: "Successful Deployments",
    },
    heading:
      "We are a pioneering AI agency delivering intelligent automation",
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container style-one pb-130">
        <div className="row">
          <div className="col-lg-5  mb-30">
            <div className="vision-tab bg-f round-10">
              <ul className="nav nav-tabs list-unstyled vision-tablist d-flex align-items-center justify-content-start w-100 mb-20">
                {missionData.tabs.map((tab, index) => (
                  <li key={index} className="nav-item border-0">
                    <button
                      onClick={() => handleTabClick(index)}
                      className={`nav-link ${activeTab === index ? "active" : ""
                        }`}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content product-tab-content">
                {missionData.tabs[activeTab].content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {missionData.tabs[activeTab].image && (
                  <Image
                    src={missionData.tabs[activeTab].image}
                    alt="mission"
                    width={273}
                    height={278}
                    className="d-block mx-auto mt-5"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-7 mb-30">
            <div
              className="mission-bg bg-f position-relative overflow-hidden z-1 round-10"
              style={{ backgroundImage: `url(${missionData.backgroundImage})` }}
            >
              <div className="exp-box">
                <span className="font-secondary d-block text-white fw-semibold mb-20">
                  {missionData.experienceBox.number}
                </span>
                <p className="text-offwhite fw-semibold mb-0">
                  {missionData.experienceBox.text}
                </p>
              </div>
              <h4 className="fw-semibold text-white mb-0">
                {missionData.heading}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
