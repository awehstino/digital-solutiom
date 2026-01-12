import React from "react";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar mt-lg-50">
        <div className="sidebar-widget round-10">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Job Description
          </h3>
          <ul className="feature-list style-one list-unstyled mb-0">
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">Job Title:</span>
              Machine Learning Engineer{" "}
            </li>
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">Location:</span> South
              Africa
            </li>
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">Job Type:</span>{" "}
              Full-Time
            </li>
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">Salary:</span> 55K
            </li>
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">
                Deadline job application:
              </span>{" "}
              July 2, 2025
            </li>
            <li className="position-relative">
              <i className="ri-arrow-right-line"></i>
              <span className="fw-medium text-title me-1">
                Department:
              </span>{" "}
              Engineering & AI Lab
            </li>
          </ul>
        </div>

        <div className="sidebar-widget round-10">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-black mb-20">
            Get Direction
          </h3>
          <div className="comp-map style-one w-100 round-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
