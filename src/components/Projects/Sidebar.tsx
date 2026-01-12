import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  // Dynamic data for project information
  const projectInfo = [
    { label: "Category:", value: "Robotics" },
    { label: "Client:", value: "Sandra Thompson" },
    { label: "Start Date:", value: "20/07/2025" },
    { label: "Ending:", value: "30/09/2025" },
    { label: "Location:", value: "South United Kingdom" },
    { label: "Duration:", value: "2 Months" },
    { label: "Budget:", value: "$4000.00" },
    { label: "Website:", value: "www.aivox.com" },
  ];

  // Dynamic data for promo widget
  const promoWidget = {
    backgroundImage: "/images/promo-bg.jpg",
    title: "AI Strategy And Consulting",
    titleLink: "/services/details",
    description:
      "In today's fast-paced and data-driven world, businesses are constantly seeking innovative",
  };

  return (
    <>
      <div className="sidebar mt-lg-50">
        <div className="sidebar-widget round-10 mb-35">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Project Information
          </h3>
          <ul className="feature-list style-two list-unstyled mb-0">
            {projectInfo.map((item, index) => (
              <li key={index} className="position-relative">
                <span className="text-title fw-medium me-1">{item.label}</span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="promo-widget style-one bg-f d-flex flex-column justify-content-end align-items-start round-10"
          style={{
            backgroundImage: `url(${promoWidget.backgroundImage})`,
          }}
        >
          <h3 className="fw-semibold text-white">
            <Link
              href={promoWidget.titleLink}
              className="text-white link-hover-white transition"
            >
              {promoWidget.title}
            </Link>
          </h3>
          <p className="text-offwhite mb-0">{promoWidget.description}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
