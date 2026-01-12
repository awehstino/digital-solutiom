import React from "react";

const MovingText: React.FC = () => {
  // Dynamic data array - you can easily modify this to change content
  const movingTexts = [
    "AN AI-FIRST PLATFORM BUILT TO AUTOMATE, ANALYZE, AND ACCELERATE YOUR BUSINESS OPERATIONS",
    "AN AI-FIRST PLATFORM BUILT TO AUTOMATE, ANALYZE, AND ACCELERATE YOUR BUSINESS OPERATIONS",
    "AN AI-FIRST PLATFORM BUILT TO AUTOMATE, ANALYZE, AND ACCELERATE YOUR BUSINESS OPERATIONS",
  ];

  return (
    <>
      <div className="move-text-wrapper overflow-hidden mb-120">
        <div className="move-text style-seven position-relative z-1">
          <ul className="list-unstyled mb-0">
            {movingTexts.map((text, index) => (
              <li
                key={index}
                className="position-relative font-secondary fw-normal"
              >
                {text}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovingText;
